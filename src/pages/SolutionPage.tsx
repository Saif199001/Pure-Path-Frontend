import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { triggerChatbot } from '../components/ui/ChatbotWidget';
import {
  ChevronRight,
  ArrowRight,
  Sparkles,
  Users,
  Route,
  Layers,
  Award,
  ShieldCheck,
  MessageSquare,
  TrendingUp,
  Target
} from 'lucide-react';
import { solutionsDetailData, SolutionDetail } from '../data/solutionsDetailData';

interface SolutionPageProps {
  slug: string;
}

export default function SolutionPage({ slug }: SolutionPageProps) {
  // Retrieve solution details or fall back to 'launch-my-business'
  const solution: SolutionDetail = solutionsDetailData[slug] || solutionsDetailData['launch-my-business'];

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [slug]);

  // Handler for custom link dispatch
  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <div id={`solution-page-${slug}`} className="bg-[var(--color-background)] min-h-screen">
      
      {/* SECTION 1 — SOLUTION HERO */}
      <section className="relative pt-10 pb-16 sm:pb-24 border-b border-slate-100 overflow-hidden">
        {/* Ambient background decoration */}
        <div className="absolute inset-0 bg-radial-gradient(circle_at_top_right,rgba(8,102,198,0.03)_0%,transparent_60%) pointer-events-none" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/2 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb row */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-8 font-mono">
            <button onClick={() => navigateTo('/')} className="hover:text-primary transition-colors cursor-pointer">HOME</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-400 uppercase">SOLUTIONS</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary uppercase truncate">{solution.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-widest text-primary bg-primary/5 uppercase font-mono border border-primary/10">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-primary" />
                Goal-Oriented Solution
              </span>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102033] tracking-tight leading-[1.12]">
                {solution.headline}
              </h1>

              <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed font-normal">
                {solution.intro}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => triggerChatbot()}
                  className="px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer group flex items-center gap-2"
                >
                  {solution.ctaText || 'Start Your Project'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Abstract Visual Illustration Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[400px] aspect-square rounded-[36px] border border-primary/10 bg-white p-6 shadow-xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(8,102,198,0.01)_0%,transparent_80%)" />
                
                {/* Visual design details */}
                <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-primary/10 animate-[spin_60s_linear_infinite]" />
                <div className="absolute w-[50%] h-[50%] rounded-full border border-dashed border-primary/5 animate-[spin_30s_linear_infinite_reverse]" />
                
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center shadow-sm">
                    <Target className="w-10 h-10 text-primary animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-300 tracking-wider font-mono uppercase">CONNECTED GOALS</span>
                    <h3 className="text-lg font-extrabold text-[#102033]">{solution.title}</h3>
                    <p className="text-[11px] text-[var(--color-muted)] max-w-[200px]">Combining capabilities under one seamless agency ecosystem.</p>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — WHO THIS IS FOR */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left intro row */}
            <div className="lg:col-span-5 text-left space-y-4">
              <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase font-mono">
                Target Audience
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102033] tracking-tight">
                Who This Is For
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                This unified solution is custom-tailored for companies seeking focused execution without managing multiple external agencies.
              </p>
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-primary font-mono bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/10">
                  <Users className="w-4 h-4 text-primary" />
                  Consolidated Partner
                </div>
              </div>
            </div>

            {/* Right bullet cards */}
            <div className="lg:col-span-7 space-y-4">
              {solution.whoThisIsFor.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-5 rounded-2xl bg-[var(--color-background)] border border-slate-100 text-left items-start hover:shadow-xs transition-shadow"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center shrink-0 font-bold text-xs font-mono">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-[#102033] font-semibold leading-relaxed pt-1">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3 — YOUR PATH FORWARD */}
      <section className="py-16 sm:py-24 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase font-mono">
              The Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102033] tracking-tight">
              {solution.pathHeading || 'Your Path Forward'}
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
              We guide you through a synchronized operational flow, ensuring perfect execution from discovery to post-launch optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {solution.pathSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 text-left space-y-4 relative group hover:shadow-lg transition-all duration-300"
              >
                {/* Horizontal progress connector lines (hidden on mobile) */}
                {idx < solution.pathSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-slate-100 group-hover:bg-primary/20 transition-colors z-20" />
                )}

                <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center font-bold text-xs font-mono">
                  0{idx + 1}
                </div>
                
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

      {/* SECTION 4 — CAPABILITIES INCLUDED */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase font-mono">
              The Ecosystem
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102033] tracking-tight">
              {solution.capabilitiesHeading || 'Capabilities Included'}
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
              We bundle these modular core services together to deliver a single friction-free customer goal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solution.capabilities.map((cap, idx) => (
              <div
                key={idx}
                onClick={() => navigateTo(cap.href)}
                className="bg-[var(--color-background)] border border-slate-100 rounded-[28px] p-6 sm:p-8 text-left space-y-4 hover:shadow-lg hover:border-primary/10 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#102033] tracking-tight group-hover:text-primary transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed line-clamp-3">
                    {cap.desc}
                  </p>
                </div>

                <div className="flex items-center text-xs font-bold text-primary group-hover:underline pt-4">
                  <span>View Service Detail</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6 — WHAT YOU GET */}
      <section className="py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-extrabold tracking-widest text-emerald-500 uppercase font-mono">
              Deliverables
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102033] tracking-tight">
              {solution.deliverablesHeading || 'What You Get'}
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
              Clear, transparent project deliverables that move your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solution.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 rounded-3xl p-8 text-left space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-extrabold text-[#102033] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7 — WHY PURE PATH */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--color-background)] border border-primary/15 rounded-[32px] p-8 sm:p-12 text-left relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(8,102,198,0.01)_0%,transparent_80%)" />
            
            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#102033] tracking-tight">
                  Why Businesses Choose PurePath
                </h3>
                <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                  {solution.whyPurePath}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs text-[#102033] font-bold font-mono uppercase">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    One Connected Partner
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Zero Subcontracting
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Clear Accountability
                  </span>
                </div>
              </div>
            </div>
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
            Ready to Move Forward?
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
            {solution.finalCtaHeading}
          </h2>
          
          <p className="text-sm sm:text-base text-blue-100/80 max-w-lg mx-auto leading-relaxed">
            {solution.finalCtaSub}
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
              href="https://wa.me/1234567890?text=Hi,%20I'm%20interested%20in%20discussing%20the%20following%20solution:%20"
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
