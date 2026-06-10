import { bookConfig } from '../config/bookConfig';

export function SummarySection() {
  const { summary } = bookConfig;
  return (
    <section className="section-padding summary-section">
      <div className="container">
        <div className="summary-header">
          <h2>Sum�rio da Obra</h2>
          <div className="summary-meta">
            <span>{summary.pageCount} p�ginas</span>
            <span>�</span>
            <span>Tempo de leitura: {summary.readingTime}</span>
            <span>�</span>
            <span>N�vel: {summary.level}</span>
          </div>
        </div>
        <div className="modules-list">
          {summary.modules.map((mod, idx) => (
            <div key={idx} className="module-item">
              <h3 className="module-title">{mod.title}</h3>
              <p className="module-desc">{mod.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
