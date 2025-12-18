"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface SummarySlideProps {
  slide: {
    title: string
    points?: string[]
    image?: string
  }
}

export function SummarySlide({ slide }: SummarySlideProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const pointsRef = useRef<HTMLUListElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: "power3.out"
      })

      if (pointsRef.current) {
        gsap.from(pointsRef.current.children, {
          opacity: 0,
          x: -50,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          delay: 0.3
        })
      }

      if (imageRef.current) {
        gsap.from(imageRef.current, {
          opacity: 0,
          scale: 0.8,
          rotation: 5,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.5
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative flex gap-8 items-center h-full">
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
        
        <h2 ref={titleRef} className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-12">{slide.title}</h2>
        <ul ref={pointsRef} className="space-y-6 relative z-10">
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
        <div ref={imageRef} className="w-1/2 h-full flex items-center justify-center">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
            <Image 
              src={slide.image} 
              alt={slide.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}
