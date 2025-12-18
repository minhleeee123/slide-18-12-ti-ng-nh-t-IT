import { Mail } from "lucide-react"

interface ExampleSlideProps {
  slide: {
    title: string
    content?: Array<{
      emoji: string
      label: string
      value: string
      desc: string
    }>
  }
}

export function ExampleSlide({ slide }: ExampleSlideProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-primary mb-12 flex items-center gap-4">
        <Mail className="w-12 h-12" />
        {slide.title}
      </h2>
      <div className="space-y-8">
        {slide.content?.map((item, idx) => (
          <div key={idx} className="bg-muted p-8 rounded-lg border-l-4 border-accent">
            <div className="flex items-start gap-6">
              <span className="text-5xl">{item.emoji}</span>
              <div className="flex-1">
                <p className="text-2xl font-semibold text-foreground mb-2">
                  {item.label} = {item.value}
                </p>
                <p className="text-xl text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
