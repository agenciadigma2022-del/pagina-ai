"use client"

import { Palette } from "@/types"

interface PricingData {
  title: string
  subtitle: string
  price: string
  installments: string
  features: string[]
  ctaText: string
  ctaLink: string
}

export function PricingBlock({ data, palette }: { data: PricingData; palette: Palette }) {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: palette.background }}>
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: palette.text }}>
          {data.title}
        </h2>
        <p className="text-sm mb-8 opacity-60" style={{ color: palette.text }}>{data.subtitle}</p>
        <div className="rounded-2xl p-8 shadow-lg" style={{ backgroundColor: palette.primary }}>
          <p className="text-5xl font-bold text-white mb-1">{data.price}</p>
          <p className="text-sm text-white opacity-70 mb-8">{data.installments}</p>
          <ul className="space-y-3 mb-8 text-left">
            {data.features.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-white text-sm">
                <span style={{ color: palette.accent }}>✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={data.ctaLink}
            className="block w-full py-4 rounded-full font-bold text-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: palette.accent, color: palette.primary }}
          >
            {data.ctaText}
          </a>
        </div>
      </div>
    </section>
  )
}
