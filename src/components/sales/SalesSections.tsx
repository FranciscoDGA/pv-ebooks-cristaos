import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { EbookConfig } from '../../config/types';

interface SectionProps {
  config: EbookConfig;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const blurReveal: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 1, ease: "easeOut" } }
};

export function HeroSection({ config }: SectionProps) {
  return (
    <section className="sales-hero">
      <div className="hero-grid">
        <motion.div className="hero-content" initial="hidden" animate="visible" variants={fadeUp}>
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
        </motion.div>
        <motion.div className="hero-image-wrapper" initial="hidden" animate="visible" variants={blurReveal}>
          <img src={config.hero.mockupImage || config.hero.coverImage} alt={config.hero.title} className="mockup-img float-animation" />
        </motion.div>
      </div>
    </section>
  );
}

export function ManifestoSection({ config }: SectionProps) {
  return (
    <section className="manifesto-section">
      <motion.div className="manifesto-content" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
        <h2 className="manifesto-title">{config.identification.title}</h2>
        <div className="manifesto-text">
          {config.identification.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export function ExperienceSection({ config }: SectionProps) {
  if (!config.experience) return null;
  return (
    <section className="experience-section">
      <div className="experience-container">
        <motion.div className="experience-images" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={blurReveal}>
          {config.gallery.bookOpenImage && <img src={config.gallery.bookOpenImage} alt="Livro Aberto" className="exp-img-main" />}
          <div className="exp-img-group">
             {config.gallery.mobileImage && <img src={config.gallery.mobileImage} alt="Mobile" className="exp-img-sub" />}
             {config.gallery.tabletImage && <img src={config.gallery.tabletImage} alt="Tablet" className="exp-img-sub" />}
          </div>
        </motion.div>
        <motion.div className="experience-text" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="experience-title">A EXPERIÊNCIA DA LEITURA</h2>
          <ul className="experience-list">
            {config.experience.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export function DiscoverSection({ config }: SectionProps) {
  return (
    <section className="discover-section">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>O QUE VOCÊ DESCOBRIRÁ</motion.h2>
      <div className="cards-grid">
        {config.discover.items.map((item, index) => (
          <motion.div key={index} className="premium-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: index * 0.1 }}>
            <p className="card-desc">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function InsideBookSection({ config }: SectionProps) {
  return (
    <section className="inside-book-section">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>DENTRO DA OBRA</motion.h2>
      <div className="timeline">
        {config.insideBook.chapters.map((ch, index) => (
          <motion.div key={index} className="timeline-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: index * 0.1 }}>
            <div className="timeline-marker">{ch.number}</div>
            <div className="timeline-content">
              <h3>{ch.title}</h3>
              <p>{ch.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function QuoteSection({ config }: SectionProps) {
  if (!config.quote) return null;
  return (
    <section className="quote-section">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="quote-text">"{config.quote.text}"</h2>
        {config.quote.author && <span className="quote-author">{config.quote.author}</span>}
      </motion.div>
    </section>
  );
}

export function GallerySection({ config }: SectionProps) {
  return (
    <section id="preview" className="gallery-section">
      <motion.div className="gallery-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={blurReveal}>
        {config.gallery.mobileImage && <img src={config.gallery.mobileImage} alt="Mobile" className="gallery-img" />}
        {config.gallery.tabletImage && <img src={config.gallery.tabletImage} alt="Tablet" className="gallery-img" />}
        {config.gallery.desktopImage && <img src={config.gallery.desktopImage} alt="Desktop" className="gallery-img" />}
      </motion.div>
    </section>
  );
}

export function ForWhomSection({ config }: SectionProps) {
  return (
    <section className="for-whom-section">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>PARA QUEM É ESTE LIVRO</motion.h2>
      <div className="for-whom-grid">
        {config.forWhom.items.map((item, index) => (
          <motion.div key={index} className="for-whom-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: index * 0.1 }}>
            <span>{item}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function AuthorSection({ config }: SectionProps) {
  return (
    <section className="author-section-premium">
      <div className="author-grid-premium">
        <motion.div className="author-photo-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={blurReveal}>
          <img src={config.author.photo} alt="Autor" className="author-photo-premium" />
        </motion.div>
        <motion.div className="author-content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="author-name-premium">{config.author.name}</h2>
          <div className="author-bio-premium">
            {config.author.bioParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function TestimonialsSection({ config }: SectionProps) {
  if (!config.testimonials.items.length) return null;
  return (
    <section className="testimonials-section">
      <motion.div className="testimonials-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        {config.testimonials.items.map((item, index) => (
          <div key={index} className="testimonial-card-premium">
            <div className="stars">
              {"★".repeat(item.stars)}
            </div>
            <p className="testimonial-text">"{item.text}"</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export function OfferSection({ config }: SectionProps) {
  return (
    <section id="oferta" className="offer-section-premium">
      <div className="offer-grid">
        <motion.div className="offer-image-col" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={blurReveal}>
           <img src={config.hero.mockupImage || config.hero.coverImage} alt="Ebook mockup" className="offer-mockup" />
        </motion.div>
        <motion.div className="offer-box-premium" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="offer-title">{config.offer.title}</h2>
          <div className="offer-pricing">
            <span className="old-price">De {config.offer.oldPrice} por apenas</span>
            <span className="new-price">{config.offer.price}</span>
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
        </motion.div>
      </div>
    </section>
  );
}

export function FaqSection({ config }: SectionProps) {
  if (!config.faq || !config.faq.items.length) return null;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-section-premium">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>Perguntas Frequentes</motion.h2>
      <motion.div className="faq-list" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
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
      </motion.div>
    </section>
  );
}

export function FinalCTA({ config }: SectionProps) {
  return (
    <section className="final-cta-section" style={{
      backgroundImage: 'linear-gradient(rgba(10,10,10,0.8), rgba(10,10,10,0.9)), url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <motion.div className="final-cta-content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <img src={config.hero.mockupImage || config.hero.coverImage} alt="Ebook" className="cta-mockup float-animation" />
        <h2 className="cta-title">{config.finalCta.title}</h2>
        <a href="#oferta" className="btn-primary cta-button">{config.finalCta.buttonText}</a>
      </motion.div>
    </section>
  );
}
