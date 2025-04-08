import React, { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionHeadingProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  children,
  title,
  description,
  className = ""
}) => {
  const headingContent = children || title;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <>
      <div ref={ref} className="flex items-center justify-center w-full mb-8">
        {/* Left decorative line - desktop */}
        <motion.div 
          className="hidden md:flex items-center flex-grow max-w-[250px] mx-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-full h-[20px] bg-contain bg-no-repeat bg-center"
            style={{ 
              backgroundImage: 'url(/images/ui/chalkLine.png)',
              transform: 'translateY(-2px)'
            }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>
        
        {/* Left decorative line - mobile */}
        <motion.div 
          className="md:hidden flex items-center w-[80px] mx-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-full h-[15px] bg-contain bg-no-repeat bg-center"
            style={{ 
              backgroundImage: 'url(/images/ui/chalkLine.png)',
              transform: 'translateY(-1px)'
            }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
        </motion.div>
        
        {/* Heading */}
        <motion.h2 
          className={`text-3xl md:text-5xl font-bold font-heading text-center section-heading px-4 my-0 ${className}`}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? 
            { 
              opacity: [0.8, 1, 0.8, 1],
              y: 0 
            } : 
            { 
              opacity: 0,
              y: -20 
            }
          }
          transition={{ 
            y: { duration: 0.5 },
            opacity: {
              delay: 0.2,
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.25, 0.75, 1]
            }
          }}
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
            color: 'rgba(255, 255, 255, 0.9)'
          }}
        >
          {headingContent}
        </motion.h2>
        
        {/* Right decorative line - desktop */}
        <motion.div 
          className="hidden md:flex items-center flex-grow max-w-[250px] mx-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-full h-[20px] bg-contain bg-no-repeat bg-center"
            style={{ 
              backgroundImage: 'url(/images/ui/chalkLine.png)',
              transform: 'translateY(-2px) scaleY(-1)'
            }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>
        
        {/* Right decorative line - mobile */}
        <motion.div 
          className="md:hidden flex items-center w-[80px] mx-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-full h-[15px] bg-contain bg-no-repeat bg-center"
            style={{ 
              backgroundImage: 'url(/images/ui/chalkLine.png)',
              transform: 'translateY(-1px) scaleY(-1)'
            }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
        </motion.div>
      </div>
      
      {description && (
        <motion.p
          className="text-gray-300 text-center w-full mx-auto mb-12 font-handwriting text-xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {description}
        </motion.p>
      )}
    </>
  );
}; 