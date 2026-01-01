import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; 
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Footer from './sections/Footer';
import { Projects } from './sections/Projects';
import FeaturedProject from './sections/FueturedProjects';
import Skills from './sections/Skills';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 
  'dark');
  

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'; 
    setTheme(nextTheme);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-500 relative overflow-hidden">
      
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500">
        <motion.div 
          animate={{ x: [0, 120, 0], y: [0, 80, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-600/20 blur-[130px] rounded-full" 
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <main className="flex-grow pt-0"> 
          <Hero />
          <section id="projects" className="px-6 md:px-16 min-h-[500px]">
            <FeaturedProject />
            <Projects />
            <Skills />
           
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;