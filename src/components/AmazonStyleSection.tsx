
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
