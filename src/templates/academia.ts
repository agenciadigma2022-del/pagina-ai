import { Template } from "@/types"

export const academiaTemplate: Template = {
  id: "academia",
  name: "Personal Trainer",
  niche: "Fitness",
  palette: {
    primary: "#0D0D0D",
    secondary: "#1A1A1A",
    accent: "#F97316",
    background: "#F9F9F9",
    text: "#0D0D0D",
  },
  blocks: [
    {
      type: "hero",
      data: {
        label: "Personal Trainer",
        headline: "Transformação real começa com o treino certo",
        subheadline: "Treinos personalizados online e presenciais para você atingir seus objetivos com método e consistência.",
        ctaText: "Quero minha avaliação gratuita",
        ctaLink: "#contato",
        imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80",
      },
    },
    {
      type: "about",
      data: {
        title: "Prazer, sou o Prof. Rafael Costa",
        name: "Prof. Rafael Costa",
        bio: "Personal trainer com 8 anos de experiência em musculação, emagrecimento e performance. Formado em Educação Física pela UNICAMP, com especialização em Fisiologia do Exercício. Já acompanhei mais de 300 alunos a alcançarem seus objetivos.",
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
        credentials: ["CREF 012345-G/SP", "Especialista em Musculação", "Pós em Fisiologia do Exercício", "Atendimento online e presencial"],
      },
    },
    {
      type: "cards",
      data: {
        title: "Como posso te ajudar",
        subtitle: "Programas estruturados para cada objetivo e estilo de vida.",
        items: [
          { icon: "01", title: "Emagrecimento", description: "Protocolo de treino e orientação nutricional para perda de gordura sem perder músculo." },
          { icon: "02", title: "Hipertrofia", description: "Ganho muscular com periodização inteligente, respeitando os limites do seu corpo." },
          { icon: "03", title: "Condicionamento", description: "Melhorar resistência, disposição e qualidade de vida com treinos funcionais." },
          { icon: "04", title: "Reabilitação", description: "Retorno seguro ao exercício após lesões, com acompanhamento especializado." },
          { icon: "05", title: "Personal Online", description: "Treino personalizado, suporte diário pelo WhatsApp e ajustes semanais." },
          { icon: "06", title: "Assessoria Esportiva", description: "Preparação para corridas, triathlon e outros desafios de performance." },
        ],
      },
    },
    {
      type: "image-text",
      data: {
        title: "Método que entrega resultado",
        body: "Nada de planilhas genéricas. Cada aluno recebe um programa 100% personalizado, revisado semanalmente com base na sua evolução. Acompanho cada detalhe — do treino à alimentação — para garantir resultados reais e duradouros.",
        ctaText: "Começar agora",
        ctaLink: "#contato",
        imagePosition: "right",
        imageUrl: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80",
      },
    },
    {
      type: "testimonials",
      data: {
        title: "Resultados reais dos meus alunos",
        items: [
          { name: "Mariana F.", role: "Nutricionista, 32 anos", text: "Em 4 meses perdi 12kg com o Rafael. O diferencial é o acompanhamento próximo — ele está disponível o tempo todo e ajusta o treino sempre que necessário." },
          { name: "Diego P.", role: "Engenheiro, 28 anos", text: "Nunca consegui ganhar massa até treinar com ele. Método preciso, sem enrolação. Ganhei 7kg de músculo em 6 meses." },
          { name: "Lucia T.", role: "Empresária, 45 anos", text: "Voltei a treinar depois de anos parada. O Rafael teve toda paciência do mundo e hoje me sinto mais disposta do que aos 30." },
        ],
      },
    },
    {
      type: "faq",
      data: {
        title: "Perguntas frequentes",
        items: [
          { question: "Preciso ter experiência para começar?", answer: "Não. Atendo desde iniciantes completos até atletas avançados. O treino é adaptado ao seu nível atual." },
          { question: "Como funciona o personal online?", answer: "Você recebe o treino em app, vídeos demonstrativos e suporte direto pelo WhatsApp. Faço check-ins semanais para ajustar o plano." },
          { question: "Quanto tempo para ver resultado?", answer: "Com consistência, os primeiros resultados aparecem em 3 a 4 semanas. Transformações significativas em 3 meses." },
          { question: "Você passa dieta também?", answer: "Oriento sobre alimentação e posso indicar nutricionistas parceiros para um acompanhamento completo." },
        ],
      },
    },
    {
      type: "cta-banner",
      data: {
        headline: "Pronto para mudar de vida?",
        subheadline: "Comece com uma avaliação gratuita. Sem compromisso.",
        ctaText: "Falar com o Personal",
        ctaType: "whatsapp",
        ctaLink: "",
      },
    },
    {
      type: "footer",
      data: {
        tagline: "Treino personalizado, resultado garantido.",
        showBranding: true,
        socialLinks: { instagram: "", whatsapp: "" },
      },
    },
  ],
}
