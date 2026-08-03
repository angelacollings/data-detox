# Data Detox production checklist

## 1. Deploy the site

Run:

```sh
npm run build
```

Upload the contents of `dist/` to the SiteHost web root:

```text
/container/application/public
```

Upload the contents, not the `dist` directory itself. Confirm these URLs return
their intended file types after deployment:

- `https://datadetox.co.nz/robots.txt`
- `https://datadetox.co.nz/sitemap.xml`
- `https://datadetox.co.nz/about`
- `https://datadetox.co.nz/database-cleaning`

## 2. Apply the nginx configuration

SiteHost exposes container-owned Nginx configuration under `/container/config`.
Connect by SSH or SFTP and open:

```text
/container/config/nginx/sites-available/default
```

Make a backup of that file, then merge the directives from
`nginx-datadetox.conf` into its existing `server` block. Do not replace the
existing `listen`, PHP/FastCGI, logging, or include directives.

SiteHost terminates HTTPS at a reverse proxy. For that reason, the supplied
configuration uses SiteHost's documented `X-Forwarded-Proto` check instead of a
local port 443 server block.

If the container configuration is read-only or you do not have SSH access,
send the snippet to SiteHost support and ask them to merge it.

Before applying redirects, check the container in the SiteHost Control Panel:

1. Open **Containers** and select the Data Detox container.
2. Open the **Alias** tab and confirm `www.datadetox.co.nz` is present. SiteHost
   normally creates the `www` alias automatically for web containers.
3. Confirm DNS for both the root domain and `www` points to the Cloud Container
   server.
4. Confirm SSL is enabled on the container. SiteHost issues and renews the
   Let's Encrypt certificate from the container management page.

The required outcomes are:

- HTTP redirects to `https://datadetox.co.nz`
- HTTPS `www` redirects to `https://datadetox.co.nz`
- The security headers in the supplied file appear on HTML responses
- `/assets/` receives a one-year browser cache lifetime
- Generated routes and the React fallback continue working
- `/contact.php` continues to execute through the existing PHP configuration

Only enable HSTS with `includeSubDomains` after confirming every active
subdomain is available over HTTPS.

SiteHost also exposes the server TLS policy under **Servers → your Cloud
Container server → Settings → TLS**. Prefer TLS 1.2 and 1.3, without legacy TLS
1.1, if the available setting permits that selection.

## 3. Reboot and verify the production server

Nginx configuration changes take effect after a container reboot. In the
SiteHost Control Panel:

1. Open **Containers**.
2. Select the Data Detox container.
3. Click **Reboot**.
4. Confirm the reboot.

The reboot briefly interrupts the site.

Run:

```sh
curl -I http://datadetox.co.nz/
curl -I https://www.datadetox.co.nz/
curl -I https://datadetox.co.nz/
curl -I https://datadetox.co.nz/assets/ASSET_FILENAME
```

The first two commands should redirect to the non-www HTTPS address. The
homepage should show the security headers, and a content-hashed asset should
show a long cache lifetime.

## 4. Optional SiteHost proxy caching

The Nginx configuration already gives `/assets/` a one-year cache lifetime.
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

## 6. Final manual checks

- Replace the Donna photo placeholder on `/about` with an appropriately sized
  WebP portrait.
- Send a real contact-form enquiry and confirm delivery.
- Test the navigation and contact form with keyboard-only input on desktop and
  mobile.
- Check the deployed site with Google Rich Results Test and PageSpeed Insights.
