export function SummarySection({ config }: { config: any }) {
  const { summary } = config;
  return (
    <section className="section-padding summary-section">
      <div className="container">
        <div className="summary-header">
          <h2>Sumário da Obra</h2>
          <div className="summary-meta">
            <span>{summary.pageCount} páginas</span>
            <span>�</span>
            <span>Tempo de leitura: {summary.readingTime}</span>
            <span>�</span>
            <span>Nível: {summary.level}</span>
          </div>
        </div>
        <div className="modules-list">
          {summary.modules.map((mod: any, idx: number) => (
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
