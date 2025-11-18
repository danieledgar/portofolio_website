import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-transparent py-6 px-6 relative z-10">
      <p className="text-sm text-center text-gray-500 dark:text-gray-400 transition-colors duration-300">
        © Daniel Edgar {new Date().getFullYear()}
      </p>
    </footer>
  );
}
