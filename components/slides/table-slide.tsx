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
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-primary mb-12">{slide.title}</h2>
      <div className="overflow-hidden rounded-lg border border-border">
        <table className="w-full">
          <thead className="bg-primary text-primary-foreground">
            <tr>
              <th className="px-6 py-4 text-left text-xl font-semibold">タイプ</th>
              <th className="px-6 py-4 text-left text-xl font-semibold">鍵</th>
              <th className="px-6 py-4 text-left text-xl font-semibold">速度</th>
              <th className="px-6 py-4 text-left text-xl font-semibold">安全性</th>
            </tr>
          </thead>
          <tbody>
            {slide.data?.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-muted/30" : "bg-card"}>
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
