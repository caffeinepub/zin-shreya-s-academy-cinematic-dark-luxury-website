import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { Link, useRouter } from '@tanstack/react-router';

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-dark/70">
        <div className="absolute inset-0 bg-gradient-radial from-rose-gold/10 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-rose-gold/15 via-gold/5 to-transparent blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
          <h1 className="text-9xl md:text-[12rem] font-black tracking-tight">
            <span className="bg-gradient-to-r from-rose-gold via-gold to-rose-gold bg-clip-text text-transparent">
              404
            </span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Page Not Found
          </h2>
          
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/">
              <Button size="lg" className="btn-primary text-lg px-8 py-6 h-auto">
                <Home className="mr-2 h-5 w-5" />
                GO HOME
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="btn-outline text-lg px-8 py-6 h-auto"
              onClick={() => router.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              GO BACK
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
