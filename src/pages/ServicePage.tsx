import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { triggerChatbot } from '../components/ui/ChatbotWidget';
import {
  AlertCircle,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Check,
  MessageSquare,
  Sparkles,
  Zap,
  Target
} from 'lucide-react';
import { servicesData, ServiceDetail } from '../data/servicesData';

interface ServicePageProps {
  slug: string;
}

export default function ServicePage({ slug }: ServicePageProps) {
  // Find service detail, or fallback to first one if path is mismatch
  const service: ServiceDetail = servicesData[slug] || servicesData['website-development'];

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [slug]);

  // Handler for custom link dispatch
  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  const currentYear = new Date().getFullYear();

  return (
    <div id={`service-page-${slug}`} className="bg-[var(--color-background)] min-h-screen">
      
      {/* SECTION 1 — SERVICE HERO */}
      <section className="relative pt-10 pb-16 sm:pb-24 border-b border-slate-100 overflow-hidden">
        {/* Ambient background decoration */}
        <div className="absolute inset-0 bg-radial-gradient(circle_at_top_right,rgba(8,102,198,0.03)_0%,transparent_60%) pointer-events-none" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/2 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb row */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-8 font-mono">
            <button onClick={() => navigateTo('/')} className="hover:text-primary transition-colors cursor-pointer">HOME</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-400 uppercase">SERVICES</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary uppercase truncate">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-widest text-primary bg-primary/5 uppercase font-mono border border-primary/10">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-primary" />
                {service.category}
              </span>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102033] tracking-tight leading-[1.12]">
                {service.headline}
              </h1>

              <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed font-normal">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => triggerChatbot()}
                  className="px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer group flex items-center gap-2"
                >
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Abstract Visual Illustration Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[400px] aspect-square rounded-[36px] border border-primary/10 bg-white p-6 shadow-xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(8,102,198,0.01)_0%,transparent_80%)" />
                
                {/* Visual design details */}
                <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-primary/10 animate-[spin_80s_linear_infinite]" />
                <div className="absolute w-[50%] h-[50%] rounded-full border border-dashed border-primary/5 animate-[spin_40s_linear_infinite_reverse]" />
                
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center shadow-sm">
                    <Target className="w-10 h-10 text-primary animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-300 tracking-wider font-mono uppercase">PURE PATH TECH</span>
                    <h3 className="text-lg font-extrabold text-[#102033]">{service.title}</h3>
                    <p className="text-[11px] text-[var(--color-muted)] max-w-[200px]">Connected digital ecosystem built to scale business models.</p>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="w-2 h-2 rounded-full bg-primary/30" />
                    <span className="w-2 h-2 rounded-full bg-purple-300" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — BUSINESS PROBLEM */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-extrabold tracking-widest text-red-500 uppercase font-mono">
              The Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102033] tracking-tight">
              {service.challengesHeading}
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
              Every growing business faces operational and visual friction. Here is what we solve under this service:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="bg-[var(--color-background)] border border-slate-100 rounded-3xl p-8 text-left space-y-4 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-extrabold text-[#102033] tracking-tight">
                  {challenge.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {challenge.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3 — OUR SOLUTION */}
      <section className="py-16 sm:py-24 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase font-mono">
              Our Approach
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102033] tracking-tight">
              How Pure Path Helps
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
              {service.approachDesc}
            </p>
          </div>

          {/* Connected ecosystem visual diagram */}
          <div className="relative bg-white border border-slate-150 rounded-[32px] p-8 sm:p-12 max-w-4xl mx-auto overflow-hidden shadow-xs">
            <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(8,102,198,0.01)_0%,transparent_80%)" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
              <div className="md:col-span-5 text-left space-y-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center font-bold text-xs">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-extrabold text-[#102033]">Consolidated Integration</h3>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                  Instead of disconnected scripts and uncoordinated layouts, we align your digital strategy under one cohesive ecosystem, ensuring brand, data, and user experience flow beautifully.
                </p>
              </div>

              {/* Graphical connect pipeline */}
              <div className="md:col-span-7 flex flex-col gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--color-background)] border border-slate-100 text-left">
                  <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold font-mono">1</div>
                  <div>
                    <h4 className="text-xs font-bold text-[#102033]">Identify core blockages</h4>
                    <p className="text-[11px] text-[var(--color-muted)]">Analyze high cart abandonments, weak hooks, or manual workloads.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--color-background)] border border-slate-100 text-left ml-0 sm:ml-6">
                  <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold font-mono">2</div>
                  <div>
                    <h4 className="text-xs font-bold text-[#102033]">Deploy clean components</h4>
                    <p className="text-[11px] text-[var(--color-muted)]">Type-safe logic modules and distinctive design guidelines.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--color-background)] border border-slate-100 text-left ml-0 sm:ml-12">
                  <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold font-mono">3</div>
                  <div>
                    <h4 className="text-xs font-bold text-[#102033]">Scale conversion rates</h4>
                    <p className="text-[11px] text-[var(--color-muted)]">Analyze traffic logs, refine layout wording, and automate notifications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4 — CAPABILITIES */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase font-mono">
              What's Included
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102033] tracking-tight">
              Our Specific Capabilities
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
              We focus on executing highly specific deliverables with perfect spacing, typographies, and robust engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-[var(--color-background)] border border-slate-100 rounded-2xl p-6 sm:p-8 text-left space-y-3 hover:bg-slate-50/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/5 text-primary flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#102033]">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 — PROCESS */}
      <section className="py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase font-mono">
              How We Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102033] tracking-tight">
              The Engineering Process
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
              A structured lifecycle that ensures consistency, type safety, and on-time delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 text-left space-y-4 hover:shadow-md transition-shadow relative group"
              >
                <span className="text-2xl font-extrabold text-slate-100 group-hover:text-primary/10 transition-colors font-mono block">
                  {step.number}
                </span>
                <h3 className="text-base font-extrabold text-[#102033] tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6 — BUSINESS OUTCOMES */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-extrabold tracking-widest text-emerald-500 uppercase font-mono">
              Business Outcomes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102033] tracking-tight">
              What This Helps You Achieve
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
              Measurable, structural business benefits that drive long-term value, with zero false statistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.outcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="bg-[var(--color-background)] border border-slate-100 rounded-3xl p-8 text-left space-y-4"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-extrabold text-[#102033] tracking-tight">
                  {outcome.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {outcome.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7 — RELATED SERVICES */}
      <section className="py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-16">
            <div className="text-left space-y-2">
              <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase font-mono">
                Synergies
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102033] tracking-tight">
                Related Services
              </h2>
            </div>
            <button
              onClick={() => navigateTo('/')}
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-primary hover:underline font-mono uppercase cursor-pointer"
            >
              All Services
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.relatedSlugs.map((relSlug) => {
              const relService = servicesData[relSlug];
              if (!relService) return null;
              return (
                <div
                  key={relSlug}
                  onClick={() => navigateTo(`/services/${relSlug}`)}
                  className="bg-white border border-slate-100 rounded-[24px] p-6 text-left space-y-4 hover:shadow-lg hover:border-primary/10 transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[220px]"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase font-mono group-hover:text-primary transition-colors">
                      {relService.category}
                    </span>
                    <h3 className="text-lg font-extrabold text-[#102033] tracking-tight group-hover:text-primary transition-colors">
                      {relService.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed line-clamp-3">
                      {relService.description}
                    </p>
                  </div>

                  <div className="flex items-center text-xs font-bold text-primary group-hover:underline pt-4">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section className="py-20 sm:py-28 bg-[#0866C6] text-white relative overflow-hidden">
        {/* Background grids and shapes */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest text-white bg-white/10 uppercase font-mono border border-white/10">
            Have a Project in Mind?
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
            Let's Build the Right Solution Together.
          </h2>
          
          <p className="text-sm sm:text-base text-blue-100/80 max-w-lg mx-auto leading-relaxed">
            Tell us where you are today, and we'll help you find the right path to create, build, and scale your digital presence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <button
              onClick={() => triggerChatbot()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#0866C6] font-bold text-sm transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
            >
              Talk to an Expert
              <ArrowRight className="w-4 h-4 text-[#0866C6]" />
            </button>
            <a
              href="https://wa.me/1234567890?text=Hi,%20I'm%20interested%20in%20discussing%20a%20project%20with%20Pure%20Path%20Infotech."
              target="_blank"
              referrerPolicy="no-referrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 text-white font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
