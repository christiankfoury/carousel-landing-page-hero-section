import { Fingerprint, Landmark, FileCheck2 } from 'lucide-react'

// One fictional record connects both illustrative product perspectives.
export const application = {
  id: 'EF-1042',
  product: 'Equipment finance',
  type: 'Construction equipment financing',
  name: 'Alex Morgan',
  company: 'Morgan Contracting',
  equipment: 'Compact excavator',
  initials: 'AM',
  status: 'Ready for review',
  checks: [
    { id: 'identity', label: 'Identity verification', applicantLabel: 'Identity verified', detail: 'ID & selfie matched', status: 'Complete', icon: Fingerprint },
    { id: 'bank', label: 'Bank connection', applicantLabel: 'Bank account connected', detail: 'Account securely linked', status: 'Complete', icon: Landmark },
    { id: 'business', label: 'Business details', applicantLabel: 'Business details submitted', detail: 'Business information received', status: 'Complete', icon: FileCheck2 },
  ],
} as const
