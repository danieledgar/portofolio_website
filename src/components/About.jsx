import React, { useState, useEffect } from 'react';

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Flutter'],
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 14.89c-.85 0-1.54-.69-1.54-1.54s.69-1.54 1.54-1.54 1.54.69 1.54 1.54-.69 1.54-1.54 1.54zm7.95-.22c-.2-.67-.42-1.33-.67-1.99.25-.66.47-1.32.67-1.99 1.47-.42 2.42-1.11 2.42-1.94s-.95-1.52-2.42-1.94c-.2-.67-.42-1.33-.67-1.99.47-.93.84-1.81.84-2.43 0-.62-.37-1.08-.84-1.08-.62 0-1.5.37-2.43.84-.66-.25-1.32-.47-1.99-.67C14.44.95 13.75 0 12.92 0s-1.52.95-1.94 2.42c-.67.2-1.33.42-1.99.67-.93-.47-1.81-.84-2.43-.84-.62 0-1.08.46-1.08 1.08 0 .62.37 1.5.84 2.43-.25.66-.47 1.32-.67 1.99C3.18 7.23 2.23 7.92 2.23 8.75s.95 1.52 2.42 1.94c.2.67.42 1.33.67 1.99-.47.93-.84 1.81-.84 2.43 0 .62.46 1.08 1.08 1.08.62 0 1.5-.37 2.43-.84.66.25 1.32.47 1.99.67.42 1.47 1.11 2.42 1.94 2.42s1.52-.95 1.94-2.42c.67-.2 1.33-.42 1.99-.67.93.47 1.81.84 2.43.84.62 0 1.08-.46 1.08-1.08 0-.62-.37-1.5-.84-2.43.25-.66.47-1.32.67-1.99 1.47-.42 2.42-1.11 2.42-1.94s-.95-1.52-2.42-1.94z"/>
      </svg>
    )
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'Java', 'C', 'Firebase', 'AWS'],
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M2 2v20h20V2H2zm18 18H4V4h16v16z"/>
        <path d="M6 6h12v2H6zm0 4h12v2H6zm0 4h12v2H6zm0 4h12v2H6z"/>
      </svg>
    )
  },
  {
    category: 'Database',
    skills: ['MySQL', 'MongoDB', 'Firebase'],
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
      </svg>
    )
  },
  {
    category: 'Tools',
    skills: ['Git', 'REST APIs', 'Figma'],
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
      </svg>
    )
  }
];

const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Completed', value: '15+' },
  { label: 'Technologies', value: '10+' },
  { label: 'Happy Clients', value: '8+' }
];

export default function About(){
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Trigger animations when user scrolls halfway through descriptions (around 400-500px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="min-h-screen bg-white dark:bg-gray-900 px-6 py-32 transition-colors duration-300 relative overflow-hidden">
      {/* Fixed Background SVGs */}
      <svg 
        className="fixed top-0 right-0 w-1/3 pointer-events-none z-0 opacity-20" 
        viewBox="0 0 200 200"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-400 dark:text-gray-700"/>
      </svg>

      <svg 
        className="fixed bottom-0 left-0 w-1/4 pointer-events-none z-0 opacity-20" 
        viewBox="0 0 200 200"
        style={{
          transform: `translateY(${scrollY * -0.15}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-400 dark:text-gray-700"/>
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Stats Section - loads on page load */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 animate-fade-in-up">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-3xl hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight transition-colors duration-300">
              Building Digital Excellence
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              I create websites and digital experiences that value clarity above excess. Through minimal form and precise detail, I aim to build work that lasts and offers a quiet sense of order.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              I am a passionate and self-driven Information Technology student with strong interests in software development, system design, and full-stack web applications.
            </p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              My approach combines technical expertise with creative problem-solving, ensuring each project delivers both functionality and aesthetic appeal. I specialize in creating responsive, user-friendly applications that meet modern web standards.
            </p>
            <div className="pt-6">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Core Values</h3>
              <ul className="space-y-3">
                {['Clean Code', 'User Experience', 'Continuous Learning', 'Innovation'].map((value, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold text-black dark:text-white mb-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-12'
          }`}
          style={{
            transform: isVisible ? 'translateX(0) scale(1) rotate(0deg)' : 'translateX(-100px) scale(0.5) rotate(-12deg)'
          }}>
            Languages I'm Good At
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div 
                key={catIndex}
                className={`bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 hover:shadow-xl transition-all duration-1000 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${catIndex * 200}ms`,
                  transform: isVisible 
                    ? 'translateX(0) translateY(0) scale(1) rotate(0deg)' 
                    : catIndex % 2 === 0 
                      ? 'translateX(-150px) translateY(50px) scale(0.7) rotate(-15deg)'
                      : 'translateX(150px) translateY(50px) scale(0.7) rotate(15deg)'
                }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-black dark:text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
