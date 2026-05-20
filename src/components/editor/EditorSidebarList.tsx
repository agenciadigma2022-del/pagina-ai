"use client"

import { useEditor } from "./EditorContext"

export function EditorSidebarList() {
  const { blocks, selectedId, select } = useEditor()

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2 px-1">
        Seções
      </p>
      <ul className="space-y-1">
        {blocks.map((block, i) => {
          const isSelected = selectedId === block.id
          return (
            <li key={block.id}>
              <button
                onClick={() => select(block.id)}
                className={`w-full text-left text-sm px-3 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                  isSelected
                    ? "bg-violet-100 text-violet-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span className={`text-xs ${isSelected ? "text-violet-400" : "text-gray-300"}`}>{i + 1}</span>
                <span className="capitalize">{block.type.replace("-", " ")}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
