import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, X, Sparkles } from 'lucide-react';
import {
  servicesNavigation,
  solutionsNavigation,
  companyNavigation,
} from '../../data/navigation';
import Button from '../ui/Button';
import { triggerChatbot } from '../ui/ChatbotWidget';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  currentPathname: string;
}

export default function MobileNav({ isOpen, onClose, currentPathname }: MobileNavProps) {
  const [expandedSection, setExpandedSection] = useState<'services' | 'solutions' | 'company' | null>(null);

  // Toggle accordions helper
  const toggleAccordion = (section: 'services' | 'solutions' | 'company') => {
    setExpandedSection(prev => (prev === section ? null : section));
  };

  // Prevent background scrolling when mobile menu drawer is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Escape key to close mobile drawer
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 lg:hidden">
        {/* Semi-transparent backdrop shadow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs"
        />

        {/* Slide-out Panel Drawer */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="absolute top-0 right-0 w-full max-w-[340px] h-full bg-white shadow-2xl flex flex-col justify-between overflow-y-auto"
        >
          {/* Header Panel */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <span className="text-sm font-bold font-display tracking-tight text-[var(--color-text)]">
              Pure Path<span className="text-primary font-medium"> Navigation</span>
            </span>
            <button
              onClick={onClose}
              className="p-2 -mr-2 rounded-lg text-slate-500 hover:text-primary hover:bg-slate-50 cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Collapsible Accordion Navigation Links Area */}
          <div className="flex-grow py-4 px-4 space-y-1">
            
            {/* Home link */}
            <a
              href="/"
              onClick={onClose}
              className={`flex items-center justify-between w-full px-4 py-3 text-[15px] font-bold rounded-xl transition-all ${
                currentPathname === '/'
                  ? 'text-primary bg-primary/5'
                  : 'text-[var(--color-text)] hover:text-primary hover:bg-slate-50'
              }`}
            >
              Home
            </a>

            {/* Services Accordion Collapsible Item */}
            <div className="border-b border-slate-50/60 pb-1">
              <button
                onClick={() => toggleAccordion('services')}
                className="flex items-center justify-between w-full px-4 py-3 text-[15px] font-bold text-[var(--color-text)] hover:text-primary rounded-xl cursor-pointer"
                aria-expanded={expandedSection === 'services'}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 text-slate-400 ${
                    expandedSection === 'services' ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {expandedSection === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden pl-4 pr-1 mt-1 bg-slate-50/70 rounded-2xl py-2.5 space-y-4"
                  >
                    {servicesNavigation.map((category) => (
                      <div key={category.title} className="space-y-1.5">
                        <span className="text-[10px] font-bold uppercase font-mono text-primary/80 tracking-wider block px-2.5">
                          {category.title}
                        </span>
                        <div className="space-y-1">
                          {category.items.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={onClose}
                              className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-[var(--color-muted)] hover:text-primary hover:bg-white transition-colors"
                            >
                              {item.label}
                              <ArrowRight className="w-3.5 h-3.5 opacity-60 text-slate-400" />
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Accordion Collapsible Item */}
            <div className="border-b border-slate-50/60 pb-1">
              <button
                onClick={() => toggleAccordion('solutions')}
                className="flex items-center justify-between w-full px-4 py-3 text-[15px] font-bold text-[var(--color-text)] hover:text-primary rounded-xl cursor-pointer"
                aria-expanded={expandedSection === 'solutions'}
              >
                Solutions
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 text-slate-400 ${
                    expandedSection === 'solutions' ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedSection === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden pl-4 pr-1 mt-1 bg-slate-50/70 rounded-2xl py-2 space-y-0.5"
                  >
                    {solutionsNavigation.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold text-[var(--color-muted)] hover:text-primary hover:bg-white transition-colors"
                      >
                        {item.label}
                        <ArrowRight className="w-3.5 h-3.5 opacity-60 text-slate-400" />
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Accordion Collapsible Item */}
            <div className="border-b border-slate-50/60 pb-1">
              <button
                onClick={() => toggleAccordion('company')}
                className="flex items-center justify-between w-full px-4 py-3 text-[15px] font-bold text-[var(--color-text)] hover:text-primary rounded-xl cursor-pointer"
                aria-expanded={expandedSection === 'company'}
              >
                Company
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 text-slate-400 ${
                    expandedSection === 'company' ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedSection === 'company' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden pl-4 pr-1 mt-1 bg-slate-50/70 rounded-2xl py-2 space-y-0.5"
                  >
                    {companyNavigation.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold text-[var(--color-muted)] hover:text-primary hover:bg-white transition-colors"
                      >
                        {item.label}
                        <ArrowRight className="w-3.5 h-3.5 opacity-60 text-slate-400" />
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Blog direct link */}
            <a
              href="/blog"
              onClick={onClose}
              className={`flex items-center justify-between w-full px-4 py-3 text-[15px] font-bold rounded-xl transition-all ${
                currentPathname === '/blog'
                  ? 'text-primary bg-primary/5'
                  : 'text-[var(--color-text)] hover:text-primary hover:bg-slate-50'
              }`}
            >
              Blog
            </a>
          </div>

          {/* Bottom Fixed Let's Talk CTA Panel */}
          <div className="p-5 border-t border-slate-100 bg-slate-50/60 space-y-4">
            <div className="flex items-center gap-2 text-xs text-[var(--color-muted)] font-medium">
              <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>Let's collaborate on your growth.</span>
            </div>
            <Button
              onClick={(e) => {
                e.preventDefault();
                onClose();
                triggerChatbot();
              }}
              variant="primary"
              size="md"
              className="w-full text-center group font-bold"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
