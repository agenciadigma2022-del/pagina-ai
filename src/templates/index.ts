import { psicologaTemplate } from "./psicologa"
import { dentistaTemplate } from "./dentista"
import { academiaTemplate } from "./academia"
import { barberTemplate } from "./barber"
import { nutricionistaTemplate } from "./nutricionista"
import { advogadoTemplate } from "./advogado"
import { fotografoTemplate } from "./fotografo"
import { esteticaTemplate } from "./estetica"
import { freelancerTemplate } from "./freelancer"
import { artesaTemplate } from "./artesa"
import { Template } from "@/types"

export const templates: Template[] = [
  psicologaTemplate,
  dentistaTemplate,
  nutricionistaTemplate,
  academiaTemplate,
  advogadoTemplate,
  barberTemplate,
  fotografoTemplate,
  esteticaTemplate,
  freelancerTemplate,
  artesaTemplate,
]

export function getTemplateById(id: string): Template | undefined {
  return templates.find((t) => t.id === id)
}

export {
  psicologaTemplate,
  dentistaTemplate,
  academiaTemplate,
  barberTemplate,
  nutricionistaTemplate,
  advogadoTemplate,
  fotografoTemplate,
  esteticaTemplate,
  freelancerTemplate,
  artesaTemplate,
}
