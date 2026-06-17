import type { EbookData } from '../../data/ebooks';

export function MockupSection({ ebook }: { ebook: EbookData }) {
  const GOLD = '#c4973a';
  const GOLD_LIGHT = '#e0b050';

  const devices = ['📱 Celular', '💻 Computador', '📱 Tablet', '📚 E-reader'];

  return (
    <section style={{ background: '#111111', padding: '96px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* Left: Mockup */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{
              position: 'absolute',
              inset: '10%',
              background: `radial-gradient(ellipse, ${GOLD}20 0%, transparent 70%)`,
              filter: 'blur(30px)',
            }} />
            <img
              src={ebook.capa}
              alt={ebook.titulo}
              style={{
                maxWidth: '300px',
                width: '100%',
                borderRadius: '4px',
                boxShadow: '0 30px 80px rgba(0,0,0,0.8)',
                position: 'relative',
                zIndex: 1,
              }}
            />
          </div>

          {/* Right: Info */}
          <div>
            <p style={{
              fontFamily: "'EB Garamond', serif",
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: GOLD,
              fontSize: '0.75rem',
              marginBottom: '1rem',
            }}>
              Formato digital
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              color: '#ffffff',
              marginBottom: '1.5rem',
              lineHeight: 1.2,
            }}>
              Leia em qualquer<br />
              <span style={{ color: GOLD_LIGHT, fontStyle: 'italic' }}>dispositivo</span>
            </h2>

            <p style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: '1.1rem',
              color: '#888',
              lineHeight: 1.8,
              marginBottom: '2rem',
            }}>
              Após a compra, você recebe o PDF em alta qualidade para ler quando e onde quiser — sem prazo de validade, sem mensalidade, sem complicação.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
              {devices.map((d, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  background: '#1a1a1a',
                  borderRadius: '4px',
                  border: '1px solid #2a2a2a',
                }}>
                  <span style={{ fontFamily: "'EB Garamond', serif", fontSize: '1rem', color: '#bbbbbb' }}>{d}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                '✓ PDF em alta qualidade',
                '✓ Fonte legível e design editorial',
                '✓ Download imediato',
                '✓ Acesso vitalício sem mensalidade',
              ].map((item, i) => (
                <p key={i} style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: '1rem',
                  color: '#999',
                  margin: 0,
                }}>
                  <span style={{ color: GOLD }}>{item.slice(0, 1)}</span>{item.slice(1)}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
