interface SummarySlideProps {
  slide: {
    title: string
    points?: string[]
  }
}

export function SummarySlide({ slide }: SummarySlideProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-primary mb-12">{slide.title}</h2>
      <ul className="space-y-6">
        {slide.points?.map((point, idx) => (
          <li key={idx} className="flex items-center gap-6 text-3xl">
            <span className="flex items-center justify-center w-12 h-12 bg-accent text-accent-foreground rounded-full font-bold">
              ✓
            </span>
            <span className="text-foreground">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
