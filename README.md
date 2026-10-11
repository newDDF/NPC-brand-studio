# NPC Brand Studio

A configurable, multilingual static website template built with Astro for corporate, manufacturing, and brand websites.

## Features

- Static site generation with Astro
- Six locales: English, Simplified Chinese, Spanish, German, French, and Japanese
- Configurable brand identity, theme, navigation, and contact information
- Reusable homepage sections
- SEO metadata and social sharing metadata
- Deployment support for GitHub Pages, Cloudflare Pages, and Docker

## Requirements

- Node.js 22.12 or later
- npm

## Development

```bash
npm ci
npx astro dev --background
```

Manage the background development server:

```bash
npx astro dev status
npx astro dev logs
npx astro dev stop
```

## Build

Build for root-path hosting:

```bash
npm run build
```

Build for the GitHub Pages project site:

```bash
npm run build:github
```

Generated files are written to `dist/`.

## Configuration

Edit `src/config/site.ts` to configure:

- Brand name, logo, tagline, and description
- Supported locales and default language
- Theme preset, accent color, and display mode
- Navigation and contact email
- Optional homepage sections

Translations are maintained in `src/i18n/`. Update the relevant locale files when changing user-facing text.

Before deploying a real site, replace placeholder values such as `https://example.com` and `hello@example.com` in the configuration.

## Deployment

### GitHub Pages

The GitHub Pages build uses `astro.github.config.mjs` and the repository base path `/NPC-brand-studio/`.

Repository: https://github.com/newDDF/NPC-brand-studio

Expected site URL: https://newddf.github.io/NPC-brand-studio/

### Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 22.12 or later

### Docker

Build and start the static web server:

```bash
docker compose up -d --build
```

The site is exposed on port `8080` by default. Open `http://localhost:8080`.

Stop the service:

```bash
docker compose down
```

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
