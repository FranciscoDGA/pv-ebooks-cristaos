export function FeaturesSection({ config }: { config: any }) {
  const { features } = config;
  const CREME_2 = '#efe6d6';
  const DOURADO = '#b8863f';
  const TINTA = '#2c2a26';
  const CORPO = '#39322a';

  return (
    <section style={{ background: CREME_2, padding: '96px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{
            fontFamily: "'EB Garamond', serif",
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: DOURADO,
            fontSize: '0.75rem',
            marginBottom: '1rem',
          }}>
            Conteúdo
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: TINTA,
          }}>
            O que você vai descobrir
          </h2>
          {/* Gold divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem', maxWidth: '200px', margin: '1.5rem auto 0' }}>
            <div style={{ flex: 1, height: '1px', background: `${DOURADO}60` }} />
            <span style={{ color: DOURADO, fontSize: '0.6rem' }}>◆</span>
            <div style={{ flex: 1, height: '1px', background: `${DOURADO}60` }} />
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {features.map((feature: string, idx: number) => (
            <div key={idx} style={{
              background: '#f4ede0',
              padding: '1.75rem 2rem',
              borderRadius: '2px',
              borderTop: `2px solid ${DOURADO}`,
              display: 'flex',
              gap: '1.25rem',
              alignItems: 'flex-start',
            }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: '1.8rem',
                color: `${DOURADO}80`,
                lineHeight: 1,
                minWidth: '2rem',
              }}>
                {String(idx + 1).padStart(2, '0')}
              </span>
              <p style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: '1.05rem',
                color: CORPO,
                lineHeight: 1.7,
              }}>
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
