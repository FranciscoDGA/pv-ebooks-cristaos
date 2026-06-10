import { Helmet } from 'react-helmet-async';
import { CollectionSection } from './CollectionSection';
import { HeroSection } from './HeroSection';
import { QuoteSection } from './QuoteSection';
import { AmazonStyleSection } from './AmazonStyleSection';
import { AboutBookSection } from './AboutBookSection';
import { BookPreviewSection } from './BookPreviewSection';
import { IsForYouSection } from './IsForYouSection';
import { FeaturesSection } from './FeaturesSection';
import { SummarySection } from './SummarySection';
import { TargetAudienceSection } from './TargetAudienceSection';
import { AuthorSection } from './AuthorSection';
import { BonusSection } from './BonusSection';
import { TestimonialsSection } from './TestimonialsSection';
import { OfferSection } from './OfferSection';
import { FAQSection } from './FAQSection';
import { FooterSection } from './FooterSection';
import { CrossSellSection } from './CrossSellSection';

export function LandingPage({ config }: { config: any }) {
  if (!config) return <div style={{textAlign:'center', padding: '100px'}}>Página não encontrada</div>;

  return (
    <div className="font-sans">
      <Helmet>
        <title>{config.hero?.title || 'Ebook'} | O Chamado da Graça</title>
        <meta name="description" content={config.hero?.subtitle || ''} />
      </Helmet>
      <CollectionSection config={config} />
      <HeroSection config={config} />
      <QuoteSection config={config} />
      <AmazonStyleSection />
      <AboutBookSection config={config} />
      <BookPreviewSection config={config} />
      <IsForYouSection config={config} />
      <FeaturesSection config={config} />
      <SummarySection config={config} />
      <TargetAudienceSection config={config} />
      <AuthorSection config={config} />
      <BonusSection config={config} />
      <TestimonialsSection config={config} />
      <OfferSection config={config} />
      <FAQSection config={config} />
      <CrossSellSection />
      <FooterSection config={config} />
    </div>
  );
}
