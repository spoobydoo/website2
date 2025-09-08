import React from 'react';
import { aboutMe } from '../data/aboutMe';

const AboutSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Left Side - Text Content */}
      <div className="space-y-6">
        <p className="text-lg text-gray-700">
          My name is George Lock. I am a recent graduate from Temple University with my
          Bachelors in Arts. I had recently seen the job listing for Impotola's marketing
          position, and it looked like something I would be ecstatic to work for.
        </p>
        
        <p className="text-lg text-gray-700">
          I've been creating content since elementary school, starting off with silly little
          Lego stop-motion movies, stretching all the way to live-streaming by my
          highschool years. When I was in middle school, what started as a hobby grew into
          managing a network of accounts with over 2 million combined followers. This
          early introduction into digital content allowed me to develop a sharp
          understanding of how platform trends operate. By high school, I was partnering
          with brands to promote everything from pet toys to music videos, gaining
          experience in paid digital campaigns. These collaborations taught me not only
          how to attract an audience, but how to maintain a loyal community.
        </p>
        
        {/* Best Media Plan Award */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 text-green-600">BEST MEDIA PLAN SPRING 2025</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <img 
              src={`${process.env.NODE_ENV === 'production' ? '/website2' : ''}/images/best-media-plan.png`}
              alt="Best Media Plan Award" 
              className="w-full md:w-1/2 h-auto rounded-lg shadow-md"
            />
            <div>
              <p className="text-gray-700">
                During my last semester at Temple, my amazing group members and I were able
                to be awarded the Best Media Plan for Spring 2025. This was an event hosted by
                my Advanced Media Planning course where some of the industry greats judged
                our media plan for a hypothetical package Hersheypark was offering.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Side - Education */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-green-600">Education</h3>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-center mb-6">
            <img 
              src={`${process.env.NODE_ENV === 'production' ? '/website2' : ''}/images/temple-diploma.png`}
              alt="Temple University Diploma" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          
          <div className="mt-6">
            <h4 className="font-semibold text-green-700 text-lg">Temple University</h4>
            <p className="text-gray-700">Bachelor's Degree in Advertising</p>
            <p className="text-gray-600">2023 - 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
