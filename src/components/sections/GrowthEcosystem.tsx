import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, PenTool, Code2, TrendingUp, Bot, Rocket, ArrowRight, RefreshCw } from 'lucide-react';

interface NodeData {
  id: string;
  label: string;
  subtitle: string;
  icon: any;
  x: number;
  y: number;
  accent: string;
  glow: string;
  textColor: string;
}

export default function GrowthEcosystem() {
  const [activeNode, setActiveNode] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  // Check user preferences for motion reduction
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // 5 orbital journey nodes arranged in a clean circular/pentagonal composition
  const nodes: NodeData[] = [
    {
      id: 'create',
      label: 'CREATE',
      subtitle: 'Brand & Content',
      icon: PenTool,
      x: 260,
      y: 80,
      accent: '#0866C6', // Brand Blue
      glow: 'rgba(8, 102, 198, 0.4)',
      textColor: 'text-[#0866C6]'
    },
    {
      id: 'build',
      label: 'BUILD',
      subtitle: 'Technology',
      icon: Code2,
      x: 422,
      y: 208,
      accent: '#6366F1', // Indigo/Blue-violet
      glow: 'rgba(99, 102, 241, 0.4)',
      textColor: 'text-[#6366F1]'
    },
    {
      id: 'grow',
      label: 'GROW',
      subtitle: 'Marketing & Sales',
      icon: TrendingUp,
      x: 360,
      y: 398,
      accent: '#10B981', // Emerald Green
      glow: 'rgba(16, 185, 129, 0.4)',
      textColor: 'text-[#10B981]'
    },
    {
      id: 'automate',
      label: 'AUTOMATE',
      subtitle: 'AI & Workflows',
      icon: Bot,
      x: 160,
      y: 398,
      accent: '#8B5CF6', // Purple Accent
      glow: 'rgba(139, 92, 246, 0.4)',
      textColor: 'text-[#8B5CF6]'
    },
    {
      id: 'scale',
      label: 'SCALE',
      subtitle: 'Cloud & SaaS',
      icon: Rocket,
      x: 98,
      y: 208,
      accent: '#F97316', // Warm Orange
      glow: 'rgba(249, 115, 22, 0.4)',
      textColor: 'text-[#F97316]'
    }
  ];

  const centerCoords = { x: 260, y: 260 };

  // Sequential automatic highlighting loop
  useEffect(() => {
    if (isHovered || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [isHovered, prefersReducedMotion, nodes.length]);

  return (
    <div className="w-full max-w-[560px] mx-auto flex flex-col items-center justify-center p-2 relative select-none">
      
      {/* Subtle Dotted Matrix Patterns in Background corners */}
      <div className="absolute top-2 right-2 w-24 h-24 opacity-15 pointer-events-none bg-[radial-gradient(#0866C6_1px,transparent_1px)] bg-[size:10px_10px]" />
      <div className="absolute bottom-16 left-2 w-24 h-24 opacity-15 pointer-events-none bg-[radial-gradient(#1687F8_1px,transparent_1px)] bg-[size:10px_10px]" />

      {/* Floating Sparkly ambient blur background glowing circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-light/5 rounded-full blur-2xl pointer-events-none" />

      {/* Main Circular System Area */}
      <div 
        className="w-full aspect-square relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg
          viewBox="0 0 520 520"
          className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
        >
          <defs>
            {/* Soft Glow Filter for connecting active paths */}
            <filter id="node-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            {/* Linear gradients for radiating wires */}
            {nodes.map((node, index) => (
              <linearGradient
                key={`line-grad-${node.id}`}
                id={`grad-${node.id}`}
                x1="260"
                y1="260"
                x2={node.x}
                y2={node.y}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#0866C6" stopOpacity="0.8" />
                <stop offset="100%" stopColor={node.accent} stopOpacity="0.4" />
              </linearGradient>
            ))}
          </defs>

          {/* LAYER 1: 3 Concentric Orbital Rings behind all nodes */}
          {/* Inner Ring */}
          <circle
            cx="260"
            cy="260"
            r="110"
            fill="none"
            stroke="rgba(8, 102, 198, 0.08)"
            strokeWidth="1.5"
          />
          {/* Main Node-Crossing Ring */}
          <circle
            cx="260"
            cy="260"
            r="180"
            fill="none"
            stroke="rgba(8, 102, 198, 0.12)"
            strokeWidth="2"
            strokeDasharray="8 8"
            className={`${prefersReducedMotion ? '' : 'animate-[spin_100s_linear_infinite]'}`}
          />
          {/* Outer Orbital Ring with indicators of continuous loop */}
          <circle
            cx="260"
            cy="260"
            r="220"
            fill="none"
            stroke="rgba(8, 102, 198, 0.05)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />

          {/* Connecting lines between central core and nodes */}
          {nodes.map((node, index) => {
            const isActive = activeNode === index;
            return (
              <g key={`connect-${node.id}`}>
                {/* Static Link Line */}
                <line
                  x1={centerCoords.x}
                  y1={centerCoords.y}
                  x2={node.x}
                  y2={node.y}
                  stroke={isActive ? `url(#grad-${node.id})` : 'rgba(8, 102, 198, 0.15)'}
                  strokeWidth={isActive ? '2.5' : '1.5'}
                  className="transition-all duration-500"
                />

                {/* Arrowhead point marker on line */}
                <circle
                  cx={node.x - (node.x - centerCoords.x) * 0.18}
                  cy={node.y - (node.y - centerCoords.y) * 0.18}
                  r={isActive ? "4" : "2"}
                  fill={isActive ? node.accent : 'rgba(8, 102, 198, 0.3)'}
                  filter={isActive ? 'url(#node-glow)' : undefined}
                  className="transition-all duration-300"
                />

                {/* Traveling Signal Particle moving outward */}
                {!prefersReducedMotion && (
                  <motion.circle
                    r="4"
                    fill={node.accent}
                    filter="url(#node-glow)"
                    initial={{ cx: centerCoords.x, cy: centerCoords.y, opacity: 0 }}
                    animate={{
                      cx: [centerCoords.x, node.x],
                      cy: [centerCoords.y, node.y],
                      opacity: [0, 0.9, 0.9, 0]
                    }}
                    transition={{
                      duration: isActive ? 1.8 : 3.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.4
                    }}
                  />
                )}
              </g>
            );
          })}

          {/* Sequential loop circular paths connecting nodes outer ring */}
          {nodes.map((node, index) => {
            const nextNode = nodes[(index + 1) % nodes.length];
            const isActiveTransition = activeNode === index;
            
            return (
              <g key={`ring-connect-${node.id}`}>
                {/* Connecting Curved Arc or Line for continuous business loop */}
                <line
                  x1={node.x}
                  y1={node.y}
                  x2={nextNode.x}
                  y2={nextNode.y}
                  stroke={isActiveTransition ? 'rgba(22, 135, 248, 0.35)' : 'rgba(8, 102, 198, 0.08)'}
                  strokeWidth={isActiveTransition ? '2' : '1'}
                  strokeDasharray="5 5"
                  className="transition-all duration-500"
                />

                {/* Traveling orbital micro particles */}
                {!prefersReducedMotion && isActiveTransition && (
                  <motion.circle
                    r="3"
                    fill="#1687F8"
                    filter="url(#node-glow)"
                    initial={{ cx: node.x, cy: node.y }}
                    animate={{ cx: nextNode.x, cy: nextNode.y }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* LAYER 2: Central Core (Pure Path anchor) */}
        <motion.div
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.02, 1],
            boxShadow: [
              '0 8px 30px -4px rgba(8, 102, 198, 0.15)',
              '0 12px 40px -4px rgba(8, 102, 198, 0.3)',
              '0 8px 30px -4px rgba(8, 102, 198, 0.15)'
            ]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            left: `${(centerCoords.x / 520) * 100}%`,
            top: `${(centerCoords.y / 520) * 100}%`
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-white border border-primary/20 flex flex-col items-center justify-center p-3 text-center z-30 shadow-lg"
        >
          {/* Faint surrounding visual layers */}
          <div className="absolute inset-2 rounded-full border border-primary/5 bg-slate-50/50 -z-10" />
          <div className="absolute -inset-2 rounded-full border border-primary/10 opacity-30 animate-pulse -z-20" />
          
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-1">
            <img
              src="/logo1.jpeg"
              alt="PurePath Infotech"
              className="w-full h-full object-contain"
            />
          </div>
          
          <span className="text-[10px] font-bold tracking-widest text-[#071B33] font-sans uppercase">
            PUREPATH
          </span>
          
          <span className="text-[8px] font-bold text-[#607085] uppercase tracking-wider mt-1 block">
            Digital Growth
          </span>
          <span className="text-[8px] font-medium text-primary uppercase tracking-widest leading-none mt-0.5 block">
            Ecosystem
          </span>
        </motion.div>

        {/* LAYER 3: Interactive Surrounding Nodes */}
        {nodes.map((node, index) => {
          const NodeIcon = node.icon;
          const isActive = activeNode === index;
          
          return (
            <motion.div
              key={node.id}
              onClick={() => setActiveNode(index)}
              onMouseEnter={() => {
                setActiveNode(index);
                setIsHovered(true);
              }}
              onMouseLeave={() => setIsHovered(false)}
              animate={{
                scale: isActive ? 1.08 : 0.95,
                y: prefersReducedMotion ? 0 : (isActive ? [0, -4, 0] : 0),
                borderColor: isActive ? node.accent : 'rgba(226, 232, 240, 0.8)',
                boxShadow: isActive 
                  ? `0 12px 24px -6px rgba(16, 32, 51, 0.12), 0 0 16px ${node.glow}`
                  : '0 4px 12px -4px rgba(16, 32, 51, 0.05)'
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                y: isActive ? {
                  repeat: Infinity,
                  duration: 3,
                  ease: 'easeInOut'
                } : undefined
              }}
              style={{
                left: `${(node.x / 520) * 100}%`,
                top: `${(node.y / 520) * 100}%`
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 bg-white border rounded-full w-28 h-28 sm:w-[115px] sm:h-[115px] p-2.5 flex flex-col items-center justify-center z-30 cursor-pointer group hover:bg-slate-50/50 transition-colors"
            >
              {/* Inner Circle Icon Container with custom accent background */}
              <div
                style={{ 
                  backgroundColor: `${node.accent}08`, 
                  color: node.accent 
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 mb-1.5 transition-colors duration-300 ${
                  isActive ? 'scale-110 shadow-xs' : ''
                }`}
              >
                <NodeIcon 
                  style={{ color: node.accent }}
                  className="w-5 h-5 transition-transform group-hover:rotate-6" 
                />
              </div>

              {/* Title label */}
              <span 
                className="text-[9px] font-extrabold tracking-widest font-mono uppercase transition-colors"
                style={{ color: isActive ? node.accent : '#102033' }}
              >
                {node.label}
              </span>

              {/* Secondary supporting text */}
              <span className="text-[9px] font-bold text-[#607085] tracking-tight leading-tight mt-0.5 text-center px-1">
                {node.subtitle}
              </span>

              {/* Active Dot status indicator under the node */}
              {isActive && (
                <motion.div
                  layoutId="activeDot"
                  style={{ backgroundColor: node.accent }}
                  className="absolute bottom-1.5 w-1.5 h-1.5 rounded-full"
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Subtle Pill Container message below the Ecosystem */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-primary/10 shadow-xs text-primary text-xs font-bold font-sans hover:shadow-md hover:border-primary/20 transition-all duration-300"
      >
        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
        <span>One Partner. Every Digital Possibility.</span>
      </motion.div>

    </div>
  );
}
