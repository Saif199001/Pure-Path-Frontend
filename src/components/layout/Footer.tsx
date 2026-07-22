import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import Container from '../ui/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [logoSrc, setLogoSrc] = useState<string | null>(null);

  // Safe image load check for the logo from multiple potential paths
  useEffect(() => {
    const paths = [
      '/src/assets/logo.png',
      '/assets/logo.png',
      '/src/assets/logo.svg',
      '/assets/logo.svg',
      '/pure-path-logo.png'
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

  const services = [
    'Branding & Identity',
    'High-Converting E-Commerce',
    'Digital Marketing & SEO',
    'Custom Websites & Apps',
    'AI & Workflow Automation',
  ];

  const roadmaps = [
    { label: 'CREATE', desc: 'Brand & Visual Strategy' },
    { label: 'BUILD', desc: 'Custom Software & Websites' },
    { label: 'GROW', desc: 'Digital Marketing & Conversion' },
    { label: 'AUTOMATE', desc: 'AI Orchestration & Bots' },
    { label: 'SCALE', desc: 'Infrastructure & Cloud' },
  ];

  return (
    <footer className="bg-[var(--color-navy)] text-slate-300 border-t border-slate-900">
      
      {/* Top Main Footer Area */}
      <div className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Column 1: Brand Info */}
            <div className="lg:col-span-4 space-y-6">
              <a href="#home" className="flex items-center gap-2 group">
                {logoSrc ? (
                  <img
                    src={logoSrc}
                    alt="Pure Path Infotech Logo"
                    className="h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                  />
                ) : (
                  <>
                    <div className="w-16 h-10 sm:w-20 sm:h-12 flex items-center justify-center mb-1">
                      <img
                        src="/logo1.jpeg"
                        alt="Pure Path Infotech"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <span className="text-xl font-bold font-display tracking-tight text-white">
                      Pure Path<span className="text-primary-light font-medium"> Infotech</span>
                    </span>
                  </>
                )}
              </a>
              
              {/* Social links */}
              <div className="flex items-center gap-3.5 pt-2">
                <a href="https://www.linkedin.com/company/pure-path-infotech/" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center text-slate-400 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://www.facebook.com/purepathinfotech/" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center text-slate-400 transition-colors" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/purepathinfotech/" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center text-slate-400 transition-colors" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Brand Concept / Ecosystem Roadmap */}
            <div className="lg:col-span-3 space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Ecosystem Lifecycle
              </h4>
              <ul className="space-y-3.5">
                {roadmaps.map((step) => (
                  <li key={step.label} className="text-xs flex items-start gap-2.5">
                    <span className="px-1.5 py-0.5 rounded-sm bg-primary/20 text-primary-light font-mono font-bold text-[10px]">
                      {step.label}
                    </span>
                    <span className="text-slate-300 font-medium">{step.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Navigation */}
            <div className="lg:col-span-2 space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Services
              </h4>
              <ul className="space-y-2.5 text-sm">
                {services.map((service) => (
                  <li key={service}>
                    <a href="#services" className="hover:text-primary-light transition-colors block text-slate-400 hover:translate-x-0.5 transform duration-150">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact / Office Info */}
            <div className="lg:col-span-3 space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Contact & Connection
              </h4>
              <ul className="space-y-3.5 text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-primary-light shrink-0 mt-0.5" />
                  <span>
                    Ward No 8 Near Ram Leela Ground Sangaria-335063<br />
                    District hanumangarh Rajasthan India
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-primary-light shrink-0" />
                  <a href="mailto:info@purepathinfotech.com" className="hover:text-primary-light transition-colors">
                    info@purepathinfotech.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-primary-light shrink-0" />
                  <span>+919587395454</span>
                </li>
              </ul>
            </div>

          </div>
        </Container>
      </div>

      {/* Bottom Copyright & Terms Bar */}
      <div className="border-t border-slate-900/60 py-6 text-xs bg-slate-950/40 text-slate-500">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              &copy; {currentYear} Pure Path Infotech. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-slate-400 transition-colors">Terms of Service</a>
              <a href="#sitemap" className="hover:text-slate-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </Container>
      </div>

    </footer>
  );
}
