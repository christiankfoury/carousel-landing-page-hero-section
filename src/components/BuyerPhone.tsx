import { Check, LockKeyhole, Signal, Wifi, BatteryFull } from 'lucide-react'
import { application } from '../data/application'
import { VerificationRow } from './VerificationRow'
import { Wordmark } from './Wordmark'

export function BuyerPhone() {
  return (
    <section className="buyer-phone" aria-label="Contractor's mobile application, illustrative submitted state">
      <div className="phone-statusbar flex items-center justify-between" aria-hidden="true"><span>9:41</span><span className="phone-speaker" /><span className="flex gap-1"><Signal size={11} /><Wifi size={11} /><BatteryFull size={14} /></span></div>
      <div className="phone-browser flex items-center justify-center gap-1"><LockKeyhole size={9} aria-hidden="true" /> apply.oncarousel.com</div>
      <div className="phone-content">
        <Wordmark small />
        <p className="phone-context">YOUR {application.product.toUpperCase()} APPLICATION</p>
        <div className="submitted-icon flex items-center justify-center"><Check size={25} strokeWidth={1.5} aria-hidden="true" /></div>
        <h2>You're all set.</h2>
        <p className="phone-description">Your application has been<br />submitted successfully.</p>
        <ul className="buyer-checks">{application.checks.map(check => <VerificationRow key={check.id} check={check} perspective="buyer" />)}</ul>
        <p className="phone-reference">Application <strong>{application.id}</strong></p>
        <div className="phone-secure flex items-center justify-center gap-1"><LockKeyhole size={10} aria-hidden="true" /> Securely shared with your lending team</div>
      </div>
      <div className="phone-home" aria-hidden="true" />
    </section>
  )
}
