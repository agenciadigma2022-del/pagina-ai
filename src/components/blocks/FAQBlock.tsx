"use client"

import { useState } from "react"
import { Palette } from "@/types"

interface FAQItem {
  question: string
  answer: string
}

interface FAQData {
  title: string
  items: FAQItem[]
}

export function FAQBlock({ data, palette }: { data: FAQData; palette: Palette }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-16 px-6" style={{ backgroundColor: palette.background }}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: palette.text }}>
          {data.title}
        </h2>
        <div className="space-y-3">
          {data.items.map((item, i) => (
            <div key={i} className="rounded-xl overflow-hidden border" style={{ borderColor: palette.accent }}>
              <button
                className="w-full text-left px-5 py-4 flex justify-between items-center font-medium"
                style={{ backgroundColor: open === i ? palette.primary : palette.accent, color: open === i ? "#FFFFFF" : palette.text }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {item.question}
                <span className="ml-4 text-lg">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="px-5 py-4 text-sm leading-relaxed" style={{ color: palette.text, backgroundColor: palette.background }}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
