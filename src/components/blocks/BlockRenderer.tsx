import { Block, Palette } from "@/types"
import { HeroBlock } from "./HeroBlock"
import { CardsBlock } from "./CardsBlock"
import { ImageTextBlock } from "./ImageTextBlock"
import { TestimonialsBlock } from "./TestimonialsBlock"
import { CTABannerBlock } from "./CTABannerBlock"
import { FAQBlock } from "./FAQBlock"
import { FooterBlock } from "./FooterBlock"
import { AboutBlock } from "./AboutBlock"
import { ContactFormBlock } from "./ContactFormBlock"
import { ServicesListBlock } from "./ServicesListBlock"
import { GalleryBlock } from "./GalleryBlock"
import { PricingBlock } from "./PricingBlock"

interface Props {
  block: Block
  palette: Palette
}

export function BlockRenderer({ block, palette }: Props) {
  const props = { data: block.data as never, palette }

  switch (block.type) {
    case "hero":           return <HeroBlock {...props} />
    case "cards":          return <CardsBlock {...props} />
    case "image-text":     return <ImageTextBlock {...props} />
    case "testimonials":   return <TestimonialsBlock {...props} />
    case "cta-banner":     return <CTABannerBlock {...props} />
    case "faq":            return <FAQBlock {...props} />
    case "footer":         return <FooterBlock {...props} />
    case "about":          return <AboutBlock {...props} />
    case "contact-form":   return <ContactFormBlock {...props} />
    case "services-list":  return <ServicesListBlock {...props} />
    case "gallery":        return <GalleryBlock {...props} />
    case "pricing":        return <PricingBlock {...props} />
    default:               return null
  }
}
