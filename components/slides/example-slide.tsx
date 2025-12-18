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
  const borderColors = ['border-blue-500', 'border-purple-500', 'border-green-500', 'border-orange-500'];
  
  return (
    <div className="relative space-y-8">
      {/* Email decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="currentColor">
          <rect x="20" y="60" width="160" height="100" rx="10" stroke="currentColor" strokeWidth="4" fill="none"/>
          <path d="M20,60 L100,120 L180,60" stroke="currentColor" strokeWidth="4" fill="none"/>
        </svg>
      </div>
      
      <h2 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-12 flex items-center gap-4">
        <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-xl">
          <Mail className="w-12 h-12 text-white" />
        </div>
        {slide.title}
      </h2>
      <div className="space-y-8">
        {slide.content?.map((item, idx) => (
          <div key={idx} className={`bg-gradient-to-r from-muted to-muted/50 p-8 rounded-lg border-l-4 ${borderColors[idx % borderColors.length]} hover:shadow-lg transition-all relative overflow-hidden group`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform"></div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="text-5xl bg-white dark:bg-gray-800 p-3 rounded-xl shadow-md">{item.emoji}</div>
              <div className="flex-1">
                <p className="text-2xl font-semibold text-foreground mb-2">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{item.label}</span> = {item.value}
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
