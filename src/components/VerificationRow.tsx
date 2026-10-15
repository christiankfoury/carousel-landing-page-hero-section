import { Check } from 'lucide-react'
import { application } from '../data/application'

type VerificationCheck = (typeof application.checks)[number]

export function VerificationRow({ check, perspective }: { check: VerificationCheck; perspective: 'buyer' | 'team' }) {
  const Icon = check.icon
  if (perspective === 'buyer') {
    return (
      <li className="buyer-check flex items-center gap-3">
        <span className="buyer-check-icon"><Icon size={17} strokeWidth={1.5} aria-hidden="true" /></span>
        <span className="flex-1">{check.applicantLabel}</span>
        <Check size={14} className="text-success" strokeWidth={2} aria-hidden="true" />
      </li>
    )
  }
  return (
    <li className="team-check">
      <div className="flex items-center gap-2.5"><Icon size={16} strokeWidth={1.6} aria-hidden="true" /><span>{check.label}</span></div>
      <span className="check-status flex items-center gap-1"><Check size={12} aria-hidden="true" />{check.status}</span>
    </li>
  )
}
