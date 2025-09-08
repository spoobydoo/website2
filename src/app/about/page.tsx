'use client';

import React from 'react';
import { aboutMe } from '../../data/aboutMe';

export const metadata = {
  title: 'About Me | George Lock - Social Media Expert',
  description: 'Learn about George Lock\'s background, education, and expertise in social media and digital marketing.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-4">
          Get To Know Me
        </span>
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">About Me</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          My journey in social media marketing, education, and professional background
        </p>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-20">
          {/* Left Column - Photo and Info */}
          <div className="md:col-span-2">
            <div className="glass-card rounded-2xl p-6 mb-8">
              <div className="aspect-[3/4] mb-6 overflow-hidden rounded-xl relative">
                <img 
                  src="/images/george-graduation.png" 
                  alt="George Lock"
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent"></div>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-2">George Lock</h2>
              <p className="text-purple-300 mb-6">Social Media Strategist</p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">{aboutMe.personalInfo.location}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Professional Journey</p>
                  <p className="text-white">Started in {aboutMe.personalInfo.startedJourney}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Education</p>
                  <p className="text-white">Temple University, BA in Advertising</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Areas of Expertise</h2>
              <div className="space-y-3">
                {aboutMe.personalInfo.focusAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Biography and Details */}
          <div className="md:col-span-3">
            <div className="glass-card rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">My Story</h2>
              
              <div className="space-y-6 text-gray-300">
                <p>
                  I'm a passionate social media professional with a deep understanding of digital platforms and audience engagement strategies. 
                  My journey in social media marketing began during my early college years and has evolved into a successful career managing 
                  multiple high-profile accounts with millions of combined followers.
                </p>
                
                <p>
                  With experience in building, growing, and monetizing social media accounts across various platforms, I specialize in 
                  content creation, community engagement, and leveraging analytics to drive strategic decisions. My approach combines creative 
                  storytelling with data-driven insights to maximize reach and engagement.
                </p>
                
                <p>
                  As a Temple University graduate with a degree in Advertising, I bring both academic knowledge and practical experience to every project. 
                  I'm committed to staying ahead of industry trends and platform algorithm changes to deliver exceptional results for 
                  personal brands and business clients alike.
                </p>
                
                <blockquote className="border-l-4 border-purple-500 pl-6 py-2 my-8 italic">
                  {aboutMe.quote}
                </blockquote>
                
                <p>
                  My goal is to help brands and individuals build meaningful connections with their audience through authentic, engaging content 
                  that resonates and drives action. Whether it's growing a following from scratch or optimizing an existing social media presence, 
                  I bring strategic thinking and creative solutions to every project.
                </p>
              </div>
            </div>
            
            {/* Core Strengths */}
            <h2 className="text-2xl font-bold text-white mb-6">Core Strengths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutMe.strengths.map((strength, index) => (
                <div key={index} className="glass-card rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">{strength.title}</h3>
                  <p className="text-gray-300">{strength.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Education Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Education</h2>
          <div className="glass-card rounded-2xl p-8">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-purple-300">T</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Temple University</h3>
                    <p className="text-purple-300">Philadelphia, Pennsylvania</p>
                  </div>
                </div>
                
                <div className="ml-16 space-y-6">
                  <div>
                    <h4 className="text-xl font-medium text-white">Bachelor of Arts in Advertising</h4>
                    <p className="text-gray-300">Graduated: May 2025</p>
                    <p className="text-green-300">GPA: 3.8</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Relevant Coursework:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        Qualitative Advertising Research
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        Advanced Media Planning
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        Digital Media and Advertising
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        Digital Analytics and Reporting
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        Advanced Brand Strategy
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        Advertising Sales
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Awards:</h4>
                    <p className="text-gray-300">Temple University Spring 2025 Best Media Plan</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative max-w-md mx-auto">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-lg blur-md"></div>
                  <img 
                    src="/images/temple-diploma.png" 
                    alt="Temple University Diploma" 
                    className="relative z-10 w-full h-auto rounded-lg border-2 border-white/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <a 
            href="/experience" 
            className="button-primary inline-flex items-center"
          >
            View My Work Experience
          </a>
        </div>
      </div>
    </div>
  );
}
