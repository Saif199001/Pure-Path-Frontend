import { 
  Rocket, 
  Palette, 
  ShoppingBag, 
  TrendingUp, 
  Code2, 
  Bot 
} from 'lucide-react';
import React from 'react';

export interface SolutionGoal {
  id: string;
  number: string;
  title: string;
  statement: string;
  outcome: string;
  capabilities: string[];
  route: string;
  cta: string;
  icon: React.ComponentType<any>;
  accentClass: string; // for border/text subtle colors
  badgeBg: string; // background of icon container
  badgeText: string; // icon color
}

export const solutionsData: SolutionGoal[] = [
  {
    id: 'launch-my-business',
    number: '01',
    title: 'Launch My Business',
    statement: "Turn your idea into a business that's ready to enter the market.",
    outcome: 'From strategy and branding to your website and digital launch, build the foundations you need to start with confidence.',
    capabilities: [
      'Startup Strategy',
      'Brand Identity',
      'Website Development',
      'Go-to-Market Strategy'
    ],
    route: '/solutions/launch-my-business',
    cta: 'Explore Launch Solution',
    icon: Rocket,
    accentClass: 'border-orange-100 hover:border-orange-300 hover:bg-orange-50/5',
    badgeBg: 'bg-orange-50 text-orange-600',
    badgeText: 'text-orange-600'
  },
  {
    id: 'build-my-brand',
    number: '02',
    title: 'Build My Brand',
    statement: 'Create a brand customers recognize, understand and trust.',
    outcome: 'Build a consistent brand identity, message and visual presence across every customer touchpoint.',
    capabilities: [
      'Brand Strategy',
      'Logo & Identity',
      'Content & Copywriting',
      'Graphic & Packaging Design'
    ],
    route: '/solutions/build-my-brand',
    cta: 'Explore Branding Solution',
    icon: Palette,
    accentClass: 'border-violet-100 hover:border-violet-300 hover:bg-violet-50/5',
    badgeBg: 'bg-violet-50 text-violet-600',
    badgeText: 'text-violet-600'
  },
  {
    id: 'start-selling-online',
    number: '03',
    title: 'Start Selling Online',
    statement: 'Take your products online and build a scalable digital sales channel.',
    outcome: 'Launch your own online store, enter leading marketplaces and create a connected e-commerce ecosystem.',
    capabilities: [
      'E-Commerce Development',
      'Marketplace Setup',
      'Product Listings',
      'Catalogue Management'
    ],
    route: '/solutions/start-selling-online',
    cta: 'Explore E-Commerce Solution',
    icon: ShoppingBag,
    accentClass: 'border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50/5',
    badgeBg: 'bg-emerald-50 text-emerald-600',
    badgeText: 'text-emerald-600'
  },
  {
    id: 'generate-leads-sales',
    number: '04',
    title: 'Generate More Leads & Sales',
    statement: 'Reach the right audience and turn attention into measurable growth.',
    outcome: 'Build connected marketing campaigns that attract prospects, generate leads and improve customer acquisition.',
    capabilities: [
      'SEO & Google Ads',
      'Meta Performance Ads',
      'Social Media Marketing',
      'Lead Generation Pipelines'
    ],
    route: '/solutions/generate-leads-sales',
    cta: 'Explore Growth Solution',
    icon: TrendingUp,
    accentClass: 'border-blue-100 hover:border-blue-300 hover:bg-blue-50/5',
    badgeBg: 'bg-blue-50 text-blue-600',
    badgeText: 'text-blue-600'
  },
  {
    id: 'build-digital-product',
    number: '05',
    title: 'Build a Digital Product',
    statement: 'Turn your idea into reliable software built for real users and real business needs.',
    outcome: 'From MVPs and websites to mobile apps, SaaS platforms and enterprise software, build technology designed to scale.',
    capabilities: [
      'Web Development',
      'Mobile Applications',
      'Custom Software',
      'SaaS Development'
    ],
    route: '/solutions/build-digital-product',
    cta: 'Explore Technology Solution',
    icon: Code2,
    accentClass: 'border-cyan-100 hover:border-cyan-300 hover:bg-cyan-50/5',
    badgeBg: 'bg-cyan-50 text-cyan-600',
    badgeText: 'text-cyan-600'
  },
  {
    id: 'automate-my-business',
    number: '06',
    title: 'Automate My Business',
    statement: 'Reduce repetitive work and make your business operate smarter.',
    outcome: 'Connect AI, automation and workflows to improve customer support, sales and internal operations.',
    capabilities: [
      'AI Chatbots',
      'WhatsApp Automation',
      'CRM Automation',
      'Workflow Automation'
    ],
    route: '/solutions/automate-my-business',
    cta: 'Explore Automation Solution',
    icon: Bot,
    accentClass: 'border-purple-100 hover:border-purple-300 hover:bg-purple-50/5',
    badgeBg: 'bg-purple-50 text-purple-600',
    badgeText: 'text-purple-600'
  }
];
