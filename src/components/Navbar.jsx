import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    // Show back to top button when scrolled down
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="fixed top-8 left-1/2 md:transform md:-translate-x-1/2 right-8 md:right-auto md:left-1/2 z-50 transition-all duration-300">
        <div className="flex justify-end md:justify-center items-center relative">
        {/* Desktop Menu - Centered with rounded background */}
        <ul className="hidden md:flex space-x-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full px-6 py-3 text-gray-600 dark:text-gray-300 text-sm tracking-wider shadow-lg items-center">
          <li>
            <Link to="/" onClick={handleHomeClick} className="px-4 py-2 rounded-full hover:bg-white dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all duration-300 ease-in-out block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/profile" className="px-4 py-2 rounded-full hover:bg-white dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all duration-300 ease-in-out block">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/projects" className="px-4 py-2 rounded-full hover:bg-white dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all duration-300 ease-in-out block">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/resume" className="px-4 py-2 rounded-full hover:bg-white dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all duration-300 ease-in-out block">
              Resume
            </Link>
          </li>
          
          {/* Dark Mode Toggle - Inside Nav Pill */}
          <li>
            <button
              onClick={toggleDarkMode}
              className="px-4 py-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 ease-in-out flex items-center justify-center"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button and Dark Mode Toggle */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            className="text-2xl text-black dark:text-white bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 ease-in-out shadow-lg"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md w-full mt-2 p-6 space-y-4 rounded-3xl shadow-lg text-gray-600 dark:text-gray-300 text-sm tracking-wider animate-fade-in">
          <li>
            <Link to="/" onClick={handleHomeClick} className="block px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-all duration-300 ease-in-out">
              Home
            </Link>
          </li>
          <li>
            <Link to="/profile" onClick={() => setMenuOpen(false)} className="block px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-all duration-300 ease-in-out">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setMenuOpen(false)} className="block px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-all duration-300 ease-in-out">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/resume" onClick={() => setMenuOpen(false)} className="block px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-all duration-300 ease-in-out">
              Resume
            </Link>
          </li>
          
          {/* Dark Mode Toggle in Mobile Menu */}
          <li className="pt-2 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={toggleDarkMode}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out"
            >
              {darkMode ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                  <span>Light</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  <span>Dark</span>
                </>
              )}
            </button>
          </li>
        </ul>
      )}
    </nav>

    {/* Back to Top Button */}
    {showBackToTop && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-black dark:bg-white text-white dark:text-black w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 ease-out flex items-center justify-center animate-fade-in-scale"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    )}
  </>
  );
}

export default Navbar;
