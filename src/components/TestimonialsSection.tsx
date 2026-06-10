import React from 'react';

export function TestimonialsSection({ config }: { config: any }) {
  if (!config.testimonials) return null;
  return (
    <section id="testimonials" className="section-padding bg-gray">
      <div className="container">
        <h2 className="section-title">O que os leitores dizem</h2>
        <div className="testimonials-grid">
          {config.testimonials.map((test: any, idx: number) => (
            <div className="testimonial-card" key={idx}>
              <div className="stars">
                {Array.from({length: test.stars}).map((_, i) => <span key={i}>⭐</span>)}
              </div>
              <p className="testimonial-quote">"{test.quote}"</p>
              <p className="testimonial-author">- {test.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
