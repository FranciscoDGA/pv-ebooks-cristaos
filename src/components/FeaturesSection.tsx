import { bookConfig } from '../config/bookConfig';

export function FeaturesSection() {
  const { features } = bookConfig;
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="features-title">O que voc� encontrar�</h2>
        <div className="features-grid">
          {features.map((feature, idx) => (
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
