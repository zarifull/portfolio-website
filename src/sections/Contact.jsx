import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, Github, Send } from 'lucide-react';
import emailjs from '@emailjs/browser'; 
import { CONTACT_INFO } from '../data/contuctData';

export default function Contact() {
  const { t } = useTranslation();
  const form = useRef(); 
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!import.meta.env.VITE_EMAILJS_PUBLIC_KEY) return;

    setIsSending(true);
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,   
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY   
    )
    .then(() => {
        alert(t('contact.successMessage') || "Message sent!");
        setFormData({ name: '', email: '', message: '' });
        form.current.reset();
    })
    .catch((error) => alert("Error: " + error.text))
    .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:ob-16">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            {t('contact.title')}
          </h2>
          <div className="w-16 h-1 bg-violet-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4 md:space-y-6">
            {[
              { icon: Mail, label: t('contact.emailLabel'), val: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
              { icon: Phone, label: t('contact.phoneLabel'), val: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}` },
              { icon: Github, label: t('contact.githubLabel'), val: CONTACT_INFO.githubUsername, href: CONTACT_INFO.github }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 md:p-6 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 hover:border-violet-300 dark:hover:border-violet-700 transition-all">
                <div className="p-2 md:p-3 bg-violet-50 dark:bg-violet-900/20 rounded-lg">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">{item.label}</p>
                  <a href={item.href} target={item.icon === Github ? "_blank" : "_self"} rel="noopener noreferrer" className="block text-base md:text-lg font-semibold text-slate-900 dark:text-white hover:text-violet-600 truncate transition-colors">
                    {item.val}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <form ref={form} onSubmit={handleSubmit} className="space-y-4 md:space-y-5 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{t('contact.nameLabel')}</label>
              <input
                name="from_name" 
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all"
                placeholder={t('contact.namePlaceholder')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{t('contact.emailLabel')}</label>
              <input
                name="from_email" 
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all"
                placeholder={t('contact.emailPlaceholder')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{t('contact.messageLabel')}</label>
              <textarea
                name="message" 
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 resize-none transition-all"
                placeholder={t('contact.messagePlaceholder')}
              ></textarea>
            </div>

            <button
              disabled={isSending}
              type="submit"
              className={`w-full py-3 px-6 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg shadow-md shadow-violet-500/20 transition-all flex items-center justify-center gap-2 active:scale-[0.98] ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSending ? (t('contact.sending') || "...") : t('contact.send')}
              <Send size={18} className={isSending ? "animate-bounce" : ""} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}