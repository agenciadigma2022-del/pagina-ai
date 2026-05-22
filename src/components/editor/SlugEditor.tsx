"use client"

import { useState, useEffect, useRef } from "react"
import { useEditor } from "./EditorContext"
import { checkSlugAvailable } from "@/app/actions/sites"

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

export function SlugEditor({ siteId }: { siteId: string }) {
  const { slug, updateSlug } = useEditor()
  const [input, setInput] = useState(slug)
  const [status, setStatus] = useState<"idle" | "checking" | "available" | "taken" | "invalid">("idle")
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setInput(slug)
  }, [slug])

  function handleChange(value: string) {
    const clean = value.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
    setInput(clean)

    if (debounceRef.current) clearTimeout(debounceRef.current)

    if (!clean || clean === slug) {
      setStatus("idle")
      return
    }

    if (!SLUG_RE.test(clean)) {
      setStatus("invalid")
      return
    }

    setStatus("checking")
    debounceRef.current = setTimeout(async () => {
      const available = await checkSlugAvailable(clean, siteId)
      setStatus(available ? "available" : "taken")
      if (available) updateSlug(clean)
    }, 600)
  }

  const hint =
    status === "checking" ? "Verificando..." :
    status === "available" ? "✓ Disponível" :
    status === "taken" ? "✗ Já em uso" :
    status === "invalid" ? "Use apenas letras, números e hífens" :
    null

  const hintColor =
    status === "available" ? "text-green-500" :
    status === "taken" || status === "invalid" ? "text-red-500" :
    "text-gray-400"

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3 px-1">
        Endereço do site
      </p>
      <div className="px-1">
        <div className="flex items-center gap-1 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 focus-within:ring-2 focus-within:ring-violet-300 focus-within:border-transparent">
          <span className="text-xs text-gray-400 shrink-0">…/p/</span>
          <input
            type="text"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            className="flex-1 bg-transparent text-xs text-gray-800 outline-none min-w-0 font-medium"
            placeholder="seu-nome"
          />
        </div>
        {hint && <p className={`text-xs mt-1.5 ${hintColor}`}>{hint}</p>}
        {!hint && input && (
          <p className="text-xs mt-1.5 text-gray-400">
            empreendify.com.br/p/{input}
          </p>
        )}
      </div>
    </div>
  )
}
