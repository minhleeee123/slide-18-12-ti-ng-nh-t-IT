interface TableSlideProps {
  slide: {
    title: string
    data?: Array<{
      type: string
      keys: string
      speed: string
      safety: string
    }>
  }
}

export function TableSlide({ slide }: TableSlideProps) {
  return (
    <div className="relative space-y-8">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 400 300" className="w-full h-full">
          <rect x="50" y="50" width="100" height="80" rx="5" fill="currentColor" className="text-primary"/>
          <rect x="170" y="50" width="100" height="80" rx="5" fill="currentColor" className="text-accent"/>
          <rect x="290" y="50" width="100" height="80" rx="5" fill="currentColor" className="text-secondary"/>
        </svg>
      </div>
      
      <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-12">{slide.title}</h2>
      <div className="overflow-hidden rounded-xl border-2 border-primary/20 shadow-xl relative z-10">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground">
            <tr>
              <th className="px-6 py-4 text-left text-xl font-semibold">タイプ</th>
              <th className="px-6 py-4 text-left text-xl font-semibold">鍵</th>
              <th className="px-6 py-4 text-left text-xl font-semibold">速度</th>
              <th className="px-6 py-4 text-left text-xl font-semibold">安全性</th>
            </tr>
          </thead>
          <tbody>
            {slide.data?.map((row, idx) => (
              <tr key={idx} className={`${idx % 2 === 0 ? "bg-gradient-to-r from-muted/50 to-muted/30" : "bg-card"} hover:bg-primary/5 transition-colors`}>
                <td className="px-6 py-4 text-xl font-medium">{row.type}</td>
                <td className="px-6 py-4 text-xl">{row.keys}</td>
                <td className="px-6 py-4 text-xl">{row.speed}</td>
                <td className="px-6 py-4 text-xl">{row.safety}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
