'use client';

import React from 'react';
import { Mail, MessageSquare, Calendar, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
          <p className="text-xl text-gray-300">
            Get in touch for collaborations and opportunities
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Email card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:border-purple-500/30 transition-colors group">
            <div className="w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-800/60 transition-colors">
              <Mail className="text-purple-300" size={28} />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Email</h3>
            <p className="text-gray-300 mb-6">For professional inquiries and collaborations</p>
            <a 
              href="mailto:glock112802@gmail.com" 
              className="text-xl text-purple-300 font-semibold hover:text-purple-200 transition-colors block"
            >
              glock112802@gmail.com
            </a>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Response time: Within 24-48 hours
              </p>
            </div>
          </div>

          {/* Schedule a call card */}
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:border-pink-500/30 transition-colors group">
            <div className="w-16 h-16 bg-pink-900/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-800/60 transition-colors">
              <Calendar className="text-pink-300" size={28} />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Schedule a Consultation</h3>
            <p className="text-gray-300 mb-6">Book a 30-minute call to discuss your social media needs</p>
            
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-colors"
            >
              Schedule Now <ExternalLink className="ml-2" size={16} />
            </a>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Limited availability - Book early
              </p>
            </div>
          </div>
        </div>
        
        {/* Personal note */}
        <div className="max-w-3xl mx-auto mt-16 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <MessageSquare className="text-purple-400" size={24} />
            </div>
            <div>
              <h4 className="text-white font-medium text-lg mb-3">A Note from George</h4>
              <p className="text-gray-300 italic">
                "I'm always interested in connecting with fellow marketing professionals, potential clients, and students. 
                Whether you're looking for social media growth strategies, advertising consultation, or just want to chat 
                about the latest digital marketing trends, I'd love to hear from you!"
              </p>
              <div className="mt-4 flex justify-end">
                <img 
                  src="/images/george-signature.png" 
                  alt="George Lock's Signature" 
                  className="h-12 opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
