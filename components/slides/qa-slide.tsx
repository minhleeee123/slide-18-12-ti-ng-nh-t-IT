interface QASlideProps {
  slide: {
    message: string
    submessage: string
  }
}

export function QASlide({ slide }: QASlideProps) {
  return (
    <div className="text-center space-y-8">
      <h1 className="text-6xl font-bold text-primary mb-8">{slide.message}</h1>
      <p className="text-4xl text-muted-foreground">{slide.submessage}</p>
    </div>
  )
}
