import { Template } from "@/types"

export const barberTemplate: Template = {
  id: "barber",
  name: "Barbearia",
  niche: "Beleza Masculina",
  palette: {
    primary: "#D69E2E",
    secondary: "#F6E05E",
    accent: "#FEFCBF",
    background: "#1A202C",
    text: "#F7FAFC",
  },
  blocks: [
    { type: "hero", data: { headline: "Estilo, precisão e tradição em cada corte", subheadline: "A barbearia que cuida do seu visual com a atenção que você merece.", ctaText: "Agendar horário", ctaLink: "#contato", backgroundType: "photo" } },
    { type: "services-list", data: { title: "Nossos serviços", items: [{ icon: "✂️", name: "Corte masculino", description: "Degradê, navalhado, social e muito mais.", price: "R$ 40" }, { icon: "🧔", name: "Barba", description: "Modelagem completa com navalha.", price: "R$ 30" }, { icon: "✨", name: "Combo corte + barba", description: "O completo do homem moderno.", price: "R$ 60" }, { icon: "💆", name: "Hidratação capilar", description: "Tratamento para deixar o cabelo saudável.", price: "R$ 25" }] } },
    { type: "image-text", data: { imagePosition: "left", title: "Tradição e modernidade em cada detalhe", body: "Nossa barbearia une técnicas clássicas com as tendências mais modernas. Ambiente exclusivo e atendimento de primeira.", ctaText: "Agendar agora", ctaLink: "#contato" } },
    { type: "testimonials", data: { title: "O que nossos clientes dizem" } },
    { type: "cta-banner", data: { headline: "Refine seu estilo agora", subheadline: "Agende pelo WhatsApp e garanta seu horário.", ctaText: "Agendar pelo WhatsApp", ctaType: "whatsapp" } },
    { type: "footer", data: { showBranding: true } },
  ],
}
