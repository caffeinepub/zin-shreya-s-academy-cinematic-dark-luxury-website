import { Button } from '@/components/ui/button';
import { Award, Users, Dumbbell, Heart, Shield, Calendar } from 'lucide-react';
import { Phone } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: '7+ Years of Proven Transformations',
  },
  {
    icon: Dumbbell,
    title: 'Certified Weight Management Experts',
  },
  {
    icon: Users,
    title: 'One of the Best Zumba Classes in Nashik',
  },
  {
    icon: Heart,
    title: 'Affordable Female-Focused Packages',
  },
  {
    icon: Shield,
    title: 'Safe & Supportive Women-Only Environment',
  },
  {
    icon: Calendar,
    title: 'Specially Designed Workout Schedules for Females',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-rose-gold/10 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            <span className="bg-gradient-to-r from-rose-gold to-gold bg-clip-text text-transparent">
              WHY CHOOSE US
            </span>
          </h2>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-gold to-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-border">
                  <reason.icon className="w-8 h-8 text-dark" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-rose-gold transition-colors">
                  {reason.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up animation-delay-600">
          <Button
            size="lg"
            className="btn-primary text-lg px-8 py-6 h-auto"
            asChild
          >
            <a href="tel:+919922555866">
              <Phone className="mr-2 h-5 w-5" />
              BOOK YOUR TRIAL SESSION
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
