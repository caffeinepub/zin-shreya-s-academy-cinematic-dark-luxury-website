import { useEffect, useState, useRef } from 'react';

interface UseNearViewportOptions {
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

/**
 * Hook to detect when an element is near the viewport using IntersectionObserver.
 * Used for lazy-loading below-the-fold content.
 */
export function useNearViewport(options: UseNearViewportOptions = {}) {
  const {
    rootMargin = '400px',
    threshold = 0,
    triggerOnce = true,
  } = options;

  const [isNearViewport, setIsNearViewport] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // If already triggered and triggerOnce is true, don't observe again
    if (hasTriggered.current && triggerOnce) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered.current) {
            setIsNearViewport(true);
            hasTriggered.current = true;
            if (triggerOnce) {
              observer.disconnect();
            }
          }
        });
      },
      {
        rootMargin,
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold, triggerOnce]);

  return { isNearViewport, elementRef };
}
