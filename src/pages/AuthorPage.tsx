import { Helmet } from 'react-helmet-async';
import { AuthorSection } from '../components/AuthorSection';

export function AuthorPage() {
  const config = {
    author: {
      photo: "/author_pastoral.png",
      name: "Pr. Francisco Gomes",
      bio: "Pastor, conferencista e ensinador da Palavra. Vice-Presidente do MAJEV — Ministério Arrependei-vos, Jesus Está Voltando. Seu chamado é tornar a vida com Deus simples, prática e verdadeira — sem maquiagem. Ele tem dedicado a vida a ensinar as pessoas a saírem da teoria religiosa e entrarem na prática da oração e do relacionamento com Cristo."
    }
  };

  return (
    <div className="section-padding" style={{ backgroundColor: '#fff', minHeight: '80vh', paddingTop: '8rem' }}>
      <Helmet>
        <title>Sobre o Autor | O Chamado da Graça</title>
        <meta name="description" content="Conheça o Pr. Francisco Gomes." />
      </Helmet>
      <div className="container">
        <h1 style={{ textAlign: 'center', fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', marginBottom: '4rem' }}>Sobre o Autor</h1>
        <div style={{ backgroundColor: '#0F172A', borderRadius: '12px', overflow: 'hidden' }}>
          <AuthorSection config={config} />
        </div>
      </div>
    </div>
  );
}
