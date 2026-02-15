import HeroSection from '../components/HeroSection';
import WelcomeSection from '../components/WelcomeSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesSection from '../components/ServicesSection';
import FeaturesSection from '../components/FeaturesSection';
import LocationSection from '../components/LocationSection';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <WhyChooseUs />
      <ServicesSection />
      <FeaturesSection />
      <LocationSection />
      <FinalCTA />
    </>
  );
}
