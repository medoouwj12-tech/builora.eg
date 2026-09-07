import React, { useState, useMemo } from 'react';
import { projectCategories, projectsData } from '../data/projectsData';
import { useLanguage } from '../context/LanguageContext';
import { 
  ExternalLink, 
  ArrowRight, 
  ArrowLeft,
  Sparkles, 
  Monitor, 
  Code
} from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Portfolio({ onStartProjectWithReference }) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const { language, isRTL, t } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const activeCategories = t.portfolio.categories || projectCategories;

  // Filter projects based on index or category
  const filteredProjects = useMemo(() => {
    if (activeCategoryIndex === 0) {
      return projectsData;
    }
    const englishCategory = projectCategories[activeCategoryIndex];
    return projectsData.filter((p) => p.category === englishCategory);
  }, [activeCategoryIndex]);

  const handleOpenCaseStudy = (project) => {
    setSelectedProject(project);
  };

  const handleCloseCaseStudy = () => {
    setSelectedProject(null);
  };

  const handleStartSimilar = (projectName) => {
    handleCloseCaseStudy();
    onStartProjectWithReference(language === 'ar' ? `مشروع مماثل لـ: ${projectName}` : `Similar to project: ${projectName}`);
  };

  return (
    <section id="projects" className="relative py-24 bg-[#070B14] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-600/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.portfolio.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.portfolio.titlePrefix}
            <span className="text-gradient-cyan">{t.portfolio.titleHighlight}</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {activeCategories.map((category, idx) => {
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={category}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow-cyan/50 scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;

            return (
              <div
                key={project.id}
                className={`group rounded-3xl glass-card glass-card-hover border border-cyan-500/15 overflow-hidden flex flex-col justify-between transition-all duration-300 text-start ${
                  isFeatured ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Visual Header / Mockup Preview */}
                <div className="relative bg-slate-950 p-5 border-b border-slate-800/80 overflow-hidden">
                  
                  {/* Mockup Browser Window Chrome */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/60">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="text-[10px] font-mono text-slate-500 mx-2 truncate max-w-[150px] sm:max-w-[200px]" dir="ltr">
                        {project.projectURL.replace('https://', '')}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {t.portfolio.liveSystem}
                    </span>
                  </div>

                  {/* Visual Representation Graphic */}
                  <div className="relative rounded-xl bg-gradient-to-br from-slate-900 to-[#0B1222] p-4 sm:p-6 border border-slate-800 flex flex-col justify-between min-h-[160px] group-hover:border-cyan-500/30 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                          <Monitor className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white tracking-wide">
                            {project.image?.title || project.projectTitle}
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            {project.clientType}
                          </div>
                        </div>
                      </div>

                      {project.image?.badge && (
                        <span className="hidden sm:inline-block text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                          {project.image.badge}
                        </span>
                      )}
                    </div>

                    {/* Telemetry Strip inside mockup */}
                    {project.image?.stats && (
                      <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-[10px] font-mono text-slate-300">
                        {project.image.stats.map((stat, sIdx) => (
                          <div key={sIdx} className="bg-slate-900/90 p-1.5 rounded border border-slate-800 truncate">
                            {stat}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Corner Category Tag */}
                  <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`}>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-slate-900/90 border border-cyan-500/30 text-cyan-300 shadow">
                      {project.category}
                    </span>
                  </div>

                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                        {project.projectTitle}
                      </h3>
                      {project.featured && (
                        <span className="text-[10px] font-bold text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
                          {t.portfolio.featuredBadge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.projectDescription}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => handleOpenCaseStudy(project)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 focus:outline-none"
                    >
                      <span>{t.portfolio.btnCaseStudy}</span>
                      <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <a
                      href={project.projectURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400/40 transition-all flex items-center gap-1.5"
                    >
                      <span>{t.portfolio.btnLiveWebsite}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* CMS / Easy Editing Callout Note */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-950/60 border border-cyan-500/20 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-start">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                {t.portfolio.cmsCalloutTitle}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {t.portfolio.cmsCalloutDesc}
              </div>
            </div>
          </div>

          <a
            href="#booking"
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:shadow-glow-cyan transition-all whitespace-nowrap"
          >
            {t.portfolio.btnLaunchYours}
          </a>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleCloseCaseStudy}
        onStartSimilarProject={handleStartSimilar}
      />
    </section>
  );
}
