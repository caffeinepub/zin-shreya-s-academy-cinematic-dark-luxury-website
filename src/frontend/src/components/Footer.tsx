import { Heart } from 'lucide-react';
import { SiInstagram, SiGoogle } from 'react-icons/si';
import { Link } from '@tanstack/react-router';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'zin-shreya-fitness-academy';

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Courses', path: '/courses' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="relative py-16 border-t border-white/10 bg-dark/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-rose-gold tracking-wide">
              ZIN SHREYA FITNESS ACADEMY
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Transform your fitness journey with expert-led Zumba classes, personalized training, and comprehensive weight management programs in Nashik.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white tracking-wide">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white/70 hover:text-rose-gold transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white tracking-wide">
              Get In Touch
            </h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>Nashik, Maharashtra</p>
              <p>Phone: +91 98765 43210</p>
            </div>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/zumbawithshreya?igsh=NmhpZDN3cjFjYXZk&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-rose-gold transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://share.google/zsIg6vFhrzd3Z589p"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-rose-gold transition-colors"
                aria-label="Google Business"
              >
                <SiGoogle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-white/60 text-sm">
              © {currentYear} ZIN SHREYA FITNESS ACADEMY. All rights reserved.
            </p>
            <p className="text-white/60 text-sm flex items-center justify-center gap-2">
              Built with <Heart className="w-4 h-4 text-rose-gold fill-rose-gold" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-gold hover:text-gold transition-colors font-semibold"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
