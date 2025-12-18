interface TitleSlideProps {
  slide: {
    title: string
    subtitle: string
    footer: string
  }
}

export function TitleSlide({ slide }: TitleSlideProps) {
  return (
    <div className="text-center space-y-8">
      <h1 className="text-7xl font-bold text-primary mb-4">{slide.title}</h1>
      <p className="text-3xl text-muted-foreground">{slide.subtitle}</p>
      <div className="mt-16 pt-8 border-t border-border">
        <p className="text-2xl text-foreground">{slide.footer}</p>
      </div>
    </div>
  )
}
