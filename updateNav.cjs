const fs = require('fs');

// 1. Update MainLayout Header
let layout = fs.readFileSync('src/layouts/MainLayout.tsx', 'utf8');

const oldNav = `<nav style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Home</Link>
            <Link to="/blog" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Blog</Link>
            <Link to="/#livros" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Livros</Link>
          </nav>`;

const newNav = `<nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link to="/" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Home</Link>
            <Link to="/blog" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Blog</Link>
            <a href="/#livros" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Coleções</a>
            <a href="/#author" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Autor</a>
            <Link to="/contato" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Contato</Link>
          </nav>`;

layout = layout.replace(oldNav, newNav);
fs.writeFileSync('src/layouts/MainLayout.tsx', layout);

// 2. Update App routes
let app = fs.readFileSync('src/App.tsx', 'utf8');

if (!app.includes('ContactPage')) {
  app = app.replace("import { LegalPage } from './pages/LegalPage';", "import { LegalPage } from './pages/LegalPage';\\nimport { ContactPage } from './pages/ContactPage';");
  app = app.replace('<Route path="contato" element={<PlaceholderPage />} />', '<Route path="contato" element={<ContactPage />} />');
  fs.writeFileSync('src/App.tsx', app);
}
