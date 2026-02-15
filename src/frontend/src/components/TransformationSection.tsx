import { Button } from '@/components/ui/button';
import { MessageCircle, Zap, TrendingDown, Activity, Smile, Heart } from 'lucide-react';

const benefits = [
  { icon: Zap, text: 'Boost Stamina & Metabolism' },
  { icon: TrendingDown, text: 'Reduce Stubborn Fat' },
  { icon: Activity, text: 'Improve Posture & Flexibility' },
  { icon: Smile, text: 'Increase Self-Confidence' },
  { icon: Heart, text: 'Build Long-Term Healthy Habits' },
];

export default function TransformationSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-gold/20 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Before/After Placeholder */}
          <div className="animate-fade-up">
            <div className="glass-card p-8 rounded-3xl glow-border">
              <div className="aspect-square bg-gradient-to-br from-rose-gold/20 to-gold/20 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">💪</div>
                  <p className="text-2xl font-bold text-white">Your Transformation</p>
                  <p className="text-white/70">Starts Here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8 animate-fade-up animation-delay-200">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-rose-gold to-gold bg-clip-text text-transparent">
                REAL RESULTS. REAL CONFIDENCE.
              </span>
            </h2>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-gold to-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-dark" />
                  </div>
                  <p className="text-lg font-semibold text-white group-hover:text-rose-gold transition-colors">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="btn-whatsapp text-lg px-8 py-6 h-auto"
              asChild
            >
              <a href="https://wa.me/919922555866" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                START YOUR TRANSFORMATION
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
