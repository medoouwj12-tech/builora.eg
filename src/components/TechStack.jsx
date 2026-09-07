import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Code2, 
  Cpu, 
  Database, 
  Server, 
  Globe, 
  GitBranch, 
  Cloud, 
  Sparkles, 
  Terminal,
  Zap
} from 'lucide-react';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { language, t } = useLanguage();

  const technologies = [
    { name: 'React 19', category: 'Frontend', level: 'Flagship Framework', icon: Code2, desc: language === 'ar' ? 'هيكلية مكونات تفاعلية وخطافات متطورة' : 'Declarative component architecture & modern hooks' },
    { name: 'Next.js', category: 'Frontend', level: 'SSR & SSG', icon: Globe, desc: language === 'ar' ? 'تصيير الخادم السريع وحوسبة الحافة' : 'Server-side rendering & edge computing performance' },
    { name: 'TypeScript', category: 'Frontend', level: 'Type Safety', icon: Terminal, desc: language === 'ar' ? 'أمان برمجي صارم وخلو تام من أخطاء التشغيل' : 'Strict compile-time verification & zero runtime surprises' },
    { name: 'Tailwind CSS', category: 'Frontend', level: 'Modern UI Engine', icon: Sparkles, desc: language === 'ar' ? 'محرك تصميم سريع ومرن متجاوب بالكامل' : 'Utility-first rapid prototyping & responsive design' },
    { name: 'Node.js', category: 'Backend', level: 'Runtime Engine', icon: Server, desc: language === 'ar' ? 'بيئة تشغيل عالية السرعة مدفوعة بالأحداث' : 'Non-blocking I/O event-driven backend architectures' },
    { name: 'Python', category: 'Backend', level: 'Data & Automation', icon: Cpu, desc: language === 'ar' ? 'أتمتة العمليات والذكاء الاصطناعي ومعالجة البيانات' : 'Machine learning, automated workers & analytics services' },
    { name: 'REST & GraphQL', category: 'Backend', level: 'API Layer', icon: Zap, desc: language === 'ar' ? 'واجهات برمجية سريعة ومترابطة بدقة' : 'High-speed, predictable data contracts & microservices' },
    { name: 'PostgreSQL', category: 'Databases', level: 'Relational DB', icon: Database, desc: language === 'ar' ? 'قواعد بيانات علائقية مشفرة للمؤسسات' : 'ACID compliant enterprise relational data persistence' },
    { name: 'MongoDB / Supabase', category: 'Databases', level: 'Document & Realtime', icon: Database, desc: language === 'ar' ? 'تخزين بيانات مرن ومزامنة فورية بالويب سوكت' : 'High-concurrency document storage & instant WebSockets' },
    { name: 'Redis', category: 'Databases', level: 'In-Memory Cache', icon: Zap, desc: language === 'ar' ? 'ذاكرة كاش فائقة السرعة بأقل من مللي ثانية' : 'Sub-millisecond latency session caching & queue workers' },
    { name: 'Docker', category: 'DevOps', level: 'Containerization', icon: Server, desc: language === 'ar' ? 'حاويات تشغيل معزولة ومستقرة' : 'Isolated reproducible production microservice containers' },
    { name: 'Git & GitHub', category: 'DevOps', level: 'Version Control', icon: GitBranch, desc: language === 'ar' ? 'إدارة الشيفرة البرمجية وخطوط النشر الآلي' : 'Automated CI/CD pipelines & secure code management' },
    { name: 'Vercel & AWS', category: 'DevOps', level: 'Edge Hosting', icon: Cloud, desc: language === 'ar' ? 'توزيع سحابي عالمي بضمان استقرار 99.99%' : 'Global edge distribution with 99.99% uptime guarantees' }
  ];

  const categories = language === 'ar' 
    ? [
        { id: 'All', label: 'جميع التقنيات' },
        { id: 'Frontend', label: 'الواجهة الأمامية' },
        { id: 'Backend', label: 'الخلفية السحابية' },
        { id: 'Databases', label: 'قواعد البيانات' },
        { id: 'DevOps', label: 'السحابة والنشر' }
      ]
    : [
        { id: 'All', label: 'All Technologies' },
        { id: 'Frontend', label: 'Frontend' },
        { id: 'Backend', label: 'Backend' },
        { id: 'Databases', label: 'Databases' },
        { id: 'DevOps', label: 'DevOps' }
      ];

  const filteredTech = activeCategory === 'All' 
    ? technologies 
    : technologies.filter(t => t.category === activeCategory);

  return (
    <section className="relative py-24 bg-[#050811] overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.techStack.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.techStack.titlePrefix}
            <span className="text-gradient-cyan">{t.techStack.titleHighlight}</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
            {t.techStack.subtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm shadow-cyan-500/20'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 text-start">
          {filteredTech.map((tech, idx) => {
            const Icon = tech.icon;

            return (
              <div
                key={idx}
                className="group relative rounded-2xl glass-card glass-card-hover p-5 border border-cyan-500/15 flex flex-col justify-between overflow-hidden"
              >
                {/* Micro background gradient */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/15 transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-400/40 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono text-cyan-400/80 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
                      {tech.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </h3>

                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                    {tech.level}
                  </div>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {tech.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{t.techStack.productionCertified}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
