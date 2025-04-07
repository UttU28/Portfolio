import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Github, ExternalLink } from 'lucide-react';

export interface ProjectProps {
  title: string;
  subtitle: string;
  tech: string;
  description: string;
  image?: string;
  links?: {
    github?: string;
    demo?: string;
    other?: {
      label: string;
      url: string;
    }[];
  };
  delay: number;
}

export const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  subtitle, 
  tech, 
  description,
  image,
  links,
  delay 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Content column - takes most of the space */}
          <div className="flex-grow flex flex-col">
            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-1 text-white">{title}</h3>
            <p className="text-gray-400 text-lg mb-3 italic font-handwriting">{subtitle}</p>
            
            <div className="mb-4">
              <h4 className="text-2xl font-semibold text-gray-400 mb-2 font-heading">Tech Stack:</h4>
              <p className="text-gray-300 text-lg font-handwriting">{tech}</p>
            </div>
          </div>
          
          {/* Image column - small and to the side */}
          {image && (
            <div className="w-full md:w-1/4 md:max-w-[120px] flex-shrink-0 overflow-hidden rounded-lg">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          )}
        </div>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 mb-6">
                <h4 className="text-2xl font-semibold text-gray-400 mb-2 font-heading">Description:</h4>
                <p className="text-gray-300 text-lg leading-relaxed font-handwriting">{description}</p>
              </div>
              
              {links && (
                <div className="flex flex-wrap gap-3">
                  {links.github && (
                    <a 
                      href={links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                  
                  {links.demo && (
                    <a 
                      href={links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-blue-900 text-blue-100 hover:bg-blue-800 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  )}
                  
                  {links.other && links.other.map((link) => (
                    <a 
                      key={link.label}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-purple-900 text-purple-100 hover:bg-purple-800 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        
        <button 
          onClick={toggleExpand}
          className="mt-4 flex items-center text-blue-400 hover:text-blue-300 text-lg font-handwriting transition-colors"
        >
          {isExpanded ? (
            <>
              <span>Collapse</span>
              <ChevronUp size={16} className="ml-1" />
            </>
          ) : (
            <>
              <span>Expand</span>
              <ChevronDown size={16} className="ml-1" />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}; 