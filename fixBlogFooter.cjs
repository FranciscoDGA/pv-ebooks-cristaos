const fs = require('fs');

// 1. Update blogConfig to include thumbnails
let blogConfig = fs.readFileSync('src/config/blogConfig.ts', 'utf8');
blogConfig = blogConfig.replace('date: "10 Jun 2026",', 'date: "10 Jun 2026", thumbnail: "/article_jeremias.png",');
blogConfig = blogConfig.replace('date: "08 Jun 2026",', 'date: "08 Jun 2026", thumbnail: "/article_cruz.png",');
blogConfig = blogConfig.replace('date: "05 Jun 2026",', 'date: "05 Jun 2026", thumbnail: "/article_oracao.png",');
blogConfig = blogConfig.replace('date: "02 Jun 2026",', 'date: "02 Jun 2026", thumbnail: "/home_hero_bg.png",');
fs.writeFileSync('src/config/blogConfig.ts', blogConfig);

// 2. Update BlogIndex.tsx to show thumbnails
fs.writeFileSync('src/pages/BlogIndex.tsx', `
import { Link } from 'react-router-dom';
import { blogArticles } from '../config/blogConfig';

export function BlogIndex() {
  return (
    <div className="section-padding" style={{ backgroundColor: '#FAFAF8', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', marginBottom: '3rem', borderBottom: '1px solid #E5E7EB', paddingBottom: '1rem' }}>Blog: Reflexões Teológicas</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {blogArticles.map((article: any) => (
            <article key={article.id} style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ flex: '1 1 300px' }}>
                <Link to={\`/blog/\${article.id}\`}>
                  <img src={article.thumbnail} alt={article.title} style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', objectFit: 'cover', height: '220px' }} />
                </Link>
              </div>
              <div style={{ flex: '2 1 400px' }}>
                <span style={{ fontSize: '0.9rem', color: '#1D4ED8', fontWeight: 'bold', textTransform: 'uppercase' }}>{article.category}</span>
                <Link to={\`/blog/\${article.id}\`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', color: '#111827', margin: '0.5rem 0' }}>{article.title}</h2>
                  <p style={{ fontSize: '1.2rem', color: '#4B5563', lineHeight: '1.6' }}>{article.excerpt}</p>
                </Link>
                <div style={{ marginTop: '1rem', color: '#9CA3AF', fontSize: '0.9rem' }}>{article.date} • {article.readTime} leitura</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
`);

// 3. Update HomePage.tsx to use real thumbnails
let home = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');
home = home.replace("const images = ['/article_jeremias.png', '/article_cruz.png', '/article_oracao.png', '/home_hero_bg.png'];", "");
home = home.replace("src={images[i]}", "src={article.thumbnail}");
fs.writeFileSync('src/pages/HomePage.tsx', home);

// 4. Update MainLayout.tsx (Footer Links + LGPD)
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
      <footer style={{ background: '#111827', color: '#9CA3AF', padding: '4rem 0 2rem 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem' }}>Coleções</h4>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li><Link to="/#livros" style={{ color: 'inherit', textDecoration: 'none' }}>A Cruz e o Coração Humano</Link></li>
              <li><Link to="/em-breve" style={{ color: 'inherit', textDecoration: 'none' }}>Vida de Oração</Link></li>
              <li><Link to="/em-breve" style={{ color: 'inherit', textDecoration: 'none' }}>Profetas</Link></li>
              <li><Link to="/em-breve" style={{ color: 'inherit', textDecoration: 'none' }}>Igreja e Sociedade</Link></li>
            </ul>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem' }}>Categorias</h4>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li><Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Oração</Link></li>
              <li><Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Graça</Link></li>
              <li><Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Arrependimento</Link></li>
              <li><Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Igreja</Link></li>
              <li><Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Santidade</Link></li>
            </ul>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem' }}>Navegação</h4>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li><Link to="/#author" style={{ color: 'inherit', textDecoration: 'none' }}>Autor</Link></li>
              <li><Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</Link></li>
              <li><Link to="/#livros" style={{ color: 'inherit', textDecoration: 'none' }}>Livros</Link></li>
              <li><Link to="/contato" style={{ color: 'inherit', textDecoration: 'none' }}>Contato</Link></li>
            </ul>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem' }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li><Link to="/privacidade" style={{ color: 'inherit', textDecoration: 'none' }}>Política de Privacidade</Link></li>
              <li><Link to="/termos" style={{ color: 'inherit', textDecoration: 'none' }}>Termos de Uso</Link></li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem', borderTop: '1px solid #374151', paddingTop: '2rem' }}>
          <p>&copy; {new Date().getFullYear()} Coleção do Reino - Pr. Francisco Gomes. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
`);
