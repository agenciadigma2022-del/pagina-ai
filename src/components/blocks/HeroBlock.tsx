"use client"

import { Palette } from "@/types"

interface HeroData {
  headline: string
  subheadline: string
  ctaText: string
  ctaLink: string
  imageUrl?: string
  backgroundType: "color" | "image" | "photo"
}

export function HeroBlock({ data, palette }: { data: HeroData; palette: Palette }) {
  return (
    <section
      className="relative min-h-[80vh] flex items-center px-6 py-20"
      style={{ backgroundColor: palette.primary }}
    >
      {data.imageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${data.imageUrl})` }}
        />
      )}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: "#FFFFFF" }}>
          {data.headline}
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90" style={{ color: "#FFFFFF" }}>
          {data.subheadline}
        </p>
        <a
          href={data.ctaLink}
          className="inline-block px-8 py-4 rounded-full font-semibold text-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: palette.accent, color: palette.primary }}
        >
          {data.ctaText}
        </a>
      </div>
    </section>
  )
}
