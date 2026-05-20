"use client"

import { createContext, useContext, useState } from "react"
import { Block, Palette } from "@/types"

interface EditorContextValue {
  blocks: Block[]
  palette: Palette
  selectedId: string | null
  select: (id: string) => void
  deselect: () => void
  updateBlock: (id: string, data: Record<string, unknown>) => void
  moveBlock: (id: string, direction: "up" | "down") => void
}

const EditorContext = createContext<EditorContextValue | null>(null)

export function EditorProvider({
  children,
  initialBlocks,
  palette,
}: {
  children: React.ReactNode
  initialBlocks: Block[]
  palette: Palette
}) {
  const [blocks, setBlocks] = useState<Block[]>(initialBlocks)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  function select(id: string) {
    setSelectedId(id)
  }

  function deselect() {
    setSelectedId(null)
  }

  function updateBlock(id: string, data: Record<string, unknown>) {
    setBlocks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, data: { ...b.data, ...data } } : b))
    )
  }

  function moveBlock(id: string, direction: "up" | "down") {
    setBlocks((prev) => {
      const idx = prev.findIndex((b) => b.id === id)
      if (idx === -1) return prev
      const next = [...prev]
      const swap = direction === "up" ? idx - 1 : idx + 1
      if (swap < 0 || swap >= next.length) return prev
      ;[next[idx], next[swap]] = [next[swap], next[idx]]
      return next
    })
  }

  return (
    <EditorContext.Provider value={{ blocks, palette, selectedId, select, deselect, updateBlock, moveBlock }}>
      {children}
    </EditorContext.Provider>
  )
}

export function useEditor() {
  const ctx = useContext(EditorContext)
  if (!ctx) throw new Error("useEditor deve ser usado dentro de EditorProvider")
  return ctx
}
