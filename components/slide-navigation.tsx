"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SlideNavigationProps {
  currentSlide: number
  totalSlides: number
  onPrev: () => void
  onNext: () => void
  onGoTo: (index: number) => void
}

export function SlideNavigation({ currentSlide, totalSlides, onPrev, onNext, onGoTo }: SlideNavigationProps) {
  return (
    <div className="p-8 flex items-center justify-center gap-4">
      <Button
        onClick={onPrev}
        disabled={currentSlide === 0}
        size="lg"
        variant="outline"
        className="gap-2 bg-transparent"
      >
        <ChevronLeft className="w-5 h-5" />
        前へ
      </Button>
      <div className="flex gap-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onGoTo(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === currentSlide ? "bg-primary" : "bg-muted-foreground/30"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
      <Button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        size="lg"
        variant="outline"
        className="gap-2 bg-transparent"
      >
        次へ
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  )
}
