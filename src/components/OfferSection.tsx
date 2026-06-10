import { bookConfig } from '../config/bookConfig';

export function OfferSection() {
  const { offer } = bookConfig;
  return (
    <section className="section-padding offer-section">
      <div className="container">
        <div className="offer-box">
          <h2>Adquira agora mesmo</h2>
          <p className="offer-old-price">De {offer.oldPrice}</p>
          <div className="offer-price">{offer.price}</div>
          <p className="offer-methods">Pagamento via {offer.paymentMethods}</p>
          <a href={offer.checkoutLink} className="btn btn-primary" style={{width: '100%'}}>Quero Come�ar a Leitura</a>
          <div className="offer-guarantee">
            <span>?? Ambiente seguro</span>
            <span>�</span>
            <span>Garantia de {offer.guaranteeDays} dias</span>
          </div>
        </div>
      </div>
    </section>
  );
}
