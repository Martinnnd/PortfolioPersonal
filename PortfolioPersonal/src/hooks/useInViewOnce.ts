import { useEffect, useRef, useState } from "react";

export function useInViewOnce<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // solo una vez
          observer.disconnect();
        }
      },
      { root: null, threshold: 0.18, ...options }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView, options]);

  return { ref, inView };
}
