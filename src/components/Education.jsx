import React, { useState, useEffect } from 'react';

export default function Education() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background decorative elements with parallax */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.25}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-36 h-36 border border-gray-200 dark:border-gray-800 rounded-full opacity-25"></div>
        <div className="absolute bottom-1/3 right-1/4 w-28 h-28 border border-gray-200 dark:border-gray-800 opacity-20"></div>
      </div>

      <div 
        className="relative z-10"
        style={{
          transform: `translateY(${scrollY * 0.12}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">Education</h2>
        <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md dark:shadow-gray-800/50 transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">BSc. Information Technology</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">Kabarak University</p>
          <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Expected Graduation: 2026</p>
        </div>
      </div>
      </div>
    </section>
  );
}
