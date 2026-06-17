export function QuoteSection({ config }: { config: any }) {
  const ACO_2 = '#232a38';
  const DOURADO = '#b8863f';
  const CREME = '#f4ede0';

  return (
    <section style={{ background: ACO_2, padding: '80px 0' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <div style={{ flex: 1, height: '1px', background: `${DOURADO}30` }} />
          <span style={{ color: DOURADO, fontSize: '0.6rem' }}>◆</span>
          <div style={{ flex: 1, height: '1px', background: `${DOURADO}30` }} />
        </div>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1.4rem, 3vw, 2rem)',
          fontStyle: 'italic',
          color: CREME,
          lineHeight: 1.7,
          marginBottom: '2rem',
        }}>
          "{config.quotes[0]}"
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ flex: 1, height: '1px', background: `${DOURADO}30` }} />
          <span style={{ color: DOURADO, fontSize: '0.6rem' }}>◆</span>
          <div style={{ flex: 1, height: '1px', background: `${DOURADO}30` }} />
        </div>
      </div>
    </section>
  );
}
