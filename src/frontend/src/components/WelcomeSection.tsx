import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export default function WelcomeSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Title */}
          <div className="space-y-4 animate-fade-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-rose-gold to-gold bg-clip-text text-transparent">
                WELCOME TO ZIN SHREYA'S ACADEMY
              </span>
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-gold" />
              <p className="text-xl md:text-2xl text-gold font-semibold">
                Empowering Women Since 7+ Years
              </p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-gold" />
            </div>
          </div>

          {/* Content */}
          <p className="text-lg md:text-xl text-white/80 leading-relaxed animate-fade-up animation-delay-200">
            Zin Shreya's Academy is built to empower women through structured fitness programs designed exclusively for females. With certified trainers and years of expertise in weight management, we focus on sustainable fat loss, improved stamina, and confidence building in a safe and supportive environment.
          </p>

          {/* CTA */}
          <div className="pt-6 animate-fade-up animation-delay-400">
            <Button
              size="lg"
              className="btn-primary text-lg px-8 py-6 h-auto"
              asChild
            >
              <a href="tel:+919922555866">
                <Phone className="mr-2 h-5 w-5" />
                CALL NOW
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
