import { HeroSection } from './HeroSection';
import { AboutBookSection } from './AboutBookSection';
import { FeaturesSection } from './FeaturesSection';
import { SummarySection } from './SummarySection';
import { TargetAudienceSection } from './TargetAudienceSection';
import { QuoteSection } from './QuoteSection';
import { AuthorSection } from './AuthorSection';
import { BonusSection } from './BonusSection';
import { TestimonialsSection } from './TestimonialsSection';
import { OfferSection } from './OfferSection';
import { FAQSection } from './FAQSection';
import { FooterSection } from './FooterSection';

export function LandingPage({ config }: { config: any }) {
  if (!config) return <div style={{textAlign:'center', padding: '100px'}}>Página não encontrada</div>;

  return (
    <>
      <HeroSection config={config} />
      <AboutBookSection config={config} />
      <FeaturesSection config={config} />
      <SummarySection config={config} />
      <TargetAudienceSection config={config} />
      <QuoteSection config={config} />
      <AuthorSection config={config} />
      <BonusSection config={config} />
      <TestimonialsSection config={config} />
      <OfferSection config={config} />
      <FAQSection config={config} />
      <FooterSection config={config} />
    </>
  );
}
