import { Outlet } from '@tanstack/react-router';
import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';
import StickyButtons from '../components/StickyButtons';

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyButtons />
    </div>
  );
}
