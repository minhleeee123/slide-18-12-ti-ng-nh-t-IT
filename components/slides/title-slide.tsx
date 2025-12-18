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
      {slide.subtitle && <p className="text-3xl text-muted-foreground">{slide.subtitle}</p>}
      {slide.footer && (
        <div className="mt-16 pt-8 border-t border-border">
          <div className="text-xl text-foreground space-y-2">
            {slide.footer.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
