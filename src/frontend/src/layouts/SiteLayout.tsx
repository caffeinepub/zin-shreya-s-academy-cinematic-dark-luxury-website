import { Outlet } from '@tanstack/react-router';
import { memo } from 'react';
import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';
import StickyButtons from '../components/StickyButtons';
import CinematicBackground from '../components/CinematicBackground';

// Memoize the background to prevent unnecessary re-renders during route changes
const MemoizedBackground = memo(CinematicBackground);

export default function SiteLayout() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      <MemoizedBackground />
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
