export function AboutBookSection({ config }: { config: any }) {
  const { about } = config;
  return (
    <section id="about" className="section-padding about-section">
      <div className="container about-grid">
        <div>
          <img src={about.image} alt="Livro Detalhe" className="about-image" />
        </div>
        <div className="about-content">
          <h2>Sobre o Livro</h2>
          <p className="about-text">{about.presentation}</p>
          <div className="why-written-block">
            <h3>{about.whyWrittenTitle}</h3>
            <p>{about.whyWrittenText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
