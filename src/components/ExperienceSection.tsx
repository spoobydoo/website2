import React from 'react';

const ExperienceSection = () => {
  // Create an array of work samples with fixed image paths to match screenshot
  const workSamples = [
    { id: 1, path: '01_IMG_4298.png' },
    { id: 2, path: '02_IMG_0793.png' },
    { id: 3, path: '03_IMG_4391.png' },
    { id: 4, path: '04_IMG_4390.png' },
    { id: 5, path: '05_IMG_3232.png' },
    { id: 6, path: '06_IMG_0605.png' },
    { id: 7, path: '07_IMG_0561.png' },
    { id: 8, path: '08_IMG_9073.png' },
    { id: 9, path: '09_IMG_0520.png' },
    { id: 10, path: '10_IMG_9974.png' },
    { id: 11, path: '11_IMG_9807.png' },
    { id: 12, path: '12_IMG_8966.png' },
    { id: 13, path: '13_IMG_7405.png' },
    { id: 14, path: '14_image0.png' },
    { id: 15, path: '15_IMG_5440.png' },
    { id: 16, path: '16_IMG_1920.png' },
    { id: 17, path: '17_IMG_4818.png' },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-green-700 inline-block border-b-2 border-green-200 pb-1">Work Experience</h2>
      </div>
      
      {/* Work Samples and Resume Side by Side */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Work Highlights */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-600">Work Highlights</h3>
          <div className="grid grid-cols-3 gap-2">
            {workSamples.slice(0, 9).map((sample) => (
              <div key={sample.id} className="overflow-hidden">
                <img
                  src={`${process.env.NODE_ENV === 'production' ? '/website2' : ''}/images/work/${sample.path}`}
                  alt={`Work sample ${sample.id}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Resume */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-600">Resume</h3>
          <div>
            <a href={`${process.env.NODE_ENV === 'production' ? '/website2' : ''}/docs/resume.pdf`} target="_blank" rel="noopener noreferrer">
              <img
                src={`${process.env.NODE_ENV === 'production' ? '/website2' : ''}/images/resume.png`}
                alt="Resume"
                className="w-full h-auto"
              />
            </a>
          </div>
        </div>
      </div>
      
      {/* Additional sections based on the screenshot */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-600">Insights Overview</h3>
          <div className="grid grid-cols-3 gap-2">
            {workSamples.slice(9, 12).map((sample) => (
              <div key={sample.id} className="overflow-hidden">
                <img
                  src={`${process.env.NODE_ENV === 'production' ? '/website2' : ''}/images/work/${sample.path}`}
                  alt={`Insights overview ${sample.id}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-600">Accounts Reached</h3>
          <div className="grid grid-cols-3 gap-2">
            {workSamples.slice(12, 15).map((sample) => (
              <div key={sample.id} className="overflow-hidden">
                <img
                  src={`${process.env.NODE_ENV === 'production' ? '/website2' : ''}/images/work/${sample.path}`}
                  alt={`Accounts reached ${sample.id}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Last two rows of screenshots */}
        <div>
          <div className="overflow-hidden">
            <img
              src={`${process.env.NODE_ENV === 'production' ? '/website2' : ''}/images/work/${workSamples[15].path}`}
              alt={`Work sample ${workSamples[15].id}`}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div>
          <div className="overflow-hidden">
            <img
              src={`${process.env.NODE_ENV === 'production' ? '/website2' : ''}/images/work/${workSamples[16].path}`}
              alt={`Work sample ${workSamples[16].id}`}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
