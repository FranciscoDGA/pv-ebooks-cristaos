export interface EbookConfig {
  slug: string;
  themeColor: string; // Used for minimal accents if needed
  hero: {
    category: string;
    title: string;
    subtitle: string;
    checklist: string[];
    primaryButtonText: string;
    secondaryButtonText: string;
    coverImage: string;
    mockupImage?: string;
  };
  identification: {
    title: string;
    paragraphs: string[];
  };
  imagine: {
    title: string;
    items: string[];
  };
  discover: {
    items: {
      icon?: string;
      description: string;
    }[];
  };
  insideBook: {
    chapters: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  gallery: {
    bookOpenImage?: string;
    mobileImage?: string;
    tabletImage?: string;
    desktopImage?: string;
  };
  forWhom: {
    items: string[];
  };
  benefits: {
    title: string;
    items: {
      icon: string;
      title: string;
    }[];
  };
  author: {
    photo: string;
    name: string;
    bioParagraphs: string[];
  };
  testimonials: {
    items: {
      text: string;
      stars: number;
    }[];
  };
  offer: {
    title: string;
    oldPrice: string;
    price: string;
    inclusions: string[];
    buttonText: string;
    checkoutLink: string;
    guaranteeText: string;
  };
  faq: {
    items: {
      question: string;
      answer: string;
    }[];
  };
  finalCta: {
    title: string;
    buttonText: string;
  };
  seo: {
    title: string;
    description: string;
  };
}
