"use client"

import { Palette } from "@/types"

interface ImageTextData {
  imageUrl: string
  imagePosition: "left" | "right"
  title: string
  body: string
  ctaText?: string
  ctaLink?: string
}

export function ImageTextBlock({ data, palette }: { data: ImageTextData; palette: Palette }) {
  const isLeft = data.imagePosition === "left"

  return (
    <section className="py-16 px-6" style={{ backgroundColor: palette.background }}>
      <div className={`max-w-5xl mx-auto flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}>
        <div className="flex-1">
          {data.imageUrl ? (
            <img src={data.imageUrl} alt={data.title} className="rounded-2xl w-full object-cover aspect-video" />
          ) : (
            <div className="rounded-2xl w-full aspect-video flex items-center justify-center text-sm opacity-40" style={{ backgroundColor: palette.accent, color: palette.text }}>
              Adicione uma imagem
            </div>
          )}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: palette.text }}>
            {data.title}
          </h2>
          <p className="text-base leading-relaxed mb-6 opacity-80" style={{ color: palette.text }}>
            {data.body}
          </p>
          {data.ctaText && (
            <a
              href={data.ctaLink || "#"}
              className="inline-block px-6 py-3 rounded-full font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: palette.primary, color: "#FFFFFF" }}
            >
              {data.ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
