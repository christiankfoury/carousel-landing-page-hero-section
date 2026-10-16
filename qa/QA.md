# QA note

Verified using Node 20.19.4 and Playwright Chromium on Windows.

## Checks and results

| Check | Result |
| --- | --- |
| `npm run build` (includes TypeScript checks) | Passed |
| `npm run test:e2e` | 9 passed |
| Responsive layout at 320, 375, 390, 768, 1024, and 1440px | No horizontal overflow or obscured key labels/icons |
| Hero content and demo-link destination | Passed |
| Announcement image loading | Passed |
| axe WCAG A/AA checks at all six widths | 0 violations |
| Heading hierarchy | Both product screen titles use `h2` below the hero's `h1`; checked at all six widths |
| Lighthouse accessibility (mobile and desktop) | 100/100; heading-order audit passed |
| Keyboard navigation | Skip link and hero demo link reachable; visible focus indicator |
| Reduced motion | Both product screens visible without entrance animation |
| Local fonts and initial layout stability | Passed; observed layout shift below 0.1 |
| JavaScript runtime errors | None observed |

Responsive checks use a 900px viewport height. The layout-stability check uses a 1440x1000 viewport without network throttling.

Desktop and mobile screenshots were visually reviewed during implementation and are included in [docs/screenshots](../docs/screenshots/).

## Manual device check

I manually checked the [live page](https://carousel-landing-page-hero-section.vercel.app/) on my iPhone using Safari. The layout displayed correctly, and the Book a demo link opened successfully. This was separate from the emulated viewport tests and Lighthouse audits above.

## Known limitations and trade-offs
In the mobile version, the contractor phone and the lending dashboard have been stacked so that both screens remain readable and convey the applicant to lender process flow. This increases the length of the illustration and moves the perspective of the lending team further down on the screen. I kept this layout deliberately; a more compact version would be worth testing.