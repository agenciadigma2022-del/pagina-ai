"use client"

import { Palette } from "@/types"

interface HeroData {
  headline: string
  subheadline: string
  ctaText: string
  ctaLink: string
  imageUrl?: string
  backgroundType?: string
}

export function HeroBlock({ data, palette }: { data: HeroData; palette: Palette }) {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden" style={{ backgroundColor: palette.primary }}>
      {data.imageUrl && (
        <>
          <img src={data.imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to top, ${palette.primary}F8 0%, ${palette.primary}BB 40%, ${palette.primary}33 100%)` }}
          />
        </>
      )}

      <div className="relative z-10 w-full px-8 md:px-16 pb-20 pt-48 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-10" style={{ backgroundColor: palette.accent }} />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: palette.accent }}>
            Psicoterapia
          </span>
        </div>

        <h1 className="text-5xl md:text-[4.5rem] font-bold text-white leading-[1.05] mb-8 max-w-2xl">
          {data.headline}
        </h1>

        <p className="text-lg text-white/65 mb-12 max-w-md leading-relaxed">
          {data.subheadline}
        </p>

        <a
          href={data.ctaLink}
          className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:gap-5"
          style={{ backgroundColor: palette.accent, color: palette.primary }}
        >
          {data.ctaText} <span>→</span>
        </a>
      </div>
    </section>
  )
}
