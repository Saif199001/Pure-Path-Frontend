import React from 'react';
import { Eye, Settings, Code, Layers, FileText, ChevronRight } from 'lucide-react';
import Container from '../ui/Container';

interface PlaceholderProps {
  key?: string;
  id: string;
  number: string;
  title: string;
  description: string;
  details?: string[];
}

function PlaceholderCard({ id, number, title, description, details }: PlaceholderProps) {
  return (
    <div
      id={id}
      className="group relative bg-white border border-dashed border-slate-200 hover:border-primary/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5"
    >
      {/* Background Decorative Tag */}
      <div className="absolute top-4 right-4 text-xs font-mono font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded">
        Module {number}
      </div>

      <div className="flex flex-col h-full justify-between">
        <div>
          {/* Subtle Accent Line */}
          <div className="w-10 h-1.5 bg-slate-100 rounded-full mb-6 group-hover:bg-primary/20 transition-colors" />

          <h3 className="text-xl font-bold font-display text-[var(--color-text)] mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
            {description}
          </p>
        </div>

        {details && details.length > 0 && (
          <div className="border-t border-slate-50 pt-4 mt-auto">
            <span className="text-[11px] font-semibold text-primary uppercase font-mono tracking-wider block mb-2">
              Future Integrations:
            </span>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
              {details.map((detail, index) => (
                <li key={index} className="text-xs text-slate-500 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-400" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function HomepagePlaceholders() {
  const placeholdersData = [
    {
      id: 'trust-strip',
      number: '01',
      title: 'Trust & Value Strip',
      description: 'High-level strategic focus and metric badges establishing immediate technological competence and results-driven alignment.',
      details: ['Value Delivery Metrics', 'Speed & Reliability Ratings', 'Technology Standards'],
    },
    {
      id: 'core-ecosystem',
      number: '03',
      title: 'Core Ecosystem (CREATE → SCALE)',
      description: 'Interactive visualization mapping the digital transformation roadmap: Brand Creation, High-Performance Build, Growth, Automation, and Global Scale.',
      details: ['Dynamic Flow Interaction', 'Phase-Specific Milestones', 'Architecture Blueprints'],
    },
    {
      id: 'ecommerce-focus',
      number: '07',
      title: 'E-Commerce Engine',
      description: 'Dedicated focus block showcasing high-converting, blazing fast headless and customizable digital storefront frameworks.',
      details: ['Conversion Rate Mastery', 'Payment Infrastructure', 'Optimized Checkout Flows'],
    },
    {
      id: 'ai-automation',
      number: '08',
      title: 'AI & Automation Hub',
      description: 'Showcasing custom LLM integrations, intelligent workflow agents, and operations orchestrations that eliminate human friction.',
      details: ['Intelligent Agents', 'Data Pipeline Automations', 'Cognitive Workflows'],
    },
    {
      id: 'process-roadmap',
      number: '09',
      title: 'The Pure Path Process',
      description: 'Our highly collaborative, transparent step-by-step workflow: Alignment, Design, Rapid Prototyping, Validation, and Scaled Launch.',
      details: ['Collaborative Briefs', 'Continuous Feedback Loop', 'Zero-Waste Deployment'],
    },
    {
      id: 'portfolio-case-studies',
      number: '10',
      title: 'Portfolio & Case Studies',
      description: 'Case studies mapping how strategic technology deployments solved real business challenges and generated concrete ROI.',
      details: ['Interactive Showcases', 'Result Frameworks', 'Before/After Analysis'],
    },
    {
      id: 'tech-stack',
      number: '11',
      title: 'Technologies Stack',
      description: 'A visual directory of modern, secure, and blazing-fast technologies, frameworks, and databases utilized to engineer solutions.',
      details: ['Frontend/Backend Stacks', 'Durable Databases', 'AI Orchestration Toolkits'],
    },
    {
      id: 'blog-insights',
      number: '12',
      title: 'Blog & Digital Insights',
      description: 'Industry thoughts, software engineering best practices, and actionable digital growth guidelines authored by our technical directors.',
      details: ['Tech Insights', 'Growth Manuals', 'Product Strategy Articles'],
    },
  ];

  return (
    <section className="bg-slate-50/50 py-16 md:py-24 border-t border-slate-100">
      <Container>
        {/* Labeled development header */}
        <div className="border border-dashed border-primary/30 rounded-2xl bg-primary/[0.02] p-6 sm:p-8 mb-16 text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 mb-4 font-mono">
            Development Mode
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-[var(--color-text)] mb-3">
            Pure Path Homepage Architecture
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed">
            The sections below outline the logical roadmap of our professional digital transformation website. Each placeholder is configured as a modular target to consume dynamic content from Django REST API endpoints in Phase 2.
          </p>
        </div>

        {/* Placeholders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {placeholdersData.map((placeholder) => (
            <PlaceholderCard
              key={placeholder.id}
              id={placeholder.id}
              number={placeholder.number}
              title={placeholder.title}
              description={placeholder.description}
              details={placeholder.details}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
