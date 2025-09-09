import React from 'react';

const ContactSection = () => {
  return (
    <div>
      <p className="text-center text-lg text-gray-700 mb-8">
        I'm always open to discussing new projects, opportunities, or partnerships.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-green-600 mb-4">Email</h3>
          <a href="mailto:glock112802@gmail.com" className="text-gray-700 hover:text-green-600 transition-colors text-lg">
            glock112802@gmail.com
          </a>
          <div className="mt-4">
            <a href="mailto:glock112802@gmail.com" className="button-primary text-sm py-2">
              Send Email
            </a>
          </div>
        </div>
        
        <div className="glass-card rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-green-600 mb-4">LinkedIn</h3>
          <a 
            href="https://linkedin.com/in/george-lock-338aa22b6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-green-600 transition-colors text-lg"
          >
            linkedin.com/in/george-lock-338aa22b6
          </a>
          <div className="mt-4">
            <a 
              href="https://linkedin.com/in/george-lock-338aa22b6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-primary text-sm py-2"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-500">
        © 2025 George Lock. All rights reserved.
      </div>
    </div>
  );
};

export default ContactSection;
