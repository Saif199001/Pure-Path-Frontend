/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import OnePartnerSection from './components/sections/OnePartnerSection';
import ServicesExplorer from './components/sections/ServicesExplorer';
import SolutionsSection from './components/sections/SolutionsSection';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/layout/Footer';

// Custom SPA Sub-pages
import ServicePage from './pages/ServicePage';
import SolutionPage from './pages/SolutionPage';
import CompanyPage from './pages/CompanyPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ChatbotWidget from './components/ui/ChatbotWidget';

export default function App() {
  const [currentPath, setCurrentPath] = useState('/');

  // Initialize and listen to client-side navigation
  useEffect(() => {
    setCurrentPath(window.location.pathname || '/');

    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Global anchor click interceptor for seamless SPA experience
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      // If it is an internal local link, intercept and pushState to avoid hard refreshes
      if (
        href &&
        href.startsWith('/') &&
        !href.startsWith('//') &&
        !target.hasAttribute('download') &&
        target.target !== '_blank'
      ) {
        e.preventDefault();
        window.history.pushState({}, '', href);
        window.dispatchEvent(new Event('popstate'));
        
        // Scroll adjustment: handle hashes smoothly, otherwise reset viewport to top instantly
        if (href.includes('#')) {
          const hash = href.split('#')[1];
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' as any });
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  // Render Page Content conditionally based on currentPath value
  const renderContent = () => {
    if (currentPath === '/') {
      return (
        <>
          {/* Animated Hero Section */}
          <Hero />

          {/* Dynamic value proposition block explaining consolidated partnerships */}
          <OnePartnerSection />

          {/* Dynamic interactive capabilities explorer representing core business offerings */}
          <ServicesExplorer />

          {/* Goal-Based Solutions Discovery Engine */}
          <SolutionsSection />

          {/* Premium Brand-Blue Final Conversion CTA */}
          <FinalCTA />
        </>
      );
    }

    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      return <ServicePage slug={slug} />;
    }

    if (currentPath.startsWith('/solutions/')) {
      const slug = currentPath.replace('/solutions/', '');
      return <SolutionPage slug={slug} />;
    }

    if (
      currentPath === '/about' ||
      currentPath === '/how-we-work' ||
      currentPath === '/company'
    ) {
      return <CompanyPage />;
    }

    if (currentPath === '/contact') {
      return <ContactPage />;
    }

    if (currentPath === '/blog') {
      return <BlogPage />;
    }

    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      return <BlogPage blogSlug={slug} />;
    }

    if (currentPath === '/privacy-policy' || currentPath === '/privacy') {
      return <PrivacyPolicyPage type="privacy" />;
    }

    if (currentPath === '/terms' || currentPath === '/terms-conditions') {
      return <PrivacyPolicyPage type="terms" />;
    }

    // Fallback error screen
    return (
      <div className="py-24 sm:py-32 text-center bg-white border-b border-slate-100 min-h-[400px] flex flex-col justify-center items-center space-y-4 px-4">
        <h2 className="text-2xl font-extrabold text-[#102033] tracking-tight">Page Not Found</h2>
        <p className="text-sm text-[var(--color-muted)] max-w-sm">The path you requested does not exist in our system database.</p>
        <button
          onClick={() => navigateTo('/')}
          className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white font-bold text-xs rounded-xl cursor-pointer shadow-sm transition-colors"
        >
          Return Home
        </button>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-[var(--color-background)] selection:bg-[var(--color-primary)] selection:text-white flex flex-col justify-between">
      {/* Dynamic Sticky Header */}
      <Header />

      {/* Main content body */}
      <main className="flex-grow">
        {renderContent()}
      </main>

      {/* Corporate Premium Footer */}
      <Footer />

      {/* Floating Interactive AI Assistant Widget */}
      <ChatbotWidget />
    </div>
  );
}


