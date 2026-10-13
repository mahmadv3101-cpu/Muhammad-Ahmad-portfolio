# Muhammad Ahmad — Animated Portfolio

A complete, independently implemented portfolio inspired by the inspected visual direction of sandeepcodes.com. Uses Ahmad’s own content and projects with a custom laptop-character illustration—not the reference developer’s artwork or personal copy.

## Run

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
```

## Build and deploy

```sh
npm run build
npm run preview
```

The static site is generated in `dist/public`. Deploy that folder to a static host, or import this project into Vercel using the included configuration. No server, API key, or paid animation service is required for this build. Hosting plans and service limits are separate.

## Tests

```sh
npx playwright install chromium
npm run test:e2e
```

Tests cover desktop, mobile, reduced motion, laptop-character framing, navigation, project filtering/details, carousel controls, contact validation, removal of location/clock text, orange hover styling, and fixed WhatsApp navigation. Tests never send messages.

## Edit content

- `client/src/data/original-projects.ts`: all 11 original project records.
- `client/src/data/verified-projects.json`: checked links and corrected screenshots.
- `client/src/data/contact.json`: published contact destinations.
- `client/src/components/`: modular page sections.
- `client/src/styles.css`: design system, responsive layouts, and motion.

## Contact form

The form validates input and prepares an email draft. Visitors must open their email application and send it themselves. It does **not** claim successful delivery. Copy-email and copy-draft alternatives are included. No backend or third-party email service is configured.

## Implementation

React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion, local fonts, and lightweight CSS 3D. Reduced-motion preferences are respected. All images and fonts are served locally. See `CONTENT-NOTES.md` for provenance and intentional limitations.
