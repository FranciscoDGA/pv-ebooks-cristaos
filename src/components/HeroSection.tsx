
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
