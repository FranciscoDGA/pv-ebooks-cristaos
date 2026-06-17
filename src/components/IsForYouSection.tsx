export function IsForYouSection({ config }: { config: any }) {
  if (!config.isForYou) return null;
  const CREME = '#f4ede0';
  const DOURADO = '#b8863f';
  const TINTA = '#2c2a26';
  const CORPO = '#39322a';

  return (
    <section style={{ background: CREME, padding: '96px 0' }}>
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
            Leitor ideal
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: TINTA,
          }}>
            Este livro é para você se…
          </h2>
        </div>

        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {config.isForYou.map((item: string, idx: number) => (
            <li key={idx} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              padding: '1.25rem 1.5rem',
              background: '#efe6d6',
              borderRadius: '2px',
              borderLeft: `3px solid ${DOURADO}`,
            }}>
              <span style={{ color: DOURADO, fontSize: '1.1rem', marginTop: '1px', flexShrink: 0 }}>✓</span>
              <span style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: '1.1rem',
                color: CORPO,
                lineHeight: 1.6,
              }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
