import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  solutionsNavigation,
  companyNavigation,
} from '../../data/navigation';
import MegaMenu from './MegaMenu';

interface DesktopNavProps {
  currentPathname: string;
}

export default function DesktopNav({ currentPathname }: DesktopNavProps) {
  const [activeMenu, setActiveMenu] = useState<'services' | 'solutions' | 'company' | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Close open menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close open menus when Escape is pressed
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveMenu(null);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleMenu = (menu: 'services' | 'solutions' | 'company') => {
    setActiveMenu(prev => (prev === menu ? null : menu));
  };

  // Paths mapping to determine active state indicators
  const isServicesActive = currentPathname.startsWith('/services') || activeMenu === 'services';
  const isSolutionsActive = currentPathname.startsWith('/solutions') || activeMenu === 'solutions';
  const isCompanyActive =
    currentPathname.startsWith('/about') ||
    currentPathname.startsWith('/how-we-work') ||
    currentPathname.startsWith('/contact') ||
    activeMenu === 'company';
  const isBlogActive = currentPathname.startsWith('/blog');

  return (
    <div ref={navContainerRef} className="hidden lg:flex items-center space-x-1 h-full">
      
      {/* Home link */}
      <a
        href="/"
        className={`px-4 py-2.5 text-[15px] font-medium rounded-lg transition-colors duration-200 ${
          currentPathname === '/'
            ? 'text-primary bg-primary/5'
            : 'text-[var(--color-muted)] hover:text-primary hover:bg-slate-50'
        }`}
      >
        Home
      </a>

      {/* Services Trigger */}
      <div className="relative">
        <button
          onClick={() => toggleMenu('services')}
          onMouseEnter={() => setActiveMenu('services')}
          className={`px-4 py-2.5 text-[15px] font-medium rounded-lg inline-flex items-center gap-1 cursor-pointer transition-colors duration-200 ${
            isServicesActive
              ? 'text-primary bg-primary/5 font-semibold'
              : 'text-[var(--color-muted)] hover:text-primary hover:bg-slate-50'
          }`}
          aria-expanded={activeMenu === 'services'}
          aria-haspopup="true"
        >
          Services
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              activeMenu === 'services' ? 'rotate-180 text-primary' : 'text-slate-400'
            }`}
          />
        </button>

        {/* Global Mega Menu position is handled inside Header.tsx so it covers full width */}
      </div>

      {/* Solutions Trigger */}
      <div className="relative" onMouseEnter={() => setActiveMenu('solutions')}>
        <button
          onClick={() => toggleMenu('solutions')}
          className={`px-4 py-2.5 text-[15px] font-medium rounded-lg inline-flex items-center gap-1 cursor-pointer transition-colors duration-200 ${
            isSolutionsActive
              ? 'text-primary bg-primary/5 font-semibold'
              : 'text-[var(--color-muted)] hover:text-primary hover:bg-slate-50'
          }`}
          aria-expanded={activeMenu === 'solutions'}
          aria-haspopup="true"
        >
          Solutions
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              activeMenu === 'solutions' ? 'rotate-180 text-primary' : 'text-slate-400'
            }`}
          />
        </button>

        {/* Solutions Dropdown List */}
        <AnimatePresence>
          {activeMenu === 'solutions' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.15 }}
              onMouseLeave={() => setActiveMenu(null)}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-[460px] bg-white rounded-xl shadow-xl border border-slate-200/60 p-4 grid grid-cols-2 gap-2 z-50"
            >
              <div className="col-span-2 p-1.5 border-b border-slate-50 mb-1">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">
                  Tailored Lifecycles
                </span>
              </div>
              {solutionsNavigation.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setActiveMenu(null)}
                    className="flex gap-3 p-2.5 rounded-lg hover:bg-[var(--color-background)] transition-all group text-left"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-[var(--color-text)] group-hover:text-primary flex items-center gap-1">
                        {item.label}
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                      </span>
                      <span className="text-[10px] text-[var(--color-muted)] leading-relaxed mt-0.5">
                        {item.desc}
                      </span>
                    </div>
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Company Trigger */}
      <div className="relative" onMouseEnter={() => setActiveMenu('company')}>
        <button
          onClick={() => toggleMenu('company')}
          className={`px-4 py-2.5 text-[15px] font-medium rounded-lg inline-flex items-center gap-1 cursor-pointer transition-colors duration-200 ${
            isCompanyActive
              ? 'text-primary bg-primary/5 font-semibold'
              : 'text-[var(--color-muted)] hover:text-primary hover:bg-slate-50'
          }`}
          aria-expanded={activeMenu === 'company'}
          aria-haspopup="true"
        >
          Company
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              activeMenu === 'company' ? 'rotate-180 text-primary' : 'text-slate-400'
            }`}
          />
        </button>

        {/* Company Dropdown List */}
        <AnimatePresence>
          {activeMenu === 'company' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.15 }}
              onMouseLeave={() => setActiveMenu(null)}
              className="absolute top-full left-0 mt-1.5 w-52 bg-white rounded-xl shadow-xl border border-slate-200/60 p-2 z-50 flex flex-col gap-0.5"
            >
              {companyNavigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveMenu(null)}
                  className="px-3.5 py-2.5 text-xs font-medium rounded-lg text-[var(--color-text)] hover:text-primary hover:bg-slate-50 transition-colors flex items-center justify-between group"
                >
                  {item.label}
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-primary" />
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Blog Direct Link */}
      <a
        href="/blog"
        className={`px-4 py-2.5 text-[15px] font-medium rounded-lg transition-colors duration-200 ${
          isBlogActive
            ? 'text-primary bg-primary/5 font-semibold'
            : 'text-[var(--color-muted)] hover:text-primary hover:bg-slate-50'
        }`}
      >
        Blog
      </a>

      {/* Global Services Mega Menu Container Portal */}
      <AnimatePresence>
        {activeMenu === 'services' && (
          <div
            className="absolute top-full left-0 w-full z-50"
            onMouseLeave={() => setActiveMenu(null)}
          >
            <MegaMenu onClose={() => setActiveMenu(null)} />
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
