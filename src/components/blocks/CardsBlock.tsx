"use client"

import { Palette } from "@/types"

interface CardItem {
  icon: string
  title: string
  description: string
}

interface CardsData {
  title: string
  subtitle?: string
  items: CardItem[]
}

export function CardsBlock({ data, palette }: { data: CardsData; palette: Palette }) {
  return (
    <section className="py-16 md:py-24 px-5 sm:px-8 md:px-16" style={{ backgroundColor: palette.background }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 md:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: palette.accent }} />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: palette.accent }}>
              Especialidades
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight max-w-xl" style={{ color: palette.text }}>
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="mt-4 text-base opacity-60 max-w-lg" style={{ color: palette.text }}>
              {data.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: `${palette.text}15` }}>
          {data.items.map((item, i) => (
            <div key={i} className="p-8 group transition-colors duration-300" style={{ backgroundColor: palette.background }}>
              <span className="block text-xs font-bold tracking-[0.2em] mb-6 opacity-40" style={{ color: palette.text }}>
                {item.icon}
              </span>
              <h3 className="font-bold text-lg mb-3 leading-snug" style={{ color: palette.text }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-60" style={{ color: palette.text }}>
                {item.description}
              </p>
              <div className="mt-6 h-px w-0 group-hover:w-8 transition-all duration-300" style={{ backgroundColor: palette.accent }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
