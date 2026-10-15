# Key AI Prompts — Assignment 1
**Project:** Carousel — Equipment Lending Landing Page Hero

Act as a senior product designer and frontend engineer. Review Carousel's website (https://oncarousel.com/) and the Assignment 1 take-home requirements to develop a high-converting landing page hero specifically for **equipment lenders and their lending operations teams**.

The goal is to communicate Carousel's value in simplifying equipment finance application intake and verification, while maintaining one clear conversion objective: **"Book a demo."**

### Audience & messaging

Target equipment lenders who need to collect and organize contractor information efficiently, reducing the back-and-forth involved in identity verification, bank connections, and business information collection.

Use the following messaging:

- **Eyebrow:** CAROUSEL FOR EQUIPMENT LENDERS
- **Headline:** The equipment is ready. The paperwork isn't.
- **Supporting copy:** Give contractors one mobile-first flow to verify their identity, connect their bank, and submit business details. Your lending team gets everything organized in one place, ready to review without the document chase.
- **Primary CTA:** Book a demo

The design should convey a clear progression: a contractor completes an application on their phone, and the lending team receives organized, review-ready information.

### Brand identity & design system

Reproduce Carousel's established visual identity using the following typography and color specifications gathered from the website.

**Hero heading**
- Font: Newsreader, Georgia, serif
- Desktop font size: 62px
- Font weight: 420
- Line height: 1.02 (approximately 63.24px)
- Letter spacing: -1.24px
- Color: #1A1714

**Body typography**
- Font: Hanken Grotesk, system-ui, sans-serif
- Font size: 19px
- Font weight: 400
- Line height: 27.55px
- Color: rgba(26, 24, 21, 0.78)

**Primary CTA**
- Font: Hanken Grotesk, 16px, weight 500
- Line height: 16px
- Letter spacing: -0.5px
- Background: #14120F
- Text: #FFFFFF
- Border radius: 12px
- Horizontal padding: 22px
- Target height: approximately 52px

**Color palette**
- Main background: #FAF9F5
- Primary text: #1A1714
- CTA background: #14120F
- Warm card surfaces: #FAF8F4
- Supporting gold accent: #BF9A41
- Borders: subtle, low-opacity dark neutrals

Load Newsreader and Hanken Grotesk as web fonts with appropriate fallbacks.

### Visual direction

Use an **editorial typography + realistic product UI** approach.

Create a two-column desktop composition with large editorial messaging on the left and a layered product visualization on the right.

The right side should illustrate two connected experiences: a contractor-facing mobile application in the foreground and a lending-team dashboard in the background.

Use warm ivory surfaces, generous whitespace, subtle shadows, restrained gold accents, realistic product interfaces, and deliberate typography.

Avoid generic SaaS layouts, stock illustrations, bright gradients, excessive decoration, and unsupported marketing claims.

The result should feel premium, trustworthy, and consistent with Carousel's existing website rather than a standalone template.

---

Implement the Carousel equipment-lending hero as a working, production-quality frontend application.

### Technology stack

Use:
- React with TypeScript
- Vite for development and bundling
- Tailwind CSS for styling
- Lucide React for interface icons
- npm for package management

Use functional components, typed props where appropriate, reusable design tokens, and clean, maintainable code.

Do not introduce unnecessary dependencies, backend services, databases, or complex state management.

### Component architecture

Organize the application into clear, reusable components:

- `App` — Application entry point
- `Header` — Branding and navigation, where required
- `Hero` — Main content and responsive layout
- `PrimaryCTA` — Reusable demo booking link
- `CredibilityGraphic` — Carousel's supplied $400M announcement asset
- `ProductVisualization` — Layered composition of mobile and desktop interfaces
- `BuyerPhone` — Contractor-facing mobile application
- `FinanceDashboard` — Lending-team application review workspace
- `VerificationRow` — Reusable verification status component

Keep presentation logic separate from fictional application data where practical. Use a shared application record to keep the mobile and desktop interfaces consistent.

### Contractor mobile application

Create a realistic mobile web application inside a carefully styled smartphone frame.

Show a fictional contractor completing an equipment finance application.

Use the following fictional details:
- Applicant: Alex Morgan
- Business: Morgan Contracting
- Application ID: EF-1042

The mobile interface should display a successful application submission with three completed steps:

1. Identity verified
2. Bank account connected
3. Business details submitted

Include an appropriate confirmation message, recognizable Carousel branding, and realistic mobile UI details.

### Lending-team dashboard

Build a larger desktop-style application review interface representing Carousel's lending workspace.

Show the same fictional application, including:
- Application ID: EF-1042
- Applicant: Alex Morgan — Morgan Contracting
- Application type: Construction equipment financing
- Equipment: Compact excavator
- Identity verification: Complete
- Bank connection: Complete
- Business details: Complete
- Overall status: Ready for review

The dashboard should visually communicate that contractor-provided information has been organized for the lending team's review.

Use restrained status indicators, fine dividers, rounded cards, and a realistic application layout.

### Visual composition

Position the desktop dashboard behind the contractor phone, with the phone overlapping the dashboard's lower-left portion.

Use subtle depth, soft shadows, and consistent spacing to establish visual hierarchy. Ensure the overlapping elements do not obscure essential application information.

Add small numbered audience labels identifying the contractor and lending-team perspectives. Include the supporting editorial caption: "From the jobsite. To your review queue."

Integrate Carousel's original $400M announcement graphic near the CTA, preserving its aspect ratio and visual treatment. Do not imply the company-wide figure applies exclusively to equipment lending.

### Functional requirements

- Use a real anchor link for the "Book a demo" CTA.
- Build the illustrated interfaces using React and CSS rather than static screenshots.
- Treat the application screens as demonstrations, not functioning financial integrations.
- Ensure `npm install`, `npm run dev`, `npm run typecheck`, and `npm run build` work correctly.
- Keep the code organized for straightforward extension into additional industry-specific landing pages.

---