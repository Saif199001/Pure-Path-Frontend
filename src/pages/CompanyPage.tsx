import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { triggerChatbot } from '../components/ui/ChatbotWidget';
import {
  ChevronRight,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Target,
  Zap,
  Layers,
  Heart,
  TrendingUp,
  Cpu
} from 'lucide-react';

export default function CompanyPage() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, []);

  // Handler for custom link dispatch
  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <div className="bg-[var(--color-background)] min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient(circle_at_top_right,rgba(8,102,198,0.02)_0%,transparent_60%) pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-8 font-mono">
            <button onClick={() => navigateTo('/')} className="hover:text-primary transition-colors cursor-pointer">HOME</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary uppercase">COMPANY</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-widest text-primary bg-primary/5 uppercase font-mono border border-primary/10">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-primary" />
              Our Mission
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#102033] tracking-tight leading-tight">
              One Partner for Your Digital Journey.
            </h1>
            <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed font-normal">
              PurePath Infotech was founded to eliminate digital fragmentation. We believe that a company's brand narrative, software architectures, acquisition channels, and automation flows should work in perfect harmony under one unified ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* 1. WHO WE ARE & WHAT WE BELIEVE */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Who We Are */}
            <div className="space-y-4">
              <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase font-mono">
                Identity
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102033] tracking-tight">
                Who We Are
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                We are a modern team of strategists, designers, engineers, and digital marketers operating as a single, fully connected digital growth and technology company. Instead of handoffs between separate contractors, we work together to solve complex business problems.
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                By maintaining absolute control over our code standards and layout guidelines, we ensure that every client deliverable meets our rigorous, type-safe development criteria and pristine design systems.
              </p>
            </div>

            {/* What We Believe */}
            <div className="space-y-4">
              <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase font-mono">
                Beliefs
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102033] tracking-tight">
                What We Believe
              </h2>
              
              <div className="space-y-4 pt-2">
                <div className="flex gap-4 p-4 rounded-2xl bg-[var(--color-background)] border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#102033]">Extreme Accountability</h4>
                    <p className="text-xs text-[var(--color-muted)] mt-1">We take full ownership of the digital outcome. No excuses, no subcontracting, no disconnected modules.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-2xl bg-[var(--color-background)] border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#102033]">Outcome-Driven Craft</h4>
                    <p className="text-xs text-[var(--color-muted)] mt-1">We do not believe in fluff or vanity metrics. Every wireframe and line of code must trace directly to a business goal.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE PURE PATH ECOSYSTEM (CREATE → BUILD → GROW → AUTOMATE → SCALE) */}
      <section className="py-16 sm:py-24 border-b border-slate-100 text-left overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase font-mono">
              Ecosystem
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102033] tracking-tight">
              The PurePath Ecosystem
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
              We align our digital work around five core business lifecycle stages to ensure continuous, sustainable growth:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: 'CREATE', icon: Sparkles, desc: 'Strategy, core messaging, brand books, distinctive logos, and copy layouts.' },
              { title: 'BUILD', icon: Layers, desc: 'Type-safe corporate sites, custom applications, APIs, and mobile apps.' },
              { title: 'GROW', icon: TrendingUp, desc: 'High-intent search ads, SEO, social grids, and performance marketing.' },
              { title: 'AUTOMATE', icon: Cpu, desc: 'AI assistants, WhatsApp business tools, webhook integrations, and CRM syncs.' },
              { title: 'SCALE', icon: Zap, desc: 'Ongoing server optimization, CI/CD, security patching, and catalog syncing.' }
            ].map((eco, idx) => {
              const IconComp = eco.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-150 rounded-2xl p-6 space-y-4 hover:shadow-md transition-shadow relative group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center">
                    <IconComp className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-extrabold text-[#102033] tracking-widest font-mono">
                    {eco.title}
                  </h3>
                  <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                    {eco.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. HOW WE WORK (Strategy → Execution → Growth) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side info */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase font-mono">
                Methodology
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102033] tracking-tight">
                Our Work Methodology
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                By organizing our engagements into three simple, transparent, and logical phases, we remove client friction and ensure pristine code delivery:
              </p>
            </div>

            {/* Right side steps */}
            <div className="lg:col-span-7 space-y-6">
              {[
                { step: 'Phase 1', title: 'Technical Strategy', desc: 'Analyzing existing manuals, database structures, and competitor landscapes to map focused backlogs.' },
                { step: 'Phase 2', title: 'Continuous Execution', desc: 'Developing clean modular code, styling layouts, running speed audits, and cloud deployments.' },
                { step: 'Phase 3', title: 'Sustainable Growth', desc: 'Ongoing diagnostic monitors, search marketing, dependency updates, and automation optimization.' }
              ].map((ph, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-[var(--color-background)] border border-slate-100">
                  <div className="px-2.5 py-1 rounded bg-primary/10 text-primary text-[10px] font-extrabold font-mono tracking-widest h-fit uppercase">
                    {ph.step}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#102033]">{ph.title}</h4>
                    <p className="text-xs text-[var(--color-muted)] mt-1">{ph.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 4. OPTIONAL TEAM PLACEHOLDERS */}
      <section className="py-16 sm:py-24 border-b border-slate-100 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase font-mono">
              The Creators
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102033] tracking-tight">
              Our Leadership Team
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
              Replaceable leadership placeholders. We work together with extreme technical care to move your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { name: 'Core Strategy Lead', role: 'Business & Brand Positioning', initials: 'CS' },
              { name: 'Senior Solutions Architect', role: 'Type-Safe Software & API Systems', initials: 'SA' },
              { name: 'Growth Performance Lead', role: 'Campaigns & Retention Automation', initials: 'GL' }
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-150 rounded-2xl p-6 text-center space-y-4 hover:shadow-md transition-shadow"
              >
                {/* Visual Avatar Placeholder - clean lines, no real faces to respect guidelines */}
                <div className="w-16 h-16 rounded-full bg-primary/5 text-primary flex items-center justify-center mx-auto text-lg font-extrabold font-mono border border-primary/10">
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-[#102033]">{member.name}</h3>
                  <p className="text-xs text-[var(--color-muted)] mt-1">{member.role}</p>
                </div>
                <div className="text-[10px] text-slate-300 font-mono tracking-wider uppercase">
                  PUREPATH TEAM PLACEHOLDER
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-28 bg-[#0866C6] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest text-white bg-white/10 uppercase font-mono border border-white/10">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
            Let's Build What's Next.
          </h2>
          <p className="text-sm sm:text-base text-blue-100/80 max-w-lg mx-auto leading-relaxed">
            Partner with a single consolidated digital growth team to create, build, grow, automate, and scale your business operations.
          </p>
          <div className="pt-4 flex justify-center">
            <button
              onClick={() => triggerChatbot()}
              className="px-8 py-4 rounded-xl bg-white text-[#0866C6] font-bold text-sm transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
            >
              Talk to an Expert
              <ArrowRight className="w-4 h-4 text-[#0866C6]" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
