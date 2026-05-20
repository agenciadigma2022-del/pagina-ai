import { Template } from "@/types"

export const academiaTemplate: Template = {
  id: "academia",
  name: "Academia / Personal",
  niche: "Fitness",
  palette: {
    primary: "#E53E3E",
    secondary: "#FC8181",
    accent: "#FED7D7",
    background: "#1A202C",
    text: "#F7FAFC",
  },
  blocks: [
    { type: "hero", data: { headline: "Transforme seu corpo. Transforme sua vida.", subheadline: "Treinos personalizados para você atingir seus resultados em menos tempo.", ctaText: "Começar agora", ctaLink: "#contato", backgroundType: "photo" } },
    { type: "cards", data: { title: "Por que treinar com a gente", items: [{ icon: "💪", title: "Treino personalizado", description: "Plano montado para o seu corpo e objetivo." }, { icon: "🍽️", title: "Orientação nutricional", description: "Alimentação alinhada ao seu treino." }, { icon: "📊", title: "Acompanhamento", description: "Evolução medida e ajustada toda semana." }] } },
    { type: "image-text", data: { imagePosition: "right", title: "Método que gera resultado", body: "Nossa metodologia combina musculação, cardio e mobilidade para máxima evolução em mínimo tempo.", ctaText: "Ver metodologia", ctaLink: "#metodologia" } },
    { type: "gallery", data: { title: "Transformações reais", subtitle: "Resultados dos nossos alunos", columns: 3 } },
    { type: "testimonials", data: { title: "O que nossos alunos falam" } },
    { type: "cta-banner", data: { headline: "Comece sua transformação hoje", subheadline: "Primeira semana grátis. Sem compromisso.", ctaText: "Quero começar", ctaType: "whatsapp" } },
    { type: "contact-form", data: { title: "Fale com a gente", fields: ["name", "phone", "message"], ctaText: "Enviar mensagem" } },
    { type: "footer", data: { showBranding: true } },
  ],
}
