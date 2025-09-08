'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine which section is currently in view
      const sections = ['home', 'about', 'experience', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (sectionId: string) => {
    return activeSection === sectionId;
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-green-500 shadow-lg py-2' 
          : 'bg-green-500 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="#home" 
            className="group flex items-center space-x-3"
          >
            <div className="relative">
              <div className={`relative w-12 h-12 bg-white rounded-full 
                  flex items-center justify-center transform transition-all duration-300 
                  ${isScrolled ? 'scale-90' : 'scale-100'} 
                  border-2 border-white group-hover:border-white/90`}>
                <span className="text-green-600 font-bold text-xl">GL</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-white font-bold transition-all duration-300 tracking-tight
                ${isScrolled ? 'text-xl' : 'text-2xl'}`}>George Lock</span>
              <span className="text-white text-xs font-medium">Digital Strategist</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#home" 
              className={`relative px-1 py-2 group text-white hover:text-gray-100 transition-colors duration-300 ${isActive('home') ? 'font-medium' : ''}`}
            >
              <span className="relative z-10">Home</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-white rounded-full transition-all duration-300 ${isActive('home') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link 
              href="#about" 
              className={`relative px-1 py-2 group text-white hover:text-gray-100 transition-colors duration-300 ${isActive('about') ? 'font-medium' : ''}`}
            >
              <span className="relative z-10">About Me</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-white rounded-full transition-all duration-300 ${isActive('about') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link 
              href="#experience" 
              className={`relative px-1 py-2 group text-white hover:text-gray-100 transition-colors duration-300 ${isActive('experience') ? 'font-medium' : ''}`}
            >
              <span className="relative z-10">Work Experience</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-white rounded-full transition-all duration-300 ${isActive('experience') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link 
              href="#contact" 
              className={`relative px-1 py-2 group text-white hover:text-gray-100 transition-colors duration-300 ${isActive('contact') ? 'font-medium' : ''}`}
            >
              <span className="relative z-10">Contact</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-white rounded-full transition-all duration-300 ${isActive('contact') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 mt-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href="#home" 
                className={`text-white py-2 px-2 rounded-lg hover:bg-white/10 transition-colors duration-300 ${isActive('home') ? 'bg-white/10 font-medium' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#about" 
                className={`text-white py-2 px-2 rounded-lg hover:bg-white/10 transition-colors duration-300 ${isActive('about') ? 'bg-white/10 font-medium' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Me
              </Link>
              <Link 
                href="#experience" 
                className={`text-white py-2 px-2 rounded-lg hover:bg-white/10 transition-colors duration-300 ${isActive('experience') ? 'bg-white/10 font-medium' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work Experience
              </Link>
              <Link 
                href="#contact" 
                className={`text-white py-2 px-2 rounded-lg hover:bg-white/10 transition-colors duration-300 ${isActive('contact') ? 'bg-white/10 font-medium' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
