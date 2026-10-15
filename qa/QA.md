# QA note

Verified using Node 20.19.4 and Playwright Chromium on Windows.

## Checks and results

| Check | Result |
| --- | --- |
| `npm run build` (includes TypeScript checks) | Passed |
| `npm run test:e2e` | 9 passed |
| Responsive layout at 320, 375, 390, 768, 1024, and 1440px | No horizontal overflow or obscured key labels/icons |
| Hero content and both demo-link destinations | Passed |
| Announcement image loading | Passed |
| axe WCAG A/AA checks at all six widths | 0 violations |
| Keyboard navigation | Skip link and both demo links reachable; visible focus indicator |
| Reduced motion | Both product screens visible without entrance animation |
| Local fonts and initial layout stability | Passed; observed layout shift below 0.1 |
| JavaScript runtime errors | None observed |

Responsive checks use a 900px viewport height. The layout-stability check uses a 1440x1000 viewport without network throttling.

Desktop and mobile screenshots were visually reviewed during implementation and are included in [docs/screenshots](docs/screenshots/).
