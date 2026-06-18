import type { EbookConfig } from './types';

export const configColecao: EbookConfig = {
  slug: "colecao",
  themeColor: "#c5a880",
  hero: {
    category: "COLEÇÃO COMPLETA",
    title: "A Cruz e o Coração Humano",
    subtitle: "O acervo completo para transformar sua jornada espiritual.",
    checklist: [
      "Leitura imediata",
      "PDF completo de todos os livros",
      "Compatível com celular, tablet e computador",
      "Acesso vitalício"
    ],
    primaryButtonText: "Quero acessar o acervo completo",
    secondaryButtonText: "Ver prévia",
    coverImage: "/christian_book_cover.png",
    mockupImage: "/christian_book_cover.png"
  },
  identification: {
    title: "Sua biblioteca de nutrição espiritual.",
    paragraphs: [
      "Tenha acesso a todos os títulos da série com um desconto especial.",
      "Mergulhe em temas de oração, arrependimento, liderança e muito mais."
    ]
  },
  imagine: {
    title: "Imagine ter sempre à mão o alimento sólido da Palavra.",
    items: [
      "Imagine aprofundar sua teologia diariamente.",
      "Imagine ter respostas bíblicas para os dilemas da alma.",
      "Imagine montar uma base firme para sua fé.",
      "Imagine economizar adquirindo tudo de uma vez."
    ]
  },
  discover: {
    items: [
      { icon: "fa-solid fa-layer-group", description: "Todos os livros da série em um só pacote." },
      { icon: "fa-solid fa-coins", description: "O maior custo-benefício da nossa editora." },
      { icon: "fa-solid fa-graduation-cap", description: "Conteúdo denso e teologicamente seguro." }
    ]
  },
  insideBook: {
    chapters: [
      { number: "01", title: "Orando com o Corpo, Alma e Espírito", description: "Aprofunde sua intimidade com Deus." },
      { number: "02", title: "Quando Não Há Rei", description: "Entenda a autoridade bíblica." },
      { number: "03", title: "Quem Ainda Chora?", description: "O retorno ao altar do arrependimento." },
      { number: "04", title: "Somos Todos Jerusalém", description: "A fuga do engano religioso." }
    ]
  },
  gallery: {
    bookOpenImage: "/christian_book_cover.png",
    mobileImage: "/christian_book_cover.png",
    tabletImage: "/christian_book_cover.png",
    desktopImage: "/christian_book_cover.png"
  },
  forWhom: {
    items: [
      "Seminarias e estudantes de teologia",
      "Pastores que precisam de material para sermões",
      "Cristãos famintos por conhecimento",
      "Quem deseja adquirir toda a biblioteca"
    ]
  },
  benefits: {
    title: "O que você receberá",
    items: [
      { icon: "fa-solid fa-book", title: "Todos os Ebooks" },
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
      { text: "Adquiri a coleção e não me arrependo. Material riquíssimo!", stars: 5 },
      { text: "O melhor investimento que fiz na minha vida espiritual este ano.", stars: 5 }
    ]
  },
  offer: {
    title: "Adquira a Coleção Agora",
    oldPrice: "R$ 159,90",
    price: "R$ 67,90",
    inclusions: [
      "4 Ebooks Completos",
      "Download imediato de tudo",
      "Leitura em qualquer dispositivo",
      "Acesso vitalício",
      "Atualizações futuras"
    ],
    buttonText: "QUERO A COLEÇÃO COMPLETA",
    checkoutLink: "#",
    guaranteeText: "Garantia incondicional de 7 dias"
  },
  faq: {
    items: [
      { question: "Vem todos os livros juntos?", answer: "Sim, você receberá o link para baixar todos os PDFs de uma vez." }
    ]
  },
  finalCta: {
    title: "Garanta a coleção completa hoje pelo melhor valor.",
    buttonText: "QUERO GARANTIR AGORA"
  },
  seo: {
    title: "Coleção A Cruz e o Coração Humano | E-books",
    description: "O acervo completo para transformar sua jornada espiritual."
  }
};
