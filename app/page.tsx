"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Lock, Shield, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    type: "title",
    title: "公開鍵暗号",
    subtitle: "インターネットを守る技術",
    footer: "グループ 4",
  },
  {
    id: 2,
    type: "content",
    title: "発表の流れ",
    items: [
      { label: "理由", person: "[担当者A]" },
      { label: "言葉の意味", person: "[担当者B]" },
      { label: "仕組みと例", person: "[担当者C]" },
      { label: "まとめ", person: "[担当者D]" },
    ],
  },
  {
    id: 3,
    type: "content",
    title: "テーマを選んだ理由",
    items: ["セキュリティは大切", "仕組みを知りたい", "簡単に説明したい"],
    icon: "shield",
  },
  {
    id: 4,
    type: "content",
    title: "なぜ暗号が必要ですか",
    items: ["インターネットは危険", "データが盗まれる", "解決策 → 公開鍵暗号"],
    icon: "lock",
  },
  {
    id: 5,
    type: "definition",
    title: "公開鍵暗号とは",
    content: {
      main: "鍵が２つあります",
      keys: [
        { label: "🔑 公開鍵 (Public Key)", desc: "みんなの鍵" },
        { label: "🗝️ 秘密鍵 (Private Key)", desc: "自分だけの鍵" },
      ],
    },
  },
  {
    id: 6,
    type: "process",
    title: "仕組み",
    steps: [
      { title: "暗号化", desc: "使う鍵：公開鍵", sub: "誰でもロックできる" },
      { title: "復号", desc: "使う鍵：秘密鍵", sub: "本人だけが開ける" },
    ],
  },
  {
    id: 7,
    type: "example",
    title: "例：ポスト",
    content: [
      { emoji: "📮", label: "投入口", value: "公開鍵 (Public Key)", desc: "手紙を入れる → OK" },
      { emoji: "🗝️", label: "ポストの鍵", value: "秘密鍵 (Private Key)", desc: "手紙を取り出す → Chỉ chủ nhà" },
    ],
  },
  {
    id: 8,
    type: "comparison",
    title: "メリットとデメリット",
    pros: ["管理が簡単", "安全性が高い"],
    cons: ["計算が複雑", "処理が遅い"],
  },
  {
    id: 9,
    type: "table",
    title: "昔の暗号と比較",
    data: [
      { type: "共通鍵", keys: "鍵は１つ", speed: "速い", safety: "⚠️ 危険" },
      { type: "公開鍵", keys: "鍵は２つ", speed: "遅い", safety: "✅ 安全" },
    ],
  },
  {
    id: 10,
    type: "summary",
    title: "まとめ",
    points: ["鍵はペアです", "公開鍵でロック", "秘密鍵でオープン"],
  },
  {
    id: 11,
    type: "content",
    title: "今後の発展",
    items: ["銀行", "ブロックチェーン", "もっと強いセキュリティへ"],
  },
  {
    id: 12,
    type: "end",
    message: "ご清聴ありがとうございました",
  },
  {
    id: 13,
    type: "qa",
    message: "質疑応答",
    submessage: "質問はありますか？",
  },
]

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

  const slide = slides[currentSlide]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-5xl aspect-video bg-card rounded-xl shadow-2xl border border-border overflow-hidden">
          <div className="h-full flex flex-col">
            {/* Slide Content */}
            <div className="flex-1 p-12 flex flex-col justify-center">
              {slide.type === "title" && (
                <div className="text-center space-y-8">
                  <h1 className="text-7xl font-bold text-primary mb-4">{slide.title}</h1>
                  <p className="text-3xl text-muted-foreground">{slide.subtitle}</p>
                  <div className="mt-16 pt-8 border-t border-border">
                    <p className="text-2xl text-foreground">{slide.footer}</p>
                  </div>
                </div>
              )}

              {slide.type === "content" && (
                <div className="space-y-8">
                  <h2 className="text-5xl font-bold text-primary mb-8 flex items-center gap-4">
                    {slide.icon === "shield" && <Shield className="w-12 h-12" />}
                    {slide.icon === "lock" && <Lock className="w-12 h-12" />}
                    {slide.title}
                  </h2>
                  <ul className="space-y-6">
                    {slide.items?.map((item: any, idx: number) => (
                      <li key={idx} className="text-3xl text-foreground flex items-start gap-4">
                        <span className="text-accent font-bold">•</span>
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
              )}

              {slide.type === "definition" && (
                <div className="space-y-10">
                  <h2 className="text-5xl font-bold text-primary mb-8">{slide.title}</h2>
                  <p className="text-3xl text-foreground mb-8">{slide.content.main}</p>
                  <div className="grid grid-cols-2 gap-8">
                    {slide.content.keys.map((key: any, idx: number) => (
                      <div key={idx} className="bg-muted p-8 rounded-lg border-2 border-primary/20">
                        <p className="text-4xl mb-4">{key.label}</p>
                        <p className="text-2xl text-muted-foreground">{key.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {slide.type === "process" && (
                <div className="space-y-8">
                  <h2 className="text-5xl font-bold text-primary mb-12">{slide.title}</h2>
                  <div className="grid grid-cols-2 gap-12">
                    {slide.steps?.map((step: any, idx: number) => (
                      <div key={idx} className="space-y-4">
                        <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                          <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
                          <p className="text-xl">{step.desc}</p>
                        </div>
                        <p className="text-2xl text-muted-foreground pl-2">{step.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {slide.type === "example" && (
                <div className="space-y-8">
                  <h2 className="text-5xl font-bold text-primary mb-12 flex items-center gap-4">
                    <Mail className="w-12 h-12" />
                    {slide.title}
                  </h2>
                  <div className="space-y-8">
                    {slide.content?.map((item: any, idx: number) => (
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
              )}

              {slide.type === "comparison" && (
                <div className="space-y-8">
                  <h2 className="text-5xl font-bold text-primary mb-12">{slide.title}</h2>
                  <div className="grid grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-accent mb-6">👍 メリット</h3>
                      <ul className="space-y-4">
                        {slide.pros?.map((pro: string, idx: number) => (
                          <li key={idx} className="text-2xl text-foreground flex items-start gap-3">
                            <span className="text-accent">✓</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-destructive mb-6">👎 デメリット</h3>
                      <ul className="space-y-4">
                        {slide.cons?.map((con: string, idx: number) => (
                          <li key={idx} className="text-2xl text-foreground flex items-start gap-3">
                            <span className="text-destructive">✗</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {slide.type === "table" && (
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
                        {slide.data?.map((row: any, idx: number) => (
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
              )}

              {slide.type === "summary" && (
                <div className="space-y-8">
                  <h2 className="text-5xl font-bold text-primary mb-12">{slide.title}</h2>
                  <ul className="space-y-6">
                    {slide.points?.map((point: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-6 text-3xl">
                        <span className="flex items-center justify-center w-12 h-12 bg-accent text-accent-foreground rounded-full font-bold">
                          ✓
                        </span>
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {slide.type === "end" && (
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-primary">{slide.message}</h1>
                </div>
              )}

              {slide.type === "qa" && (
                <div className="text-center space-y-8">
                  <h1 className="text-6xl font-bold text-primary mb-8">{slide.message}</h1>
                  <p className="text-4xl text-muted-foreground">{slide.submessage}</p>
                </div>
              )}
            </div>

            {/* Slide Number */}
            <div className="px-12 py-6 border-t border-border">
              <p className="text-right text-muted-foreground text-xl">
                {currentSlide + 1} / {slides.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-8 flex items-center justify-center gap-4">
        <Button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          size="lg"
          variant="outline"
          className="gap-2 bg-transparent"
        >
          <ChevronLeft className="w-5 h-5" />
          前へ
        </Button>
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === currentSlide ? "bg-primary" : "bg-muted-foreground/30"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
        <Button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          size="lg"
          variant="outline"
          className="gap-2 bg-transparent"
        >
          次へ
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
