import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { v4 as uuidv4 } from "uuid"
import { Block, BlockType } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateId(): string {
  return uuidv4()
}

export function createBlock(type: BlockType): Block {
  return {
    id: generateId(),
    type,
    data: defaultBlockData[type],
  }
}

const defaultBlockData: Record<BlockType, Record<string, unknown>> = {
  hero: {
    headline: "Seu título principal aqui",
    subheadline: "Uma frase curta que explica o que você faz e para quem.",
    ctaText: "Entre em contato",
    ctaLink: "#contato",
    imageUrl: "",
    backgroundType: "image",
  },
  cards: {
    title: "O que eu ofereço",
    items: [
      { icon: "⭐", title: "Benefício 1", description: "Descreva o benefício em uma ou duas frases." },
      { icon: "🎯", title: "Benefício 2", description: "Descreva o benefício em uma ou duas frases." },
      { icon: "💡", title: "Benefício 3", description: "Descreva o benefício em uma ou duas frases." },
    ],
  },
  "image-text": {
    imageUrl: "",
    imagePosition: "left",
    title: "Título da seção",
    body: "Texto explicativo sobre seu serviço, produto ou sobre você. Seja direto e mostre o valor que entrega.",
    ctaText: "Saiba mais",
    ctaLink: "#",
  },
  testimonials: {
    title: "O que dizem nossos clientes",
    items: [
      { name: "Maria S.", role: "Cliente", text: "Excelente serviço! Superou minhas expectativas.", avatarUrl: "" },
      { name: "João P.", role: "Cliente", text: "Muito profissional e atencioso. Recomendo!", avatarUrl: "" },
      { name: "Ana L.", role: "Cliente", text: "Resultado incrível. Com certeza voltarei.", avatarUrl: "" },
    ],
  },
  "cta-banner": {
    headline: "Pronto para começar?",
    subheadline: "Entre em contato agora e garanta o seu.",
    ctaText: "Falar pelo WhatsApp",
    ctaLink: "#",
    ctaType: "whatsapp",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      { question: "Como funciona o atendimento?", answer: "Descreva seu processo de atendimento aqui." },
      { question: "Qual o prazo de resultado?", answer: "Informe um prazo realista para seus clientes." },
      { question: "Quais formas de pagamento aceitam?", answer: "Liste as formas de pagamento disponíveis." },
      { question: "Atendem em qual região?", answer: "Informe sua área de atuação." },
    ],
  },
  footer: {
    logo: "",
    tagline: "Feito com carinho para você.",
    socialLinks: { instagram: "", whatsapp: "", facebook: "" },
    showBranding: true,
  },
  about: {
    name: "Seu Nome",
    imageUrl: "",
    title: "Sobre mim",
    bio: "Fale sobre sua trajetória, experiência e o que te motivou a trabalhar nessa área. Seja autêntico.",
    credentials: ["Formação ou certificação", "Anos de experiência", "Especialidade"],
  },
  "contact-form": {
    title: "Entre em contato",
    fields: ["name", "email", "phone", "message"],
    ctaText: "Enviar mensagem",
    successMessage: "Mensagem enviada! Em breve entraremos em contato.",
  },
  "services-list": {
    title: "Serviços",
    items: [
      { icon: "✂️", name: "Serviço 1", description: "Descrição breve do serviço.", price: "" },
      { icon: "✂️", name: "Serviço 2", description: "Descrição breve do serviço.", price: "" },
      { icon: "✂️", name: "Serviço 3", description: "Descrição breve do serviço.", price: "" },
    ],
  },
  gallery: {
    title: "Resultados",
    subtitle: "Veja as transformações",
    images: [],
    columns: 3,
  },
  pricing: {
    title: "Investimento",
    subtitle: "Uma única vez",
    price: "R$ 97",
    installments: "ou 12x de R$ 9,70",
    features: ["Benefício 1", "Benefício 2", "Benefício 3", "Benefício 4"],
    ctaText: "Quero agora",
    ctaLink: "#",
  },
}
