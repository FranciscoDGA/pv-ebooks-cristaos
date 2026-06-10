import { bookConfig } from '../config/bookConfig';

export function AuthorSection() {
  const { author } = bookConfig;
  return (
    <section className="section-padding">
      <div className="container author-grid">
        <div>
          <img src={author.photo} alt={author.name} className="author-photo" />
        </div>
        <div>
          <h2>Sobre o Autor</h2>
          <h3 className="author-name">{author.name}</h3>
          <p className="author-bio">{author.bio}</p>
        </div>
      </div>
    </section>
  );
}
