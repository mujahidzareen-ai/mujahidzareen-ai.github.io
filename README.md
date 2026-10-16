# Mujahid Zareen — QA Portfolio

Personal SQA portfolio covering manual, API, performance and warehouse mobile testing.

## Website

https://mujahidzareen-ai.github.io/

## Features

- Responsive layout with accessible navigation and reduced-motion support.
- Filterable project gallery and expandable case studies, including CLI Mobile Modernization.
- Fiverr service links, CV download, professional experience and credentials.
- Validated contact form that prepares an email draft; it does not claim delivery.

## Editing

Content: `components/portfolio/data.ts`. Layout: `app/page.tsx`. Styling: `app/globals.css`. Fiverr content: `components/portfolio/fiverr.tsx`. Replace `public/Mujahid-Zareen-CV.pdf` to update the CV.

## Development and deployment

Requires Node.js 22.13 or later.

```sh
npm install
npm run dev
```

To update the published website:

```sh
npm run pages
```

Commit both source changes and the generated `docs/` directory. GitHub Pages serves `main` → `/docs`. The `.nojekyll` file preserves Next.js asset folders.

This is a static export of the existing portfolio. Contact uses an honest email-app fallback. Project previews are labeled illustrations; no measured results are claimed.
