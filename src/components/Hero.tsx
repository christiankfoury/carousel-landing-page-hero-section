import { CredibilityGraphic } from './CredibilityGraphic'
import { PrimaryCTA } from './PrimaryCTA'
import { ProductVisualization } from './ProductVisualization'

export function Hero() {
  return (
    <main id="main-content" className="page-container">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow">CAROUSEL FOR EQUIPMENT LENDERS</p>
          <h1 id="hero-heading">The equipment is ready. The paperwork isn't.</h1>
          <p className="hero-description">Give contractors one mobile-first flow to verify their identity, connect their bank, and submit business details. Your lending team gets everything organized in one place, ready to review without the document chase.</p>
          <div className="hero-actions flex flex-wrap items-center gap-x-6 gap-y-7">
            <PrimaryCTA />
            <CredibilityGraphic />
          </div>
        </div>
        <ProductVisualization />
      </section>
    </main>
  )
}
