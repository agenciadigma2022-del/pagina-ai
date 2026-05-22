import { Template } from "@/types"

export const fotografoTemplate: Template = {
  id: "fotografo",
  name: "Fotógrafo",
  niche: "Fotografia",
  palette: {
    primary: "#111111",
    secondary: "#1A1A1A",
    accent: "#E8E2D5",
    background: "#111111",
    text: "#F0EDE8",
  },
  blocks: [
    {
      type: "hero",
      data: {
        label: "Fotografia",
        headline: "Momentos que duram para sempre",
        subheadline: "Fotografia de casamentos, ensaios e eventos com olhar sensível e estética única.",
        ctaText: "Ver disponibilidade",
        ctaLink: "#contato",
        imageUrl: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=1600&q=80",
      },
    },
    {
      type: "about",
      data: {
        title: "Lucas Mendes — Fotógrafo",
        name: "Lucas Mendes",
        bio: "Fotógrafo com 10 anos de experiência em fotografia de casamentos, ensaios e eventos corporativos. Meu trabalho é contar histórias com luz e emoção — cada clique é uma narrativa única que você vai querer guardar para sempre.",
        imageUrl: "https://images.unsplash.com/photo-1554941829-202a0b2403b8?w=800&q=80",
        credentials: ["10+ anos de experiência", "+500 casamentos fotografados", "Premiado ABRAFOTO 2023", "Atua em todo o Brasil"],
      },
    },
    {
      type: "cards",
      data: {
        title: "Especialidades",
        subtitle: "Cada tipo de fotografia com a atenção e técnica que merece.",
        items: [
          { icon: "01", title: "Casamentos", description: "Cobertura completa do seu grande dia, do making of à festa, com equipe dedicada." },
          { icon: "02", title: "Ensaios de Casal", description: "Fotos íntimas e naturais que capturam a essência da sua história juntos." },
          { icon: "03", title: "Ensaio Gestante", description: "A beleza e emoção da gestação eternizadas com delicadeza e cuidado." },
          { icon: "04", title: "Newborn", description: "Os primeiros dias do bebê registrados com segurança e muita ternura." },
          { icon: "05", title: "Eventos Corporativos", description: "Registro profissional de conferências, lançamentos e festas de empresa." },
          { icon: "06", title: "Ensaios Individuais", description: "Book profissional para atores, modelos e qualquer pessoa que queira fotos marcantes." },
        ],
      },
    },
    {
      type: "image-text",
      data: {
        title: "Uma visão que vai além da câmera",
        body: "Fotografia é mais do que técnica — é sensibilidade. Antes de cada trabalho, me reúno com o cliente para entender sua história, seu estilo e o que quer guardar. O resultado são imagens que emocionam hoje e emocionarão daqui a 20 anos.",
        ctaText: "Ver portfólio completo",
        ctaLink: "#contato",
        imagePosition: "right",
        imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      },
    },
    {
      type: "testimonials",
      data: {
        title: "O que os clientes dizem",
        items: [
          { name: "Isabela & Pedro", role: "Noivos, casamento em março", text: "O Lucas capturou cada detalhe do nosso casamento de uma forma que nos deixou sem palavras. As fotos são obras de arte. Toda nossa família ficou encantada." },
          { name: "Renata A.", role: "Ensaio gestante", text: "Me senti completamente à vontade durante o ensaio. Ele tem um dom de deixar tudo natural e as fotos ficaram lindíssimas. Um presente para a vida." },
          { name: "TechCorp Brasil", role: "Evento corporativo", text: "Profissional impecável. Pontual, discreto e com resultado incrível. As fotos do evento foram usadas em toda nossa comunicação institucional." },
        ],
      },
    },
    {
      type: "faq",
      data: {
        title: "Perguntas frequentes",
        items: [
          { question: "Com quanto tempo de antecedência devo reservar?", answer: "Para casamentos, recomendo reservar com 6 a 12 meses de antecedência. Ensaios podem ser agendados com menos tempo." },
          { question: "Vocês atendem fora de São Paulo?", answer: "Sim, fotografo em todo o Brasil e exterior. Os custos de deslocamento são acordados separadamente." },
          { question: "Em quanto tempo recebo as fotos?", answer: "Casamentos: até 60 dias. Ensaios: até 21 dias. Entrego galeria digital com alta resolução para download." },
          { question: "O contrato inclui álbum impresso?", answer: "Os pacotes variam. Oferecemos álbuns de luxo como upgrade. Consulte as opções disponíveis." },
        ],
      },
    },
    {
      type: "cta-banner",
      data: {
        headline: "Vamos contar a sua história?",
        subheadline: "Verifique disponibilidade e garanta sua data.",
        ctaText: "Falar pelo WhatsApp",
        ctaType: "whatsapp",
        ctaLink: "",
      },
    },
    {
      type: "footer",
      data: {
        tagline: "Fotografia com alma, técnica e emoção.",
        showBranding: true,
        socialLinks: { instagram: "", whatsapp: "" },
      },
    },
  ],
}
