export function LegalPage({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="section-padding" style={{ backgroundColor: '#fff', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', color: '#111827', marginBottom: '2rem' }}>{title}</h1>
        <div className="prose" style={{ color: '#374151', lineHeight: '1.8' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
