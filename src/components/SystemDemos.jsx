import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Film } from 'lucide-react';
import { SYSTEM_DEMOS } from '../data/demoData';

export function SystemDemos() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(SYSTEM_DEMOS[0].id);
  const [videoReady, setVideoReady] = useState({});
  const videoRef = useRef(null); 

  const activeDemo = SYSTEM_DEMOS.find((d) => d.id === activeId) ?? SYSTEM_DEMOS[0];
  const showPlaceholder = !videoReady[activeId];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, [activeId, videoReady]);

  return (
    <div className="mb-20 overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div className="min-w-0">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {t('projects.demos.title')}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl">
            {t('projects.demos.subtitle')}
          </p>
        </div>

        <div
          className="inline-flex shrink-0 p-1 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-[60px] border-[1.5px] border-white/40 dark:border-slate-700/60 shadow-lg"
          role="tablist"
          aria-label={t('projects.demos.title')}
        >
          {SYSTEM_DEMOS.map((demo) => (
            <button
              key={demo.id}
              type="button"
              role="tab"
              aria-selected={activeId === demo.id}
              onClick={() => setActiveId(demo.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeId === demo.id
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-500/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400'
              }`}
            >
              {t(demo.labelKey)}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative rounded-[2rem] overflow-hidden border-[1.5px] border-slate-200/60 dark:border-slate-800/80 shadow-2xl bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        
        <div className="relative aspect-video w-full max-h-[560px] overflow-hidden flex items-center justify-center p-2 md:p-4">
          <video
            key={activeDemo.id}
            ref={videoRef}
            className={`max-w-full max-h-full object-contain rounded-xl shadow-md bg-transparent ${
              showPlaceholder ? 'opacity-0 absolute inset-0' : 'relative z-10'
            }`}
            controls={!showPlaceholder}
            playsInline
            preload="auto"
            autoPlay
            muted
            loop
            onError={() => setVideoReady((prev) => ({ ...prev, [activeId]: false }))}
            onCanPlay={() => {
              if (videoRef.current) {
                videoRef.current.playbackRate = 2.0;
              }
              setVideoReady((prev) => ({ ...prev, [activeId]: true }));
            }}
          >
            {activeDemo.videoSources.map((source, index) => (
              <source key={index} src={source.src} type={source.type} />
            ))}
          </video>

          {showPlaceholder && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 py-10 text-center bg-gradient-to-br from-slate-900 via-violet-950/40 to-slate-900 z-20">
              <div className="p-5 rounded-full bg-violet-500/20 border border-violet-400/30">
                <Film className="w-10 h-10 text-violet-400 animate-pulse" />
              </div>
              <p className="text-lg font-semibold text-white">
                {t('projects.demos.placeholderTitle', { name: t(activeDemo.labelKey) })}
              </p>
              <p className="text-sm text-slate-400 max-w-md">
                {t('projects.demos.placeholderHint')}
              </p>
              {activeDemo.liveUrl && (
                <a
                  href={activeDemo.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-colors"
                >
                  {t('projects.demos.viewLive')}
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SystemDemos;