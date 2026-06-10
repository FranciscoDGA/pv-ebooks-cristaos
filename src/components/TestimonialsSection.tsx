import { bookConfig } from '../config/bookConfig';

export function TestimonialsSection() {
  const { testimonials } = bookConfig;
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="testimonials-title">O que os leitores dizem</h2>
        <div className="testimonials-grid">
          {testimonials.map((test, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="stars">
                {Array.from({length: test.stars}).map((_, i) => <span key={i}>?</span>)}
              </div>
              <p className="testimonial-text">"{test.text}"</p>
              <h4 className="testimonial-name">{test.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
