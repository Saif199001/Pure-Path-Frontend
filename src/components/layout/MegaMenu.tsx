import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { servicesNavigation, ServiceSection } from '../../data/navigation';
import { triggerChatbot } from '../ui/ChatbotWidget';

interface MegaMenuProps {
  onClose: () => void;
}

export default function MegaMenu({ onClose }: MegaMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute top-full left-0 w-full bg-white border-b border-slate-200/80 shadow-2xl z-50 overflow-hidden"
    >
      {/* Outer wrapper to restrict width and align with main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Navigation Category Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
          {servicesNavigation.map((section: ServiceSection, sIndex: number) => (
            <div key={section.title} className="space-y-4">
              {/* Category Title Heading */}
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <span className="text-[11px] font-bold tracking-widest text-primary uppercase font-mono">
                  {section.title}
                </span>
              </div>
              
              {/* Category Items list */}
              <ul className="space-y-3">
                {section.items.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={onClose}
                        className="group flex gap-3 p-2.5 -m-2 rounded-xl hover:bg-[var(--color-background)] transition-all"
                      >
                        {/* Icon Wrapper */}
                        <div className="w-8 h-8 rounded-lg bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          <IconComponent className="w-4 h-4 transition-transform group-hover:scale-110" />
                        </div>
                        {/* Label & Description */}
                        <div className="flex flex-col text-left">
                          <span className="text-xs font-bold text-[var(--color-text)] group-hover:text-primary transition-colors flex items-center gap-1">
                            {item.label}
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                          </span>
                          <span className="text-[11px] text-[var(--color-muted)] leading-relaxed mt-0.5">
                            {item.desc}
                          </span>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Visually Distinct Subtle CTA Panel at the Bottom */}
        <div className="rounded-2xl bg-gradient-to-r from-[var(--color-background)] to-[var(--color-border)] border border-primary/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 animate-pulse">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-[var(--color-text)]">
                Not sure what you need?
              </h4>
              <p className="text-xs text-[var(--color-muted)] mt-0.5 leading-relaxed">
                Tell us what you want to achieve and we'll help you find the right solution.
              </p>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              onClose();
              triggerChatbot();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-xs transition-colors shadow-sm cursor-pointer group shrink-0"
          >
            Talk to an Expert
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </motion.div>
  );
}
