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
    setIsSending(true);

   
    emailjs.sendForm(
      'service_anru6dg',   
      'template_h3d16s5',  
      form.current, 
      '0tTFZwarP6i2lg0B4'   
    )
    .then((result) => {
        alert(t('contact.successMessage') || "Message sent!");
        setFormData({ name: '', email: '', message: '' });
        form.current.reset();
    }, (error) => {
        alert("Error: " + error.text);
    })
    .finally(() => {
        setIsSending(false);
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-20 h-1 bg-violet-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4 p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800">
              <div className="p-3 bg-violet-50 dark:bg-violet-900/20 rounded-full">
                <Mail className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{t('contact.emailLabel')}</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-semibold text-slate-900 dark:text-white hover:text-violet-600">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
           
            <div className="flex items-center gap-4 p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800">
              <div className="p-3 bg-violet-50 dark:bg-violet-900/20 rounded-full">
                <Phone className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{t('contact.phoneLabel')}</p>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-lg font-semibold text-slate-900 dark:text-white hover:text-violet-600">
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800">
              <div className="p-3 bg-violet-50 dark:bg-violet-900/20 rounded-full">
                <Github className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{t('contact.githubLabel')}</p>
                <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-slate-900 dark:text-white hover:text-violet-600">
                  {CONTACT_INFO.githubUsername}
                </a>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('contact.nameLabel')}</label>
              <input
                name="from_name" 
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:border-violet-500 transition-all"
                placeholder={t('contact.namePlaceholder')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('contact.emailLabel')}</label>
              <input
                name="from_email" 
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:border-violet-500 transition-all"
                placeholder={t('contact.emailPlaceholder')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('contact.messageLabel')}</label>
              <textarea
                name="message" 
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:border-violet-500 resize-none transition-all"
                placeholder={t('contact.messagePlaceholder')}
              ></textarea>
            </div>

            <button
              disabled={isSending}
              type="submit"
              className={`w-full py-3 px-6 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSending ? (t('contact.sending') || "Sending...") : t('contact.send')}
              <Send size={18} className={isSending ? "animate-pulse" : ""} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}