import { Shield, LineChart, Music, Smile, Clock, DollarSign } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Safe Women-Only Training Environment' },
  { icon: LineChart, title: 'Scientifically Structured Weight Loss Plans' },
  { icon: Music, title: 'Energetic Zumba Sessions' },
  { icon: Smile, title: 'Confidence Building Through Fitness' },
  { icon: Clock, title: 'Flexible Timings' },
  { icon: DollarSign, title: 'Affordable Packages' },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            <span className="bg-gradient-to-r from-rose-gold to-gold bg-clip-text text-transparent">
              FEATURES & BENEFITS
            </span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flip-card group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 glow-border">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-gold to-gold flex items-center justify-center">
                    <feature.icon className="w-10 h-10 text-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>

                {/* Back */}
                <div className="flip-card-back glass-card p-8 rounded-2xl flex items-center justify-center text-center glow-border bg-gradient-to-br from-rose-gold/20 to-gold/20">
                  <h3 className="text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
