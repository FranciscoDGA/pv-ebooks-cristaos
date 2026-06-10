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
      <header style={{ background: '#fff', color: '#111', padding: '1rem 0', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ color: '#FACC15', textDecoration: 'none', fontSize: '1.8rem', fontWeight: 'bold', fontFamily: 'var(--font-title)', fontStyle: 'italic' }}>Editora da Graça</Link>
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase' }}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <a href="/#livros" className="nav-link">Coleções</a>
            <a href="/#author" className="nav-link">Autor</a>
            <Link to="/contato" className="nav-link">Contato</Link>
          </nav>
        </div>
      </header>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <footer style={{ background: '#222222', color: '#9CA3AF', paddingTop: '4rem' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>PRODUTOS</h4>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2', fontSize: '0.9rem' }}>
              <li><Link to="/#livros" style={{ color: 'inherit', textDecoration: 'none' }}>Coleção Completa</Link></li>
              <li><Link to="/orando" style={{ color: 'inherit', textDecoration: 'none' }}>Vida de Oração</Link></li>
              <li><Link to="/quem-ainda-chora" style={{ color: 'inherit', textDecoration: 'none' }}>Consolo</Link></li>
              <li><Link to="/somos-todos-jerusalem" style={{ color: 'inherit', textDecoration: 'none' }}>Igreja</Link></li>
            </ul>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>CATEGORIAS</h4>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2', fontSize: '0.9rem' }}>
              <li><Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Oração</Link></li>
              <li><Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Graça</Link></li>
              <li><Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Arrependimento</Link></li>
              <li><Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Igreja</Link></li>
              <li><Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Santidade</Link></li>
            </ul>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>SUA CONTA</h4>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2', fontSize: '0.9rem' }}>
              <li><Link to="/#author" style={{ color: 'inherit', textDecoration: 'none' }}>Sobre o Autor</Link></li>
              <li><Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</Link></li>
              <li><Link to="/contato" style={{ color: 'inherit', textDecoration: 'none' }}>Suporte</Link></li>
              <li><Link to="/#livros" style={{ color: 'inherit', textDecoration: 'none' }}>Meus Livros</Link></li>
            </ul>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>INFORMAÇÃO</h4>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2', fontSize: '0.9rem' }}>
              <li>Editora O Chamado da Graça</li>
              <li>São Paulo, Brasil</li>
              <li><Link to="/privacidade" style={{ color: 'inherit', textDecoration: 'none' }}>Política de Privacidade</Link></li>
              <li><Link to="/termos" style={{ color: 'inherit', textDecoration: 'none' }}>Termos de Uso</Link></li>
            </ul>
          </div>
        </div>
        <div style={{ background: '#1A1A1A', padding: '1.5rem 0', marginTop: '4rem', fontSize: '0.85rem' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
            <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} O Chamado da Graça. Todos os direitos reservados.</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {/* Payment icons placeholder */}
              <span style={{ background: '#fff', color: '#111', padding: '2px 8px', borderRadius: '2px', fontWeight: 'bold' }}>VISA</span>
              <span style={{ background: '#fff', color: '#111', padding: '2px 8px', borderRadius: '2px', fontWeight: 'bold' }}>MASTERCARD</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
