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
  },
  {
    icon: TrendingDown,
    name: 'Weight Management Program',
    tagline: 'Sustainable Fat Loss Solutions',
    description: 'Comprehensive weight management program combining structured workouts, nutrition guidance, and lifestyle coaching for sustainable fat loss and improved health.',
    features: [
      'Personalized workout plans',
      'Nutrition guidance & meal planning',
      'Progress tracking & monitoring',
      'Sustainable lifestyle changes',
    ],
    duration: '45-60 minutes per session',
    frequency: '4-6 times per week',
  },
  {
    icon: User,
    name: 'Personal Training',
    tagline: 'One-on-One Expert Guidance',
    description: 'Customized personal training sessions tailored to your specific goals, fitness level, and preferences. Get individual attention and accelerated results.',
    features: [
      'Customized fitness plans',
      'One-on-one attention',
      'Flexible scheduling',
      'Goal-specific training',
    ],
    duration: '45-60 minutes per session',
    frequency: 'Flexible schedule',
  },
  {
    icon: Users,
    name: 'Group Fitness Classes',
    tagline: 'Train Together, Grow Together',
    description: 'Motivating group fitness classes that combine strength training, cardio, and flexibility work in a supportive, women-only environment.',
    features: [
      'Supportive community atmosphere',
      'Variety of workout styles',
      'Motivating group energy',
      'Affordable pricing',
    ],
    duration: '45-60 minutes per session',
    frequency: '3-5 times per week',
  },
];

const benefits = [
  { icon: Award, text: 'Certified Expert Trainers' },
  { icon: Heart, text: 'Women-Only Safe Environment' },
  { icon: Clock, text: 'Flexible Timing Options' },
  { icon: Calendar, text: 'Trial Sessions Available' },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-dark">
          <div className="absolute inset-0 bg-gradient-radial from-rose-gold/20 via-transparent to-transparent opacity-40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-rose-gold/30 via-gold/10 to-transparent blur-3xl animate-pulse-slow" />
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
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="space-y-12 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <div
                key={index}
                className="glass-card p-8 md:p-12 rounded-3xl group hover:scale-[1.02] transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left: Icon & Title */}
                  <div className="space-y-4">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-gold to-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-border">
                      <course.icon className="w-10 h-10 text-dark" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-rose-gold transition-colors">
                        {course.name}
                      </h3>
                      <p className="text-gold font-semibold mt-2">{course.tagline}</p>
                    </div>
                  </div>

                  {/* Middle: Description & Features */}
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-lg text-white/80 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-gold to-gold" />
                          <span className="text-white/70">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <Clock className="w-4 h-4 text-rose-gold" />
                        <span className="text-sm text-white/70">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <Calendar className="w-4 h-4 text-gold" />
                        <span className="text-sm text-white/70">{course.frequency}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-radial from-gold/20 to-transparent blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              <span className="bg-gradient-to-r from-rose-gold to-gold bg-clip-text text-transparent">
                WHY CHOOSE OUR PROGRAMS
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-gold to-gold flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-dark" />
                </div>
                <p className="text-white font-semibold">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-rose-gold/30 via-gold/10 to-transparent blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-rose-gold to-gold bg-clip-text text-transparent">
                READY TO GET STARTED?
              </span>
            </h2>
            <p className="text-xl text-white/80">
              Book your free trial session today and experience the difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="btn-primary text-lg px-8 py-6 h-auto">
                  BOOK FREE TRIAL
                </Button>
              </Link>
              <Button
                size="lg"
                className="btn-whatsapp text-lg px-8 py-6 h-auto"
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
