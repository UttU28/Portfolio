import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import Lenis from "lenis";
import {
  scrollEasing,
  scrollToHash,
  scrollToTop,
} from "@/lib/smooth-scroll";

type SmoothScrollContextValue = {
  lenis: Lenis | null;
  scrollToTop: (duration?: number) => void;
  scrollToHash: (hash: string, duration?: number) => void;
};

const SmoothScrollContext = createContext<SmoothScrollContextValue | null>(
  null,
);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("lenis", "lenis-smooth");

    const instance = new Lenis({
      duration: 1.6,
      easing: scrollEasing,
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.15,
      syncTouch: true,
      autoResize: true,
    });

    setLenis(instance);

    let frame = 0;
    const raf = (time: number) => {
      instance.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const link = target?.closest<HTMLAnchorElement>("a[href^='#']");
      if (!link || link.target === "_blank") return;

      const href = link.getAttribute("href");
      if (!href || href.length < 2) return;

      if (link.hasAttribute("download")) return;

      e.preventDefault();
      scrollToHash(instance, href);
    };

    document.addEventListener("click", onAnchorClick, true);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onAnchorClick, true);
      instance.destroy();
      root.classList.remove("lenis", "lenis-smooth");
      setLenis(null);
    };
  }, []);

  const scrollToTopFn = useCallback(
    (duration?: number) => scrollToTop(lenis, duration),
    [lenis],
  );

  const scrollToHashFn = useCallback(
    (hash: string, duration?: number) => scrollToHash(lenis, hash, duration),
    [lenis],
  );

  const value = useMemo(
    () => ({
      lenis,
      scrollToTop: scrollToTopFn,
      scrollToHash: scrollToHashFn,
    }),
    [lenis, scrollToTopFn, scrollToHashFn],
  );

  return (
    <SmoothScrollContext.Provider value={value}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function useSmoothScroll() {
  const ctx = useContext(SmoothScrollContext);
  if (!ctx) {
    throw new Error("useSmoothScroll must be used within SmoothScrollProvider");
  }
  return ctx;
}
