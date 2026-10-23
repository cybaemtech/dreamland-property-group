import { useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger index 0-3 → transition-delay 0 / .1s / .2s / .3s */
  delay?: 0 | 1 | 2 | 3;
  className?: string;
}

/**
 * Scroll-reveal wrapper matching the reference site's IntersectionObserver
 * behaviour, with a graceful no-observer fallback and visible-by-default
 * rendering for reduced-motion users (handled in CSS).
 */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries, instance) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            instance.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} data-delay={delay || undefined}>
      {children}
    </div>
  );
}
