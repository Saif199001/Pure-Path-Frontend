import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface PrivacyPolicyPageProps {
  type: 'privacy' | 'terms';
}

export default function PrivacyPolicyPage({ type }: PrivacyPolicyPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [type]);

  // Handler for custom link dispatch
  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms & Conditions';
  const lastUpdated = 'July 20, 2026';

  return (
    <div className="bg-[var(--color-background)] min-h-screen text-left">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-12 border-b border-slate-100 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-6 font-mono">
            <button onClick={() => navigateTo('/')} className="hover:text-primary transition-colors cursor-pointer">HOME</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary uppercase">{title}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102033] tracking-tight">
            {title}
          </h1>
          <p className="text-xs text-[var(--color-muted)] font-semibold font-mono uppercase mt-2">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* DOCUMENT CONTENT */}
      <section className="py-12 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-8 text-[#102033] leading-relaxed">
            
            {isPrivacy ? (
              <>
                <div className="space-y-3">
                  <h3 className="text-lg font-extrabold">1. Introduction & Scope</h3>
                  <p className="text-xs sm:text-sm text-[var(--color-muted)]">
                    PurePath Infotech ("we", "us", "our") takes privacy very seriously. This Privacy Policy explains what personal information we collect through our static corporate website and floating assistant widgets, how we utilize this information safely, and your privacy control rights.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-extrabold">2. Data We Actively Collect</h3>
                  <p className="text-xs sm:text-sm text-[var(--color-muted)]">
                    When you voluntarily submit inquiries through our Lead Generation Contact Form or interactive chat widgets, we collect:
                  </p>
                  <ul className="list-disc pl-5 text-xs sm:text-sm text-[var(--color-muted)] space-y-1.5">
                    <li>Your full name and professional email address</li>
                    <li>The name of your business and your active contact phone number</li>
                    <li>A text description of your project objectives and budget ranges</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-extrabold">3. How Your Data is Used Safely</h3>
                  <p className="text-xs sm:text-sm text-[var(--color-muted)]">
                    All gathered data is strictly processed server-side. We use this information solely to evaluate your business requirements and formulate custom corporate service packages. We never sell, lease, or distribute your email addresses to third-party ad networks.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-extrabold">4. Secure Storage Policies</h3>
                  <p className="text-xs sm:text-sm text-[var(--color-muted)]">
                    We maintain robust type-safe database models built with rigorous security controls to ensure data safety. All lead information is safely forwarded to authorized administrators and remains protected against unauthorized data access.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-3">
                  <h3 className="text-lg font-extrabold">1. Acceptance of Terms</h3>
                  <p className="text-xs sm:text-sm text-[var(--color-muted)]">
                    By browsing this static corporate website or using our floating assistant widgets, you agree to be fully bound by these Terms & Conditions. If you do not accept these parameters, you must discontinue using our services.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-extrabold">2. Intellectual Property Rights</h3>
                  <p className="text-xs sm:text-sm text-[var(--color-muted)]">
                    All intellectual assets displayed on this site, including visual design guidelines, brand books, custom vector grids, written copy, and reusable front-end code assets, remain the exclusive property of PurePath Infotech and are protected under international copyright regulations.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-extrabold">3. Proper Usage Parameters</h3>
                  <p className="text-xs sm:text-sm text-[var(--color-muted)]">
                    Users are strictly forbidden from executing malicious bots or search scripts that attempt to disrupt server resources, harvest email addresses, or expose private API endpoints. All interactions with our chatbot assistants must remain respectful and relevant.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-extrabold">4. Disclaimers & Limits</h3>
                  <p className="text-xs sm:text-sm text-[var(--color-muted)]">
                    This static corporate website is provided on an "as-is" basis for informational objectives only. While we try to publish up-to-date descriptions, we do not guarantee the instant accuracy of pricing estimates, project durations, or third-party compatibility without direct consultation.
                  </p>
                </div>
              </>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
