import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ExternalLink,
  Globe,
  Code2,
  Database,
  Shield,
  Search,
  Users,
  Languages,
} from 'lucide-react';

export function FeaturedProject() {
  const { t } = useTranslation();

  const features = [
    { icon: <Shield className="w-5 h-5" />, text: t('featured.features.items.0') },
    { icon: <Search className="w-5 h-5" />, text: t('featured.features.items.1') },
    { icon: <Globe className="w-5 h-5" />, text: t('featured.features.items.2') },
    { icon: <Users className="w-5 h-5" />, text: t('featured.features.items.3') },
    { icon: <Languages className="w-5 h-5" />, text: t('featured.features.items.4') },
    { icon: <Code2 className="w-5 h-5" />, text: t('featured.features.items.5') },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-violet-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-600 text-white text-sm font-bold uppercase tracking-wider shadow-lg">
            <span className="relative flex h-3 w-3 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            {t('featured.badge')}
          </div>
        </div>

        <div className="flex flex-col gap-16">
          
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-none">
                {t('featured.title')}
              </h2>
              <p className="text-2xl text-violet-600 dark:text-violet-400 font-bold">
                {t('featured.subtitle')}
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto lg:mx-0 border-l-4 border-violet-500 pl-6 text-left">
                {t('featured.description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://batkentravels.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-10 py-5 bg-violet-600 hover:bg-violet-700 text-white font-black uppercase text-xs tracking-widest rounded-2xl transition-all shadow-xl shadow-violet-500/20"
              >
                <Globe className="w-5 h-5" />
                {t('featured.viewLive')}
                <ExternalLink className="w-4 h-4" />
              </a>
              <div className="flex items-center justify-center px-8 py-5 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {t('featured.liveUrl')} <span className="text-violet-500 italic lowercase ml-1">(coming soon)</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white dark:border-slate-700 shadow-sm">
                  <div className="text-violet-600 dark:text-violet-400">{feature.icon}</div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-violet-500/20 to-transparent rounded-[2.5rem] blur-3xl transform translate-y-12"></div>
            
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white dark:border-slate-800 bg-slate-100">
              <img
                src="https://github.com/user-attachments/assets/2c0395f7-f241-45a9-9e12-8e29685d46be"
                alt="Project Screenshot"
                className="w-full h-auto object-cover"
              />
              
              <div className="absolute top-6 right-6 px-4 py-2 bg-green-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                LIVE
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default FeaturedProject