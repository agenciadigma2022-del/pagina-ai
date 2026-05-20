import { Template } from "@/types"

export const psicologaTemplate: Template = {
  id: "psicologa",
  name: "Psicóloga",
  niche: "Saúde Mental",
  palette: {
    primary: "#6B46C1",
    secondary: "#9F7AEA",
    accent: "#E9D8FD",
    background: "#FFFFFF",
    text: "#2D3748",
  },
  blocks: [
    { type: "hero", data: { headline: "Você merece se sentir bem", subheadline: "Psicoterapia online e presencial para adultos que buscam autoconhecimento e equilíbrio emocional.", ctaText: "Agendar consulta", ctaLink: "#contato", backgroundType: "photo" } },
    { type: "cards", data: { title: "Posso te ajudar com", items: [{ icon: "😰", title: "Ansiedade", description: "Técnicas para reduzir a ansiedade no dia a dia." }, { icon: "💔", title: "Relacionamentos", description: "Trabalhar padrões afetivos e autoestima." }, { icon: "😔", title: "Depressão", description: "Suporte especializado para atravessar momentos difíceis." }, { icon: "🧠", title: "Autoconhecimento", description: "Entender seus padrões e construir novas respostas." }, { icon: "😤", title: "Estresse", description: "Ferramentas para lidar com pressão e burnout." }, { icon: "❓", title: "Outros", description: "Cada pessoa é única. Vamos conversar sobre o seu caso." }] } },
    { type: "about", data: { name: "Dra. Maria Silva", imageUrl: "", title: "Prazer, eu sou Maria!", bio: "Sou psicóloga clínica com mais de 8 anos de experiência. Acredito que cada pessoa tem dentro de si os recursos para superar seus desafios.", credentials: ["CRP 06/12345", "Especialista em TCC", "Pós em Saúde Mental"] } },
    { type: "image-text", data: { imagePosition: "right", title: "Como funciona o atendimento?", body: "As sessões duram 50 minutos e podem ser online (pelo Google Meet) ou presenciais. A frequência ideal é uma vez por semana.", ctaText: "Ver horários disponíveis", ctaLink: "#contato" } },
    { type: "testimonials", data: { title: "O que minhas pacientes dizem" } },
    { type: "faq", data: { title: "Perguntas frequentes", items: [{ question: "O plano de saúde cobre?", answer: "Atendo de forma particular. Emito recibo para reembolso." }, { question: "Como é a primeira sessão?", answer: "Na primeira sessão fazemos uma anamnese completa para entender sua história." }, { question: "Quanto tempo dura o processo?", answer: "Depende de cada pessoa e objetivo. Alguns resultados chegam em meses, outros demandam mais tempo." }, { question: "Atendo online?", answer: "Sim, atendo pelo Brasil todo via Google Meet." }] } },
    { type: "contact-form", data: { title: "Agende sua consulta", fields: ["name", "email", "phone", "message"], ctaText: "Quero agendar" } },
    { type: "footer", data: { showBranding: true } },
  ],
}
