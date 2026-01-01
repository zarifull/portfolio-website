import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS_CONFIG } from '../data/ProjectCardData'
export function Projects() {
  const { t } = useTranslation();

  const translatedItems = t('projects.items', { returnObjects: true }) || [];

  const projects = PROJECTS_CONFIG.map((config, index) => ({
    ...config,
    ...translatedItems[index], 
    tags: translatedItems[index]?.tags || [] 
  }));

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {t('projects.title')}
            </h2>
            <div className="w-32 h-1.5 bg-violet-500 rounded-full"></div>
          </div>
          <a href="#" className="text-violet-600 dark:text-violet-400 font-bold flex items-center gap-2 hover:underline">
             View all on GitHub <ExternalLink size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}