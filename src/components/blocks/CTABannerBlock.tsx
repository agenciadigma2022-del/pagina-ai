"use client"

import { Palette } from "@/types"

interface CTABannerData {
  headline: string
  subheadline: string
  ctaText: string
  ctaLink: string
  ctaType: "default" | "whatsapp"
}

export function CTABannerBlock({ data, palette }: { data: CTABannerData; palette: Palette }) {
  const href = data.ctaType === "whatsapp"
    ? `https://wa.me/55?text=${encodeURIComponent(data.ctaText)}`
    : data.ctaLink

  return (
    <section className="py-16 md:py-24 px-5 sm:px-8 md:px-16" style={{ backgroundColor: palette.secondary || palette.primary }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="h-px w-10" style={{ backgroundColor: palette.accent }} />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: palette.accent }}>
                Próximo passo
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
              {data.headline}
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-lg text-white/65 leading-relaxed">
              {data.subheadline}
            </p>
            <a
              href={href}
              target={data.ctaType === "whatsapp" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 md:px-8 py-4 font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:gap-5 self-start min-h-[52px]"
              style={{ backgroundColor: palette.accent, color: palette.primary }}
            >
              {data.ctaText} <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
