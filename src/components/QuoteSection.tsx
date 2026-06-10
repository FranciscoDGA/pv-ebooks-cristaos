
export function QuoteSection({ config }: { config: any }) {
  return (
    <section className="quote-section">
      <div className="container">
        <h2 className="quote-text">"{config.quotes[0]}"</h2>
      </div>
    </section>
  );
}
