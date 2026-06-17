import type { EbookData } from '../../data/ebooks';

export function EbookAuthorSection({ ebook }: { ebook: EbookData }) {
  const GOLD = '#c4973a';

  return (
    <section style={{ background: '#080808', padding: '96px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* Photo */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', maxWidth: '320px', width: '100%' }}>
              <img
                src={ebook.autor.foto}
                alt={ebook.autor.nome}
                style={{
                  width: '100%',
                  borderRadius: '4px',
                  filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.7))',
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                height: '3px',
                background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
              }} />
            </div>
          </div>

          {/* Bio */}
          <div>
            <p style={{
              fontFamily: "'EB Garamond', serif",
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: GOLD,
              fontSize: '0.75rem',
              marginBottom: '1rem',
            }}>
              O autor
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              color: '#ffffff',
              marginBottom: '0.5rem',
            }}>
              {ebook.autor.nome}
            </h2>
            <p style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: '0.9rem',
              color: GOLD,
              letterSpacing: '0.1em',
              marginBottom: '1.5rem',
            }}>
              {ebook.autor.cargo}
            </p>

            <div style={{
              width: '40px', height: '2px',
              background: `linear-gradient(90deg, ${GOLD}, transparent)`,
              marginBottom: '1.5rem',
            }} />

            <p style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: '1.1rem',
              color: '#aaaaaa',
              lineHeight: 1.9,
            }}>
              {ebook.autor.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
