import { Github, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-slate-500 text-sm">{t('footer.copyright')}</p>
      <div className="flex gap-6">
        <a href="https://github.com" className="text-slate-400 hover:text-white transition-colors"><Github size={20}/></a>
        <a href="https://linkedin.com" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20}/></a>
        <a href="https://t.me" className="text-slate-400 hover:text-white transition-colors"><Send size={20}/></a>
      </div>
    </footer>
  );
};

export default Footer;