"use client"

import { Shield, Lock } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface ContentSlideProps {
  slide: {
    title: string
    items?: any[]
    icon?: string
    image?: string
  }
}

export function ContentSlide({ slide }: ContentSlideProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const itemsRef = useRef<HTMLUListElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "power3.out"
      })

      // Items stagger animation
      if (itemsRef.current) {
        gsap.from(itemsRef.current.children, {
          opacity: 0,
          x: -50,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          delay: 0.3
        })
      }

      // Image animation
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          opacity: 0,
          scale: 0.8,
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
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
              <rect x="20" y="20" width="60" height="60" rx="10" fill="currentColor" className="text-primary" />
              <rect x="100" y="20" width="60" height="60" rx="10" fill="currentColor" className="text-accent" />
              <rect x="20" y="100" width="60" height="60" rx="10" fill="currentColor" className="text-secondary" />
              <rect x="100" y="100" width="60" height="60" rx="10" fill="currentColor" className="text-primary" />
            </svg>
          </div>
        )}
        
        <h2 ref={titleRef} className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-8 flex items-center gap-4">
          {slide.icon === "shield" && <Shield className="w-12 h-12 text-primary" />}
          {slide.icon === "lock" && <Lock className="w-12 h-12 text-primary" />}
          {slide.title}
        </h2>
        <ul ref={itemsRef} className="space-y-6">
          {slide.items?.map((item: any, idx: number) => (
            <li key={idx} className="text-3xl text-foreground flex items-start gap-4 group">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg mt-1">{idx + 1}</span>
              <span className="flex-1">
                {typeof item === "string" ? (
                  item
                ) : (
                  <>
                    <span className="font-semibold">{item.label}</span>
                    <span className="text-muted-foreground ml-3">{item.person}</span>
                  </>
                )}
              </span>
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
