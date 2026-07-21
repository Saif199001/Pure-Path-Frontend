import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  MousePointer2, 
  ChevronRight,
  Target
} from 'lucide-react';
import { servicesData, CapabilityCategory } from '../../data/services';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { triggerChatbot } from '../ui/ChatbotWidget';

export default function ServicesExplorer() {
  const [activeCategory, setActiveCategory] = useState<string>('creative-brand');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  const tabListRef = useRef<HTMLDivElement>(null);

  // Detect system motion preference for accessibility
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const currentCategory = servicesData.find(cat => cat.id === activeCategory) || servicesData[0];

  // Colors mapping based on the active category
  const getCategoryStyles = (id: string) => {
    switch (id) {
      case 'creative-brand':
        return {
          bgActive: 'bg-violet-50/60 border-violet-200/80 text-violet-900',
          iconBg: 'bg-violet-100 text-violet-600',
          textAccent: 'text-violet-600',
          borderActive: 'border-violet-500',
          badge: 'bg-violet-50 text-violet-700 border-violet-200/50',
          glow: 'shadow-violet-100/30',
          accentBorder: 'hover:border-violet-300'
        };
      case 'commerce-growth':
        return {
          bgActive: 'bg-emerald-50/60 border-emerald-200/80 text-emerald-900',
          iconBg: 'bg-emerald-100 text-emerald-600',
          textAccent: 'text-emerald-600',
          borderActive: 'border-emerald-500',
          badge: 'bg-emerald-50 text-emerald-700 border-emerald-200/50',
          glow: 'shadow-emerald-100/30',
          accentBorder: 'hover:border-emerald-300'
        };
      case 'technology':
        return {
          bgActive: 'bg-blue-50/60 border-blue-200/80 text-blue-900',
          iconBg: 'bg-blue-100 text-blue-600',
          textAccent: 'text-blue-600',
          borderActive: 'border-blue-500',
          badge: 'bg-blue-50 text-blue-700 border-blue-200/50',
          glow: 'shadow-blue-100/30',
          accentBorder: 'hover:border-blue-300'
        };
      case 'intelligent-business':
        return {
          bgActive: 'bg-indigo-50/60 border-indigo-200/80 text-indigo-900',
          iconBg: 'bg-indigo-100 text-indigo-600',
          textAccent: 'text-indigo-600',
          borderActive: 'border-indigo-500',
          badge: 'bg-indigo-50 text-indigo-700 border-indigo-200/50',
          glow: 'shadow-indigo-100/30',
          accentBorder: 'hover:border-indigo-300'
        };
      case 'strategy-support':
        return {
          bgActive: 'bg-cyan-50/60 border-cyan-200/80 text-cyan-900',
          iconBg: 'bg-cyan-100 text-cyan-600',
          textAccent: 'text-cyan-600',
          borderActive: 'border-cyan-500',
          badge: 'bg-cyan-50 text-cyan-700 border-cyan-200/50',
          glow: 'shadow-cyan-100/30',
          accentBorder: 'hover:border-cyan-300'
        };
      default:
        return {
          bgActive: 'bg-blue-50/60 border-blue-200/80 text-blue-900',
          iconBg: 'bg-blue-100 text-blue-600',
          textAccent: 'text-blue-600',
          borderActive: 'border-blue-500',
          badge: 'bg-blue-50 text-blue-700 border-blue-200/50',
          glow: 'shadow-blue-100/30',
          accentBorder: 'hover:border-blue-300'
        };
    }
  };

  const activeStyles = getCategoryStyles(activeCategory);

  const renderCategorySvg = (id: string) => {
    switch (id) {
      case 'creative-brand':
        return (
          <svg viewBox="0 0 200 200" className="absolute top-4 right-4 w-28 h-28 opacity-[0.06] text-violet-600 pointer-events-none select-none" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M 30 150 C 50 80, 150 120, 170 40 C 120 20, 60 80, 30 150 Z" />
            <circle cx="170" cy="40" r="4" fill="currentColor" />
            <circle cx="100" cy="95" r="3" fill="currentColor" />
          </svg>
        );
      case 'commerce-growth':
        return (
          <svg viewBox="0 0 200 200" className="absolute top-4 right-4 w-28 h-28 opacity-[0.06] text-emerald-600 pointer-events-none select-none" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M 20 160 L 60 120 L 100 130 L 140 70 L 180 50" strokeDasharray="3 3" />
            <path d="M 20 160 Q 90 140, 180 50" strokeWidth="2.5" />
            <polygon points="180,50 165,55 175,70" fill="currentColor" />
          </svg>
        );
      case 'technology':
        return (
          <svg viewBox="0 0 200 200" className="absolute top-4 right-4 w-28 h-28 opacity-[0.06] text-blue-600 pointer-events-none select-none" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M 40 60 L 20 80 L 40 100 M 160 60 L 180 80 L 160 100" />
            <line x1="110" y1="50" x2="90" y2="110" strokeWidth="2" />
            <circle cx="50" cy="150" r="3" />
            <circle cx="150" cy="150" r="3" />
            <line x1="50" y1="150" x2="150" y2="150" strokeDasharray="3 3" />
          </svg>
        );
      case 'intelligent-business':
        return (
          <svg viewBox="0 0 200 200" className="absolute top-4 right-4 w-28 h-28 opacity-[0.06] text-indigo-600 pointer-events-none select-none" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <circle cx="100" cy="100" r="30" />
            <circle cx="40" cy="60" r="6" />
            <circle cx="160" cy="60" r="6" />
            <circle cx="100" cy="170" r="6" />
            <line x1="40" y1="60" x2="75" y2="85" strokeWidth="1" />
            <line x1="160" y1="60" x2="125" y2="85" strokeWidth="1" />
            <line x1="100" y1="170" x2="100" y2="130" strokeWidth="1" />
          </svg>
        );
      case 'strategy-support':
        return (
          <svg viewBox="0 0 200 200" className="absolute top-4 right-4 w-28 h-28 opacity-[0.06] text-cyan-600 pointer-events-none select-none" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <circle cx="100" cy="100" r="60" strokeDasharray="4 4" />
            <polygon points="100,55 115,100 100,145 85,100" fill="currentColor" fillOpacity="0.2" />
            <circle cx="100" cy="100" r="4" fill="currentColor" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Keyboard navigation helpers for Tab controls
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex = index;
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      newIndex = index - 1 >= 0 ? index - 1 : servicesData.length - 1;
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      newIndex = index + 1 < servicesData.length ? index + 1 : 0;
    } else if (e.key === 'Home') {
      newIndex = 0;
    } else if (e.key === 'End') {
      newIndex = servicesData.length - 1;
    }

    if (newIndex !== index) {
      e.preventDefault();
      const nextCategory = servicesData[newIndex].id;
      setActiveCategory(nextCategory);
      
      // Auto-focus next button
      if (tabListRef.current) {
        const buttons = tabListRef.current.querySelectorAll('button');
        (buttons[newIndex] as HTMLButtonElement)?.focus();
      }
    }
  };

  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-[#F7FAFD] via-white to-[#F7FAFD] py-24 lg:py-32 overflow-hidden scroll-mt-20"
    >
      {/* Dynamic radial background glows based on selected category accent color to enhance rhythm */}
      <div 
        className="absolute top-1/4 right-10 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none opacity-20 transition-all duration-700" 
        style={{ backgroundColor: activeStyles.textAccent.includes('violet') ? '#8B5CF6' : activeStyles.textAccent.includes('emerald') ? '#10B981' : activeStyles.textAccent.includes('indigo') ? '#6366F1' : activeStyles.textAccent.includes('cyan') ? '#06B6D4' : '#0866C6' }}
      />
      <div className="absolute bottom-12 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none select-none" />

      {/* Grid line layout texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1.5px)] [background-size:2.5rem_2.5rem] opacity-35 pointer-events-none select-none" />

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
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Explore Our Capabilities
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#102033] tracking-tight mb-6"
          >
            Everything Your Business Needs.<br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-primary to-[#1687F8] bg-clip-text text-transparent">
              All in One Place.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[#607085] leading-relaxed mb-6"
          >
            Whether you're building a brand, launching an online store, developing technology or automating operations, choose where you need support and explore the capabilities designed to move your business forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary/85 bg-[#EAF5FF]/40 border border-primary/5 px-4 py-1.5 rounded-full"
          >
            <MousePointer2 className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span>What do you need help with? Select a category below:</span>
          </motion.div>
        </div>

        {/* ==================================================
            2. INTERACTIVE EXPLORER INTERFACE
            ================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT SIDE: Category vertical tablist on desktop, responsive grid on tablet/mobile */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            
            {/* Responsive grid for mobile/tablet, vertical layout on desktop */}
            <div 
              ref={tabListRef}
              role="tablist" 
              aria-label="Capabilities explorer navigation"
              className="grid grid-cols-2 sm:grid-cols-5 lg:flex lg:flex-col gap-2.5 sm:gap-3 w-full"
            >
              {servicesData.map((category, index) => {
                const CatIcon = category.icon;
                const isActive = activeCategory === category.id;
                const catStyles = getCategoryStyles(category.id);

                return (
                  <button
                    key={category.id}
                    id={`tab-${category.id}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${category.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveCategory(category.id)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className={`w-full text-left p-3.5 sm:p-4 lg:p-5 rounded-2xl border transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 relative ${
                      index === 4 ? 'col-span-2 sm:col-span-1' : 'col-span-1'
                    } ${
                      isActive
                        ? `bg-white border-primary ${catStyles.glow} shadow-md scale-[1.01] lg:scale-[1.02]`
                        : 'bg-white/60 hover:bg-white border-slate-100 hover:border-slate-200/80 shadow-2xs'
                    }`}
                  >
                    {/* Active vertical accent bar left side */}
                    {isActive && (
                      <div 
                        className="hidden lg:block absolute left-0 top-4 bottom-4 w-1 rounded-r-lg transition-colors duration-300"
                        style={{ backgroundColor: activeStyles.textAccent.includes('violet') ? '#8B5CF6' : activeStyles.textAccent.includes('emerald') ? '#10B981' : activeStyles.textAccent.includes('indigo') ? '#6366F1' : activeStyles.textAccent.includes('cyan') ? '#06B6D4' : '#0866C6' }}
                      />
                    )}

                    <div className="flex flex-row items-center lg:items-center gap-2.5 lg:gap-3.5 mb-0 lg:mb-2.5">
                      <div className={`p-1.5 sm:p-2 rounded-xl transition-all duration-300 w-fit shrink-0 ${
                        isActive ? catStyles.iconBg : 'bg-slate-50 text-slate-500'
                      }`}>
                        <CatIcon className="w-4 h-4 sm:w-5 h-5" />
                      </div>
                      
                      <h3 className={`text-xs sm:text-sm lg:text-base font-extrabold tracking-tight leading-tight transition-colors duration-300 ${
                        isActive ? 'text-[#102033]' : 'text-slate-700'
                      }`}>
                        <span className="lg:hidden">{category.shortName}</span>
                        <span className="hidden lg:inline">{category.name}</span>
                      </h3>
                    </div>

                    <p className={`text-xs leading-relaxed transition-colors duration-300 hidden lg:block ${
                      isActive ? 'text-[#607085]' : 'text-slate-400'
                    }`}>
                      {category.description.substring(0, 75)}...
                    </p>

                    <div className="hidden lg:flex items-center justify-end mt-2.5">
                      <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                        isActive ? `${catStyles.textAccent} translate-x-0.5` : 'text-slate-300'
                      }`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE: Dynamic selected category detail panel */}
          <div className="lg:col-span-8 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                id={`panel-${currentCategory.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${currentCategory.id}`}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg relative flex flex-col justify-between h-full overflow-hidden"
              >
                {/* Embedded abstract category background SVG */}
                {renderCategorySvg(currentCategory.id)}

                <div>
                  {/* Category Eyebrow & Icon */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-[10px] font-extrabold tracking-widest uppercase font-mono px-2.5 py-1 rounded-md border ${activeStyles.badge}`}>
                      {currentCategory.shortName} CAPABILITIES
                    </span>
                  </div>

                  {/* Category Title & Description */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102033] tracking-tight mb-4">
                    {currentCategory.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#607085] leading-relaxed max-w-2xl mb-8">
                    {currentCategory.description}
                  </p>

                  {/* Responsive Service Groups Grid inside panel */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {currentCategory.groups.map((group, groupIdx) => {
                      return (
                        <div
                          key={`group-${groupIdx}`}
                          className="bg-slate-50/50 border border-slate-100/80 hover:border-slate-200/80 rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between group"
                        >
                          <div>
                            <h4 className="text-base font-extrabold text-[#102033] mb-2 group-hover:text-primary transition-colors duration-300">
                              {group.title}
                            </h4>
                            <p className="text-xs text-[#607085] leading-normal mb-4">
                              {group.description}
                            </p>

                            {/* Bullet points capabilities list */}
                            <ul className="space-y-2 mb-4">
                              {group.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-start gap-2 text-xs text-slate-600 font-semibold">
                                  <div className="mt-0.5 w-4 h-4 rounded-full bg-white border border-slate-100 flex items-center justify-center shrink-0">
                                    <Check className={`w-2.5 h-2.5 ${activeStyles.textAccent}`} />
                                  </div>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex items-center text-xs font-bold text-primary hover:underline cursor-pointer group/link mt-2 pt-2 border-t border-slate-100/50">
                            <span>Explore Service Modules</span>
                            <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/link:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Outcome strip & Panel CTA buttons footer */}
                <div className="space-y-6 pt-6 border-t border-slate-100">
                  
                  {/* Category outcome strip */}
                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#EAF5FF]/40 border border-primary/5">
                    <div className={`p-1.5 rounded-lg bg-white shrink-0`}>
                      <Target className={`w-4 h-4 ${activeStyles.textAccent}`} />
                    </div>
                    <span className="text-xs font-extrabold text-[#102033] leading-snug">
                      Your business outcome: <span className="font-semibold text-[#607085]">{currentCategory.outcome}</span>
                    </span>
                  </div>

                  {/* Panel CTA buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <Button
                      href={currentCategory.route}
                      variant="primary"
                      size="md"
                      className="w-full sm:w-auto font-bold tracking-wide shadow-sm hover:shadow-md group flex items-center justify-center"
                    >
                      Explore All {currentCategory.shortName} Services
                      <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        triggerChatbot();
                      }}
                      variant="outline"
                      size="md"
                      className="w-full sm:w-auto bg-white border-slate-200 hover:bg-[#EAF5FF]/20 text-[#102033] font-bold flex items-center justify-center"
                    >
                      Talk to an Expert
                    </Button>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* ==================================================
            3. BOTTOM MINI CTA
            ================================================== */}
        <div className="text-center mt-20 pt-10 border-t border-slate-100/85">
          <p className="text-xs sm:text-sm font-bold text-[#102033] mb-2">
            Not sure which service fits your needs?
          </p>
          <p className="text-xs text-[#607085] leading-relaxed max-w-lg mx-auto mb-5">
            Tell us what you're trying to achieve and we'll help you find the right solution.
          </p>
          <Button
            onClick={(e) => {
              e.preventDefault();
              triggerChatbot();
            }}
            variant="outline"
            size="sm"
            className="bg-white hover:bg-[#EAF5FF]/20 text-primary border-primary/25 hover:border-primary/50 font-bold group"
          >
            Help Me Choose
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>

      </Container>
    </section>
  );
}
