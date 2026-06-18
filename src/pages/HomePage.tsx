import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../home.css';
import { blogArticles } from '../config/blogConfig';

export function HomePage() {
  const books = [
    { title: "Orando com o Corpo...", img: "/orando_com_corpo_alma_espirito_1781101893485.png", link: "/orando", price: "R$ 19,90" },
    { title: "Histórias Para Dormir", img: "/historia_biblia_dormir.png", link: "/historias-para-dormir", price: "R$ 19,90" },
    { title: "Quando Não Há Rei", img: "/quando_nao_ha_rei_1781101904540.png", link: "/quando-nao-ha-rei", price: "R$ 19,90" },
    { title: "Quem Ainda Chora?", img: "/quem_ainda_chora_1781101915571.png", link: "/quem-ainda-chora", price: "R$ 19,90" },
  ];

  return (
    <div className="home-wrapper">
      <Helmet>
        <title>O Chamado da Graça | Editora Cristã Digital</title>
        <meta name="description" content="Uma biblioteca digital cristã para quem deseja ler devagar, pensar profundamente e caminhar mais perto de Deus." />
      </Helmet>

      {/* SECTION 1: HERO */}
      <section className="home-hero">
        <div className="home-hero-content">
          <h1 className="home-hero-title">Livros que fortalecem a fé e transformam vidas</h1>
          <p className="home-hero-subtitle">
            Uma biblioteca digital cristã criada para levar você além da teoria e conduzi-lo a uma comunhão real com Deus.
          </p>
          <div className="home-hero-buttons">
            <Link to="/#colecoes" className="home-btn-primary">Explorar a Coleção</Link>
            <Link to="/autor" className="home-btn-secondary">Conheça o Autor</Link>
          </div>
          <div className="home-hero-social-proof">
            <span><i className="fa-solid fa-star"></i>★★★★★</span>
            <span><i className="fa-solid fa-users"></i>+500 Leitores Impactados</span>
            <span><i className="fa-solid fa-book"></i>12 Livros Publicados</span>
            <span><i className="fa-solid fa-bolt"></i>Acesso Imediato</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: MANIFESTO */}
      <section className="home-manifesto">
        <span className="manifesto-label">Nossa Missão</span>
        <h2 className="manifesto-title">Mais do que vender livros.<br/>Queremos formar discípulos.</h2>
        <p className="manifesto-text">
          Cada livro é escrito para transformar conhecimento em prática, aproximar pessoas das Escrituras e fortalecer uma vida de comunhão com Deus.
        </p>
      </section>

      {/* SECTION 3: COLLECTIONS */}
      <section id="colecoes" className="home-collections">
        <div className="collections-grid">
          <Link to="/orando" className="collection-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1445445290350-18a3b86e0b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}>
            <div className="collection-content">
              <h3 className="collection-title">Vida de Oração</h3>
              <p className="collection-desc">Desenvolva uma comunhão profunda e inabalável.</p>
              <span className="collection-link">Explorar →</span>
            </div>
          </Link>
          <Link to="/cercados-mas-nao-sozinhos" className="collection-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}>
            <div className="collection-content">
              <h3 className="collection-title">Consolo</h3>
              <p className="collection-desc">A presença de Deus nos momentos mais difíceis.</p>
              <span className="collection-link">Explorar →</span>
            </div>
          </Link>
          <Link to="/quem-ainda-chora" className="collection-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}>
            <div className="collection-content">
              <h3 className="collection-title">Igreja & Sociedade</h3>
              <p className="collection-desc">O retorno ao altar do verdadeiro arrependimento.</p>
              <span className="collection-link">Explorar →</span>
            </div>
          </Link>
          <Link to="/colecao" className="collection-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}>
            <div className="collection-content">
              <h3 className="collection-title">Coleção Completa</h3>
              <p className="collection-desc">Adquira todo o acervo de uma só vez.</p>
              <span className="collection-link">Explorar →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* SECTION 4: FEATURED BOOK */}
      <section className="home-featured">
        <div className="featured-grid">
          <div className="featured-image-wrapper">
            <img src="/orando_com_corpo_alma_espirito_1781101893485.png" alt="Orando com o Corpo, a Alma e o Espírito" className="featured-mockup" />
          </div>
          <div className="featured-content">
            <span className="manifesto-label" style={{ color: 'var(--color-gold)' }}>Livro em Destaque</span>
            <h2>Orando com o Corpo, a Alma e o Espírito</h2>
            <p>
              Descubra como desenvolver uma vida de oração mais profunda e experimentar uma comunhão real com Deus através da integração entre corpo, alma e espírito.
            </p>
            <ul className="featured-checklist">
              <li><i className="fa-solid fa-check"></i> PDF Completo</li>
              <li><i className="fa-solid fa-check"></i> Leitura imediata</li>
              <li><i className="fa-solid fa-check"></i> Acesso vitalício</li>
              <li><i className="fa-solid fa-check"></i> Celular, tablet e computador</li>
            </ul>
            <Link to="/orando" className="home-btn-primary">Conhecer o Livro</Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: LATEST BOOKS */}
      <section id="livros" className="home-latest">
        <div className="home-latest-header">
          <span className="manifesto-label">Acervo</span>
          <h2 className="home-latest-title">Livros Mais Lidos</h2>
        </div>
        <div className="books-grid">
          {books.map((b, i) => (
            <Link to={b.link} key={i} className="book-card">
              <div className="book-card-image">
                <img src={b.img} alt={b.title} />
              </div>
              <div className="book-stars">★★★★★</div>
              <h3 className="book-card-title">{b.title}</h3>
              <p className="book-card-price">{b.price}</p>
              <span className="book-card-link">Conhecer Livro</span>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 6: QUOTE PARALLAX */}
      <section className="home-quote">
        <h2 className="quote-text">"Conhecimento bíblico sem transformação é apenas informação."</h2>
        <span className="quote-author">Pr. Francisco Gomes Alves</span>
      </section>

      {/* SECTION 7: BLOG */}
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
              <span className="book-card-link">Ler Artigo →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 8: AUTHOR */}
      <section className="home-author">
        <div className="author-grid">
          <div>
            <img src="/author_pastoral.png" alt="Pr. Francisco Gomes" className="author-image" />
          </div>
          <div>
            <span className="manifesto-label">Sobre o Autor</span>
            <h2 className="author-title">Uma vida dedicada ao ensino das Escrituras</h2>
            <p className="author-text">
              Mais de duas décadas servindo a Cristo e ensinando as Escrituras com profundidade, clareza e fidelidade. 
            </p>
            <p className="author-text">
              Transformando conhecimento bíblico em prática e ajudando pessoas a crescerem na comunhão com Deus, combatendo a superficialidade espiritual.
            </p>
            <Link to="/autor" className="home-btn-primary" style={{ marginTop: '1rem' }}>Conheça Minha História</Link>
          </div>
        </div>
      </section>

      {/* SECTION 9: TESTIMONIALS */}
      <section className="home-testimonials">
        <span className="manifesto-label">Impacto</span>
        <h2 className="home-latest-title">O que dizem os leitores</h2>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"Leitura profunda e transformadora. Uma quebra de paradigmas na minha caminhada com Deus."</p>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"Uma experiência edificante. Recomendo para todos que desejam sair da superficialidade."</p>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"Linguagem simples e cheia de sabedoria. Consegue tocar no coração de forma muito precisa."</p>
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="home-final">
        <h2 className="final-title">Comece hoje uma jornada de crescimento espiritual</h2>
        <p className="final-subtitle">Leituras simples, profundas e transformadoras.</p>
        <Link to="/#livros" className="home-btn-primary">Explorar a Biblioteca</Link>
      </section>

    </div>
  );
}
