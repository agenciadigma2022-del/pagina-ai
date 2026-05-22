import { Template } from "@/types"

export const psicologaTemplate: Template = {
  id: "psicologa",
  name: "Psicóloga",
  niche: "Saúde Mental",
  palette: {
    primary: "#1C3A2E",
    secondary: "#2D5A47",
    accent: "#C9A96E",
    background: "#FAF8F4",
    text: "#1A1A1A",
  },
  blocks: [
    {
      type: "hero",
      data: {
        label: "Psicoterapia",
        headline: "O cuidado que você merece começa aqui",
        subheadline: "Psicoterapia online e presencial para quem busca autoconhecimento, leveza e equilíbrio emocional.",
        ctaText: "Agendar consulta gratuita",
        ctaLink: "#contato",
        imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&q=80",
      },
    },
    {
      type: "about",
      data: {
        title: "Prazer, sou a Dra. Ana Lima",
        name: "Dra. Ana Lima",
        bio: "Psicóloga clínica com mais de 10 anos de experiência, especialista em Terapia Cognitivo-Comportamental. Acredito que cada pessoa carrega dentro de si a capacidade de transformação. Meu papel é caminhar ao seu lado nesse processo.",
        imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
        credentials: ["CRP 06/98765", "Especialista em TCC", "Mestre em Saúde Mental", "Atendimento online e presencial"],
      },
    },
    {
      type: "cards",
      data: {
        title: "Para quem é a terapia?",
        subtitle: "Cada jornada é única. Algumas das questões que trabalhamos juntos:",
        items: [
          { icon: "01", title: "Ansiedade e Estresse", description: "Técnicas validadas para reduzir a tensão do dia a dia e retomar o controle da sua mente." },
          { icon: "02", title: "Depressão", description: "Suporte especializado e acolhedor para atravessar os momentos mais pesados com segurança." },
          { icon: "03", title: "Relacionamentos", description: "Compreender padrões afetivos e construir vínculos mais saudáveis e conscientes." },
          { icon: "04", title: "Autoconhecimento", description: "Entender quem você é, o que sente e o que realmente quer da vida." },
          { icon: "05", title: "Transições de vida", description: "Apoio em momentos de mudança — carreira, lutos, divórcios, novas fases." },
          { icon: "06", title: "Burnout", description: "Recuperar energia, estabelecer limites e resgatar prazer no que você faz." },
        ],
      },
    },
    {
      type: "image-text",
      data: {
        title: "Como funciona o atendimento",
        body: "As sessões têm duração de 50 minutos e acontecem semanalmente. O atendimento online é realizado pelo Google Meet, com a mesma qualidade e sigilo da consulta presencial. Na primeira sessão, conversamos sobre sua história e definimos juntos os objetivos do processo terapêutico.",
        ctaText: "Ver horários disponíveis",
        ctaLink: "#contato",
        imagePosition: "right",
        imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
      },
    },
    {
      type: "testimonials",
      data: {
        title: "O que dizem minhas pacientes",
        items: [
          { name: "Camila R.", role: "Designer, 31 anos", text: "A terapia com a Dra. Ana mudou minha relação comigo mesma. Aprendi a entender minha ansiedade e hoje me sinto muito mais leve." },
          { name: "Fernanda M.", role: "Professora, 38 anos", text: "Nunca pensei que conseguiria falar sobre certas coisas. O acolhimento dela é único. Me sinto segura em cada sessão." },
          { name: "Juliana S.", role: "Empreendedora, 29 anos", text: "O atendimento online é perfeito para minha rotina. A qualidade é a mesma — talvez até melhor porque estou no meu ambiente." },
        ],
      },
    },
    {
      type: "faq",
      data: {
        title: "Perguntas frequentes",
        items: [
          { question: "O plano de saúde cobre as sessões?", answer: "Trabalho como autônoma e não aceito convênios. Emito recibo para reembolso — consulte sua operadora sobre a cobertura." },
          { question: "Quanto tempo dura o processo terapêutico?", answer: "Depende dos seus objetivos. Algumas pessoas percebem transformações em 3 meses, outras preferem um acompanhamento mais longo." },
          { question: "Posso fazer a primeira sessão para conhecer?", answer: "Sim. A primeira consulta é uma sessão de acolhimento onde conversamos sobre sua história e você avalia se se sente confortável." },
          { question: "As sessões online têm o mesmo resultado?", answer: "Sim. Pesquisas confirmam que a TCC online tem eficácia equivalente ao presencial. Muitas pacientes preferem por comodidade e privacidade." },
        ],
      },
    },
    {
      type: "cta-banner",
      data: {
        headline: "Pronta para começar?",
        subheadline: "Agende uma sessão de acolhimento gratuita de 20 minutos e dê o primeiro passo.",
        ctaText: "Falar no WhatsApp",
        ctaType: "whatsapp",
        ctaLink: "",
      },
    },
    {
      type: "footer",
      data: {
        tagline: "Psicoterapia com cuidado, ciência e humanidade.",
        showBranding: true,
        socialLinks: { instagram: "", whatsapp: "" },
      },
    },
  ],
}
