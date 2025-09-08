'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, User, Mail, Menu, X, ChevronRight, Star, ExternalLink } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/80 backdrop-blur-xl shadow-lg border-b border-white/5 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className={`relative w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full 
                  flex items-center justify-center transform transition-all duration-300 
                  ${isScrolled ? 'scale-90' : 'scale-100'} 
                  border border-white/20 group-hover:border-white/40`}>
                <span className="text-white font-bold text-xl">GL</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-white font-bold transition-all duration-300 tracking-tight
                ${isScrolled ? 'text-xl' : 'text-2xl'}`}>George Lock</span>
              <span className="text-purple-300 text-xs font-medium">Digital Strategist</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`relative px-1 py-2 group ${isActive('/') ? 'text-white' : 'text-gray-300 hover:text-white'} transition-colors duration-300`}
            >
              <span className="relative z-10">Home</span>
              {isActive('/') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></span>
              )}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/about" 
              className={`relative px-1 py-2 group ${isActive('/about') ? 'text-white' : 'text-gray-300 hover:text-white'} transition-colors duration-300`}
            >
              <span className="relative z-10">About Me</span>
              {isActive('/about') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></span>
              )}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/experience" 
              className={`relative px-1 py-2 group ${isActive('/experience') ? 'text-white' : 'text-gray-300 hover:text-white'} transition-colors duration-300`}
            >
              <span className="relative z-10">Work Experience</span>
              {isActive('/experience') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></span>
              )}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/contact" 
              className={`relative px-3 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300`}
            >
              <span className="relative z-10 flex items-center">
                Contact <Mail size={14} className="ml-1" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-purple-300" />
            ) : (
              <Menu size={24} className="text-purple-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-slate-900/90 backdrop-blur-xl border-b border-purple-500/20
          transform transition-all duration-500 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 border-t border-purple-500/20 shadow-2xl shadow-purple-900/20' : 'max-h-0'
          }`}
      >
        <div className="py-6 px-6 space-y-2">
          <Link 
            href="/" 
            className={`flex items-center py-3 px-4 rounded-xl ${
              isActive('/') 
                ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white font-medium border border-purple-500/30' 
                : 'text-gray-300 hover:bg-white/5 border border-transparent'
            } transition-all duration-300`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
              isActive('/') ? 'bg-purple-500/30' : 'bg-slate-800'
            }`}>
              <Home size={16} className={isActive('/') ? 'text-purple-300' : 'text-gray-400'} />
            </div>
            <span>Home</span>
            {isActive('/') && <Star size={14} className="text-purple-400 ml-auto" />}
          </Link>
          
          <Link 
            href="/about" 
            className={`flex items-center py-3 px-4 rounded-xl ${
              isActive('/about') 
                ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white font-medium border border-purple-500/30' 
                : 'text-gray-300 hover:bg-white/5 border border-transparent'
            } transition-all duration-300`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
              isActive('/about') ? 'bg-purple-500/30' : 'bg-slate-800'
            }`}>
              <User size={16} className={isActive('/about') ? 'text-purple-300' : 'text-gray-400'} />
            </div>
            <span>About Me</span>
            {isActive('/about') && <Star size={14} className="text-purple-400 ml-auto" />}
          </Link>
          
          <Link 
            href="/experience" 
            className={`flex items-center py-3 px-4 rounded-xl ${
              isActive('/experience') 
                ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white font-medium border border-purple-500/30' 
                : 'text-gray-300 hover:bg-white/5 border border-transparent'
            } transition-all duration-300`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
              isActive('/experience') ? 'bg-purple-500/30' : 'bg-slate-800'
            }`}>
              <Briefcase size={16} className={isActive('/experience') ? 'text-purple-300' : 'text-gray-400'} />
            </div>
            <span>Work Experience</span>
            {isActive('/experience') && <Star size={14} className="text-purple-400 ml-auto" />}
          </Link>
          
          <Link 
            href="/contact" 
            className={`flex items-center py-3 px-4 rounded-xl ${
              isActive('/contact') 
                ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white font-medium border border-purple-500/30' 
                : 'text-gray-300 hover:bg-white/5 border border-transparent'
            } transition-all duration-300`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
              isActive('/contact') ? 'bg-purple-500/30' : 'bg-slate-800'
            }`}>
              <Mail size={16} className={isActive('/contact') ? 'text-purple-300' : 'text-gray-400'} />
            </div>
            <span>Contact</span>
            {isActive('/contact') && <Star size={14} className="text-purple-400 ml-auto" />}
          </Link>
          
          <div className="pt-4 mt-4 border-t border-white/10">
            <a 
              href="#" 
              className="flex items-center py-3 px-4 text-purple-300 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                alert('Resume download will be implemented here');
              }}
            >
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                <ExternalLink size={14} className="text-purple-300" />
              </div>
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
