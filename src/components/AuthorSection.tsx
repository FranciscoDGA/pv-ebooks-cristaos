export function AuthorSection({ config }: { config: any }) {
  if (!config.author) return null;
  const ACO_2 = '#232a38';
  const DOURADO = '#b8863f';
  const DOURADO_CL = '#cf9a55';
  const CREME = '#f4ede0';

  return (
    <section style={{ background: ACO_2, padding: '96px 0', color: CREME }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', maxWidth: '320px', width: '100%' }}>
              <img
                src={config.author.photo}
                alt={config.author.name}
                style={{
                  width: '100%',
                  borderRadius: '2px',
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: '3px',
                background: DOURADO,
              }} />
            </div>
          </div>

          <div>
            <p style={{
              fontFamily: "'EB Garamond', serif",
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: DOURADO,
              fontSize: '0.75rem',
              marginBottom: '1rem',
            }}>
              O autor
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              color: CREME,
              marginBottom: '0.5rem',
            }}>
              {config.author.name}
            </h2>
            <p style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: '0.9rem',
              textTransform: 'lowercase',
              letterSpacing: '0.1em',
              color: DOURADO_CL,
              marginBottom: '1.5rem',
            }}>
              Pastor • Conferencista • Ensinador da Palavra
            </p>
            <p style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: '1.1rem',
              lineHeight: 1.9,
              color: '#c0b8ad',
            }}>
              {config.author.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
