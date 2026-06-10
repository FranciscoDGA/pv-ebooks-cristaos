
export function TestimonialsSection({ config }: { config: any }) {
  if (!config.testimonials) return null;
  return (
    <section id="testimonials" className="section-padding bg-gray">
      <div className="container">
        <h2 className="section-title">O que os leitores dizem</h2>
        <div className="testimonials-grid" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {config.testimonials.map((test: any, idx: number) => (
            <div className="testimonial-editorial" key={idx} style={{ textAlign: 'center' }}>
              <p className="testimonial-quote" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontStyle: 'italic', color: '#374151' }}>"{test.text}"</p>
              <p className="testimonial-author" style={{ marginTop: '1rem', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.9rem', color: '#9ca3af' }}>— {test.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
