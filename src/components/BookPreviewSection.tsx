
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
