import '../sales.css';
import { Helmet } from 'react-helmet-async';
import type { EbookConfig } from '../config/types';
import {
  HeroSection,
  ManifestoSection,
  ExperienceSection,
  DiscoverSection,
  InsideBookSection,
  QuoteSection,
  GallerySection,
  ForWhomSection,
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
      <ManifestoSection config={config} />
      <ExperienceSection config={config} />
      <DiscoverSection config={config} />
      <InsideBookSection config={config} />
      <QuoteSection config={config} />
      <GallerySection config={config} />
      <ForWhomSection config={config} />
      <AuthorSection config={config} />
      <TestimonialsSection config={config} />
      <OfferSection config={config} />
      <FaqSection config={config} />
      <FinalCTA config={config} />
    </div>
  );
}
