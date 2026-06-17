import { useState } from 'react';

export function FAQSection({ config }: { config: any }) {
  const { faq } = config;
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const CREME_2 = '#efe6d6';
  const DOURADO = '#b8863f';
  const TINTA = '#2c2a26';
  const CORPO = '#39322a';

  return (
    <section style={{ background: CREME_2, padding: '96px 0' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{
            fontFamily: "'EB Garamond', serif",
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: DOURADO,
            fontSize: '0.75rem',
            marginBottom: '1rem',
          }}>
            Dúvidas
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: TINTA,
          }}>
            Perguntas frequentes
          </h2>
        </div>

        <div>
          {faq.map((item: any, idx: number) => (
            <div key={idx} style={{ borderBottom: `1px solid ${DOURADO}30` }}>
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.5rem 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: '1rem',
                }}
              >
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: '1.2rem',
                  color: TINTA,
                }}>
                  {item.question}
                </span>
                <span style={{
                  color: DOURADO,
                  fontSize: '1.4rem',
                  flexShrink: 0,
                  display: 'inline-block',
                  transform: openIdx === idx ? 'rotate(45deg)' : 'none',
                  transition: 'transform 0.2s',
                }}>
                  +
                </span>
              </button>
              {openIdx === idx && (
                <div style={{ paddingBottom: '1.5rem' }}>
                  <p style={{
                    fontFamily: "'EB Garamond', serif",
                    fontSize: '1.05rem',
                    color: CORPO,
                    lineHeight: 1.8,
                  }}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
