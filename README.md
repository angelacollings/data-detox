# Data Detox

A small React/Vite website for Data Detox, a service for real estate agents who need cleaner CRM data, appraisal calling, and desktop appraisal support.

The current site is intentionally simple: explain the services, build trust, and send interested agents to the contact form.

## Current Scope

- Present the core services clearly.
- Keep placeholder stats and testimonials visible until real data is available.
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

Upload the contents of `dist/` to the SiteHost web root or configure SiteHost to serve that folder as the static site output.

## Contact Form

The contact form currently posts to `/contact`. That route still needs to be handled by the hosting/backend setup before the form can send real enquiries.

Options:

- Add a server-side `/contact` endpoint.
- Connect the form to an email or CRM service.
- Replace the form with a direct email link if a backend is not needed yet.

## Content To Replace

The stats and testimonials are placeholders for now. Before launch, replace them with real numbers, verified testimonials, or remove those sections until the final data is available.
