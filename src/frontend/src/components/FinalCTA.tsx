import { Button } from '@/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';

export default function FinalCTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background with Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-rose-gold/30 via-gold/10 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight animate-fade-up">
            <span className="bg-gradient-to-r from-rose-gold via-gold to-rose-gold bg-clip-text text-transparent">
              READY TO TRANSFORM YOUR BODY & CONFIDENCE?
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-white/80 animate-fade-up animation-delay-200">
            Join Nashik's Trusted Female Fitness & Zumba Academy Today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-up animation-delay-400">
            <Button
              size="lg"
              className="btn-primary text-lg px-8 py-6 h-auto"
              onClick={scrollToContact}
            >
              JOIN NOW
            </Button>
            <Button
              size="lg"
              className="btn-whatsapp text-lg px-8 py-6 h-auto"
              asChild
            >
              <a href="https://wa.me/919922555866" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WHATSAPP US
              </a>
            </Button>
            <Button
              size="lg"
              className="btn-primary text-lg px-8 py-6 h-auto"
              asChild
            >
              <a href="tel:+919922555866">
                <Phone className="mr-2 h-5 w-5" />
                CALL US
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
