export function SummarySection({ config }: { config: any }) {
  const { summary } = config;
  const ACO = '#1b2230';
  const ACO_2 = '#232a38';
  const DOURADO = '#b8863f';
  const CREME = '#f4ede0';

  return (
    <section style={{ background: ACO, padding: '96px 0', color: CREME }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{
            fontFamily: "'EB Garamond', serif",
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: DOURADO,
            fontSize: '0.75rem',
            marginBottom: '1rem',
          }}>
            Estrutura
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: CREME,
          }}>
            Dentro do livro
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem', maxWidth: '200px', margin: '1.5rem auto 0' }}>
            <div style={{ flex: 1, height: '1px', background: `${DOURADO}40` }} />
            <span style={{ color: DOURADO, fontSize: '0.6rem' }}>◆</span>
            <div style={{ flex: 1, height: '1px', background: `${DOURADO}40` }} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {summary.modules.map((mod: any, idx: number) => (
            <div key={idx} style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'flex-start',
              padding: '2rem 0',
              borderBottom: `1px solid ${DOURADO}20`,
            }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: '2.5rem',
                color: `${DOURADO}40`,
                lineHeight: 1,
                minWidth: '3rem',
                textAlign: 'center',
              }}>
                {idx + 1}
              </span>
              <div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: '1.4rem',
                  color: CREME,
                  marginBottom: '0.5rem',
                }}>
                  {mod.title}
                </h3>
                <p style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: '1.05rem',
                  color: '#9a9080',
                  lineHeight: 1.7,
                }}>
                  {mod.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Meta info */}
        <div style={{
          marginTop: '3rem',
          padding: '1.5rem 2rem',
          background: ACO_2,
          borderRadius: '2px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          justifyContent: 'center',
          borderTop: `1px solid ${DOURADO}30`,
        }}>
          {[
            { label: 'Páginas', value: `${summary.pageCount}` },
            { label: 'Tempo de leitura', value: summary.readingTime },
            { label: 'Nível', value: summary.level },
          ].map((item, idx) => (
            <div key={idx} style={{ textAlign: 'center', padding: '0 1rem' }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: '1.5rem',
                color: DOURADO,
              }}>
                {item.value}
              </p>
              <p style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#6a6060',
              }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
