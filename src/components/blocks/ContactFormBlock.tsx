"use client"

import { useState } from "react"
import { Palette } from "@/types"

interface ContactFormData {
  title: string
  fields: string[]
  ctaText: string
  successMessage: string
}

export function ContactFormBlock({ data, palette }: { data: ContactFormData; palette: Palette }) {
  const [submitted, setSubmitted] = useState(false)

  const fieldLabels: Record<string, string> = {
    name: "Nome completo",
    email: "E-mail",
    phone: "WhatsApp",
    message: "Mensagem",
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contato" className="py-16 px-6" style={{ backgroundColor: palette.background }}>
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: palette.text }}>
          {data.title}
        </h2>
        {submitted ? (
          <div className="text-center py-10 rounded-2xl" style={{ backgroundColor: palette.accent }}>
            <div className="text-4xl mb-4">✅</div>
            <p className="font-semibold" style={{ color: palette.primary }}>{data.successMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {data.fields.map((field) => (
              field === "message" ? (
                <textarea
                  key={field}
                  placeholder={fieldLabels[field] || field}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2"
                  style={{ borderColor: palette.accent, color: palette.text, backgroundColor: palette.background }}
                />
              ) : (
                <input
                  key={field}
                  type={field === "email" ? "email" : "text"}
                  placeholder={fieldLabels[field] || field}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2"
                  style={{ borderColor: palette.accent, color: palette.text, backgroundColor: palette.background }}
                />
              )
            ))}
            <button
              type="submit"
              className="w-full py-4 rounded-full font-semibold text-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: palette.primary, color: "#FFFFFF" }}
            >
              {data.ctaText}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
