import { Template } from "@/types"

export const advogadoTemplate: Template = {
  id: "advogado",
  name: "Advogado",
  niche: "Direito",
  palette: {
    primary: "#1A1A2E",
    secondary: "#16213E",
    accent: "#C9A96E",
    background: "#F8F6F0",
    text: "#1A1A1A",
  },
  blocks: [
    {
      type: "hero",
      data: {
        label: "Advocacia",
        headline: "Seu direito defendido com expertise e dedicação",
        subheadline: "Assessoria jurídica especializada para pessoas físicas e empresas. Soluções claras para problemas complexos.",
        ctaText: "Consulta gratuita",
        ctaLink: "#contato",
        imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80",
      },
    },
    {
      type: "about",
      data: {
        title: "Dr. Marcelo Rios, OAB/SP",
        name: "Dr. Marcelo Rios",
        bio: "Advogado com mais de 15 anos de experiência em direito civil, trabalhista e empresarial. Mestre em Direito Processual pela PUC-SP. Meu trabalho é transformar situações jurídicas complexas em soluções objetivas, protegendo seus interesses com rigor técnico e atenção aos detalhes.",
        imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
        credentials: ["OAB/SP 234.567", "Mestre em Direito Processual", "15 anos de atuação", "Atendimento presencial e digital"],
      },
    },
    {
      type: "cards",
      data: {
        title: "Áreas de atuação",
        subtitle: "Assessoria jurídica especializada para cada situação.",
        items: [
          { icon: "01", title: "Direito Trabalhista", description: "Defesa de trabalhadores e empresas em ações trabalhistas, rescisões e negociações sindicais." },
          { icon: "02", title: "Direito Civil", description: "Contratos, responsabilidade civil, família, herança e questões imobiliárias." },
          { icon: "03", title: "Direito Empresarial", description: "Abertura e encerramento de empresas, contratos comerciais e societários." },
          { icon: "04", title: "Direito do Consumidor", description: "Defesa contra cobranças indevidas, negativações e práticas abusivas." },
          { icon: "05", title: "Inventário e Herança", description: "Condução ágil de processos de inventário, testamentos e partilha de bens." },
          { icon: "06", title: "Contratos e Acordos", description: "Elaboração e revisão de contratos para proteger seus negócios e relacionamentos." },
        ],
      },
    },
    {
      type: "image-text",
      data: {
        title: "Advocacia clara e estratégica",
        body: "Cada caso é único e merece atenção individualizada. Meu compromisso é manter você informado em cada etapa do processo, com linguagem clara e sem tecnicismos desnecessários. Defendo seus interesses com o mesmo empenho que eu defenderia os meus.",
        ctaText: "Falar com o Dr. Marcelo",
        ctaLink: "#contato",
        imagePosition: "left",
        imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      },
    },
    {
      type: "testimonials",
      data: {
        title: "O que meus clientes dizem",
        items: [
          { name: "Patrícia O.", role: "Empresária, 42 anos", text: "O Dr. Marcelo resolveu um problema trabalhista que parecia impossível. Ele é preciso, confiante e manteve a calma em todos os momentos. Resultado excelente." },
          { name: "Roberto M.", role: "Médico, 51 anos", text: "Precisei de ajuda em um processo de inventário complicado. Ele foi cirúrgico e resolveu tudo em metade do tempo que eu esperava." },
          { name: "Juliana F.", role: "Administradora, 36 anos", text: "Tive um problema sério com meu empregador. O Dr. Marcelo me orientou desde o início e consegui uma indenização justa. Recomendo de olhos fechados." },
        ],
      },
    },
    {
      type: "faq",
      data: {
        title: "Perguntas frequentes",
        items: [
          { question: "A consulta inicial é gratuita?", answer: "Sim. Ofereço uma consulta inicial sem custo para entender sua situação e apresentar as possíveis soluções." },
          { question: "Atendem em outras cidades?", answer: "Sim. Atendemos presencialmente em São Paulo e de forma digital para clientes em todo o Brasil." },
          { question: "Qual é o prazo médio dos processos?", answer: "Depende da área e da complexidade do caso. Sou transparente sobre expectativas desde o primeiro contato." },
          { question: "Como é feito o pagamento?", answer: "Os honorários são definidos individualmente conforme o caso. Trabalhamos com contrato claro e sem surpresas." },
        ],
      },
    },
    {
      type: "cta-banner",
      data: {
        headline: "Não enfrente questões jurídicas sozinho",
        subheadline: "Agende uma consulta gratuita e entenda seus direitos.",
        ctaText: "Falar com o Advogado",
        ctaType: "whatsapp",
        ctaLink: "",
      },
    },
    {
      type: "footer",
      data: {
        tagline: "Advocacia comprometida com seus direitos e resultados.",
        showBranding: true,
        socialLinks: { instagram: "", whatsapp: "" },
      },
    },
  ],
}
