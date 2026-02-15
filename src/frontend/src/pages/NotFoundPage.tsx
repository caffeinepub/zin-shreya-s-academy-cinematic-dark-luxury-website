import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <section className="relative py-24 overflow-hidden w-full">
        <div className="absolute inset-0 bg-dark">
          <div className="absolute inset-0 bg-gradient-radial from-rose-gold/20 via-transparent to-transparent opacity-40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-rose-gold/30 via-gold/10 to-transparent blur-3xl animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-8xl md:text-9xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-rose-gold via-gold to-rose-gold bg-clip-text text-transparent">
                  404
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                PAGE NOT FOUND
              </h2>
            </div>

            <p className="text-xl text-white/70 leading-relaxed">
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/">
                <Button size="lg" className="btn-primary text-lg px-8 py-6 h-auto">
                  <Home className="mr-2 h-5 w-5" />
                  GO TO HOME
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="btn-outline text-lg px-8 py-6 h-auto"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                GO BACK
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
