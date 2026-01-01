import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code2, Server, Wrench } from 'lucide-react';

export function Skills() {
  const { t } = useTranslation(); 

  const skills = [
    {
      category: t('skills.frontend'),
      icon: <Code2 className="w-6 h-6 text-violet-500" />,
      items: [
        'React.js',
        'React Router',
        'JavaScript (ES6+)',
        'HTML5 & CSS3',
        'Context API',
        'Protected Routes',
        'i18next',
        'Axios/Fetch',
        'Responsive Design',
        'Tailwind CSS',
      ],
    },
    {
      category: t('skills.backend'),
      icon: <Server className="w-6 h-6 text-violet-500" />,
      items: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'JWT Auth',
        'REST API',
        'Middleware',
        'Multer Uploads',
        'Error Handling',
        'Validation',
      ],
    },
    {
      category: t('skills.tools'),
      icon: <Wrench className="w-6 h-6 text-violet-500" />,
      items: [
        'Git & GitHub',
        'Postman',
        'VS Code',
        'npm',
        'Cloudinary',
        'Vercel',
        'Figma',
        'Chrome DevTools',
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#030712] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter">
            {t('skills.title')}
          </h2>
          <div className="w-24 h-2 bg-violet-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-violet-500/50 dark:hover:border-violet-500/50 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute -inset-24 bg-violet-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white transition-all duration-500">
                
                    {React.cloneElement(skillGroup.icon, { 
                      className: "w-6 h-6 text-violet-500 group-hover:text-white transition-colors duration-500" 
                    })}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    {skillGroup.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 group-hover:border-violet-200 dark:group-hover:border-violet-900/50 transition-colors duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 export default Skills;