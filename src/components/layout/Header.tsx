import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, AlertCircle } from 'lucide-react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Button from '../ui/Button';
import { triggerChatbot } from '../ui/ChatbotWidget';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [currentPathname, setCurrentPathname] = useState('/');
  const [logoSrc, setLogoSrc] = useState<string | null>(null);

  // Track scroll position to toggle sticky aesthetic styles
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync client-side pathnames for active indicators in SPA context
  useEffect(() => {
    setCurrentPathname(window.location.pathname || '/');

    // Handle standard SPA location triggers
    const handleLocationChange = () => {
      setCurrentPathname(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Safe image load check for the logo from multiple potential paths
  useEffect(() => {
    const paths = [
      '/src/public/logo.png',
      '/assets/logo.jpeg',
      '/src/public/logo.svg',
      '/public/logo.svg',
      '/logo.jpeg'
    ];

    let found = false;
    
    const checkPath = (index: number) => {
      if (index >= paths.length || found) return;
      const img = new Image();
      img.src = paths[index];
      img.onload = () => {
        setLogoSrc(paths[index]);
        found = true;
      };
      img.onerror = () => {
        checkPath(index + 1);
      };
    };

    checkPath(0);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-45 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-xs h-16 md:h-20'
            : 'bg-white h-20 md:h-24 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          
          {/* Brand Logo / Fallback Link */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2.5 group">
                <img
                  src={logoSrc}
                  alt="Pure Path Infotech Logo"
                  className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                />
              
            </a>
          </div>

          {/* Reusable Data-Driven Desktop Nav */}
          <DesktopNav currentPathname={currentPathname} />

          {/* Let's Talk CTA & Mobile Hamburger toggler */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  triggerChatbot();
                }}
                variant="primary"
                size="sm"
                className="font-semibold shadow-xs hover:shadow-md group cursor-pointer"
              >
                Let's Talk
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>

            {/* Mobile Menu Toggler with 44px min tap targets */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="p-2.5 -mr-2 rounded-xl text-slate-500 hover:text-primary hover:bg-slate-50 lg:hidden focus:outline-none cursor-pointer"
              aria-label="Open primary menu"
              aria-expanded={isMobileOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* Slide-out Collapsible Accordion Navigation Drawer */}
      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        currentPathname={currentPathname}
      />
    </>
  );
}
