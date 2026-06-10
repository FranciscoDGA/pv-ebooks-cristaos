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
            <Link to="/#livros" className="nav-link">Coleção</Link>
            <Link to="/autor" className="nav-link">O Autor</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/contato" className="nav-link" style={{ border: '2px solid #111', padding: '0.4rem 1.2rem', borderRadius: '4px' }}>Contato</Link>
          </nav>
        </div>
      </header>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <footer style={{ background: '#222222', color: '#9CA3AF' }}>
        {/* Latest Tweets & Stay Connected Band */}
        <div style={{ background: '#FAFAF8', color: '#111', padding: '2rem 0', borderTop: '1px solid #E5E7EB' }}>
          <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, minWidth: '300px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F97316', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>X</div>
              <p style={{ fontStyle: 'italic', fontSize: '0.9rem', margin: 0, color: '#555' }}>
                "O clamor de quem ainda chora pode mudar a história de uma nação." <span style={{ color: '#F97316' }}>@ChamadoDaGraca</span>
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <strong style={{ textTransform: 'uppercase', fontSize: '0.9rem' }}>STAY CONNECTED</strong>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>f</span>
                <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>in</span>
                <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>ig</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'space-between', paddingTop: '4rem' }}>
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
              <li><Link to="/autor" style={{ color: 'inherit', textDecoration: 'none' }}>Sobre o Autor</Link></li>
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
              <span style={{ background: '#fff', color: '#004B8C', padding: '4px 10px', borderRadius: '3px', fontWeight: 'bold', fontSize: '0.85rem', border: '1px solid #ccc' }}>VISA</span>
              <span style={{ background: '#fff', color: '#004B8C', padding: '4px 10px', borderRadius: '3px', fontWeight: 'bold', fontSize: '0.85rem', border: '1px solid #ccc' }}>MASTERCARD</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
