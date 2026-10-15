# Carousel - Equipment Finance

A responsive landing-page hero for the Carousel AI Engineer take-home assignment, with one conversion goal: **Book a demo**.

[Repository](https://github.com/christiankfoury/carousel-landing-page-hero-section) | [Desktop preview](docs/screenshots/desktop.png) | [Mobile preview](docs/screenshots/mobile.png)

## Who Is It for and Why

I designed this landing page for equipment financing lenders and leasing teams, particularly those serving construction contractors. The headline, “The equipment is ready. The paperwork isn’t,” highlights the friction of application intake and verification. The hero shows both perspectives: a contractor applying on their phone and a lending team receiving organized, review-ready information.

I chose this audience because Carousel already supports equipment financing but doesn’t prominently feature it in its main navigation, in "Our Products". This created an opportunity to build a targeted landing page using existing capabilities. Designed for paid media and outbound traffic, the page follows Carousel’s visual identity, addresses a specific customer pain point, and drives one clear action: Book a demo.

## Run locally

Use Node **20.19+** or **22.12+** (see `package.json` for the supported range) and npm.

```sh
npm ci
npm run dev
```

Open the URL printed by Vite, normally [http://127.0.0.1:5173](http://127.0.0.1:5173).

```sh
npm run build
npm run preview
```

The build includes TypeScript checks and writes to `dist/`. Preview defaults to [http://127.0.0.1:4173](http://127.0.0.1:4173).

## Technology

React, TypeScript, Vite, Tailwind CSS, and Lucide icons. Newsreader and Hanken Grotesk fonts are bundled locally. Playwright and axe provide browser QA.

## Tests

```sh
npm exec -- playwright install chromium
npm run build
npm run test:e2e
```

The suite starts a production preview on port 4173. It checks content, demo links, image loading, overflow, overlapping product details, and accessibility at six viewport widths, plus keyboard navigation, reduced motion, font loading, and initial layout stability. Generated screenshots go to the gitignored `test-results/` folder.

See [QA.md](QA.md) for results and limitations and [AI_LOG.md](AI_LOG.md) for development decisions and AI corrections.

## Assets and deployment

The original Carousel logo and announcement graphic are included locally. Sources are recorded in [public/images/README.md](public/images/README.md).

Deploy `dist/` to a static host with build command `npm run build`. No environment variables are required. Asset URLs assume a domain-root deployment. No hosted version is currently documented.
