import { Github, Linkedin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CONTACT_INFO } from '../data/contuctData'; 

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-slate-500 text-sm">
        {t('footer.copyright')}
      </p>
      
      <div className="flex gap-6">
        <a 
          href={CONTACT_INFO.github} 
          target='_blank' 
          rel="noopener noreferrer" 
          className="text-slate-400 hover:text-white transition-colors"
        >
          <Github size={20}/>
        </a>
        
        <a 
          href={CONTACT_INFO.linkedin} 
          target='_blank' 
          rel="noopener noreferrer" 
          className="text-slate-400 hover:text-white transition-colors"
        >
          <Linkedin size={20}/>
        </a>
        
        <a 
          href={CONTACT_INFO.telegram} 
          target='_blank' 
          rel="noopener noreferrer" 
          className="text-slate-400 hover:text-white transition-colors"
        >
          <Send size={20}/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;