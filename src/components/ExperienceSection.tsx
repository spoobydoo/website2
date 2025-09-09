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
    <div>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-green-700 inline-block border-b-2 border-green-200 pb-1">Work Experience</h2>
      </div>
      
      <div className="grid grid-cols-6 gap-1">
        <div className="col-span-6 flex justify-between">
          <div className="text-xl font-semibold">Work Highlights</div>
          <div className="text-xl font-semibold">Resume</div>
        </div>
        
        {/* First 3 work samples - row 1 */}
        {workSamples.slice(0, 3).map((sample) => (
          <div key={sample.id} className="aspect-square overflow-hidden bg-gray-100">
            <img
              src={`${process.env.NODE_ENV === 'production' ? '/website2' : ''}/images/work/${sample.path}`}
              alt={`Work sample ${sample.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Resume - spans 3 columns */}
        <div className="col-span-3 row-span-5">
          <a href={`${process.env.NODE_ENV === 'production' ? '/website2' : ''}/docs/resume.pdf`} target="_blank" rel="noopener noreferrer" className="block h-full">
            <img
              src={`${process.env.NODE_ENV === 'production' ? '/website2' : ''}/images/resume.png`}
              alt="Resume"
              className="w-full h-full object-contain bg-white"
            />
          </a>
        </div>
        
        {/* Remaining work samples - rows 2-6 */}
        {workSamples.slice(3, 16).map((sample) => (
          <div key={sample.id} className="aspect-square overflow-hidden bg-gray-100">
            <img
              src={`${process.env.NODE_ENV === 'production' ? '/website2' : ''}/images/work/${sample.path}`}
              alt={`Work sample ${sample.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Last work sample - row 6 */}
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={`${process.env.NODE_ENV === 'production' ? '/website2' : ''}/images/work/${workSamples[16].path}`}
            alt={`Work sample ${workSamples[16].id}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
