import { Button } from '@/components/ui/button';
import { MapPin, Phone, Navigation, MessageCircle, Clock, Mail } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    value: '+91 9922555866',
    action: 'tel:+919922555866',
    description: 'Mon-Sat: 6:00 AM - 9:00 PM',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: 'Chat with us',
    action: 'https://wa.me/919922555866',
    description: 'Quick response guaranteed',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Nath Seeta Yeolekar Complex',
    action: 'https://www.google.com/maps/search/?api=1&query=Nath+Seeta+Yeolekar+Complex+Nashik',
    description: 'College Rd, near Zudio, Ramdas Colony, Nashik',
  },
];

const timings = [
  { day: 'Monday - Friday', time: '6:00 AM - 9:00 PM' },
  { day: 'Saturday', time: '6:00 AM - 8:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

export default function ContactPage() {
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
                CONTACT US
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Get in touch with us to start your fitness journey today
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                target={method.action.startsWith('http') ? '_blank' : undefined}
                rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-card p-8 rounded-3xl group hover:scale-105 transition-all duration-300 animate-fade-up block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-gold to-gold flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 glow-border">
                    <method.icon className="w-8 h-8 text-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                    <p className="text-rose-gold font-semibold text-lg">{method.value}</p>
                    <p className="text-white/60 text-sm mt-2">{method.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Location & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Info & Timings */}
            <div className="space-y-8 animate-fade-up animation-delay-400">
              <div className="glass-card p-8 rounded-3xl space-y-6">
                <h3 className="text-2xl font-black text-white mb-6">
                  <span className="bg-gradient-to-r from-rose-gold to-gold bg-clip-text text-transparent">
                    VISIT OUR ACADEMY
                  </span>
                </h3>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-gold to-gold flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-dark" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Address</h4>
                    <p className="text-white/70 leading-relaxed">
                      Nath Seeta Yeolekar Complex, College Rd, near Zudio, Ramdas Colony, Nashik, Maharashtra 422005
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-gold to-gold flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-dark" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Phone</h4>
                    <a href="tel:+919922555866" className="text-white/70 hover:text-rose-gold transition-colors text-lg">
                      +91 9922555866
                    </a>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="btn-primary text-lg px-8 py-6 h-auto w-full"
                  asChild
                >
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Nath+Seeta+Yeolekar+Complex+Nashik"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="mr-2 h-5 w-5" />
                    GET DIRECTIONS
                  </a>
                </Button>
              </div>

              {/* Timings */}
              <div className="glass-card p-8 rounded-3xl space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-gold to-gold flex items-center justify-center">
                    <Clock className="w-6 h-6 text-dark" />
                  </div>
                  <h3 className="text-2xl font-black text-white">TIMINGS</h3>
                </div>
                
                <div className="space-y-4">
                  {timings.map((timing, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                      <span className="text-white/80 font-semibold">{timing.day}</span>
                      <span className="text-rose-gold font-bold">{timing.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="animate-fade-up animation-delay-600">
              <div className="glass-card p-4 rounded-3xl h-full min-h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0!2d73.78!3d20.00!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAwJzAwLjAiTiA3M8KwNDYnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1.5rem', minHeight: '600px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="map-dark"
                />
              </div>
            </div>
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
                READY TO TRANSFORM YOUR LIFE?
              </span>
            </h2>
            <p className="text-xl text-white/80">
              Book your free trial session and take the first step towards a healthier, more confident you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
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
      </section>
    </div>
  );
}
