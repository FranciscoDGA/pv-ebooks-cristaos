import { bookConfig } from '../config/bookConfig';

export function TargetAudienceSection() {
  const { audience } = bookConfig;
  return (
    <section className="section-padding audience-section">
      <div className="container">
        <h2 className="audience-title">Para quem este livro é?</h2>
        <div className="audience-grid">
          {audience.map((item, idx) => (
            <div key={idx} className="audience-item">{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
