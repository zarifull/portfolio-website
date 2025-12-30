import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.about'), href: '#about' }
  ];

  return (
    <nav className={`fixed top-0 w-full p-6 md:px-16 flex justify-between items-center z-[100] transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-[#030712]/90 backdrop-blur-xl border-b border-black/5 dark:border-white/10 py-4' 
        : 'bg-transparent py-8'
    }`}>
   
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="text-2xl font-black tracking-tighter uppercase z-[110] cursor-pointer transition-colors duration-500"
      >
        <span className="text-gray-500 dark:text-white">zari</span>
        <span className="text-violet-500">.dev</span>
      </motion.div>

      <div className="flex items-center gap-4 md:gap-10 z-[110]">
        
        <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500 dark:text-slate-400">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="relative group hover:text-violet-600 dark:hover:text-white transition-colors duration-300"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          {['ky', 'ru', 'en'].map((lng, i) => (
            <React.Fragment key={lng}>
              <button
                onClick={() => i18n.changeLanguage(lng)}
                className={`text-[10px] font-black uppercase cursor-pointer transition-all ${
                  i18n.language === lng ? 'text-violet-600 scale-110' : 'text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {lng}
              </button>
              {i < 2 && <span className="text-[10px] text-gray-300 dark:text-gray-700">|</span>}
            </React.Fragment>
          ))}
        </div>

        <motion.button 
          whileTap={{ rotate: 180, scale: 0.8 }}
          whileHover={{ scale: 1.2 }}
          onClick={toggleTheme} 
          className="p-2 text-violet-600 dark:text-violet-400 cursor-pointer transition-all border-none bg-transparent"
        >
          {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </motion.button>

        <button 
          className="md:hidden text-violet-600 dark:text-white p-1" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 h-screen w-full bg-white dark:bg-[#030712] flex flex-col justify-center items-center z-[105]"
          >
            <div className="flex flex-col items-center gap-12">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-black text-violet-600 dark:text-white uppercase tracking-tighter"
                >
                  {link.name}
                </a>
              ))}

              <div className="flex gap-8 mt-4">
                 {['ky', 'ru', 'en'].map((lng) => (
                   <button 
                    key={lng} 
                    onClick={() => { i18n.changeLanguage(lng); setIsMenuOpen(false); }} 
                    className={`text-2xl font-black uppercase ${
                      i18n.language === lng ? 'text-violet-600 border-b-4 border-violet-500' : 'text-gray-300 dark:text-gray-600'
                    }`}
                  >
                     {lng}
                   </button>
                 ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;