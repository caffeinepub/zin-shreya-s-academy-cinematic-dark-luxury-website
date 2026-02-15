import { Button } from '@/components/ui/button';
import { MapPin, Phone, Navigation } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            <span className="bg-gradient-to-r from-rose-gold to-gold bg-clip-text text-transparent">
              VISIT US
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-up">
            <div className="glass-card p-8 rounded-3xl space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-gold to-gold flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Address</h3>
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
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
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
          </div>

          {/* Map */}
          <div className="animate-fade-up animation-delay-200">
            <div className="glass-card p-4 rounded-3xl h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0!2d73.78!3d20.00!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAwJzAwLjAiTiA3M8KwNDYnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1.5rem', minHeight: '400px' }}
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
  );
}
