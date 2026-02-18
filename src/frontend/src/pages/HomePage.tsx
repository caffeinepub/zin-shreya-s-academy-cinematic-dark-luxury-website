import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import DeferredSection from '../components/DeferredSection';
import { perfTime, perfTimeEnd } from '../utils/perf';

export default function HomePage() {
  useEffect(() => {
    perfTime('HomePage:mount');
    return () => {
      perfTimeEnd('HomePage:mount');
    };
  }, []);

  return (
    <>
      {/* Above-the-fold: Load immediately */}
      <HeroSection />
      
      {/* Below-the-fold: Lazy load when near viewport */}
      <DeferredSection
        loader={() => {
          perfTime('HomePage:load-WelcomeSection');
          return import('../components/WelcomeSection').then((mod) => {
            perfTimeEnd('HomePage:load-WelcomeSection');
            return mod;
          });
        }}
        rootMargin="600px"
      />
      
      <DeferredSection
        loader={() => {
          perfTime('HomePage:load-WhyChooseUs');
          return import('../components/WhyChooseUs').then((mod) => {
            perfTimeEnd('HomePage:load-WhyChooseUs');
            return mod;
          });
        }}
        rootMargin="600px"
      />
      
      <DeferredSection
        loader={() => {
          perfTime('HomePage:load-ServicesSection');
          return import('../components/ServicesSection').then((mod) => {
            perfTimeEnd('HomePage:load-ServicesSection');
            return mod;
          });
        }}
        rootMargin="600px"
      />
      
      <DeferredSection
        loader={() => {
          perfTime('HomePage:load-FeaturesSection');
          return import('../components/FeaturesSection').then((mod) => {
            perfTimeEnd('HomePage:load-FeaturesSection');
            return mod;
          });
        }}
        rootMargin="600px"
      />
      
      <DeferredSection
        loader={() => {
          perfTime('HomePage:load-LocationSection');
          return import('../components/LocationSection').then((mod) => {
            perfTimeEnd('HomePage:load-LocationSection');
            return mod;
          });
        }}
        rootMargin="600px"
      />
      
      <DeferredSection
        loader={() => {
          perfTime('HomePage:load-FinalCTA');
          return import('../components/FinalCTA').then((mod) => {
            perfTimeEnd('HomePage:load-FinalCTA');
            return mod;
          });
        }}
        rootMargin="600px"
      />
    </>
  );
}
