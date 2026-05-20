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
    <section className="py-16 px-6 text-center" style={{ backgroundColor: palette.primary }}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#FFFFFF" }}>
          {data.headline}
        </h2>
        <p className="text-base mb-8 opacity-80" style={{ color: "#FFFFFF" }}>
          {data.subheadline}
        </p>
        <a
          href={href}
          target={data.ctaType === "whatsapp" ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-full font-semibold text-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: palette.accent, color: palette.primary }}
        >
          {data.ctaType === "whatsapp" && "📱 "}
          {data.ctaText}
        </a>
      </div>
    </section>
  )
}
