interface EndSlideProps {
  slide: {
    message: string
  }
}

export function EndSlide({ slide }: EndSlideProps) {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold text-primary">{slide.message}</h1>
    </div>
  )
}
