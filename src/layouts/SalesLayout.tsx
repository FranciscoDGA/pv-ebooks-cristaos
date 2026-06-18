import { Outlet } from 'react-router-dom';

export function SalesLayout() {
  return (
    <div className="sales-layout-wrapper">
      <Outlet />
      
      {/* Minimal Footer for Sales Pages */}
      <footer style={{
        backgroundColor: '#0a0a0a',
        color: '#94a3b8',
        padding: '2rem',
        textAlign: 'center',
        fontSize: '0.875rem',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}>
        <p style={{ margin: '0 0 0.5rem 0' }}>&copy; {new Date().getFullYear()} Editora O Chamado da Graça. Todos os direitos reservados.</p>
        <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.7 }}>
          Este site não faz parte do site do Facebook ou da Meta Platforms, Inc.
        </p>
      </footer>
    </div>
  );
}
