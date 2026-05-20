import { Template } from "@/types"

export const dentistaTemplate: Template = {
  id: "dentista",
  name: "Dentista",
  niche: "Saúde",
  palette: {
    primary: "#0077B6",
    secondary: "#00B4D8",
    accent: "#90E0EF",
    background: "#FFFFFF",
    text: "#1A202C",
  },
  blocks: [
    { type: "hero", data: { headline: "Seu sorriso em boas mãos", subheadline: "Clínica odontológica completa com atendimento humanizado e tecnologia de ponta.", ctaText: "Agendar consulta", ctaLink: "#contato", backgroundType: "photo" } },
    { type: "cards", data: { title: "Nossos serviços", items: [{ icon: "🦷", title: "Clareamento", description: "Dentes até 8 tons mais claros com segurança." }, { icon: "😁", title: "Aparelho", description: "Tradicional, transparente ou invisível." }, { icon: "💎", title: "Facetas", description: "Transformação completa do sorriso." }] } },
    { type: "image-text", data: { imagePosition: "left", title: "Por que nos escolher?", body: "Mais de 10 anos cuidando de sorrisos. Nossa clínica combina tecnologia avançada com atendimento acolhedor.", ctaText: "Conhecer a clínica", ctaLink: "#sobre" } },
    { type: "testimonials", data: { title: "Sorrisos que transformamos" } },
    { type: "cta-banner", data: { headline: "Agende sua avaliação gratuita", subheadline: "Primeira consulta sem custo. Venha conhecer.", ctaText: "Agendar pelo WhatsApp", ctaType: "whatsapp" } },
    { type: "faq", data: { title: "Dúvidas frequentes", items: [{ question: "Aceitam plano odontológico?", answer: "Sim, trabalhamos com os principais planos." }, { question: "Atendem criança?", answer: "Sim, temos atendimento odontopediátrico." }, { question: "Qual o horário de funcionamento?", answer: "Segunda a sexta das 8h às 18h. Sábados das 8h às 12h." }, { question: "Fazem emergências?", answer: "Sim, temos horários reservados para urgências." }] } },
    { type: "contact-form", data: { title: "Agende sua consulta", fields: ["name", "phone", "message"], ctaText: "Solicitar agendamento" } },
    { type: "footer", data: { showBranding: true } },
  ],
}
