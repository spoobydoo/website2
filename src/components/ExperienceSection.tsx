import React from 'react';

const ExperienceSection = () => {
  return (
    <div className="space-y-8">
      {/* Work Highlights */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-900">Work Highlights</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <div key={num} className="rounded-lg overflow-hidden shadow-md">
              <img
                src={`${process.env.NODE_ENV === 'production' ? '/website2' : ''}/images/work/${String(num).padStart(2, '0')}_IMG_${Math.floor(1000 + Math.random() * 9000)}.png`}
                alt={`Work sample ${num}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Resume */}
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Resume</h3>
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src={`${process.env.NODE_ENV === 'production' ? '/website2' : ''}/images/resume.png`}
            alt="Resume"
            className="w-full h-auto rounded shadow-md"
          />
        </div>
      </div>
      
      {/* Theme-ing Pages */}
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Theme-ing Pages</h3>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700 mb-4">
            When creating posts for Instagram, I focus on maintaining a cohesive theme across the page, which is key to building a recognizable brand identity. I start by defining the visual style — this includes consistent use of colors, fonts, and imagery that align with the overall vibe of the page. I also consider the type of content that resonates with the target audience, whether it's educational, entertaining, or aspirational.
          </p>
          <p className="text-gray-700 mb-4">
            To help the page go viral, I prioritize content that sparks engagement, like asking questions, using popular hashtags, or creating challenges that encourage followers to interact. I post at optimal times to maximize visibility and make use of trends and viral sounds when appropriate. Additionally, I analyze audience insights to refine the strategy and keep the content fresh and engaging, ensuring it has shareability, which is essential for virality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
