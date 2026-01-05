import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import myPhoto from '../assets/myPhoto.png'; 
import { HERO_CONFIG } from '../data/heroData';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 md:pt-32 pb-8 bg-white dark:bg-[#030712] transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:pl-32 lg:pl-48 w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center relative text-center md:text-left">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 md:space-y-8 z-20 flex flex-col items-center md:items-start order-1" 
        >
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-sm font-medium">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              {t('hero.availability')}
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white uppercase leading-none">
              Zarina <span className="text-violet-500">.</span>
            </h1>
            
            <h2 className="text-xl md:text-3xl font-medium text-slate-600 dark:text-slate-300">
              {t('hero.role')}
            </h2>
            
            <div className="flex items-center text-slate-500 dark:text-slate-400 uppercase tracking-widest text-xs font-bold">
              <MapPin size={18} className="mr-2 text-violet-500" />
              {t('hero.location')}
            </div>
          </div>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed border-l-4 border-violet-500 pl-6 text-center md:text-left">
            {t('hero.summary')}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={HERO_CONFIG.projectsAnchor}
              className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold uppercase text-xs tracking-widest rounded-xl transition-all shadow-lg shadow-violet-500/20 flex items-center gap-2"
            >
              {t('hero.cta')}
              <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        <div className="relative flex justify-center items-center h-full order-2">
          <div className="absolute w-[120%] h-[120%] bg-violet-500/5 rounded-full blur-[100px] -z-10" />
          
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            
            animate={{ y: [0, -20, 0] }} 
            transition={{ 
              opacity: { duration: 1 }, 
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" } 
            }}
            className="relative z-10 w-full flex justify-center -mt-24 sm:-mt-28 md:-mt-48 lg:-mt-64" 
          >
            <img 
              src={myPhoto} 
              alt="Zarina"
              className="w-[90%] sm:w-[75%] md:w-full max-w-[320px] md:max-w-[550px] lg:max-w-[650px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(139,92,246,0.3)]"
            />
          </motion.div>
        </div>
 
      </div>
    </section>
  );
}
