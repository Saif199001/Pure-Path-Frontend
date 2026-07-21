import {
  Layers,
  ShoppingBag,
  TrendingUp,
  Terminal,
  Smartphone,
  Code,
  Cloud,
  Cpu,
  HelpCircle,
  Wrench,
  Sparkles,
  Briefcase,
  Rocket,
  Store,
  Building,
  Factory,
  Building2,
  Users
} from 'lucide-react';

export interface ServiceItem {
  label: string;
  desc: string;
  href: string;
  icon: any;
}

export interface ServiceSection {
  title: string;
  items: ServiceItem[];
}

export interface SolutionItem {
  label: string;
  desc: string;
  href: string;
  icon: any;
}

export const servicesNavigation: ServiceSection[] = [
  {
    title: 'Creative & Brand',
    items: [
      {
        label: 'Content & Copywriting',
        desc: 'Content that communicates, engages and converts.',
        href: '/services/content-copywriting',
        icon: Layers
      },
      {
        label: 'Branding & Design',
        desc: 'Build a distinctive brand customers remember.',
        href: '/services/branding-design',
        icon: Sparkles
      }
    ]
  },
  {
    title: 'Commerce & Growth',
    items: [
      {
        label: 'E-Commerce Solutions',
        desc: 'Launch, manage and scale your online business.',
        href: '/services/ecommerce-solutions',
        icon: ShoppingBag
      },
      {
        label: 'Digital Marketing',
        desc: 'Reach the right audience and drive measurable growth.',
        href: '/services/digital-marketing',
        icon: TrendingUp
      }
    ]
  },
  {
    title: 'Technology',
    items: [
      {
        label: 'Website Development',
        desc: 'Fast, modern and conversion-focused web experiences.',
        href: '/services/website-development',
        icon: Terminal
      },
      {
        label: 'Mobile App Development',
        desc: 'Powerful mobile experiences built for your customers.',
        href: '/services/mobile-app-development',
        icon: Smartphone
      },
      {
        label: 'Custom Software Development',
        desc: 'Software solutions tailored to your business operations.',
        href: '/services/custom-software-development',
        icon: Code
      },
      {
        label: 'SaaS Development',
        desc: 'Scalable cloud products built for long-term growth.',
        href: '/services/saas-development',
        icon: Cloud
      }
    ]
  },
  {
    title: 'Intelligent Business',
    items: [
      {
        label: 'AI & Automation',
        desc: 'Automate workflows and build intelligent customer experiences.',
        href: '/services/ai-automation',
        icon: Cpu
      },
      {
        label: 'Cloud & DevOps',
        desc: 'Reliable infrastructure designed for performance and scale.',
        href: '/services/cloud-devops',
        icon: Cloud
      }
    ]
  },
  {
    title: 'Strategy & Support',
    items: [
      {
        label: 'Startup & Business Consulting',
        desc: 'Turn business ideas into actionable growth strategies.',
        href: '/services/startup-business-consulting',
        icon: HelpCircle
      },
      {
        label: 'Maintenance & Support',
        desc: 'Keep your digital products secure, optimized and reliable.',
        href: '/services/maintenance-support',
        icon: Wrench
      }
    ]
  }
];

export const solutionsNavigation: SolutionItem[] = [
  {
    label: 'For Startups',
    desc: 'From idea validation to MVP and market launch.',
    href: '/solutions/startups',
    icon: Rocket
  },
  {
    label: 'For D2C Brands',
    desc: 'Brand, sell and scale across digital channels.',
    href: '/solutions/d2c-brands',
    icon: Store
  },
  {
    label: 'For E-Commerce Sellers',
    desc: 'Launch and grow across leading marketplaces.',
    href: '/solutions/ecommerce-sellers',
    icon: ShoppingBag
  },
  {
    label: 'For Small Businesses',
    desc: 'Modern digital solutions designed to help SMEs grow.',
    href: '/solutions/small-businesses',
    icon: Building
  },
  {
    label: 'For Enterprises',
    desc: 'Scalable technology and automation for complex operations.',
    href: '/solutions/enterprises',
    icon: Building2
  },
  {
    label: 'For Manufacturers',
    desc: 'Digital tools for branding, sales and business operations.',
    href: '/solutions/manufacturers',
    icon: Factory
  }
];

export const companyNavigation = [
  { label: 'About Us', href: '/about' },
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Contact Us', href: '/contact' }
];
