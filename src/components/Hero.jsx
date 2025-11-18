import React, { useState, useEffect } from 'react';
import './AnimatedSVG.css';

const roles = [
  {
    title: 'Front-end',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M12 14.89c-.85 0-1.54-.69-1.54-1.54s.69-1.54 1.54-1.54 1.54.69 1.54 1.54-.69 1.54-1.54 1.54zm7.95-.22c-.2-.67-.42-1.33-.67-1.99.25-.66.47-1.32.67-1.99 1.47-.42 2.42-1.11 2.42-1.94s-.95-1.52-2.42-1.94c-.2-.67-.42-1.33-.67-1.99.47-.93.84-1.81.84-2.43 0-.62-.37-1.08-.84-1.08-.62 0-1.5.37-2.43.84-.66-.25-1.32-.47-1.99-.67C14.44.95 13.75 0 12.92 0s-1.52.95-1.94 2.42c-.67.2-1.33.42-1.99.67-.93-.47-1.81-.84-2.43-.84-.62 0-1.08.46-1.08 1.08 0 .62.37 1.5.84 2.43-.25.66-.47 1.32-.67 1.99C3.18 7.23 2.23 7.92 2.23 8.75s.95 1.52 2.42 1.94c.2.67.42 1.33.67 1.99-.47.93-.84 1.81-.84 2.43 0 .62.46 1.08 1.08 1.08.62 0 1.5-.37 2.43-.84.66.25 1.32.47 1.99.67.42 1.47 1.11 2.42 1.94 2.42s1.52-.95 1.94-2.42c.67-.2 1.33-.42 1.99-.67.93.47 1.81.84 2.43.84.62 0 1.08-.46 1.08-1.08 0-.62-.37-1.5-.84-2.43.25-.66.47-1.32.67-1.99 1.47-.42 2.42-1.11 2.42-1.94s-.95-1.52-2.42-1.94z"/>
      </svg>
    )
  },
  {
    title: 'Full-Stack Engineer',
    skills: ['React', 'Node.js', 'Firebase', 'MySQL', 'MongoDB', 'REST APIs'],
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M2 2v20h20V2H2zm18 18H4V4h16v16z"/>
        <path d="M6 6h12v2H6zm0 4h12v2H6zm0 4h12v2H6zm0 4h12v2H6z"/>
      </svg>
    )
  },
  {
    title: 'Mobile App Engineer',
    skills: ['Flutter', 'React Native', 'Firebase', 'Mobile UI/UX'],
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M17 19H7V5h10m0-2H7c-1.11 0-2 .89-2 2v18a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2z"/>
      </svg>
    )
  },
  {
    title: 'Payment Integration',
    skills: ['M-Pesa', 'PayPal', 'Stripe', 'Payment APIs'],
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
      </svg>
    )
  }
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Scroll to top on component mount (refresh or navigation)
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Trigger animation when user scrolls down a bit
      if (window.scrollY > 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="hero" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6 relative overflow-hidden transition-colors duration-300 pt-32">
      {/* Top animated SVG - Fixed position */}
      <svg 
        className="fixed top-0 left-0 w-full pointer-events-none z-0" 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1773.98 917.81"
        preserveAspectRatio="none"
        style={{
          transform: `translateY(${scrollY * -0.3}px)`,
          transition: 'transform 0.1s ease-out',
          height: '45vh',
          opacity: 0.5
        }}
      >
        <path 
          className="animated-path text-gray-400 dark:text-gray-600" 
          d="M2.13,496.09C25.31,517.29,50.31,536.29,79.31,548.29c26,10,54,11,80-1,9-5,17-11,24-19,7-9,12-19,16-29,5-13,5-26,5-39,0-6,1-11,0-17-2-8-2-15-4-22-3-7-4-14-7-21-7-17-16-31-27-47-9-11-17-21-26-32-18-24-36-45-53-70-2-3-3-7-4-10-1-2-4-3-5-5-21-40-33-88-13-131,2-4,5-9,7-13C104.31,44.29,160.31,25.29,214.31,28.29c21,2,40,5,60,12,29,11,55,25,81,44,19,15,36,28,53,44,3,2,6,4,8,6,5,6,11,11,17,17,7,6,14,12,21,19,18,16,35,29,54,44,11,7,21,13,32,20,18,10,36,18,55,24,18,7,37,10,56,12,21,2,41-2,61-8,66-24,98-86,133-144,7-10,13-19,20-29,6-8,12-16,19-24,9-10,18-18,28-26,16-12,32-22,50-29,25-10,53-9,78,0,46,18,64,66,71,112,7,52,6,104,24,153,9,22,22,44,44,56l3,3c5,2,9,6,15,7,2,1,4,3,7,4,19,7,38,12,58,18,3,1,7,3,10,5h4c18,10,34,19,46,36,11,16,17,33,18,52,2,44-15,85-37,123-18,30-35,57-46,89-6,18-9,37-9,56,1,7,1,15,2,22,3,17,7,32,13,47,14,33,34,60,63,83,56,43,132,52,193,16l3-3c2-1,5-2,7-4,6-5,11-11,19-14,13-15,28-28,39-46,2-3,2-5,4-8,20-28,30-57,39-89,9-36,14-72,11-108-5-70-32-133-52-201-8-31-14-61-12-92,3-36,14-69,35-101,5-7,11-13,16-20,6-7,12-14,20-18l6-6c9-7,18-13,28-19,4-2,9-4,14-6,25-9,51-15,77.58-14.32" 
          fill="none" 
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      {/* Bottom animated SVG line - Fixed position */}
      <svg 
        className="fixed left-0 w-full pointer-events-none z-0" 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1400 300"
        preserveAspectRatio="none"
        style={{
          bottom: '80px',
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out',
          height: '20vh',
          opacity: 0.5
        }}
      >
        <path
          className="animated-path-delay text-gray-400 dark:text-gray-600"
          d="M 1399.17,37.1 C 1311.9,10 1215.51,40 1139.63,90.93 C 1128.46,98.43 1117.25,106.74 1110.62,118.45 C 1103.99,130.16 1103.13,146.14 1111.99,156.26 C 1120.85,166.38 1140.34,165.79 1145.8,153.49 C 1150.96,141.87 1141,128.07 1128.86,124.28 C 1116.72,120.49 1103.63,123.7 1091.28,126.72 C 996.83,149.86 899.73,162.17 802.5,163.34 C 674.21,164.88 541.42,145.45 432.91,76.99 C 407.6,61.02 383.78,42.49 356.88,29.38 C 322.66,12.69 284.56,5.33 246.62,2.17 C 211.9,-0.84 176.62,-0.31 142.65,7.44 C 105.57,15.9 70.96,32.73 37.6,50.98 C 18.9,61.21 -2.25,77.12 0.79,98.21"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        
        <circle cx="520" cy="50" r="3" fill="currentColor" className="text-black dark:text-white" opacity="0.4" />
      </svg>

      <div 
        className="max-w-7xl mx-auto text-center relative z-10"
      >
        <div className="mb-32">
          <h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-black dark:text-white mb-0 tracking-tight leading-none transition-colors duration-300 animate-fade-in-up"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: 1 - scrollY / 800,
              transition: 'transform 0.1s ease-out'
            }}
          >
            DANIEL EDGAR
          </h1>
        </div>
        
        {/* Description on top */}
        <div className="mb-28">
          <p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in-scale animate-delay-1"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: 1 - scrollY / 800,
              transition: 'transform 0.1s ease-out'
            }}
          >
            Building digital experiences with clarity and purpose. Specialized in creating elegant, functional solutions.
          </p>
        </div>
        
        {/* Role cards with icons and skills - scroll triggered */}
        <div className="flex justify-center items-start flex-wrap gap-8 md:gap-12">
          {roles.map((role, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center max-w-xs"
            >
              {/* Icon and Title - loads with initial animation */}
              <div className="flex flex-col items-center mb-6 text-gray-700 dark:text-gray-300 animate-fade-in-scale" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                <div className="mb-3">
                  {role.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold">
                  {role.title}
                </h3>
              </div>
              
              {/* Skills as simple badges - scroll triggered animation */}
              <div className={`flex flex-wrap gap-2 justify-center transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}>
                {role.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Technology Icons - Sequential animation from left to right */}
        <div className="mt-20 flex justify-center items-center gap-8 flex-wrap max-w-4xl mx-auto">
          {[
            // JavaScript
            <svg key="js" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-yellow-500">
              <path d="M3 3h18v18H3V3m4.73 15.04c.4.85 1.19 1.55 2.54 1.55 1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7V17c0 .86-.35 1.08-.9 1.08-.58 0-.82-.4-1.09-.87l-1.38.83m5.98-.18c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8z"/>
            </svg>,
            // HTML5
            <svg key="html" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-orange-600">
              <path d="M12 17.56l4.07-1.13.55-6.1H9.38L9.2 8.3h7.6l.2-1.99H7l.56 6.01h6.89l-.23 2.58-2.22.6-2.22-.6-.14-1.66h-2l.29 3.19L12 17.56M4.07 3h15.86L18.5 19.2 12 21l-6.5-1.8L4.07 3z"/>
            </svg>,
            // CSS3
            <svg key="css" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-blue-600">
              <path d="M5 3l-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81-5.48 1.81-4.75-1.81.33-1.64H2.85l-.79 4 7.85 3 9.05-3 1.2-6.03.24-1.21L21.94 3H5z"/>
            </svg>,
            // TypeScript
            <svg key="ts" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-blue-500">
              <path d="M3 3h18v18H3V3zm10.71 14.86c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8zM13 11.25H8v1.5h1.5V20h2v-7.25H13v-1.5z"/>
            </svg>,
            // Figma
            <svg key="figma" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-purple-500">
              <path d="M12 2C9.79 2 8 3.79 8 6s1.79 4 4 4v-4c0-2.21-1.79-4-4-4zm0 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-4h-4zm4-16c2.21 0 4 1.79 4 4s-1.79 4-4 4h-4V2h4zm0 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"/>
            </svg>,
            // Node.js
            <svg key="node" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-green-600">
              <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.22 0L10 19.65c-.08-.03-.16-.04-.21-.01-.53.3-.63.36-1.12.51-.12.04-.31.11.07.32l2.48 1.47c.24.14.5.21.78.21s.54-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2z"/>
            </svg>,
            // React
            <svg key="react" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-cyan-500">
              <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95z"/>
            </svg>,
            // Tailwind
            <svg key="tailwind" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-cyan-400">
              <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"/>
            </svg>
          ].map((icon, idx) => (
            <div
              key={idx}
              className={`transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-75'
              }`}
              style={{
                transitionDelay: `${800 + idx * 100}ms`
              }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}