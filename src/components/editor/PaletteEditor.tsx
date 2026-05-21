"use client"

import { useEditor } from "./EditorContext"
import { Palette } from "@/types"

const LABELS: Record<keyof Palette, string> = {
  primary: "Principal",
  secondary: "Secundária",
  accent: "Destaque",
  background: "Fundo",
  text: "Texto",
}

export function PaletteEditor() {
  const { palette, updatePalette } = useEditor()

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3 px-1">
        Cores
      </p>
      <div className="space-y-2">
        {(Object.keys(LABELS) as (keyof Palette)[]).map((key) => (
          <label
            key={key}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer group"
          >
            <div className="relative w-7 h-7 rounded-md overflow-hidden border border-gray-200 shrink-0">
              <div className="absolute inset-0" style={{ backgroundColor: palette[key] }} />
              <input
                type="color"
                value={palette[key]}
                onChange={(e) => updatePalette(key, e.target.value)}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-sm text-gray-700">{LABELS[key]}</span>
              <span className="block text-xs text-gray-400 font-mono">{palette[key]}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}
