import type { EbookData } from '../../data/ebooks';

export function EbookOfferSection({ ebook }: { ebook: EbookData }) {
  const GOLD = '#c4973a';
  const GOLD_LIGHT = '#e0b050';

  const included = [
    `O e-book completo "${ebook.titulo}"`,
    'PDF em alta qualidade — leia em qualquer dispositivo',
    'Acesso imediato após a compra',
    'Acesso vitalício — sem mensalidade',
    'Garantia de 7 dias — reembolso sem perguntas',
  ];

  return (
    <section id="oferta" style={{ background: '#050505', padding: '96px 0' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <p style={{
          fontFamily: "'EB Garamond', serif",
          textTransform: 'uppercase',
          letterSpacing: '0.3em',
          color: GOLD,
          fontSize: '0.75rem',
          marginBottom: '1rem',
        }}>
          Oferta especial
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: '#ffffff',
          marginBottom: '3rem',
        }}>
          Adquira agora com desconto
        </h2>

        <div style={{
          background: '#111111',
          border: `1px solid ${GOLD}30`,
          borderRadius: '8px',
          padding: '3rem 2.5rem',
          marginBottom: '1.5rem',
        }}>
          {/* Title */}
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: '1.3rem',
            color: '#888',
            marginBottom: '1.5rem',
          }}>
            {ebook.titulo}
          </h3>

          {/* Price */}
          {ebook.preco.de && (
            <p style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: '1.1rem',
              color: '#555',
              textDecoration: 'line-through',
              marginBottom: '4px',
            }}>
              De {ebook.preco.de}
            </p>
          )}
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: 'clamp(3.5rem, 7vw, 5rem)',
            color: GOLD,
            lineHeight: 1,
            marginBottom: '0.5rem',
          }}>
            {ebook.preco.por}
          </p>
          <p style={{
            fontFamily: "'EB Garamond', serif",
            fontSize: '0.9rem',
            color: '#555',
            marginBottom: '2.5rem',
          }}>
            Pagamento único • PIX e Cartão
          </p>

          {/* Included list */}
          <div style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
            <p style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#555',
              marginBottom: '1rem',
            }}>
              O que você recebe:
            </p>
            {included.map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                padding: '0.6rem 0',
                borderBottom: '1px solid #1a1a1a',
              }}>
                <span style={{ color: GOLD, fontSize: '1rem', flexShrink: 0 }}>✓</span>
                <p style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: '1rem',
                  color: '#bbbbbb',
                  margin: 0,
                  lineHeight: 1.5,
                }}>
                  {item}
                </p>
              </div>
            ))}
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
              padding: '20px 40px',
              borderRadius: '4px',
              textDecoration: 'none',
              marginBottom: '1.5rem',
              boxShadow: `0 8px 30px ${GOLD}40`,
            }}
          >
            Quero ler este e-book agora →
          </a>

          {/* Guarantee */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            padding: '1rem',
            background: '#0a0a0a',
            borderRadius: '4px',
          }}>
            <span style={{ fontSize: '1.5rem' }}>🛡️</span>
            <p style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: '0.9rem',
              color: '#777',
              margin: 0,
              textAlign: 'left',
            }}>
              <strong style={{ color: '#aaa' }}>Garantia de 7 dias.</strong> Se não gostar, é só pedir o reembolso — sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
