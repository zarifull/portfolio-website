import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  GraduationCap,
  Heart,
  Lightbulb,
  Target,
  BookOpen,
  Users,
} from 'lucide-react'

export function About() {
  const { t } = useTranslation()

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            {t('about.title')}
          </h2>
          <p className="text-lg text-violet-600 dark:text-violet-400 font-medium">
            {t('about.subtitle')}
          </p>
          <div className="w-20 h-1 bg-violet-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-20">
          <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed text-center">
            {t('about.intro')}
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-6 h-6 text-violet-600 dark:text-violet-400" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t('about.philosophy.title')}
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t('about.philosophy.items', { returnObjects: true }).map((item, index) => (
              <div
                key={index}
                className="p-6 bg-violet-50 dark:bg-violet-900/10 rounded-xl border-2 border-violet-100 dark:border-violet-900/30"
              >
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
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
            <Lightbulb className="w-6 h-6 text-violet-600 dark:text-violet-400" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t('about.thinking.title')}
            </h3>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
            {t('about.thinking.description')}
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {t('about.thinking.items', { returnObjects: true }).map((item, index) => (
              <div
                key={index}
                className="px-4 py-3 bg-slate-50 dark:bg-slate-800 rounded-lg text-center border border-gray-100 dark:border-slate-700"
              >
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-6 h-6 text-violet-600 dark:text-violet-400" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t('about.values.title')}
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {t('about.values.items', { returnObjects: true }).map((value, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700"
              >
                <div className="text-4xl">{value.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {value.label}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-violet-600 dark:text-violet-400" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t('about.work.title')}
            </h3>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
            {t('about.work.description')}
          </p>
          <div className="space-y-3">
            {t('about.work.items', { returnObjects: true }).map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-slate-700"
              >
                <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20 max-w-4xl mx-auto">
          <div className="p-8 bg-gradient-to-br from-violet-50 to-blue-50 dark:from-violet-900/10 dark:to-blue-900/10 rounded-2xl border-2 border-violet-200 dark:border-violet-900/30">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {t('about.goal.title')}
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              {t('about.goal.description')}
            </p>
            <div className="space-y-3">
              {t('about.goal.items', { returnObjects: true }).map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-violet-600 dark:bg-violet-400 rounded-full"></div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-violet-50 dark:bg-violet-900/20 rounded-lg">
                <GraduationCap className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {t('about.education')}
              </h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              {t('about.university')}
            </p>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              {t('about.degree')}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
              {t('about.period')}
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {t('about.languages')}
              </h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-700 dark:text-slate-300">
                  Kyrgyz
                </span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded">
                  Native
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700 dark:text-slate-300">
                  English
                </span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded">
                  B2
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700 dark:text-slate-300">
                  Russian
                </span>
                <span className="px-2 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 text-xs font-semibold rounded">
                  B1
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About