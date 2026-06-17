import type { EbookData } from '../../data/ebooks';

export function EbookTestimonialsSection({ ebook }: { ebook: EbookData }) {
  const GOLD = '#c4973a';

  return (
    <section style={{ background: '#111111', padding: '96px 0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{
            fontFamily: "'EB Garamond', serif",
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: GOLD,
            fontSize: '0.75rem',
            marginBottom: '1rem',
          }}>
            Depoimentos
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#ffffff',
          }}>
            O que os leitores dizem
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {ebook.depoimentos.map((d, i) => (
            <div key={i} style={{
              background: '#161616',
              border: '1px solid #222',
              borderRadius: '4px',
              padding: '2rem',
              position: 'relative',
            }}>
              {/* Quote mark */}
              <span style={{
                position: 'absolute',
                top: '1rem', left: '1.5rem',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '4rem',
                color: `${GOLD}30`,
                lineHeight: 1,
                userSelect: 'none',
              }}>
                "
              </span>

              {/* Stars */}
              <div style={{ marginBottom: '1rem' }}>
                {'★★★★★'.split('').map((s, j) => (
                  <span key={j} style={{ color: GOLD, fontSize: '0.9rem' }}>{s}</span>
                ))}
              </div>

              <p style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: '1.05rem',
                fontStyle: 'italic',
                color: '#aaaaaa',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
                position: 'relative',
                zIndex: 1,
              }}>
                "{d.texto}"
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                paddingTop: '1rem',
                borderTop: '1px solid #1e1e1e',
              }}>
                <div style={{
                  width: '36px', height: '36px',
                  borderRadius: '50%',
                  background: `${GOLD}25`,
                  border: `1px solid ${GOLD}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                }}>
                  {d.nome[0]}
                </div>
                <div>
                  <p style={{
                    fontFamily: "'EB Garamond', serif",
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    color: '#dddddd',
                    margin: 0,
                  }}>
                    {d.nome}
                  </p>
                  {d.cargo && (
                    <p style={{
                      fontFamily: "'EB Garamond', serif",
                      fontSize: '0.8rem',
                      color: '#666',
                      margin: 0,
                    }}>
                      {d.cargo}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
