export interface ProjectDetail {
  slug: string;
  clientName: string;
  projectTitle: string;
  industry: string;
  category: string; // matches filters: 'Branding' | 'E-Commerce' | 'Websites' | 'Software' | 'SaaS' | 'AI & Automation' | 'Marketing'
  services: string[];
  shortDesc: string;
  challenge: string;
  approach: string;
  solution: string;
  outcomes: string[];
  technologies: string[];
  colorTheme: string; // e.g. '#0866C6'
}

export const projectsData: ProjectDetail[] = [
  {
    slug: 'apex-logistics',
    clientName: 'Apex Logistics',
    projectTitle: 'Enterprise Fleet Optimization Portal',
    industry: 'Supply Chain & Transport',
    category: 'Software',
    services: ['Custom Software Development', 'Cloud & DevOps', 'AI & Automation'],
    shortDesc: 'We rebuilt their manual tracking processes into a unified scheduling, routing, and dispatching portal.',
    challenge: 'Apex Logistics was managing thousands of shipping dispatches daily using separate spreadsheets and SMS lines. This lack of centralized data resulted in high routing delays and delayed invoicing times.',
    approach: 'We designed a custom secure multi-tenant portal with real-time dispatch assignment queues, integrated maps routing API, and automated SMS statuses.',
    solution: 'A high-performance TypeScript dashboard that links drivers, fleet dispatches, and warehouse inventory systems under one database. Security roles are configured to prevent unauthorized data access.',
    outcomes: [
      'Eliminated 95% of spreadsheet data duplication hours.',
      'Reduced dispatcher coordination delay times.',
      'Completed invoice generation on driver delivery click.'
    ],
    technologies: ['TypeScript', 'React', 'NodeJS', 'TailwindCSS', 'PostgreSQL', 'Docker'],
    colorTheme: '#0866C6'
  },
  {
    slug: 'aura-cosmetics',
    clientName: 'Aura Cosmetics',
    projectTitle: 'Direct-to-Consumer E-Commerce Pipeline',
    industry: 'Beauty & Retail',
    category: 'E-Commerce',
    services: ['E-Commerce Solutions', 'Branding & Design', 'Digital Marketing'],
    shortDesc: 'Designed and built a fast custom storefront with frictionless multi-currency Stripe checkouts.',
    challenge: 'Aura Cosmetics wanted to move away from third-party marketplace commission fees. Their existing site suffered from cart loading delays and a fragmented visual identity.',
    approach: 'We formulated consistent branding guidelines paired with Space Grotesk headings, and coded a fast headless e-commerce frontend.',
    solution: 'A high-speed e-commerce storefront with integrated quick-add sliding carts, payment gateways, and automated email order reminders.',
    outcomes: [
      'Significantly improved page loading and navigation speeds.',
      'Increased average order values via bundled upsell drawers.',
      'Established independent direct-to-consumer sales channels.'
    ],
    technologies: ['React', 'Vite', 'Stripe API', 'TailwindCSS', 'Framer Motion'],
    colorTheme: '#EC4899'
  },
  {
    slug: 'lyra-saas',
    clientName: 'Lyra Systems',
    projectTitle: 'Next-Gen CRM for Real Estate Teams',
    industry: 'PropTech & SaaS',
    category: 'SaaS',
    services: ['SaaS Development', 'Custom Software Development', 'Website Development'],
    shortDesc: 'An intuitive multi-tenant SaaS portal with tiered Stripe billing and role permissions.',
    challenge: 'Lyra needed to build and launch an MVP product to validate a niche real estate lead management workflow before competitor entry.',
    approach: 'We scoped a clean, highly focused feature backlog and built a secure database model with clean developer APIs.',
    solution: 'A complete multi-tenant SaaS platform featuring real-time deal stages, visual pipeline filters, and automated subscription renewal logic.',
    outcomes: [
      'Launched MVP product ahead of schedule.',
      'Integrated stable automated monthly subscription billings.',
      'Achieved robust tenant isolation and database speed metrics.'
    ],
    technologies: ['React', 'NodeJS', 'Express', 'TailwindCSS', 'PostgreSQL', 'Stripe Billing'],
    colorTheme: '#8B5CF6'
  },
  {
    slug: 'solis-power',
    clientName: 'Solis Power',
    projectTitle: 'B2B Technical Branding & Portal Launch',
    industry: 'Renewable Energy',
    category: 'Branding',
    services: ['Branding & Design', 'Website Development', 'Content & Copywriting'],
    shortDesc: 'A complete corporate branding elevate combined with an optimized corporate specification hub.',
    challenge: 'Solis Power was bidding on major enterprise contracts, but their outdated corporate identity and slow website did not convey their industrial expertise.',
    approach: 'We refreshed their logos, curated deep charcoal and gold palettes, and developed a fast corporate hub showcasing specifications.',
    solution: 'An elegant, responsive corporate website featuring interactive solar capacity calculators and B2B lead inquiry pipelines.',
    outcomes: [
      'Elevated Solis brand positioning to look premium.',
      'Increased incoming B2B contractor consultation bookings.',
      'Unified brochure downloads and sales email routing.'
    ],
    technologies: ['React', 'TailwindCSS', 'Framer Motion', 'Lucide Icons'],
    colorTheme: '#F59E0B'
  },
  {
    slug: 'nova-billing',
    clientName: 'Nova FinTech',
    projectTitle: 'AI Lead Capture Assistant Integration',
    industry: 'Financial Technology',
    category: 'AI & Automation',
    services: ['AI & Automation', 'Custom Software Development', 'Maintenance & Support'],
    shortDesc: 'Deploying a custom-trained support assistant that answers FAQs and routes inquiries to CRMs.',
    challenge: 'Nova was losing qualified leads outside business hours due to a lack of immediate support response channels.',
    approach: 'We developed a floating AI chatbot interface with secure API proxies to handle data securely without exposure.',
    solution: 'An intelligent AI chatbot trained on Nova product specifications, with an integrated lead capture form that triggers email syncs.',
    outcomes: [
      'Captured active lead inquiries 24/7 without fail.',
      'Reduced support ticket queue loads during high times.',
      'Automated sales CRM data logging and assignment.'
    ],
    technologies: ['TypeScript', 'Gemini AI API', 'NodeJS', 'TailwindCSS', 'Express'],
    colorTheme: '#10B981'
  },
  {
    slug: 'vanguard-legal',
    clientName: 'Vanguard Legal',
    projectTitle: 'Local Search Lead Acquisition Engine',
    industry: 'Legal Services',
    category: 'Marketing',
    services: ['Digital Marketing', 'Content & Copywriting', 'Website Development'],
    shortDesc: 'A high-converting search campaign combined with fast territory landing pages.',
    challenge: 'Vanguard relied on expensive, broad directories that generated irrelevant inquiries. They needed a predictable local lead channel.',
    approach: 'We targeted exact transactional search terms and created fast single-service pages centered on clear consultation hooks.',
    solution: 'Bespoke Google search campaign structures paired with clean landing pages styled to load instantly and convert.',
    outcomes: [
      'Established a consistent weekly flow of local inquiries.',
      'Reduced average lead acquisition budgets.',
      'Ranked primary pages on high-intent target keywords.'
    ],
    technologies: ['Google Ads', 'SEO Frameworks', 'TailwindCSS', 'React'],
    colorTheme: '#0F172A'
  }
];
export const caseStudies = projectsData;
