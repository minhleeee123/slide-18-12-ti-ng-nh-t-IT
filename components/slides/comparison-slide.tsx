"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface ComparisonSlideProps {
  slide: {
    title: string
    pros?: string[]
    cons?: string[]
  }
}

export function ComparisonSlide({ slide }: ComparisonSlideProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const prosRef = useRef<HTMLDivElement>(null)
  const consRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "back.out(1.7)"
      })

      gsap.from(prosRef.current, {
        opacity: 0,
        x: -100,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3
      })

      gsap.from(consRef.current, {
        opacity: 0,
        x: 100,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative space-y-8">
      {/* VS decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-black text-primary/5 pointer-events-none">
        VS
      </div>
      
      <h2 ref={titleRef} className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-12 relative z-10">{slide.title}</h2>
      <div className="grid grid-cols-2 gap-12 relative z-10">
        <div ref={prosRef} className="space-y-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-8 rounded-xl shadow-lg border-2 border-green-200 dark:border-green-800">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-xl">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">👍 メリット</h3>
          </div>
          <ul className="space-y-4">
            {slide.pros?.map((pro, idx) => (
              <li key={idx} className="text-2xl text-foreground flex items-start gap-3 group">
                <span className="text-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">✓</span>
                <span className="flex-1">{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div ref={consRef} className="space-y-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 p-8 rounded-xl shadow-lg border-2 border-red-200 dark:border-red-800">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-br from-red-500 to-orange-500 p-3 rounded-xl">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">👎 デメリット</h3>
          </div>
          <ul className="space-y-4">
            {slide.cons?.map((con, idx) => (
              <li key={idx} className="text-2xl text-foreground flex items-start gap-3 group">
                <span className="text-2xl bg-gradient-to-br from-red-500 to-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">✗</span>
                <span className="flex-1">{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
