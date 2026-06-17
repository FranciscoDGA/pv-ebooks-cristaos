import type { EbookData } from '../../data/ebooks';

const GOLD = '#c4973a';
const GOLD_LIGHT = '#e0b050';

export function EbookHero({ ebook }: { ebook: EbookData }) {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #080808 0%, #111111 50%, #0d0d0d 100%)',
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      padding: '80px 0 60px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '50%', height: '100%',
        background: `radial-gradient(ellipse at 80% 30%, ${ebook.acento}18 0%, transparent 65%)`,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', width: '100%', position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* LEFT: Text */}
          <div>
            <div style={{
              display: 'inline-block',
              background: `${GOLD}20`,
              border: `1px solid ${GOLD}40`,
              borderRadius: '100px',
              padding: '6px 18px',
              marginBottom: '1.5rem',
            }}>
              <span style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.25em',
                color: GOLD,
              }}>
                E-book Digital • PDF
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              lineHeight: 1.05,
              color: '#ffffff',
              marginBottom: '1.25rem',
            }}>
              {ebook.titulo}
            </h1>

            <p style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              fontStyle: 'italic',
              color: GOLD_LIGHT,
              lineHeight: 1.5,
              marginBottom: '1rem',
            }}>
              {ebook.subtitulo}
            </p>

            <p style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: '1.1rem',
              color: '#b0b0b0',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
              maxWidth: '52ch',
            }}>
              {ebook.promessa}
            </p>

            {/* Price */}
            <div style={{ marginBottom: '1.5rem' }}>
              {ebook.preco.de && (
                <p style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: '1rem',
                  color: '#666',
                  textDecoration: 'line-through',
                  marginBottom: '2px',
                }}>
                  De {ebook.preco.de}
                </p>
              )}
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                color: GOLD,
                lineHeight: 1,
                marginBottom: '0',
              }}>
                {ebook.preco.por}
              </p>
              <p style={{ fontFamily: "'EB Garamond', serif", fontSize: '0.85rem', color: '#666', marginTop: '4px' }}>
                Acesso imediato após a compra
              </p>
            </div>

            {/* CTA */}
            <a
              href={ebook.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`,
                color: '#0a0a0a',
                fontFamily: "'EB Garamond', serif",
                fontWeight: 700,
                fontSize: '1.15rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                padding: '18px 40px',
                borderRadius: '4px',
                textDecoration: 'none',
                textAlign: 'center',
                maxWidth: '420px',
                marginBottom: '1.25rem',
                boxShadow: `0 8px 30px ${GOLD}40`,
              }}
            >
              Quero ler este e-book agora →
            </a>

            {/* Trust items */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem 1.5rem' }}>
              {['✓ Download imediato', '✓ PDF em alta qualidade', '✓ Acesso vitalício', '✓ Garantia de 7 dias'].map((item, i) => (
                <span key={i} style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: '0.9rem',
                  color: '#777',
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: Mockup */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              {/* Glow behind book */}
              <div style={{
                position: 'absolute',
                top: '10%', left: '10%', right: '10%', bottom: '10%',
                background: `radial-gradient(ellipse, ${ebook.acento}35 0%, transparent 70%)`,
                filter: 'blur(40px)',
                zIndex: 0,
              }} />
              <img
                src={ebook.mockup}
                alt={`Capa: ${ebook.titulo}`}
                style={{
                  maxWidth: '360px',
                  width: '100%',
                  position: 'relative',
                  zIndex: 1,
                  filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.8))',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
