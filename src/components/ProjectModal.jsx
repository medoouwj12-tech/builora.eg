import ProjectScene from './ProjectScenes';
import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Sparkles, 
  Building2, 
  Layers
} from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose, onStartSimilarProject }) {
  const { language, isRTL, t } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const caseStudy = project.caseStudy || {};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Case Study Container */}
      <div className="relative w-full max-w-4xl rounded-3xl glass-panel border border-cyan-500/30 p-6 sm:p-8 md:p-10 shadow-2xl shadow-cyan-950/60 my-8 z-10 animate-in fade-in zoom-in-95 duration-200 text-start">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 ${isRTL ? 'left-5' : 'right-5'} p-2.5 rounded-xl text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-colors`}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            {project.category}
          </span>
          {project.badge && (
            <span className="px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-mono">
              {project.badge}
            </span>
          )}
        </div>

        {/* Project cover */}
        <div className="mb-6 rounded-2xl overflow-hidden ring-1 ring-white/10">
          <ProjectScene project={project} className="aspect-[16/9]" />
        </div>

        {/* Project Title & Client Meta */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.projectTitle}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-2">
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t.caseStudy.client} <strong className="text-slate-200">{caseStudy.client || project.clientType}</strong></span>
              </span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t.caseStudy.industry} <strong className="text-slate-200">{caseStudy.industry || 'Technology'}</strong></span>
              </span>
            </div>
          </div>

          {/* Live Link Button */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={project.projectURL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-400/40 transition-all flex items-center gap-2"
            >
              <span>{t.caseStudy.liveWebsite}</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          </div>
        </div>

        {/* Verified Metrics Strip */}
        {caseStudy.metrics && caseStudy.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-3 my-6">
            {caseStudy.metrics.map((metric, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/20 text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-mono">
                  {metric.value}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 uppercase font-semibold">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Two Columns: Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">
              {t.caseStudy.challengeTitle}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {caseStudy.challenge || project.projectDescription}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
              {t.caseStudy.solutionTitle}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {caseStudy.solution || project.projectDescription}
            </p>
          </div>
        </div>

        {/* Key Features List */}
        {caseStudy.features && caseStudy.features.length > 0 && (
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 mb-6">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">
              {t.caseStudy.featuresTitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Badges */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400 mr-2">{t.caseStudy.technologiesUsed}</span>
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300 text-xs font-mono border border-slate-700">
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
          <div>
            <div className="text-sm font-bold text-white">{t.caseStudy.ctaTitle}</div>
            <div className="text-xs text-slate-400">{t.caseStudy.ctaSubtitle}</div>
          </div>

          <button
            onClick={() => {
              onClose();
              onStartSimilarProject(project.projectTitle);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t.caseStudy.btnStart}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
