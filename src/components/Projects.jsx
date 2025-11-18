import React, { useState, useEffect } from 'react';

const projects = [
  {
    title: 'Waste Management App: Binova',
    desc: 'Full-stack web & mobile app using Dart and Firebase to schedule pickups, report illegal dumping, and manage near-expiry food stocks.',
    link: 'https://github.com/danieledgar/binova',
    tech: ['Dart', 'Firebase', 'Flutter', 'Mobile'],
    category: 'Mobile App'
  },
  {
    title: 'Library Management System',
    desc: 'C-based console application for managing book lending and cataloguing.',
    link: '#',
    tech: ['C', 'Console', 'Data Structures'],
    category: 'Desktop App',
    comingSoon: true
  },
  {
    title: 'Hotel System: Foodify',
    desc: 'Multi-hotel food ordering and delivery system with M-Pesa payment integration.',
    link: 'https://github.com/danieledgar/foodify',
    tech: ['Django', 'Python', 'M-Pesa', 'Web App'],
    category: 'Web App'
  }
];

export default function Projects(){
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Trigger CTA animation on scroll
      if (window.scrollY > 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-white dark:bg-gray-900 px-6 py-32 transition-colors duration-300 relative overflow-hidden">
      {/* Fixed Background Elements */}
      <svg 
        className="fixed top-20 right-10 w-64 pointer-events-none z-0 opacity-10" 
        viewBox="0 0 200 200"
        style={{
          transform: `rotate(${scrollY * 0.1}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <rect x="20" y="20" width="160" height="160" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-400 dark:text-gray-700"/>
        <rect x="40" y="40" width="120" height="120" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-400 dark:text-gray-700"/>
      </svg>

      <svg 
        className="fixed bottom-20 left-10 w-48 pointer-events-none z-0 opacity-10" 
        viewBox="0 0 200 200"
        style={{
          transform: `rotate(${scrollY * -0.08}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <polygon points="100,20 180,180 20,180" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-400 dark:text-gray-700"/>
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-scale">
            A collection of work that showcases my skills in building functional and elegant digital solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article 
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 animate-fade-in-up transition-all duration-300"
              style={{ 
                animationDelay: `${index * 150}ms`,
                transform: hoveredIndex === index ? 'translateY(-10px)' : ''
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Category Badge */}
              <div className="inline-block px-4 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-semibold rounded-full mb-4">
                {project.category}
              </div>

              {/* Project Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {index === 0 ? (
                  // Binova - trash bin icon
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700 dark:text-gray-300">
                    <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>
                  </svg>
                ) : index === 1 ? (
                  // Library - Book icon
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700 dark:text-gray-300">
                    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                  </svg>
                ) : (
                  // Foodify - Hotel/Building icon
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700 dark:text-gray-300">
                    <path d="M12 3L2 9v12h20V9l-10-6zm8 16h-4v-3h-3v3H9v-3H6v3H4v-9l8-4.5L20 12v7zm-8-5h-2v-2h2v2zm0-3h-2V9h2v2zm4 3h-2v-2h2v2zm0-3h-2V9h2v2zm-8 0H6V9h2v2zm0 3H6v-2h2v2z"/>
                  </svg>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed transition-colors duration-300">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link or Coming Soon */}
              {project.comingSoon ? (
                <span className="inline-flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm font-semibold">
                  Coming Soon
                </span>
              ) : project.link !== '#' && (
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 group/link"
                >
                  <span className="text-sm font-semibold">View on GitHub</span>
                  <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </a>
              )}

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gray-300 dark:group-hover:border-gray-600 transition-all duration-300 pointer-events-none"></div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-24 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '600ms' }}>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <a 
            href="https://github.com/danieledgar" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:scale-105 transition-all duration-300 group"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Visit My GitHub</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
