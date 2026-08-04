import { createHash } from 'node:crypto';
import { access, readFile } from 'node:fs/promises';

const dist = new URL('../dist/', import.meta.url);
const siteUrl = 'https://datadetox.co.nz';
const routes = [
  '',
  'about',
  'database-revitalisation',
  'client-verification',
  'appraisal-support',
  'privacy',
  'terms',
];

const requiredFiles = [
  '.htaccess',
  'contact.php',
  'contact-response.css',
  'robots.txt',
  'sitemap.xml',
  'llms.txt',
];

for (const file of requiredFiles) {
  await access(new URL(file, dist));
}

for (const route of routes) {
  const html = await readFile(
    new URL(route ? `${route}/index.html` : 'index.html', dist),
    'utf8'
  );
  const canonical = route ? `${siteUrl}/${route}/` : `${siteUrl}/`;

  if (!html.includes(`<link rel="canonical" href="${canonical}"`)) {
    throw new Error(`Incorrect canonical URL for ${route || 'home'}`);
  }

  if (!/<title>[^<]*Data Detox[^<]*<\/title>/.test(html)) {
    throw new Error(`Missing page title for ${route || 'home'}`);
  }

  if (!/<meta\s+name="description"\s+content="[^"]+"/s.test(html)) {
    throw new Error(`Missing meta description for ${route || 'home'}`);
  }
}

const homepage = await readFile(new URL('index.html', dist), 'utf8');
const htaccess = await readFile(new URL('.htaccess', dist), 'utf8');
const jsonLd = homepage.match(
  /<script type="application\/ld\+json">([\s\S]*?)<\/script>/
)?.[1];

if (!jsonLd) {
  throw new Error('Missing structured data');
}

const jsonLdHash = createHash('sha256').update(jsonLd).digest('base64');
if (!htaccess.includes(`'sha256-${jsonLdHash}'`)) {
  throw new Error('Structured-data CSP hash does not match the built HTML');
}

const sitemap = await readFile(new URL('sitemap.xml', dist), 'utf8');
for (const route of routes.filter(Boolean)) {
  if (!sitemap.includes(`<loc>${siteUrl}/${route}/</loc>`)) {
    throw new Error(`Sitemap is missing ${route}`);
  }
}

console.log('Build verification passed.');
