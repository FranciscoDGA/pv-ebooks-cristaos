export function QuoteSection({ config }: { config: any }) {
  const { quotes } = config;
  return (
    <section className="quote-section">
      <div className="container">
        <p className="quote-text">"{quotes[0]}"</p>
      </div>
    </section>
  );
}
