import React from 'react';

export function FeaturesSection({ config }: { config: any }) {
  if (!config.features) return null;
  return (
    <section id="features" className="section-padding">
      <div className="container">
        <h2 className="section-title">O que você encontrará?</h2>
        <div className="features-grid">
          {config.features.map((feature: any, idx: number) => (
            <div className="feature-card" key={idx}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
