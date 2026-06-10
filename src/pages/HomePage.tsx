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
      {/* Hero Section */}
      <section style={{ 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.9)), url("/home_hero_bg.png")', 
        backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', padding: '10rem 1rem', textAlign: 'center' 
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '4.5rem', marginBottom: '1.5rem', letterSpacing: '1px', textShadow: '0 4px 6px rgba(0,0,0,0.9)' }}>O Chamado da Graça</h1>
          <p style={{ fontSize: '1.5rem', color: '#E5E7EB', lineHeight: '1.6', marginBottom: '2rem', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Uma biblioteca digital cristã para quem deseja ler devagar, pensar profundamente e caminhar mais perto de Deus.</p>
          <p style={{ fontSize: '1.3rem', fontStyle: 'italic', color: '#D1D5DB', marginBottom: '3rem', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Livros que confrontam, edificam e conduzem o coração humano à cruz.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#livros" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Conheça a Coleção</a>
            <Link to="/blog" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', backgroundColor: 'transparent', border: '2px solid #fff', color: '#fff' }}>Leia os Artigos</Link>
          </div>
        </div>
      </section>

      {/* Missão */}
      <section className="section-padding" style={{ backgroundColor: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', marginBottom: '2rem', color: '#111827' }}>Por que O Chamado da Graça existe?</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#4B5563', marginBottom: '1.5rem' }}>Vivemos em uma época de leituras rápidas e reflexões superficiais.</p>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#4B5563', marginBottom: '1.5rem' }}>Esta coleção nasceu do desejo de produzir livros escritos em linguagem simples para crianças compreenderem e adultos sentirem.</p>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#111827', fontWeight: 'bold' }}>Nosso objetivo não é apenas informar, mas conduzir pessoas a uma caminhada mais profunda com Deus.</p>
        </div>
      </section>
      
      {/* Coleção */}
      <section id="livros" className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Coleção A Cruz e o Coração Humano</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            {books.map((b, i) => (
              <div key={i} style={{ width: '220px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Link to={b.link}>
                  <img src={b.img} alt={b.title} style={{ width: '100%', borderRadius: '4px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }} onMouseOver={e=>e.currentTarget.style.transform='scale(1.05)'} onMouseOut={e=>e.currentTarget.style.transform='scale(1)'} />
                </Link>
                <h4 style={{ margin: '1.5rem 0', fontSize: '1.2rem', fontFamily: 'Cormorant Garamond, serif' }}>{b.title}</h4>
                <Link to={b.link} className="btn" style={{ backgroundColor: '#111827', color: '#fff', padding: '0.6rem 1.2rem', fontSize: '0.9rem', width: '100%' }}>Ver Livro</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emocional Coleção */}
      <section className="section-padding" style={{ backgroundColor: '#111827', color: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', marginBottom: '2rem', color: '#F3F4F6' }}>Uma coleção para ser lida devagar</h2>
          <p style={{ fontSize: '1.3rem', lineHeight: '1.8', color: '#9CA3AF', marginBottom: '2rem' }}>Livros escritos em linguagem simples para crianças compreenderem e adultos sentirem.</p>
          <p style={{ fontSize: '1.5rem', fontFamily: 'Cormorant Garamond, serif', color: '#D1D5DB', margin: '0.5rem 0' }}>Reflexões que confrontam.</p>
          <p style={{ fontSize: '1.5rem', fontFamily: 'Cormorant Garamond, serif', color: '#D1D5DB', margin: '0.5rem 0' }}>Palavras que consolam.</p>
          <p style={{ fontSize: '1.5rem', fontFamily: 'Cormorant Garamond, serif', color: '#D1D5DB', margin: '0.5rem 0' }}>Estudos que conduzem.</p>
          <p style={{ fontSize: '1.5rem', fontFamily: 'Cormorant Garamond, serif', color: '#FBBF24', margin: '2rem 0 0 0', fontStyle: 'italic' }}>Porque a mesma cruz que nos acusa é a que nos salva.</p>
        </div>
      </section>

      {/* Artigos Blog */}
      <section className="section-padding" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Últimas Reflexões</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {blogArticles.slice(0,3).map((article) => {
               return (
              <Link to={\`/blog/\${article.id}\`} key={article.id} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                <img src={article.thumbnail} alt={article.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} />
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', color: '#111827', marginBottom: '1rem' }}>{article.title}</h3>
                <p style={{ color: '#4B5563', lineHeight: '1.6', marginBottom: '1rem' }}>{article.excerpt}</p>
                <span style={{ color: '#1D4ED8', fontWeight: 'bold' }}>Continuar lendo →</span>
              </Link>
            )})}
          </div>
        </div>
      </section>

      {/* Autor */}
      <section id="author" className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 300px' }}>
              <img src="/author_pastoral.png" alt="Pr. Francisco Gomes" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }} />
            </div>
            <div style={{ flex: '2 1 500px' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', color: '#111827', marginBottom: '0.5rem' }}>Pr. Francisco Gomes</h2>
              <p style={{ color: '#6B7280', textTransform: 'lowercase', letterSpacing: '1px', fontSize: '1rem', marginBottom: '2rem' }}>Pastor • conferencista • ensinador da Palavra</p>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#374151', marginBottom: '1rem' }}>Há mais de duas décadas servindo a Cristo e ensinando as Escrituras.</p>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#374151', marginBottom: '2rem' }}>Uma vida dedicada a transformar conhecimento bíblico em aplicação prática. Atua como Vice-Presidente do MAJEV, dedicando seu ministério a ensinar o povo de Deus a sair da teoria e entrar na comunhão diária.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
