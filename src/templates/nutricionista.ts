import { Template } from "@/types"

export const nutricionistaTemplate: Template = {
  id: "nutricionista",
  name: "Nutricionista",
  niche: "Nutrição",
  palette: {
    primary: "#2D4A22",
    secondary: "#3D6130",
    accent: "#A8C66C",
    background: "#F7F9F4",
    text: "#1A1A1A",
  },
  blocks: [
    {
      type: "hero",
      data: {
        label: "Nutrição Clínica",
        headline: "Alimentação que transforma corpo e mente",
        subheadline: "Consultoria nutricional personalizada para quem busca saúde de verdade — sem dietas restritivas e sem sofrimento.",
        ctaText: "Agendar consulta",
        ctaLink: "#contato",
        imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600&q=80",
      },
    },
    {
      type: "about",
      data: {
        title: "Olá, sou a Dra. Fernanda Luz",
        name: "Dra. Fernanda Luz",
        bio: "Nutricionista clínica com 9 anos de experiência em nutrição funcional e comportamento alimentar. Acredito que a alimentação saudável não precisa ser restritiva — ela precisa ser sustentável, prazerosa e adaptada à sua realidade.",
        imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80",
        credentials: ["CRN-3 12345", "Especialista em Nutrição Funcional", "Pós em Comportamento Alimentar", "Atendimento online e presencial"],
      },
    },
    {
      type: "cards",
      data: {
        title: "Posso te ajudar com",
        subtitle: "Cada corpo é único. Cada plano é feito exclusivamente para você.",
        items: [
          { icon: "01", title: "Emagrecimento Saudável", description: "Perda de peso sem restrições extremas, com foco em hábitos sustentáveis e longevidade." },
          { icon: "02", title: "Ganho de Massa", description: "Alimentação estratégica para suportar o treino e maximizar o crescimento muscular." },
          { icon: "03", title: "Saúde Intestinal", description: "Modulação da microbiota e alívio de sintomas como inchaço, gases e intestino preso." },
          { icon: "04", title: "Nutrição Esportiva", description: "Suporte nutricional para atletas e praticantes de atividade física de todos os níveis." },
          { icon: "05", title: "Doenças Crônicas", description: "Manejo dietético para diabetes, hipertensão, colesterol e outras condições." },
          { icon: "06", title: "Reeducação Alimentar", description: "Transformação do seu relacionamento com a comida de forma gradual e sem culpa." },
        ],
      },
    },
    {
      type: "image-text",
      data: {
        title: "Nutrição funcional na prática",
        body: "Meu atendimento vai além das calorias. Analiso exames, investigo a raiz dos seus sintomas e monto um plano alimentar que se encaixa na sua rotina. O objetivo é que você coma bem sem sentir que está fazendo sacrifícios.",
        ctaText: "Quero saber mais",
        ctaLink: "#contato",
        imagePosition: "right",
        imageUrl: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80",
      },
    },
    {
      type: "testimonials",
      data: {
        title: "Histórias que me motivam",
        items: [
          { name: "Amanda R.", role: "Professora, 33 anos", text: "Tentei várias dietas antes e sempre voltava ao mesmo peso. Com a Dra. Fernanda aprendi a comer de verdade. Emagreci 9kg e o melhor: não voltei mais." },
          { name: "Gustavo L.", role: "Atleta amador, 27 anos", text: "Minha performance nos treinos melhorou muito depois que comecei o acompanhamento. O planejamento nutricional fez toda diferença nos meus resultados." },
          { name: "Sandra P.", role: "Executiva, 48 anos", text: "Controlei o colesterol e a glicemia sem remédio, só com alimentação. Ela é incrível e muito didática. Me sinto muito mais leve e disposta." },
        ],
      },
    },
    {
      type: "faq",
      data: {
        title: "Perguntas frequentes",
        items: [
          { question: "O plano alimentar é personalizado?", answer: "Sim, 100%. Levo em conta seus exames, rotina, preferências alimentares e objetivos para criar um plano que funciona para você." },
          { question: "Atende online?", answer: "Sim. As consultas online têm a mesma qualidade e profundidade do atendimento presencial." },
          { question: "Preciso fazer exames antes da consulta?", answer: "Não é obrigatório, mas se você tiver exames recentes, leve — eles enriquecem muito a avaliação." },
          { question: "Quanto tempo leva para ver resultado?", answer: "Depende do objetivo, mas a maioria dos pacientes já percebe melhora na disposição e no sono nas primeiras duas semanas." },
        ],
      },
    },
    {
      type: "cta-banner",
      data: {
        headline: "Sua transformação começa na próxima refeição",
        subheadline: "Agende sua primeira consulta e descubra o que a nutrição pode fazer por você.",
        ctaText: "Agendar pelo WhatsApp",
        ctaType: "whatsapp",
        ctaLink: "",
      },
    },
    {
      type: "footer",
      data: {
        tagline: "Nutrição funcional para uma vida mais saudável e leve.",
        showBranding: true,
        socialLinks: { instagram: "", whatsapp: "" },
      },
    },
  ],
}
