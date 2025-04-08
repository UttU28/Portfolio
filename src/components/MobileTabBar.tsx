import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavItem } from '../App';

// Hindi translations for nav items
const hindiTranslations: { [key: string]: string } = {
  'Home': 'होम',
  'About': 'परिचय',
  'Skills': 'कौशल',
  'Projects': 'परियोजनाएँ',
  'Contact': 'संपर्क'
};

interface MobileTabBarProps {
  navItems: NavItem[];
  gridStyle: React.CSSProperties;
  scrollToSection: (sectionId: string) => void;
}

export const MobileTabBar: React.FC<MobileTabBarProps> = ({ navItems, gridStyle, scrollToSection }) => {
  // State to track which item was clicked and should show Hindi text
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  // Define color for each nav item
  const getNavItemColor = (name: string): string => {
    switch(name) {
      case 'Home':
        return 'text-blue-400';
      case 'Projects':
        return 'text-purple-400';
      case 'Skills':
        return 'text-green-400';
      case 'About':
        return 'text-orange-400';
      case 'Contact':
        return 'text-red-400';
      default:
        return 'text-white';
    }
  };
  
  // Handle click on mobile nav item
  const handleNavClick = (item: NavItem) => {
    // Set clicked item to show Hindi text
    setClickedItem(item.name);
    
    // Scroll to section
    scrollToSection(item.sectionId);
    
    // Reset after 1 second
    setTimeout(() => {
      setClickedItem(null);
    }, 1000);
  };
  
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-50">
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)] flex justify-around"
        style={{
          ...gridStyle,
          height: '70px' // Fixed height for consistency
        }}
      >
        {navItems.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`flex flex-col items-center justify-center py-2 px-4 cursor-pointer w-20 transition-all duration-100
              ${hoveredItem === item.name || clickedItem === item.name ? getNavItemColor(item.name) : 'text-gray-300 hover:text-white'}`}
            onClick={() => {
              console.log(`Mobile tab clicked - scrolling to ${item.sectionId}`);
              handleNavClick(item);
            }}
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className={`mb-1 transition-all duration-100 ${hoveredItem === item.name || clickedItem === item.name ? getNavItemColor(item.name) : 'text-white'}`}>
              {item.icon}
            </div>
            <div className="h-5 flex items-center justify-center">
              <span className={`text-xs font-medium handwritten transition-all duration-300 ${clickedItem === item.name ? 'font-hindi' : ''}`}>
                <span 
                  style={{ 
                    display: 'inline-block', 
                    paddingTop: clickedItem === item.name && hindiTranslations[item.name] ? '4px' : '0' 
                  }}
                >
                  {clickedItem === item.name && hindiTranslations[item.name] ? hindiTranslations[item.name] : item.name}
                </span>
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}; 