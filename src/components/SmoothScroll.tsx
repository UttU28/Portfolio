import React, { useEffect, useRef, forwardRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface SmoothScrollProps {
  children: React.ReactNode;
  onLocomotiveScroll?: (scroll: LocomotiveScroll) => void;
}

export const SmoothScroll = forwardRef<LocomotiveScroll, SmoothScrollProps>(
  ({ children, onLocomotiveScroll }, ref) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (scrollRef.current) {
        const locomotiveScroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 0.8,
          lerp: 0.1,
          reloadOnContextChange: true,
          touchMultiplier: 2,
          class: 'is-revealed',
          getDirection: true,
          getSpeed: true,
        });

        // Expose the instance through the ref
        if (ref) {
          (ref as React.MutableRefObject<LocomotiveScroll>).current = locomotiveScroll;
        }

        // Call the callback if provided
        if (onLocomotiveScroll) {
          onLocomotiveScroll(locomotiveScroll);
        }

        // Cleanup
        return () => {
          locomotiveScroll.destroy();
        };
      }
    }, [ref, onLocomotiveScroll]);

    return (
      <div 
        ref={scrollRef} 
        data-scroll-container 
        className="relative"
      >
        {children}
      </div>
    );
  }
); 