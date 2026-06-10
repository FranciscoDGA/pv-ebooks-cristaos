export function ContactPage() {
  return (
    <div className="section-padding" style={{ backgroundColor: '#FAFAF8', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', color: '#111827', marginBottom: '1rem' }}>Fale Conosco</h1>
          <p style={{ fontSize: '1.2rem', color: '#6B7280' }}>Tem alguma dúvida sobre as coleções, ministério ou precisa de suporte com seu e-book? Envie uma mensagem.</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', backgroundColor: '#fff', padding: '3rem', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', color: '#111827', marginBottom: '1.5rem' }}>Informações de Contato</h3>
            <p style={{ color: '#4B5563', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Nosso ministério está dedicado a fornecer recursos para o seu crescimento espiritual. Se houver qualquer problema no download dos livros ou dúvidas pastorais, estamos à disposição.
            </p>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: '#111827' }}>E-mail:</strong><br />
              <a href="mailto:contato@ochamadodagraca.com.br" style={{ color: '#1D4ED8' }}>contato@ochamadodagraca.com.br</a>
            </div>
            <div>
              <strong style={{ color: '#111827' }}>Atendimento:</strong><br />
              <span style={{ color: '#4B5563' }}>Segunda a Sexta, das 09h às 18h</span>
            </div>
          </div>

          <div style={{ flex: '2 1 300px' }}>
            <form onSubmit={(e) => { e.preventDefault(); alert("Mensagem enviada com sucesso! Em breve retornaremos."); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#374151' }}>Seu Nome</label>
                <input type="text" required style={{ width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #D1D5DB', fontSize: '1rem' }} placeholder="Ex: João da Silva" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#374151' }}>Seu E-mail</label>
                <input type="email" required style={{ width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #D1D5DB', fontSize: '1rem' }} placeholder="Ex: joao@email.com" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#374151' }}>Assunto</label>
                <select style={{ width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #D1D5DB', fontSize: '1rem', backgroundColor: '#fff' }}>
                  <option>Dúvida sobre os livros</option>
                  <option>Suporte de download/pagamento</option>
                  <option>Convite para ministração/evento</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#374151' }}>Sua Mensagem</label>
                <textarea required rows={5} style={{ width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #D1D5DB', fontSize: '1rem', resize: 'vertical' }} placeholder="Escreva sua mensagem aqui..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
