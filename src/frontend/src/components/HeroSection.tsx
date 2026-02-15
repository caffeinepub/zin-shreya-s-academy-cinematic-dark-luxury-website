import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 bg-gradient-radial from-rose-gold/20 via-transparent to-transparent opacity-40" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
        
        {/* Spotlight Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-rose-gold/30 via-gold/10 to-transparent blur-3xl animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-up">
          {/* Brand Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-rose-gold via-gold to-rose-gold bg-clip-text text-transparent animate-shimmer">
              ZIN SHREYA'S ACADEMY
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/90 animate-fade-up animation-delay-200">
            7+ Years Transforming Women With Confidence & Strength
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto animate-fade-up animation-delay-400">
            Nashik's trusted destination for Zumba, Weight Management & Female Fitness Training.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-up animation-delay-600">
            <Button
              size="lg"
              className="btn-primary text-lg px-8 py-6 h-auto"
              onClick={() => scrollToSection('contact')}
            >
              JOIN A FREE TRIAL
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="btn-outline text-lg px-8 py-6 h-auto"
              onClick={() => scrollToSection('services')}
            >
              VIEW PACKAGES
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
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}
