import { bookConfig } from '../config/bookConfig';

export function QuoteSection() {
  const { quotes } = bookConfig;
  return (
    <section className="quote-section">
      <div className="container">
        <p className="quote-text">"{quotes[0]}"</p>
      </div>
    </section>
  );
}
