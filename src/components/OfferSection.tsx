
export function OfferSection({ config }: { config: any }) {
  const { offer } = config;
  return (
    <section id="offer" className="offer-section">
      <div className="container">
        <div className="offer-box">
          <h2 className="offer-title">Adquira agora</h2>
          <div className="price-container">
            <span className="old-price">{offer.oldPrice}</span>
            <span className="new-price">{offer.price}</span>
            <span className="installments">ou 3x R$6,63</span>
          </div>
          <ul className="offer-guarantees">
            <li><span className="check-icon">✓</span> Download imediato</li>
            <li><span className="check-icon">✓</span> Acesso vitalício</li>
            <li><span className="check-icon">✓</span> Leitura no celular, tablet e computador</li>
          </ul>
          <a href={offer.checkoutLink} className="buy-button-large">Quero Começar a Leitura</a>
        </div>
      </div>
    </section>
  );
}
