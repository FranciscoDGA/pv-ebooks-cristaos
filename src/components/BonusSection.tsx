
export function BonusSection({ config }: { config: any }) {
  const icons = ["📖", "🙏", "📚", "🎓"];
  return (
    <section id="bonus" className="section-padding bg-gray">
      <div className="container">
        <h2 className="section-title">Bônus Exclusivos</h2>
        <div className="bonus-grid">
          {config.bonuses.map((bonus: any, idx: number) => (
            <div className="bonus-card" key={idx}>
              <div className="bonus-icon">{icons[idx % icons.length]}</div>
              <h3 className="bonus-title">{bonus.title}</h3>
              <p>Incluso gratuitamente</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
