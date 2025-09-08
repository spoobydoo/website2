'use client';

import React from 'react';
import { Mail, Phone, Clock, Send, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Contact | George Lock - Social Media Expert',
  description: 'Get in touch with George Lock for social media management, digital marketing expertise, and consulting services.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-4">
          Let's Connect
        </span>
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Contact Me</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Ready to elevate your social media presence? Let's discuss your goals and how I can help you achieve them.
        </p>
      </div>
      
      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Email Card */}
          <div className="glass-card rounded-xl p-8 text-center hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mb-6">
              <Mail className="text-purple-400" size={28} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Email</h2>
            <p className="text-gray-300 mb-6">For general inquiries and collaborations</p>
            <a 
              href="mailto:glock112802@gmail.com" 
              className="text-xl text-purple-300 font-medium hover:text-purple-200 transition-colors"
            >
              glock112802@gmail.com
            </a>
          </div>
          
          {/* Consultation Card */}
          <div className="glass-card rounded-xl p-8 text-center hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mb-6">
              <Clock className="text-purple-400" size={28} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Consultation</h2>
            <p className="text-gray-300 mb-6">Schedule a 30-minute strategy call</p>
            <a 
              href="#" 
              className="button-primary inline-flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                alert('Calendar scheduling feature will be implemented here');
              }}
            >
              Book a Call <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
          
          {/* Social Media Card */}
          <div className="glass-card rounded-xl p-8 text-center hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mb-6">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-purple-400"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Connect</h2>
            <p className="text-gray-300 mb-6">Follow me on social media</p>
            <div className="flex justify-center space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Instagram profile link will be added here');
                }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-white"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  alert('LinkedIn profile link will be added here');
                }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-white"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Twitter profile link will be added here');
                }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-white"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Send a Message</h2>
          <p className="text-center text-gray-300 mb-8">
            Have a specific question or project inquiry? Fill out the form below and I'll get back to you as soon as possible.
          </p>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-white mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500"
                placeholder="How can I help you?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea 
                id="message" 
                rows={6} 
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 resize-none"
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="button"
                className="button-primary inline-flex items-center justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Message sent! (This is a demo - the actual form submission will be implemented later)');
                }}
              >
                Send Message <Send size={18} className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Response Time Notice */}
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <Clock className="text-purple-400 mr-2" size={20} />
          <h3 className="text-white font-medium">Response Time</h3>
        </div>
        <p className="text-gray-300">
          I strive to respond to all inquiries within 24-48 hours during business days.
          For urgent matters, please include "URGENT" in your subject line.
        </p>
      </div>
    </div>
  );
}
