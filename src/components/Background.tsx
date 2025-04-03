import React, { useEffect, useState } from 'react';

export const Background: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollPosition(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Main Background */}
      <div 
        className="fixed inset-0 z-0" 
        style={{ 
          backgroundImage: `url('/background.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          height: '100%'
        }} 
      />

      {/* Dark Overlay */}
      <div 
        className="fixed inset-0 z-0" 
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          pointerEvents: 'none',
          minHeight: '150vh',
          height: '150%'
        }}
      />
    </>
  );
}; 