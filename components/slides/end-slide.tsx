interface EndSlideProps {
  slide: {
    message: string
  }
}

export function EndSlide({ slide }: EndSlideProps) {
  return (
    <div className="relative text-center">
      {/* Celebration decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-secondary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Confetti-like decorations */}
        <svg className="absolute top-20 left-1/4 w-16 h-16 text-primary/30 animate-bounce" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10"/>
        </svg>
        <svg className="absolute top-40 right-1/3 w-12 h-12 text-accent/30 animate-bounce" style={{ animationDelay: '0.5s' }} viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 15,10 24,12 15,14 12,22 9,14 0,12 9,10"/>
        </svg>
        <svg className="absolute bottom-20 right-1/4 w-14 h-14 text-secondary/30 animate-bounce" style={{ animationDelay: '1.5s' }} viewBox="0 0 24 24" fill="currentColor">
          <rect x="4" y="4" width="16" height="16" rx="3"/>
        </svg>
      </div>
      
      <h1 className="text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent relative z-10 animate-pulse">{slide.message}</h1>
    </div>
  )
}
