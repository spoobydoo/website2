import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 pt-28 bg-white">
      <img
        src={`${process.env.NODE_ENV === 'production' ? '/website2' : ''}/images/george-graduation.png`}
        alt="George Lock"
        className="w-48 h-48 rounded-full border-4 border-green-500 shadow-lg mb-6 object-cover object-[center_40%]"
      />
      <h1 className="text-4xl font-bold text-gray-900 mb-2">George Lock</h1>
      <h2 className="text-xl font-semibold text-green-600 mb-4">
        Social Media Expert & Digital Strategist
      </h2>
      <p className="text-center max-w-2xl text-gray-700 mb-6">
        Temple University Advertising graduate with proven expertise in growing and managing high-engagement social media accounts with combined following of over 3M+ followers.
      </p>
      <div className="flex gap-4 mb-8">
        <Link href="#contact" className="button-primary">Contact Me</Link>
        <Link href="#experience" className="button-outline">My Experience</Link>
      </div>
      <div className="flex gap-8 justify-center">
        <div className="bg-green-50 rounded-xl p-6 w-40 text-center shadow">
          <div className="text-3xl font-bold text-green-600 mb-2">3M+</div>
          <div className="text-gray-700 text-sm">Combined Followers</div>
        </div>
        <div className="bg-green-50 rounded-xl p-6 w-40 text-center shadow">
          <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
          <div className="text-gray-700 text-sm">Managed Accounts</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
