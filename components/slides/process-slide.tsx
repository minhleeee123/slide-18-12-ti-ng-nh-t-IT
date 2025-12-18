"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface ProcessSlideProps {
  slide: {
    title: string
    steps?: Array<{ title: string; desc: string; sub: string }>
  }
}

export function ProcessSlide({ slide }: ProcessSlideProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: "power3.out"
      })

      if (stepsRef.current) {
        gsap.from(stepsRef.current.children, {
          opacity: 0,
          scale: 0.8,
          y: 50,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.5)",
          delay: 0.3
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const icons = [
    <svg key="1" className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
    <svg key="2" className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg>,
    <svg key="3" className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    <svg key="4" className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  ];
  
  return (
    <div ref={containerRef} className="relative space-y-8">
      <h2 ref={titleRef} className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-12">{slide.title}</h2>
      <div ref={stepsRef} className="grid grid-cols-2 gap-12">
        {slide.steps?.map((step, idx) => (
          <div key={idx} className="space-y-4 relative z-10">
            <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group">
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                {icons[idx % icons.length]}
              </div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
              <h3 className="text-3xl font-bold mb-3 relative z-10">{step.title}</h3>
              <p className="text-xl relative z-10">{step.desc}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-accent text-3xl">→</span>
              <p className="text-2xl text-muted-foreground flex-1">{step.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
