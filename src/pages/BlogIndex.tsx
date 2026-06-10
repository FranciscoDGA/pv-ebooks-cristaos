
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
              <Link to={`/blog/${article.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
