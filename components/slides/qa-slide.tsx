"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface QASlideProps {
  slide: {
    message: string
    submessage: string
  }
}

export function QASlide({ slide }: QASlideProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const messageRef = useRef<HTMLDivElement>(null)
  const submessageRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(messageRef.current, {
        opacity: 0,
        rotationY: 180,
        duration: 1,
        ease: "back.out(1.7)"
      })

      gsap.from(submessageRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5
      })

      gsap.to(messageRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative text-center space-y-8">
      {/* Q&A decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        
        {/* Question mark decorations */}
        <div className="absolute top-10 right-20 text-primary/10 text-9xl font-bold">?</div>
        <div className="absolute bottom-20 left-20 text-accent/10 text-7xl font-bold">Q</div>
        
        {/* Speech bubble decoration */}
        <svg className="absolute top-1/4 left-10 w-32 h-32 text-secondary/10" viewBox="0 0 100 100" fill="currentColor">
          <rect x="10" y="10" width="70" height="50" rx="10"/>
          <polygon points="30,60 20,80 40,60"/>
        </svg>
        <svg className="absolute bottom-1/4 right-10 w-40 h-40 text-primary/10" viewBox="0 0 100 100" fill="currentColor">
          <rect x="10" y="10" width="70" height="50" rx="10"/>
          <polygon points="70,60 80,80 60,60"/>
        </svg>
      </div>
      
      <div className="relative z-10">
        <div ref={messageRef} className="inline-block bg-gradient-to-br from-primary to-accent p-6 rounded-3xl mb-8 shadow-2xl">
          <h1 className="text-7xl font-bold text-white">{slide.message}</h1>
        </div>
        <p ref={submessageRef} className="text-4xl text-muted-foreground bg-muted/50 inline-block px-8 py-4 rounded-2xl">{slide.submessage}</p>
      </div>
    </div>
  )
}
