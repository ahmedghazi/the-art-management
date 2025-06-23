import { useEffect, useState, useRef, RefObject } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement | null>) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => setIsOnScreen(entry.isIntersecting),
      {
        // rootMargin: "-100% 0px 0px 0px",
        // threshold: 0,
        threshold: 0.5,
      }
    );
  }, []);

  useEffect(() => {
    if (!observerRef.current || !ref.current) return;
    observerRef.current.observe(ref.current);

    return () => {
      if (!observerRef.current) return;
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}
