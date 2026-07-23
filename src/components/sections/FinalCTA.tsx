import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  MessageCircle
} from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { triggerChatbot } from '../ui/ChatbotWidget';

export default function FinalCTA() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  // Safely grab WhatsApp URL from standard environment configurations or fallback to dynamic build options
  const whatsappUrl = (import.meta as any).env?.VITE_WHATSAPP_URL ||
    'https://wa.me/919587395454?text=Hello%20Pure%20Path%20Infotech%2C%20I%20would%20like%20to%20discuss%20a%20project.';

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return (
    <section 
      id="final-conversion"
      className="relative bg-gradient-to-br from-[#084488] via-[#0866C6] to-[#1687F8] py-20 lg:py-24 text-white overflow-hidden"
    >
      {/* Decorative premium background glows and geometric matrixes */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_80%)] pointer-events-none select-none" />
      <div className="absolute -top-24 -left-20 w-[450px] h-[450px] bg-white/10 rounded-full blur-[110px] pointer-events-none select-none" />
      <div className="absolute -bottom-24 -right-10 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-[90px] pointer-events-none select-none" />

      {/* Grid overlay with low opacity */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_65%,transparent_100%)] opacity-35 pointer-events-none select-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Text & Interactive buttons (approx 60%) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest text-emerald-300 uppercase bg-white/10 border border-white/10 mb-6 font-mono self-start"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-300 animate-pulse" />
              Let's Build Your Next Move
            </motion.div>

            <motion.h2
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold font-display leading-[1.12] mb-6 tracking-tight"
            >
              Ready to Move Your Business Forward?<br />
              <span className="text-emerald-200">
                Let's Build the Right Path Together.
              </span>
            </motion.h2>

            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-100/90 font-normal leading-relaxed mb-8 max-w-2xl"
            >
              Whether you're launching something new, growing an existing business or solving a complex technology challenge, tell us what you want to achieve. We'll help you figure out the next step.
            </motion.p>

            {/* Interaction Row */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  triggerChatbot();
                }}
                variant="none"
                size="lg"
                className="bg-white hover:bg-slate-50 text-[#0866C6] font-extrabold tracking-wide shadow-md hover:shadow-lg group flex items-center justify-center transition-all"
              >
                Start a Conversation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                href={whatsappUrl}
                variant="none"
                size="lg"
                className="border border-white/35 text-white hover:bg-white/10 font-bold flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                Chat on WhatsApp
              </Button>
            </motion.div>

            {/* Micro trust message bottom */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2 text-xs sm:text-sm text-slate-200/95 font-mono"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>One partner. Strategy, creativity and technology connected.</span>
            </motion.div>

          </div>

          {/* RIGHT: Abstract lightweight path illustration (approx 40%) */}
          <div className="lg:col-span-5 flex justify-center items-center relative overflow-visible min-h-[300px]">
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[380px] h-[300px] flex items-center justify-center"
            >
              {/* Premium connected SVG Nodes illustration */}
              <svg 
                viewBox="0 0 400 300" 
                className="w-full h-full text-white/30 overflow-visible"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                aria-hidden="true"
              >
                <defs>
                  <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#22C55E" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                    <stop offset="50%" stopColor="#34D399" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
                  </linearGradient>
                </defs>

                {/* Smooth bezier layout path line */}
                <path 
                  id="illustrationPath"
                  d="M 50,220 C 100,240 130,60 180,80 C 230,100 270,220 320,110" 
                  stroke="url(#lineGrad)" 
                  strokeWidth="2.5"
                  className="transition-all"
                />

                {/* Flowing animated dot along path */}
                {!prefersReducedMotion && (
                  <circle r="4" fill="#34D399">
                    <animateMotion 
                      dur="8s" 
                      repeatCount="indefinite" 
                      path="M 50,220 C 100,240 130,60 180,80 C 230,100 270,220 320,110" 
                    />
                  </circle>
                )}

                {/* Nodes with custom text blocks */}
                
                {/* Node 1: IDEA */}
                <g transform="translate(50, 220)" className="cursor-default select-none">
                  <circle r="12" fill="rgba(8, 102, 198, 0.4)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
                  <circle r="4" fill="#fff" />
                  <text y="28" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="10" fontWeight="bold" fontFamily="monospace">IDEA</text>
                </g>

                {/* Node 2: STRATEGY */}
                <g transform="translate(130, 130)" className="cursor-default select-none">
                  <circle r="12" fill="rgba(8, 102, 198, 0.4)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
                  <circle r="4" fill="#fff" />
                  <text y="-20" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="10" fontWeight="bold" fontFamily="monospace">STRATEGY</text>
                </g>

                {/* Node 3: BUILD */}
                <g transform="translate(200, 90)" className="cursor-default select-none">
                  <circle r="12" fill="rgba(8, 102, 198, 0.4)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
                  <circle r="4" fill="#fff" />
                  <text y="-20" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="10" fontWeight="bold" fontFamily="monospace">BUILD</text>
                </g>

                {/* Node 4: GROW */}
                <g transform="translate(265, 180)" className="cursor-default select-none">
                  <circle r="12" fill="rgba(8, 102, 198, 0.4)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
                  <circle r="4" fill="#fff" />
                  <text y="28" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="10" fontWeight="bold" fontFamily="monospace">GROW</text>
                </g>

                {/* Node 5: IMPACT */}
                <g transform="translate(320, 110)" className="cursor-default select-none">
                  <circle r="14" fill="rgba(16, 185, 129, 0.3)" stroke="#34D399" strokeWidth="2" className="animate-pulse" />
                  <circle r="5" fill="#34D399" />
                  <text y="-22" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="extrabold" fontFamily="monospace">IMPACT</text>
                </g>
              </svg>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
