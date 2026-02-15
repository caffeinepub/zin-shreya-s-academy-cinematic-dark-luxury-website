import { Outlet } from '@tanstack/react-router';
import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';
import StickyButtons from '../components/StickyButtons';
import CinematicBackground from '../components/CinematicBackground';

export default function SiteLayout() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      <CinematicBackground />
      <div className="relative z-10">
        <SiteHeader />
        <main>
          <Outlet />
        </main>
        <Footer />
        <StickyButtons />
      </div>
    </div>
  );
}
