export interface SolutionPathStep {
  title: string;
  desc: string;
}

export interface SolutionCapabilityLink {
  title: string;
  desc: string;
  href: string;
}

export interface SolutionDeliverable {
  title: string;
  desc: string;
}

export interface SolutionDetail {
  slug: string;
  title: string;
  headline: string;
  intro: string;
  ctaText: string;
  whoThisIsFor: string[];
  pathHeading: string;
  pathSteps: SolutionPathStep[];
  capabilitiesHeading: string;
  capabilities: SolutionCapabilityLink[];
  deliverablesHeading: string;
  deliverables: SolutionDeliverable[];
  whyPurePath: string;
  finalCtaHeading: string;
  finalCtaSub: string;
}

export const solutionsDetailData: Record<string, SolutionDetail> = {
  // Goal-based solutions
  'launch-my-business': {
    slug: 'launch-my-business',
    title: 'Launch My Business',
    headline: "Turn Your Idea Into a Business That's Ready for the Market.",
    intro: 'We combine startup strategy, professional branding, landing pages, and a tailored go-to-market execution plan to launch your business with maximum momentum.',
    ctaText: 'Launch Your Business',
    whoThisIsFor: [
      'Early-stage founders with a clear product or service concept.',
      'Offline business owners transitioning to the digital space.',
      'SMEs launching a brand-new sub-brand or digital offering.'
    ],
    pathHeading: 'Your Path to Market',
    pathSteps: [
      { title: 'Brand & Value Strategy', desc: 'Isolating your competitive advantage and target demographic positioning.' },
      { title: 'Identity & Guidelines', desc: 'Crafting distinctive logos, custom color palettes, and copywriting guidelines.' },
      { title: 'Optimized Web Launch', desc: 'Developing a fast, premium landing page designed to capture initial consumer interest.' },
      { title: 'Go-To-Market Push', desc: 'Deploying initial keyword campaigns and search setups to attract your first clients.' }
    ],
    capabilitiesHeading: 'Services Combined in This Solution',
    capabilities: [
      { title: 'Startup Strategy', desc: 'Scoping, risk audits, and product validation roadmaps.', href: '/services/startup-business-consulting' },
      { title: 'Branding & Design', desc: 'Visual logos, styles, templates, and corporate identities.', href: '/services/branding-design' },
      { title: 'Website Development', desc: 'Modern responsive portals and conversion-optimized landing hubs.', href: '/services/website-development' },
      { title: 'Content & Copywriting', desc: 'Persuasive sales copywriting and descriptive messaging.', href: '/services/content-copywriting' }
    ],
    deliverablesHeading: 'What You Get',
    deliverables: [
      { title: 'Visual Identity System', desc: 'Scalable vector logos, premium typeface pairings, and brand asset templates.' },
      { title: 'Corporate Website Hub', desc: 'A fully responsive website with clean structures and an integrated contact form.' },
      { title: 'Launch Ad Campaigns', desc: 'Optimized search marketing ads ready to run on social and Google networks.' }
    ],
    whyPurePath: 'Instead of dealing with three separate vendors for strategy, design, and coding, Pure Path acts as a single connected partner, keeping your brand story and code completely synchronized.',
    finalCtaHeading: 'Ready to Launch Your Next Chapter?',
    finalCtaSub: 'Tell us where you are today. We will help you outline the exact roadmap to a successful market launch.'
  },
  'build-my-brand': {
    slug: 'build-my-brand',
    title: 'Build My Brand',
    headline: 'Create a Brand Customers Instantly Recognize and Trust.',
    intro: 'Establish a premium visual style and emotional resonance across every customer touchpoint, from logo designs to persuasive content.',
    ctaText: 'Build Your Brand',
    whoThisIsFor: [
      'Businesses wanting to elevate their market positioning to command premium prices.',
      'Companies with fragmented visual assets across different websites and platforms.',
      'Founders wanting to establish professional authority in a crowded industry.'
    ],
    pathHeading: 'The Branding Journey',
    pathSteps: [
      { title: 'Message Discovery', desc: 'Defining your core brand pillars, mission statement, and target audience tone.' },
      { title: 'Visual Identity Design', desc: 'Developing beautiful logos, custom icons, typography rules, and design guidelines.' },
      { title: 'Asset Creation', desc: 'Crafting premium presentation templates, physical collateral systems, and social grids.' },
      { title: 'Touchpoint Rollout', desc: 'Aligning your website layout, email newsletters, and brochures with your new guidelines.' }
    ],
    capabilitiesHeading: 'Services Combined in This Solution',
    capabilities: [
      { title: 'Branding & Design', desc: 'Bespoke corporate identities and comprehensive layout guidelines.', href: '/services/branding-design' },
      { title: 'Content & Copywriting', desc: 'Engaging, professional copy that tells your unique business narrative.', href: '/services/content-copywriting' },
      { title: 'Digital Marketing', desc: 'Establishing social and search campaigns to introduce your updated brand.', href: '/services/digital-marketing' }
    ],
    deliverablesHeading: 'What You Get',
    deliverables: [
      { title: 'Complete Brand Book', desc: 'A comprehensive document detailing logo placements, margins, typography sizes, and color palettes.' },
      { title: 'Premium Digital Templates', desc: 'Reusable slide decks, email newsletter formats, and editable social post frames.' },
      { title: 'Brand Narrative Library', desc: 'Written copywriting templates, company biographies, slogans, and tagline definitions.' }
    ],
    whyPurePath: 'We combine meticulous artistic design with analytical conversion copywriting. This ensures your brand is not only visually beautiful, but structured to drive real business leads.',
    finalCtaHeading: "Let's Elevate Your Brand Authority",
    finalCtaSub: 'Reach out to discuss your company values. We will help you translate them into a premium digital brand presence.'
  },
  'start-selling-online': {
    slug: 'start-selling-online',
    title: 'Start Selling Online',
    headline: 'Take Your Store Digital with a Frictionless E-Commerce Ecosystem.',
    intro: 'Establish a beautiful online store, sync products across leading marketplaces, and automate inventory tracking for scalable retail growth.',
    ctaText: 'Launch Online Store',
    whoThisIsFor: [
      'Traditional brick-and-mortar retailers wanting to unlock global sales channels.',
      'SMEs with slow, manual checkout systems wanting a frictionless buy pipeline.',
      'D2C brands seeking direct customer relationships on their own storefront.'
    ],
    pathHeading: 'The Commerce Blueprint',
    pathSteps: [
      { title: 'Platform Selection', desc: 'Choosing the ideal backend structure matched with transaction volumes and custom checkout rules.' },
      { title: 'UI/UX Purchasing Flows', desc: 'Designing product card layouts, quick filters, checkout carts, and payment states.' },
      { title: 'Gateway & Shipping Sync', desc: 'Integrating payment channels like Stripe with real-time postage calculators.' },
      { title: 'Inventory Pipeline Integration', desc: 'Connecting digital catalogs with warehousing software to keep stock levels updated.' }
    ],
    capabilitiesHeading: 'Services Combined in This Solution',
    capabilities: [
      { title: 'E-Commerce Solutions', desc: 'Custom storefront building, marketplace connection, and payment integrations.', href: '/services/ecommerce-solutions' },
      { title: 'Website Development', desc: 'High-speed frontend code to prevent cart loading lags.', href: '/services/website-development' },
      { title: 'Digital Marketing', desc: 'Direct-response Google and social campaigns targeting active buyers.', href: '/services/digital-marketing' }
    ],
    deliverablesHeading: 'What You Get',
    deliverables: [
      { title: 'Optimized Storefront Code', desc: 'An exceptionally fast e-commerce storefront styled with smooth mobile checkouts.' },
      { title: 'Integrated Payment Pipeline', desc: 'Multi-currency gateway setups, automatic tax calculations, and secure checkout frameworks.' },
      { title: 'Product Inventory Dashboard', desc: 'An easy-to-use backend portal to add products, adjust pricing, and track active orders.' }
    ],
    whyPurePath: 'We specialize in building lightweight checkout paths. Removing technical friction from your store increases active purchases and reduces lost carts.',
    finalCtaHeading: 'Ready to Expand Your Retail Channels?',
    finalCtaSub: 'Tell us about your product range. We will design an e-commerce ecosystem built to scale your monthly sales.'
  },
  'generate-leads-sales': {
    slug: 'generate-leads-sales',
    title: 'Generate More Leads & Sales',
    headline: 'Build a Predictable Engine for Business Inquiries.',
    intro: 'We run optimized search engine campaigns, social advertisements, and high-converting landing pages built to turn traffic into qualified client calls.',
    ctaText: 'Build Sales Pipeline',
    whoThisIsFor: [
      'B2B firms and service providers seeking predictable monthly inbound client calls.',
      'SMEs wanting to reduce reliance on word-of-mouth recommendations.',
      'Founders who need to scale sales numbers quickly and efficiently.'
    ],
    pathHeading: 'The Growth System',
    pathSteps: [
      { title: 'Audience & Keyword Mapping', desc: 'Identifying the exact search terms prospective buyers use when seeking your services.' },
      { title: 'Landing Hub Development', desc: 'Building single-purpose conversion pages centered on persuasive client solutions.' },
      { title: 'Omnichannel Campaign Launch', desc: 'Deploying high-intent search ads combined with creative display ads.' },
      { title: 'Funnel Optimization Run', desc: 'Reviewing session behaviors to improve contact form clicks and reduce acquisition costs.' }
    ],
    capabilitiesHeading: 'Services Combined in This Solution',
    capabilities: [
      { title: 'Digital Marketing', desc: 'Google Search ads, Meta display ads, and custom retargeting.', href: '/services/digital-marketing' },
      { title: 'Content & Copywriting', desc: 'Persuasive value hooks, headlines, and conversion copy.', href: '/services/content-copywriting' },
      { title: 'AI & Automation', desc: 'Automating sales CRM data routing and instant WhatsApp follow-up alerts.', href: '/services/ai-automation' }
    ],
    deliverablesHeading: 'What You Get',
    deliverables: [
      { title: 'Conversion Landing Pages', desc: 'Bespoke landing page interfaces engineered to guide visitors toward booking a call.' },
      { title: 'Fully Configured Ad Accounts', desc: 'Ad campaigns, keyword groupings, target demographics, and tracking parameters.' },
      { title: 'Leads Routing Dashboard', desc: 'Instant email and WhatsApp notifications syncing new inquiries with your internal spreadsheet or CRM.' }
    ],
    whyPurePath: 'We do not focus on vanity metrics like "impressions" or "likes." We build, track, and optimize systems focused on the only metric that matters: qualified sales inquiries.',
    finalCtaHeading: 'Let us Scale Your Business Inquiries',
    finalCtaSub: 'Reach out today to discuss your target client profiles. We will outline an acquisition funnel built to convert.'
  },
  // Alias route in STEP 5 solutionsData
  'generate-leads': {
    slug: 'generate-leads',
    title: 'Generate More Leads & Sales',
    headline: 'Build a Predictable Engine for Business Inquiries.',
    intro: 'We run optimized search engine campaigns, social advertisements, and high-converting landing pages built to turn traffic into qualified client calls.',
    ctaText: 'Build Sales Pipeline',
    whoThisIsFor: [
      'B2B firms and service providers seeking predictable monthly inbound client calls.',
      'SMEs wanting to reduce reliance on word-of-mouth recommendations.',
      'Founders who need to scale sales numbers quickly and efficiently.'
    ],
    pathHeading: 'The Growth System',
    pathSteps: [
      { title: 'Audience & Keyword Mapping', desc: 'Identifying the exact search terms prospective buyers use when seeking your services.' },
      { title: 'Landing Hub Development', desc: 'Building single-purpose conversion pages centered on persuasive client solutions.' },
      { title: 'Omnichannel Campaign Launch', desc: 'Deploying high-intent search ads combined with creative display ads.' },
      { title: 'Funnel Optimization Run', desc: 'Reviewing session behaviors to improve contact form clicks and reduce acquisition costs.' }
    ],
    capabilitiesHeading: 'Services Combined in This Solution',
    capabilities: [
      { title: 'Digital Marketing', desc: 'Google Search ads, Meta display ads, and custom retargeting.', href: '/services/digital-marketing' },
      { title: 'Content & Copywriting', desc: 'Persuasive value hooks, headlines, and conversion copy.', href: '/services/content-copywriting' },
      { title: 'AI & Automation', desc: 'Automating sales CRM data routing and instant WhatsApp follow-up alerts.', href: '/services/ai-automation' }
    ],
    deliverablesHeading: 'What You Get',
    deliverables: [
      { title: 'Conversion Landing Pages', desc: 'Bespoke landing page interfaces engineered to guide visitors toward booking a call.' },
      { title: 'Fully Configured Ad Accounts', desc: 'Ad campaigns, keyword groupings, target demographics, and tracking parameters.' },
      { title: 'Leads Routing Dashboard', desc: 'Instant email and WhatsApp notifications syncing new inquiries with your internal spreadsheet or CRM.' }
    ],
    whyPurePath: 'We do not focus on vanity metrics like "impressions" or "likes." We build, track, and optimize systems focused on the only metric that matters: qualified sales inquiries.',
    finalCtaHeading: 'Let us Scale Your Business Inquiries',
    finalCtaSub: 'Reach out today to discuss your target client profiles. We will outline an acquisition funnel built to convert.'
  },
  'build-digital-product': {
    slug: 'build-digital-product',
    title: 'Build a Digital Product',
    headline: 'Turn Your Idea into Scalable, Production-Ready Software.',
    intro: 'From initial wireframes and Minimum Viable Products (MVPs) to SaaS architectures and native apps, we develop reliable software built for real users.',
    ctaText: 'Develop Digital Product',
    whoThisIsFor: [
      'Tech startups wishing to validate concepts with a polished, highly functional MVP.',
      'Established businesses scaling operations with a dedicated customer portal.',
      'Product founders looking to migrate a basic prototype into a secure, production-grade cloud system.'
    ],
    pathHeading: 'The Product Lifecycle',
    pathSteps: [
      { title: 'Wireframes & UI Designs', desc: 'Drafting pixel-perfect user flows, responsive screens, and interactive components.' },
      { title: 'Database & Security Architecture', desc: 'Designing secure, relational database schemas with clear user-role permissions.' },
      { title: 'Full-Stack Software Engineering', desc: 'Writing clean, typed script files, robust APIs, and responsive frontend dashboards.' },
      { title: 'Beta Testing & Cloud Deploy', desc: 'Conducting thorough edge-case testing, packaging server files, and deploying to cloud networks.' }
    ],
    capabilitiesHeading: 'Services Combined in This Solution',
    capabilities: [
      { title: 'Custom Software Development', desc: 'Engineered web applications built specifically for your custom operational needs.', href: '/services/custom-software-development' },
      { title: 'SaaS Development', desc: 'Scalable cloud database multi-tenancy and subscription gateway controls.', href: '/services/saas-development' },
      { title: 'Website Development', desc: 'Premium responsive frontends and administrative dashboard panels.', href: '/services/website-development' },
      { title: 'Cloud & DevOps', desc: 'Automated CI/CD pipelines and auto-scaling configurations.', href: '/services/cloud-devops' }
    ],
    deliverablesHeading: 'What You Get',
    deliverables: [
      { title: 'Production-Grade Codebase', desc: 'A clean, well-commented modular codebase built using modern TypeScript frameworks.' },
      { title: 'Interactive Admin Panels', desc: 'A secure backend administration interface to track metrics, manage users, and view platform logs.' },
      { title: 'Scalable Cloud Setup', desc: 'Fully configured, auto-scaling server networks deployed on secure cloud environments.' }
    ],
    whyPurePath: 'Our engineering standard mandates zero shortcut policies. We build type-safe, modular, and extensively documented codebases that allow your product to scale seamlessly as your user count grows.',
    finalCtaHeading: 'Have an Idea or Challenge to Solve?',
    finalCtaSub: 'Reach out today to discuss your software ideas. We will outline a focused development backlog designed to launch.'
  },
  'automate-my-business': {
    slug: 'automate-my-business',
    title: 'Automate My Business',
    headline: 'Eliminate Repetitive Tasks with Custom Intelligent Systems.',
    intro: 'We integrate AI chatbots, whatsapp notifications, automatic invoice pathways, and workflow connections to make your company operations run 24/7 without friction.',
    ctaText: 'Automate Operations',
    whoThisIsFor: [
      'SMEs losing sales due to delayed response times to incoming inquiries outside business hours.',
      'Companies experiencing operational lag caused by manual data double-entry across systems.',
      'Operations teams wanting to automate routine tasks like reporting, invoicing, and support.'
    ],
    pathHeading: 'The Automation Path',
    pathSteps: [
      { title: 'Workflow Audit', desc: 'Documenting existing manual data paths, bottlenecks, and repetitive employee routines.' },
      { title: 'Logic & API Mapping', desc: 'Selecting appropriate AI assistants, mapping custom API routes, and planning webhooks.' },
      { title: 'Integration & Logic Build', desc: 'Writing connection code, training custom AI models, and configuring data sync pathways.' },
      { title: 'Testing & Operational Hand-off', desc: 'Simulating complex transactions and user conversations to verify edge cases.' }
    ],
    capabilitiesHeading: 'Services Combined in This Solution',
    capabilities: [
      { title: 'AI & Automation', desc: 'Automating internal business tasks, webhooks, and AI assistants.', href: '/services/ai-automation' },
      { title: 'Custom Software Development', desc: 'Custom portals and database triggers to automate operations.', href: '/services/custom-software-development' },
      { title: 'Maintenance & Support', desc: 'Keeping automation pipelines, API keys, and connections active and secure.', href: '/services/maintenance-support' }
    ],
    deliverablesHeading: 'What You Get',
    deliverables: [
      { title: 'Intelligent AI Assistants', desc: 'Custom-trained chatbot agents embedded on your site to capture leads and answer support.' },
      { title: 'Connected System Workflows', desc: 'Automated data connections syncing invoicing platforms, client portals, and CRM leads.' },
      { title: 'WhatsApp Business Automations', desc: 'Automatic order status reports, booking schedules, and support pipelines sent directly to WhatsApp.' }
    ],
    whyPurePath: 'We build native, stable API connections. Relying on fragile third-party connectors can result in system failures; we build custom robust pipelines designed for long-term stability.',
    finalCtaHeading: 'Ready to Reclaim Productive Hours?',
    finalCtaSub: 'Reach out to outline your manual workflows. We will design a custom automation setup to optimize your business operations.'
  },

  // Navbar Industry / Lifecycle Solutions
  'startups': {
    slug: 'startups',
    title: 'Solutions for Startups',
    headline: 'From Idea Validation to MVP and Market Launch.',
    intro: 'We help early-stage founders build scalable technical foundations, launch high-utility MVPs quickly, and execute aggressive digital marketing campaigns.',
    ctaText: 'Launch Your Startup',
    whoThisIsFor: [
      'Tech founders seeking a robust, scalable MVP code architecture.',
      'Bootstrapped startups looking to maximize their development budgets.',
      'Founders seeking a strategic technology partner to build their product.'
    ],
    pathHeading: 'The Startup Roadmap',
    pathSteps: [
      { title: 'MVP Backlog Definition', desc: 'Scoping and trimming features to isolate the absolute core value proposition.' },
      { title: 'Product UI Designing', desc: 'Creating highly intuitive, elegant interfaces focused on simple user navigation.' },
      { title: 'Agile MVP Development', desc: 'Writing stable, modular code, integrating secure billing, and launching to cloud networks.' },
      { title: 'Market Acquisition', desc: 'Deploying high-intent search ads to capture initial users and gather product feedback.' }
    ],
    capabilitiesHeading: 'Included Startup Services',
    capabilities: [
      { title: 'Startup & Business Consulting', desc: 'Operational planning, MVP backlogs, and risk scoping.', href: '/services/startup-business-consulting' },
      { title: 'SaaS Development', desc: 'Cloud multi-tenancy structures and tiered subscription systems.', href: '/services/saas-development' },
      { title: 'Branding & Design', desc: 'Visual brand books, logos, and digital asset templates.', href: '/services/branding-design' }
    ],
    deliverablesHeading: 'Startup Deliverables',
    deliverables: [
      { title: 'Type-Safe MVP Codebase', desc: 'A clean, well-documented, scalable codebase built using modern TypeScript frameworks.' },
      { title: 'Launch Landing Hub', desc: 'A fast corporate web portal designed to capture sign-ups and validate your value story.' },
      { title: 'Strategic Product Roadmap', desc: 'A transparent phase-by-phase development backlog ready for future scale stages.' }
    ],
    whyPurePath: 'We act as an extension of your startup. We focus on building stable, clean codebases that prevent technical debt, allowing you to scale without needing expensive rewrites.',
    finalCtaHeading: 'Let us Build Your Startup MVP',
    finalCtaSub: 'Reach out today to share your product concepts. We will help you scope a lean, high-utility MVP built to launch.'
  },
  'd2c-brands': {
    slug: 'd2c-brands',
    title: 'Solutions for D2C Brands',
    headline: 'Establish a Distinctive Brand Voice, Sell Directly, and Scale.',
    intro: 'We build direct customer connections for premium consumer brands by merging artistic brand design, fast online stores, and customer retention systems.',
    ctaText: 'Build Direct Brand',
    whoThisIsFor: [
      'Premium consumer brands wanting to build direct relationships with their buyers.',
      'SMEs looking to transition away from pure marketplace reliance to independent storefronts.',
      'Brands wishing to establish an eye-safe, highly professional visual style.'
    ],
    pathHeading: 'The Direct Growth Path',
    pathSteps: [
      { title: 'Brand Story Matrix', desc: 'Formulating your brand voice, color weight, typography, and messaging angles.' },
      { title: 'Storefront Optimization', desc: 'Developing an exceptionally fast custom e-commerce store with optimized checkouts.' },
      { title: 'Growth Funnels Launch', desc: 'Deploying high-impact meta display ads combined with custom email loops.' },
      { title: 'Retention Automation', desc: 'Setting up automated follow-ups, loyalty rewards, and customer feedback triggers.' }
    ],
    capabilitiesHeading: 'Combined D2C Services',
    capabilities: [
      { title: 'Branding & Design', desc: 'Bespoke corporate visual assets and complete layout standards.', href: '/services/branding-design' },
      { title: 'E-Commerce Solutions', desc: 'Custom storefront development and multi-channel synchronization.', href: '/services/ecommerce-solutions' },
      { title: 'Content & Copywriting', desc: 'Persuasive product copy and engaging brand storytelling assets.', href: '/services/content-copywriting' }
    ],
    deliverablesHeading: 'What We Deliver',
    deliverables: [
      { title: 'Bespoke Brand Book', desc: 'Logo usage guides, brand colors, typographic definitions, and packaging styles.' },
      { title: 'Fast Custom Storefront', desc: 'An exceptionally fast e-commerce website with responsive, friction-free checkout flows.' },
      { title: 'Retention Email Flows', desc: 'Automated email campaigns, shopping cart reminders, and post-purchase follow-ups.' }
    ],
    whyPurePath: 'We merge artistic creativity with performance data, ensuring your D2C brand looks incredibly premium while converting web traffic into loyal, repeat customers.',
    finalCtaHeading: "Let's Elevate Your Direct Brand",
    finalCtaSub: 'Get in touch to share your product line. We will design an end-to-end direct-to-consumer ecosystem.'
  },
  'ecommerce-sellers': {
    slug: 'ecommerce-sellers',
    title: 'Solutions for E-Commerce Sellers',
    headline: 'Scale Your Sales Across Leading Global Marketplaces.',
    intro: 'Sync your catalog across multiple channels, automate inventory updates, and deploy performance marketing to capture high-intent buyers.',
    ctaText: 'Expand Market Reach',
    whoThisIsFor: [
      'Sellers looking to expand beyond a single storefront into global marketplaces.',
      'Retailers wanting to automate inventory levels across separate selling channels.',
      'E-commerce operations wasting hours manually duplicating product listings.'
    ],
    pathHeading: 'The Multi-Channel Path',
    pathSteps: [
      { title: 'Catalog Structuring', desc: 'Optimizing product titles, descriptions, metadata, and listing structures.' },
      { title: 'Channel Integration', desc: 'Connecting your storefront with leading marketplace seller panels.' },
      { title: 'Inventory Syncing', desc: 'Configuring secure webhooks to keep stock levels synchronized in real-time.' },
      { title: 'Paid Ad Amplification', desc: 'Running high-intent Google Shopping ads targeting active transactional searches.' }
    ],
    capabilitiesHeading: 'Sellers Combined Services',
    capabilities: [
      { title: 'E-Commerce Solutions', desc: 'Multi-channel integration, payment frameworks, and inventory automation.', href: '/services/ecommerce-solutions' },
      { title: 'Digital Marketing', desc: 'Google Shopping ad configurations and performance retargeting.', href: '/services/digital-marketing' },
      { title: 'Content & Copywriting', desc: 'Optimized product listing content designed to rank and convert.', href: '/services/content-copywriting' }
    ],
    deliverablesHeading: 'Seller Deliverables',
    deliverables: [
      { title: 'Unified Catalog System', desc: 'A central inventory dashboard syncing product listing data across channels.' },
      { title: 'Optimized Shopping Campaigns', desc: 'Configured Google Ads campaigns designed to showcase products to active buyers.' },
      { title: 'Automated Shipping Pipeline', desc: 'Connecting orders to fulfillment software to automatically print labels and update tracking.' }
    ],
    whyPurePath: 'We build bulletproof, automated e-commerce pipelines that minimize manual copy-pasting, allowing you to manage thousands of orders with absolute precision.',
    finalCtaHeading: 'Ready to Automate Your Retail Channels?',
    finalCtaSub: 'Reach out to outline your product catalog. We will design a scalable multi-channel sales ecosystem.'
  },
  'small-businesses': {
    slug: 'small-businesses',
    title: 'Solutions for Small Businesses',
    headline: 'Modern Digital Solutions Designed to Help Local Firms Grow.',
    intro: 'We construct professional corporate websites, launch local search visibility campaigns, and automate routine operational inquiries.',
    ctaText: 'Scale Your Business',
    whoThisIsFor: [
      'Established small businesses looking to upgrade a generic template website.',
      'Service providers wanting a steady flow of monthly inbound lead calls.',
      'Local businesses wanting to automate inquiries, bookings, and customer FAQs.'
    ],
    pathHeading: 'The Local Growth Path',
    pathSteps: [
      { title: 'Sitemap & Local Audit', desc: 'Identifying local search search terms and refining your primary content structure.' },
      { title: 'Professional Site Launch', desc: 'Developing a fast corporate website highlighting key services, reviews, and booking triggers.' },
      { title: 'Inquiry Automation', desc: 'Integrating a custom AI assistant on your site to answer FAQs and capture leads 24/7.' },
      { title: 'Search Engine Push', desc: 'Optimizing your local search profile to rank higher in your service territory.' }
    ],
    capabilitiesHeading: 'SME Services Included',
    capabilities: [
      { title: 'Website Development', desc: 'Fast responsive corporate hubs designed to convert local traffic.', href: '/services/website-development' },
      { title: 'Digital Marketing', desc: 'Local search engine optimization and targeted high-intent keywords.', href: '/services/digital-marketing' },
      { title: 'AI & Automation', desc: 'Automating leads alerts and instant WhatsApp follow-up triggers.', href: '/services/ai-automation' }
    ],
    deliverablesHeading: 'What We Deliver',
    deliverables: [
      { title: 'Premium Corporate Site', desc: 'A highly responsive, custom-coded corporate website with integrated contact setups.' },
      { title: 'AI Support Assistant', desc: 'An automated chatbot trained to answer customer queries and route inquiries to your email.' },
      { title: 'Local Search Playbook', desc: 'A step-by-step local optimization strategy to increase calls in your active locations.' }
    ],
    whyPurePath: 'We do not sell cookie-cutter templates. We build custom-coded, exceptionally fast web experiences that elevate your small business, making you stand out from local competitors.',
    finalCtaHeading: "Let's Elevate Your Local Presence",
    finalCtaSub: 'Get in touch to share your business goals. We will build an acquisition funnel tailored to your industry.'
  },
  'enterprises': {
    slug: 'enterprises',
    title: 'Solutions for Enterprises',
    headline: 'Scalable Software and Automated Pipelines for Complex Operations.',
    intro: 'We develop highly secure bespoke portals, automate complex data entry pathways, and modernize fragile legacy code structures.',
    ctaText: 'Modernize Enterprise Tech',
    whoThisIsFor: [
      'Enterprises seeking custom portal systems to streamline internal billing and scheduling.',
      'Organizations wasting employee hours copying data across disconnected software silos.',
      'Firms wanting to modernize outdated legacy codebases without interrupting current operations.'
    ],
    pathHeading: 'The Enterprise Blueprint',
    pathSteps: [
      { title: 'Process Audit', desc: 'Mapping manual double-entries, user permissions, and legacy software bottlenecks.' },
      { title: 'System Architecture Design', desc: 'Designing secure, isolated relational databases with clear role access layers.' },
      { title: 'Secure Development Cycle', desc: 'Writing clean, type-safe modular code backed by extensive API test structures.' },
      { title: 'Gradual Migration & Support', desc: 'Staged rollout deployments, user training material, and dedicated system monitoring.' }
    ],
    capabilitiesHeading: 'Enterprise Solutions Combined',
    capabilities: [
      { title: 'Custom Software Development', desc: 'Custom portals, internal dashboards, and custom operational billing.', href: '/services/custom-software-development' },
      { title: 'Cloud & DevOps', desc: 'Automated CI/CD release pipelines and containerized auto-scaling.', href: '/services/cloud-devops' },
      { title: 'AI & Automation', desc: 'Custom enterprise workflow automations and API integrations.', href: '/services/ai-automation' }
    ],
    deliverablesHeading: 'Enterprise Deliverables',
    deliverables: [
      { title: 'Secure Bespoke Software', desc: 'A tailored, highly secure cloud portal system built specifically for your operations.' },
      { title: 'Automated Integration Layer', desc: 'Custom API endpoints securely connecting CRM tools, accounting systems, and invoicing pipelines.' },
      { title: 'Technical System Logs', desc: 'Real-time diagnostic dashboards, resource alerts, and detailed activity tracking.' }
    ],
    whyPurePath: 'We adhere to enterprise-grade code hygiene standards. We design type-safe, modular, and deeply documented codebases built with rigorous security controls to ensure long-term operational safety.',
    finalCtaHeading: 'Ready to Optimize Enterprise Operations?',
    finalCtaSub: 'Reach out to schedule a technical consultation. We will help you outline a roadmap to automate manual processes.'
  },
  'manufacturers': {
    slug: 'manufacturers',
    title: 'Solutions for Manufacturers',
    headline: 'Digital Tools to Streamline Sales and Complex Operations.',
    intro: 'Elevate your industry authority with professional digital branding, custom portals for dealers, and automated lead capture pipelines.',
    ctaText: 'Digitize Manufacturing Sales',
    whoThisIsFor: [
      'Manufacturers wishing to elevate their brand presence to secure premium contracts.',
      'Companies wanting to build custom dealer portals for ordering and catalog lookups.',
      'Firms seeking to automate B2B dealer lead capture and inquiry routing.'
    ],
    pathHeading: 'The Industrial Path',
    pathSteps: [
      { title: 'Brand Story Refinement', desc: 'Elegantly positioning your technical capabilities, facilities, and product quality.' },
      { title: 'Custom B2B Hub Development', desc: 'Developing secure corporate sites or dealer portals supporting catalog lookups.' },
      { title: 'Automated Catalog Systems', desc: 'Organizing product catalogs into high-speed dynamic search directories.' },
      { title: 'Dealer Inquiries Route', desc: 'Integrating intelligent lead forms to route inquiries directly to appropriate territory reps.' }
    ],
    capabilitiesHeading: 'Combined B2B Services',
    capabilities: [
      { title: 'Custom Software Development', desc: 'Dealer ordering panels, catalog portals, and secure database systems.', href: '/services/custom-software-development' },
      { title: 'Branding & Design', desc: 'Establishing premium B2B slides, brand guidelines, and product catalogues.', href: '/services/branding-design' },
      { title: 'Website Development', desc: 'Fast, secure corporate portals outlining technical product specifications.', href: '/services/website-development' }
    ],
    deliverablesHeading: 'Manufacturing Deliverables',
    deliverables: [
      { title: 'Premium Corporate Hub', desc: 'A highly responsive corporate portal showcasing product specs, catalogs, and certifications.' },
      { title: 'Dynamic Product Catalogues', desc: 'A fast, search-optimized dynamic inventory listing with inquiry triggers.' },
      { title: 'Territory Routing Pipeline', desc: 'An automated inquiry routing system directing buyer leads to regional offices.' }
    ],
    whyPurePath: 'We specialize in simplifying complex technical specs into beautiful, clear, conversion-oriented layouts. We help you showcase your operational expertise to close higher-value corporate contracts.',
    finalCtaHeading: 'Ready to Upgrade Your Digital Sales Channels?',
    finalCtaSub: 'Reach out to discuss your manufacturing capabilities. We will help you design a modern digital B2B ecosystem.'
  }
};
