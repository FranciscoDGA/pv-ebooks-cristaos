import type { EbookData } from '../../data/ebooks';

export function FinalCTASection({ ebook }: { ebook: EbookData }) {
  const GOLD = '#c4973a';
  const GOLD_LIGHT = '#e0b050';

  return (
    <section style={{
      background: `linear-gradient(180deg, #050505 0%, #0a0a0a 100%)`,
      padding: '120px 0',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: `radial-gradient(ellipse, ${GOLD}12 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <p style={{
          fontFamily: "'EB Garamond', serif",
          textTransform: 'uppercase',
          letterSpacing: '0.3em',
          color: GOLD,
          fontSize: '0.75rem',
          marginBottom: '1.5rem',
        }}>
          Sua jornada começa agora
        </p>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700,
          fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
          color: '#ffffff',
          lineHeight: 1.2,
          marginBottom: '1.5rem',
        }}>
          {ebook.promessa}
        </h2>

        <p style={{
          fontFamily: "'EB Garamond', serif",
          fontSize: '1.15rem',
          color: '#777',
          lineHeight: 1.8,
          marginBottom: '3rem',
        }}>
          Não espere o momento perfeito. Ele nunca chega. Dê o próximo passo agora, com a Palavra ao seu lado.
        </p>

        <a
          href={ebook.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`,
            color: '#0a0a0a',
            fontFamily: "'EB Garamond', serif",
            fontWeight: 700,
            fontSize: '1.2rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            padding: '22px 56px',
            borderRadius: '4px',
            textDecoration: 'none',
            boxShadow: `0 12px 40px ${GOLD}50`,
            marginBottom: '1.5rem',
          }}
        >
          Quero começar agora →
        </a>

        <p style={{
          fontFamily: "'EB Garamond', serif",
          fontSize: '0.9rem',
          color: '#444',
          margin: 0,
        }}>
          🛡️ Garantia de 7 dias • Acesso imediato • Pagamento seguro
        </p>
      </div>
    </section>
  );
}
