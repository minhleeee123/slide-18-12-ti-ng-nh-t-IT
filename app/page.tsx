"use client"

import { useState } from "react"
import { SlideContent } from "@/components/slide-content"
import { SlideNavigation } from "@/components/slide-navigation"
import { slides } from "@/lib/slides-data"

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-5xl aspect-video bg-card rounded-xl shadow-2xl border border-border overflow-hidden">
          <div className="h-full flex flex-col">
            <SlideContent slide={slides[currentSlide]} />

            <div className="px-12 py-6 border-t border-border">
              <p className="text-right text-muted-foreground text-xl">
                {currentSlide + 1} / {slides.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrev={prevSlide}
        onNext={nextSlide}
        onGoTo={setCurrentSlide}
      />
    </div>
  )
}
