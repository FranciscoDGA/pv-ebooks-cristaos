import { useState } from 'react';
import type { EbookConfig } from '../../config/types';

interface SectionProps {
  config: EbookConfig;
}

export function HeroSection({ config }: SectionProps) {
  return (
    <section className="sales-hero">
      <div className="hero-grid">
        <div className="hero-content">
          <span className="category-badge">{config.hero.category}</span>
          <h1 className="main-title">{config.hero.title}</h1>
          <p className="subtitle">{config.hero.subtitle}</p>
          
          <ul className="hero-checklist">
            {config.hero.checklist.map((item, i) => (
              <li key={i}><i className="fa-solid fa-check"></i> {item}</li>
            ))}
          </ul>
          
          <div className="hero-cta-group">
            <a href="#oferta" className="btn-primary">{config.hero.primaryButtonText}</a>
            <a href="#preview" className="btn-secondary">{config.hero.secondaryButtonText}</a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src={config.hero.mockupImage || config.hero.coverImage} alt={config.hero.title} className="mockup-img float-animation" />
        </div>
      </div>
    </section>
  );
}

export function IdentificationSection({ config }: SectionProps) {
  return (
    <section className="identification-section">
      <div className="identification-content">
        <h2 className="identification-title">{config.identification.title}</h2>
        <div className="identification-text">
          {config.identification.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ImagineSection({ config }: SectionProps) {
  return (
    <section className="imagine-section">
      <div className="imagine-container">
        <h2 className="imagine-title">{config.imagine.title}</h2>
        <div className="imagine-blocks">
          {config.imagine.items.map((item, i) => (
            <div className="imagine-block" key={i}>
              <i className="fa-solid fa-sparkles imagine-icon"></i>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DiscoverSection({ config }: SectionProps) {
  return (
    <section className="discover-section">
      <h2>O que você vai descobrir</h2>
      <div className="cards-grid">
        {config.discover.items.map((item, index) => (
          <div key={index} className="premium-card">
            {item.icon && (
              <div className="icon-wrapper">
                <i className={item.icon}></i>
              </div>
            )}
            <p className="card-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function InsideBookSection({ config }: SectionProps) {
  return (
    <section className="inside-book-section">
      <h2>O que tem dentro do e-book</h2>
      <div className="timeline">
        {config.insideBook.chapters.map((ch, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker">{ch.number}</div>
            <div className="timeline-content">
              <h3>{ch.title}</h3>
              <p>{ch.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function GallerySection({ config }: SectionProps) {
  return (
    <section id="preview" className="gallery-section">
      <h2>Leia em qualquer lugar</h2>
      <div className="gallery-grid">
        {config.gallery.mobileImage && <img src={config.gallery.mobileImage} alt="Mobile" className="gallery-img" />}
        {config.gallery.tabletImage && <img src={config.gallery.tabletImage} alt="Tablet" className="gallery-img" />}
        {config.gallery.desktopImage && <img src={config.gallery.desktopImage} alt="Desktop" className="gallery-img" />}
      </div>
    </section>
  );
}

export function ForWhomSection({ config }: SectionProps) {
  return (
    <section className="for-whom-section">
      <h2>Para quem é este e-book?</h2>
      <ul className="for-whom-grid">
        {config.forWhom.items.map((item, index) => (
          <li key={index} className="for-whom-card">
            <i className="fa-solid fa-circle-check check-icon"></i>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function BenefitsSection({ config }: SectionProps) {
  return (
    <section className="benefits-section">
      <h2 className="benefits-title">{config.benefits.title}</h2>
      <div className="benefits-grid">
        {config.benefits.items.map((b, i) => (
          <div className="benefit-item" key={i}>
            <i className={b.icon}></i>
            <span>{b.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AuthorSection({ config }: SectionProps) {
  return (
    <section className="author-section-premium">
      <div className="author-grid-premium">
        <div className="author-photo-wrapper">
          <img src={config.author.photo} alt={config.author.name} className="author-photo-premium" />
        </div>
        <div className="author-content">
          <span className="author-label">Sobre o Autor</span>
          <h2 className="author-name-premium">{config.author.name}</h2>
          <div className="author-bio-premium">
            {config.author.bioParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection({ config }: SectionProps) {
  if (!config.testimonials.items.length) return null;
  return (
    <section className="testimonials-section">
      <h2>O que dizem os leitores</h2>
      <div className="testimonials-grid">
        {config.testimonials.items.map((item, index) => (
          <div key={index} className="testimonial-card-premium">
            <div className="stars">
              {"★".repeat(item.stars)}
            </div>
            <p className="testimonial-text">"{item.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function OfferSection({ config }: SectionProps) {
  return (
    <section id="oferta" className="offer-section-premium">
      <div className="offer-grid">
        <div className="offer-image-col">
           <img src={config.hero.mockupImage || config.hero.coverImage} alt="Ebook mockup" className="offer-mockup" />
        </div>
        <div className="offer-box-premium">
          <h2 className="offer-title">{config.offer.title}</h2>
          <div className="offer-pricing">
            <span className="old-price">{config.offer.oldPrice}</span>
            <span className="new-price">{config.offer.price}</span>
            <span className="payment-methods">Pagamento único via PIX ou Cartão</span>
          </div>
          <ul className="inclusions-list">
            {config.offer.inclusions.map((inc, i) => (
              <li key={i}><i className="fa-solid fa-check"></i> {inc}</li>
            ))}
          </ul>
          <a href={config.offer.checkoutLink} className="btn-buy-large pulse-animation">
            {config.offer.buttonText}
          </a>
          <div className="guarantee-badge">
            <i className="fa-solid fa-shield-check"></i> {config.offer.guaranteeText}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqSection({ config }: SectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-section-premium">
      <h2>Perguntas Frequentes</h2>
      <div className="faq-list">
        {config.faq.items.map((item, index) => (
          <div key={index} className={`faq-item-premium ${openIndex === index ? 'active' : ''}`}>
            <button 
              className="faq-question-premium"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {item.question}
              <span className="toggle-icon">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer-premium">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export function FinalCTA({ config }: SectionProps) {
  return (
    <section className="final-cta-section">
      <div className="final-cta-content">
        <img src={config.hero.mockupImage || config.hero.coverImage} alt="Ebook" className="cta-mockup" />
        <h2 className="cta-title">{config.finalCta.title}</h2>
        <a href="#oferta" className="btn-primary cta-button">{config.finalCta.buttonText}</a>
      </div>
    </section>
  );
}
