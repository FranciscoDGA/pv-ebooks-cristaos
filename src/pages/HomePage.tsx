import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogArticles } from '../config/blogConfig';

export function HomePage() {
  const books = [
    { title: "Orando com o Corpo...", img: "/orando_com_corpo_alma_espirito_1781101893485.png", link: "/orando", price: "$29.90", oldPrice: "$49.90" },
    { title: "Quando Não Há Rei", img: "/quando_nao_ha_rei_1781101904540.png", link: "/quando-nao-ha-rei", price: "$34.90", oldPrice: "$55.00" },
    { title: "Quem Ainda Chora?", img: "/quem_ainda_chora_1781101915571.png", link: "/quem-ainda-chora", price: "$24.90", oldPrice: "$39.90" },
    { title: "Somos Todos Jerusalém", img: "/somos_todos_jerusalem_1781101925943.png", link: "/somos-todos-jerusalem", price: "$39.90", oldPrice: "$60.00" },
  ];

  return (
    <div>
      <Helmet>
        <title>O Chamado da Graça | Editora Cristã Digital</title>
        <meta name="description" content="Uma biblioteca digital cristã para quem deseja ler devagar, pensar profundamente e caminhar mais perto de Deus." />
      </Helmet>

      {/* Hero Section E-commerce Style */}
      <section style={{ display: 'flex', minHeight: '600px', backgroundColor: '#FAFAF8' }}>
        {/* Sidebar Categories (Hide on small screens) */}
        <aside style={{ width: '280px', backgroundColor: '#333', color: '#fff', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ textTransform: 'uppercase', marginBottom: '1.5rem', fontSize: '1.2rem', letterSpacing: '1px', borderBottom: '1px solid #444', paddingBottom: '1rem' }}>CATEGORIAS</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li><Link to="/#livros" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.2s' }}>▶ Lançamentos</Link></li>
            <li><Link to="/orando" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.2s' }}>▶ Vida de Oração</Link></li>
            <li><Link to="/blog" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.2s' }}>▶ Profetas</Link></li>
            <li><Link to="/blog" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.2s' }}>▶ Igreja & Sociedade</Link></li>
            <li><Link to="/blog" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.2s' }}>▶ Arrependimento</Link></li>
            <li><Link to="/blog" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.2s' }}>▶ Santidade</Link></li>
          </ul>
        </aside>

        {/* Hero Image & Content */}
        <div style={{ 
          flex: 1,
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url("/home_hero_bg.png")', 
          backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', 
          display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem'
        }}>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '5rem', marginBottom: '1rem', lineHeight: '1.1' }}>
            O Chamado <br/>da Graça
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{ backgroundColor: 'var(--theme-yellow)', color: '#111', padding: '0.5rem 1rem', fontWeight: 'bold', fontSize: '1.5rem' }}>-20%</span>
            <span style={{ fontSize: '1.5rem', color: '#ccc', textDecoration: 'line-through' }}>R$150,00</span>
            <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>R$120,00</span>
          </div>
          <p style={{ fontSize: '1.2rem', color: '#E5E7EB', maxWidth: '500px', marginBottom: '2rem' }}>A coleção completa para transformar sua caminhada cristã. Livros que confrontam, edificam e conduzem o coração à cruz.</p>
          <div>
            <a href="#livros" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem', backgroundColor: 'var(--theme-yellow)', color: '#111' }}>Compre Agora</a>
          </div>
        </div>
      </section>

      {/* Colorful Banners Section */}
      <section style={{ padding: '4rem 0', backgroundColor: '#FAFAF8' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            
            <div style={{ backgroundColor: '#0EA5E9', padding: '2rem', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Estudos da Graça</h3>
                <Link to="/#livros" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'underline', fontSize: '0.9rem' }}>Ver Coleção &gt;</Link>
              </div>
            </div>

            <div style={{ backgroundColor: '#FACC15', padding: '2rem', color: '#111', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Vida de Oração</h3>
                <Link to="/orando" style={{ color: '#111', fontWeight: 'bold', textDecoration: 'underline', fontSize: '0.9rem' }}>Ler Livro &gt;</Link>
              </div>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.8 }}>Orando Com o Corpo, a Alma e o Espírito</p>
            </div>

            <div style={{ backgroundColor: '#14B8A6', padding: '2rem', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Consolo</h3>
                <Link to="/quem-ainda-chora" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'underline', fontSize: '0.9rem' }}>Ler Livro &gt;</Link>
              </div>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.9 }}>Quem Ainda Chora?</p>
            </div>

            <div style={{ backgroundColor: '#F43F5E', padding: '2rem', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.3rem', margin: 0 }}>O Que a Bíblia Diz Sobre…</h3>
                <Link to="/#livros" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'underline', fontSize: '0.9rem' }}>Em Breve &gt;</Link>
              </div>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', opacity: 0.9 }}>Dinheiro, Casamento, Fim dos Tempos</p>
            </div>

            <div style={{ backgroundColor: '#8B5CF6', padding: '2rem', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Últimos Tempos</h3>
                <Link to="/#livros" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'underline', fontSize: '0.9rem' }}>Em Breve &gt;</Link>
              </div>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.9 }}>Profecia, Apocalipse, Arrebatamento</p>
            </div>

            <div style={{ backgroundColor: '#EC4899', padding: '2rem', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Mulher de Fé</h3>
                <Link to="/#livros" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'underline', fontSize: '0.9rem' }}>Em Breve &gt;</Link>
              </div>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.9 }}>A Oração da Esposa, Provérbios 31</p>
            </div>

            <div style={{ backgroundColor: '#10B981', padding: '2rem', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Casamento Cristão</h3>
                <Link to="/#livros" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'underline', fontSize: '0.9rem' }}>Em Breve &gt;</Link>
              </div>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.9 }}>Casamento segundo a Bíblia</p>
            </div>

            <div style={{ backgroundColor: '#6366F1', padding: '2rem', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Devocionais</h3>
                <Link to="/#livros" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'underline', fontSize: '0.9rem' }}>Em Breve &gt;</Link>
              </div>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.9 }}>365 Dias, 30 Dias com Deus</p>
            </div>

            <div style={{ backgroundColor: '#F97316', padding: '2rem', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Livros Infantis</h3>
                <Link to="/#livros" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'underline', fontSize: '0.9rem' }}>Em Breve &gt;</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TOP INTERESTING - Books Grid */}
      <section id="livros" className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>MAIS VENDIDOS</h2>
            <p style={{ color: '#777', maxWidth: '600px', margin: '0 auto' }}>Navegue pela coleção dos nossos livros mais vendidos. Você certamente encontrará o que busca.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
              <span style={{ borderBottom: '2px solid var(--theme-yellow)', paddingBottom: '0.5rem', cursor: 'pointer' }}>LANÇAMENTO</span>
              <span style={{ color: '#777', cursor: 'pointer' }}>PROMOÇÃO</span>
              <span style={{ color: '#777', cursor: 'pointer' }}>EM DESTAQUE</span>
            </div>
          </div>

          {/* Banner da Coleção Completa */}
          <div style={{ marginBottom: '4rem', padding: '0', backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 300px', backgroundImage: 'url("/home_hero_bg.png")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '250px' }}></div>
            <div style={{ flex: '2 1 400px', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'inline-block', backgroundColor: 'var(--theme-yellow)', color: '#111', fontWeight: 'bold', padding: '4px 12px', fontSize: '0.8rem', borderRadius: '4px', alignSelf: 'flex-start', marginBottom: '1rem' }}>PROMOÇÃO EXCLUSIVA</div>
              <h3 style={{ fontSize: '2rem', fontFamily: 'Cormorant Garamond, serif', marginBottom: '1rem' }}>Box: A Cruz e o Coração Humano</h3>
              <p style={{ color: '#555', marginBottom: '1.5rem', lineHeight: '1.6' }}>Adquira os 4 e-books completos da nossa coleção mais lida. Uma jornada teológica e devocional profunda por um preço especial, com bônus exclusivos incluídos.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2rem', color: '#14B8A6', fontWeight: 'bold' }}>R$120,00</span>
                <span style={{ fontSize: '1.2rem', color: '#ccc', textDecoration: 'line-through' }}>R$150,00</span>
              </div>
              <div>
                <Link to="/colecao" className="btn btn-primary" style={{ backgroundColor: '#111', color: '#fff' }}>Ver Detalhes do Box</Link>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', justifyContent: 'center' }}>
            {books.map((b, i) => (
              <div key={i} className="product-card">
                <div className="product-badge-new">NOVO</div>
                <Link to={b.link}>
                  <div style={{ padding: '2rem 2rem 0 2rem', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>
                    <img src={b.img} alt={b.title} style={{ width: '100%', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                  </div>
                </Link>
                <div className="product-stars">★★★★★</div>
                <h4 style={{ margin: '0.5rem 0', fontSize: '1rem', color: '#333' }}>{b.title}</h4>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{ color: '#14B8A6', fontWeight: 'bold' }}>{b.price}</span>
                  <span style={{ color: '#ccc', textDecoration: 'line-through' }}>{b.oldPrice}</span>
                </div>
                <Link to={b.link} className="btn" style={{ backgroundColor: '#fff', color: '#111', border: '1px solid #ccc', padding: '0.4rem 1rem', fontSize: '0.8rem' }}>Ver Detalhes</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="section-padding" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>ÚLTIMAS DO NOSSO BLOG</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {blogArticles.slice(0,3).map((article) => {
               // Pseudo date extraction
               const day = "06";
               const month = "DEZ";
               
               return (
              <div key={article.id} className="blog-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <Link to={`/blog/${article.id}`}>
                  <div style={{ position: 'relative' }}>
                    <img src={article.thumbnail} alt={article.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                    <div className="blog-date-badge">
                      <div className="blog-date-day">{day}</div>
                      <div className="blog-date-month">{month}</div>
                    </div>
                  </div>
                </Link>
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.3rem', color: '#222', marginBottom: '1rem' }}>{article.title}</h3>
                  <p style={{ color: '#777', fontSize: '0.9rem', marginBottom: '1rem' }}>Artigo em Destaque</p>
                  <p style={{ color: '#555', lineHeight: '1.6', fontSize: '0.95rem' }}>{article.excerpt}</p>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Autor */}
      <section id="author" className="section-padding" style={{ backgroundColor: '#FAFAF8', borderTop: '1px solid #eee' }}>
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
