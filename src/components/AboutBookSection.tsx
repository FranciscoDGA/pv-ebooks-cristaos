export function AboutBookSection({ config }: { config: any }) {
  const { about } = config;
  const CREME = '#f4ede0';
  const DOURADO = '#b8863f';
  const TINTA = '#2c2a26';
  const CORPO = '#39322a';

  return (
    <section style={{ background: CREME, padding: '96px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <div style={{ flex: 1, height: '1px', background: `${DOURADO}40` }} />
          <span style={{ color: DOURADO, fontSize: '0.7rem' }}>◆</span>
          <div style={{ flex: 1, height: '1px', background: `${DOURADO}40` }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={about.image}
              alt="Livro"
              style={{
                maxWidth: '300px',
                width: '100%',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))',
              }}
            />
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
              Sobre o livro
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              color: TINTA,
              lineHeight: 1.2,
              marginBottom: '1.5rem',
            }}>
              {about.whyWrittenTitle}
            </h2>
            <p style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: '1.15rem',
              color: CORPO,
              lineHeight: 1.9,
              marginBottom: '1.5rem',
            }}>
              {about.presentation}
            </p>
            <div style={{
              borderLeft: `3px solid ${DOURADO}`,
              paddingLeft: '1.5rem',
              marginTop: '2rem',
            }}>
              <p style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: '1.1rem',
                fontStyle: 'italic',
                color: CORPO,
                lineHeight: 1.8,
              }}>
                {about.whyWrittenText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
