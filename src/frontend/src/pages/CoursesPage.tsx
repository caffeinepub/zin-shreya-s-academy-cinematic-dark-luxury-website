import { Button } from '@/components/ui/button';
import { Music, TrendingDown, User, Users, Clock, Calendar, Award, Heart } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const courses = [
  {
    icon: Music,
    name: 'Zumba Classes',
    tagline: 'Dance Your Way to Fitness',
    description: 'High-energy, Latin-inspired dance fitness classes that make working out feel like a party. Burn calories, improve coordination, and have fun while getting fit.',
    features: [
      'Calorie-burning cardio workout',
      'Fun, party-like atmosphere',
      'Suitable for all fitness levels',
      'Improves coordination & rhythm',
    ],
    duration: '60 minutes per session',
    frequency: '3-5 times per week',
    benefits: [
      'Burns 500-800 calories per session',
      'Improves cardiovascular health',
      'Boosts mood and energy',
      'Builds confidence through dance',
    ],
  },
  {
    icon: TrendingDown,
    name: 'Weight Management',
    tagline: 'Sustainable Weight Loss',
    description: 'Comprehensive weight management program combining personalized nutrition guidance, targeted workouts, and ongoing support to help you achieve and maintain your ideal weight.',
    features: [
      'Customized meal plans',
      'Regular progress tracking',
      'Nutritional counseling',
      'Sustainable lifestyle changes',
    ],
    duration: '12-week program',
    frequency: 'Weekly check-ins',
    benefits: [
      'Healthy, sustainable weight loss',
      'Improved metabolism',
      'Better eating habits',
      'Long-term results',
    ],
  },
  {
    icon: User,
    name: 'Personal Training',
    tagline: 'One-on-One Attention',
    description: 'Individualized training sessions designed specifically for your goals, fitness level, and preferences. Get expert guidance and motivation in a private, focused environment.',
    features: [
      'Customized workout plans',
      'Form correction & technique',
      'Flexible scheduling',
      'Goal-specific training',
    ],
    duration: '45-60 minutes per session',
    frequency: '2-4 times per week',
    benefits: [
      'Faster results',
      'Personalized attention',
      'Injury prevention',
      'Maximum accountability',
    ],
  },
  {
    icon: Users,
    name: 'Group Classes',
    tagline: 'Train Together, Grow Together',
    description: 'Dynamic group fitness classes that combine the energy of working out with others and the expertise of professional instruction. Perfect for building community while getting fit.',
    features: [
      'Variety of class types',
      'Motivating group energy',
      'Professional instruction',
      'Affordable pricing',
    ],
    duration: '45-60 minutes per class',
    frequency: 'Multiple classes daily',
    benefits: [
      'Community support',
      'Cost-effective',
      'Fun and social',
      'Consistent motivation',
    ],
  },
];

export default function CoursesPage() {
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
                OUR COURSES
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Specialized Programs Designed for Women's Fitness Goals
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <div
                key={index}
                className="glass-card p-8 md:p-10 rounded-3xl space-y-6 group hover:scale-[1.02] transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-gold to-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <course.icon className="w-8 h-8 text-dark" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-rose-gold transition-colors">
                      {course.name}
                    </h3>
                    <p className="text-rose-gold/80 font-semibold">
                      {course.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/70 leading-relaxed">
                  {course.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-rose-gold" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-gold mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-rose-gold/80">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-semibold">Duration</span>
                    </div>
                    <p className="text-white/70 text-sm">{course.duration}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-rose-gold/80">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-semibold">Frequency</span>
                    </div>
                    <p className="text-white/70 text-sm">{course.frequency}</p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rose-gold" />
                    Benefits
                  </h4>
                  <ul className="space-y-2">
                    {course.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
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
                READY TO GET STARTED?
              </span>
            </h2>
            <p className="text-xl text-white/80">
              Choose the program that fits your goals and start your transformation today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="btn-primary text-lg px-8 py-6 h-auto">
                  BOOK A FREE TRIAL
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="btn-outline text-lg px-8 py-6 h-auto"
                asChild
              >
                <a href="https://wa.me/919922555866" target="_blank" rel="noopener noreferrer">
                  WHATSAPP US
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
