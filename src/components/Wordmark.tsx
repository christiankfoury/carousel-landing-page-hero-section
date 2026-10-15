export function Wordmark({ small = false }: { small?: boolean }) {
  return (
    <img
      className={`wordmark ${small ? 'wordmark-small' : ''}`}
      src="/images/carousel-logo.svg"
      width={719}
      height={165}
      alt="Carousel"
      decoding="async"
    />
  )
}
