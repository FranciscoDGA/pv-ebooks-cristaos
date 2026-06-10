
import { Link } from 'react-router-dom';
import { blogArticles } from '../config/blogConfig';

export function HomePage() {
  const books = [
    { title: "Orando com o Corpo...", img: "/orando_com_corpo_alma_espirito_1781101893485.png", link: "/orando" },
    { title: "Quando Não Há Rei", img: "/quando_nao_ha_rei_1781101904540.png", link: "/quando-nao-ha-rei" },
    { title: "Quem Ainda Chora?", img: "/quem_ainda_chora_1781101915571.png", link: "/quem-ainda-chora" },
    { title: "Somos Todos Jerusalém", img: "/somos_todos_jerusalem_1781101925943.png", link: "/somos-todos-jerusalem" },
  ];

  return (
    <div>
      <section style={{ backgroundColor: '#0F172A', color: '#fff', padding: '6rem 1rem', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', marginBottom: '1rem' }}>Vivendo as Escrituras</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', color: '#D1D5DB' }}>Uma biblioteca digital cristã com reflexões que confrontam, edificam e conduzem você a uma caminhada mais profunda com Deus.</p>
      </section>
      
      <section id="livros" className="section-padding">
        <div className="container">
          <h2 className="section-title">Coleção A Cruz e o Coração Humano</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginTop: '3rem' }}>
            {books.map((b, i) => (
              <div key={i} style={{ width: '220px', textAlign: 'center' }}>
                <Link to={b.link}>
                  <img src={b.img} alt={b.title} style={{ width: '100%', borderRadius: '4px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                </Link>
                <h4 style={{ margin: '1rem 0', fontSize: '1.2rem', fontFamily: 'Cormorant Garamond, serif' }}>{b.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container">
          <h2 className="section-title">Últimos Artigos</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {blogArticles.map(article => (
              <Link to={`/blog/${article.id}`} key={article.id} style={{ textDecoration: 'none', color: 'inherit', background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', borderTop: '4px solid #1D4ED8' }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#6B7280', fontWeight: 'bold' }}>{article.category}</span>
                <h3 style={{ margin: '0.5rem 0', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: '#111827' }}>{article.title}</h3>
                <p style={{ color: '#4B5563', lineHeight: '1.6' }}>{article.excerpt}</p>
                <span style={{ display: 'inline-block', marginTop: '1rem', color: '#1D4ED8', fontWeight: 'bold' }}>Ler artigo completo →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
