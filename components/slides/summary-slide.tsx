import Image from "next/image"

interface SummarySlideProps {
  slide: {
    title: string
    points?: string[]
    image?: string
  }
}

export function SummarySlide({ slide }: SummarySlideProps) {
  return (
    <div className="relative flex gap-8 items-center h-full">
      {/* Left content */}
      <div className={`space-y-8 ${slide.image ? 'w-1/2' : 'w-full'}`}>
        {!slide.image && (
          <div className="absolute -top-20 -right-20 w-96 h-96 opacity-5 pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="4" className="text-primary"/>
              <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="4" className="text-accent"/>
              <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="4" className="text-secondary"/>
              <circle cx="100" cy="100" r="20" fill="currentColor" className="text-primary"/>
            </svg>
          </div>
        )}
        
        <h2 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-12">{slide.title}</h2>
        <ul className="space-y-6 relative z-10">
          {slide.points?.map((point, idx) => (
            <li key={idx} className="flex items-center gap-6 text-3xl group">
              <span className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-full font-bold shadow-lg group-hover:scale-110 transition-transform">
                ✓
              </span>
              <span className="text-foreground flex-1 bg-gradient-to-r from-muted/50 to-transparent p-4 rounded-lg group-hover:from-muted group-hover:to-muted/50 transition-all">{point}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Right image */}
      {slide.image && (
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
            <Image 
              src={slide.image} 
              alt={slide.title}
              fill
              className="object-contain p-4"
            />
          </div>
        </div>
      )}
    </div>
  )
}
