"use client"

import { Palette } from "@/types"

interface CardItem {
  icon: string
  title: string
  description: string
}

interface CardsData {
  title: string
  items: CardItem[]
}

export function CardsBlock({ data, palette }: { data: CardsData; palette: Palette }) {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: palette.background }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: palette.text }}>
          {data.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.items.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl text-center"
              style={{ backgroundColor: palette.accent }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: palette.primary }}>
                {item.title}
              </h3>
              <p className="text-sm opacity-80" style={{ color: palette.text }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
