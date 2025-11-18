import React, { useState, useEffect } from 'react';

export default function Contact(){
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      title: "Software Engineer",
      company: "Freelance",
      period: "2022 - Present",
      description: "Building modern web applications using React, Node.js, and cloud technologies. Specialized in creating responsive, user-friendly interfaces and robust backend systems.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"]
    },
    {
      title: "Designer",
      company: "Various Projects",
      period: "2023 - Present",
      description: "Creating intuitive user interfaces and engaging user experiences. Specialized in UI/UX design, prototyping, and design systems using industry-standard tools.",
      technologies: ["Figma", "Adobe XD", "Illustrator", "Photoshop"]
    },
    {
      title: "Mobile App Developer",
      company: "Various Projects",
      period: "2023 - Present",
      description: "Developed cross-platform mobile applications with focus on performance and user experience. Implemented features including real-time data sync and offline functionality.",
      technologies: ["React Native", "Firebase", "Redux"]
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-white dark:bg-gray-900 px-6 py-20 transition-colors duration-300 relative overflow-hidden">
      {/* Fixed Background decorative elements with parallax */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 border-2 border-gray-200 dark:border-gray-800 rounded-full opacity-10"
          style={{
            transform: `rotate(${scrollY * 0.05}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-1/3 left-1/4 w-64 h-64 border-2 border-gray-200 dark:border-gray-800 opacity-10"
          style={{
            transform: `rotate(${scrollY * -0.08}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 border border-gray-200 dark:border-gray-800 rounded-full opacity-5"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Intro Section - Loads immediately */}
        <div className="text-center mb-20 animate-fade-in-up">
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate developer creating innovative solutions across web and mobile platforms
          </p>
        </div>

        {/* Download CV Button - Loads immediately */}
        <div className="flex justify-center mb-20 animate-fade-in-scale" style={{ animationDelay: '300ms' }}>
          <a 
            href={`${process.env.PUBLIC_URL}/Daniel_Edgar_CV.docx`}
            download="Daniel_Edgar_CV.docx"
            className="group relative inline-flex items-center space-x-3 bg-black dark:bg-white text-white dark:text-black px-10 py-5 rounded-full hover:scale-105 transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-2xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download Full Resume</span>
          </a>
        </div>

        {/* Work Experience Section - Loads immediately */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-black dark:text-white mb-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            Work Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 animate-fade-in-up"
                style={{ animationDelay: `${500 + (index * 100)}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-black dark:text-white mb-2">{exp.title}</h4>
                    <p className="text-lg text-gray-600 dark:text-gray-400">{exp.company}</p>
                  </div>
                  <span className="inline-flex items-center space-x-2 mt-2 md:mt-0 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{exp.period}</span>
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section - Loads immediately */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Let's Connect
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            Available for freelance opportunities and collaborations
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <a 
              href="https://www.instagram.com/i.t.s_danny/" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center space-x-3 bg-gray-50 dark:bg-gray-800 px-6 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-pink-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300 group-hover:text-pink-500 transition-colors">Instagram</span>
            </a>
            
            <a 
              href="https://ke.linkedin.com/in/daniel-edgar-1b41b92b6" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center space-x-3 bg-gray-50 dark:bg-gray-800 px-6 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors">LinkedIn</span>
            </a>
            
            <a 
              href="https://wa.me/254112836014"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center space-x-3 bg-gray-50 dark:bg-gray-800 px-6 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-green-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300 group-hover:text-green-500 transition-colors">WhatsApp</span>
            </a>
            
            <a 
              href="mailto:danieledgar097@gmail.com"
              className="group flex items-center space-x-3 bg-gray-50 dark:bg-gray-800 px-6 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300 group-hover:text-red-500 transition-colors">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
