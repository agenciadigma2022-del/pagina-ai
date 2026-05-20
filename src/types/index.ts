export type BlockType =
  | "hero"
  | "cards"
  | "image-text"
  | "testimonials"
  | "cta-banner"
  | "faq"
  | "footer"
  | "about"
  | "contact-form"
  | "services-list"
  | "gallery"
  | "pricing"

export interface Block {
  id: string
  type: BlockType
  data: Record<string, unknown>
}

export interface Palette {
  primary: string
  secondary: string
  accent: string
  background: string
  text: string
}

export interface Template {
  id: string
  name: string
  niche: string
  palette: Palette
  blocks: Omit<Block, "id">[]
  previewImage?: string
}

export interface Site {
  id: string
  userId: string
  slug: string
  title: string
  blocks: Block[]
  palette: Palette
  publishedAt?: string
  createdAt: string
  updatedAt: string
}
