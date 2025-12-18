import { Shield, Lock } from "lucide-react"

interface ContentSlideProps {
  slide: {
    title: string
    items?: any[]
    icon?: string
  }
}

export function ContentSlide({ slide }: ContentSlideProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-primary mb-8 flex items-center gap-4">
        {slide.icon === "shield" && <Shield className="w-12 h-12" />}
        {slide.icon === "lock" && <Lock className="w-12 h-12" />}
        {slide.title}
      </h2>
      <ul className="space-y-6">
        {slide.items?.map((item: any, idx: number) => (
          <li key={idx} className="text-3xl text-foreground flex items-start gap-4">
            <span>
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
  )
}
