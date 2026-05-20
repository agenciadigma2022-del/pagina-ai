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
  return (
    <section className="py-16 px-6" style={{ backgroundColor: palette.accent }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-shrink-0">
          {data.imageUrl ? (
            <img src={data.imageUrl} alt={data.name} className="w-56 h-56 rounded-full object-cover shadow-lg" />
          ) : (
            <div className="w-56 h-56 rounded-full flex items-center justify-center text-5xl shadow-lg" style={{ backgroundColor: palette.primary }}>
              👤
            </div>
          )}
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: palette.secondary }}>
            {data.title}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: palette.text }}>
            {data.name}
          </h2>
          <p className="text-base leading-relaxed mb-6 opacity-80" style={{ color: palette.text }}>
            {data.bio}
          </p>
          <ul className="space-y-2">
            {data.credentials.map((c, i) => (
              <li key={i} className="flex items-center gap-2 text-sm font-medium" style={{ color: palette.primary }}>
                <span>✓</span> {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
