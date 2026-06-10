import { bookConfig } from '../config/bookConfig';

export function HeroSection() {
  const { hero } = bookConfig;
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div>
          <span className="hero-category">{hero.category}</span>
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <p className="hero-description">{hero.description}</p>
          
          <div className="hero-actions">
            <a href={bookConfig.offer.checkoutLink} className="btn btn-primary">Comprar Agora</a>
            <a href="#about" className="btn btn-secondary">Ler Amostra</a>
          </div>
          
          <ul className="hero-guarantees">
            {hero.guarantees.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="hero-image-wrapper">
          <img src={hero.coverImage} alt="Capa do Livro" className="hero-image" />
        </div>
      </div>
    </section>
  );
}
