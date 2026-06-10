import { bookConfig } from '../config/bookConfig';

export function BonusSection() {
  const { bonuses } = bookConfig;
  return (
    <section className="section-padding bonus-section">
      <div className="container">
        <h2 className="bonus-title">B�nus Exclusivos</h2>
        <div className="bonus-grid">
          {bonuses.map((bonus, idx) => (
            <div key={idx} className="bonus-card">
              <h3>{bonus.title}</h3>
              <p>Valor: <span className="bonus-value">{bonus.value}</span> (Incluso hoje)</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
