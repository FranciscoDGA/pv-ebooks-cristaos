
export function AuthorSection({ config }: { config: any }) {
  if (!config.author) return null;
  return (
    <section id="author" className="section-padding" style={{ backgroundColor: '#0F172A', color: '#fff' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 300px' }}>
            <img src={config.author.photo} alt={config.author.name} style={{ width: '100%', borderRadius: '8px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)' }} />
          </div>
          <div style={{ flex: '2 1 500px' }}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', color: '#F3F4F6' }}>{config.author.name}</h2>
            <p style={{ color: '#9CA3AF', textTransform: 'lowercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Pastor • conferencista • ensinador da Palavra</p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#D1D5DB' }}>{config.author.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
