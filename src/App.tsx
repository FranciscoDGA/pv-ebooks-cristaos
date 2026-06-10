import './index.css';
import './App.css';

import { HeroSection } from './components/HeroSection';
import { AboutBookSection } from './components/AboutBookSection';
import { FeaturesSection } from './components/FeaturesSection';
import { SummarySection } from './components/SummarySection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { QuoteSection } from './components/QuoteSection';
import { AuthorSection } from './components/AuthorSection';
import { BonusSection } from './components/BonusSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { OfferSection } from './components/OfferSection';
import { FAQSection } from './components/FAQSection';
import { FooterSection } from './components/FooterSection';

function App() {
  return (
    <>
      <HeroSection />
      <AboutBookSection />
      <FeaturesSection />
      <SummarySection />
      <TargetAudienceSection />
      <QuoteSection />
      <AuthorSection />
      <BonusSection />
      <TestimonialsSection />
      <OfferSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}

export default App;
