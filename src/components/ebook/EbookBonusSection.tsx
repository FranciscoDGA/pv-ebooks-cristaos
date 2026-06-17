import type { EbookData } from '../../data/ebooks';

export function EbookBonusSection({ ebook: _ }: { ebook: EbookData }) {
  const GOLD = '#c4973a';

  const benefits = [
    { icone: '⚡', titulo: 'Leitura imediata', descricao: 'Acesse o PDF nos primeiros segundos após a compra.' },
    { icone: '📖', titulo: 'Linguagem acessível', descricao: 'Escrito para qualquer cristão ler — do iniciante ao experiente.' },
    { icone: '🗂️', titulo: 'Conteúdo organizado', descricao: 'Capítulos progressivos, pensados para conduzir à transformação.' },
    { icone: '🙏', titulo: 'Material devocional', descricao: 'Orações e reflexões ao final de cada parte para aprofundar a leitura.' },
    { icone: '♾️', titulo: 'Acesso vitalício', descricao: 'Sem prazo, sem mensalidade. O arquivo é seu para sempre.' },
    { icone: '🎁', titulo: 'Perfeito para presentear', descricao: 'Compartilhe com quem você ama e que precisa desta mensagem.' },
  ];

  return (
    <section style={{ background: '#0d0d0d', padding: '80px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{
            fontFamily: "'EB Garamond', serif",
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: GOLD,
            fontSize: '0.75rem',
            marginBottom: '1rem',
          }}>
            Benefícios
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#ffffff',
          }}>
            Muito mais do que um e-book
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem',
        }}>
          {benefits.map((b, i) => (
            <div key={i} style={{
              padding: '1.5rem',
              background: '#141414',
              border: '1px solid #1e1e1e',
              borderRadius: '4px',
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start',
            }}>
              <span style={{
                fontSize: '1.6rem',
                width: '42px',
                height: '42px',
                background: `${GOLD}18`,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                lineHeight: 1,
              }}>
                {b.icone}
              </span>
              <div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: '1.15rem',
                  color: '#ffffff',
                  marginBottom: '0.3rem',
                }}>
                  {b.titulo}
                </h3>
                <p style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: '0.95rem',
                  color: '#777',
                  margin: 0,
                  lineHeight: 1.6,
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
