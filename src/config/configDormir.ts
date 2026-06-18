import type { EbookConfig } from './types';

export const configDormir: EbookConfig = {
  slug: "historias-para-dormir",
  themeColor: "#2c3e50",
  hero: {
    category: "LITERATURA INFANTIL • BÍBLICA",
    title: "Histórias Para Dormir",
    subtitle: "Contos bíblicos para ensinar e acalmar o coração das crianças.",
    description: "Uma coletânea de histórias bíblicas adaptadas para o momento de dormir, trazendo paz, ensino e a presença de Deus para o quarto dos seus filhos.",
    coverImage: "/historia_biblia_dormir.png",
    mockupImage: "/historia_biblia_dormir.png",
    guarantees: [
      "Download imediato",
      "PDF em alta qualidade",
      "Acesso vitalício",
      "Leitura em qualquer dispositivo"
    ],
  },
  problem: {
    title: "Noites agitadas?",
    description: "Muitas crianças têm dificuldade para pegar no sono, sentem medo ou ansiedade. O momento de ir para a cama pode se tornar um desafio diário para os pais.",
    question: "Como transformar a hora de dormir em um momento de paz e aprendizado?"
  },
  promise: {
    title: "Paz e Palavra",
    description: "Através de histórias bíblicas contadas com uma linguagem suave, seu filho aprenderá princípios eternos enquanto se prepara para um sono tranquilo."
  },
  discover: {
    title: "O Que Vocês Vão Descobrir",
    items: [
      { icon: "star", title: "Heróis da Fé", description: "As histórias dos grandes homens e mulheres da Bíblia." },
      { icon: "moon", title: "A Paz de Deus", description: "Como a confiança em Deus afasta o medo do escuro." },
      { icon: "heart", title: "Princípios", description: "Valores como coragem, obediência e amor ao próximo." }
    ]
  },
  audience: {
    title: "Para Quem é Este E-book",
    items: [
      "Pais de crianças pequenas",
      "Avós e tios que desejam presentear",
      "Educadores cristãos e ministério infantil"
    ]
  },
  insideBook: {
    title: "O Que Tem Dentro",
    chapters: [
      { title: "História 1", description: "A Arca de Noé e a Promessa." },
      { title: "História 2", description: "Davi e o Bom Pastor." },
      { title: "História 3", description: "Daniel e a Proteção de Deus." }
    ]
  },
  preview: {
    title: "Dê uma Olhada por Dentro",
    images: ["/sample_page_1.png", "/sample_page_2.png"]
  },
  author: {
    photo: "/author_pastoral.png",
    name: "Pr. Francisco Gomes",
    bio: "Pastor e escritor, buscando sempre formas de transmitir o amor de Deus às próximas gerações."
  },
  offer: {
    title: "Adquira Sua Cópia",
    oldPrice: "R$ 39,90",
    price: "R$ 19,90",
    paymentMethods: "PIX e Cartões de Crédito",
    checkoutLink: "#",
    guaranteeDays: 7,
    inclusions: [
      "E-book Completo em PDF",
      "Acesso Imediato",
      "Garantia Incondicional de 7 dias"
    ]
  },
  benefits: {
    title: "Benefícios",
    items: [
      { title: "Desenhos para Colorir", description: "Um anexo com ilustrações para seu filho pintar." }
    ]
  },
  testimonials: {
    title: "Relatos",
    items: [
      { name: "Mãe Anônima", text: "Meu filho passou a pedir as historinhas todas as noites. Dorme muito mais tranquilo.", stars: 5 }
    ]
  },
  faq: {
    title: "FAQ",
    items: [
      { question: "Qual a faixa etária recomendada?", answer: "Ideal para crianças de 3 a 8 anos." }
    ]
  },
  seo: {
    title: "Histórias Para Dormir | O Chamado da Graça",
    description: "Contos bíblicos para ensinar e acalmar o coração das crianças."
  }
};
