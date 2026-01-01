import React from 'react';
import { useTranslation } from 'react-i18next'; 
import {
  GraduationCap,
  Heart,
  Lightbulb,
  Target,
  BookOpen,
  Users,
} from 'lucide-react';

export function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-[#030712] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter">
            {t('about.title')}
          </h2>
          <p className="text-lg text-violet-600 dark:text-violet-400 font-bold uppercase tracking-widest">
            {t('about.subtitle')}
          </p>
          <div className="w-24 h-2 bg-violet-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-20">
          <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed text-center italic font-medium">
            "{t('about.intro')}"
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-8 h-8 text-violet-500" />
            <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase">
              {t('about.philosophy.title')}
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t('about.philosophy.items', { returnObjects: true }).map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800"
              >
                <h4 className="text-lg font-bold text-violet-500 mb-2">
                  {item.label}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-8 h-8 text-violet-500" />
            <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase">
              {t('about.thinking.title')}
            </h3>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 font-medium">
            {t('about.thinking.description')}
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {t('about.thinking.items', { returnObjects: true }).map((item, index) => (
              <div
                key={index}
                className="px-4 py-3 bg-white dark:bg-slate-800 rounded-full text-center border border-slate-100 dark:border-slate-700 shadow-sm"
              >
                <span className="text-slate-700 dark:text-slate-300 font-bold text-sm uppercase">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-8 h-8 text-violet-500" />
            <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase">
              {t('about.values.title')}
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {t('about.values.items', { returnObjects: true }).map((value, index) => (
              <div
                key={index}
                className="flex gap-4 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] border border-slate-100 dark:border-slate-800"
              >
                <div className="text-4xl">{value.icon}</div>
                <div>
                  <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2 uppercase">
                    {value.label}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20 max-w-4xl mx-auto">
          <div className="p-10 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-[2.5rem] text-white shadow-xl shadow-violet-500/20">
            <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">
              {t('about.goal.title')}
            </h3>
            <p className="text-xl text-violet-100 mb-8 font-medium">
              {t('about.goal.description')}
            </p>
            <div className="space-y-4">
              {t('about.goal.items', { returnObjects: true }).map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-2 w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-lg font-medium italic">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                <GraduationCap className="w-6 h-6 text-violet-500" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase">
                {t('about.education')}
              </h3>
            </div>
            <p className="text-xl font-bold text-slate-900 dark:text-white">
              {t('about.university')}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mt-1">
              {t('about.degree')}
            </p>
            <p className="text-sm font-black text-violet-500 mt-4 uppercase tracking-widest">
              {t('about.period')}
            </p>
          </div>

          <div className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                <BookOpen className="w-6 h-6 text-violet-500" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase">
                {t('about.languages')}
              </h3>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Kyrgyz', level: 'Native', color: 'bg-green-500' },
                { name: 'English', level: 'B2', color: 'bg-blue-500' },
                { name: 'Russian', level: 'B1', color: 'bg-violet-500' }
              ].map((lang) => (
                <div key={lang.name} className="flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-800 dark:text-slate-200">{lang.name}</span>
                  <span className={`px-4 py-1 ${lang.color} text-white text-[10px] font-black rounded-full uppercase tracking-tighter`}>
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;