
export function BookPreviewSection({ config }: { config: any }) {
  if (!config.previewPages) return null;
  return (
    <section className="preview-section">
      <div className="container">
        <h2 className="section-title">Veja algumas páginas do livro</h2>
        <div className="preview-grid">
          {config.previewPages.map((page: any, idx: number) => (
            <img key={idx} src={page} alt="Página de exemplo" className="preview-page" />
          ))}
        </div>
      </div>
    </section>
  );
}
