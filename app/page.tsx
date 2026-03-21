import Logo from "./components/Logo";
import Hero from "./components/Hero";
import PainSection from "./components/PainSection";
import SolutionSection from "./components/SolutionSection";
import WhatsInside from "./components/WhatsInside";
import FailedIndustry from "./components/FailedIndustry";
import ComparisonTable from "./components/ComparisonTable";
import SocialProof from "./components/SocialProof";
import CaseStudies from "./components/CaseStudies";
import CalorieCalculator from "./components/CalorieCalculator";
import IsThisForYou from "./components/IsThisForYou";
import FAQ from "./components/FAQ";
import PriceSection from "./components/PriceSection";
import WhoIsSection from "./components/WhoIsSection";
import CompetitionProof from "./components/CompetitionProof";
import CoachSection from "./components/CoachSection";
import FinalCTA from "./components/FinalCTA";
import CoachingUpsell from "./components/CoachingUpsell";
import Footer from "./components/Footer";
import VslBubble from "./components/VslBubble";
import ExitIntentPopup from "./components/ExitIntentPopup";
import StickyMobileCTA from "./components/StickyMobileCTA";

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Lean & Jacked Fat Loss Blueprint',
    image: 'https://leanjacked.in/og-image.jpg',
    description: 'The exact fat loss system behind 100+ Indian transformations. Meal plans, 8-week training, bloodwork guide.',
    offers: {
      '@type': 'Offer',
      price: '999',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: 'https://leanjacked.in',
    },
    brand: {
      '@type': 'Brand',
      name: 'Lean & Jacked',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '124',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Logo />
      <Hero />

      <div className="divider" />

      <FailedIndustry />
      <PainSection />
      <SolutionSection />

      <div className="divider" />

      <ComparisonTable />
      <WhatsInside />
      <SocialProof />

      {/* In-depth case studies  between social proof and qualifying questions */}
      <CaseStudies />

      <div className="divider" />

      {/* Free calculator  qualifies & warms up prospect */}
      <CalorieCalculator />

      <IsThisForYou />
      <FAQ />
      <PriceSection />
      <WhoIsSection />
      <CompetitionProof />
      <CoachSection />
      <FinalCTA />
      <CoachingUpsell />
      <Footer />

      {/* Global conversion boosters */}
      <VslBubble />
      <ExitIntentPopup />
      <StickyMobileCTA />
      
      {/* Spacer so sticky CTA doesn't overlap footer content */}
      <div className="sticky-spacer" />
    </>
  );
}
