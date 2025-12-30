import React from 'react';
import { useTranslation } from 'react-i18next';
import { Lock, Globe, Database, Smartphone, ExternalLink } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';

export function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: 'Full Authentication System',
      description: 'Advanced security system with JWT, OTP verification, and role-based access control. Features multilingual support and professional UI flows.',
      tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'Context API'],
      icon: <Lock size={32} />,
      type: 'Full Stack',
      links: { demo: '#', github: '#' }
    },
    {
      id: 2,
      title: 'Booking System',
      description: 'Comprehensive tour booking platform with search, filtering, and WhatsApp integration. Includes admin dashboard for managing tours and bookings.',
      tags: ['MERN Stack', 'WhatsApp API', 'Cloudinary', 'Admin Panel'],
      icon: <Globe size={32} />,
      type: 'Full Stack',
      links: { demo: '#', github: '#' }
    },
    {
      id: 3,
      title: 'Admin Dashboard',
      description: 'Role-based administration panel with dynamic data tables, real-time updates, and multi-language support for content management.',
      tags: ['React', 'Express', 'Data Visualization', 'CRUD'],
      icon: <Database size={32} />,
      type: 'Backend / UI',
      links: { demo: '#', github: '#' }
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern, responsive developer portfolio with dark mode, internationalization, and clean architectural design.',
      tags: ['React', 'Tailwind CSS', 'i18next', 'Framer Motion'],
      icon: <Smartphone size={32} />,
      type: 'Frontend',
      links: { demo: '#', github: '#' }
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-32 h-1.5 bg-violet-500 rounded-full"></div>
          </div>
          <a href="#" className="text-violet-600 dark:text-violet-400 font-bold flex items-center gap-2 hover:underline">
            View all on GitHub <ExternalLink size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;