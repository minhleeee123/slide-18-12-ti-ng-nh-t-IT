interface TitleSlideProps {
  slide: {
    title: string
    subtitle: string
    footer: string
  }
}

export function TitleSlide({ slide }: TitleSlideProps) {
  return (
    <div className="relative text-center space-y-8">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <svg className="absolute top-10 right-10 w-32 h-32 text-primary/20" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100,20 L120,80 L180,80 L135,120 L155,180 L100,140 L45,180 L65,120 L20,80 L80,80 Z" />
        </svg>
        <svg className="absolute bottom-10 left-10 w-40 h-40 text-accent/20" viewBox="0 0 200 200" fill="currentColor">
          <circle cx="50" cy="50" r="40" />
          <circle cx="150" cy="50" r="40" />
          <circle cx="100" cy="150" r="40" />
        </svg>
      </div>
      
      <div className="relative z-10">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">{slide.title}</h1>
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
    </div>
  )
}
