import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import myPhoto from '../assets/myPhoto.png'; 

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-white dark:bg-[#030712] transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:pl-32 lg:pl-48 w-full grid md:grid-cols-2 gap-4 items-center relative">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8 z-20" 
        >
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-sm font-medium">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              {t('hero.status') || 'Available for work'}
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white uppercase leading-none">
              Zarina <span className="text-violet-500">.</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300">
              {t('hero.role')}
            </h2>
            
            <div className="flex items-center text-slate-500 dark:text-slate-400 uppercase tracking-widest text-xs font-bold">
              <MapPin size={18} className="mr-2 text-violet-500" />
              {t('hero.location')}
            </div>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed border-l-4 border-violet-500 pl-6">
            {t('hero.summary')}
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold uppercase text-xs tracking-widest rounded-xl transition-all shadow-lg shadow-violet-500/20 flex items-center gap-2"
            >
              {t('hero.cta')}
              <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        <div className="relative flex justify-center items-center h-full">
          <div className="absolute w-[100%] h-[100%] bg-violet-500/10 rounded-full blur-[120px] -z-10" />
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ 
              opacity: 1, 
              y: [-10, -30, -10] 
            }}
            transition={{ 
              opacity: { duration: 1 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative z-10 w-full flex justify-center -mt-32 md:-mt-52" 
          >
            <img 
              src={myPhoto} 
              alt="Zarina" 
              className="w-full max-w-[550px] lg:max-w-[650px] h-auto object-contain drop-shadow-[0_45px_80px_rgba(139,92,246,0.35)]"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}