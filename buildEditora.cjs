const fs = require('fs');

if(!fs.existsSync('src/pages')) fs.mkdirSync('src/pages');
if(!fs.existsSync('src/layouts')) fs.mkdirSync('src/layouts');

// 1. Update Testimonials
fs.writeFileSync('src/components/TestimonialsSection.tsx', `
export function TestimonialsSection({ config }: { config: any }) {
  if (!config.testimonials) return null;
  return (
    <section id="testimonials" className="section-padding bg-gray">
      <div className="container">
        <h2 className="section-title">O que os leitores dizem</h2>
        <div className="testimonials-grid" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {config.testimonials.map((test: any, idx: number) => (
            <div className="testimonial-editorial" key={idx} style={{ textAlign: 'center' }}>
              <p className="testimonial-quote" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontStyle: 'italic', color: '#374151' }}>"{test.text}"</p>
              <p className="testimonial-author" style={{ marginTop: '1rem', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.9rem', color: '#9ca3af' }}>— {test.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

// 2. CrossSellSection
fs.writeFileSync('src/components/CrossSellSection.tsx', `
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
`);

// 3. Update HeroSection branding
let hero = fs.readFileSync('src/components/HeroSection.tsx', 'utf8');
hero = hero.replace('{hero.category}', 'COLEÇÃO DO REINO');
fs.writeFileSync('src/components/HeroSection.tsx', hero);

// 4. Update AmazonStyleSection
fs.writeFileSync('src/components/AmazonStyleSection.tsx', `
export function AmazonStyleSection() {
  return (
    <section className="amazon-section section-padding" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <h2 className="amazon-title">Uma coleção para ser lida devagar</h2>
          <p className="amazon-text">Livros escritos em linguagem simples para crianças compreenderem e adultos sentirem. Reflexões que confrontam, edificam e conduzem o leitor a uma caminhada mais profunda com Deus.</p>
        </div>
      </div>
    </section>
  );
}
`);

// 5. Global Navbar & Layout
fs.writeFileSync('src/layouts/MainLayout.tsx', `
import { Link, Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ background: '#0F172A', color: '#fff', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '2px' }}>COLEÇÃO DO REINO</Link>
          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Home</Link>
            <Link to="/blog" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Blog</Link>
            <Link to="/#livros" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Livros</Link>
          </nav>
        </div>
      </header>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <footer style={{ background: '#111827', color: '#9CA3AF', padding: '3rem 0', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} Coleção do Reino - Pr. Francisco Gomes. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
`);

// 6. HomePage
fs.writeFileSync('src/pages/HomePage.tsx', `
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
              <Link to={\`/blog/\${article.id}\`} key={article.id} style={{ textDecoration: 'none', color: 'inherit', background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', borderTop: '4px solid #1D4ED8' }}>
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
`);

// 7. BlogIndex
fs.writeFileSync('src/pages/BlogIndex.tsx', `
import { Link } from 'react-router-dom';
import { blogArticles } from '../config/blogConfig';

export function BlogIndex() {
  return (
    <div className="section-padding" style={{ backgroundColor: '#FAFAF8', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', marginBottom: '3rem', borderBottom: '1px solid #E5E7EB', paddingBottom: '1rem' }}>Blog: Reflexões Teológicas</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {blogArticles.map(article => (
            <article key={article.id}>
              <Link to={\`/blog/\${article.id}\`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <span style={{ fontSize: '0.9rem', color: '#1D4ED8', fontWeight: 'bold', textTransform: 'uppercase' }}>{article.category}</span>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', color: '#111827', margin: '0.5rem 0' }}>{article.title}</h2>
                <p style={{ fontSize: '1.2rem', color: '#4B5563', lineHeight: '1.6' }}>{article.excerpt}</p>
                <div style={{ marginTop: '1rem', color: '#9CA3AF', fontSize: '0.9rem' }}>{article.date} • {article.readTime} leitura</div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
`);

// 8. ArticlePage
fs.writeFileSync('src/pages/ArticlePage.tsx', `
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogArticles } from '../config/blogConfig';

export function ArticlePage() {
  const { slug } = useParams();
  const article = blogArticles.find(a => a.id === slug);

  if (!article) return <Navigate to="/blog" />;

  return (
    <div className="section-padding" style={{ backgroundColor: '#fff' }}>
      <div className="container" style={{ maxWidth: '700px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: '#1D4ED8', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{article.category}</span>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', color: '#111827', margin: '1rem 0' }}>{article.title}</h1>
          <p style={{ color: '#6B7280' }}>{article.date} • {article.readTime} leitura</p>
        </div>

        <div className="prose" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#374151', fontFamily: 'Inter, sans-serif' }}>
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>

        <div style={{ marginTop: '5rem', padding: '3rem', backgroundColor: '#FAFAF8', borderRadius: '12px', border: '1px solid #E5E7EB', display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'Cormorant Garamond, serif', marginBottom: '1rem' }}>Gostou deste estudo?</h3>
            <p style={{ color: '#4B5563', marginBottom: '1.5rem' }}>Este tema é desenvolvido com muito mais profundidade no livro <strong>{article.relatedBook.title}</strong>.</p>
            <Link to={article.relatedBook.path} className="btn btn-primary" style={{ display: 'inline-block', padding: '0.8rem 1.5rem' }}>Conhecer o Livro</Link>
          </div>
          <div style={{ width: '150px' }}>
            <img src={article.relatedBook.image} alt={article.relatedBook.title} style={{ width: '100%', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
`);

// 9. Update LandingPage to include CrossSell
let lp = fs.readFileSync('src/components/LandingPage.tsx', 'utf8');
lp = lp.replace("import { FooterSection } from './FooterSection';", "import { FooterSection } from './FooterSection';\\nimport { CrossSellSection } from './CrossSellSection';");
lp = lp.replace("<FAQSection config={config} />", "<FAQSection config={config} />\\n      <CrossSellSection />");
fs.writeFileSync('src/components/LandingPage.tsx', lp);

// 10. Update App.tsx
fs.writeFileSync('src/App.tsx', `
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import './App.css';

import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { BlogIndex } from './pages/BlogIndex';
import { ArticlePage } from './pages/ArticlePage';
import { LandingPage } from './components/LandingPage';

import { configOrando } from './config/configOrando';
import { configRei } from './config/configRei';
import { configChora } from './config/configChora';
import { configJerusalem } from './config/configJerusalem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<BlogIndex />} />
          <Route path="blog/:slug" element={<ArticlePage />} />
          
          {/* Livros Landing Pages */}
          <Route path="orando" element={<LandingPage config={configOrando} />} />
          <Route path="quando-nao-ha-rei" element={<LandingPage config={configRei} />} />
          <Route path="quem-ainda-chora" element={<LandingPage config={configChora} />} />
          <Route path="somos-todos-jerusalem" element={<LandingPage config={configJerusalem} />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
`);

console.log("Editora construída com sucesso.");
