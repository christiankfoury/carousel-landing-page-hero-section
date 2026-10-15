Review the implemented Carousel equipment-lending hero and refine it to achieve a polished, production-ready result.

Focus on responsive behavior, alignment, visual hierarchy, accessibility, performance, and consistency with Carousel's design system.

### Responsive layout

**Desktop (1440px and wider)**
- Maintain a balanced two-column composition with approximately 52% allocated to text and 48% to the visual.
- Preserve generous whitespace and deliberate headline wrapping.
- Keep the mobile phone prominently layered over the lending dashboard.
- Ensure the CTA and credibility graphic remain visually subordinate to the headline.

**Tablet (768px–1024px)**
- Adjust typography, spacing, and component proportions.
- Transition to a single-column layout before the desktop composition becomes cramped.
- Preserve readable interface labels and clear separation between elements.

**Mobile (320px–390px)**
- Stack the content in the following order: eyebrow, headline, supporting copy, CTA, credibility graphic, and product visualization.
- Reduce the headline to approximately 40–48px while retaining editorial typography.
- Use approximately 20px horizontal gutters.
- Reposition or simplify overlapping interfaces rather than simply scaling down the desktop composition.
- Prevent clipped content, horizontal overflow, and unreadable UI details.

### Accessibility requirements

Implement and verify:

- Semantic HTML landmarks
- A single, meaningful H1
- Accessible navigation and link labels
- Correct anchor semantics for demo CTAs
- Visible keyboard-focus indicators
- Sufficient foreground/background color contrast
- Meaningful alt text for the $400M credibility graphic
- Decorative visuals hidden from assistive technology where appropriate
- `prefers-reduced-motion` support
- Responsive images where applicable
- Sensible loading behavior
- An appropriate page title and meta description
- No horizontal scrolling or unintended clipping

### Visual polish & interactions

Refine the alignment of the overlapping phone and dashboard, including their relative scale, spacing, and shadows.

Ensure the contractor and lending-team labels are visually associated with their respective interfaces without distracting from the primary composition.

Use subtle CTA hover states and optional restrained entrance animations. Avoid unnecessary motion, strong shadows, and decorative elements that do not support the product story.

Preserve the brand's warm neutral palette, serif/sans-serif typography contrast, and restrained gold accents.

### QA & build verification

Validate the implementation across viewport widths of 320px, 375px, 390px, 768px, 1024px, and 1440px.

Check:
- Text wrapping and overall layout stability
- Product UI readability
- CTA navigation
- Keyboard accessibility
- Horizontal overflow
- Font loading and layout shifts
- TypeScript compilation and production build
- Browser console errors
- Lighthouse accessibility and performance, where tooling is available

Report only tests actually performed, with their results and any remaining limitations.

Prioritize clean code, responsive behavior, visual consistency, and a final hero that feels native to Carousel's brand.