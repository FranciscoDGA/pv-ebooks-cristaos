const fs = require('fs');

// 1. Update index.css to format .prose classes for Markdown
let css = fs.readFileSync('src/index.css', 'utf8');

const proseStyles = `
/* Markdown & Prose Styling */
.prose {
  font-size: 1.3rem; /* Aumentado de 1.2rem para melhor leitura */
  line-height: 1.8;
  color: #374151;
}

.prose p {
  margin-bottom: 2rem;
}

.prose h1, .prose h2, .prose h3, .prose h4 {
  font-family: var(--font-title);
  color: #111827;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

.prose h2 {
  font-size: 2.2rem;
  border-bottom: 1px solid #E5E7EB;
  padding-bottom: 0.5rem;
}

.prose h3 {
  font-size: 1.8rem;
}

.prose ul, .prose ol {
  margin-bottom: 2rem;
  padding-left: 2rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

.prose blockquote {
  font-style: italic;
  font-size: 1.4rem;
  color: #4B5563;
  border-left: 4px solid var(--accent-gold);
  padding-left: 1.5rem;
  margin: 2rem 0;
}
`;

if (!css.includes('.prose p')) {
  fs.appendFileSync('src/index.css', '\\n' + proseStyles);
}

// 2. Fix the Footer Links in MainLayout.tsx
let layout = fs.readFileSync('src/layouts/MainLayout.tsx', 'utf8');

// Fix Autor anchor to ensure it behaves cleanly if on same page or not
// Actually, since Author is only on HomePage, standard Link to="/#author" works if we implement scroll, but we can just make it an <a> tag
layout = layout.replace('<Link to="/#author" style={{ color: \\'inherit\\', textDecoration: \\'none\\' }}>Autor</Link>', '<a href="/#author" style={{ color: \\'inherit\\', textDecoration: \\'none\\' }}>Autor</a>');
layout = layout.replace('<Link to="/#livros" style={{ color: \\'inherit\\', textDecoration: \\'none\\' }}>A Cruz e o Coração Humano</Link>', '<a href="/#livros" style={{ color: \\'inherit\\', textDecoration: \\'none\\' }}>A Cruz e o Coração Humano</a>');

// The books aren't actually "Em breve", they exist!
layout = layout.replace('<Link to="/em-breve" style={{ color: \\'inherit\\', textDecoration: \\'none\\' }}>Vida de Oração</Link>', '<Link to="/orando" style={{ color: \\'inherit\\', textDecoration: \\'none\\' }}>Vida de Oração</Link>');
layout = layout.replace('<Link to="/em-breve" style={{ color: \\'inherit\\', textDecoration: \\'none\\' }}>Profetas</Link>', '<Link to="/quem-ainda-chora" style={{ color: \\'inherit\\', textDecoration: \\'none\\' }}>Profetas</Link>');
layout = layout.replace('<Link to="/em-breve" style={{ color: \\'inherit\\', textDecoration: \\'none\\' }}>Igreja e Sociedade</Link>', '<Link to="/somos-todos-jerusalem" style={{ color: \\'inherit\\', textDecoration: \\'none\\' }}>Igreja e Sociedade</Link>');

fs.writeFileSync('src/layouts/MainLayout.tsx', layout);
