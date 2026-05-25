import { Metadata } from "next"
import { BlockRenderer } from "@/components/blocks/BlockRenderer"
import { getTemplateById, templates } from "@/templates"
import { getSiteBySlug } from "@/app/actions/sites"
import { Block } from "@/types"
import { generateId } from "@/lib/utils"

export const dynamic = "force-dynamic"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.empreendify.com.br"

type Props = { params: Promise<{ slug: string }> }

async function getPageData(slug: string) {
  const saved = await getSiteBySlug(slug)
  const template = getTemplateById(slug) ?? templates[0]
  const blocks: Block[] = saved
    ? saved.blocks
    : template.blocks.map((b) => ({ ...b, id: generateId() }))
  const palette = saved ? saved.palette : template.palette
  const title = saved?.title ?? template.name
  return { blocks, palette, title, saved, template }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { blocks, title } = await getPageData(slug)

  const hero = blocks.find((b) => b.type === "hero")
  const description = (hero?.data?.subheadline as string) ?? `${title} — criado com Empreendify`
  const image = hero?.data?.imageUrl as string | undefined
  const url = `${SITE_URL}/p/${slug}`

  return {
    title: `${title} | Empreendify`,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Empreendify",
      ...(image && { images: [{ url: image, width: 1600, height: 900, alt: title }] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && { images: [image] }),
    },
    alternates: { canonical: url },
  }
}

export default async function PublishedPage({ params }: Props) {
  const { slug } = await params
  const { blocks, palette } = await getPageData(slug)

  return (
    <main>
      {blocks.map((block) => (
        <BlockRenderer key={block.id} block={block} palette={palette} />
      ))}
    </main>
  )
}
