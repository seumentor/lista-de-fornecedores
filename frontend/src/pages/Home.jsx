import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import NichesSection from '../components/NichesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BonusSection from '../components/BonusSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import { mockData } from '../data/mockData';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulating data fetch
    setData(mockData);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-2xl">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <HeroSection data={data.hero} />
      <BenefitsSection data={data.benefits} />
      <NichesSection data={data.niches} />
      <TestimonialsSection data={data.testimonials} />
      <BonusSection data={data.bonus} />
      <PricingSection data={data.pricing} />
      <FAQSection />
      <Footer data={data.footer} />
    </div>
  );
};

export default Home;
