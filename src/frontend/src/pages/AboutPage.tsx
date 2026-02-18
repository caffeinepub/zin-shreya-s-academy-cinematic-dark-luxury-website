import { Button } from '@/components/ui/button';
import { Award, Heart, Users, Target, TrendingUp, Shield } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const values = [
  {
    icon: Heart,
    title: 'Empowerment',
    description: 'We believe in empowering women to take control of their health and fitness journey.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building a supportive community where women motivate and inspire each other.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Focused on delivering real, measurable results through proven methods.',
  },
  {
    icon: Shield,
    title: 'Safe Environment',
    description: 'Providing a comfortable, women-only space for training and growth.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-dark/70">
          <div className="absolute inset-0 bg-gradient-radial from-rose-gold/10 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-rose-gold/15 via-gold/5 to-transparent blur-3xl animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-rose-gold via-gold to-rose-gold bg-clip-text text-transparent">
                ABOUT US
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Nashik's Premier Female Fitness Academy with 7+ Years of Transforming Lives
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="glass-card p-8 md:p-12 rounded-3xl space-y-6 animate-fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-gold to-gold flex items-center justify-center">
                  <Award className="w-8 h-8 text-dark" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  OUR <span className="text-rose-gold">STORY</span>
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Founded with a vision to create a safe, empowering space for women in Nashik, ZIN SHREYA FITNESS ACADEMY has been transforming lives for over 7 years. What started as a passion for fitness and dance has grown into one of Nashik's most trusted female fitness destinations.
              </p>
              
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Our founder, a certified Zumba instructor and weight management expert, recognized the need for a women-focused fitness environment where females could train comfortably, build confidence, and achieve their health goals without judgment or intimidation.
              </p>
              
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Today, we're proud to have helped hundreds of women achieve their fitness goals through our specialized programs in Zumba, weight management, and personal training. Our success is measured not just in pounds lost or muscles gained, but in the confidence, strength, and joy our members discover within themselves.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-up animation-delay-200">
              <div className="glass-card p-8 rounded-3xl space-y-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-gold to-gold flex items-center justify-center">
                  <Target className="w-7 h-7 text-dark" />
                </div>
                <h3 className="text-2xl font-black text-white">OUR MISSION</h3>
                <p className="text-white/70 leading-relaxed">
                  To empower women through fitness by providing expert guidance, supportive community, and proven programs that deliver sustainable results and lasting confidence.
                </p>
              </div>

              <div className="glass-card p-8 rounded-3xl space-y-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-gold to-gold flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-dark" />
                </div>
                <h3 className="text-2xl font-black text-white">OUR VISION</h3>
                <p className="text-white/70 leading-relaxed">
                  To be Nashik's leading female fitness academy, recognized for transforming lives and setting the standard for women's health and wellness programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark/80" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-radial from-gold/10 to-transparent blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              <span className="bg-gradient-to-r from-rose-gold to-gold bg-clip-text text-transparent">
                OUR VALUES
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card p-8 rounded-3xl space-y-4 group hover:scale-105 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-gold to-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-dark" />
                </div>
                <h3 className="text-xl font-black text-white group-hover:text-rose-gold transition-colors">
                  {value.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark/80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-rose-gold/15 via-gold/5 to-transparent blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-rose-gold to-gold bg-clip-text text-transparent">
                READY TO START YOUR TRANSFORMATION?
              </span>
            </h2>
            <p className="text-xl text-white/80">
              Join ZIN SHREYA FITNESS ACADEMY today and become part of our empowering community
            </p>
            <div className="pt-4">
              <Button
                size="lg"
                className="btn-primary text-lg px-8 py-6 h-auto"
                asChild
              >
                <Link to="/contact">
                  BOOK YOUR FREE TRIAL
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
