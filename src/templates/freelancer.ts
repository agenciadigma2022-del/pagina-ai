import { Template } from "@/types"

export const freelancerTemplate: Template = {
  id: "freelancer-digital",
  name: "Freelancer Digital",
  niche: "Marketing & Design",
  palette: {
    primary: "#0F172A",
    secondary: "#1E293B",
    accent: "#38BDF8",
    background: "#F8FAFC",
    text: "#0F172A",
  },
  blocks: [
    {
      type: "hero",
      data: {
        label: "Freelancer Digital",
        headline: "Eu transformo sua presença digital em resultados reais.",
        subheadline: "Design, conteúdo e estratégia digital para negócios que querem crescer de verdade online.",
        ctaText: "Solicitar orçamento",
        ctaLink: "#contato",
        imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1600&q=80",
      },
    },
    {
      type: "about",
      data: {
        title: "Quem sou eu",
        name: "Lucas Mendes",
        bio: "Freelancer digital com 6 anos de experiência em design, tráfego pago e gestão de redes sociais. Já ajudei mais de 80 clientes a construírem uma presença online forte — de pequenos negócios locais a e-commerces com 6 dígitos de faturamento.",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
        credentials: ["Google Ads Certified", "Meta Blueprint Certified", "Figma Advanced", "80+ clientes atendidos"],
      },
    },
    {
      type: "cards",
      data: {
        title: "O que posso fazer pelo seu negócio",
        subtitle: "Serviços digitais do planejamento à entrega:",
        items: [
          { icon: "01", title: "Design & Identidade Visual", description: "Logo, paleta, tipografia e materiais visuais que comunicam quem você é." },
          { icon: "02", title: "Gestão de Redes Sociais", description: "Estratégia, criação de conteúdo e postagem para Instagram, Facebook e TikTok." },
          { icon: "03", title: "Tráfego Pago (Meta + Google)", description: "Campanhas de anúncios otimizadas para gerar clientes de forma previsível." },
          { icon: "04", title: "Sites e Landing Pages", description: "Páginas profissionais, rápidas e convertendo visitas em clientes." },
          { icon: "05", title: "Email Marketing", description: "Sequências automáticas que nutrem leads e geram vendas no piloto automático." },
          { icon: "06", title: "Consultoria Digital", description: "Análise do seu negócio e plano de ação personalizado para crescer online." },
        ],
      },
    },
    {
      type: "image-text",
      data: {
        title: "Como funciona o trabalho",
        body: "Começo com uma conversa de diagnóstico gratuita para entender seu negócio, público e objetivos. A partir disso, proponho uma estratégia personalizada com escopo, prazo e investimento transparentes. Trabalho com comunicação ativa durante todo o projeto — nada de sumir com o briefing.",
        ctaText: "Bora conversar",
        ctaLink: "#contato",
        imagePosition: "right",
        imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
      },
    },
    {
      type: "testimonials",
      data: {
        title: "Clientes que já cresceram",
        items: [
          { name: "Renata B.", role: "Dono de e-commerce", text: "O Lucas dobrou meu ROAS em 3 meses. Passei de R$8k para R$18k de faturamento mensal só com as campanhas de tráfego que ele montou." },
          { name: "Diego F.", role: "Consultor financeiro", text: "Profissional acima da média. Entrega no prazo, comunica tudo que está fazendo e os resultados falam por si. Minha presença digital mudou completamente." },
          { name: "Simone L.", role: "Psicóloga", text: "Meu Instagram tinha 200 seguidores e ficava sem conseguir clientes. Em 4 meses com gestão do Lucas, tenho agenda lotada toda semana." },
        ],
      },
    },
    {
      type: "pricing",
      data: {
        title: "Investimento",
        subtitle: "Plano mensal de gestão completa",
        price: "R$1.200",
        installments: "por mês · contrato mínimo 3 meses",
        features: [
          "Gestão completa de 1 rede social",
          "12 posts/mês (feed + stories)",
          "Relatório mensal de resultados",
          "1 campanha de tráfego pago",
          "Atendimento via WhatsApp em 24h",
          "Reunião mensal de estratégia",
        ],
        ctaText: "Falar sobre o projeto",
        ctaLink: "#contato",
      },
    },
    {
      type: "cta-banner",
      data: {
        headline: "Seu negócio merece crescer.",
        subheadline: "Conversa de diagnóstico gratuita. Sem compromisso, sem enrolação.",
        ctaText: "Falar no WhatsApp",
        ctaType: "whatsapp",
        ctaLink: "",
      },
    },
    {
      type: "footer",
      data: {
        tagline: "Freelancer Digital — Estratégia, criação e resultado.",
        showBranding: true,
        socialLinks: { instagram: "", whatsapp: "" },
      },
    },
  ],
}
