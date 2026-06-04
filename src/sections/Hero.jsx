import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import myPhoto from '../assets/myPhoto.png';
import { HERO_CONFIG } from '../data/heroData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section 
      id="home" 
      className="relative min-h-[100dvh] mt-24 md:mt-10 md:mb-10 lg:mt-0 lg;mb-0 lg:ml-12 flex items-center justify-center bg-white dark:bg-[#030712] transition-colors duration-500 overflow-visible font-sans"
    >
      <div className="relative z-10 w-full max-w-[1400px] mx-auto min-h-[100dvh] grid grid-cols-1 md:grid-cols-10 gap-5 items-center md:mt-10 px-6 md:px-10 xl:px-20 overflow-visible">

        <div className="col-span-1 md:col-span-6 flex flex-col justify-center items-center md:items-start text-center md:text-left pb-12 md:pb-80 md:mt-10 md:ml-8 lg:mt-25 ">
          
          <motion.div {...fadeUp(0)}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet-200 dark:border-violet-900/40 bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 text-[11px] font-bold uppercase tracking-wider mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-500 animate-pulse" aria-hidden="true" />
              {t('hero.availability')}
            </div>
          </motion.div>

          <motion.h1 
            className="font-serif text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-normal tracking-tight text-slate-900 dark:text-slate-50 leading-none mb-2"
            {...fadeUp(0.08)}
          >
            {t('hero.fullName')}
            <span className="text-violet-600 dark:text-violet-500">.</span>
          </motion.h1>

          <motion.hr 
            className="w-10 h-[2px] bg-violet-600 dark:bg-violet-500 my-6 border-none rounded"
            {...fadeUp(0.14)}
          />

          <motion.p 
            className="text-xs sm:text-sm lg:text-base font-semibold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-2.5"
            {...fadeUp(0.18)}
          >
            {t('hero.role')}
          </motion.p>

          <motion.div 
            className="flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-7"
            {...fadeUp(0.22)}
          >
            <MapPin size={12} className="text-violet-600 dark:text-violet-500" strokeWidth={2.5} />
            {t('hero.location')}
          </motion.div>

          <motion.p 
            className="text-sm lg:text-base px-5 md:px-0 text-slate-600 dark:text-slate-400 max-w-md leading-relaxed font-normal mb-9"
            {...fadeUp(0.27)}
          >
            {t('hero.summary')}
          </motion.p>

          <motion.div {...fadeUp(0.32)}>
            <motion.a
              href={HERO_CONFIG.projectsAnchor}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 hover:bg-violet-700 text-white text-[11px] font-bold uppercase tracking-widest rounded-lg transition-all shadow-lg shadow-violet-600/20 hover:shadow-xl hover:shadow-violet-600/30 hover:-translate-y-0.5"
              whileTap={{ scale: 0.97 }}
            >
              {t('hero.cta')}
              <ArrowRight size={14} strokeWidth={2.5} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="w-full flex items-center md:items-end justify-center md:col-span-4 h-[75vw] max-h-[450px] min-h-[440px] md:h-full md:max-h-none md:min-h-0 md:self-stretch overflow-visible mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src={myPhoto}
            alt={t('hero.fullName')}
           
            className="block select-none mb-60 ml-35 md:ml-20 md:mb-60 md:mt-0 lg:mb-60 pointer-events-none w-auto h-full max-w-full scale-135 md:scale-[1.5] lg:scale-[1.3] md:w-full md:h-[70vh] md:max-h-[70vh] lg:h-[80vh] lg:max-h-[70vh] xl:h-[92vh] xl:max-h-[100vh] object-contain object-center md:object-bottom transition-all duration-500 cubic-bezier(0.22, 1, 0.36, 1) md:translate-y-2 md:hover:translate-y-20 lg:-translate-y-30 lg:hover:-translate-y-32 xl:-translate-y-65 xl:hover:-translate-y-18 filter 
              drop-shadow-[0_8px_24px_rgba(124,58,237,0.15)] 
              md:drop-shadow-[0_-6px_20px_rgba(124,58,237,0.12)] 
              md:drop-shadow-[0_20px_55px_rgba(124,58,237,0.32)] 
              md:drop-shadow-[0_44px_75px_rgba(80,20,180,0.22)]
              md:hover:drop-shadow-[0_-8px_26px_rgba(124,58,237,0.18)]
              md:hover:drop-shadow-[0_26px_65px_rgba(124,58,237,0.40)]
              md:hover:drop-shadow-[0_52px_85px_rgba(80,20,180,0.28)]"
            draggable="false"
          />
        </motion.div>

      </div>
    </section>
  );
}