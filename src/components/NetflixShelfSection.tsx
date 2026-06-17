import { Link } from 'react-router-dom';

const BOOKS = [
  {
    title: "Orando com o Corpo, a Alma e o Espírito",
    img: "/orando_com_corpo_alma_espirito_1781101893485.png",
    link: "/orando",
    category: "VIDA DE ORAÇÃO",
  },
  {
    title: "Quando Não Há Rei",
    img: "/quando_nao_ha_rei_1781101904540.png",
    link: "/quando-nao-ha-rei",
    category: "TEOLOGIA",
  },
  {
    title: "Quem Ainda Chora?",
    img: "/quem_ainda_chora_1781101915571.png",
    link: "/quem-ainda-chora",
    category: "VIDA CRISTÃ",
  },
  {
    title: "Somos Todos Jerusalém",
    img: "/somos_todos_jerusalem_1781101925943.png",
    link: "/somos-todos-jerusalem",
    category: "GRAÇA",
  },
  {
    title: "Cercados, mas Não Sozinhos",
    img: "/livros/cercados-mas-nao-sozinhos/mockup-escuro.png",
    link: "/cercados-mas-nao-sozinhos",
    category: "FÉ & BATALHA",
  },
];

export function NetflixShelfSection() {
  const DOURADO = '#b8863f';
  const DOURADO_CL = '#cf9a55';

  return (
    <section style={{ background: '#0a0a0a', padding: '72px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '2rem' }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            color: '#ffffff',
            margin: 0,
          }}>
            Aulas completas em estilo
          </h2>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: DOURADO,
            fontStyle: 'italic',
          }}>
            EditoraFlix
          </span>
        </div>

        {/* Cards */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          overflowX: 'auto',
          paddingBottom: '1rem',
          scrollbarWidth: 'thin',
          scrollbarColor: `${DOURADO} #1a1a1a`,
        }}>
          {BOOKS.map((book, idx) => (
            <Link
              key={idx}
              to={book.link}
              style={{
                flexShrink: 0,
                width: '200px',
                position: 'relative',
                borderRadius: '4px',
                overflow: 'hidden',
                display: 'block',
                textDecoration: 'none',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseOver={e => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.06)';
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 40px rgba(0,0,0,0.7), 0 0 0 2px ${DOURADO}`;
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <img
                src={book.img}
                alt={book.title}
                style={{ width: '100%', display: 'block', aspectRatio: '2/3', objectFit: 'cover' }}
              />
              {/* Overlay on hover */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)',
                padding: '2rem 0.75rem 0.75rem',
              }}>
                <p style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: '0.65rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: DOURADO_CL,
                  marginBottom: '0.25rem',
                }}>
                  {book.category}
                </p>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  color: '#ffffff',
                  lineHeight: 1.3,
                }}>
                  {book.title}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Subtitle */}
        <p style={{
          fontFamily: "'EB Garamond', serif",
          fontSize: '1rem',
          color: '#555',
          marginTop: '1.5rem',
          textAlign: 'center',
        }}>
          Clique em qualquer título para ver a página completa do livro
        </p>
      </div>
    </section>
  );
}
