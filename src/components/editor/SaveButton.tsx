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
  const { blocks, palette } = useEditor()
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle")

  async function handleSave() {
    setStatus("saving")
    const result = await saveSite(siteId, title, niche, blocks, palette)
    if (result.ok) {
      setStatus("saved")
      setTimeout(() => setStatus("idle"), 2500)
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
    <button
      onClick={handleSave}
      disabled={status === "saving"}
      className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-colors disabled:opacity-60 ${colors}`}
    >
      {label}
    </button>
  )
}
