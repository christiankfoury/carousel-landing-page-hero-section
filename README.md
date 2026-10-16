# Carousel - Equipment Finance

A responsive landing-page hero for the Carousel AI Engineer take-home assignment, with one conversion goal: **Book a demo**.

[Live demo](https://carousel-landing-page-hero-section.vercel.app/) | [Repository](https://github.com/christiankfoury/carousel-landing-page-hero-section) | [Desktop preview](docs/screenshots/desktop.png) | [Mobile preview](docs/screenshots/mobile.png)

## Who Is It for and Why

I designed this landing page for operations teams at equipment lenders and leasing companies, particularly those serving construction contractors. The headline, “The equipment is ready. The paperwork isn’t,” highlights the document chasing that delays application review. The idea is that contractors working away from a desk would benefit from completing intake on their phones. The hero shows both perspectives: a contractor submitting their information and a lending team receiving an organized file, ready to review.

I chose this audience because Carousel already supports equipment financing but doesn’t prominently feature it under “Our Products” in its main navigation. This suggested an opportunity to test a targeted landing page using existing capabilities. Designed for paid media and outbound traffic, the page follows Carousel’s visual identity and uses equipment-specific messaging to connect with this audience, while driving one clear action: Book a demo.

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

See [QA notes](qa/QA.md), [AI tools used](ai-logs/tool-used.md), and the prompts for [product strategy and implementation](ai-logs/prompts/prompt-1-product-strategy-and-implementation.md) and [responsive refinement](ai-logs/prompts/prompt-2-responsive-refinement.md).

## Assets and deployment

The original Carousel logo and announcement graphic are included locally. Sources are recorded in [public/images/README.md](public/images/README.md).

Deploy `dist/` to a static host with build command `npm run build`. No environment variables are required. Asset URLs assume a domain-root deployment.
