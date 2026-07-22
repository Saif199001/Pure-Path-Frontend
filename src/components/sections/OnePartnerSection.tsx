import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  PenTool,
  ShoppingBag,
  Code2,
  Bot,
  TrendingUp,
  Zap,
  Network,
  XCircle,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  ChevronsRight,
  Users,
  Sparkles,
  HelpCircle,
  FileText
} from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { triggerChatbot } from '../ui/ChatbotWidget';

// Benefit Items interface
interface BenefitCard {
  id: string;
  icon: any;
  eyebrow: string;
  title: string;
  desc: string;
}

// Interactive Capability Node interface
interface CapabilityNode {
  id: string;
  label: string;
  icon: any;
  angle: number;
  x: number;
  y: number;
  pctLeft: string;
  pctTop: string;
}

export default function OnePartnerSection() {
  const [hoveredCapability, setHoveredCapability] = useState<string | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // 6 Connected capabilities for the Pure Path side
  const capabilities: CapabilityNode[] = [
    {
      id: 'strategy',
      label: 'Strategy',
      icon: Compass,
      angle: 0,
      x: 250,
      y: 65,
      pctLeft: '50%',
      pctTop: '13%'
    },
    {
      id: 'creative',
      label: 'Creative',
      icon: PenTool,
      angle: 60,
      x: 410,
      y: 157.5,
      pctLeft: '82%',
      pctTop: '31.5%'
    },
    {
      id: 'commerce',
      label: 'Commerce',
      icon: ShoppingBag,
      angle: 120,
      x: 410,
      y: 342.5,
      pctLeft: '82%',
      pctTop: '68.5%'
    },
    {
      id: 'technology',
      label: 'Technology',
      icon: Code2,
      angle: 180,
      x: 250,
      y: 435,
      pctLeft: '50%',
      pctTop: '87%'
    },
    {
      id: 'automation',
      label: 'AI & Automation',
      icon: Bot,
      angle: 240,
      x: 90,
      y: 342.5,
      pctLeft: '18%',
      pctTop: '68.5%'
    },
    {
      id: 'growth',
      label: 'Growth',
      icon: TrendingUp,
      angle: 300,
      x: 90,
      y: 157.5,
      pctLeft: '18%',
      pctTop: '31.5%'
    }
  ];

  // 4 Bottom Benefit Cards
  const benefits: BenefitCard[] = [
    {
      id: 'one-strategy',
      icon: Compass,
      eyebrow: 'ONE STRATEGY',
      title: 'One Clear Strategy',
      desc: 'Your brand, marketing and technology move toward the same business goals.'
    },
    {
      id: 'faster-execution',
      icon: Zap,
      eyebrow: 'FASTER EXECUTION',
      title: 'Move Faster',
      desc: 'Less coordination between vendors means faster decisions and smoother execution.'
    },
    {
      id: 'connected-expertise',
      icon: Network,
      eyebrow: 'CONNECTED EXPERTISE',
      title: 'Everything Connected',
      desc: 'Creative, commerce, technology and automation work together instead of operating in silos.'
    },
    {
      id: 'built-scale',
      icon: TrendingUp,
      eyebrow: 'BUILT TO SCALE',
      title: 'Ready for Growth',
      desc: 'Start with what you need today and expand your digital ecosystem as your business grows.'
    }
  ];

  return (
    <section
      id="why-pure-path"
      className="relative bg-gradient-to-b from-white via-[#F7FAFD]/40 to-white py-20 lg:py-28 overflow-hidden select-none"
    >
      {/* Soft Top/Bottom transition graphics */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-slate-50/50 to-transparent pointer-events-none" />
      
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#EAF5FF]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        
        {/* ==================================================
            1. TOP HEADER SECTION
            ================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-widest text-primary uppercase font-mono bg-[#EAF5FF] border border-primary/15 mb-4"
          >
            <Users className="w-3.5 h-3.5 text-primary" />
            Why Pure Path
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#102033] tracking-tight mb-6"
          >
            One Partner.<br className="sm:hidden" /> Every Digital Possibility.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#607085] leading-relaxed"
          >
            Building a successful business shouldn't mean managing multiple agencies, freelancers and technology vendors. From your first idea to long-term growth, Pure Path brings strategy, creativity, commerce and technology together — so you can move faster with one trusted partner.
          </motion.p>
        </div>

        {/* ==================================================
            2. COMPARISON SIDE-BY-SIDE GRAPHIC
            ================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 lg:gap-4 items-center mb-24 relative">
          
          {/* LEFT: Fragmented Approach Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#F8FAFC]/90 border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase font-mono bg-slate-200/55 px-2.5 py-1 rounded-md">
                  The Traditional Way
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-[#102033] mb-1">
                Too many partners.
              </h3>
              <p className="text-xs text-[#607085] font-semibold mb-6">
                Too much coordination.
              </p>

              {/* Tangled/Fragmented SVG illustration */}
              <div className="relative h-[280px] w-full max-w-[340px] sm:max-w-none bg-white rounded-2xl border border-dashed border-slate-200 overflow-hidden p-4 mb-6 flex items-center justify-center mx-auto">
                {/* Tangled curved background connectors */}
                <svg className="absolute inset-0 w-full h-full opacity-35 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 15,12 Q 30,35 50,50" fill="none" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="3 3" />
                  <path d="M 85,12 Q 70,35 50,50" fill="none" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="3 3" />
                  <path d="M 12,42 Q 28,48 50,50" fill="none" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="3 3" />
                  <path d="M 88,42 Q 72,48 50,50" fill="none" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="3 3" />
                  <path d="M 15,88 Q 30,65 50,50" fill="none" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="3 3" />
                  <path d="M 85,88 Q 70,65 50,50" fill="none" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="3 3" />
                </svg>

                {/* Scattered Agency Cards */}
                <div className="absolute top-[6%] left-[3%] scale-[0.8] xs:scale-[0.88] sm:scale-[0.95] opacity-80 bg-slate-50 border border-slate-200 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[8px] sm:text-[10px] font-bold text-slate-400 flex items-center gap-1 sm:gap-1.5 shadow-2xs whitespace-nowrap">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-300 shrink-0" />
                  Branding Agency
                </div>
                <div className="absolute top-[6%] right-[3%] scale-[0.8] xs:scale-[0.88] sm:scale-[0.95] opacity-85 bg-slate-50 border border-slate-200 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[8px] sm:text-[10px] font-bold text-slate-400 flex items-center gap-1 sm:gap-1.5 shadow-2xs whitespace-nowrap">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-300 shrink-0" />
                  SEO/Marketing Agency
                </div>
                <div className="absolute top-[36%] left-[2%] scale-[0.8] xs:scale-[0.88] sm:scale-[0.95] opacity-75 bg-slate-50 border border-slate-200 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[8px] sm:text-[10px] font-bold text-slate-400 flex items-center gap-1 sm:gap-1.5 shadow-2xs whitespace-nowrap">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-300 shrink-0" />
                  Web Developer
                </div>
                <div className="absolute top-[36%] right-[2%] scale-[0.8] xs:scale-[0.88] sm:scale-[0.95] opacity-80 bg-slate-50 border border-slate-200 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[8px] sm:text-[10px] font-bold text-slate-400 flex items-center gap-1 sm:gap-1.5 shadow-2xs whitespace-nowrap">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-300 shrink-0" />
                  AI Consultant
                </div>
                <div className="absolute bottom-[6%] left-[3%] scale-[0.8] xs:scale-[0.88] sm:scale-[0.95] opacity-80 bg-slate-50 border border-slate-200 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[8px] sm:text-[10px] font-bold text-slate-400 flex items-center gap-1 sm:gap-1.5 shadow-2xs whitespace-nowrap">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-300 shrink-0" />
                  Cloud Host
                </div>
                <div className="absolute bottom-[6%] right-[3%] scale-[0.8] xs:scale-[0.88] sm:scale-[0.95] opacity-85 bg-slate-50 border border-slate-200 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[8px] sm:text-[10px] font-bold text-slate-400 flex items-center gap-1 sm:gap-1.5 shadow-2xs whitespace-nowrap">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-300 shrink-0" />
                  Software Team
                </div>

                {/* Isolated Fragmented Client center block */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100 border-2 border-slate-200 rounded-xl p-2.5 sm:p-3 text-center shadow-xs z-10 w-full max-w-[115px] sm:max-w-[130px] scale-[0.85] sm:scale-100 border-dashed shrink-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 mx-auto mb-1 sm:mb-1.5">
                    <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-extrabold text-slate-500 block leading-tight">
                    YOUR BUSINESS
                  </span>
                  <span className="text-[7.5px] sm:text-[8px] font-medium text-slate-400 block mt-0.5 leading-none">
                    Stuck coordinating
                  </span>
                </div>
              </div>
            </div>

            {/* Gray Pain Points Area */}
            <div className="space-y-2.5 border-t border-slate-200/60 pt-5">
              {[
                'Multiple vendors & contracts to actively manage',
                'Disconnected branding, marketing and core technology',
                'Slower, delayed execution and high overhead costs'
              ].map((pain, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-500 font-medium leading-tight">{pain}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CENTER: Transition Connector */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center text-center py-4 lg:py-0">
            <span className="hidden lg:flex flex-col items-center gap-1 text-slate-300 font-bold uppercase tracking-widest text-[10px] font-mono">
              <span>A Simpler</span>
              <span>Way</span>
              <ChevronsRight className="w-5 h-5 text-primary mt-1 animate-pulse" />
            </span>
            <span className="lg:hidden flex items-center gap-2 text-slate-400 font-bold uppercase tracking-widest text-[10px] font-mono py-2">
              <span>A Simpler Way</span>
              <ArrowDown className="w-4 h-4 text-primary animate-bounce" />
            </span>
          </div>

          {/* RIGHT: Pure Path Premium Way Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white border border-primary/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full shadow-lg relative overflow-hidden"
          >
            {/* Ambient Background Radial light blue glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,102,198,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold tracking-wider text-primary uppercase font-mono bg-primary/10 px-2.5 py-1 rounded-md">
                  The Pure Path Way
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-[#102033] mb-1">
                One connected partner.
              </h3>
              <p className="text-xs text-primary font-semibold mb-6">
                Consolidated path for your digital journey.
              </p>

              {/* Interconnected Interactive Wheel Diagram */}
              <div className="relative h-[280px] w-full max-w-[280px] sm:max-w-none bg-slate-50/50 rounded-2xl border border-primary/5 overflow-hidden flex items-center justify-center mx-auto">
                
                {/* Unified connection lines background */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                  {capabilities.map((cap) => {
                    const isFocused = hoveredCapability === cap.id;
                    return (
                      <line
                        key={`con-${cap.id}`}
                        x1="50%"
                        y1="50%"
                        x2={cap.pctLeft}
                        y2={cap.pctTop}
                        stroke={isFocused ? '#0866C6' : 'rgba(8, 102, 198, 0.15)'}
                        strokeWidth={isFocused ? '2.5' : '1.5'}
                        strokeDasharray={isFocused ? undefined : '3 3'}
                        className="transition-all duration-300"
                      />
                    );
                  })}
                </svg>

                {/* Surrounding outer responsive circle using CSS border instead of pixel SVG circle */}
                <div className="absolute w-[72%] h-[72%] rounded-full border border-dashed border-primary/10 pointer-events-none animate-[spin_120s_linear_infinite]" />
                <div className="absolute w-[50%] h-[50%] rounded-full border border-dashed border-primary/5 pointer-events-none animate-[spin_60s_linear_infinite_reverse]" />

                {/* Central unified Core Anchor */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-primary/20 rounded-2xl w-20 h-20 sm:w-24 sm:h-24 flex flex-col items-center justify-center p-1.5 sm:p-2 text-center shadow-md z-20 scale-90 sm:scale-100">
                  <div className="w-16 h-10 sm:w-20 sm:h-12 flex items-center justify-center mb-1">
                    <img
                      src="/logo1.jpeg"
                      alt="Pure Path Infotech"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-extrabold text-[#102033] tracking-wider block font-sans">
                    PURE PATH
                  </span>
                  <span className="text-[6px] sm:text-[7px] font-bold text-primary block mt-0.5 uppercase tracking-widest">
                    Consolidated
                  </span>
                </div>

                {/* Render the 6 interactive nodes on percent coordinate matrixes */}
                {capabilities.map((cap) => {
                  const NodeIcon = cap.icon;
                  const isFocused = hoveredCapability === cap.id;
                  return (
                    <div
                      key={cap.id}
                      style={{
                        left: cap.pctLeft,
                        top: cap.pctTop,
                        transform: 'translate(-50%, -50%)'
                      }}
                      onMouseEnter={() => setHoveredCapability(cap.id)}
                      onMouseLeave={() => setHoveredCapability(null)}
                      className={`absolute rounded-xl bg-white border p-1 flex flex-col items-center justify-center text-center cursor-pointer shadow-2xs z-30 transition-all duration-300 w-13 h-13 sm:w-16 sm:h-16 ${
                        isFocused
                          ? 'border-primary shadow-sm scale-105 sm:scale-110 bg-[#EAF5FF]/20'
                          : 'border-slate-100 hover:border-primary/40'
                      }`}
                    >
                      <NodeIcon
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mb-0.5 transition-colors duration-300 ${
                          isFocused ? 'text-primary scale-105 sm:scale-110' : 'text-slate-500'
                        }`}
                      />
                      <span className="text-[6px] sm:text-[7px] font-extrabold text-[#102033] tracking-wide leading-none uppercase max-w-full truncate px-0.5">
                        {cap.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Primary Value Indicators Area */}
            <div className="space-y-2.5 border-t border-primary/10 pt-5 mt-6 sm:mt-0">
              {[
                'One point of contact coordinating all modules',
                'Unified strategy tying brand, commerce & SaaS systems',
                'Dramatically faster launch schedules with lower overhead'
              ].map((value, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs text-[#102033] font-semibold leading-tight">{value}</span>
                </div>
              ))}
            </div>

            {/* Beautiful highlight text badge at the bottom of the column */}
            <div className="mt-5 p-3 rounded-xl bg-[var(--color-background)] border border-primary/5 text-center">
              <span className="text-xs font-bold text-[#102033]">
                You focus on your business. <span className="text-primary font-semibold">We connect the rest.</span>
              </span>
            </div>

          </motion.div>
        </div>

        {/* ==================================================
            3. FOUR KEY BENEFIT CARDS GRID
            ================================================== */}
        <div className="relative mb-24">
          
          {/* Subtle horizontal line connecting cards behind on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-slate-100 via-primary/10 to-slate-100 -translate-y-1/2 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Icon container */}
                    <div className="w-10 h-10 rounded-xl bg-[#EAF5FF] text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <BenefitIcon className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono block mb-2">
                      {benefit.eyebrow}
                    </span>
                    
                    <h4 className="text-base font-bold text-[#102033] mb-2 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h4>
                    
                    <p className="text-xs sm:text-sm text-[#607085] leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ==================================================
            4. BOTTOM CTA STRIP
            ================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#EAF5FF]/50 border border-primary/10 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <h4 className="text-lg font-bold text-[#102033]">
                Not sure where to start?
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#607085] leading-relaxed max-w-xl">
              Tell us what you're trying to achieve. We'll help you find the right path.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <Button
              onClick={(e) => {
                e.preventDefault();
                triggerChatbot();
              }}
              variant="primary"
              size="md"
              className="font-bold tracking-wide shadow-sm hover:shadow-md group flex items-center justify-center"
            >
              Talk to an Expert
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </Button>
            <Button
              href="#services"
              variant="outline"
              size="md"
              className="bg-white border-slate-200/80 hover:bg-[#EAF5FF]/30 text-[#102033] font-bold flex items-center justify-center"
            >
              Explore Our Services
            </Button>
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
