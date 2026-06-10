import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export function MainLayout() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ background: '#0F172A', color: '#fff', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '2px' }}>COLEÇÃO DO REINO</Link>
          <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link to="/" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Home</Link>
            <Link to="/blog" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Blog</Link>
            <a href="/#livros" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Coleções</a>
            <a href="/#author" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Autor</a>
            <Link to="/contato" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Contato</Link>
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
              <li><Link to="/orando" style={{ color: 'inherit', textDecoration: 'none' }}>Vida de Oração</Link></li>
              <li><Link to="/quem-ainda-chora" style={{ color: 'inherit', textDecoration: 'none' }}>Profetas</Link></li>
              <li><Link to="/somos-todos-jerusalem" style={{ color: 'inherit', textDecoration: 'none' }}>Igreja e Sociedade</Link></li>
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
