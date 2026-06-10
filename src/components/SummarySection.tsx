

export function SummarySection({ config }: { config: any }) {
  if (!config.summary) return null;
  return (
    <section id="summary" className="section-padding bg-gray">
      <div className="container">
        <h2 className="section-title">Sumário da Obra</h2>
        <div className="summary-info">
          <span>{config.pages} páginas</span>
          <span>Tempo de leitura: 1 a 2 horas</span>
          <span>Nível: Iniciante</span>
        </div>
        <div className="summary-list">
          {config.summary.map((chapter: string, idx: number) => (
            <div className="summary-item" key={idx}>
              <span className="chapter-num">Capítulo {idx + 1}</span>
              <span className="chapter-title">{chapter}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
