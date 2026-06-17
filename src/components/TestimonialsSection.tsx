export function TestimonialsSection({ config }: { config: any }) {
  if (!config.testimonials) return null;
  const CREME = '#f4ede0';
  const DOURADO = '#b8863f';
  const TINTA = '#2c2a26';
  const CORPO = '#39322a';

  return (
    <section style={{ background: CREME, padding: '96px 0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{
            fontFamily: "'EB Garamond', serif",
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: DOURADO,
            fontSize: '0.75rem',
            marginBottom: '1rem',
          }}>
            Leitores
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: TINTA,
          }}>
            O que os leitores dizem
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {config.testimonials.map((test: any, idx: number) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
                fontStyle: 'italic',
                color: CORPO,
                lineHeight: 1.7,
                marginBottom: '1.25rem',
              }}>
                "{test.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <div style={{ width: '60px', height: '1px', background: `${DOURADO}40` }} />
                <p style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: '#9a9080',
                  margin: 0,
                }}>
                  {test.name}
                </p>
                <div style={{ width: '60px', height: '1px', background: `${DOURADO}40` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
