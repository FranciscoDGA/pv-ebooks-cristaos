import { bookConfig } from '../config/bookConfig';

export function FooterSection() {
  const { footer } = bookConfig;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a href={footer.termsLink}>Termos de Uso</a>
          <a href={footer.privacyLink}>Política de Privacidade</a>
          <a href={footer.contactLink}>Contato</a>
        </div>
        <p className="footer-disclaimer">{footer.disclaimer}</p>
        <p className="footer-copy">{footer.copyright}</p>
      </div>
    </footer>
  );
}
