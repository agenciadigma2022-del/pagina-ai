"use client"

import { useRef, useState } from "react"
import { uploadSiteImage } from "@/app/actions/storage"

interface Props {
  value: string
  onChange: (url: string) => void
  placeholder?: string
}

export function ImageUpload({ value, onChange, placeholder = "https://..." }: Props) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError(null)

    const formData = new FormData()
    formData.append("file", file)

    const result = await uploadSiteImage(formData)

    if (result.url) {
      onChange(result.url)
    } else {
      setError(result.error ?? "Erro ao fazer upload")
    }

    setUploading(false)
    if (inputRef.current) inputRef.current.value = ""
  }

  return (
    <div className="space-y-2">
      {/* Preview */}
      {value && value.startsWith("http") && (
        <div className="w-full h-28 rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={value}
            alt="Preview"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Botão de upload */}
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        className="hidden"
        onChange={handleFile}
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="w-full py-2.5 border-2 border-dashed border-gray-200 rounded-xl text-xs font-medium text-gray-500 hover:border-violet-300 hover:text-violet-600 hover:bg-violet-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {uploading
          ? "⏳ Enviando..."
          : value
          ? "🔄 Trocar imagem"
          : "📷 Enviar foto do computador"}
      </button>

      {/* Input de URL como alternativa */}
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => { setError(null); onChange(e.target.value) }}
          placeholder={placeholder}
          className="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs text-gray-600 outline-none focus:ring-2 focus:ring-violet-300 bg-white placeholder:text-gray-300"
        />
      </div>
      <p className="text-xs text-gray-400">
        Envie uma foto <strong>ou</strong> cole uma URL (ex: unsplash.com)
      </p>

      {error && (
        <p className="text-xs text-red-500 bg-red-50 rounded-lg px-3 py-2">{error}</p>
      )}
    </div>
  )
}
