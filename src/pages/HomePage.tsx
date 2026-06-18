import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../home.css';
import { blogArticles } from '../config/blogConfig';

export function HomePage() {
  const books = [
    { title: "Orando com o Corpo...", img: "/orando_com_corpo_alma_espirito_1781101893485.png", link: "/orando", description: "Desenvolva uma vida de oração mais profunda." },
    { title: "Quando Não Há Rei", img: "/quando_nao_ha_rei_1781101904540.png", link: "/quando-nao-ha-rei", description: "A crise de liderança e a anarquia no coração humano." },
    { title: "Quem Ainda Chora?", img: "/quem_ainda_chora_1781101915571.png", link: "/quem-ainda-chora", description: "O clamor profético por arrependimento." },
    { title: "Somos Todos Jerusalém", img: "/somos_todos_jerusalem_1781101925943.png", link: "/somos-todos-jerusalem", description: "A tragédia do engano religioso." },
    { title: "Cercados, Mas Não Sozinhos", img: "/cercados.png", link: "/cercados-mas-nao-sozinhos", description: "A presença de Deus no meio da angústia." },
    { title: "A Cruz e o Coração Humano", img: "/christian_book_cover.png", link: "/colecao", description: "A coleção completa para transformar sua fé." },
  ];

  return (
    <div className="home-wrapper">
      <Helmet>
        <title>O Chamado da Graça | Editora Cristã Digital</title>
        <meta name="description" content="Uma biblioteca digital cristã criada para transformar conhecimento bíblico em prática e fortalecer sua caminhada com Deus." />
      </Helmet>

      {/* SECTION 1: HERO EDITORIAL */}
      <section className="home-hero">
        <div className="home-hero-content">
          <h1 className="home-hero-title">O Chamado da Graça</h1>
          <p className="home-hero-subtitle" style={{ fontWeight: 500, fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-gold)' }}>
            Livros que confrontam, edificam e conduzem à cruz.
          </p>
          <p className="home-hero-subtitle">
            Uma biblioteca digital cristã criada para transformar conhecimento bíblico em prática e fortalecer sua caminhada com Deus.
          </p>
          <div className="home-hero-buttons">
            <Link to="/#biblioteca" className="home-btn-primary">Explorar Livros</Link>
            <Link to="/autor" className="home-btn-secondary">Conheça o Autor</Link>
          </div>
          <div className="home-hero-social-proof">
            <span><i className="fa-solid fa-star"></i>★★★★★</span>
            <span><i className="fa-solid fa-book-open"></i>12 Livros Publicados</span>
            <span><i className="fa-solid fa-bolt"></i>Leitura Imediata</span>
            <span><i className="fa-solid fa-infinity"></i>Acesso Vitalício</span>
            <span><i className="fa-solid fa-mobile-screen"></i>Responsivo para Celular</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: MANIFESTO */}
      <section className="home-manifesto">
        <span className="manifesto-label">Nossa Missão</span>
        <h2 className="manifesto-title">Mais do que vender livros.<br/>Queremos formar discípulos.</h2>
        <p className="manifesto-text">
          Cada obra é escrita com o propósito de levar pessoas a uma comunhão mais profunda com Deus e transformar conhecimento bíblico em vida prática.
        </p>
      </section>

      {/* SECTION 3: COLEÇÕES */}
      <section id="colecoes" className="home-collections">
        <div className="collections-grid">
          <Link to="/orando" className="collection-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1445445290350-18a3b86e0b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}>
            <div className="collection-content">
              <h3 className="collection-title">Vida de Oração</h3>
              <p className="collection-desc">Livros para aprofundar sua comunhão com Deus.</p>
              <span className="collection-link">Explorar coleção →</span>
            </div>
          </Link>
          <Link to="/cercados-mas-nao-sozinhos" className="collection-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}>
            <div className="collection-content">
              <h3 className="collection-title">Consolo</h3>
              <p className="collection-desc">Livros para os momentos difíceis.</p>
              <span className="collection-link">Explorar coleção →</span>
            </div>
          </Link>
          <Link to="/blog" className="collection-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}>
            <div className="collection-content">
              <h3 className="collection-title">Profecias</h3>
              <p className="collection-desc">Compreendendo os últimos tempos.</p>
              <span className="collection-link">Explorar coleção →</span>
            </div>
          </Link>
          <Link to="/somos-todos-jerusalem" className="collection-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}>
            <div className="collection-content">
              <h3 className="collection-title">Igreja e Sociedade</h3>
              <p className="collection-desc">Vivendo a fé em um mundo em transformação.</p>
              <span className="collection-link">Explorar coleção →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* SECTION 4: LANÇAMENTO EM DESTAQUE */}
      <section className="home-featured">
        <div className="featured-grid">
          <div className="featured-content">
            <span className="manifesto-label" style={{ color: 'var(--color-gold)' }}>Lançamento</span>
            <h2>Orando com o Corpo, a Alma e o Espírito</h2>
            <p>
              Descubra como desenvolver uma vida de oração mais profunda e experimentar uma comunhão real com Deus através da integração entre corpo, alma e espírito. Uma obra densa, pastoral e transformadora para quem anseia por mais de Deus.
            </p>
            <Link to="/orando" className="home-btn-primary" style={{ marginTop: '2rem' }}>Conhecer o Livro</Link>
          </div>
          <div className="featured-image-wrapper">
            <img src="/orando_com_corpo_alma_espirito_1781101893485.png" alt="Orando com o Corpo, a Alma e o Espírito" className="featured-mockup float-animation" />
          </div>
        </div>
      </section>

      {/* SECTION 5: BIBLIOTECA */}
      <section id="biblioteca" className="home-latest">
        <div className="home-latest-header">
          <h2 className="home-latest-title">Explore Nossa Biblioteca</h2>
          <p className="manifesto-text" style={{ fontSize: '1rem', marginTop: '1rem' }}>Livros para diferentes fases da caminhada cristã.</p>
        </div>
        <div className="books-grid">
          {books.map((b, i) => (
            <Link to={b.link} key={i} className="book-card editorial-card">
              <div className="book-card-image">
                <img src={b.img} alt={b.title} />
              </div>
              <div className="book-stars">★★★★★</div>
              <h3 className="book-card-title">{b.title}</h3>
              <p className="book-card-desc" style={{ fontSize: '0.85rem', color: 'var(--color-slate)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                {b.description}
              </p>
              <span className="book-card-link">Conhecer livro →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 6: CITAÇÃO */}
      <section className="home-quote">
        <h2 className="quote-text">"Conhecimento bíblico sem transformação é apenas informação."</h2>
        <span className="quote-author">Pr. Francisco Gomes Alves</span>
      </section>

      {/* SECTION 7: ARTIGOS */}
      <section className="home-blog">
        <div className="home-latest-header">
          <span className="manifesto-label">Editorial</span>
          <h2 className="home-latest-title">Artigos Recentes</h2>
        </div>
        <div className="blog-grid">
          {blogArticles.slice(0,3).map((article) => (
            <Link to={`/blog/${article.id}`} key={article.id} className="blog-card">
              <img src={article.thumbnail} alt={article.title} className="blog-image" />
              <span className="blog-category">{article.category || 'Teologia'}</span>
              <h3 className="blog-title">{article.title}</h3>
              <p className="blog-excerpt">{article.excerpt}</p>
              <span className="book-card-link">Ler artigo →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 8: SOBRE O AUTOR */}
      <section className="home-author">
        <div className="author-grid">
          <div>
            <img src="/author_pastoral.png" alt="Pr. Francisco Gomes" className="author-image" />
          </div>
          <div>
            <h2 className="author-title">Uma vida dedicada ao ensino das Escrituras</h2>
            <p className="author-text">
              Mais de duas décadas servindo a Cristo e ensinando as Escrituras com fidelidade, profundidade e amor pela Igreja.
            </p>
            <p className="author-text">
              Vice-presidente da MAJEV. Escritor e professor comprometido em transformar conhecimento bíblico em prática, ajudando pessoas a saírem da superficialidade religiosa para uma vida de intimidade com Deus.
            </p>
            <Link to="/autor" className="home-btn-primary" style={{ marginTop: '1rem' }}>Conheça Minha História</Link>
          </div>
        </div>
      </section>

      {/* SECTION 9: DEPOIMENTOS */}
      <section className="home-testimonials">
        <h2 className="home-latest-title">O que dizem os leitores</h2>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"Leitura profunda e edificante. Uma obra que mudou minha forma de enxergar a comunhão com Deus."</p>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"Material simples e transformador. Consegue tocar no coração sem perder o peso teológico."</p>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"Uma experiência rica espiritualmente. Recomendo para todos que desejam sair da teoria."</p>
          </div>
        </div>
      </section>

      {/* SECTION 10: CTA FINAL */}
      <section className="home-final" style={{ 
        backgroundImage: 'linear-gradient(rgba(10,10,10,0.8), rgba(10,10,10,0.9)), url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <h2 className="final-title">Comece hoje uma jornada de crescimento espiritual.</h2>
        <p className="final-subtitle" style={{ color: 'var(--color-gold)' }}>Leituras simples, profundas e transformadoras.</p>
        <Link to="/#biblioteca" className="home-btn-primary" style={{ marginTop: '2rem' }}>Explorar a Biblioteca</Link>
      </section>

    </div>
  );
}
