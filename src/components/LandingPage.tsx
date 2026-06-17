import { Helmet } from 'react-helmet-async';
import { HeroSection } from './HeroSection';
import { AboutBookSection } from './AboutBookSection';
import { FeaturesSection } from './FeaturesSection';
import { SummarySection } from './SummarySection';
import { IsForYouSection } from './IsForYouSection';
import { AuthorSection } from './AuthorSection';
import { BonusSection } from './BonusSection';
import { OfferSection } from './OfferSection';
import { TestimonialsSection } from './TestimonialsSection';
import { FAQSection } from './FAQSection';
import { CrossSellSection } from './CrossSellSection';
import { QuoteSection } from './QuoteSection';
import { NetflixShelfSection } from './NetflixShelfSection';

export function LandingPage({ config }: { config: any }) {
  if (!config) return <div style={{textAlign:'center', padding: '100px'}}>Página não encontrada</div>;
  return (
    <div>
      <Helmet>
        <title>{config.hero?.title || 'Ebook'} | Editora Graça</title>
        <meta name="description" content={config.hero?.description || ''} />
      </Helmet>
      <HeroSection config={config} />
      <NetflixShelfSection />
      <AboutBookSection config={config} />
      <FeaturesSection config={config} />
      <SummarySection config={config} />
      <IsForYouSection config={config} />
      <AuthorSection config={config} />
      <BonusSection config={config} />
      <OfferSection config={config} />
      <TestimonialsSection config={config} />
      <FAQSection config={config} />
      <CrossSellSection />
      <QuoteSection config={config} />
    </div>
  );
}
