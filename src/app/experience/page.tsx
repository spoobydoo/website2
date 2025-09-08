'use client';

import React from 'react';
import { experience } from '../../data/experience';
import { accounts } from '../../data/accounts';
import { skills } from '../../data/skills';
import { Instagram, Download, ArrowRight, Award, Briefcase } from 'lucide-react';

export const metadata = {
  title: 'Work Experience | George Lock - Social Media Expert',
  description: 'Explore George Lock\'s work experience, social media portfolio, and professional achievements in digital marketing.',
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen py-20 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-4">
          My Professional Journey
        </span>
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Work Experience</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A comprehensive overview of my professional experience and social media portfolio
        </p>
      </div>
      
      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Instagram className="text-purple-400" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">2.5M+</h3>
            <p className="text-gray-400">Total Followers</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Briefcase className="text-purple-400" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{accounts.length}+</h3>
            <p className="text-gray-400">Managed Accounts</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="text-purple-400" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">7+</h3>
            <p className="text-gray-400">Years Experience</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">$500K+</h3>
            <p className="text-gray-400">Revenue Generated</p>
          </div>
        </div>
      </div>
      
      {/* Professional Experience Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Experience</h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="glass-card rounded-xl p-8 hover:border-purple-500/30 transition-all duration-300 transform hover:translate-x-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-md flex items-center justify-center mr-4 shrink-0">
                    <Briefcase className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                    <p className="text-lg text-purple-300">{job.company}</p>
                  </div>
                </div>
                <span className="text-gray-400 font-medium mt-2 md:mt-0 bg-white/5 px-3 py-1 rounded-full">
                  {job.period}
                </span>
              </div>
              <div className="ml-16">
                <p className="text-gray-300 leading-relaxed">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Resume Download Button */}
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <a 
          href="#" 
          className="button-outline inline-flex items-center"
          onClick={(e) => {
            e.preventDefault();
            alert('Resume download feature will be implemented here');
          }}
        >
          <Download size={18} className="mr-2" /> Download Full Resume
        </a>
      </div>
      
      {/* Social Media Portfolio */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Social Media Portfolio</h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          A comprehensive overview of the social media accounts I've owned and managed, showcasing my expertise in growing and monetizing online audiences.
        </p>
        
        <div className="overflow-x-auto">
          <div className="min-w-max">
            <div className="glass-card rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-6 text-white font-semibold">Platform</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Account</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Years</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Followers</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Involvement</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {accounts.map((account, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <account.icon className="text-pink-400 mr-2" size={20} />
                          <span className="text-gray-300">{account.platform}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-white font-medium">{account.account}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-gray-300">{account.years}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-green-300 font-semibold">{account.followers}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          account.involvement === 'MANAGED' ? 'bg-blue-500/20 text-blue-300' : 'bg-purple-500/20 text-purple-300'
                        }`}>
                          {account.involvement}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          account.status === 'SOLD' ? 'bg-green-500/20 text-green-300' :
                          account.status === 'DEACTIVED' ? 'bg-red-500/20 text-red-300' :
                          'bg-gray-500/20 text-gray-300'
                        }`}>
                          {account.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Professional Skills</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="glass-card rounded-xl p-6 hover:border-purple-500/20 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-300 text-lg font-bold">{skill.charAt(0)}</span>
              </div>
              <h3 className="text-white font-medium">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="max-w-5xl mx-auto text-center glass-card rounded-2xl p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to work together?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          If you're looking for social media expertise to grow your brand or optimize your digital presence, I'd love to hear from you.
        </p>
        <a href="/contact" className="button-primary inline-flex items-center">
          Get In Touch <ArrowRight size={18} className="ml-2" />
        </a>
      </div>
    </div>
  );
}
