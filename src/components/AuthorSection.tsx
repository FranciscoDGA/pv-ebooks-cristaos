
export function AuthorSection({ config }: { config: any }) {
  const { author } = config;
  return (
    <section id="author" className="author-section">
      <div className="container author-grid">
        <div>
          <img src={author.photo} alt="Autor" className="author-photo" />
        </div>
        <div>
          <h3 className="author-name">{author.name}</h3>
          <p className="author-title">Pastor • Conferencista • Ensinador da Palavra</p>
          <p className="author-bio">Há mais de 20 anos servindo a Cristo, dedicando-se ao ensino bíblico, formação cristã e aplicação prática das Escrituras. {author.bio}</p>
        </div>
      </div>
    </section>
  );
}
