export function FooterSection({ config }: { config: any }) {
  const { footer } = config;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a href={footer.termsLink}>Termos de Uso</a>
          <a href={footer.privacyLink}>Pol�tica de Privacidade</a>
          <a href={footer.contactLink}>Contato</a>
        </div>
        <p className="footer-disclaimer">{footer.disclaimer}</p>
        <p className="footer-copy">{footer.copyright}</p>
      </div>
    </footer>
  );
}
