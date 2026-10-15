import { ArrowUpRight } from 'lucide-react'

export const DEMO_URL = 'https://oncarousel.com/book-a-demo/?product=Equipment+Finance'

export function PrimaryCTA({ className = '' }: { className?: string }) {
  return (
    <a className={`primary-cta inline-flex items-center justify-center gap-5 ${className}`} href={DEMO_URL}>
      Book a demo <ArrowUpRight size={18} strokeWidth={1.7} aria-hidden="true" />
    </a>
  )
}
