import { BlockRenderer } from "@/components/blocks/BlockRenderer"
import { getTemplateById, templates } from "@/templates"
import { getSite } from "@/app/actions/sites"
import { Block } from "@/types"
import { generateId } from "@/lib/utils"

export const dynamic = "force-dynamic"

export default async function PublishedPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  // Carrega versão salva; fallback para template
  const saved = await getSite(slug)
  const template = getTemplateById(slug) ?? templates[0]

  const blocks: Block[] = saved
    ? saved.blocks
    : template.blocks.map((b) => ({ ...b, id: generateId() }))

  const palette = saved ? saved.palette : template.palette

  return (
    <main>
      {blocks.map((block) => (
        <BlockRenderer key={block.id} block={block} palette={palette} />
      ))}
    </main>
  )
}
