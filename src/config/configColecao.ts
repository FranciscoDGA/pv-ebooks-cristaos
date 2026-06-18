import type { EbookConfig } from './types';

export const configColecao: EbookConfig = {
  slug: "colecao",
  themeColor: "#b8860b",
  hero: {
    category: "COLEÇÃO COMPLETA",
    title: "Coleção A Cruz e o Coração Humano",
    subtitle: "O acervo completo para transformar sua jornada espiritual",
    description: "Tenha acesso a todos os títulos da série com um desconto especial. Mergulhe em temas de oração, arrependimento, liderança e muito mais.",
    coverImage: "/christian_book_cover.png", // placeholder
    mockupImage: "/christian_book_cover.png",
    guarantees: [
      "Download imediato",
      "PDFs em alta qualidade",
      "Acesso vitalício",
      "Leitura em qualquer dispositivo"
    ],
  },
  problem: {
    title: "Buscando um crescimento constante?",
    description: "Muitas vezes lemos um bom livro, mas a chama logo se apaga. Ter uma biblioteca sólida de crescimento espiritual é o primeiro passo para uma vida de constância.",
    question: "Como manter sua mente e coração sempre alimentados pela Palavra?"
  },
  promise: {
    title: "Uma Biblioteca de Edificação",
    description: "Com a Coleção Completa, você terá acesso a todas as nossas principais obras, permitindo um estudo continuado e profundo."
  },
  discover: {
    title: "Os Livros da Coleção",
    items: [
      { icon: "book", title: "Somos Todos Jerusalém", description: "O perdão que transforma." },
      { icon: "book", title: "Orando com Corpo, Alma e Espírito", description: "Guia prático de oração." },
      { icon: "book", title: "Quando Não Há Rei", description: "O governo do coração humano." },
      { icon: "book", title: "Quem Ainda Chora?", description: "O clamor por arrependimento." }
    ]
  },
  audience: {
    title: "Para Quem é a Coleção",
    items: [
      "Leitores que desejam desconto exclusivo",
      "Pastores e líderes para montarem grupos de estudo",
      "Estudantes dedicados da Bíblia"
    ]
  },
  insideBook: {
    title: "O Que Tem Dentro",
    chapters: [
      { title: "Livro 1", description: "Somos Todos Jerusalém" },
      { title: "Livro 2", description: "Orando com Corpo, Alma e Espírito" },
      { title: "Livro 3", description: "Quando Não Há Rei" },
      { title: "Livro 4", description: "Quem Ainda Chora?" }
    ]
  },
  preview: {
    title: "Dê uma Olhada por Dentro",
    images: ["/sample_page_1.png", "/sample_page_2.png"]
  },
  author: {
    photo: "/author_pastoral.png",
    name: "Pr. Francisco Gomes",
    bio: "Pastor e escritor, focando sempre em trazer a palavra viva para o coração da igreja moderna."
  },
  offer: {
    title: "Leve Todos os 4 Livros",
    oldPrice: "R$ 159,60",
    price: "R$ 49,90",
    paymentMethods: "PIX e Cartões de Crédito",
    checkoutLink: "#",
    guaranteeDays: 7,
    inclusions: [
      "4 E-books Completos em PDF",
      "Acesso Imediato",
      "Garantia Incondicional de 7 dias"
    ]
  },
  benefits: {
    title: "Bônus Exclusivos da Coleção",
    items: [
      { title: "Mentoria Gravada", description: "Acesso a um estudo em vídeo com o autor." }
    ]
  },
  testimonials: {
    title: "Relatos",
    items: [
      { name: "Leitor Assíduo", text: "A melhor decisão foi comprar o combo. Material riquíssimo!", stars: 5 }
    ]
  },
  faq: {
    title: "FAQ",
    items: [
      { question: "Como recebo os livros?", answer: "Eles serão enviados juntos em um único e-mail para download." }
    ]
  },
  seo: {
    title: "Coleção Completa | O Chamado da Graça",
    description: "Adquira todos os e-books da série com um super desconto."
  }
};
