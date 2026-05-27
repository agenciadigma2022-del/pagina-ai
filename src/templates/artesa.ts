import { Template } from "@/types"

export const artesaTemplate: Template = {
  id: "artesa",
  name: "Artesã",
  niche: "Artesanato & Criação",
  palette: {
    primary: "#5C3A1E",
    secondary: "#7C4A2A",
    accent: "#E8956D",
    background: "#FBF7F0",
    text: "#3C2010",
  },
  blocks: [
    {
      type: "hero",
      data: {
        label: "Artesanato Autoral",
        headline: "Feito à mão, com amor e propósito.",
        subheadline: "Peças únicas criadas com materiais naturais, técnicas artesanais e muito carinho. Cada item conta uma história.",
        ctaText: "Ver catálogo",
        ctaLink: "#galeria",
        imageUrl: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1600&q=80",
      },
    },
    {
      type: "about",
      data: {
        title: "A artesã por trás das peças",
        name: "Mariana Costa",
        bio: "Artesã há 12 anos, apaixonada por macramê, cerâmica e produtos naturais. Cada peça é desenvolvida com intenção — desde a escolha do material até o acabamento final. Trabalho no meu ateliê em casa, onde cada pedido é tratado com atenção exclusiva.",
        imageUrl: "https://images.unsplash.com/photo-1556909114-44e3e9399a2e?w=800&q=80",
        credentials: ["12 anos de experiência", "Materiais 100% naturais", "Embalagem sustentável", "Envio para todo o Brasil"],
      },
    },
    {
      type: "gallery",
      data: {
        title: "Catálogo",
        subtitle: "Peças disponíveis para pronta-entrega e sob encomenda",
        images: [
          "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80",
          "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
          "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=800&q=80",
          "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80",
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
          "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800&q=80",
        ],
        columns: 3,
      },
    },
    {
      type: "services-list",
      data: {
        title: "O que faço",
        items: [
          { icon: "🪡", name: "Macramê", description: "Quadros, cortinas, porta-vasos e peças decorativas em macramê.", price: "A partir de R$80" },
          { icon: "🏺", name: "Cerâmica", description: "Bowls, vasos e objetos decorativos em argila natural.", price: "A partir de R$65" },
          { icon: "🕯️", name: "Velas Artesanais", description: "Velas de cera de abelha e soja com aromas naturais.", price: "A partir de R$35" },
          { icon: "🎁", name: "Kits Presente", description: "Caixas temáticas personalizadas para datas especiais.", price: "A partir de R$120" },
          { icon: "✉️", name: "Encomendas Personalizadas", description: "Crie sua peça exclusiva. Consulte prazo e valor.", price: "Consultar" },
        ],
      },
    },
    {
      type: "image-text",
      data: {
        title: "Tudo feito com intenção",
        body: "Uso apenas materiais naturais e sustentáveis. Cordas de algodão cru, argilas naturais, ceras vegetais e corantes naturais. As embalagens são reutilizáveis ou biodegradáveis. Cada peça é embalada com carinho e enviada com rastreamento para todo o Brasil.",
        ctaText: "Fazer um pedido",
        ctaLink: "#contato",
        imagePosition: "left",
        imageUrl: "https://images.unsplash.com/photo-1601312565041-7f7caea1e7de?w=800&q=80",
      },
    },
    {
      type: "testimonials",
      data: {
        title: "Quem já recebeu uma peça",
        items: [
          { name: "Júlia R.", role: "Cliente fiel", text: "Comprei um quadro de macramê e fiquei apaixonada. A qualidade é incrível e veio super bem embalado. Com certeza comprarei mais peças!" },
          { name: "Carla M.", role: "Presenteou a mãe", text: "Encomendei um kit presente para o aniversário da minha mãe. Ela amou cada detalhe. A Mariana foi super atenciosa e cumpriu o prazo certinho." },
          { name: "Aline P.", role: "Cliente recorrente", text: "Já fiz 5 pedidos e cada vez fico mais satisfeita. As velas são maravilhosas e o atendimento é sempre impecável. Indico para todo mundo!" },
        ],
      },
    },
    {
      type: "faq",
      data: {
        title: "Dúvidas frequentes",
        items: [
          { question: "Qual o prazo de entrega?", answer: "Peças em pronta-entrega: 3–5 dias úteis. Encomendas personalizadas: 10–20 dias úteis conforme complexidade." },
          { question: "Vocês fazem personalização?", answer: "Sim! Posso personalizar cores, tamanhos e adicionar nomes ou datas comemorativas. Entre em contato para orçamento." },
          { question: "Como funciona o envio?", answer: "Envio via Correios (PAC ou SEDEX) para todo o Brasil. O rastreamento é enviado por WhatsApp após postagem." },
          { question: "Posso trocar ou devolver?", answer: "Aceitamos trocas em casos de defeito de fabricação. Encomendas personalizadas não têm direito a devolução salvo em casos de defeito." },
        ],
      },
    },
    {
      type: "cta-banner",
      data: {
        headline: "Quer uma peça única?",
        subheadline: "Entre em contato para orçamento, prazos e personalização. Respondo rápido!",
        ctaText: "Falar no WhatsApp",
        ctaType: "whatsapp",
        ctaLink: "",
      },
    },
    {
      type: "footer",
      data: {
        tagline: "Artesanato autoral — feito à mão, enviado com amor.",
        showBranding: true,
        socialLinks: { instagram: "", whatsapp: "" },
      },
    },
  ],
}
