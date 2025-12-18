import { TitleSlide } from "./slides/title-slide"
import { ContentSlide } from "./slides/content-slide"
import { DefinitionSlide } from "./slides/definition-slide"
import { ProcessSlide } from "./slides/process-slide"
import { ExampleSlide } from "./slides/example-slide"
import { ComparisonSlide } from "./slides/comparison-slide"
import { TableSlide } from "./slides/table-slide"
import { SummarySlide } from "./slides/summary-slide"
import { EndSlide } from "./slides/end-slide"
import { QASlide } from "./slides/qa-slide"

interface SlideContentProps {
  slide: any
}

export function SlideContent({ slide }: SlideContentProps) {
  return (
    <div className="flex-1 p-12 flex flex-col justify-center">
      {slide.type === "title" && <TitleSlide slide={slide} />}
      {slide.type === "content" && <ContentSlide slide={slide} />}
      {slide.type === "definition" && <DefinitionSlide slide={slide} />}
      {slide.type === "process" && <ProcessSlide slide={slide} />}
      {slide.type === "example" && <ExampleSlide slide={slide} />}
      {slide.type === "comparison" && <ComparisonSlide slide={slide} />}
      {slide.type === "table" && <TableSlide slide={slide} />}
      {slide.type === "summary" && <SummarySlide slide={slide} />}
      {slide.type === "end" && <EndSlide slide={slide} />}
      {slide.type === "qa" && <QASlide slide={slide} />}
    </div>
  )
}
