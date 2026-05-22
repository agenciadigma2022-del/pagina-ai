import { Template } from "@/types"

export const dentistaTemplate: Template = {
  id: "dentista",
  name: "Dentista",
  niche: "Odontologia",
  palette: {
    primary: "#0F2D4A",
    secondary: "#1A4A6E",
    accent: "#4FC3F7",
    background: "#F8FAFB",
    text: "#1A1A2E",
  },
  blocks: [
    {
      type: "hero",
      data: {
        label: "Odontologia",
        headline: "Seu sorriso é o nosso maior resultado",
        subheadline: "Clínica odontológica completa com tecnologia de ponta e atendimento humanizado.",
        ctaText: "Agendar avaliação gratuita",
        ctaLink: "#contato",
        imageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1600&q=80",
      },
    },
    {
      type: "about",
      data: {
        title: "Olá, sou a Dra. Camila Torres",
        name: "Dra. Camila Torres",
        bio: "Cirurgiã-dentista com mais de 12 anos de experiência em odontologia estética e restauradora. Formada pela USP, com especialização em Implantodontia e Prótese Dentária. Meu compromisso é entregar sorrisos que transformam vidas.",
        imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
        credentials: ["CRO-SP 98432", "Especialista em Implantes", "Mestre em Prótese Dentária", "Atendimento segunda a sábado"],
      },
    },
    {
      type: "cards",
      data: {
        title: "Tratamentos que oferecemos",
        subtitle: "Soluções completas para a saúde e beleza do seu sorriso.",
        items: [
          { icon: "01", title: "Clareamento Dental", description: "Dentes até 8 tons mais claros com protocolo seguro e resultados duradouros." },
          { icon: "02", title: "Facetas de Porcelana", description: "Transformação completa do sorriso com laminados ultrafinos e naturais." },
          { icon: "03", title: "Implantes Dentários", description: "Substitua dentes perdidos com implantes de titânio de alta precisão." },
          { icon: "04", title: "Ortodontia", description: "Aparelho tradicional, autoligado ou alinhadores invisíveis como o Invisalign." },
          { icon: "05", title: "Tratamento de Canal", description: "Procedimento indolor com tecnologia rotária e microscopia." },
          { icon: "06", title: "Limpeza e Prevenção", description: "Profilaxia profissional e orientação personalizada de higiene oral." },
        ],
      },
    },
    {
      type: "image-text",
      data: {
        title: "Tecnologia a serviço do seu sorriso",
        body: "Nossa clínica é equipada com tomógrafo 3D, scanner intraoral e laser odontológico. Cada tratamento é planejado digitalmente para garantir precisão, conforto e resultados previsíveis.",
        ctaText: "Conhecer a clínica",
        ctaLink: "#contato",
        imagePosition: "right",
        imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffbb172a27c?w=800&q=80",
      },
    },
    {
      type: "testimonials",
      data: {
        title: "Sorrisos que transformamos",
        items: [
          { name: "Rafaela M.", role: "Professora, 34 anos", text: "Fiz facetas com a Dra. Camila e o resultado superou tudo que eu esperava. Meu sorriso ficou completamente diferente — natural e perfeito." },
          { name: "Carlos A.", role: "Empresário, 47 anos", text: "Tinha medo de dentista há anos. O acolhimento dela mudou isso. Fiz implante sem dor e com resultado incrível." },
          { name: "Beatriz S.", role: "Designer, 28 anos", text: "O clareamento ficou incrível. Ela é muito cuidadosa e explica cada etapa. Me sinto segura em cada consulta." },
        ],
      },
    },
    {
      type: "faq",
      data: {
        title: "Perguntas frequentes",
        items: [
          { question: "Aceitam plano odontológico?", answer: "Trabalhamos com os principais planos. Consulte nossa equipe para verificar a cobertura do seu plano." },
          { question: "A avaliação inicial é gratuita?", answer: "Sim. A primeira consulta é uma avaliação completa sem custo, onde definimos o melhor plano de tratamento para você." },
          { question: "O clareamento danifica o esmalte?", answer: "Não, quando realizado por profissional habilitado. Usamos géis de alta qualidade com protocolo seguro e supervisionado." },
          { question: "Quanto tempo dura um implante?", answer: "Com boa higiene, um implante pode durar a vida toda. É a solução mais duradoura para dentes perdidos." },
        ],
      },
    },
    {
      type: "cta-banner",
      data: {
        headline: "Dê o primeiro passo para o sorriso que você sempre quis",
        subheadline: "Avaliação gratuita. Atendimento humanizado. Resultados que duram.",
        ctaText: "Agendar pelo WhatsApp",
        ctaType: "whatsapp",
        ctaLink: "",
      },
    },
    {
      type: "footer",
      data: {
        tagline: "Odontologia estética e saúde com cuidado e precisão.",
        showBranding: true,
        socialLinks: { instagram: "", whatsapp: "" },
      },
    },
  ],
}
