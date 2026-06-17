import type { EbookData } from '../../data/ebooks';

export function ForWhomSection({ ebook }: { ebook: EbookData }) {
  const GOLD = '#c4973a';

  return (
    <section style={{ background: '#0f0f0f', padding: '96px 0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{
            fontFamily: "'EB Garamond', serif",
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: GOLD,
            fontSize: '0.75rem',
            marginBottom: '1rem',
          }}>
            Público
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#ffffff',
          }}>
            Este e-book é para você se…
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {ebook.paraQuem.map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              padding: '1.25rem 1.5rem',
              background: '#141414',
              border: '1px solid #222',
              borderLeft: `3px solid ${GOLD}`,
              borderRadius: '0 4px 4px 0',
            }}>
              <span style={{
                color: GOLD,
                fontSize: '1rem',
                flexShrink: 0,
                marginTop: '2px',
                fontWeight: 700,
              }}>✓</span>
              <p style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: '1.1rem',
                color: '#cccccc',
                lineHeight: 1.6,
                margin: 0,
              }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
