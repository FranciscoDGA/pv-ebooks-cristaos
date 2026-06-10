
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { blogArticles } from '../config/blogConfig';

export function ArticlePage() {
  const { slug } = useParams();
  const article = blogArticles.find(a => a.id === slug);

  if (!article) return <Navigate to="/blog" />;

  return (
    <div className="section-padding" style={{ backgroundColor: '#fff' }}>
      <Helmet>
        <title>{article.title} | Blog O Chamado da Graça</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>
      <div className="container" style={{ maxWidth: '700px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: '#1D4ED8', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{article.category}</span>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', color: '#111827', margin: '1rem 0' }}>{article.title}</h1>
          <p style={{ color: '#6B7280' }}>{article.date} • {article.readTime} leitura</p>
        </div>

        <div className="prose" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#374151', fontFamily: 'Inter, sans-serif' }}>
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>

        <div style={{ marginTop: '5rem', padding: '3rem', backgroundColor: '#FAFAF8', borderRadius: '12px', border: '1px solid #E5E7EB', display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'Cormorant Garamond, serif', marginBottom: '1rem' }}>Gostou deste estudo?</h3>
            <p style={{ color: '#4B5563', marginBottom: '1.5rem' }}>Este tema é desenvolvido com muito mais profundidade no livro <strong>{article.relatedBook.title}</strong>.</p>
            <Link to={article.relatedBook.path} className="btn btn-primary" style={{ display: 'inline-block', padding: '0.8rem 1.5rem' }}>Conhecer o Livro</Link>
          </div>
          <div style={{ width: '150px' }}>
            <img src={article.relatedBook.image} alt={article.relatedBook.title} style={{ width: '100%', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
