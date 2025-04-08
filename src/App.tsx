import React, { useRef } from 'react';
import { Code, User, Blocks, Phone } from 'lucide-react';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { MobileTabBar } from './components/MobileTabBar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/CustomCursor';
import LocomotiveScroll from 'locomotive-scroll';

// Import our interface from types
export interface NavItem {
  name: string;
  icon: React.ReactNode;
  sectionId: string;
}

function App() {
  // Create refs for each section
  const homeRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll>(null);

  const navItems: NavItem[] = [
    { name: 'Home', icon: <User className="w-5 h-5" />, sectionId: 'home' },
    { name: 'Projects', icon: <Blocks className="w-5 h-5" />, sectionId: 'projects' },
    { name: 'Skills', icon: <Code className="w-5 h-5" />, sectionId: 'skills' },
    { name: 'About', icon: <User className="w-5 h-5" />, sectionId: 'about' },
    { name: 'Contact', icon: <Phone className="w-5 h-5" />, sectionId: 'contact' },
  ];

  // Use refs for scrolling
  const scrollToSection = (sectionId: string) => {
    console.log(`Attempting to scroll to ${sectionId}`);
    
    let targetElement;
    switch(sectionId) {
      case 'home':
        targetElement = homeRef.current;
        break;
      case 'projects':
        targetElement = projectsRef.current;
        break;
      case 'skills':
        targetElement = skillsRef.current;
        break;
      case 'about':
        targetElement = aboutRef.current;
        break;
      case 'contact':
        targetElement = contactRef.current;
        break;
      default:
        console.error('Unknown section ID:', sectionId);
        return;
    }
    
    if (targetElement && locomotiveScrollRef.current) {
      console.log('Element found, scrolling');
      locomotiveScrollRef.current.scrollTo(targetElement, {
        offset: -80,
        duration: 1000,
        easing: [0.25, 0.1, 0.25, 1],
      });
    } else {
      console.error('Element ref is null for section:', sectionId);
    }
  };

  // Common style for navbar - transparent with blur effect
  const navbarStyle = {
    background: 'rgba(15, 15, 15, 0.5)', // More transparent background
    backdropFilter: 'blur(10px)', // Slightly stronger blur for better contrast with the image
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)' // Subtle border
  };
  
  // Bottom mobile navigation style
  const mobileNavStyle = {
    background: 'rgba(15, 15, 15, 0.5)', // More transparent background
    backdropFilter: 'blur(10px)', // Slightly stronger blur
    borderTop: '1px solid rgba(255, 255, 255, 0.1)' // Subtle border
  };

  return (
    <div className="min-h-screen text-white relative overflow-x-hidden select-none">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Static background image */}
      <Background />

      {/* Navigation components */}
      <div className="relative z-10">
        <Navbar navItems={navItems} gridStyle={navbarStyle} scrollToSection={scrollToSection} />
        <MobileTabBar navItems={navItems} gridStyle={mobileNavStyle} scrollToSection={scrollToSection} />

        {/* Main content with full-height sections */}
        <SmoothScroll ref={locomotiveScrollRef} onLocomotiveScroll={(scroll) => {
          // Make the scroll instance available globally
          window.locomotiveScroll = scroll;
        }}>
          <main className="relative z-10 h-full pb-16 md:pb-0 pt-16">
            {/* Hero section */}
            <section ref={homeRef} id="home" className="px-4 max-w-7xl mx-auto" data-scroll-section>
              <HeroSection scrollToSection={scrollToSection} />
            </section>
            
            {/* Projects section */}
            <section 
              ref={projectsRef} 
              id="projects" 
              className="px-4 max-w-7xl mx-auto relative" 
              data-scroll-section
              style={{ position: "relative" }}
            >
              <ProjectsSection />
            </section>
            
            {/* Skills section */}
            <section ref={skillsRef} id="skills" className="px-4 max-w-7xl mx-auto" data-scroll-section>
              <SkillsSection />
            </section>
            
            {/* About section */}
            <section ref={aboutRef} id="about" className="px-4 max-w-7xl mx-auto" data-scroll-section>
              <AboutSection />
            </section>
            
            {/* Contact section */}
            <section ref={contactRef} id="contact" className="px-4 max-w-7xl mx-auto" data-scroll-section>
              <ContactSection />
            </section>
            
            {/* Footer */}
            <footer className="py-8 pb-32 text-center text-gray-500 text-sm px-4 max-w-7xl mx-auto font-handwriting" data-scroll-section>
              <p>© {new Date().getFullYear()} Utsav Chaudhary. All rights reserved.</p>
            </footer>
          </main>
        </SmoothScroll>
      </div>
    </div>
  );
}

export default App;