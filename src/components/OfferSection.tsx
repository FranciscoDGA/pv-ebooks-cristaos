export function OfferSection({ config }: { config: any }) {
  const { offer } = config;
  const ACO = '#1b2230';
  const DOURADO = '#b8863f';
  const DOURADO_CL = '#cf9a55';
  const CREME = '#f4ede0';

  return (
    <section id="offer" style={{ background: ACO, padding: '96px 0', color: CREME }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <p style={{
          fontFamily: "'EB Garamond', serif",
          textTransform: 'uppercase',
          letterSpacing: '0.3em',
          color: DOURADO,
          fontSize: '0.75rem',
          marginBottom: '1rem',
        }}>
          Oferta
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 600,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: CREME,
          marginBottom: '3rem',
        }}>
          Adquira agora
        </h2>

        <div style={{
          background: '#232a38',
          borderRadius: '4px',
          padding: '3rem 2.5rem',
          border: `1px solid ${DOURADO}30`,
        }}>
          {offer.oldPrice && (
            <p style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: '1.2rem',
              color: '#6a6060',
              textDecoration: 'line-through',
              marginBottom: '0.5rem',
            }}>
              De {offer.oldPrice}
            </p>
          )}
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: 'clamp(3rem, 6vw, 4.5rem)',
            color: DOURADO,
            lineHeight: 1,
            marginBottom: '0.5rem',
          }}>
            {offer.price}
          </p>
          <p style={{
            fontFamily: "'EB Garamond', serif",
            fontSize: '0.9rem',
            color: '#6a6060',
            marginBottom: '2.5rem',
          }}>
            Pagamento via {offer.paymentMethods}
          </p>

          <a
            href={offer.checkoutLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              background: DOURADO,
              color: '#1a1209',
              fontFamily: "'EB Garamond', serif",
              fontWeight: 600,
              fontSize: '1.1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              padding: '20px 40px',
              borderRadius: '2px',
              textDecoration: 'none',
              marginBottom: '2rem',
            }}
            onMouseOver={e => (e.currentTarget.style.background = DOURADO_CL)}
            onMouseOut={e => (e.currentTarget.style.background = DOURADO)}
          >
            Quero começar a leitura
          </a>

          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              `Garantia de ${offer.guaranteeDays} dias — reembolso sem perguntas`,
              'Acesso imediato após o pagamento',
              'Leitura em qualquer aparelho',
            ].map((item, idx) => (
              <li key={idx} style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: '0.95rem',
                color: '#9a9080',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}>
                <span style={{ color: DOURADO }}>✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
