'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} George Lock. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
