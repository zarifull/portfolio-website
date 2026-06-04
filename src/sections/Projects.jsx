import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { SystemDemos } from '../components/SystemDemos';
import { PROJECTS_CONFIG, PROJECT_CATEGORIES } from '../data/projectData';

export function Projects() {
  const { t } = useTranslation();

  const translatedItems = t('projects.items', { returnObjects: true }) || [];

  const projects = PROJECTS_CONFIG.map((config, index) => {
    const translation = translatedItems[index] || {};

    return {
      title: translation.title || 'No Title',
      description: translation.description || '',
      tags: translation.tags || [],
      type: translation.type || 'Web',
      icon: config.icon,
      links: config.links,
      id: config.id,
      category: config.category,
      live: config.live,
    };
  });

  const projectsByCategory = PROJECT_CATEGORIES.map((cat) => ({
    ...cat,
    projects: projects.filter((p) => p.category === cat.id),
  }));

  return (
    <section
      className="py-24 bg-slate-50 dark:bg-[#030712] transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {t('projects.title')}
            </h2>
            <div className="w-32 h-1.5 bg-violet-500 rounded-full" />
          </div>
          <a
            href="https://github.com/zarifull"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 dark:text-violet-400 font-bold flex items-center gap-2 hover:gap-3 transition-all"
          >
            View all on GitHub <ExternalLink size={18} />
          </a>
        </div>

        <SystemDemos />

        <div className="space-y-20">
          {projectsByCategory.map((category) => (
            <div key={category.id}>
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8 pb-3 border-b border-slate-200 dark:border-slate-800">
                {t(category.labelKey)}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {category.projects.map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
