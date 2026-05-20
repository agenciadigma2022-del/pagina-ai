import { psicologaTemplate } from "./psicologa"
import { dentistaTemplate } from "./dentista"
import { academiaTemplate } from "./academia"
import { barberTemplate } from "./barber"
import { Template } from "@/types"

export const templates: Template[] = [
  psicologaTemplate,
  dentistaTemplate,
  academiaTemplate,
  barberTemplate,
]

export function getTemplateById(id: string): Template | undefined {
  return templates.find((t) => t.id === id)
}

export { psicologaTemplate, dentistaTemplate, academiaTemplate, barberTemplate }
