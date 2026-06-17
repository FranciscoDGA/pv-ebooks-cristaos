import { Link } from 'react-router-dom';

export function CrossSellSection() {
  const ACO = '#1b2230';
  const DOURADO = '#b8863f';
  const CREME = '#f4ede0';

  const books = [
    { title: "Orando com o Corpo, a Alma e o Espírito", img: "/orando_com_corpo_alma_espirito_1781101893485.png", link: "/orando" },
    { title: "Quando Não Há Rei", img: "/quando_nao_ha_rei_1781101904540.png", link: "/quando-nao-ha-rei" },
    { title: "Quem Ainda Chora?", img: "/quem_ainda_chora_1781101915571.png", link: "/quem-ainda-chora" },
    { title: "Somos Todos Jerusalém", img: "/somos_todos_jerusalem_1781101925943.png", link: "/somos-todos-jerusalem" },
  ];

  return (
    <section style={{ background: ACO, padding: '96px 0', color: CREME }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{
            fontFamily: "'EB Garamond', serif",
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: DOURADO,
            fontSize: '0.75rem',
            marginBottom: '1rem',
          }}>
            Coleção completa
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: CREME,
          }}>
            Conheça os outros títulos
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2rem',
          justifyItems: 'center',
        }}>
          {books.map((b, i) => (
            <div key={i} style={{ textAlign: 'center', maxWidth: '200px', width: '100%' }}>
              <img
                src={b.img}
                alt={b.title}
                style={{
                  width: '100%',
                  borderRadius: '2px',
                  filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))',
                  marginBottom: '1rem',
                }}
              />
              <h4 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.05rem',
                color: CREME,
                marginBottom: '1rem',
                lineHeight: 1.4,
              }}>
                {b.title}
              </h4>
              <Link
                to={b.link}
                style={{
                  display: 'inline-block',
                  border: `1px solid ${DOURADO}`,
                  color: DOURADO,
                  fontFamily: "'EB Garamond', serif",
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  padding: '8px 20px',
                  borderRadius: '2px',
                  textDecoration: 'none',
                }}
              >
                Ver livro
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
