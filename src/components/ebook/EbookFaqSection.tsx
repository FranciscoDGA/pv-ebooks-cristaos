import { useState } from 'react';
import type { EbookData } from '../../data/ebooks';

export function EbookFaqSection({ ebook }: { ebook: EbookData }) {
  const GOLD = '#c4973a';
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: '#080808', padding: '96px 0' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{
            fontFamily: "'EB Garamond', serif",
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: GOLD,
            fontSize: '0.75rem',
            marginBottom: '1rem',
          }}>
            Dúvidas frequentes
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#ffffff',
          }}>
            Perguntas e respostas
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {ebook.faq.map((item, i) => (
            <div
              key={i}
              style={{
                background: '#111111',
                border: `1px solid ${open === i ? GOLD + '50' : '#1e1e1e'}`,
                borderRadius: '4px',
                overflow: 'hidden',
                transition: 'border-color 0.2s',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.25rem 1.5rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  color: open === i ? '#ffffff' : '#cccccc',
                  lineHeight: 1.4,
                }}>
                  {item.pergunta}
                </span>
                <span style={{
                  color: GOLD,
                  fontSize: '1.2rem',
                  flexShrink: 0,
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                  transition: 'transform 0.2s',
                  display: 'inline-block',
                }}>
                  +
                </span>
              </button>

              {open === i && (
                <div style={{ padding: '0 1.5rem 1.5rem' }}>
                  <div style={{
                    width: '30px', height: '1px',
                    background: `${GOLD}50`,
                    marginBottom: '1rem',
                  }} />
                  <p style={{
                    fontFamily: "'EB Garamond', serif",
                    fontSize: '1.05rem',
                    color: '#888',
                    lineHeight: 1.8,
                    margin: 0,
                  }}>
                    {item.resposta}
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
