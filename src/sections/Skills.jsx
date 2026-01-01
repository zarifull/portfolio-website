import React from 'react'
import { useTranslation } from 'react-i18next' 
import { Code2, Server, Wrench } from 'lucide-react'
import { SKILLS_DATA } from '../data/skillsData' 

export function Skills() {
  const { t } = useTranslation()

  const skills = [
    {
      category: t('skills.frontend'), 
      icon: <Code2 className="w-6 h-6 text-violet-500" />,
      items: SKILLS_DATA.frontend,
    },
    {
      category: t('skills.backend'),
      icon: <Server className="w-6 h-6 text-violet-500" />,
      items: SKILLS_DATA.backend,
    },
    {
      category: t('skills.tools'),
      icon: <Wrench className="w-6 h-6 text-violet-500" />,
      items: SKILLS_DATA.tools,
    },
  ]

  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('skills.title')}
          </h2>
          <div className="w-20 h-1 bg-violet-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700 hover:border-violet-500 dark:hover:border-violet-500 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-white dark:bg-slate-800 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-gray-200 dark:border-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Skills