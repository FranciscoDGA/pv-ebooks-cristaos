import type { EbookData } from '../../data/ebooks';

export function ProblemSection({ ebook }: { ebook: EbookData }) {
  const GOLD = '#c4973a';

  return (
    <section style={{ background: '#0f0f0f', padding: '96px 0' }}>
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 24px' }}>
        {/* Opening question */}
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 600,
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontStyle: 'italic',
          color: '#ffffff',
          lineHeight: 1.3,
          marginBottom: '2.5rem',
          textAlign: 'center',
        }}>
          "{ebook.dor.frase}"
        </h2>

        {/* Gold divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <div style={{ flex: 1, height: '1px', background: `${GOLD}30` }} />
          <span style={{ color: GOLD, fontSize: '0.6rem' }}>◆</span>
          <div style={{ flex: 1, height: '1px', background: `${GOLD}30` }} />
        </div>

        {/* Problem paragraphs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {ebook.dor.paragrafos.map((p, i) => (
            <p key={i} style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
              lineHeight: 1.9,
              textAlign: i === 0 ? 'center' : 'left',
              fontWeight: i === 0 ? 500 : 400,
              color: i === 0 ? '#d0d0d0' : '#999999',
            }}>
              {p}
            </p>
          ))}
        </div>

        {/* Bridge */}
        <div style={{
          marginTop: '3rem',
          padding: '1.75rem 2rem',
          borderLeft: `3px solid ${GOLD}`,
          background: `${GOLD}08`,
          borderRadius: '0 4px 4px 0',
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
            fontStyle: 'italic',
            color: '#dddddd',
            lineHeight: 1.6,
            margin: 0,
          }}>
            É exatamente sobre isso que este e-book fala.
          </p>
        </div>
      </div>
    </section>
  );
}
