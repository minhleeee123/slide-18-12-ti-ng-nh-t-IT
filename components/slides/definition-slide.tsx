"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface DefinitionSlideProps {
  slide: {
    title: string
    content: {
      main: string
      keys: Array<{ label: string; desc: string }>
    }
  }
}

export function DefinitionSlide({ slide }: DefinitionSlideProps) {
  const colors = ['from-blue-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-green-500 to-emerald-500', 'from-orange-500 to-red-500'];
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const mainRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, mainRef.current], { clearProps: "all" })
      if (cardsRef.current) {
        gsap.set(cardsRef.current.children, { clearProps: "all" })
      }

      gsap.from(titleRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "opacity,x"
      })

      gsap.from(mainRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        delay: 0.3,
        ease: "back.out(1.7)",
        clearProps: "opacity,scale"
      })

      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          opacity: 0,
          y: 50,
          rotation: -5,
          duration: 0.7,
          stagger: 0.2,
          ease: "back.out(1.7)",
          delay: 0.5,
          clearProps: "opacity,y,rotation"
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [slide])
  
  return (
    <div ref={containerRef} className="relative space-y-10">
      {/* Background decoration */}
      <div className="absolute -top-10 -right-10 w-96 h-96 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M100,10 Q150,50 100,90 Q50,50 100,10 M100,110 Q150,150 100,190 Q50,150 100,110" fill="currentColor" className="text-primary"/>
        </svg>
      </div>
      
      <h2 ref={titleRef} className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-8">{slide.title}</h2>
      <p ref={mainRef} className="text-3xl text-foreground mb-8 relative">
        <span className="absolute -left-4 top-0 text-6xl text-primary/20">"</span>
        {slide.content.main}
        <span className="absolute -right-4 bottom-0 text-6xl text-primary/20">"</span>
      </p>
      <div ref={cardsRef} className="grid grid-cols-2 gap-8">
        {slide.content.keys.map((key, idx) => (
          <div key={idx} className="relative bg-gradient-to-br from-muted to-muted/50 p-8 rounded-lg border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg group overflow-hidden">
            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${colors[idx % colors.length]} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
            <p className="text-4xl mb-4 font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent relative z-10">{key.label}</p>
            <p className="text-2xl text-muted-foreground relative z-10">{key.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
