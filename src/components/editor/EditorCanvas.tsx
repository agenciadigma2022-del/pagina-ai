"use client"

import { useEditor } from "./EditorContext"
import { BlockRenderer } from "@/components/blocks/BlockRenderer"

export function EditorCanvas() {
  const { blocks, palette, selectedId, select, deselect } = useEditor()

  return (
    <div
      className="max-w-2xl mx-auto my-6 rounded-2xl overflow-hidden shadow-xl border border-gray-200"
      onClick={() => deselect()}
    >
      {blocks.map((block) => {
        const isSelected = selectedId === block.id
        return (
          <div
            key={block.id}
            className="relative group"
            onClick={(e) => {
              e.stopPropagation()
              select(block.id)
            }}
          >
            {/* Overlay de seleção */}
            <div
              className={`absolute inset-0 z-10 pointer-events-none transition-all duration-150 ${
                isSelected
                  ? "ring-2 ring-violet-500 ring-inset"
                  : "group-hover:ring-2 group-hover:ring-violet-300 group-hover:ring-inset"
              }`}
            />

            {/* Badge do tipo do bloco */}
            {isSelected && (
              <div className="absolute top-2 left-2 z-20 bg-violet-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full capitalize pointer-events-none">
                {block.type.replace("-", " ")}
              </div>
            )}

            <BlockRenderer block={block} palette={palette} />
          </div>
        )
      })}
    </div>
  )
}
