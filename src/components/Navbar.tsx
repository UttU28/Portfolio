import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavItem } from '../App';

// Hindi translations for navbar items
const hindiTranslations: { [key: string]: string } = {
  'Home': 'होम',
  'About': 'परिचय',
  'Skills': 'कौशल',
  'Projects': 'परियोजनाएँ',
  'Contact': 'संपर्क',
  'ThatInsaneGuy': 'यत्र तत्र सर्वत्र शिव',
  'Old Site': 'पुरानी'
};

interface NavbarProps {
  navItems: NavItem[];
  gridStyle: React.CSSProperties;
  scrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ navItems, scrollToSection }) => {
  // State to track hovered item
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Define fixed widths for nav items based on the longest text (English or Hindi)
  const getNavItemWidth = (name: string): string => {
    if (name === 'Projects' || name === 'Contact') return 'w-24';
    if (name === 'Skills' || name === 'About') return 'w-20';
    return 'w-16'; // For Home or other items
  };
  
  // Define hover colors for each nav item
  const getNavItemHoverColor = (name: string): string => {
    switch(name) {
      case 'Home':
        return 'text-blue-400 hover:text-blue-300';
      case 'Projects':
        return 'text-purple-400 hover:text-purple-300';
      case 'Skills':
        return 'text-green-400 hover:text-green-300';
      case 'About':
        return 'text-orange-400 hover:text-orange-300';
      case 'Contact':
        return 'text-red-400 hover:text-red-300';
      default:
        return 'text-gray-300 hover:text-white';
    }
  };

  return (
    <div className="hidden md:block">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0}}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50 relative"
        style={{
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 flex items-center cursor-pointer"
                onClick={() => {
                  console.log("Logo clicked - scrolling to home");
                  scrollToSection('home');
                }}
              >
                <img src="/images/logo/logo.png" alt="Logo" className="h-8 w-auto mr-2" />
                <span 
                  className="text-3xl font-bold text-white tracking-wide font-heading w-64 block" 
                  style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.3)' }}
                >
                  ThatInsaneGuy
                </span>
              </motion.div>
            </div>
            <div className="flex items-center space-x-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex space-x-8"
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-2xl cursor-pointer transition-all duration-100 ease-in-out font-bold
                      ${hoveredItem === item.name ? 'font-hindi' : 'font-handwriting'} 
                      ${hoveredItem === item.name ? getNavItemHoverColor(item.name) : 'text-gray-300 hover:text-white'}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => {
                      console.log(`Nav item clicked - scrolling to ${item.sectionId}`);
                      scrollToSection(item.sectionId);
                    }}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Icons removed from desktop view */}
                    <span className={`block text-center transition-all duration-300 ease-in-out ${getNavItemWidth(item.name)}`}>
                      <span 
                        style={{ 
                          display: 'inline-block', 
                          paddingTop: hoveredItem === item.name && hindiTranslations[item.name] ? '4px' : '0' 
                        }}
                      >
                        {hoveredItem === item.name && hindiTranslations[item.name] ? hindiTranslations[item.name] : item.name}
                      </span>
                    </span>
                  </motion.a>
                ))}
                
                {/* Old Site Button */}
                <motion.a
                  href="https://oldthatinsaneguy28.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-2xl cursor-pointer transition-all duration-100 ease-in-out font-bold
                    ${hoveredItem === "Old Site" ? 'font-hindi' : 'font-handwriting'} 
                    ${hoveredItem === "Old Site" ? 'text-yellow-400 hover:text-yellow-300' : 'text-gray-300 hover:text-white'}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * navItems.length }}
                  onMouseEnter={() => setHoveredItem("Old Site")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className={`block text-center transition-all duration-300 ease-in-out w-24`}>
                    <span 
                      style={{ 
                        display: 'inline-block', 
                        paddingTop: hoveredItem === "Old Site" ? '4px' : '0' 
                      }}
                    >
                      {hoveredItem === "Old Site" ? hindiTranslations["Old Site"] : "Old Site"}
                    </span>
                  </span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
        <div 
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/80"
          style={{
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
            filter: 'blur(0.5px)',
            opacity: 0.8
          }}
        />
      </motion.nav>
    </div>
  );
};