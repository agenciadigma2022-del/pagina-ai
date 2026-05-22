import { Template } from "@/types"

export const barberTemplate: Template = {
  id: "barber",
  name: "Barbearia",
  niche: "Beleza Masculina",
  palette: {
    primary: "#1C1209",
    secondary: "#2E1F0E",
    accent: "#C9A96E",
    background: "#FAF7F2",
    text: "#1C1209",
  },
  blocks: [
    {
      type: "hero",
      data: {
        label: "Barbearia",
        headline: "Estilo, precisão e tradição em cada corte",
        subheadline: "Onde o cuidado com a aparência encontra a arte da barbearia clássica.",
        ctaText: "Agendar horário",
        ctaLink: "#contato",
        imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&q=80",
      },
    },
    {
      type: "about",
      data: {
        title: "Conheça o Mestre Bruno Alves",
        name: "Bruno Alves",
        bio: "Barbeiro há 15 anos, com passagens por barbearias em São Paulo, Lisboa e Buenos Aires. Especialista em cortes clássicos, degradê e tratamentos de barba. Para mim, cada cliente é uma obra única — e o resultado tem que refletir isso.",
        imageUrl: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80",
        credentials: ["15 anos de experiência", "Curso avançado em NY", "Especialista em Navalha", "Atendimento com hora marcada"],
      },
    },
    {
      type: "services-list",
      data: {
        title: "Serviços",
        items: [
          { icon: "01", name: "Corte Clássico", description: "Degradê, navalhado, social ou moderno. Feito com tesoura e máquina.", price: "R$ 50" },
          { icon: "02", name: "Barba Completa", description: "Modelagem, navalha quente e hidratação com produtos premium.", price: "R$ 40" },
          { icon: "03", name: "Combo Corte + Barba", description: "O pacote completo para o homem que valoriza cada detalhe.", price: "R$ 80" },
          { icon: "04", name: "Pigmentação de Barba", description: "Cobertura de fios brancos com resultado natural e duradouro.", price: "R$ 60" },
          { icon: "05", name: "Hidratação Capilar", description: "Tratamento profundo para cabelos ressecados ou danificados.", price: "R$ 35" },
          { icon: "06", name: "Sobrancelha", description: "Design e acabamento para uma aparência mais refinada.", price: "R$ 20" },
        ],
      },
    },
    {
      type: "image-text",
      data: {
        title: "Um espaço feito para o homem moderno",
        body: "Nossa barbearia une a tradição dos clássicos com o conforto e a estética contemporânea. Ambiente exclusivo, produtos de primeira linha e profissionais que tratam cada cliente com atenção e respeito.",
        ctaText: "Agendar agora",
        ctaLink: "#contato",
        imagePosition: "left",
        imageUrl: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80",
      },
    },
    {
      type: "testimonials",
      data: {
        title: "O que nossos clientes dizem",
        items: [
          { name: "André L.", role: "Advogado, 35 anos", text: "Melhor barbearia da cidade. O Bruno tem um talento único para entender o que você quer antes mesmo de você descrever. Saio sempre impecável." },
          { name: "Rodrigo M.", role: "Engenheiro, 29 anos", text: "Vim uma vez e nunca mais fui a outro lugar. O ambiente é ótimo, o atendimento é top e o corte é exatamente o que eu sempre quis." },
          { name: "Felipe C.", role: "Professor, 41 anos", text: "A barba ficou perfeita. Detalhe e capricho em cada serviço. Recomendo a todo mundo que se cuida." },
        ],
      },
    },
    {
      type: "cta-banner",
      data: {
        headline: "Reserve seu horário agora",
        subheadline: "Atendimento exclusivo com hora marcada. Sem fila, sem espera.",
        ctaText: "Agendar pelo WhatsApp",
        ctaType: "whatsapp",
        ctaLink: "",
      },
    },
    {
      type: "footer",
      data: {
        tagline: "Barbearia clássica com toque contemporâneo.",
        showBranding: true,
        socialLinks: { instagram: "", whatsapp: "" },
      },
    },
  ],
}
