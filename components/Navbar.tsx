import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'אודות', href: '#about' },
    { name: 'סיכום 2025', href: '#recap' },
    { name: 'למה להגיע', href: '#features' },
    { name: 'צור קשר', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img 
              src="https://drive.google.com/thumbnail?id=1Vr4xjeX3j1yrZxB-rsMs2yhC2x9efuB0&sz=w1000" 
              alt="OpenDefense Logo" 
              className="h-28 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 space-x-reverse">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                className="bg-primary hover:bg-lime-400 text-slate-900 px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-primary/30"
              >
                בקשת הצטרפות
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
             <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-slate-900 bg-primary block px-3 py-2 rounded-md text-base font-medium mt-4 text-center font-bold"
              >
                בקשת הצטרפות
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;