'use client';

import React from 'react';
import { aboutMe } from '../data/aboutMe';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-300">
            Social media expert with a passion for digital marketing and audience growth
          </p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
          {/* Quote Section */}
          <div className="mb-12 text-center">
            <div className="text-4xl text-purple-400 mb-4">"</div>
            <p className="text-xl md:text-2xl text-white italic max-w-3xl mx-auto">
              {aboutMe.quote}
            </p>
            <div className="text-4xl text-purple-400 mt-4">"</div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Side Photo */}
            <div className="md:w-1/3">
              <div className="relative">
                {/* Soft glow behind image */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-purple-500/30 to-pink-500/30 rounded-lg blur-lg"></div>
                
                {/* Image with professional styling */}
                <div className="relative rounded-lg overflow-hidden border border-white/20">
                  <img 
                    src="/images/george-graduation.png" 
                    alt="George Lock" 
                    className="w-full h-auto object-cover aspect-[3/4]"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  
                  {/* Location tag */}
                  <div className="absolute bottom-4 left-4 bg-purple-900/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
                    {aboutMe.personalInfo.location}
                  </div>
                </div>

                {/* Personal info card */}
                <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10 mt-4">
                  <p className="text-gray-300 mb-2">
                    <span className="text-purple-300 font-semibold">Journey Started:</span> {aboutMe.personalInfo.startedJourney}
                  </p>
                  <div>
                    <span className="text-purple-300 font-semibold block mb-2">Focus Areas:</span>
                    <div className="flex flex-wrap gap-2">
                      {aboutMe.personalInfo.focusAreas.map((area, index) => (
                        <span key={index} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-md text-xs">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="md:w-2/3">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate social media professional with a deep understanding of digital platforms and audience engagement strategies. My journey in social media marketing began during my early college years and has evolved into a successful career managing multiple high-profile accounts.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                With experience in building, growing, and monetizing social media accounts across various platforms, I specialize in content creation, community engagement, and leveraging analytics to drive strategic decisions. My approach combines creative storytelling with data-driven insights to maximize reach and engagement.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                As a recent Temple University graduate with a degree in Advertising, I bring both academic knowledge and practical experience to every project. I'm committed to staying ahead of industry trends and platform algorithm changes to deliver exceptional results for personal brands and business clients alike.
              </p>

              {/* Strengths grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {aboutMe.strengths.map((strength, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold text-lg mb-2">{strength.title}</h4>
                    <p className="text-gray-300">{strength.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
