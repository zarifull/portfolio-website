import { Dna, Plane, Rocket, Laptop } from 'lucide-react';

export const PROJECT_CATEGORIES = [
  { id: 'fullstack', labelKey: 'projects.categories.fullStack' },
  { id: 'frontend', labelKey: 'projects.categories.frontend' },
];

export const PROJECTS_CONFIG = [
  {
    id: 1,
    category: 'fullstack',
    icon: Dna,
    links: {
      demo: 'https://lifeos-system.vercel.app/ru/login',
      github: 'https://github.com/zarifull/lifeos',
    },
    live: true,
  },
  {
    id: 2,
    category: 'fullstack',
    icon: Plane,
    links: {
      demo: 'https://batkentravels.netlify.app',
      github: 'https://github.com/zarifull/travel-project-1',
    },
    live: true,
  },
  {
    id: 3,
    category: 'frontend',
    icon: Rocket,
    links: {
      demo: 'https://react-labs-five.vercel.app/',
      github: 'https://github.com/zarifull/react-labs',
    },
    live: true,
  },
  {
    id: 4,
    category: 'frontend',
    icon: Laptop,
    links: {
      demo: 'https://zari.dev',
      github: 'https://github.com/zarifull/portfolio-website',
    },
    live: true,
  },
];
