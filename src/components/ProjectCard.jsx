import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, ExternalLink } from 'lucide-react';

export function ProjectCard({ title, description, tags, icon: Icon, type, links }) {
  const { t } = useTranslation();
  return (
    <article className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="flex justify-between items-start mb-8">
        <div className="p-4 bg-violet-50 dark:bg-violet-900/20 rounded-2xl text-violet-500">
          <Icon size={32} />
        </div>
        <span className="px-4 py-1.5 bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 text-xs font-bold uppercase tracking-wider rounded-full">
          {type}
        </span>
      </div>

      <div className="flex-grow">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-10">
        {tags.map((tag, i) => (
          <span key={i} className="text-sm font-medium text-slate-400 dark:text-slate-500">
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a 
          href={links?.demo} 
          target='_blank'
          className="flex-1 bg-[#0F172A] dark:bg-white text-white dark:text-slate-900 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        >
          <ExternalLink size={20} />
          {t('projects.viewProject')}
        </a>
        <a 
          href={links?.github} 
          target='_blank'
          className="w-14 h-14 border border-gray-200 dark:border-slate-700 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          <Github size={22} />
        </a>
      </div>
    </article>
  );
}
 export default ProjectCard;