import { Link, useLocation } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { path: '/', label: 'HOME' },
  { path: '/about', label: 'ABOUT US' },
  { path: '/courses', label: 'COURSES' },
  { path: '/contact', label: 'CONTACT US' },
];

export default function SiteHeader() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark/95 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-rose-gold to-gold bg-clip-text text-transparent">
              ZIN SHREYA FITNESS ACADEMY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path}>
                  <Button
                    variant="ghost"
                    className={`text-sm font-bold transition-all ${
                      isActive
                        ? 'text-rose-gold bg-rose-gold/10 border-b-2 border-rose-gold rounded-b-none'
                        : 'text-white/70 hover:text-rose-gold hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-sm font-bold ${
                        isActive
                          ? 'text-rose-gold bg-rose-gold/10 border-l-4 border-rose-gold rounded-l-none'
                          : 'text-white/70 hover:text-rose-gold hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
