
export function CollectionSection({ config }: { config: any }) {
  if (!config.collection) return null;
  return (
    <section className="collection-section">
      <div className="container">
        <span className="collection-banner">{config.collection.title}</span>
        <h3>Outros livros do autor</h3>
        <div className="collection-links">
          {config.collection.books.map((book: any, idx: number) => (
            <a key={idx} href={book.path} className="collection-link">📕 {book.title}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
