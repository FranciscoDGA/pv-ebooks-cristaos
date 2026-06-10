
export function IsForYouSection({ config }: { config: any }) {
  if (!config.isForYou) return null;
  return (
    <section className="is-for-you-section">
      <div className="container">
        <h2 className="section-title">Este livro é para você se...</h2>
        <ul className="checklist">
          {config.isForYou.map((item: any, idx: number) => (
            <li key={idx}><span className="checklist-icon">✓</span> {item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
