import { RouterProvider, createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import SiteLayout from './layouts/SiteLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import { useEffect } from 'react';
import { useLocation } from '@tanstack/react-router';
import { pageMeta } from './seo/pageMeta';

// Meta updater component
function MetaUpdater() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const meta = pageMeta[path] || pageMeta['/404'];

    // Update title
    document.title = meta.title;

    // Update or create description meta tag
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', meta.description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', meta.description);
      document.head.appendChild(metaDescription);
    }

    // Update or create keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', meta.keywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', meta.keywords);
      document.head.appendChild(metaKeywords);
    }
  }, [location.pathname]);

  return null;
}

// Root route with layout
const rootRoute = createRootRoute({
  component: () => (
    <>
      <MetaUpdater />
      <SiteLayout />
    </>
  ),
});

// Define routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const coursesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/courses',
  component: CoursesPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFoundPage,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  coursesRoute,
  contactRoute,
  notFoundRoute,
]);

// Create router
const router = createRouter({ routeTree });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
