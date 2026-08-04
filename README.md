# Data Detox

A small React/Vite website for Data Detox, a service for real estate salespeople who need cleaner database information, appraisal calling, and desktop appraisal support.

The current site is intentionally simple: explain the services, build trust, and send interested salespeople to the contact form.

## Current Scope

- Present the core services clearly.
- Present supplied business statistics and verified client testimonials.
- Collect enquiry details through the contact form.
- Build as a static frontend that can be hosted outside Netlify.

## Tech Stack

- React
- Vite
- Vitest
- ESLint

## Development

```sh
npm install
npm run dev
```

The development server usually runs at `http://localhost:5173`.

## Checks

```sh
npm run lint
npm test -- --run
npm run build
```

Use `npm run preview` after building if you want to check the production bundle locally.

## Deployment

Build output is generated in `dist/`.

```sh
npm run build
```

Upload the contents of `dist/` to the SiteHost web root. On SiteHost Cloud Containers this maps to the container's `/container/application/public` directory.

## Contact Form

The contact form posts to `/contact.php`, which is copied from `public/contact.php` into `dist/` during the Vite build.

The PHP handler sends enquiries to `hello@datadetox.co.nz` and includes basic validation, a honeypot field, origin/referrer checks, request size limits, and IP-based rate limiting.

On SiteHost Cloud Containers, the handler first tries the internal SMTP relay at `smtpd:25`, matching SiteHost's container email guidance. Override this with `CONTACT_SMTP_HOST` and `CONTACT_SMTP_PORT` if the production container uses a different relay. If SMTP is unavailable, the handler falls back to PHP `mail()`.

The handler sends mail as `hello@datadetox.co.nz`; make sure SPF/DKIM/DMARC are configured so messages are not treated as spam. After deployment, send one real test enquiry from the production site and confirm it arrives.

## Content Maintenance

The homepage uses supplied business statistics and client testimonials. Keep
those figures and quotes accurate, and only publish testimonials with the
client's permission. Replace the About-page portrait placeholder before launch.
