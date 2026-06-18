import type { EbookConfig } from './types';

export const configCercados: EbookConfig = {
  slug: "cercados-mas-nao-sozinhos",
  themeColor: "#c5a880",
  hero: {
    category: "CONSOLO E ESPERANÇA",
    title: "Cercados, Mas Não Sozinhos",
    subtitle: "A presença de Deus no meio da angústia.",
    checklist: [
      "Leitura imediata",
      "PDF completo",
      "Compatível com celular, tablet e computador",
      "Acesso vitalício"
    ],
    primaryButtonText: "Quero começar minha leitura",
    secondaryButtonText: "Ver prévia",
    coverImage: "/cercados.png",
    mockupImage: "/cercados.png"
  },
  identification: {
    title: "A solidão em meio às lutas tem esmagado você?",
    paragraphs: [
      "Em momentos de profunda crise, parece que até Deus nos abandonou.",
      "Mas a Bíblia garante que, mesmo quando estamos cercados por inimigos ou circunstâncias impossíveis, o Senhor está presente."
    ]
  },
  imagine: {
    title: "Imagine sentir a paz no meio da tempestade.",
    items: [
      "Imagine saber com certeza que Deus está cuidando de você.",
      "Imagine dormir em paz mesmo com problemas lá fora.",
      "Imagine fortalecer sua fé nas adversidades.",
      "Imagine experimentar o consolo do Espírito Santo."
    ]
  },
  discover: {
    items: [
      { icon: "fa-solid fa-shield", description: "O Senhor como nosso escudo." },
      { icon: "fa-solid fa-eye-slash", description: "Enxergando o que os olhos naturais não veem." },
      { icon: "fa-solid fa-hands-holding", description: "O consolo divino nas lágrimas." }
    ]
  },
  insideBook: {
    chapters: [
      { number: "01", title: "O Cerco", description: "Quando as lutas batem à porta." },
      { number: "02", title: "Abra os Olhos", description: "A visão espiritual de Eliseu." },
      { number: "03", title: "A Presença Oculta", description: "Deus agindo em silêncio." },
      { number: "04", title: "A Libertação", description: "O socorro bem presente." }
    ]
  },
  gallery: {
    bookOpenImage: "/cercados.png",
    mobileImage: "/cercados.png",
    tabletImage: "/cercados.png",
    desktopImage: "/cercados.png"
  },
  forWhom: {
    items: [
      "Cristãos passando por lutas difíceis",
      "Pessoas que sofrem com ansiedade",
      "Quem precisa de consolo bíblico",
      "Líderes que aconselham os aflitos"
    ]
  },
  benefits: {
    title: "O que você receberá",
    items: [
      { icon: "fa-solid fa-book", title: "Ebook completo" },
      { icon: "fa-solid fa-bolt", title: "Acesso imediato" },
      { icon: "fa-solid fa-mobile-screen", title: "Leitura no celular" },
      { icon: "fa-solid fa-laptop", title: "Compatível com computador" },
      { icon: "fa-solid fa-infinity", title: "Acesso vitalício" },
      { icon: "fa-solid fa-lock", title: "Pagamento seguro" }
    ]
  },
  author: {
    photo: "/author_pastoral.png",
    name: "Editora O Chamado da Graça",
    bioParagraphs: [
      "Produzindo materiais de excelência para abençoar a Igreja Brasileira.",
      "Comprometidos com o verdadeiro Evangelho."
    ]
  },
  testimonials: {
    items: [
      { text: "Esse livro foi o abraço de Deus que eu precisava durante meu luto.", stars: 5 },
      { text: "Uma leitura de esperança pura. Chorei em vários capítulos.", stars: 5 }
    ]
  },
  offer: {
    title: "Adquira agora",
    oldPrice: "R$ 39,90",
    price: "R$ 19,90",
    inclusions: [
      "Ebook completo",
      "Download imediato",
      "Leitura em qualquer dispositivo",
      "Acesso vitalício",
      "Atualizações futuras"
    ],
    buttonText: "QUERO RECEBER AGORA",
    checkoutLink: "#",
    guaranteeText: "Garantia incondicional de 7 dias"
  },
  faq: {
    items: [
      { question: "É um livro de autoajuda?", answer: "Não, é um material 100% embasado na Bíblia para trazer consolo." }
    ]
  },
  finalCta: {
    title: "Comece hoje uma leitura que pode fortalecer sua fé e aprofundar sua comunhão com Deus.",
    buttonText: "QUERO COMEÇAR AGORA"
  },
  seo: {
    title: "Cercados, Mas Não Sozinhos | Consolo",
    description: "A presença de Deus no meio da angústia."
  }
};
