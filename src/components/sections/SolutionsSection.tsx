import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  ArrowRight, 
  MousePointer2, 
  Check, 
  Sparkles,
  ArrowDown
} from 'lucide-react';
import { solutionsData, SolutionGoal } from '../../data/solutions';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { triggerChatbot } from '../ui/ChatbotWidget';

export default function SolutionsSection() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  // Detect motion preferences
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return (
    <section
      id="solutions"
      className="relative bg-gradient-to-b from-white via-[#F7FAFD]/30 to-white py-24 lg:py-32 overflow-hidden scroll-mt-20"
    >
      {/* Decorative background radial highlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[140px] pointer-events-none select-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#EAF5FF]/30 rounded-full blur-3xl pointer-events-none select-none" />

      {/* Subtle background grid texture overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none select-none" />

      <Container className="relative z-10">
        
        {/* ==================================================
            1. SECTION HEADER
            ================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-widest text-primary uppercase font-mono bg-[#EAF5FF] border border-primary/15 mb-4"
          >
            <Compass className="w-3.5 h-3.5 text-primary" />
            Solutions Built Around Your Goals
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#102033] tracking-tight mb-6"
          >
            What Do You Want<br className="sm:hidden" /> to{' '}
            <span className="bg-gradient-to-r from-primary to-[#1687F8] bg-clip-text text-transparent">
              Achieve Next?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[#607085] leading-relaxed mb-6"
          >
            You don't need to know which service to choose. Start with your business goal, and we'll help you find the right path forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary/85 bg-[#EAF5FF]/35 border border-primary/5 px-4 py-1.5 rounded-full"
          >
            <MousePointer2 className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span>Choose your goal to explore a solution designed around your business:</span>
          </motion.div>
        </div>

        {/* ==================================================
            2. SOLUTIONS INTERACTIVE PATH & GRID
            ================================================== */}
        <div className="relative min-h-[400px]">
          
          {/* Subtle Decorative SVG Path Connection behind card matrix on desktop */}
          <div className="hidden lg:block absolute inset-0 -z-10 pointer-events-none select-none overflow-visible">
            <svg viewBox="0 0 1200 600" className="w-full h-full opacity-20 text-primary-light" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <defs>
                <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0866C6" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#1687F8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {/* Complex curved path flowing through column 1 -> 2 -> 3 -> drop down to row 2 -> 6 -> 5 -> 4 */}
              <path 
                d="M 200,150 C 400,100 500,200 600,150 C 700,100 850,200 1000,150 C 1150,110 1150,450 1000,450 C 850,400 700,500 600,450 C 500,400 350,500 200,450" 
                stroke="url(#pathGrad)"
                strokeDasharray="6 6" 
              />
              <circle cx="200" cy="150" r="5" fill="#0866C6" />
              <circle cx="600" cy="150" r="4" fill="#0866C6" />
              <circle cx="1000" cy="150" r="4" fill="#0866C6" />
              <circle cx="1000" cy="450" r="4" fill="#1687F8" />
              <circle cx="600" cy="450" r="4" fill="#1687F8" />
              <circle cx="200" cy="450" r="5" fill="#8B5CF6" />
            </svg>
          </div>

          {/* Solutions Grid container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {solutionsData.map((solution, index) => {
              const GoalIcon = solution.icon;
              return (
                <motion.a
                  key={solution.id}
                  href={solution.route}
                  initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`group block bg-white border ${solution.accentClass} rounded-[28px] p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(8,102,198,0.06)] transition-all duration-300 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
                >
                  {/* Premium top gradient border sheen accent */}
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Subtle active interior ambient glow */}
                  <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(8,102,198,0.01)_0%,transparent_70%) pointer-events-none rounded-[28px]" />

                  <div className="flex items-center justify-between mb-6 relative z-10">
                    {/* Icon frame */}
                    <div className={`w-12 h-12 rounded-2xl ${solution.badgeBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                      <GoalIcon className={`w-6 h-6 ${solution.badgeText}`} />
                    </div>

                    {/* Subtle numbering identifier */}
                    <span className="text-sm font-extrabold tracking-widest text-slate-200 group-hover:text-primary/20 transition-colors font-mono select-none">
                      {solution.number}
                    </span>
                  </div>

                  <div className="min-h-[160px] flex flex-col justify-between mb-6 relative z-10">
                    <div>
                      {/* Customer goal name */}
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#102033] tracking-tight mb-2 group-hover:text-primary transition-colors">
                        {solution.title}
                      </h3>
                      {/* Short customer aspiration */}
                      <p className="text-xs sm:text-sm font-bold text-primary/95 leading-tight mb-3">
                        "{solution.statement}"
                      </p>
                      {/* Tangible outcome explanation */}
                      <p className="text-xs sm:text-sm text-[#607085] leading-relaxed">
                        {solution.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Capabilities tags block */}
                  <div className="border-t border-slate-100/80 pt-5 mb-6 relative z-10">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-3 font-mono">
                      Capabilities Included:
                    </span>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                      {solution.capabilities.map((cap, capIdx) => (
                        <div key={capIdx} className="flex items-center gap-1.5 text-[11px] text-[#102033] font-semibold">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 bg-emerald-50 rounded-full p-0.5" />
                          <span className="truncate">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="flex items-center text-xs font-bold text-primary group-hover:underline mt-auto relative z-10">
                    <span className="tracking-wide">{solution.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* ==================================================
            3. MIDDLE TRANSITION MESSAGE leading to CTA
            ================================================== */}
        <div className="text-center mt-16 max-w-2xl mx-auto border-t border-slate-100/70 pt-10">
          <p className="text-xs sm:text-sm font-bold text-[#102033] mb-2">
            Still not sure where to start?
          </p>
          <p className="text-xs text-[#607085] leading-relaxed mb-4">
            That's okay. Tell us where you are today and what you're trying to achieve — we'll help you find the right path.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              triggerChatbot();
            }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline hover:text-primary-dark group cursor-pointer"
          >
            <span>Talk to an Expert</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </Container>
    </section>
  );
}
