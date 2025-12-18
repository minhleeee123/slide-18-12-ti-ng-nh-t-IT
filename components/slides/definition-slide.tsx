interface DefinitionSlideProps {
  slide: {
    title: string
    content: {
      main: string
      keys: Array<{ label: string; desc: string }>
    }
  }
}

export function DefinitionSlide({ slide }: DefinitionSlideProps) {
  return (
    <div className="space-y-10">
      <h2 className="text-5xl font-bold text-primary mb-8">{slide.title}</h2>
      <p className="text-3xl text-foreground mb-8">{slide.content.main}</p>
      <div className="grid grid-cols-2 gap-8">
        {slide.content.keys.map((key, idx) => (
          <div key={idx} className="bg-muted p-8 rounded-lg border-2 border-primary/20">
            <p className="text-4xl mb-4">{key.label}</p>
            <p className="text-2xl text-muted-foreground">{key.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
