import { Button } from '@/components/ui/button';
import { Music, TrendingDown, User, Users } from 'lucide-react';

const services = [
  {
    icon: Music,
    name: 'Zumba Classes',
    description: 'High-energy calorie-burning sessions designed for fun and fat loss.',
  },
  {
    icon: TrendingDown,
    name: 'Weight Management Programs',
    description: 'Structured fat loss programs supervised by certified professionals.',
  },
  {
    icon: User,
    name: 'Personal Training for Females',
    description: 'Customized fitness plans tailored to individual goals.',
  },
  {
    icon: Users,
    name: 'Female Group Classes',
    description: 'Motivating group environment focused on empowerment and results.',
  },
];

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            <span className="bg-gradient-to-r from-rose-gold to-gold bg-clip-text text-transparent">
              OUR SERVICES
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-3xl group hover:scale-105 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col space-y-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-gold to-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-border">
                  <service.icon className="w-10 h-10 text-dark" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-rose-gold transition-colors">
                  {service.name}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up animation-delay-400">
          <Button
            size="lg"
            className="btn-primary text-lg px-8 py-6 h-auto"
            onClick={scrollToContact}
          >
            VIEW ALL PROGRAMS
          </Button>
        </div>
      </div>
    </section>
  );
}
