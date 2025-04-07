import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between py-12 md:py-24">
      <motion.div 
        className="md:w-1/2 mt-10 md:mt-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold font-heading mb-6 text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            color: 'rgba(255, 255, 255, 0.9)'
          }}
        >
          Utsav Chaudhary
        </motion.h1>
        <motion.p 
          className="text-gray-300 text-2xl md:text-3xl font-handwriting mb-8 text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
          }}
        >
          Building beautiful, interactive & performant web experiences
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg font-handwriting text-2xl text-white relative border-2 border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors shadow-lg"
            onClick={() => {
              console.log("Project button clicked");
              scrollToSection('projects');
            }}
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg font-handwriting text-2xl text-white relative border-2 border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors shadow-lg"
            onClick={() => {
              console.log("About button clicked");
              scrollToSection('about');
            }}
          >
            About Me
          </motion.button>
        </motion.div>
        <motion.div 
          className="flex space-x-4 mt-8 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a 
            href="https://github.com/UttU28" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/images/social/gitHub.png" 
              alt="GitHub" 
              className="w-10 h-10 object-contain hover:opacity-80 transition-opacity"
            />
          </a>
          <a 
            href="https://linkedin.com/in/utsavmaan28" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/images/social/linkedIn.png" 
              alt="LinkedIn" 
              className="w-10 h-10 object-contain hover:opacity-80 transition-opacity"
              style={{filter: "drop-shadow(0 0 1px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 1px rgba(37, 99, 235, 0.8))"}}
            />
          </a>
          <a 
            href="https://youtube.com/@utsavchaudhary" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/images/social/youTube.png" 
              alt="YouTube" 
              className="w-10 h-10 object-contain hover:opacity-80 transition-opacity"
              style={{filter: "drop-shadow(0 0 1px rgba(239, 68, 68, 0.8)) drop-shadow(0 0 1px rgba(220, 38, 38, 0.8))"}}
            />
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="md:w-1/2 flex justify-center mb-8 md:mb-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] flex items-center justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <img 
              src="/images/logo/chalkLogo.png" 
              alt="Chalk Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}; 