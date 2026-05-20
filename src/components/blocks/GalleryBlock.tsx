"use client"

import { Palette } from "@/types"

interface GalleryData {
  title: string
  subtitle: string
  images: string[]
  columns: number
}

export function GalleryBlock({ data, palette }: { data: GalleryData; palette: Palette }) {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: palette.background }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: palette.text }}>
          {data.title}
        </h2>
        <p className="text-center mb-10 opacity-60 text-sm" style={{ color: palette.text }}>
          {data.subtitle}
        </p>
        {(data.images ?? []).length > 0 ? (
          <div className={`grid grid-cols-2 md:grid-cols-${data.columns} gap-4`}>
            {(data.images ?? []).map((src, i) => (
              <img key={i} src={src} alt={`Resultado ${i + 1}`} className="rounded-xl w-full object-cover aspect-square" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xl aspect-square flex items-center justify-center text-xs opacity-30" style={{ backgroundColor: palette.accent, color: palette.text }}>
                Foto {i + 1}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
