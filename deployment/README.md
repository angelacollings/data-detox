# Data Detox production checklist

## 1. Deploy the site

Run the complete pre-deployment check:

```sh
npm run deploy:check
```

This runs linting, tests, the production build, and static checks for required
files, canonical URLs, page metadata, sitemap entries, and the content-security
policy hash.

Upload the contents of `dist/` to the SiteHost web root:

```text
/container/application/public
```

Upload the contents, not the `dist` directory itself. Confirm these URLs return
their intended file types after deployment:

- `https://datadetox.co.nz/robots.txt`
- `https://datadetox.co.nz/sitemap.xml`
- `https://datadetox.co.nz/about`
- `https://datadetox.co.nz/database-revitalisation`
- `https://datadetox.co.nz/contact-response.css`
- `https://datadetox.co.nz/llms.txt`

Make sure the upload includes dotfiles. In particular, `dist/.htaccess` must
replace the existing production `.htaccess`; some graphical FTP/SFTP clients
hide dotfiles by default. Upload the complete new build rather than copying only
the changed JavaScript and CSS files.

## 2. Apply the Apache configuration

The production container uses the SiteHost **Apache + PHP 8.5** image. Its
site-specific configuration is the `.htaccess` file included in this project:

```text
public/.htaccess
```

Vite copies this file to `dist/.htaccess` during `npm run build`. Upload it with
the rest of the contents of `dist/`; on the container it must be located at:

```text
/container/application/public/.htaccess
```

Do not use the old Nginx path or merge Nginx directives into files under
`/container/config/apache`. The supplied `.htaccess` contains the application
redirects, security headers, asset caching policy, and React fallback while
leaving SiteHost's managed Apache and PHP configuration intact.

SiteHost terminates HTTPS at a reverse proxy. The redirect therefore checks
`X-Forwarded-Proto` rather than Apache's local HTTPS state.

Before applying redirects, check the container in the SiteHost Control Panel:

1. Open **Containers** and select the Data Detox container.
2. Open the **Alias** tab and confirm `www.datadetox.co.nz` is present. SiteHost
   normally creates the `www` alias automatically for web containers.
3. Confirm DNS for both the root domain and `www` points to the Cloud Container
   server.
4. Confirm SSL is enabled on the container. SiteHost issues and renews the
   Let's Encrypt certificate from the container management page. The container
   should show **SSL** and **Apache + PHP 8.5**.

The required outcomes are:

- HTTP redirects to `https://datadetox.co.nz`
- HTTPS `www` redirects to `https://datadetox.co.nz`
- The security headers in the supplied file appear on HTML responses
- `/assets/` receives a one-year browser cache lifetime
- Generated routes use a consistent trailing slash
- Unknown URLs return a genuine `404` response
- `/contact.php` continues to execute through the existing PHP configuration

The supplied HSTS header does not include `includeSubDomains`. Only add that
directive after confirming every active subdomain is available over HTTPS.

SiteHost also exposes the server TLS policy under **Servers → your Cloud
Container server → Settings → TLS**. Prefer TLS 1.2 and 1.3, without legacy TLS
1.1, if the available setting permits that selection.

## 3. Deploy and verify the production server

Apache reads `.htaccess` without a container reboot. After uploading all files,
run these checks:

Run:

```sh
curl -I http://datadetox.co.nz/
curl -I https://www.datadetox.co.nz/
curl -I https://datadetox.co.nz/
curl -I https://datadetox.co.nz/assets/index-HASH.js
curl -I https://datadetox.co.nz/about
curl -I https://datadetox.co.nz/database-cleaning
curl -I https://datadetox.co.nz/this-page-does-not-exist
```

The first two commands should redirect to the non-www HTTPS address. The
homepage should show the security headers, and a content-hashed asset should
show `Cache-Control: public, max-age=31536000, immutable`. Replace
`index-HASH.js` with the name of an actual JavaScript file from the deployed
`assets/` directory; the hash and therefore the filename can change on every
build. A nonexistent `/assets/` URL should return `404`, not the HTML homepage.
`/about` should redirect to `/about/`, `/database-cleaning` should permanently
redirect to `/database-revitalisation/`, and an unknown page should return `404`.

## 4. Optional SiteHost proxy caching

The Apache `.htaccess` already gives `/assets/` a one-year cache lifetime.
SiteHost also provides a proxy cache in the Control Panel:

1. Open **Containers** and select the Data Detox container.
2. Open the **Caching** tab.
3. Add `/contact.php` as an ignored path.
4. Enable caching.

SiteHost only caches responses that provide cache-control headers. After future
deployments, use **Purge Cache** from the same tab if stale content remains.

## 5. Submit the sitemap to Google

1. Open Google Search Console.
2. Add or select the `datadetox.co.nz` domain property.
3. Complete DNS verification if Google requests it.
4. Open **Sitemaps**.
5. Submit `https://datadetox.co.nz/sitemap.xml`.
6. Use **URL inspection** to request indexing for the homepage, About page, and
   three service pages.
7. After Google recrawls the site, check **Pages** for soft-404, duplicate-page,
   or canonical warnings.

## 6. Final manual checks

- Replace the Donna photo placeholder on `/about` with an appropriately sized
  WebP portrait.
- Send a real contact-form enquiry and confirm delivery.
- Submit the form once with a selected service and confirm the selected service
  appears correctly in the received email.
- Confirm `hello@datadetox.co.nz` has working SPF, DKIM, and DMARC records.
- Test the navigation and contact form with keyboard-only input on desktop and
  mobile.
- Check the deployed site with Google Rich Results Test and PageSpeed Insights.
- Refresh cached social previews if the old title or description appears when
  the homepage is shared.
