import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectProps } from './ProjectCard';
import { ChevronDown, ChevronUp, Github as GithubIcon, ExternalLink as ExternalLinkIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import LocomotiveScroll from 'locomotive-scroll';

declare global {
  interface Window {
    locomotiveScroll?: LocomotiveScroll;
  }
}

export const ProjectsSection: React.FC = () => {
  const [expandedProjects, setExpandedProjects] = useState<{ [key: string]: boolean }>({});
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const scrollTargetRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  
  // Smooth scroll implementation
  const smoothScroll = useCallback((targetY: number) => {
    const container = projectsContainerRef.current;
    if (!container) return;
    
    // Get current scroll position
    const currentY = container.scrollTop;
    // Calculate distance to target
    const diff = targetY - currentY;
    // If we're close enough, just set to target directly
    if (Math.abs(diff) < 1) {
      container.scrollTop = targetY;
      scrollTargetRef.current = null;
      return;
    }
    
    // Use lerp (linear interpolation) for smooth movement
    // Adjust the lerp factor (0.1) to control smoothness - lower is smoother but slower
    const newY = currentY + diff * 0.3;
    container.scrollTop = newY;
    
    // Continue animation
    rafRef.current = requestAnimationFrame(() => smoothScroll(targetY));
  }, []);
  
  // Setup scroll container to prevent propagation
  useEffect(() => {
    const container = projectsContainerRef.current;
    if (!container) return;
    
    const handleWheel = (e: WheelEvent) => {
      // Get the dimensions of the container
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isScrollable = scrollHeight > clientHeight;
      
      if (!isScrollable) return;
      
      const isAtTop = scrollTop <= 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight;
      
      // Completely prevent default on wheel events to avoid interference
      e.preventDefault();
      
      // If we're at the top and scrolling up, let the main page handle it
      if (isAtTop && e.deltaY < 0) {
        return;
      }
      
      // Track overflow scrolling at bottom
      if (isAtBottom && e.deltaY > 0) {
        // Initialize or increment the overflow scroll counter
        const currentOverflow = parseInt(container.dataset.overflowScroll || '0');
        const newOverflow = currentOverflow + Math.abs(e.deltaY);
        container.dataset.overflowScroll = newOverflow.toString();
        
        // If we've scrolled enough past the bottom, scroll to next section
        if (newOverflow > 100) {
          // Reset the counter
          container.dataset.overflowScroll = '0';
          
          // Find the skills section (next section after projects) and scroll to it
          const skillsSection = document.getElementById('skills');
          if (skillsSection && window.locomotiveScroll) {
            window.locomotiveScroll.scrollTo(skillsSection, {
              offset: -80,
              duration: 1000,
              easing: [0.25, 0.1, 0.25, 1],
            });
          }
          return;
        }
        
        // Still return early to prevent further processing
        return;
      } else {
        // Reset overflow counter when not at bottom
        container.dataset.overflowScroll = '0';
      }
      
      // Cancel any existing animation
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      // Set the target scroll position
      const targetScroll = scrollTop + (e.deltaY * 2);
      scrollTargetRef.current = targetScroll;
      
      // Start the smooth scroll animation
      rafRef.current = requestAnimationFrame(() => smoothScroll(targetScroll));
      
      e.stopPropagation();
    };
    
    const handleTouchStart = (e: TouchEvent) => {
      // Store initial touch position
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        container.dataset.touchStartY = touch.clientY.toString();
        
        // Cancel any ongoing smooth scroll
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      }
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 1 || !container.dataset.touchStartY) return;
      
      const touch = e.touches[0];
      const startY = parseInt(container.dataset.touchStartY);
      const currentY = touch.clientY;
      const deltaY = startY - currentY;
      
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isScrollable = scrollHeight > clientHeight;
      
      if (!isScrollable) return;
      
      const isAtTop = scrollTop <= 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight;
      
      // If scrolling up at the top, allow propagation
      if (isAtTop && deltaY < 0) {
        return;
      }
      
      // Track overflow scrolling at bottom for touch events
      if (isAtBottom && deltaY > 0) {
        // Initialize or increment the overflow scroll counter
        const currentOverflow = parseInt(container.dataset.overflowTouchScroll || '0');
        const newOverflow = currentOverflow + Math.abs(deltaY);
        container.dataset.overflowTouchScroll = newOverflow.toString();
        
        // If we've scrolled enough past the bottom, scroll to next section
        if (newOverflow > 100) {
          // Reset the counter
          container.dataset.overflowTouchScroll = '0';
          
          // Find the skills section (next section after projects) and scroll to it
          const skillsSection = document.getElementById('skills');
          if (skillsSection && window.locomotiveScroll) {
            window.locomotiveScroll.scrollTo(skillsSection, {
              offset: -80,
              duration: 1000,
              easing: [0.25, 0.1, 0.25, 1],
            });
          }
          return;
        }
        
        // Still return early to prevent further processing
        return;
      } else {
        // Reset overflow counter when not at bottom
        container.dataset.overflowTouchScroll = '0';
      }
      
      // Directly set scroll position for touch (feels more natural)
      container.scrollTop += deltaY * 1.5;
      // Update the start position for next move event
      container.dataset.touchStartY = currentY.toString();
      
      e.stopPropagation();
    };
    
    // Cleanup function for animation frame on unmount
    const cleanupRAF = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
    
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    return () => {
      cleanupRAF();
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, [smoothScroll]);
  
  const toggleDescription = (title: string) => {
    setExpandedProjects(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const projects: ProjectProps[] = [
    {
      title: "Apeksha – Personal AI Home Assistant",
      subtitle: "My attempt at a DIY Jarvis (minus the snarky British accent)",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a2bb?w=640&h=360&fit=crop&q=80",
      tech: "Python, PyTorch (LLM fine-tuning), TensorFlow, Raspberry Pi, Whisper (Speech-to-Text), Piper (Text-to-Speech), Firebase, React",
      description: "Meet Apeksha, my custom home assistant – basically my attempt at a DIY Jarvis (minus the snarky British accent). This AI-powered assistant runs a fine-tuned Llama-based language model entirely locally on a GPU, so it can answer questions and execute commands with zero internet – privacy for the win! It responds to a custom wake word I trained (yes, I can literally program it to wake up when I say \"Hey Apeksha\") and can control IoT devices, manage to-do lists, play media, and even converse in multiple languages. I built a sleek web dashboard for it and integrated a bunch of mini-projects: it can dim my lights, start a movie, translate languages on the fly, and more – all through voice commands. It's like having an always-evolving digital butler at home.",
      links: {
        github: "https://github.com/UttU28/Apeksha",
        other: [
          {
            label: "Dashboard",
            url: "https://github.com/UttU28/Apeksha-Dashboard"
          }
        ]
      },
      delay: 0.3
    },
    {
      title: "LinkedIn Reverse Search – Data Enrichment Tool",
      subtitle: "A web-scraping detective for LinkedIn and beyond",
      image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=640&h=360&fit=crop&q=80",
      tech: "Python (Selenium, BeautifulSoup), HuggingFace NLP, Node & Next.js, Firebase (Auth & Firestore), Azure Functions",
      description: "A web-scraping detective for LinkedIn and beyond. This project was about turning a list of names into a treasure trove of professional details. I built a Python bot that scrapes LinkedIn (and other public sources) for profiles and uses a fine-tuned NLP model to parse messy HTML and find the relevant info. Feed it a spreadsheet of names and companies, and it outputs enriched data: LinkedIn URLs, job titles, and even work email addresses, neatly compiled. On the front end, a Next.js web app with Firebase Auth lets the client upload their Excel, trigger the search, and view results in a dashboard. The system runs multi-threaded and integrates external APIs (like SalesQL) to speed up data gathering by ~30%. It even emails you the results automatically once it's done. Think of it as a Sherlock Holmes for recruiters – give it a clue (name/company) and it deduces the rest!",
      links: {
        other: [
          {
            label: "Private Repo",
            url: "#"
          }
        ]
      },
      delay: 0.4
    },
    {
      title: "Event Scraper & CRM – Eventbrite/Luma Automation",
      subtitle: "An hourly event-hunting bot that never sleeps",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=640&h=360&fit=crop&q=80",
      tech: "Python, SQL (PostgreSQL), Django, React",
      description: "An hourly event-hunting bot that never sleeps. This project monitors Eventbrite and Luma for new events in specific niches (think Cryptocurrency, RWA, Tokenization – the client's focus areas). Every hour, it scrapes upcoming events' details (titles, dates, registration links, etc.) and stores them in a structured SQL database. I implemented smart filters so it only flags events that match certain keywords and locations. On top of that, I built a simple web interface (with Django + React) where the client can browse and manage these events like a mini-CRM – complete with notes and tracking features. The data pipeline cleans and updates events continuously, so the list is always fresh and relevant. It's basically a personal event planner that sifts through the internet, ensuring the client never misses an important meetup or conference.",
      links: {
        other: [
          {
            label: "Private Repo",
            url: "#"
          }
        ]
      },
      delay: 0.5
    },
    {
      title: "AutoGramBot – Instagram Reels Automation",
      subtitle: "A fully automated Instagram content creator that works while I sleep",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=640&h=360&fit=crop&q=80",
      tech: "Python, Django, FFMPEG, Selenium, Whisper AI, Azure Logic Apps",
      description: "A fully automated Instagram content creator that works while I sleep. AutoGramBot generates and uploads Instagram Reels for teaching English vocabulary on my behalf – yes, you read that right. It pulls random short video clips from a movie-quotes API (for those fun example sentences), stitches them together using FFMPEG with cool transitions and an intro/outro, and overlays captions using OpenAI's Whisper for accurate subtitles. Once the video is ready, the bot logs into Instagram (via Selenium in a headless browser) and posts the reel with a caption and hashtags – no human needed. The entire workflow is orchestrated with Azure Logic Apps and cron jobs, so new educational content gets posted regularly like clockwork. In other words, I built myself a social media intern out of code – one that never complains and never needs coffee breaks.",
      links: {
        other: [
          {
            label: "Instagram",
            url: "https://www.instagram.com/that_vocab_girl/"
          }
        ]
      },
      delay: 0.6
    },
    {
      title: "AssignmentX – Handwritten Assignment Generator",
      subtitle: "An app that does your homework (okay, just the writing part)",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=640&h=360&fit=crop&q=80",
      tech: "Python, OpenCV & Pillow, Django (REST API), Android (Java), Azure (App Services, SQL DB, Blob Storage)",
      description: "An app that does your homework (okay, just the writing part). AssignmentX is an Android and web application I developed that generates realistic handwritten-style assignments from typed text. It's perfect for when you need that \"human touch\" but don't have time to write pages by hand. Under the hood, it uses image processing with Pillow and OpenCV to simulate natural handwriting strokes and quirks – so no two outputs look the same (teachers, don't hate me!). The heavy lifting happens on an Azure-hosted Django REST API: you send it text, and it returns a PDF that looks like you spent hours writing it out. It even emails you the PDF directly through SMTP integration. This project gained over 5,000 downloads and had 200+ daily active users at its peak – apparently, I wasn't the only one who thought a handwriting bot was a good idea. Performance was key here: I optimized with multi-threading and caching to handle many requests without breaking a sweat. Who knew automating bad handwriting could be so popular?",
      links: {
        github: "https://github.com/UttU28/AssignmentX",
        demo: "https://www.youtube.com/watch?v=demo123"
      },
      delay: 0.7
    },
    {
      title: "Movie Controller – Smart Remote for Streaming",
      subtitle: "A cross-platform smart remote app for all your streaming needs",
      image: "https://images.unsplash.com/photo-1593784991095-a205069533cd?w=640&h=360&fit=crop&q=80",
      tech: "Python (Flask, OpenCV, PyAutoGUI), React (Vite), Docker",
      description: "A cross-platform smart remote app for all your streaming needs. I built Movie Controller so I could control my PC's Netflix/YouTube playback from my phone – essentially turning any device into a remote control for my computer's browser. The front end is a React web app (think of a virtual remote with play/pause, search, etc.), and the back end is a Flask server on the PC that listens for those commands. When you tap \"Pause\" on your phone, the server uses PyAutoGUI to simulate a key press on the PC. I even added some computer vision: the app uses OpenCV to detect on-screen elements like the \"Skip Ads\" or \"Next Episode\" buttons and clicks them automatically so you don't have to. Everything runs in a Dockerized setup for reliability. The result? I can be in the kitchen and still control a YouTube video playing in the living room, and the app will even skip the annoying ads for me. It's like a DIY Roku, with a dash of computer vision magic to make binge-watching even lazier!",
      links: {
        github: "https://github.com/UttU28/MovieController"
      },
      delay: 0.8
    }
  ];

  return (
    <motion.div
      id="projects-container"
      className="w-full h-full relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      data-scroll
      data-scroll-sticky
    >
      <SectionHeading>Projects</SectionHeading>
      
      <motion.p
        className="text-gray-300 text-center w-full mx-auto mb-12 font-handwriting text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        I love to build things that make people say, "Wait, you can do that?!" Each project has taught me something new 
        (and sometimes broken something old). Here are some of my favorite and most notable projects:
      </motion.p>
      
      <div 
        ref={projectsContainerRef}
        className="max-w-6xl mx-auto overflow-y-auto px-8 pt-8 pb-8 relative" 
        style={{ 
          maxHeight: "calc(100vh - 150px)",
          overscrollBehavior: "contain",
          WebkitOverflowScrolling: "touch",
          position: "relative",
          zIndex: 5,
          transform: "translate3d(0, 0, 0)",
          scrollBehavior: "auto",
        }}
        data-scroll="false"
      >
        <div className="relative">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className={`mb-20 ${index % 2 === 0 ? 'ml-0 mr-auto' : 'mr-0 ml-auto'} md:max-w-[85%]`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 overflow-visible hover:border-blue-500/50 transition-all duration-300 cursor-none group" 
                style={{ 
                  boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
                  position: 'relative'
                }}
                whileHover={{ 
                  boxShadow: '0 0 30px rgba(65, 105, 225, 0.3)',
                  scale: 1.02
                }}
                data-cursor="link"
              >
                <div className="p-6">
                  <div className="flex flex-col">
                    {/* Header with Title, Tech, and Image */}
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                      <div className="flex-grow">
                        <h3 className="text-xl md:text-2xl font-bold font-heading mb-1 text-white">{project.title}</h3>
                        <p className={`text-gray-400 text-xl mb-3 italic ${
                          project.title === "AssignmentX – Handwritten Assignment Generator" 
                            ? "font-handwriting" 
                            : "font-heading"
                        }`}>{project.subtitle}</p>
                        
                        <div>
                          <h4 className="text-xl font-semibold text-gray-400 mb-2 font-heading">Tech Stack:</h4>
                          <p className={`text-gray-300 text-xl ${
                            project.title === "AssignmentX – Handwritten Assignment Generator" 
                              ? "font-handwriting" 
                              : "font-heading"
                          }`}>{project.tech}</p>
                        </div>
                      </div>
                      
                      {/* Image always next to the title and tech stack */}
                      {project.image && (
                        <div className="w-full md:w-[180px] flex-shrink-0 overflow-hidden rounded-lg">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover aspect-video"
                          />
                        </div>
                      )}
                    </div>
                    
                    {/* Button to toggle description */}
                    <motion.button 
                      onClick={() => toggleDescription(project.title)}
                      className={`mt-2 flex items-center text-blue-400 hover:text-blue-300 text-xl ${
                        project.title === "AssignmentX – Handwritten Assignment Generator" 
                          ? "font-handwriting" 
                          : "font-heading"
                      } transition-colors self-start cursor-none`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      data-cursor="button"
                    >
                      {expandedProjects[project.title] ? (
                        <>
                          <span>Hide Description</span>
                          <ChevronUp size={16} className="ml-1" />
                        </>
                      ) : (
                        <>
                          <span>Show Description</span>
                          <ChevronDown size={16} className="ml-1" />
                        </>
                      )}
                    </motion.button>
                    
                    {/* Expandable Description Section */}
                    <AnimatePresence>
                      {expandedProjects[project.title] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-4 w-full"
                        >
                          <h4 className="text-xl font-semibold text-gray-400 mb-2 font-heading">Description:</h4>
                          <p className={`text-gray-300 text-xl leading-relaxed ${
                            project.title === "AssignmentX – Handwritten Assignment Generator" 
                              ? "font-handwriting" 
                              : "font-heading"
                          }`}>
                            {project.description}
                          </p>
                          
                          {project.links && (
                            <div className="flex flex-wrap gap-3 mt-4">
                              {project.links.github && (
                                <a 
                                  href={project.links.github} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 text-xl px-3 py-1.5 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                                >
                                  <GithubIcon size={16} />
                                  <span>GitHub</span>
                                </a>
                              )}
                              
                              {project.links.demo && (
                                <a 
                                  href={project.links.demo} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 text-xl px-3 py-1.5 rounded-lg bg-blue-900 text-blue-100 hover:bg-blue-800 transition-colors"
                                >
                                  <ExternalLinkIcon size={16} />
                                  <span>Demo</span>
                                </a>
                              )}
                              
                              {project.links.other && project.links.other.map((link) => (
                                <motion.a 
                                  key={link.label}
                                  href={link.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 text-xl px-3 py-1.5 rounded-lg bg-purple-900 text-purple-100 hover:bg-purple-800 transition-colors cursor-none"
                                  whileHover={{ scale: 1.05 }}
                                  data-cursor="link"
                                >
                                  <ExternalLinkIcon size={16} />
                                  <span>{link.label}</span>
                                </motion.a>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}; 