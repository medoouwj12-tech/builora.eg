import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProjectScene from './ProjectScenes';
import ProjectModal from './ProjectModal';

export default function Portfolio({ onStartProjectWithReference }) {
  const { language, isRTL, h } = useLanguage();
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const list = showAll ? projectsData : projectsData.slice(0, 6);

  return (
    <section id="projects" className="py-20 lg:py-24 bg-[#F4F6FB] dark:bg-ink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-eyebrow">{h.projects.eyebrow}</span>
          <h2 className="section-title mt-4">{h.projects.title}</h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400">{h.projects.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {list.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
              className="light-card light-card-hover overflow-hidden text-center group"
            >
              <div className="relative">
                <ProjectScene project={p} />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur text-white text-[10px] font-bold">
                  {p.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-ink-900 dark:text-white leading-snug" dir="ltr">{p.projectTitle}</h3>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-brand-600">
                  {h.projects.view}
                  <Arrow className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </button>
          ))}
        </div>

        {projectsData.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ink-900 dark:bg-white/10 dark:ring-1 dark:ring-white/15 hover:bg-brand-600 text-white text-sm font-bold transition-colors"
            >
              {showAll ? (language === 'ar' ? 'عرض أقل' : 'Show less') : language === 'ar' ? 'المزيد من أعمالنا' : 'More of our work'}
            </button>
          </div>
        )}
      </div>

      <ProjectModal
        project={selected}
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        onStartSimilarProject={(name) => {
          setSelected(null);
          onStartProjectWithReference(language === 'ar' ? `مشروع مماثل لـ: ${name}` : `Similar to project: ${name}`);
        }}
      />
    </section>
  );
}
