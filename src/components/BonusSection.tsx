
export function BonusSection({ config }: { config: any }) {
  if (!config.bonuses) return null;
  return (
    <section id="bonuses" className="section-padding" style={{ backgroundColor: '#111827', color: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', color: '#FBBF24' }}>Bônus Exclusivos</h2>
          <p style={{ color: '#D1D5DB' }}>Acompanham gratuitamente o e-book nesta oferta.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {config.bonuses.map((bonus: any, idx: number) => (
            <div key={idx} style={{ padding: '2rem', border: '1px solid #374151', borderRadius: '8px', textAlign: 'center', background: 'linear-gradient(145deg, #1F2937, #111827)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem', color: '#FBBF24' }}>✦</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', color: '#F3F4F6', marginBottom: '0.5rem' }}>{bonus.title}</h3>
              <p style={{ color: '#9CA3AF', fontSize: '0.9rem' }}>De {bonus.value} por <strong style={{color: '#10B981'}}>R$ 0,00</strong></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
