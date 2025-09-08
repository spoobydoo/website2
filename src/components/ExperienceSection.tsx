import React from 'react';

const ExperienceSection = () => {
  return (
    <div className="space-y-12">
      {/* Work Samples and Resume Side by Side */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Work Highlights */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-green-600 border-b-2 border-green-100 pb-2">Work Highlights</h3>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
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
        <div>
          <h3 className="text-2xl font-bold mb-4 text-green-600 border-b-2 border-green-100 pb-2">Resume</h3>
          <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <a href={`${process.env.NODE_ENV === 'production' ? '/website2' : ''}/docs/resume.pdf`} target="_blank" rel="noopener noreferrer">
              <img
                src={`${process.env.NODE_ENV === 'production' ? '/website2' : ''}/images/resume.png`}
                alt="Resume"
                className="w-full h-auto rounded shadow-md"
              />
              <div className="text-center mt-4">
                <span className="button-outline text-sm py-2">View Full Resume</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Theme-ing Pages - Now with more prominence */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4 text-green-600 border-b-2 border-green-100 pb-2">Theme-ing Pages</h3>
        <div className="glass-card rounded-xl p-8 shadow-lg">
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            When creating posts for Instagram, I focus on maintaining a cohesive theme across the page, which is key to building a recognizable brand identity. I start by defining the visual style — this includes consistent use of colors, fonts, and imagery that align with the overall vibe of the page. I also consider the type of content that resonates with the target audience, whether it's educational, entertaining, or aspirational.
          </p>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            To help the page go viral, I prioritize content that sparks engagement, like asking questions, using popular hashtags, or creating challenges that encourage followers to interact. I post at optimal times to maximize visibility and make use of trends and viral sounds when appropriate. Additionally, I analyze audience insights to refine the strategy and keep the content fresh and engaging, ensuring it has shareability, which is essential for virality.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[7, 8, 9].map((num) => (
              <div key={num} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={`${process.env.NODE_ENV === 'production' ? '/website2' : ''}/images/work/${String(num).padStart(2, '0')}_IMG_${Math.floor(1000 + Math.random() * 9000)}.png`}
                  alt={`Work sample ${num}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
