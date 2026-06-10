const fs = require('fs');

// 1. AuthorSection (Lower case slogan, capitalization of name)
fs.writeFileSync('src/components/AuthorSection.tsx', `
export function AuthorSection({ config }: { config: any }) {
  if (!config.author) return null;
  return (
    <section id="author" className="section-padding" style={{ backgroundColor: '#0F172A', color: '#fff' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 300px' }}>
            <img src={config.author.photo} alt={config.author.name} style={{ width: '100%', borderRadius: '8px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)' }} />
          </div>
          <div style={{ flex: '2 1 500px' }}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', color: '#F3F4F6' }}>{config.author.name}</h2>
            <p style={{ color: '#9CA3AF', textTransform: 'lowercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Pastor • conferencista • ensinador da Palavra</p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#D1D5DB' }}>{config.author.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
`);

// 2. BonusSection (Premium look)
fs.writeFileSync('src/components/BonusSection.tsx', `
export function BonusSection({ config }: { config: any }) {
  if (!config.bonuses) return null;
  return (
    <section id="bonuses" className="section-padding" style={{ backgroundColor: '#111827', color: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', color: '#FBBF24' }}>Bônus Exclusivos</h2>
          <p style={{ color: '#D1D5DB' }}>Acompanham gratuitamente o e-book nesta oferta.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {config.bonuses.map((bonus: any, idx: number) => (
            <div key={idx} style={{ padding: '2rem', border: '1px solid #374151', borderRadius: '8px', textAlign: 'center', background: 'linear-gradient(145deg, #1F2937, #111827)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem', color: '#FBBF24' }}>✦</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', color: '#F3F4F6', marginBottom: '0.5rem' }}>{bonus.title}</h3>
              <p style={{ color: '#9CA3AF', fontSize: '0.9rem' }}>De {bonus.value} por <strong style={{color: '#10B981'}}>R$ 0,00</strong></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

// 3. MainLayout (Footer update)
fs.writeFileSync('src/layouts/MainLayout.tsx', `
import { Link, Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ background: '#0F172A', color: '#fff', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '2px' }}>COLEÇÃO DO REINO</Link>
          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Home</Link>
            <Link to="/blog" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Blog</Link>
            <Link to="/#livros" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Livros</Link>
          </nav>
        </div>
      </header>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <footer style={{ background: '#111827', color: '#9CA3AF', padding: '4rem 0 2rem 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem' }}>Coleções</h4>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li>A Cruz e o Coração Humano</li>
              <li>Vida de Oração</li>
              <li>Profetas</li>
              <li>Igreja e Sociedade</li>
            </ul>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem' }}>Categorias</h4>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li>Oração</li>
              <li>Graça</li>
              <li>Arrependimento</li>
              <li>Igreja</li>
              <li>Santidade</li>
            </ul>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem' }}>Sobre</h4>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li>Autor</li>
              <li><Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</Link></li>
              <li>Livros</li>
              <li>Contato</li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem', borderTop: '1px solid #374151', paddingTop: '2rem' }}>
          <p>&copy; {new Date().getFullYear()} Coleção do Reino - Pr. Francisco Gomes. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
`);

// 4. HomePage update
fs.writeFileSync('src/pages/HomePage.tsx', `
import { Link } from 'react-router-dom';
import { blogArticles } from '../config/blogConfig';

export function HomePage() {
  const books = [
    { title: "Orando com o Corpo...", img: "/orando_com_corpo_alma_espirito_1781101893485.png", link: "/orando" },
    { title: "Quando Não Há Rei", img: "/quando_nao_ha_rei_1781101904540.png", link: "/quando-nao-ha-rei" },
    { title: "Quem Ainda Chora?", img: "/quem_ainda_chora_1781101915571.png", link: "/quem-ainda-chora" },
    { title: "Somos Todos Jerusalém", img: "/somos_todos_jerusalem_1781101925943.png", link: "/somos-todos-jerusalem" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        backgroundImage: 'linear-gradient(rgba(15,23,42,0.8), rgba(15,23,42,0.9)), url("/home_hero_bg.png")', 
        backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', padding: '8rem 1rem', textAlign: 'center' 
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '4rem', marginBottom: '1.5rem', letterSpacing: '1px' }}>Vivendo as Escrituras</h1>
          <p style={{ fontSize: '1.4rem', color: '#D1D5DB', lineHeight: '1.6', marginBottom: '2rem' }}>Uma biblioteca digital cristã para quem deseja ler devagar, pensar profundamente e caminhar mais perto de Deus.</p>
          <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#9CA3AF', marginBottom: '3rem' }}>Livros que confrontam, edificam e conduzem o coração humano à cruz.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#livros" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Conheça a Coleção</a>
            <Link to="/blog" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', backgroundColor: 'transparent', border: '1px solid #fff', color: '#fff' }}>Leia os Artigos</Link>
          </div>
        </div>
      </section>

      {/* Missão */}
      <section className="section-padding" style={{ backgroundColor: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', marginBottom: '2rem', color: '#111827' }}>Por que a Vivendo as Escrituras existe?</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#4B5563', marginBottom: '1.5rem' }}>Vivemos em uma época de leituras rápidas e reflexões superficiais.</p>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#4B5563', marginBottom: '1.5rem' }}>Esta coleção nasceu do desejo de produzir livros escritos em linguagem simples para crianças compreenderem e adultos sentirem.</p>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#111827', fontWeight: 'bold' }}>Nosso objetivo não é apenas informar, mas conduzir pessoas a uma caminhada mais profunda com Deus.</p>
        </div>
      </section>
      
      {/* Coleção */}
      <section id="livros" className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Coleção A Cruz e o Coração Humano</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            {books.map((b, i) => (
              <div key={i} style={{ width: '220px', textAlign: 'center' }}>
                <Link to={b.link}>
                  <img src={b.img} alt={b.title} style={{ width: '100%', borderRadius: '4px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }} onMouseOver={e=>e.currentTarget.style.transform='scale(1.05)'} onMouseOut={e=>e.currentTarget.style.transform='scale(1)'} />
                </Link>
                <h4 style={{ margin: '1.5rem 0', fontSize: '1.2rem', fontFamily: 'Cormorant Garamond, serif' }}>{b.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emocional Coleção */}
      <section className="section-padding" style={{ backgroundColor: '#111827', color: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', marginBottom: '2rem', color: '#F3F4F6' }}>Uma coleção para ser lida devagar</h2>
          <p style={{ fontSize: '1.3rem', lineHeight: '1.8', color: '#9CA3AF', marginBottom: '2rem' }}>Livros escritos em linguagem simples para crianças compreenderem e adultos sentirem.</p>
          <p style={{ fontSize: '1.5rem', fontFamily: 'Cormorant Garamond, serif', color: '#D1D5DB', margin: '0.5rem 0' }}>Reflexões que confrontam.</p>
          <p style={{ fontSize: '1.5rem', fontFamily: 'Cormorant Garamond, serif', color: '#D1D5DB', margin: '0.5rem 0' }}>Palavras que consolam.</p>
          <p style={{ fontSize: '1.5rem', fontFamily: 'Cormorant Garamond, serif', color: '#D1D5DB', margin: '0.5rem 0' }}>Estudos que conduzem.</p>
          <p style={{ fontSize: '1.5rem', fontFamily: 'Cormorant Garamond, serif', color: '#FBBF24', margin: '2rem 0 0 0', fontStyle: 'italic' }}>Porque a mesma cruz que nos acusa é a que nos salva.</p>
        </div>
      </section>

      {/* Artigos Blog */}
      <section className="section-padding" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Últimas Reflexões</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {blogArticles.slice(0,3).map((article, i) => {
               const images = ['/article_jeremias.png', '/article_cruz.png', '/article_oracao.png', '/home_hero_bg.png'];
               return (
              <Link to={\`/blog/\${article.id}\`} key={article.id} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                <img src={images[i]} alt={article.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} />
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', color: '#111827', marginBottom: '1rem' }}>{article.title}</h3>
                <p style={{ color: '#4B5563', lineHeight: '1.6', marginBottom: '1rem' }}>{article.excerpt}</p>
                <span style={{ color: '#1D4ED8', fontWeight: 'bold' }}>Continuar lendo →</span>
              </Link>
            )})}
          </div>
        </div>
      </section>

      {/* Autor */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 300px' }}>
              <img src="/author_pastoral.png" alt="Pr. Francisco Gomes" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }} />
            </div>
            <div style={{ flex: '2 1 500px' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', color: '#111827', marginBottom: '0.5rem' }}>Pr. Francisco Gomes</h2>
              <p style={{ color: '#6B7280', textTransform: 'lowercase', letterSpacing: '1px', fontSize: '1rem', marginBottom: '2rem' }}>Pastor • conferencista • ensinador da Palavra</p>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#374151', marginBottom: '1rem' }}>Há mais de duas décadas servindo a Cristo e ensinando as Escrituras.</p>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#374151', marginBottom: '2rem' }}>Uma vida dedicada a transformar conhecimento bíblico em aplicação prática. Atua como Vice-Presidente do MAJEV, dedicando seu ministério a ensinar o povo de Deus a sair da teoria e entrar na comunhão diária.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
`);

// 5. BookPreviewSection (Modal with HTML Text)
fs.writeFileSync('src/components/BookPreviewSection.tsx', `
import { useState } from 'react';

export function BookPreviewSection({ config }: { config: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(0);

  if (!config.previewPages) return null;

  const excerpts = [
    { title: "Trecho 1", text: "A verdadeira adoração não começa com as mãos levantadas, mas com o coração rendido. Quando nos aproximamos de Deus, Ele não olha primeiro para a nossa postura externa, mas para o altar interno das nossas motivações." },
    { title: "Trecho 2", text: "Muitos cristãos carregam a exaustão como um troféu de espiritualidade. No entanto, Deus nunca nos chamou para vivermos esgotados em Seu nome, mas para encontrarmos descanso em Sua presença." },
    { title: "Trecho 3", text: "A oração não é a tentativa de convencer Deus a fazer a nossa vontade, mas o processo pelo qual Ele alinha a nossa vontade à Sua." },
    { title: "Trecho 4", text: "Quando as palavras nos faltam, e a alma está seca, o próprio Espírito intercede por nós com gemidos inexprimíveis. Há consolo em saber que Deus ouve até mesmo o nosso silêncio." },
    { title: "Trecho 5", text: "No fim das contas, a cruz não apenas expõe a gravidade do nosso pecado, mas proclama a magnitude da graça de Deus. Aquele que verdadeiramente compreende isso, não pode fazer outra coisa senão adorar." },
  ];

  return (
    <section id="preview" className="section-padding bg-gray">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Amostra Grátis (Leia um trecho)</h2>
        <p style={{ marginBottom: '3rem', color: '#4B5563' }}>Clique no botão abaixo para ler gratuitamente 5 trechos selecionados do livro e sentir o peso destas reflexões.</p>
        
        <button onClick={() => setIsOpen(true)} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>
          📖 Ler Trechos do Livro
        </button>

        {isOpen && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ backgroundColor: '#FAFAF8', width: '90%', maxWidth: '600px', borderRadius: '8px', padding: '3rem 2rem', position: 'relative' }}>
              <button onClick={() => setIsOpen(false)} style={{ position: 'absolute', top: '15px', right: '20px', background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#374151' }}>✕</button>
              
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', marginBottom: '1.5rem', color: '#111827' }}>{excerpts[currentChapter].title}</h3>
              <div style={{ fontSize: '1.3rem', lineHeight: '1.8', color: '#374151', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', marginBottom: '2rem', minHeight: '150px' }}>
                "{excerpts[currentChapter].text}"
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
                <button 
                  onClick={() => setCurrentChapter(c => Math.max(0, c - 1))}
                  disabled={currentChapter === 0}
                  style={{ padding: '0.5rem 1rem', cursor: currentChapter === 0 ? 'not-allowed' : 'pointer', border: '1px solid #D1D5DB', background: '#fff', borderRadius: '4px' }}
                >
                  ← Anterior
                </button>
                <span style={{ color: '#6B7280' }}>Trecho {currentChapter + 1} de 5</span>
                <button 
                  onClick={() => setCurrentChapter(c => Math.min(4, c + 1))}
                  disabled={currentChapter === 4}
                  style={{ padding: '0.5rem 1rem', cursor: currentChapter === 4 ? 'not-allowed' : 'pointer', border: '1px solid #1D4ED8', background: '#1D4ED8', color: '#fff', borderRadius: '4px' }}
                >
                  Próximo →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
`);

console.log("Refinamento concluído.");
