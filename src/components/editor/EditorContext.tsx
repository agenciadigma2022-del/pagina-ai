"use client"

import { createContext, useContext, useState } from "react"
import { Block, Palette } from "@/types"

interface EditorContextValue {
  blocks: Block[]
  palette: Palette
  slug: string
  selectedId: string | null
  select: (id: string) => void
  deselect: () => void
  updateBlock: (id: string, data: Record<string, unknown>) => void
  moveBlock: (id: string, direction: "up" | "down") => void
  updatePalette: (key: keyof Palette, value: string) => void
  updateSlug: (slug: string) => void
}

const EditorContext = createContext<EditorContextValue | null>(null)

export function EditorProvider({
  children,
  initialBlocks,
  palette: initialPalette,
  initialSlug,
}: {
  children: React.ReactNode
  initialBlocks: Block[]
  palette: Palette
  initialSlug: string
}) {
  const [blocks, setBlocks] = useState<Block[]>(initialBlocks)
  const [palette, setPalette] = useState<Palette>(initialPalette)
  const [slug, setSlug] = useState<string>(initialSlug)
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

  function updatePalette(key: keyof Palette, value: string) {
    setPalette((prev) => ({ ...prev, [key]: value }))
  }

  function updateSlug(value: string) {
    setSlug(value)
  }

  return (
    <EditorContext.Provider value={{ blocks, palette, slug, selectedId, select, deselect, updateBlock, moveBlock, updatePalette, updateSlug }}>
      {children}
    </EditorContext.Provider>
  )
}

export function useEditor() {
  const ctx = useContext(EditorContext)
  if (!ctx) throw new Error("useEditor deve ser usado dentro de EditorProvider")
  return ctx
}
