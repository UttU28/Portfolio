import React from 'react';
import { Menu, X } from 'lucide-react';
import { Disclosure, Transition } from '@headlessui/react';
import { NavItem } from '../App';

interface MobileNavProps {
  navItems: NavItem[];
  gridStyle: React.CSSProperties;
  scrollToSection: (sectionId: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ navItems, gridStyle, scrollToSection }) => {
  return (
    <div className="md:hidden">
      <Disclosure as="nav" className="fixed top-0 left-0 right-0 shadow-md z-50" style={gridStyle}>
        {({ open, close }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <div 
                    className="flex-shrink-0 flex items-center cursor-pointer"
                    onClick={() => scrollToSection('home')}
                  >
                    <img src="/images/logo/logo.png" alt="Logo" className="h-6 w-auto mr-2" />
                    <span className="text-2xl font-bold font-heading text-white">
                      ThatInsaneGuy
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">
                    {open ? (
                      <X className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Menu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="shadow-lg rounded-b-lg" style={{
                background: 'rgba(15, 15, 15, 0.95)',
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      className="flex items-center space-x-2 px-3 py-2 rounded-md text-xl font-handwriting text-gray-300 hover:text-white hover:bg-gray-700 cursor-pointer"
                      onClick={() => {
                        scrollToSection(item.sectionId);
                        close();
                      }}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}; 