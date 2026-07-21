import { 
  Palette, 
  ShoppingBag, 
  Code2, 
  Bot, 
  Compass, 
  PenTool, 
  TrendingUp, 
  Workflow, 
  Settings,
  HelpCircle,
  FileText,
  Layers,
  Sparkles,
  Zap,
  Network
} from 'lucide-react';
import React from 'react';

export interface ServiceGroup {
  title: string;
  description: string;
  items: string[];
}

export interface CapabilityCategory {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: React.ComponentType<any>;
  route: string;
  outcome: string;
  accentClass: string; // Tailwind class prefix for colors (violet, emerald, blue, purple, cyan etc.)
  glowColor: string; // for radial background or shadows
  groups: ServiceGroup[];
}

export const servicesData: CapabilityCategory[] = [
  {
    id: 'creative-brand',
    name: 'Creative & Brand',
    shortName: 'Creative',
    description: 'Turn ideas into a clear, memorable brand with content and design that communicates your value and builds trust with your audience.',
    icon: Palette,
    route: '/services/creative-brand',
    outcome: 'Build a brand customers understand, trust and remember.',
    accentClass: 'violet',
    glowColor: 'rgba(139, 92, 246, 0.04)',
    groups: [
      {
        title: 'Content & Copywriting',
        description: 'Content that communicates clearly, strengthens your brand and helps customers understand why they should choose you.',
        items: [
          'Website Content',
          'SEO Content',
          'Product Descriptions',
          'Business Presentations'
        ]
      },
      {
        title: 'Branding & Design',
        description: 'Build a distinctive and consistent visual identity across every customer touchpoint.',
        items: [
          'Brand Identity',
          'Graphic Design',
          'Packaging Design',
          'Catalogue & Presentation Design'
        ]
      }
    ]
  },
  {
    id: 'commerce-growth',
    name: 'Commerce & Growth',
    shortName: 'Commerce',
    description: 'Turn digital channels into growth engines with connected e-commerce, marketplace and marketing strategies.',
    icon: ShoppingBag,
    route: '/services/commerce-growth',
    outcome: 'Turn digital channels into measurable business growth.',
    accentClass: 'emerald',
    glowColor: 'rgba(16, 185, 129, 0.04)',
    groups: [
      {
        title: 'E-Commerce Solutions',
        description: 'Sell directly to consumers or other businesses with a high-performing online store or marketplace.',
        items: [
          'Online Store Development',
          'Marketplace Seller Services',
          'Product Listing & Catalogues',
          'Marketplace Growth'
        ]
      },
      {
        title: 'Digital Marketing',
        description: 'Drive targeted traffic, capture leads, and convert visitors into loyal customers.',
        items: [
          'Search Engine Optimization',
          'Google & Meta Ads',
          'Social Media Marketing',
          'Performance Marketing'
        ]
      }
    ]
  },
  {
    id: 'technology',
    name: 'Technology',
    shortName: 'Technology',
    description: 'Build reliable, scalable digital products that support your customers, teams and business operations.',
    icon: Code2,
    route: '/services/technology',
    outcome: 'Build digital products designed around your business goals.',
    accentClass: 'blue',
    glowColor: 'rgba(8, 102, 198, 0.04)',
    groups: [
      {
        title: 'Website & App Development',
        description: 'Custom mobile apps and corporate or startup web platforms tailored for direct response.',
        items: [
          'Corporate & Startup Websites',
          'Android & iOS Apps',
          'Flutter & React Native',
          'Website Maintenance'
        ]
      },
      {
        title: 'Software & SaaS Development',
        description: 'Bespoke enterprise software and high-scale subscription applications that scale with you.',
        items: [
          'ERP & CRM Solutions',
          'MVP & SaaS Platforms',
          'Admin & Customer Dashboards',
          'API Integrations'
        ]
      }
    ]
  },
  {
    id: 'intelligent-business',
    name: 'Intelligent Business',
    shortName: 'Intelligent',
    description: 'Use AI, automation and cloud technology to reduce repetitive work, improve customer experiences and operate more efficiently.',
    icon: Bot,
    route: '/services/intelligent-business',
    outcome: 'Automate repetitive work and create smarter customer experiences.',
    accentClass: 'indigo',
    glowColor: 'rgba(99, 102, 241, 0.04)',
    groups: [
      {
        title: 'AI & Automation',
        description: 'Deploy smart conversational interfaces and streamline repetitive internal workflows.',
        items: [
          'AI Chatbots & Voice Assistants',
          'OpenAI & Gemini Integrations',
          'WhatsApp & Sales Automation',
          'Workflow Automations'
        ]
      },
      {
        title: 'Cloud & DevOps',
        description: 'Secure, high-availability host management and modern continuous delivery setups.',
        items: [
          'AWS, Azure & Google Cloud',
          'Docker & CI/CD Pipelines',
          'Server & Cloud Security',
          'Performance Monitoring'
        ]
      }
    ]
  },
  {
    id: 'strategy-support',
    name: 'Strategy & Support',
    shortName: 'Strategy',
    description: 'Make better technology decisions, plan your next stage of growth and keep your digital products secure and reliable.',
    icon: Compass,
    route: '/services/strategy-support',
    outcome: 'Make confident decisions and keep your digital ecosystem moving forward.',
    accentClass: 'cyan',
    glowColor: 'rgba(6, 182, 212, 0.04)',
    groups: [
      {
        title: 'Startup & Business Consulting',
        description: 'Validate ideas, architect high-performing solutions, and map out your strategic business roadmap.',
        items: [
          'Startup Idea Validation',
          'Product & Go-to-Market Strategy',
          'Technology Consulting',
          'MVP & Architecture Planning'
        ]
      },
      {
        title: 'Maintenance & Support',
        description: 'Keep your website, mobile apps, and custom software updated, optimized, and secure.',
        items: [
          'AMC & Regular Backups',
          'Security Updates & Bug Fixes',
          'Performance Optimization',
          'Dedicated Technical Support'
        ]
      }
    ]
  }
];
