"use client"

import { useState } from "react"
import { useEditor } from "./EditorContext"
import { saveSite } from "@/app/actions/sites"

interface Props {
  siteId: string
  title: string
  niche: string
}

export function SaveButton({ siteId, title, niche }: Props) {
  const { blocks, palette, slug } = useEditor()
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle")
  const [upgradeMsg, setUpgradeMsg] = useState<string | null>(null)

  async function handleSave() {
    setStatus("saving")
    setUpgradeMsg(null)
    const result = await saveSite(siteId, slug, title, niche, blocks, palette)
    if (result.ok) {
      setStatus("saved")
      setTimeout(() => setStatus("idle"), 2500)
    } else if (result.upgrade) {
      setStatus("idle")
      setUpgradeMsg(result.error ?? "Faça upgrade para salvar mais sites.")
    } else {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  const label =
    status === "saving" ? "Salvando..." :
    status === "saved"  ? "Salvo ✓" :
    status === "error"  ? "Erro ao salvar" :
    "Salvar alterações"

  const colors =
    status === "saved"  ? "bg-green-500 text-white" :
    status === "error"  ? "bg-red-500 text-white" :
    "bg-gray-800 hover:bg-gray-700 text-white"

  return (
    <div className="space-y-2">
      <button
        onClick={handleSave}
        disabled={status === "saving"}
        className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-colors disabled:opacity-60 ${colors}`}
      >
        {label}
      </button>

      {upgradeMsg && (
        <div className="rounded-xl bg-violet-50 border border-violet-200 p-3 text-xs text-violet-800 leading-snug">
          <p className="font-semibold mb-1">Limite do plano gratuito</p>
          <p className="mb-2">{upgradeMsg}</p>
          <a
            href="/dashboard"
            className="inline-block bg-violet-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-violet-700 transition-colors"
          >
            Ver planos Pro →
          </a>
        </div>
      )}
    </div>
  )
}
