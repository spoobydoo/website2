'use client';

import React from 'react';
import { education } from '../data/education';
import { experience } from '../data/experience';
import { accounts } from '../data/accounts';
import { skills } from '../data/skills';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-xl text-gray-300">
            Professional journey and social media portfolio
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Professional Experience</h3>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h4 className="text-2xl font-semibold text-white">{job.title}</h4>
                  <span className="text-purple-300 font-medium">{job.period}</span>
                </div>
                <p className="text-lg text-blue-300 mb-4">{job.company}</p>
                <p className="text-gray-300 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Education</h3>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h4 className="text-2xl font-semibold text-white">{education.school}</h4>
              <div className="text-right">
                <p className="text-purple-300 font-medium">Graduated {education.graduation}</p>
                <p className="text-green-300">GPA: {education.gpa}</p>
              </div>
            </div>
            <p className="text-lg text-blue-300 mb-4">{education.degree}</p>
            
            {/* Diploma Display */}
            <div className="mt-6 mb-8">
              <h5 className="text-white font-semibold mb-4 text-center">Official Diploma</h5>
              <div className="flex justify-center">
                <div className="relative max-w-md border-4 border-yellow-400/30 p-1">
                  {/* Using regular img tag for simplicity in this case */}
                  <img 
                    src={education.diplomaImage} 
                    alt="Temple University Diploma"
                    className="w-full h-auto" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none"></div>
                </div>
              </div>
              <div className="text-center mt-4 text-sm text-gray-400">
                <p>
                  Conferred to {education.diplomaDetails.fullName} on {education.diplomaDetails.conferredOn} by {education.diplomaDetails.institution}, {education.diplomaDetails.location}
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8 pt-6 border-t border-white/10">
              <div>
                <h5 className="text-white font-semibold mb-3">Relevant Coursework:</h5>
                <ul className="space-y-2">
                  {education.coursework.map((course, index) => (
                    <li key={index} className="text-gray-300 flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-white font-semibold mb-3">Awards:</h5>
                <p className="text-gray-300">{education.awards}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Managed Accounts */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Social Media Portfolio</h3>
          <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
            Extensive experience managing and growing social media accounts across multiple platforms
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <thead>
                <tr className="border-b border-white/20">
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
                  <tr key={index} className="border-b border-white/10 hover:bg-white/10 transition-colors">
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
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        account.involvement === 'MANAGED' ? 'bg-blue-500/20 text-blue-300' : 'bg-purple-500/20 text-purple-300'
                      }`}>
                        {account.involvement}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
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

        {/* Skills */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white px-4 py-2 rounded-full text-sm border border-white/10">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
