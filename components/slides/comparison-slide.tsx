interface ComparisonSlideProps {
  slide: {
    title: string
    pros?: string[]
    cons?: string[]
  }
}

export function ComparisonSlide({ slide }: ComparisonSlideProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-primary mb-12">{slide.title}</h2>
      <div className="grid grid-cols-2 gap-12">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-accent mb-6">👍 メリット</h3>
          <ul className="space-y-4">
            {slide.pros?.map((pro, idx) => (
              <li key={idx} className="text-2xl text-foreground flex items-start gap-3">
                <span className="text-accent">✓</span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-destructive mb-6">👎 デメリット</h3>
          <ul className="space-y-4">
            {slide.cons?.map((con, idx) => (
              <li key={idx} className="text-2xl text-foreground flex items-start gap-3">
                <span className="text-destructive">✗</span>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
