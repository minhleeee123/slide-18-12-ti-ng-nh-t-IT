interface ProcessSlideProps {
  slide: {
    title: string
    steps?: Array<{ title: string; desc: string; sub: string }>
  }
}

export function ProcessSlide({ slide }: ProcessSlideProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-primary mb-12">{slide.title}</h2>
      <div className="grid grid-cols-2 gap-12">
        {slide.steps?.map((step, idx) => (
          <div key={idx} className="space-y-4">
            <div className="bg-primary text-primary-foreground p-6 rounded-lg">
              <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
              <p className="text-xl">{step.desc}</p>
            </div>
            <p className="text-2xl text-muted-foreground pl-2">{step.sub}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
