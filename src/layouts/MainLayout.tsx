import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function MainLayout() {
  const { hash, pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Scroll to hash if present
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  // Handle Header Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  
  // Se for Home, começa transparente e branco, depois fica fundo branco com texto escuro
  // Se NÃO for Home, sempre será fundo branco com texto escuro para não quebrar leitura.
  const headerStyle = isHome && !scrolled 
    ? { background: 'transparent', color: '#fff', boxShadow: 'none' }
    : { background: 'rgba(255, 255, 255, 0.95)', color: '#0a0a0a', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 30px rgba(0,0,0,0.03)' };

  const linkColor = isHome && !scrolled ? '#fff' : '#0a0a0a';
  const logoColor = isHome && !scrolled ? '#c5a880' : '#0a0a0a';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fcfcfb' }}>
      <header style={{ 
        ...headerStyle, 
        padding: '1.5rem 0', 
        position: 'fixed', 
        width: '100%', 
        top: 0, 
        zIndex: 50,
        transition: 'all 0.4s ease'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <Link to="/" style={{ 
            color: logoColor, 
            textDecoration: 'none', 
            fontSize: '1.5rem', 
            fontFamily: 'Cormorant Garamond, serif', 
            letterSpacing: '0.05em',
            transition: 'color 0.4s ease'
          }}>
            O CHAMADO DA GRAÇA
          </Link>
          
          <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', fontSize: '0.85rem', fontWeight: '500', fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            <Link to="/" style={{ color: linkColor, textDecoration: 'none', transition: 'opacity 0.3s' }} className="hover-opacity">Home</Link>
            <Link to="/#livros" style={{ color: linkColor, textDecoration: 'none', transition: 'opacity 0.3s' }} className="hover-opacity">Livros</Link>
            <Link to="/#colecoes" style={{ color: linkColor, textDecoration: 'none', transition: 'opacity 0.3s' }} className="hover-opacity">Coleções</Link>
            <Link to="/blog" style={{ color: linkColor, textDecoration: 'none', transition: 'opacity 0.3s' }} className="hover-opacity">Blog</Link>
            <Link to="/autor" style={{ color: linkColor, textDecoration: 'none', transition: 'opacity 0.3s' }} className="hover-opacity">Autor</Link>
            <Link to="/contato" style={{ color: linkColor, textDecoration: 'none', transition: 'opacity 0.3s' }} className="hover-opacity">Contato</Link>
            
            <div style={{ display: 'flex', gap: '1.5rem', marginLeft: '1rem', alignItems: 'center', color: linkColor }}>
              <i className="fa-solid fa-magnifying-glass" style={{ cursor: 'pointer', fontSize: '1rem' }}></i>
              <i className="fa-solid fa-bag-shopping" style={{ cursor: 'pointer', fontSize: '1rem' }}></i>
            </div>
          </nav>
        </div>
      </header>
      
      <main style={{ flex: 1, paddingTop: isHome ? '0' : '80px' }}>
        <Outlet />
      </main>

      <footer style={{ background: '#0a0a0a', color: '#94a3b8', padding: '6rem 2rem 3rem', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', color: '#fff', marginBottom: '1rem', letterSpacing: '0.05em' }}>O CHAMADO DA GRAÇA</h2>
          <p style={{ fontSize: '1rem', fontWeight: '300', marginBottom: '3rem', color: '#64748b' }}>
            Uma biblioteca digital cristã para quem deseja viver aquilo que aprende.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <Link to="/#biblioteca" style={{ color: '#fff', textDecoration: 'none' }}>Livros</Link>
            <Link to="/#colecoes" style={{ color: '#fff', textDecoration: 'none' }}>Coleções</Link>
            <Link to="/autor" style={{ color: '#fff', textDecoration: 'none' }}>Autor</Link>
            <Link to="/blog" style={{ color: '#fff', textDecoration: 'none' }}>Blog</Link>
            <Link to="/contato" style={{ color: '#fff', textDecoration: 'none' }}>Contato</Link>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '4rem', fontSize: '1.25rem', color: '#c5a880' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}><i className="fa-brands fa-instagram"></i></a>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: '#475569' }}>
            <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Editora O Chamado da Graça.</p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Link to="/privacidade" style={{ color: 'inherit', textDecoration: 'none' }}>Política de Privacidade</Link>
              <Link to="/termos" style={{ color: 'inherit', textDecoration: 'none' }}>Termos</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
