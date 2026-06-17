import type { EbookData } from '../../data/ebooks';

export function BenefitsSection({ ebook }: { ebook: EbookData }) {
  const GOLD = '#c4973a';

  return (
    <section style={{ background: '#111111', padding: '96px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{
            fontFamily: "'EB Garamond', serif",
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: GOLD,
            fontSize: '0.75rem',
            marginBottom: '1rem',
          }}>
            Conteúdo
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#ffffff',
          }}>
            O que você vai descobrir
          </h2>
          <p style={{
            fontFamily: "'EB Garamond', serif",
            fontSize: '1.1rem',
            color: '#888',
            marginTop: '0.75rem',
          }}>
            Cada capítulo foi escrito para levar da leitura à transformação.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {ebook.beneficios.map((b, i) => (
            <div key={i} style={{
              background: '#1a1a1a',
              border: '1px solid #2a2a2a',
              borderTop: `2px solid ${GOLD}`,
              borderRadius: '4px',
              padding: '1.75rem',
              display: 'flex',
              gap: '1.25rem',
              alignItems: 'flex-start',
              transition: 'border-color 0.2s',
            }}>
              <span style={{ fontSize: '1.8rem', flexShrink: 0, lineHeight: 1 }}>{b.icone}</span>
              <div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: '1.2rem',
                  color: '#ffffff',
                  marginBottom: '0.4rem',
                }}>
                  {b.titulo}
                </h3>
                <p style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: '1rem',
                  color: '#888',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {b.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
