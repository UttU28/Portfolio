import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CursorProps {
  cursorSize?: number;
}

interface CursorTrailDot {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

export const CustomCursor: React.FC<CursorProps> = ({ cursorSize = 20 }) => {
  const [cursorType, setCursorType] = useState<'default' | 'button' | 'link' | 'text'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<CursorTrailDot[]>([]);
  const [lastPosition, setLastPosition] = useState({ x: -100, y: -100 });
  
  // Lead cursor position (exact pointer position)
  const leadX = useMotionValue(-100);
  const leadY = useMotionValue(-100);
  
  // Main cursor position with spring physics for delayed following
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring configs
  // Faster response for lead cursor
  const leadSpringConfig = { 
    damping: 50, 
    stiffness: 800,
    mass: 0.5
  };
  
  // Smoother, delayed response for following cursor
  const getFollowSpringConfig = () => {
    return { 
      damping: 25, 
      stiffness: 200,
      mass: 1.5
    };
  };
  
  // Create springs
  const leadXSpring = useSpring(leadX, leadSpringConfig);
  const leadYSpring = useSpring(leadY, leadSpringConfig);
  const cursorXSpring = useSpring(cursorX, getFollowSpringConfig());
  const cursorYSpring = useSpring(cursorY, getFollowSpringConfig());

  useEffect(() => {
    // Track mouse position and velocity
    const moveCursor = (e: MouseEvent) => {
      const exactX = e.clientX;
      const exactY = e.clientY;
      
      // Update lead cursor (exact position minus half of its size)
      leadX.set(exactX - 2); // Assuming lead cursor is 4px wide
      leadY.set(exactY - 2); // Assuming lead cursor is 4px tall
      
      // Update main cursor with delay (actual pointer position is used)
      cursorX.set(exactX - cursorSize / 2);
      cursorY.set(exactY - cursorSize / 2);
      
      // Calculate movement for trail
      const newX = exactX - cursorSize / 2;
      const newY = exactY - cursorSize / 2;
      const dx = newX - lastPosition.x;
      const dy = newY - lastPosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Update last position
      setLastPosition({ x: newX, y: newY });
      
      // Add to trail if moving fast enough
      if (distance > 5) { // Lower threshold for more regular trail
        const newDot = {
          id: Date.now(),
          x: exactX,
          y: exactY,
          opacity: Math.min(0.8, distance / 30) // Lower max opacity for subtler effect
        };
        
        setTrail(prevTrail => {
          // Keep a greater number of trail dots for smoother trail
          const newTrail = [...prevTrail, newDot].slice(-15);
          return newTrail;
        });
      }
      
      setIsVisible(true);
    };
    
    // Fade out trail dots over time (more slowly)
    const fadeTrail = () => {
      setTrail(prevTrail => 
        prevTrail
          .map(dot => ({
            ...dot,
            opacity: dot.opacity - 0.05 // Slower fade for smoother trail
          }))
          .filter(dot => dot.opacity > 0)
      );
    };
    
    // Setup trail fade interval (slower interval for smoother trails)
    const fadeInterval = setInterval(fadeTrail, 80);
    
    // Listen for cursor type changes
    const handleCursorChange = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'BUTTON' || 
          target.closest('button') || 
          target.dataset.cursor === 'button' ||
          target.closest('[data-cursor="button"]')) {
        setCursorType('button');
      } else if (target.tagName === 'A' || 
                target.closest('a') || 
                target.dataset.cursor === 'link' ||
                target.closest('[data-cursor="link"]')) {
        setCursorType('link');
      } else if (target.tagName === 'INPUT' || 
                target.tagName === 'TEXTAREA' || 
                target.dataset.cursor === 'text' ||
                target.closest('[data-cursor="text"]') ||
                target.closest('form')) {
        setCursorType('text');
      } else {
        setCursorType('default');
      }
    };
    
    // Hide cursor when it leaves the window
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    // Show cursor when it enters the window
    const handleMouseEnter = () => {
      setIsVisible(true);
    };
    
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleCursorChange);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Change body styling to hide the default cursor
    document.body.style.cursor = 'none';
    
    // Add cursor-none class to all buttons, links, and form elements
    const elements = document.querySelectorAll('a, button, input, textarea, select, form');
    elements.forEach(el => {
      el.classList.add('cursor-none');
    });
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleCursorChange);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      clearInterval(fadeInterval);
      
      // Restore default cursor
      document.body.style.cursor = 'auto';
      
      // Remove cursor-none class
      elements.forEach(el => {
        el.classList.remove('cursor-none');
      });
    };
  }, [cursorSize, cursorX, cursorY, leadX, leadY, lastPosition]);

  // Cursor variants based on type
  const getCursorVariant = () => {
    switch (cursorType) {
      case 'button':
        return {
          height: cursorSize * 1.5,
          width: cursorSize * 1.5,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          border: '2px solid rgba(255, 255, 255, 0.8)',
          mixBlendMode: 'difference' as const,
        };
      case 'link':
        return {
          height: cursorSize * 1.2,
          width: cursorSize * 1.2,
          backgroundColor: 'rgba(100, 200, 255, 0.3)',
          border: '2px solid rgba(100, 200, 255, 0.8)',
          mixBlendMode: 'normal' as const,
        };
      case 'text':
        return {
          height: cursorSize * 0.5,
          width: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          mixBlendMode: 'difference' as const,
        };
      default:
        return {
          height: cursorSize,
          width: cursorSize,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          mixBlendMode: 'difference' as const,
        };
    }
  };

  return (
    <>
      {/* Trail dots */}
      {trail.map(dot => (
        <motion.div
          key={dot.id}
          className="fixed pointer-events-none z-[9998] rounded-full bg-white/20 backdrop-blur-sm"
          style={{
            top: dot.y,
            left: dot.x,
            opacity: dot.opacity,
            width: cursorSize / 3.5,
            height: cursorSize / 3.5,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 0.8],
            opacity: [dot.opacity, 0]
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      ))}
      
      {/* Lead cursor (small dot showing exact position) */}
      <motion.div
        className="fixed pointer-events-none z-[10000] rounded-full bg-white"
        style={{
          x: leadXSpring,
          y: leadYSpring,
          opacity: isVisible ? 1 : 0,
          width: 4,
          height: 4,
          filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.8))',
        }}
      />
    
      {/* Main cursor (delayed follower) */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full flex items-center justify-center select-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
          ...getCursorVariant(),
        }}
        transition={{
          type: "spring", 
          damping: 25, 
          stiffness: 200,
          mass: 1.5,
          opacity: { duration: 0.3 }
        }}
      >
        {cursorType === 'button' && (
          <motion.div
            className="bg-white rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 0.5 }}
            transition={{ duration: 0.3 }}
            style={{ height: 10, width: 10 }}
          />
        )}
      </motion.div>
    </>
  );
}; 