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
          className="text-4xl md:text-6xl font-bold font-heading mb-6 text-center md:text-left"
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
          className="text-gray-300 text-xl md:text-2xl font-handwriting mb-8 text-center md:text-left"
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
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg font-handwriting text-xl text-white relative border-2 border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors shadow-lg cursor-none overflow-hidden group"
            onClick={() => {
              console.log("Project button clicked");
              scrollToSection('projects');
            }}
            data-cursor="button"
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg font-handwriting text-xl text-white relative border-2 border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors shadow-lg cursor-none overflow-hidden group"
            onClick={() => {
              console.log("About button clicked");
              scrollToSection('about');
            }}
            data-cursor="button"
          >
            <span className="relative z-10">About Me</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
        <motion.div 
          className="flex space-x-4 mt-8 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.a 
            href="https://github.com/UttU28" 
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-none relative group"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            data-cursor="link"
          >
            <motion.div 
              className="absolute inset-0 bg-white/30 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <img 
              src="/images/social/gitHub.png" 
              alt="GitHub" 
              className="w-10 h-10 object-contain hover:opacity-80 transition-opacity relative"
              style={{filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.8))"}}
            />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/utsavmaan28" 
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-none relative group"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            data-cursor="link"
          >
            <motion.div 
              className="absolute inset-0 bg-blue-600/30 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <img 
              src="/images/social/linkedIn.png" 
              alt="LinkedIn" 
              className="w-10 h-10 object-contain hover:opacity-80 transition-opacity relative"
              style={{filter: "drop-shadow(0 0 6px rgba(59, 130, 246, 0.8))"}}
            />
          </motion.a>
          <motion.a 
            href="https://youtube.com/@utsavchaudhary" 
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-none relative group"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            data-cursor="link"
          >
            <motion.div 
              className="absolute inset-0 bg-red-500/30 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <img 
              src="/images/social/youTube.png" 
              alt="YouTube" 
              className="w-10 h-10 object-contain hover:opacity-80 transition-opacity relative"
              style={{filter: "drop-shadow(0 0 6px rgba(239, 68, 68, 0.8))"}}
            />
          </motion.a>
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