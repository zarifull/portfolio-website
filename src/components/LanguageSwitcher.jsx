import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2 p-4 justify-end">
      {['ky', 'ru', 'en'].map((lng) => (
        <button
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          className={`px-3 py-1 rounded-md text-xs font-bold uppercase transition-all border 
            ${i18n.language === lng 
              ? 'bg-cyan-500 border-cyan-500 text-black' 
              : 'border-slate-700 text-slate-400 hover:border-cyan-500'}`}
        >
          {lng}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;