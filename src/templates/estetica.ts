import { Template } from "@/types"

export const esteticaTemplate: Template = {
  id: "estetica",
  name: "Estética e Beleza",
  niche: "Beleza & Bem-estar",
  palette: {
    primary: "#2D1B35",
    secondary: "#4A2D5A",
    accent: "#E8B4B8",
    background: "#FBF5F7",
    text: "#2D1B35",
  },
  blocks: [
    {
      type: "hero",
      data: {
        label: "Studio de Estética",
        headline: "Beleza que transforma. Cuidado que acolhe.",
        subheadline: "Procedimentos estéticos personalizados para realçar sua beleza natural com segurança e sofisticação.",
        ctaText: "Agendar horário",
        ctaLink: "#contato",
        imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&q=80",
      },
    },
    {
      type: "about",
      data: {
        title: "Quem cuida de você",
        name: "Camila Torres",
        bio: "Especialista em estética avançada com mais de 8 anos de experiência. Formada pelo Centro Universitário Estácio com especializações em bioestimuladores, peelings químicos e micropigmentação. Cada cliente é atendida com atenção exclusiva e protocolos personalizados.",
        imageUrl: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80",
        credentials: ["CREMES Certificada", "Especialista em Skincare", "Micropigmentação Avançada", "Mais de 2.000 procedimentos realizados"],
      },
    },
    {
      type: "services-list",
      data: {
        title: "Procedimentos",
        items: [
          { icon: "✨", name: "Limpeza de Pele Profunda", description: "Protocolo completo com extração, esfoliação e hidratação.", price: "R$180" },
          { icon: "💆", name: "Peeling Químico", description: "Renovação celular para manchas, acne e envelhecimento.", price: "R$250" },
          { icon: "🌿", name: "Drenagem Linfática", description: "Reduz inchaço e melhora circulação. 60 minutos.", price: "R$150" },
          { icon: "💉", name: "Bioestimuladores", description: "Estímulo natural de colágeno para firmeza e volume.", price: "A consultar" },
          { icon: "👁️", name: "Design de Sobrancelha", description: "Micropigmentação ou henna com fio a fio.", price: "R$120" },
          { icon: "💅", name: "Revitalização Facial", description: "Protocolo com vitaminas e ácido hialurônico.", price: "R$320" },
        ],
      },
    },
    {
      type: "gallery",
      data: {
        title: "Resultados reais",
        subtitle: "Antes e depois das clientes do studio",
        images: [
          "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
          "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
          "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80",
          "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?w=800&q=80",
        ],
        columns: 3,
      },
    },
    {
      type: "testimonials",
      data: {
        title: "O que dizem nossas clientes",
        items: [
          { name: "Beatriz A.", role: "Cliente há 2 anos", text: "A Camila transformou minha pele! Tinha acne há anos e após 4 sessões de peeling minha pele ficou completamente diferente. Me sinto outra pessoa." },
          { name: "Larissa M.", role: "Cliente fiel", text: "Atendimento impecável, ambiente super aconchegante. A drenagem linfática virou meu ritual mensal. Resultado visível desde a primeira sessão." },
          { name: "Patrícia N.", role: "Cliente satisfeita", text: "Fiz a micropigmentação de sobrancelha e ficou perfeita! Natural, simétrica, exatamente o que eu queria. Super recomendo." },
        ],
      },
    },
    {
      type: "faq",
      data: {
        title: "Perguntas frequentes",
        items: [
          { question: "Com quanto tempo de antecedência devo agendar?", answer: "Recomendamos agendar com pelo menos 2 dias de antecedência. Para procedimentos como micropigmentação, o ideal é 1 semana." },
          { question: "Os procedimentos têm contraindicações?", answer: "Alguns procedimentos têm contraindicações para gestantes, lactantes ou pessoas com certas condições de pele. Avaliamos no momento do agendamento." },
          { question: "Qual é o intervalo entre sessões?", answer: "Depende do procedimento. Limpeza de pele: 30 dias. Peeling: 21 dias. Bioestimuladores: conforme protocolo médico." },
          { question: "Vocês atendem por convênio?", answer: "Não trabalhamos com convênios. Aceitamos dinheiro, cartão de débito/crédito e PIX. Parcelamento em até 3x sem juros." },
        ],
      },
    },
    {
      type: "cta-banner",
      data: {
        headline: "Pronta para se cuidar?",
        subheadline: "Agende sua avaliação gratuita e descubra qual procedimento é ideal para você.",
        ctaText: "Agendar pelo WhatsApp",
        ctaType: "whatsapp",
        ctaLink: "",
      },
    },
    {
      type: "footer",
      data: {
        tagline: "Studio de Estética — Beleza com cuidado e dedicação.",
        showBranding: true,
        socialLinks: { instagram: "", whatsapp: "" },
      },
    },
  ],
}
