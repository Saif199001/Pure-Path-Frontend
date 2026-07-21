import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import GrowthEcosystem from './GrowthEcosystem';
import { triggerChatbot } from '../ui/ChatbotWidget';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-5rem)] flex items-center bg-gradient-to-b from-white via-[#F7FAFD] to-white overflow-hidden py-10 lg:py-16"
    >
      {/* Background Subtle Grid & Premium Soft Decorative Graphics */}
      <div className="absolute inset-0 pointer-events-none opacity-30 select-none">
        {/* Soft grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
        
        {/* Soft background light blue/teal glowing radial orbs */}
        <div className="absolute -left-16 top-1/4 w-[450px] h-[450px] bg-[#EAF5FF]/40 rounded-full blur-3xl" />
        <div className="absolute right-0 top-1/3 w-[550px] h-[550px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Premium subtle curved decorative vector line at the bottom-left */}
        <svg 
          viewBox="0 0 400 400" 
          className="absolute -left-10 bottom-0 w-80 h-80 opacity-20 text-primary-light"
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
        >
          <path d="M-100,300 C50,250 150,350 300,200 C380,120 320,50 450,-50" strokeDasharray="6 6" />
          <circle cx="300" cy="200" r="4" fill="currentColor" />
        </svg>
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Premium Content Typography Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left max-w-2xl lg:max-w-none">
            
            {/* Elegant light-blue styled badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 self-start px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase text-primary bg-[#EAF5FF] border border-primary/15 mb-6 font-mono"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
              Your Digital Growth & Technology Partner
            </motion.div>

            {/* Premium Header Headline using fluid clamp spacing */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[clamp(3rem,4.2vw,4.25rem)] font-extrabold font-display tracking-tight text-[#102033] leading-[1.08] mb-6"
            >
              Everything Your <br className="hidden sm:inline" />
              Business Needs to <br />
              <span className="bg-gradient-to-r from-primary to-[#1687F8] bg-clip-text text-transparent">
                Build, Launch & Grow.
              </span>
            </motion.h1>

            {/* Structured Description text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#607085] font-normal leading-relaxed mb-8 max-w-xl"
            >
              From powerful brands and high-converting e-commerce stores to custom software and AI automation — we bring strategy, creativity and technology together to help your business move forward.
            </motion.p>

            {/* Polish CTA Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button 
                onClick={(e) => {
                  e.preventDefault();
                  triggerChatbot();
                }}
                variant="primary" 
                size="lg" 
                className="shadow-md hover:shadow-xl group transition-all duration-300 font-bold tracking-wide"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </Button>
              <Button 
                href="#services" 
                variant="outline" 
                size="lg"
                className="bg-white border-slate-200 hover:bg-[#EAF5FF]/30 hover:border-primary/20 text-[#102033] font-bold"
              >
                Explore Our Services
              </Button>
            </motion.div>

            {/* Trust message / subtagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 text-xs sm:text-sm text-[#607085] font-mono mb-8"
            >
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>No complicated process. Just tell us what you want to achieve.</span>
            </motion.div>

            {/* Premium, low-clutter White Trust Indicator Pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-2.5"
            >
              {['Strategy-led', 'Built for Growth', 'End-to-End Support'].map((indicator, idx) => (
                <div 
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-100/90 shadow-sm hover:shadow-xs transition-shadow"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold text-[#102033] tracking-wide">
                    {indicator}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Premium, highly responsive Digital Growth Ecosystem Illustration */}
          <div className="lg:col-span-5 flex justify-center items-center relative overflow-visible min-h-[360px] sm:min-h-[460px] lg:min-h-[520px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-full flex items-center justify-center"
            >
              <GrowthEcosystem />
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
