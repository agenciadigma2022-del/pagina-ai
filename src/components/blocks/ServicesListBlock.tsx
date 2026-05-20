"use client"

import { Palette } from "@/types"

interface ServiceItem {
  icon: string
  name: string
  description: string
  price?: string
}

interface ServicesListData {
  title: string
  items: ServiceItem[]
}

export function ServicesListBlock({ data, palette }: { data: ServicesListData; palette: Palette }) {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: palette.background }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: palette.text }}>
          {data.title}
        </h2>
        <div className="space-y-4">
          {data.items.map((item, i) => (
            <div key={i} className="flex items-center justify-between p-5 rounded-2xl" style={{ backgroundColor: palette.accent }}>
              <div className="flex items-center gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-semibold" style={{ color: palette.text }}>{item.name}</p>
                  <p className="text-sm opacity-70" style={{ color: palette.text }}>{item.description}</p>
                </div>
              </div>
              {item.price && (
                <span className="font-bold text-lg ml-4 flex-shrink-0" style={{ color: palette.primary }}>
                  {item.price}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
