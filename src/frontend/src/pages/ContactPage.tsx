import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock, MessageCircle, Mail } from 'lucide-react';

export default function ContactPage() {
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
                CONTACT US
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Get in Touch - We're Here to Help You Start Your Fitness Journey
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-up">
              <a
                href="https://wa.me/919922555866"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-8 rounded-3xl group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white group-hover:text-rose-gold transition-colors">
                      WhatsApp Us
                    </h3>
                    <p className="text-white/70">+91 99225 55866</p>
                  </div>
                </div>
              </a>

              <a
                href="tel:+919922555866"
                className="glass-card p-8 rounded-3xl group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-gold to-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-dark" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white group-hover:text-rose-gold transition-colors">
                      Call Us
                    </h3>
                    <p className="text-white/70">+91 99225 55866</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Location & Timings */}
            <div className="glass-card p-8 md:p-12 rounded-3xl space-y-8 animate-fade-up animation-delay-200">
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-gold to-gold flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-dark" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white">Our Location</h3>
                    <p className="text-white/70 text-lg leading-relaxed">
                      Zin Shreya's Academy<br />
                      Nashik, Maharashtra
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-gold to-gold flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-dark" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white">Academy Timings</h3>
                    <div className="text-white/70 text-lg space-y-1">
                      <p>Monday - Saturday: 6:00 AM - 9:00 PM</p>
                      <p>Sunday: 7:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-gold to-gold flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-dark" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white">Phone</h3>
                    <p className="text-white/70 text-lg">+91 99225 55866</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="glass-card p-4 rounded-3xl overflow-hidden animate-fade-up animation-delay-400">
              <div className="aspect-video rounded-2xl overflow-hidden bg-dark-lighter">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59923.89!2d73.7898!3d19.9975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd290b09914b3%3A0x2b1f6d2f1b1f6d2f!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zin Shreya's Academy Location"
                />
              </div>
              <div className="mt-4 text-center">
                <Button
                  variant="outline"
                  className="btn-outline"
                  asChild
                >
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Nashik+Maharashtra"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    GET DIRECTIONS
                  </a>
                </Button>
              </div>
            </div>
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
                BOOK YOUR FREE TRIAL TODAY
              </span>
            </h2>
            <p className="text-xl text-white/80">
              Experience our classes firsthand - no commitment required
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
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
              <Button
                size="lg"
                variant="outline"
                className="btn-outline text-lg px-8 py-6 h-auto"
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
    </div>
  );
}
