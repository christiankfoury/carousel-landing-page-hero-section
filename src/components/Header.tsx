import { Wordmark } from './Wordmark'

export function Header() {
  return (
    <header className="site-header">
      <nav aria-label="Main navigation" className="page-container flex h-full items-center justify-between gap-4">
        <a href="https://oncarousel.com/" aria-label="Carousel home" className="brand-link"><Wordmark /></a>
      </nav>
    </header>
  )
}
