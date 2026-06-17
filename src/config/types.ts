export interface EbookConfig {
  slug: string;
  themeColor: string;
  hero: {
    category: string;
    title: string;
    subtitle: string;
    description: string;
    coverImage: string;
    mockupImage?: string;
    guarantees: string[];
  };
  problem: {
    title: string;
    description: string;
    question: string;
  };
  promise: {
    title: string;
    description: string;
  };
  discover: {
    title: string;
    items: {
      icon?: string;
      title: string;
      description: string;
    }[];
  };
  audience: {
    title: string;
    items: string[];
  };
  insideBook: {
    title: string;
    chapters: {
      title: string;
      description: string;
    }[];
  };
  preview: {
    title: string;
    images: string[];
  };
  author: {
    photo: string;
    name: string;
    bio: string;
  };
  offer: {
    title: string;
    oldPrice: string;
    price: string;
    paymentMethods: string;
    checkoutLink: string;
    guaranteeDays: number;
    inclusions: string[];
  };
  benefits: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  testimonials: {
    title: string;
    items: {
      name: string;
      text: string;
      stars: number;
    }[];
  };
  faq: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  seo: {
    title: string;
    description: string;
  };
  footer?: {
    copyright: string;
    disclaimer: string;
  };
}
