import { Header } from './components/Header'
import { Hero } from './components/Hero'

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <Hero />
    </>
  )
}
