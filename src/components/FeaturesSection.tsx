export function FeaturesSection({ config }: { config: any }) {
  const { features } = config;
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="features-title">O que você encontrará</h2>
        <div className="features-grid">
          {features.map((feature: any, idx: number) => (
            <div key={idx} className="feature-card">
              <span className="feature-icon">?</span>
              <h3>{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
