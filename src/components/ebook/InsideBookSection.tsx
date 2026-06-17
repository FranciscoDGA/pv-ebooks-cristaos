import type { EbookData } from '../../data/ebooks';

export function InsideBookSection({ ebook }: { ebook: EbookData }) {
  const GOLD = '#c4973a';

  return (
    <section style={{ background: '#080808', padding: '96px 0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{
            fontFamily: "'EB Garamond', serif",
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: GOLD,
            fontSize: '0.75rem',
            marginBottom: '1rem',
          }}>
            Estrutura
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#ffffff',
          }}>
            O que tem dentro do e-book
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '28px',
            top: 0,
            bottom: 0,
            width: '1px',
            background: `linear-gradient(to bottom, ${GOLD}00, ${GOLD}60, ${GOLD}00)`,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {ebook.capitulos.map((cap, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '2rem',
                paddingBottom: '2.5rem',
                position: 'relative',
              }}>
                {/* Number circle */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: '#111111',
                  border: `1px solid ${GOLD}50`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  zIndex: 1,
                }}>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: GOLD,
                  }}>
                    {cap.numero}
                  </span>
                </div>

                {/* Content */}
                <div style={{
                  background: '#111111',
                  border: '1px solid #1e1e1e',
                  borderRadius: '4px',
                  padding: '1.25rem 1.5rem',
                  flex: 1,
                }}>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontSize: '1.3rem',
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                  }}>
                    {cap.titulo}
                  </h3>
                  <p style={{
                    fontFamily: "'EB Garamond', serif",
                    fontSize: '1rem',
                    color: '#777',
                    lineHeight: 1.7,
                    margin: 0,
                  }}>
                    {cap.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
