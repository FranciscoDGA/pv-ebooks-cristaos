export function HeroSection({ config }: { config: any }) {
  const { hero } = config;
  const ACO = '#1b2230';
  const DOURADO = '#b8863f';
  const DOURADO_CL = '#cf9a55';
  const CREME = '#f4ede0';

  return (
    <header style={{ background: ACO, color: CREME, padding: '80px 0 60px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* Left: text */}
          <div>
            <p style={{
              fontFamily: "'EB Garamond', serif",
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: DOURADO,
              fontSize: '0.75rem',
              marginBottom: '1.5rem',
            }}>
              {hero.category}
            </p>

            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              lineHeight: 1.1,
              color: CREME,
              marginBottom: '1.25rem',
            }}>
              {hero.title}
            </h1>

            <p style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: '1.2rem',
              fontStyle: 'italic',
              color: DOURADO_CL,
              marginBottom: '1.5rem',
              lineHeight: 1.5,
            }}>
              {hero.subtitle}
            </p>

            <p style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: '1.1rem',
              color: '#c8bfb0',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
              maxWidth: '55ch',
            }}>
              {hero.description}
            </p>

            <a
              href="#offer"
              style={{
                display: 'inline-block',
                background: DOURADO,
                color: '#1a1209',
                fontFamily: "'EB Garamond', serif",
                fontWeight: 600,
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                padding: '16px 40px',
                borderRadius: '2px',
                textDecoration: 'none',
                transition: 'background 0.2s',
                marginBottom: '2rem',
              }}
              onMouseOver={e => (e.currentTarget.style.background = DOURADO_CL)}
              onMouseOut={e => (e.currentTarget.style.background = DOURADO)}
            >
              Quero meu exemplar
            </a>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.5rem' }}>
              {hero.guarantees.map((item: string, idx: number) => (
                <li key={idx} style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: '0.9rem',
                  color: '#9a9080',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}>
                  <span style={{ color: DOURADO }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: book mockup */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src={hero.coverImage}
              alt={`Capa do livro ${hero.title}`}
              style={{
                maxWidth: '340px',
                width: '100%',
                filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.6))',
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
