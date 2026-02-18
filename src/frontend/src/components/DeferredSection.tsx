import { Suspense, lazy, ComponentType } from 'react';
import { useNearViewport } from '../hooks/useNearViewport';

interface DeferredSectionProps {
  loader: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  rootMargin?: string;
}

/**
 * Wrapper component that defers loading of a section until it's near the viewport.
 * Reduces initial bundle size and improves time-to-interactive.
 */
export default function DeferredSection({
  loader,
  fallback = null,
  rootMargin = '400px',
}: DeferredSectionProps) {
  const { isNearViewport, elementRef } = useNearViewport({ rootMargin });

  // Lazy load the component only when needed
  const LazyComponent = lazy(loader);

  return (
    <div ref={elementRef}>
      {isNearViewport ? (
        <Suspense fallback={fallback}>
          <LazyComponent />
        </Suspense>
      ) : null}
    </div>
  );
}
