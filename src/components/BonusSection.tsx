export function BonusSection({ config }: { config: any }) {
  if (!config.bonuses) return null;
  const CREME_2 = '#efe6d6';
  const DOURADO = '#b8863f';
  const TINTA = '#2c2a26';
  const CORPO = '#39322a';

  return (
    <section style={{ background: CREME_2, padding: '96px 0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{
            fontFamily: "'EB Garamond', serif",
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: DOURADO,
            fontSize: '0.75rem',
            marginBottom: '1rem',
          }}>
            Incluso na compra
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: TINTA,
          }}>
            O que você recebe
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {config.bonuses.map((bonus: any, idx: number) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.25rem',
              padding: '1.5rem 2rem',
              background: '#f4ede0',
              borderRadius: '2px',
            }}>
              <span style={{
                color: DOURADO,
                fontSize: '1.3rem',
                flexShrink: 0,
                marginTop: '2px',
              }}>✦</span>
              <div>
                <p style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: '1.1rem',
                  color: CORPO,
                  lineHeight: 1.6,
                }}>
                  {bonus.title}
                </p>
                <p style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: '0.85rem',
                  color: DOURADO,
                  marginTop: '0.25rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}>
                  {bonus.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
