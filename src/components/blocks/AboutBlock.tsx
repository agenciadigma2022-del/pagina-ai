"use client"

import { Palette } from "@/types"

interface AboutData {
  name: string
  imageUrl: string
  title: string
  bio: string
  credentials: string[]
}

export function AboutBlock({ data, palette }: { data: AboutData; palette: Palette }) {
  const credentials = data.credentials ?? []

  return (
    <section className="py-24 px-8 md:px-16 overflow-hidden" style={{ backgroundColor: palette.primary }}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Foto */}
        <div className="relative">
          {data.imageUrl ? (
            <img
              src={data.imageUrl}
              alt={data.name}
              className="w-full aspect-[3/4] object-cover"
              style={{ filter: "grayscale(20%)" }}
            />
          ) : (
            <div
              className="w-full aspect-[3/4] flex items-center justify-center text-6xl opacity-20"
              style={{ backgroundColor: `${palette.background}22` }}
            >
              👤
            </div>
          )}
          {/* Badge de credencial */}
          {credentials[0] && (
            <div
              className="absolute bottom-6 left-6 px-4 py-3"
              style={{ backgroundColor: palette.accent }}
            >
              <p className="text-xs font-bold tracking-widest" style={{ color: palette.primary }}>
                {credentials[0]}
              </p>
            </div>
          )}
        </div>

        {/* Texto */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10" style={{ backgroundColor: palette.accent }} />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: palette.accent }}>
              {data.title}
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            {data.name}
          </h2>

          <p className="text-base text-white/65 leading-relaxed mb-10">
            {data.bio}
          </p>

          <ul className="space-y-3">
            {credentials.slice(1).map((c, i) => (
              <li key={i} className="flex items-center gap-3 text-sm" style={{ color: palette.accent }}>
                <span className="text-xs">—</span>
                <span className="text-white/80">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
