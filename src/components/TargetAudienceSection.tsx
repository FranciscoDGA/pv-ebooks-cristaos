export function TargetAudienceSection({ config }: { config: any }) {
  return (
    <section id="audience" className="section-padding">
      <div className="container">
        <h2 className="audience-title">Para quem este livro é?</h2>
        <div className="audience-grid">
          <div className="audience-box">
            <p className="audience-desc">{config.audience}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
