import '../sales.css';
import { Helmet } from 'react-helmet-async';
import type { EbookConfig } from '../config/types';
import {
  HeroSection,
  IdentificationSection,
  ImagineSection,
  DiscoverSection,
  InsideBookSection,
  GallerySection,
  ForWhomSection,
  BenefitsSection,
  AuthorSection,
  TestimonialsSection,
  OfferSection,
  FaqSection,
  FinalCTA
} from './sales/SalesSections';

export function LandingPage({ config }: { config: EbookConfig }) {
  return (
    <div className="sales-landing-wrapper" style={{ '--theme-color': config.themeColor } as React.CSSProperties}>
      <Helmet>
        <title>{config.seo.title}</title>
        <meta name="description" content={config.seo.description} />
      </Helmet>

      <HeroSection config={config} />
      <IdentificationSection config={config} />
      <ImagineSection config={config} />
      <DiscoverSection config={config} />
      <InsideBookSection config={config} />
      <GallerySection config={config} />
      <ForWhomSection config={config} />
      <BenefitsSection config={config} />
      <AuthorSection config={config} />
      <TestimonialsSection config={config} />
      <OfferSection config={config} />
      <FaqSection config={config} />
      <FinalCTA config={config} />
    </div>
  );
}
