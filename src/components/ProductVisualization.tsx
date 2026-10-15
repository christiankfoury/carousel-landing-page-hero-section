import { ArrowUpRight } from 'lucide-react'
import { BuyerPhone } from './BuyerPhone'
import { FinanceDashboard } from './FinanceDashboard'
import { application } from '../data/application'

export function ProductVisualization() {
  return (
    <figure className="product-figure" aria-label={`Illustrative product experience: fictional application ${application.id} moves from the contractor's phone to the lending team's review workspace`}>
      <div className="product-stage">
        <div className="perspective-label team-label"><span>02</span> FOR YOUR LENDING TEAM</div>
        <FinanceDashboard />
        <BuyerPhone />
        <div className="handoff-note"><span className="handoff-icon"><ArrowUpRight size={18} strokeWidth={1.4} aria-hidden="true" /></span><p>From the jobsite.<br /><span>To your review queue.</span></p></div>
        <div className="perspective-label buyer-label"><span>01</span> FOR YOUR CONTRACTOR</div>
      </div>
    </figure>
  )
}
