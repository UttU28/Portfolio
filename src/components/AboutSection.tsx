import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

export const AboutSection: React.FC = () => {
  return (
    <motion.div
      id="about"
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading>About Me</SectionHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          className="md:col-span-2 bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-gray-300 mb-4 leading-relaxed font-handwriting text-2xl">
            Hello! I'm Utsav, a software developer who loves turning wild ideas into real applications. 
            I have a strong passion for problem-solving and a knack for creating meaningful solutions with code.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed font-handwriting text-2xl">
            Whether it's building an AI-powered home assistant or coding an automation bot to simplify 
            everyday tasks, I thrive on projects that blend innovation with practicality. I approach each 
            new challenge with curiosity, creativity, and a healthy dose of humor – because coding should be fun, right?
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed font-handwriting text-2xl">
            Over the years, I've worn many hats: front-end tinkerer, back-end architect, cloud orchestrator, 
            and even team lead. This journey has taught me how to tackle complex problems with determination and creativity.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed font-handwriting text-2xl">
            I'm the kind of person who sees a bug or an error as just another puzzle to solve 
            (often at 2 AM with a mug of coffee in hand). I take pride in collaborating with others 
            and driving projects forward with clarity and purpose.
          </p>
          <p className="text-gray-300 leading-relaxed font-handwriting text-2xl">
            In short, I love making tech do things it wasn't originally supposed to do (in a good way), 
            and I'm always excited to learn whatever new tool or language it takes to get the job done.
          </p>
        </motion.div>
        
        <motion.div 
          className="relative md:col-span-1"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 h-full flex flex-col justify-center">
            <div className="mb-4 text-center">
              <h3 className="text-2xl font-heading font-bold mb-2 text-white">Tech Enthusiast</h3>
              <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <div className="mb-4 text-center">
              <h3 className="text-2xl font-heading font-bold mb-2 text-white">Problem Solver</h3>
              <div className="w-full h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
            </div>
            <div className="mb-4 text-center">
              <h3 className="text-2xl font-heading font-bold mb-2 text-white">Creative Thinker</h3>
              <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold mb-2 text-white">Lifelong Learner</h3>
              <div className="w-full h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}; 