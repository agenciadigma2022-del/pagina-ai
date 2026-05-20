"use client"

import { Palette } from "@/types"

interface TestimonialItem {
  name: string
  role: string
  text: string
  avatarUrl?: string
}

interface TestimonialsData {
  title: string
  items: TestimonialItem[]
}

const DEFAULT_ITEMS: TestimonialItem[] = [
  { name: "Maria S.", role: "Cliente", text: "Excelente serviço! Superou minhas expectativas.", avatarUrl: "" },
  { name: "João P.", role: "Cliente", text: "Muito profissional e atencioso. Recomendo!", avatarUrl: "" },
  { name: "Ana L.", role: "Cliente", text: "Resultado incrível. Com certeza voltarei.", avatarUrl: "" },
]

export function TestimonialsBlock({ data, palette }: { data: TestimonialsData; palette: Palette }) {
  const items = data.items ?? DEFAULT_ITEMS

  return (
    <section className="py-16 px-6" style={{ backgroundColor: palette.accent }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: palette.primary }}>
          {data.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl shadow-sm" style={{ backgroundColor: palette.background }}>
              <div className="flex mb-2">
                {"★★★★★".split("").map((s, j) => (
                  <span key={j} style={{ color: palette.primary }}>{s}</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4 opacity-80" style={{ color: palette.text }}>
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                {item.avatarUrl ? (
                  <img src={item.avatarUrl} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: palette.primary }}>
                    {item.name[0]}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-sm" style={{ color: palette.text }}>{item.name}</p>
                  <p className="text-xs opacity-60" style={{ color: palette.text }}>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
