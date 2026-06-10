const fs = require('fs');

fs.writeFileSync('src/components/HeroSection.tsx', `
export function HeroSection({ config }: { config: any }) {
  const { hero } = config;
  return (
    <header className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-category">{hero.category}</span>
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <p className="hero-description">{hero.description}</p>
          <div className="hero-buttons">
            <a href="#offer" className="btn btn-primary">Comprar Agora</a>
            <a href="#about" className="btn btn-secondary">Ler Amostra</a>
          </div>
          <ul className="hero-guarantees">
            {hero.guarantees.map((item: any, idx: number) => (
              <li key={idx}><span className="check-icon">✓</span> {item}</li>
            ))}
          </ul>
        </div>
        <div className="hero-image-container">
          <img src={hero.coverImage} alt="Capa do Livro" className="hero-image" />
        </div>
      </div>
    </header>
  );
}
`);

fs.writeFileSync('src/components/QuoteSection.tsx', `
export function QuoteSection({ config }: { config: any }) {
  return (
    <section className="quote-section">
      <div className="container">
        <h2 className="quote-text">"{config.quotes[0]}"</h2>
      </div>
    </section>
  );
}
`);

fs.writeFileSync('src/components/AuthorSection.tsx', `
export function AuthorSection({ config }: { config: any }) {
  const { author } = config;
  return (
    <section id="author" className="author-section">
      <div className="container author-grid">
        <div>
          <img src={author.photo} alt="Autor" className="author-photo" />
        </div>
        <div>
          <h3 className="author-name">{author.name}</h3>
          <p className="author-title">Pastor • Conferencista • Ensinador da Palavra</p>
          <p className="author-bio">Há mais de 20 anos servindo a Cristo, dedicando-se ao ensino bíblico, formação cristã e aplicação prática das Escrituras. {author.bio}</p>
        </div>
      </div>
    </section>
  );
}
`);

fs.writeFileSync('src/components/BonusSection.tsx', `
export function BonusSection({ config }: { config: any }) {
  const icons = ["📖", "🙏", "📚", "🎓"];
  return (
    <section id="bonus" className="section-padding bg-gray">
      <div className="container">
        <h2 className="section-title">Bônus Exclusivos</h2>
        <div className="bonus-grid">
          {config.bonuses.map((bonus: any, idx: number) => (
            <div className="bonus-card" key={idx}>
              <div className="bonus-icon">{icons[idx % icons.length]}</div>
              <h3 className="bonus-title">{bonus.title}</h3>
              <p>Incluso gratuitamente</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

fs.writeFileSync('src/components/OfferSection.tsx', `
export function OfferSection({ config }: { config: any }) {
  const { offer } = config;
  return (
    <section id="offer" className="offer-section">
      <div className="container">
        <div className="offer-box">
          <h2 className="offer-title">Adquira agora</h2>
          <div className="price-container">
            <span className="old-price">{offer.oldPrice}</span>
            <span className="new-price">{offer.price}</span>
            <span className="installments">ou 3x R$6,63</span>
          </div>
          <ul className="offer-guarantees">
            <li><span className="check-icon">✓</span> Download imediato</li>
            <li><span className="check-icon">✓</span> Acesso vitalício</li>
            <li><span className="check-icon">✓</span> Leitura no celular, tablet e computador</li>
          </ul>
          <a href={offer.checkoutLink} className="buy-button-large">Quero Começar a Leitura</a>
        </div>
      </div>
    </section>
  );
}
`);

fs.writeFileSync('src/components/BookPreviewSection.tsx', `
export function BookPreviewSection({ config }: { config: any }) {
  if (!config.previewPages) return null;
  return (
    <section className="preview-section">
      <div className="container">
        <h2 className="section-title">Veja algumas páginas do livro</h2>
        <div className="preview-grid">
          {config.previewPages.map((page: any, idx: number) => (
            <img key={idx} src={page} alt="Página de exemplo" className="preview-page" />
          ))}
        </div>
      </div>
    </section>
  );
}
`);

fs.writeFileSync('src/components/IsForYouSection.tsx', `
export function IsForYouSection({ config }: { config: any }) {
  if (!config.isForYou) return null;
  return (
    <section className="is-for-you-section">
      <div className="container">
        <h2 className="section-title">Este livro é para você se...</h2>
        <ul className="checklist">
          {config.isForYou.map((item: any, idx: number) => (
            <li key={idx}><span className="checklist-icon">✓</span> {item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
`);

fs.writeFileSync('src/components/CollectionSection.tsx', `
export function CollectionSection({ config }: { config: any }) {
  if (!config.collection) return null;
  return (
    <section className="collection-section">
      <div className="container">
        <span className="collection-banner">{config.collection.title}</span>
        <h3>Outros livros do autor</h3>
        <div className="collection-links">
          {config.collection.books.map((book: any, idx: number) => (
            <a key={idx} href={book.path} className="collection-link">📕 {book.title}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

fs.writeFileSync('src/components/AmazonStyleSection.tsx', `
export function AmazonStyleSection({ config }: { config: any }) {
  if (!config.amazonStyle) return null;
  return (
    <section className="amazon-section">
      <div className="container amazon-grid">
        <div>
          <h2 className="amazon-title">{config.amazonStyle.title}</h2>
          <p className="amazon-text">{config.amazonStyle.description}</p>
        </div>
        <div>
          <img src={config.amazonStyle.image} alt="Livro Aberto" className="amazon-image" />
        </div>
      </div>
    </section>
  );
}
`);

fs.writeFileSync('src/components/LandingPage.tsx', `
import { CollectionSection } from './CollectionSection';
import { HeroSection } from './HeroSection';
import { QuoteSection } from './QuoteSection';
import { AmazonStyleSection } from './AmazonStyleSection';
import { AboutBookSection } from './AboutBookSection';
import { BookPreviewSection } from './BookPreviewSection';
import { IsForYouSection } from './IsForYouSection';
import { FeaturesSection } from './FeaturesSection';
import { SummarySection } from './SummarySection';
import { TargetAudienceSection } from './TargetAudienceSection';
import { AuthorSection } from './AuthorSection';
import { BonusSection } from './BonusSection';
import { TestimonialsSection } from './TestimonialsSection';
import { OfferSection } from './OfferSection';
import { FAQSection } from './FAQSection';
import { FooterSection } from './FooterSection';

export function LandingPage({ config }: { config: any }) {
  if (!config) return <div style={{textAlign:'center', padding: '100px'}}>Página não encontrada</div>;

  return (
    <>
      <CollectionSection config={config} />
      <HeroSection config={config} />
      <QuoteSection config={config} />
      <AmazonStyleSection config={config} />
      <AboutBookSection config={config} />
      <BookPreviewSection config={config} />
      <IsForYouSection config={config} />
      <FeaturesSection config={config} />
      <SummarySection config={config} />
      <TargetAudienceSection config={config} />
      <AuthorSection config={config} />
      <BonusSection config={config} />
      <TestimonialsSection config={config} />
      <OfferSection config={config} />
      <FAQSection config={config} />
      <FooterSection config={config} />
    </>
  );
}
`);

console.log("Components updated.");
