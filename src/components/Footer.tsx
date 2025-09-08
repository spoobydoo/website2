'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-green-500 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-white">
          © {new Date().getFullYear()} George Lock. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
