
import { Link } from 'react-router-dom';

export function CrossSellSection() {
  const books = [
    { title: "Orando com o Corpo...", img: "/orando_com_corpo_alma_espirito_1781101893485.png", link: "/orando" },
    { title: "Quando Não Há Rei", img: "/quando_nao_ha_rei_1781101904540.png", link: "/quando-nao-ha-rei" },
    { title: "Quem Ainda Chora?", img: "/quem_ainda_chora_1781101915571.png", link: "/quem-ainda-chora" },
    { title: "Somos Todos Jerusalém", img: "/somos_todos_jerusalem_1781101925943.png", link: "/somos-todos-jerusalem" },
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <h2 className="section-title">Conheça a coleção</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginTop: '3rem' }}>
          {books.map((b, i) => (
            <div key={i} style={{ width: '200px', textAlign: 'center' }}>
              <img src={b.img} alt={b.title} style={{ width: '100%', borderRadius: '4px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
              <h4 style={{ margin: '1rem 0', fontSize: '1.1rem', fontFamily: 'Cormorant Garamond, serif' }}>{b.title}</h4>
              <Link to={b.link} className="btn btn-secondary" style={{ display: 'inline-block', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Ver Livro</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
