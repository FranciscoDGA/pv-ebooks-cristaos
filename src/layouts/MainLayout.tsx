
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
              <li>A Cruz e o Coração Humano</li>
              <li>Vida de Oração</li>
              <li>Profetas</li>
              <li>Igreja e Sociedade</li>
            </ul>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem' }}>Categorias</h4>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li>Oração</li>
              <li>Graça</li>
              <li>Arrependimento</li>
              <li>Igreja</li>
              <li>Santidade</li>
            </ul>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem' }}>Sobre</h4>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li>Autor</li>
              <li><Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</Link></li>
              <li>Livros</li>
              <li>Contato</li>
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
