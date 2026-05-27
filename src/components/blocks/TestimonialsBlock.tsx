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
    <section className="py-16 md:py-24 px-5 sm:px-8 md:px-16" style={{ backgroundColor: palette.background }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 md:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: palette.accent }} />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: palette.accent }}>
              Depoimentos
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight max-w-xl" style={{ color: palette.text }}>
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: `${palette.text}15` }}>
          {items.map((item, i) => (
            <div key={i} className="p-8 flex flex-col justify-between" style={{ backgroundColor: palette.background }}>
              <div>
                <span className="block text-5xl font-serif leading-none mb-6" style={{ color: palette.accent }}>
                  ❝
                </span>
                <p className="text-base leading-relaxed mb-8" style={{ color: palette.text, opacity: 0.75 }}>
                  {item.text}
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6" style={{ borderTop: `1px solid ${palette.text}15` }}>
                {item.avatarUrl ? (
                  <img src={item.avatarUrl} alt={item.name} className="w-9 h-9 rounded-full object-cover" />
                ) : (
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: palette.primary }}
                  >
                    {item.name[0]}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-sm" style={{ color: palette.text }}>{item.name}</p>
                  <p className="text-xs" style={{ color: palette.accent }}>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
