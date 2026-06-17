import '../sales.css';
import { Helmet } from 'react-helmet-async';
import type { EbookConfig } from '../config/types';
import {
  EbookHero,
  ProblemSection,
  PromiseSection,
  DiscoverSection,
  ForWhomSection,
  InsideBookSection,
  MockupPreviewSection,
  AuthorSection,
  OfferSection,
  BonusBenefitsSection,
  TestimonialsSection,
  FaqSection,
  FinalCTA,
  FooterSection
} from './sales/SalesSections';

export function LandingPage({ config }: { config: EbookConfig }) {
  if (!config) return <div style={{textAlign:'center', padding: '100px'}}>Página não encontrada</div>;

  return (
    <div className="font-sans sales-landing-wrapper">
      <Helmet>
        <title>{config.seo.title}</title>
        <meta name="description" content={config.seo.description} />
      </Helmet>
      
      <EbookHero config={config} />
      <ProblemSection config={config} />
      <PromiseSection config={config} />
      <DiscoverSection config={config} />
      <ForWhomSection config={config} />
      <InsideBookSection config={config} />
      <MockupPreviewSection config={config} />
      <AuthorSection config={config} />
      <OfferSection config={config} />
      <BonusBenefitsSection config={config} />
      <TestimonialsSection config={config} />
      <FaqSection config={config} />
      <FinalCTA config={config} />
      <FooterSection config={config} />
    </div>
  );
}
