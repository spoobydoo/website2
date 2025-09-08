'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Instagram, Briefcase, Award, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600/10 rounded-full filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-600/10 rounded-full filter blur-[80px] animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 min-h-screen flex flex-col justify-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              {/* Badge */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30">
                  <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
                  <span className="text-purple-300 text-sm font-medium tracking-wide">Social Media Strategist & Content Creator</span>
                </div>
              </div>
              
              {/* Name & Title */}
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <span className="block mb-2">George Lock</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Digital Strategist
                  </span>
                </h1>
              </div>
              
              {/* Description */}
              <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Temple University Advertising graduate with proven expertise in growing and managing high-engagement social media accounts
                  with combined following of over <span className="font-semibold text-purple-300">2.5 million+</span> followers.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in pt-4" style={{ animationDelay: '0.8s' }}>
                <Link href="/experience" className="button-primary flex items-center justify-center group">
                  View My Work 
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="button-outline flex items-center justify-center">
                  Get In Touch
                </Link>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in" style={{ animationDelay: '1s' }}>
                <div className="glass-card rounded-2xl p-6 hover:transform hover:scale-105 transition duration-300">
                  <Instagram className="text-pink-400 mb-3" size={28} />
                  <h3 className="text-white font-bold text-3xl mb-1">2.5M+</h3>
                  <p className="text-gray-400 text-sm">Total Followers</p>
                </div>
                <div className="glass-card rounded-2xl p-6 hover:transform hover:scale-105 transition duration-300">
                  <Briefcase className="text-purple-400 mb-3" size={28} />
                  <h3 className="text-white font-bold text-3xl mb-1">10+</h3>
                  <p className="text-gray-400 text-sm">Managed Accounts</p>
                </div>
                <div className="glass-card rounded-2xl p-6 hover:transform hover:scale-105 transition duration-300">
                  <Award className="text-yellow-400 mb-3" size={28} />
                  <h3 className="text-white font-bold text-3xl mb-1">5</h3>
                  <p className="text-gray-400 text-sm">Major Awards</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -left-5 -top-5 w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full animate-float opacity-50"></div>
              <div className="absolute -right-10 -bottom-10 w-28 h-28 bg-gradient-to-r from-pink-500 to-purple-700 rounded-lg rotate-12 animate-float opacity-60" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Image Frame */}
              <div className="relative z-10">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-60 animate-pulse-slow"></div>
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl w-80 h-96 md:w-[440px] md:h-[550px]">
                  <img
                    src={`${process.env.NODE_ENV === 'production' ? '/George-Port' : ''}/images/george-graduation.png`}
                    alt="George Lock - Social Media Expert"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Fancy overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-slate-900/30 to-transparent"></div>
                  
                  {/* Bottom info bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-sm bg-black/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <p className="text-white font-medium">Available for projects</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Skills badge floating element */}
              <div className="absolute -right-10 top-1/3 glass-card p-4 rounded-2xl animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-400 mb-1">Top Skills</span>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-white text-sm">Social Media</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span className="text-white text-sm">Content Strategy</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-white text-sm">Analytics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
          <ChevronDown size={20} className="text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
