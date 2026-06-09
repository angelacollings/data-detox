<?php
declare(strict_types=1);

const RECIPIENT_EMAIL = 'hello@datadetox.co.nz';
const SITE_NAME = 'Data Detox';
const FROM_EMAIL = 'hello@datadetox.co.nz';
const DEFAULT_SMTP_HOST = 'smtpd';
const DEFAULT_SMTP_PORT = 25;
const MAX_POST_BYTES = 12000;
const RATE_LIMIT_MAX_SUBMISSIONS = 5;
const RATE_LIMIT_WINDOW_SECONDS = 3600;
const RATE_LIMIT_MIN_SECONDS = 20;

function send_response(int $status, string $title, string $message): never
{
    http_response_code($status);
    header('Content-Type: text/html; charset=utf-8');
    header('X-Content-Type-Options: nosniff');
    header('Referrer-Policy: strict-origin-when-cross-origin');
    header('Cache-Control: no-store');

    $safeTitle = htmlspecialchars($title, ENT_QUOTES, 'UTF-8');
    $safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

    echo <<<HTML
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>{$safeTitle} | Data Detox</title>
    <style>
      body {
        margin: 0;
        font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: #f6f7fb;
        color: #0f172a;
        line-height: 1.5;
      }
      main {
        max-width: 640px;
        margin: 0 auto;
        padding: 80px 20px;
      }
      section {
        background: #fff;
        border: 1px solid #e6e9ef;
        border-radius: 8px;
        padding: 28px;
        box-shadow: 0 6px 20px rgba(15, 23, 42, 0.06);
      }
      h1 {
        margin: 0 0 12px;
        font-size: 28px;
        line-height: 1.15;
      }
      p {
        margin: 0 0 20px;
        color: #6b7280;
      }
      a {
        display: inline-flex;
        min-height: 46px;
        align-items: center;
        justify-content: center;
        background: #0f172a;
        color: #fff;
        border-radius: 8px;
        padding: 12px 18px;
        font-weight: 700;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <main>
      <section>
        <h1>{$safeTitle}</h1>
        <p>{$safeMessage}</p>
        <a href="/#contact">Back to contact form</a>
      </section>
    </main>
  </body>
</html>
HTML;
    exit;
}

function post_value(string $key, int $maxLength): string
{
    $value = $_POST[$key] ?? '';
    if (!is_string($value)) {
        return '';
    }

    $value = trim($value);
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    return mb_substr($value, 0, $maxLength, 'UTF-8');
}

function header_safe(string $value): string
{
    return str_replace(["\r", "\n"], '', $value);
}

function client_ip(): string
{
    foreach (['HTTP_CF_CONNECTING_IP', 'HTTP_X_FORWARDED_FOR', 'REMOTE_ADDR'] as $key) {
        $value = $_SERVER[$key] ?? '';
        if (!is_string($value) || $value === '') {
            continue;
        }

        $ip = trim(explode(',', $value)[0]);
        if (filter_var($ip, FILTER_VALIDATE_IP)) {
            return $ip;
        }
    }

    return 'unknown';
}

function origin_is_allowed(): bool
{
    $allowedHosts = ['datadetox.co.nz', 'www.datadetox.co.nz', 'localhost', '127.0.0.1'];
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    $referer = $_SERVER['HTTP_REFERER'] ?? '';

    foreach ([$origin, $referer] as $url) {
        if (!is_string($url) || $url === '') {
            continue;
        }

        $host = parse_url($url, PHP_URL_HOST);
        if (!is_string($host) || !in_array(strtolower($host), $allowedHosts, true)) {
            return false;
        }
    }

    return true;
}

function rate_limit_allows(string $ip): bool
{
    $directory = sys_get_temp_dir() . '/datadetox-contact-rate-limit';
    if (!is_dir($directory) && !mkdir($directory, 0700, true) && !is_dir($directory)) {
        return false;
    }

    $file = $directory . '/' . hash('sha256', $ip) . '.json';
    $now = time();
    $handle = fopen($file, 'c+');
    if ($handle === false) {
        return false;
    }

    try {
        if (!flock($handle, LOCK_EX)) {
            return false;
        }

        $contents = stream_get_contents($handle);
        $timestamps = $contents ? json_decode($contents, true) : [];
        if (!is_array($timestamps)) {
            $timestamps = [];
        }

        $timestamps = array_values(array_filter(
            $timestamps,
            static fn ($timestamp): bool => is_int($timestamp) && $timestamp > $now - RATE_LIMIT_WINDOW_SECONDS
        ));

        $lastSubmission = end($timestamps);
        if (
            count($timestamps) >= RATE_LIMIT_MAX_SUBMISSIONS ||
            (is_int($lastSubmission) && $lastSubmission > $now - RATE_LIMIT_MIN_SECONDS)
        ) {
            return false;
        }

        $timestamps[] = $now;
        ftruncate($handle, 0);
        rewind($handle);
        fwrite($handle, json_encode($timestamps));
        fflush($handle);

        return true;
    } finally {
        flock($handle, LOCK_UN);
        fclose($handle);
    }
}

function smtp_config(): array
{
    $host = getenv('CONTACT_SMTP_HOST');
    $port = getenv('CONTACT_SMTP_PORT');

    return [
        'host' => is_string($host) && trim($host) !== '' ? trim($host) : DEFAULT_SMTP_HOST,
        'port' => is_string($port) && ctype_digit($port) ? (int) $port : DEFAULT_SMTP_PORT,
    ];
}

function smtp_read($socket): string
{
    $response = '';

    while (!feof($socket)) {
        $line = fgets($socket, 515);
        if ($line === false) {
            break;
        }

        $response .= $line;
        if (preg_match('/^\d{3}\s/', $line)) {
            break;
        }
    }

    return $response;
}

function smtp_command($socket, string $command, array $expectedCodes): bool
{
    fwrite($socket, $command . "\r\n");
    $response = smtp_read($socket);
    $code = (int) substr($response, 0, 3);

    return in_array($code, $expectedCodes, true);
}

function smtp_data_safe(string $message): string
{
    $message = str_replace(["\r\n", "\r"], "\n", $message);
    $lines = explode("\n", $message);
    $lines = array_map(
        static fn (string $line): string => str_starts_with($line, '.') ? '.' . $line : $line,
        $lines
    );

    return implode("\r\n", $lines);
}

function send_smtp_mail(string $recipient, string $subject, string $body, array $headers): bool
{
    ['host' => $host, 'port' => $port] = smtp_config();

    $socket = @fsockopen($host, $port, $errno, $errstr, 8);
    if ($socket === false) {
        return false;
    }

    stream_set_timeout($socket, 8);

    try {
        $greeting = smtp_read($socket);
        if ((int) substr($greeting, 0, 3) !== 220) {
            return false;
        }

        $serverName = $_SERVER['SERVER_NAME'] ?? 'datadetox.co.nz';
        $serverName = is_string($serverName) ? header_safe($serverName) : 'datadetox.co.nz';

        if (
            !smtp_command($socket, 'EHLO ' . $serverName, [250]) &&
            !smtp_command($socket, 'HELO ' . $serverName, [250])
        ) {
            return false;
        }

        if (
            !smtp_command($socket, 'MAIL FROM:<' . FROM_EMAIL . '>', [250]) ||
            !smtp_command($socket, 'RCPT TO:<' . $recipient . '>', [250, 251]) ||
            !smtp_command($socket, 'DATA', [354])
        ) {
            return false;
        }

        $message = implode("\r\n", [
            'To: ' . $recipient,
            'Subject: ' . header_safe($subject),
            ...$headers,
            '',
            $body,
        ]);

        fwrite($socket, smtp_data_safe($message) . "\r\n.\r\n");
        $accepted = (int) substr(smtp_read($socket), 0, 3) === 250;
        smtp_command($socket, 'QUIT', [221]);

        return $accepted;
    } finally {
        fclose($socket);
    }
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    send_response(405, 'Method not allowed', 'Please use the contact form to send an enquiry.');
}

if (!origin_is_allowed()) {
    send_response(403, 'Request blocked', 'The contact form request could not be verified.');
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > MAX_POST_BYTES) {
    send_response(413, 'Message too large', 'Please shorten your message and try again.');
}

if (post_value('website', 200) !== '') {
    send_response(200, 'Message sent', 'Thanks. Your enquiry has been received.');
}

$ip = client_ip();
if (!rate_limit_allows($ip)) {
    send_response(429, 'Too many attempts', 'Please wait a little while before sending another enquiry.');
}

$name = post_value('name', 120);
$email = post_value('email', 180);
$phone = post_value('phone', 80);
$databaseSize = post_value('databaseSize', 80);
$message = post_value('message', 3000);
$service = post_value('service', 80);

$serviceLabels = [
    'database-cleaning' => 'Database cleaning',
    'appraisal-calling' => 'Appraisal calling',
    'desktop-appraisals' => 'Desktop appraisals',
    'multiple' => 'A mix of services',
];

$errors = [];
if ($name === '') {
    $errors[] = 'name';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'email';
}
if ($message === '') {
    $errors[] = 'message';
}
if ($service !== '' && !array_key_exists($service, $serviceLabels)) {
    $errors[] = 'service';
}

if ($errors !== []) {
    send_response(400, 'Check the form', 'Please complete your name, a valid email address, and a message.');
}

$safeService = $serviceLabels[$service] ?? 'Not selected';
$submittedAt = gmdate('Y-m-d H:i:s') . ' UTC';

$body = <<<EMAIL
New Data Detox enquiry

Name: {$name}
Email: {$email}
Phone: {$phone}
Database size: {$databaseSize}
Service: {$safeService}
Submitted: {$submittedAt}
IP: {$ip}

Message:
{$message}
EMAIL;

$subject = 'New Data Detox enquiry from ' . $name;
$headers = [
    'From: ' . SITE_NAME . ' <' . FROM_EMAIL . '>',
    'Reply-To: ' . header_safe($name) . ' <' . header_safe($email) . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = send_smtp_mail(RECIPIENT_EMAIL, $subject, $body, $headers);

if (!$sent) {
    $sent = mail(
        RECIPIENT_EMAIL,
        header_safe($subject),
        $body,
        implode("\r\n", $headers),
        '-f' . FROM_EMAIL
    );
}

if (!$sent) {
    send_response(500, 'Message not sent', 'Something went wrong while sending your enquiry. Please try again later.');
}

send_response(200, 'Message sent', 'Thanks. Your enquiry has been received and we will follow up soon.');
