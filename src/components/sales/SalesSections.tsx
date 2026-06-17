import { useState } from 'react';
import type { EbookConfig } from '../../config/types';

export const EbookHero = ({ config }: { config: EbookConfig }) => (
  <section className="sales-hero" style={{ '--theme-color': config.themeColor } as any}>
    <div className="container hero-grid">
      <div className="hero-content">
        <span className="category-badge">{config.hero.category}</span>
        <h1 className="main-title">{config.hero.title}</h1>
        <p className="subtitle">{config.hero.subtitle}</p>
        <p className="description">{config.hero.description}</p>
        
        <div className="cta-wrapper">
          <a href={config.offer.checkoutLink} className="btn-primary" style={{ backgroundColor: config.themeColor }}>
            QUERO LER ESTE E-BOOK AGORA
          </a>
          <ul className="guarantees-list">
            {config.hero.guarantees.map((g, i) => (
              <li key={i}>✓ {g}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hero-mockup">
        <img src={config.hero.mockupImage || config.hero.coverImage} alt={config.hero.title} className="mockup-img float-animation" />
      </div>
    </div>
  </section>
);

export const ProblemSection = ({ config }: { config: EbookConfig }) => (
  <section className="problem-section">
    <div className="container text-center">
      <h2 className="section-title dark">{config.problem.title}</h2>
      <p className="problem-desc">{config.problem.description}</p>
      <h3 className="problem-question" style={{ color: config.themeColor }}>{config.problem.question}</h3>
    </div>
  </section>
);

export const PromiseSection = ({ config }: { config: EbookConfig }) => (
  <section className="promise-section" style={{ backgroundColor: config.themeColor }}>
    <div className="container text-center">
      <h2 className="section-title light">{config.promise.title}</h2>
      <p className="promise-desc">{config.promise.description}</p>
    </div>
  </section>
);

export const DiscoverSection = ({ config }: { config: EbookConfig }) => (
  <section className="discover-section bg-light">
    <div className="container">
      <h2 className="section-title text-center dark">{config.discover.title}</h2>
      <div className="cards-grid">
        {config.discover.items.map((item, i) => (
          <div className="premium-card" key={i}>
            <div className="icon-wrapper" style={{ color: config.themeColor }}>★</div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ForWhomSection = ({ config }: { config: EbookConfig }) => (
  <section className="for-whom-section">
    <div className="container">
      <h2 className="section-title text-center dark">{config.audience.title}</h2>
      <ul className="check-list">
        {config.audience.items.map((item, i) => (
          <li key={i}>
            <span className="check-icon" style={{ color: config.themeColor }}>✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export const InsideBookSection = ({ config }: { config: EbookConfig }) => (
  <section className="inside-book-section bg-light">
    <div className="container">
      <h2 className="section-title text-center dark">{config.insideBook.title}</h2>
      <div className="timeline">
        {config.insideBook.chapters.map((chapter, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-marker" style={{ backgroundColor: config.themeColor }}>{i + 1}</div>
            <div className="timeline-content">
              <h3>{chapter.title}</h3>
              <p>{chapter.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const MockupPreviewSection = ({ config }: { config: EbookConfig }) => (
  <section className="preview-section">
    <div className="container text-center">
      <h2 className="section-title dark">{config.preview.title}</h2>
      <div className="preview-grid">
        {config.preview.images.map((img, i) => (
          <img src={img} alt={`Preview ${i+1}`} className="preview-img" key={i} />
        ))}
      </div>
      <div className="mt-8">
        <a href={config.offer.checkoutLink} className="btn-primary" style={{ backgroundColor: config.themeColor }}>
          GARANTIR MEU ACESSO
        </a>
      </div>
    </div>
  </section>
);

export const AuthorSection = ({ config }: { config: EbookConfig }) => (
  <section className="author-section-premium">
    <div className="container author-grid-premium">
      <div className="author-photo-wrapper">
        <img src={config.author.photo} alt={config.author.name} className="author-photo-premium" />
      </div>
      <div className="author-info">
        <span className="author-label" style={{ color: config.themeColor }}>SOBRE O AUTOR</span>
        <h2 className="author-name-premium">{config.author.name}</h2>
        <p className="author-bio-premium">{config.author.bio}</p>
      </div>
    </div>
  </section>
);

export const OfferSection = ({ config }: { config: EbookConfig }) => (
  <section className="offer-section-premium bg-light">
    <div className="container">
      <div className="offer-box-premium" style={{ borderColor: config.themeColor }}>
        <h2 className="offer-title">{config.offer.title}</h2>
        <div className="offer-pricing">
          <span className="old-price">{config.offer.oldPrice}</span>
          <span className="new-price">{config.offer.price}</span>
        </div>
        <p className="payment-methods">{config.offer.paymentMethods}</p>
        
        <ul className="inclusions-list">
          {config.offer.inclusions.map((inc, i) => (
            <li key={i}>
              <span className="check-icon" style={{ color: config.themeColor }}>✓</span> {inc}
            </li>
          ))}
        </ul>
        
        <a href={config.offer.checkoutLink} className="btn-buy-large pulse-animation" style={{ backgroundColor: config.themeColor }}>
          COMPRAR AGORA
        </a>
        <p className="guarantee-text">🔒 {config.offer.guaranteeDays} dias de garantia incondicional</p>
      </div>
    </div>
  </section>
);

export const BonusBenefitsSection = ({ config }: { config: EbookConfig }) => (
  <section className="benefits-section">
    <div className="container">
      <h2 className="section-title text-center dark">{config.benefits.title}</h2>
      <div className="cards-grid">
        {config.benefits.items.map((item, i) => (
          <div className="benefit-card" key={i}>
            <div className="icon-wrapper" style={{ color: config.themeColor }}>🎁</div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const TestimonialsSection = ({ config }: { config: EbookConfig }) => (
  <section className="testimonials-section bg-light">
    <div className="container">
      <h2 className="section-title text-center dark">{config.testimonials.title}</h2>
      <div className="cards-grid">
        {config.testimonials.items.map((item, i) => (
          <div className="testimonial-card-premium" key={i}>
            <div className="stars" style={{ color: config.themeColor }}>
              {Array(item.stars).fill('★').join('')}
            </div>
            <p className="testimonial-text">"{item.text}"</p>
            <p className="testimonial-author">- {item.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FaqSection = ({ config }: { config: EbookConfig }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section-premium">
      <div className="container">
        <h2 className="section-title text-center dark">{config.faq.title}</h2>
        <div className="faq-list">
          {config.faq.items.map((item, i) => (
            <div className={`faq-item-premium ${openIndex === i ? 'active' : ''}`} key={i} onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              <div className="faq-question-premium">
                <span>{item.question}</span>
                <span className="toggle-icon" style={{ color: config.themeColor }}>{openIndex === i ? '-' : '+'}</span>
              </div>
              {openIndex === i && <div className="faq-answer-premium">{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FinalCTA = ({ config }: { config: EbookConfig }) => (
  <section className="final-cta-section text-center" style={{ backgroundColor: config.themeColor }}>
    <div className="container">
      <h2 className="section-title light">Comece hoje uma leitura que pode fortalecer sua fé.</h2>
      <div className="mt-8">
        <a href={config.offer.checkoutLink} className="btn-buy-large pulse-animation" style={{ backgroundColor: '#fff', color: config.themeColor }}>
          QUERO COMEÇAR A LER AGORA
        </a>
      </div>
    </div>
  </section>
);

export const FooterSection = ({ config }: { config: EbookConfig }) => (
  <footer className="sales-footer">
    <div className="container text-center">
      <div className="footer-links">
        <a href="/termos">Termos de Uso</a>
        <a href="/privacidade">Privacidade</a>
        <a href="/contato">Contato</a>
      </div>
      {config.footer && (
        <>
          <p className="disclaimer">{config.footer.disclaimer}</p>
          <p className="copyright">{config.footer.copyright}</p>
        </>
      )}
    </div>
  </footer>
);
