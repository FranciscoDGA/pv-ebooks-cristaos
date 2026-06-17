import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getEbook } from '../data/ebooks';
import { EbookHero } from '../components/ebook/EbookHero';
import { ProblemSection } from '../components/ebook/ProblemSection';
import { BenefitsSection } from '../components/ebook/BenefitsSection';
import { InsideBookSection } from '../components/ebook/InsideBookSection';
import { ForWhomSection } from '../components/ebook/ForWhomSection';
import { MockupSection } from '../components/ebook/MockupSection';
import { EbookAuthorSection } from '../components/ebook/EbookAuthorSection';
import { EbookTestimonialsSection } from '../components/ebook/EbookTestimonialsSection';
import { EbookBonusSection } from '../components/ebook/EbookBonusSection';
import { EbookOfferSection } from '../components/ebook/EbookOfferSection';
import { EbookFaqSection } from '../components/ebook/EbookFaqSection';
import { FinalCTASection } from '../components/ebook/FinalCTASection';

export function EbookSalesPage() {
  const { slug } = useParams<{ slug: string }>();
  const ebook = getEbook(slug ?? '');

  if (!ebook) return <Navigate to="/" replace />;

  return (
    <>
      <Helmet>
        <title>{ebook.seo.title}</title>
        <meta name="description" content={ebook.seo.description} />
        <meta property="og:title" content={ebook.seo.title} />
        <meta property="og:description" content={ebook.seo.description} />
        <meta property="og:image" content={ebook.mockup} />
        <meta property="og:type" content="product" />
      </Helmet>

      <div style={{ background: '#080808', minHeight: '100vh' }}>
        <EbookHero ebook={ebook} />
        <ProblemSection ebook={ebook} />
        <BenefitsSection ebook={ebook} />
        <InsideBookSection ebook={ebook} />
        <ForWhomSection ebook={ebook} />
        <EbookTestimonialsSection ebook={ebook} />
        <MockupSection ebook={ebook} />
        <EbookAuthorSection ebook={ebook} />
        <EbookBonusSection ebook={ebook} />
        <EbookOfferSection ebook={ebook} />
        <EbookFaqSection ebook={ebook} />
        <FinalCTASection ebook={ebook} />
      </div>
    </>
  );
}
