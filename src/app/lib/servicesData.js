export const SERVICES_DATA = {
  'web-development': {
    slug: 'web-development',
    title: 'Custom Web Development',
    metaTitle: 'Custom Web Development Services & Agency',
    metaDescription:
      'Abenzo delivers custom web development services for modern businesses. Fast, secure, responsive, and SEO-optimized websites built for real conversions.',
    h1: 'Custom Web Development Built for Speed and Growth',
    tagline: 'High-Performance Websites Engineered from Scratch',
    summary:
      'We build bespoke websites tailored to your unique brand identity, business workflows, and audience. No bloated pre-made templates or fragile page builders — only clean, semantic, modern code engineered for lightning-fast loading speeds, frictionless user experiences, and organic search discoverability.',
    benefits: [
      {
        title: 'Bespoke Architecture',
        desc: 'Tailored specifically to your business goals. Zero bloated dependencies or cookie-cutter template limitations.',
      },
      {
        title: 'Sub-Second Loading Speeds',
        desc: 'Optimized Core Web Vitals, minimized render-blocking assets, and intelligent caching for optimal speed.',
      },
      {
        title: 'Built-in Technical SEO',
        desc: 'Clean semantic HTML5, JSON-LD structured schemas, responsive layouts, and proper hierarchy for search engines.',
      },
      {
        title: 'Mobile-First Responsiveness',
        desc: 'Flawless presentation and effortless interactions across mobile phones, tablets, laptops, and ultra-wide displays.',
      },
    ],
    techStack: ['Next.js', 'React.js', 'Tailwind CSS', 'Node.js', 'Vercel', 'JavaScript / TypeScript'],
    process: [
      { step: '01', title: 'Discovery & Requirements', desc: 'Understanding your market, business objectives, audience needs, and brand identity.' },
      { step: '02', title: 'Architecture & Design', desc: 'Crafting clean wireframes, intuitive layout flows, and responsive design systems.' },
      { step: '03', title: 'Engineering & Testing', desc: 'Writing modular code, integrating forms, analytics, and rigorously testing across devices.' },
      { step: '04', title: 'Deployment & Support', desc: 'Deploying to edge infrastructure with continuous monitoring and post-launch maintenance.' },
    ],
    useCases: [
      'Corporate and Enterprise Business Websites',
      'High-Converting Product Launch & Campaign Pages',
      'Professional Services & Agency Web Presences',
      'Healthcare, Real Estate, and Retail Portals',
    ],
    faqs: [
      {
        q: 'Why should I choose custom web development over WordPress or Wix?',
        a: 'Custom websites are built specifically for your workflow and audience without heavy template bloat or vulnerable third-party plugins. They deliver drastically faster loading times, superior Core Web Vitals scores, enhanced security, and complete flexibility to scale as your business expands.',
      },
      {
        q: 'How long does it take to develop a custom website?',
        a: 'A standard custom business website typically requires 2 to 4 weeks depending on the number of pages, custom features, and asset readiness. We provide a transparent scope and strict delivery timeline before starting any work.',
      },
      {
        q: 'Are your custom websites SEO-friendly?',
        a: 'Yes. Every website we build includes semantic HTML tags, dynamic metadata, Open Graph cards, Schema.org structured data, XML sitemaps, and optimized assets to ensure maximum search engine discoverability.',
      },
      {
        q: 'Can you work with businesses outside of India?',
        a: 'Absolutely. Abenzo collaborates with clients globally across the United States, United Kingdom, United Arab Emirates, Australia, and Canada, using direct communication channels such as WhatsApp and Google Meet.',
      },
    ],
    relatedServices: [
      { name: 'Next.js Development', href: '/services/nextjs-development' },
      { name: '3D Web Development', href: '/services/3d-web-development' },
      { name: 'UI/UX Design', href: '/services/ui-ux-design' },
    ],
  },

  '3d-web-development': {
    slug: '3d-web-development',
    title: '3D Web Development & Three.js',
    metaTitle: '3D Web Development & Three.js Agency',
    metaDescription:
      'Immersive 3D websites and interactive WebGL experiences crafted with Three.js and React Three Fiber. Transform your brand with creative web development.',
    h1: 'Immersive 3D Web Development & Three.js Experiences',
    tagline: 'Interactive WebGL, Canvas Animations & Creative Engineering',
    summary:
      'Transform ordinary web visits into memorable digital journeys. We engineer real-time 3D graphics, interactive canvas scenes, WebGL shaders, and smooth camera choreographies that run seamlessly right inside web browsers on both desktop and mobile devices.',
    benefits: [
      {
        title: 'High User Engagement',
        desc: 'Interactive 3D environments dramatically increase session duration and brand recall compared to flat static layouts.',
      },
      {
        title: 'Optimized 60 FPS Performance',
        desc: 'Carefully budgeted polygon counts, texture compression, lazy loading, and draw call batching keep frame rates smooth.',
      },
      {
        title: 'Graceful Mobile Fallbacks',
        desc: 'Sensible progressive enhancement ensures users on low-power devices still receive a clean, responsive experience.',
      },
      {
        title: 'Product Demonstration Power',
        desc: 'Allow prospective customers to inspect products from all angles with 360-degree interactive controls.',
      },
    ],
    techStack: ['Three.js', 'React Three Fiber', '@react-three/drei', 'WebGL', 'GLSL Shaders', 'Framer Motion'],
    process: [
      { step: '01', title: 'Creative Concept & Storyboard', desc: 'Defining the 3D visual narrative, user interaction model, and performance budget.' },
      { step: '02', title: 'Asset Modeling & Optimization', desc: 'Preparing low-poly 3D models (GLTF/GLB) with Draco compression and PBR textures.' },
      { step: '03', title: 'Canvas Integration & Lighting', desc: 'Building dynamic lighting, camera physics, raycasting interactions, and shader effects.' },
      { step: '04', title: 'Performance Profiling', desc: 'Stress-testing frame rates and GPU memory across varied mobile and desktop browsers.' },
    ],
    useCases: [
      'Interactive 3D Brand Experiences & Product Launches',
      '360° E-Commerce Product Visualizers & Configurators',
      'Gamified Web Experiences & Interactive Portfolios',
      'Architectural & Industrial Spatial Web Presentations',
    ],
    faqs: [
      {
        q: 'Will a 3D website slow down loading speeds or hurt SEO?',
        a: 'When engineered correctly, no. At Abenzo, we lazy-load heavy 3D canvases after critical HTML and text content have already rendered. This preserves Core Web Vitals (LCP and FCP) while ensuring search crawlers parse all semantic text immediately.',
      },
      {
        q: 'Do 3D websites work on smartphones and tablets?',
        a: 'Yes. We calibrate geometry complexity, texture resolutions, and pixel ratios specifically for mobile GPUs to guarantee smooth touch interactions without draining battery or causing lag.',
      },
      {
        q: 'What technologies do you use for 3D web development?',
        a: 'We leverage Three.js, React Three Fiber, Drei, WebGL, custom GLSL shaders, and Framer Motion integrated within Next.js for a robust production setup.',
      },
      {
        q: 'Can you show an example of a 3D project you have built?',
        a: 'Yes! We developed "My Coco" (https://mycocopet.vercel.app), a real-time 3D browser game experience built with React Three Fiber, Three.js, and Next.js.',
      },
    ],
    relatedServices: [
      { name: 'Custom Web Development', href: '/services/web-development' },
      { name: 'React.js Development', href: '/services/react-development' },
      { name: 'UI/UX Design', href: '/services/ui-ux-design' },
    ],
  },

  'nextjs-development': {
    slug: 'nextjs-development',
    title: 'Next.js Development',
    metaTitle: 'Next.js Development Company & Agency',
    metaDescription:
      'High-performance Next.js development services for fast, scalable web apps and SEO-ready business platforms using App Router, SSR, and Edge computing.',
    h1: 'Enterprise Next.js Development for High-Growth Brands',
    tagline: 'Server-Side Rendering, App Router & Edge Architecture',
    summary:
      'Next.js is the premier React framework for modern web engineering. Abenzo builds enterprise-grade Next.js platforms utilizing Server Components (RSC), App Router, dynamic server rendering, static site generation (SSG), and edge deployment to deliver unmatched performance and search rankings.',
    benefits: [
      {
        title: 'Instant First Paint & SSR',
        desc: 'Server-side rendering produces fully hydrated HTML instantly, eliminating blank loading screens.',
      },
      {
        title: 'Top-Tier Search Engine Visibility',
        desc: 'Search engine bots read fully rendered HTML content on initial request, eliminating indexing delays.',
      },
      {
        title: 'Granular Caching & ISR',
        desc: 'Incremental Static Regeneration keeps content always fresh without recompiling the entire application.',
      },
      {
        title: 'Edge Route Handlers',
        desc: 'Execute backend API endpoints near users with low-latency edge functions and zero server maintenance.',
      },
    ],
    techStack: ['Next.js 15 / 16', 'React 19', 'Turbopack', 'Vercel Edge Platform', 'TypeScript', 'Tailwind CSS'],
    process: [
      { step: '01', title: 'Architecture Planning', desc: 'Selecting server vs client component boundaries for optimal bundle efficiency.' },
      { step: '02', title: 'App Router Implementation', desc: 'Structuring nested layouts, parallel routes, and loading skeletons.' },
      { step: '03', title: 'Data Fetching & Caching', desc: 'Configuring server-side requests, revalidation tags, and database connections.' },
      { step: '04', title: 'Edge Deployment & Tuning', desc: 'Deploying on edge CDNs, auditing bundle sizes, and tuning Core Web Vitals.' },
    ],
    useCases: [
      'High-Traffic Business Websites Requiring SEO Authority',
      'Dynamic Web Applications with Real-Time Data',
      'Headless E-Commerce Frontends and Catalogs',
      'SaaS Platforms with Authenticated User Dashboards',
    ],
    faqs: [
      {
        q: 'Why should our company use Next.js instead of plain React?',
        a: 'Standard React apps are client-side single-page applications that send a blank HTML shell, forcing the browser to download and execute heavy JavaScript before rendering content. Next.js renders HTML on the server first, making your site dramatically faster to load and significantly easier for Google to index and rank.',
      },
      {
        q: 'Can Next.js handle high traffic volumes?',
        a: 'Yes. With edge caching, static site generation, and serverless compute, Next.js can effortlessly absorb sudden traffic spikes with near-zero latency and high uptime.',
      },
      {
        q: 'Can you migrate our existing React or WordPress site to Next.js?',
        a: 'Yes. We specialize in migrating legacy websites and client-only React apps to modern Next.js architectures, preserving your content while drastically improving load speed and Core Web Vitals.',
      },
      {
        q: 'How does Next.js improve Core Web Vitals?',
        a: 'Next.js provides automatic image optimization (AVIF/WebP), font optimization with zero layout shift, script loading prioritization, and minimal client JavaScript bundles via React Server Components.',
      },
    ],
    relatedServices: [
      { name: 'React.js Development', href: '/services/react-development' },
      { name: 'Custom Web Development', href: '/services/web-development' },
      { name: 'SaaS Development', href: '/services/saas-development' },
    ],
  },

  'react-development': {
    slug: 'react-development',
    title: 'React.js Development',
    metaTitle: 'React.js Development Company & Frontend Agency',
    metaDescription:
      'Custom React.js development services for interactive web applications, component architectures, and responsive user interfaces that delight users.',
    h1: 'Custom React.js Development & Modern Frontend Engineering',
    tagline: 'Interactive Interfaces, Component Systems & Single-Page Apps',
    summary:
      'React powers the most interactive applications on the modern web. We architect modular, scalable React frontends with clean state management, reusable design systems, and fluid micro-interactions designed to engage users and streamline complex workflows.',
    benefits: [
      {
        title: 'Component-Driven Architecture',
        desc: 'Modular, reusable UI components that ensure design consistency and speed up future feature releases.',
      },
      {
        title: 'Fluid Interactive UX',
        desc: 'Smooth client-side routing, instant state updates, and reactive interfaces without full page reloads.',
      },
      {
        title: 'Maintainable Codebases',
        desc: 'Clean code following strict separation of concerns, modern React hooks, and strict TypeScript patterns.',
      },
      {
        title: 'Ecosystem Flexibility',
        desc: 'Seamless compatibility with rich animation libraries, charts, form engines, and API integrations.',
      },
    ],
    techStack: ['React 19', 'TypeScript', 'Zustand / Redux', 'Framer Motion', 'Tailwind CSS', 'Vite / Next.js'],
    process: [
      { step: '01', title: 'Component Hierarchy Design', desc: 'Deconstructing UI designs into reusable atomic components.' },
      { step: '02', title: 'State Strategy & Data Flow', desc: 'Architecting local and global state pipelines with optimized re-render cycles.' },
      { step: '03', title: 'Integration & Testing', desc: 'Connecting backend REST/GraphQL APIs and conducting comprehensive UX testing.' },
      { step: '04', title: 'Optimization & Production Build', desc: 'Tree-shaking, code-splitting, and minifying bundle sizes for deployment.' },
    ],
    useCases: [
      'Interactive Customer Portals & Dashboards',
      'Dynamic SaaS Frontend Applications',
      'Real-Time Collaboration & Communication Tools',
      'Complex Multi-Step Form & Calculator Interfaces',
    ],
    faqs: [
      {
        q: 'What kinds of applications do you build with React?',
        a: 'We build customer portals, interactive dashboards, SaaS web applications, real-time collaboration tools, interactive calculators, and high-performance product visualizers.',
      },
      {
        q: 'How do you prevent React applications from becoming slow?',
        a: 'We implement route-based code splitting, memoized calculations, virtualized lists for large datasets, efficient local state management, and optimized render cycles.',
      },
      {
        q: 'Can you work with our existing backend team?',
        a: 'Yes. We frequently build frontend React interfaces that connect cleanly to existing REST, GraphQL, or third-party backend APIs.',
      },
      {
        q: 'Do you offer ongoing React maintenance and upgrades?',
        a: 'Yes. We help teams upgrade legacy React versions, refactor class components into modern hooks, and perform scheduled dependency audits.',
      },
    ],
    relatedServices: [
      { name: 'Next.js Development', href: '/services/nextjs-development' },
      { name: 'UI/UX Design', href: '/services/ui-ux-design' },
      { name: 'SaaS Development', href: '/services/saas-development' },
    ],
  },

  'ui-ux-design': {
    slug: 'ui-ux-design',
    title: 'UI/UX Design & Website Redesign',
    metaTitle: 'UI/UX Design Agency & Website Redesign',
    metaDescription:
      'User-centric UI/UX design and website redesign services that combine aesthetic excellence with conversion-driven interfaces for digital products.',
    h1: 'Conversion-Focused UI/UX Design & Website Redesign',
    tagline: 'Design Systems, User Journeys & Modern Aesthetics',
    summary:
      'Great design is not just visual polish — it is an intuitive bridge between customer desires and business objectives. We craft clean, engaging user interfaces, comprehensive design systems, and strategic website redesigns that elevate brand perception and increase conversions.',
    benefits: [
      {
        title: 'Higher Conversion Rates',
        desc: 'Clear visual hierarchies and frictionless calls-to-action guide visitors seamlessly toward conversion.',
      },
      {
        title: 'Premium Brand Perception',
        desc: 'Custom modern typography, balanced spacing, and refined dark/light aesthetics instill instant trust.',
      },
      {
        title: 'Accessible & Usable',
        desc: 'WCAG compliance, readable contrast ratios, clear touch targets, and accessible keyboard navigation.',
      },
      {
        title: 'Cohesive Design Systems',
        desc: 'Standardized design tokens, reusable UI components, and design guidelines that simplify future updates.',
      },
    ],
    techStack: ['Figma', 'Design Systems', 'Responsive Wireframing', 'Interactive Prototyping', 'WCAG Accessibility'],
    process: [
      { step: '01', title: 'User Research & Audit', desc: 'Analyzing existing user drop-offs, competitor landscapes, and core customer personas.' },
      { step: '02', title: 'Information Architecture', desc: 'Mapping user journeys, sitemaps, and low-fidelity wireframes.' },
      { step: '03', title: 'High-Fidelity UI Design', desc: 'Crafting responsive visual screens, typography scales, micro-interactions, and palettes.' },
      { step: '04', title: 'Developer Handoff & Review', desc: 'Detailed design specifications ensuring 1:1 fidelity between Figma and live code.' },
    ],
    useCases: [
      'Outdated Website Modernization & Complete Redesign',
      'B2B SaaS & Web Application User Interface Design',
      'E-Commerce Checkout & Catalog UX Streamlining',
      'Mobile-First Responsive Interface Prototyping',
    ],
    faqs: [
      {
        q: 'When does a business need a website redesign?',
        a: 'A redesign is vital if your current website looks dated, is difficult to navigate on mobile devices, suffers from slow loading speeds, or generates low inquiry conversion rates despite receiving traffic.',
      },
      {
        q: 'Will redesigning my website harm my existing Google rankings?',
        a: 'Not when executed properly. At Abenzo, we protect your SEO equity by preserving URL structures, establishing 301 redirects for modified paths, retaining high-ranking content, and strengthening technical metadata.',
      },
      {
        q: 'What deliverables are included in a UI/UX design project?',
        a: 'We deliver comprehensive Figma design files, responsive desktop/tablet/mobile screens, reusable component libraries, interactive prototypes, and design asset exports ready for development.',
      },
      {
        q: 'Can Abenzo design AND code the website?',
        a: 'Yes! Having our designers and front-end engineers work together under one roof eliminates handoff friction and guarantees your live website looks and feels identical to the approved design.',
      },
    ],
    relatedServices: [
      { name: 'Custom Web Development', href: '/services/web-development' },
      { name: '3D Web Development', href: '/services/3d-web-development' },
      { name: 'E-Commerce Development', href: '/services/ecommerce-development' },
    ],
  },

  'ecommerce-development': {
    slug: 'ecommerce-development',
    title: 'E-Commerce Website Development',
    metaTitle: 'E-Commerce Website Development Company',
    metaDescription:
      'Custom e-commerce website development engineered for sales. High-speed checkouts, secure payment gateways, and scalable online store architectures.',
    h1: 'Scalable E-Commerce Websites Built for Higher Sales',
    tagline: 'Fast Checkouts, Frictionless Catalogs & Payment Gateway Integration',
    summary:
      'An e-commerce website must be lightning-fast, dependable, and effortless to buy from. We engineer custom online stores with intuitive product browsing, high-conversion checkout flows, secure payment gateways, and real-time inventory synchronization.',
    benefits: [
      {
        title: 'Conversion-Optimized Checkout',
        desc: 'Friction-free, one-page checkout experiences designed to eliminate cart abandonment.',
      },
      {
        title: 'Secure Payment Gateways',
        desc: 'Full integration with Razorpay, Stripe, PayPal, Cash on Delivery (COD), UPI, and global processors.',
      },
      {
        title: 'High-Speed Product Catalogs',
        desc: 'Instant faceted search, dynamic filters, and fast image loading keep shoppers browsing.',
      },
      {
        title: 'Complete Order Management',
        desc: 'Automated order notifications, customer account portals, and easy inventory tracking.',
      },
    ],
    techStack: ['Next.js Commerce', 'React.js', 'Node.js', 'Stripe', 'Razorpay', 'Firebase / PostgreSQL'],
    process: [
      { step: '01', title: 'Commerce Scoping', desc: 'Reviewing catalog sizes, shipping rules, tax calculations, and payment requirements.' },
      { step: '02', title: 'Store UX Architecture', desc: 'Designing product discovery flows, variant pickers, cart drawers, and checkout.' },
      { step: '03', title: 'Gateway & API Integration', desc: 'Connecting secure payments, webhook handlers, and automated email/WhatsApp alerts.' },
      { step: '04', title: 'Security Audit & Launch', desc: 'Verifying SSL encryption, payment compliance, load endurance, and go-live.' },
    ],
    useCases: [
      'Direct-to-Consumer (D2C) Brand Storefronts',
      'B2B Wholesale Ordering & Inquiry Portals',
      'Digital Product & Subscription Commerce Platforms',
      'Multi-Category Online Retail Stores',
    ],
    faqs: [
      {
        q: 'Which payment gateways can you integrate into our online store?',
        a: 'We integrate all major Indian and international gateways, including Razorpay, Stripe, PayPal, Cashfree, PayU, and direct UPI solutions, with support for multi-currency transactions.',
      },
      {
        q: 'How do you keep e-commerce sites fast with hundreds of product images?',
        a: 'We utilize automated next-gen image formats (AVIF/WebP), responsive image srcsets, offscreen lazy loading, CDN edge delivery, and client-side page prefetching.',
      },
      {
        q: 'Can you integrate WhatsApp order notifications for customers?',
        a: 'Yes. We can configure automated WhatsApp updates for order confirmation, dispatch updates, and direct customer support links.',
      },
      {
        q: 'Do you offer Shopify development as well?',
        a: 'Yes! In addition to custom headless e-commerce builds, we offer dedicated Shopify theme development and store setup services.',
      },
    ],
    relatedServices: [
      { name: 'Shopify Development', href: '/services/shopify-development' },
      { name: 'Custom Web Development', href: '/services/web-development' },
      { name: 'UI/UX Design', href: '/services/ui-ux-design' },
    ],
  },

  'shopify-development': {
    slug: 'shopify-development',
    title: 'Shopify Development',
    metaTitle: 'Shopify Development Company & Store Setup',
    metaDescription:
      'Expert Shopify development services including bespoke Liquid themes, store setup, app integrations, and conversion-rate optimization.',
    h1: 'Custom Shopify Store Development & Theme Engineering',
    tagline: 'Bespoke Liquid Themes, App Integration & Conversion Optimization',
    summary:
      'Shopify is the world’s leading hosted commerce engine. We help brands stand out from generic competitors by crafting bespoke Shopify Liquid themes, custom page layouts, app integrations, and checkout enhancements that drive measurable revenue.',
    benefits: [
      {
        title: 'Bespoke Theme Customization',
        desc: 'Escape cookie-cutter templates with unique brand styling and custom section blocks for the Theme Editor.',
      },
      {
        title: 'Speed & Core Web Vitals Optimization',
        desc: 'Eliminating bloated app scripts and optimizing theme Liquid files for swift mobile load times.',
      },
      {
        title: 'Targeted App Configurations',
        desc: 'Seamless integration of reviews, loyalty programs, search filters, and automated marketing tools.',
      },
      {
        title: 'Mobile Shopping Experience',
        desc: 'Fine-tuned touch interactions, sticky add-to-cart buttons, and seamless mobile payments.',
      },
    ],
    techStack: ['Shopify Liquid', 'Theme App Extensions', 'Storefront API', 'JavaScript', 'Tailwind CSS'],
    process: [
      { step: '01', title: 'Store Architecture & Strategy', desc: 'Defining collection structures, product attributes, and necessary app integrations.' },
      { step: '02', title: 'Theme Development', desc: 'Coding responsive custom sections and templates utilizing Shopify OS 2.0 standards.' },
      { step: '03', title: 'Catalog & Payment Setup', desc: 'Configuring payment gateways, shipping zones, tax brackets, and email notifications.' },
      { step: '04', title: 'Performance Testing & Go-Live', desc: 'Optimizing asset delivery, verifying mobile checkout flow, and launching.' },
    ],
    useCases: [
      'New Shopify Store Launch for Growing Brands',
      'Migration from WooCommerce, Magento, or Custom Stores to Shopify',
      'Shopify Speed and Performance Optimization Audits',
      'Custom Shopify 2.0 Section & Block Engineering',
    ],
    faqs: [
      {
        q: 'Why should I invest in a custom Shopify theme rather than a free theme?',
        a: 'Free themes are used by hundreds of thousands of identical stores and often lack brand differentiation or specific conversion features. A custom theme reflects your distinct brand identity, minimizes unnecessary script bloat, loads faster, and is structured around your specific product presentation.',
      },
      {
        q: 'Can you migrate our existing store from WooCommerce to Shopify?',
        a: 'Yes. We migrate your product inventory, customer records, historical orders, and media assets to Shopify while preserving URL structures to protect SEO rankings.',
      },
      {
        q: 'Can our internal team easily edit store content after launch?',
        a: 'Yes. We build using Shopify Online Store 2.0 modular sections and blocks so your team can effortlessly reorder sections, edit text, and update images directly inside Shopify’s visual editor.',
      },
      {
        q: 'Do you help with Shopify app selection and integration?',
        a: 'Yes. We recommend and configure only lean, high-performing apps for reviews, upsells, and analytics to avoid slowing down your site.',
      },
    ],
    relatedServices: [
      { name: 'E-Commerce Development', href: '/services/ecommerce-development' },
      { name: 'UI/UX Design', href: '/services/ui-ux-design' },
      { name: 'Custom Web Development', href: '/services/web-development' },
    ],
  },

  'saas-development': {
    slug: 'saas-development',
    title: 'SaaS & Web App Development',
    metaTitle: 'SaaS Development Company & Web Application Agency',
    metaDescription:
      'Scalable SaaS application and MVP development services. We build cloud-native web apps, client portals, and custom software systems that scale.',
    h1: 'Scalable SaaS & Custom Web Application Development',
    tagline: 'Cloud-Native Architecture, MVP Builds & Business Automation',
    summary:
      'Transform complex operational challenges into streamlined software. Abenzo engineers robust Software-as-a-Service (SaaS) platforms, minimum viable products (MVPs), internal management systems, customer portals, and bespoke business automation tools.',
    benefits: [
      {
        title: 'Rapid MVP Deployment',
        desc: 'Accelerate your time to market by shipping core functional features quickly without sacrificing code quality.',
      },
      {
        title: 'Secure Authentication & RBAC',
        desc: 'Implement multi-tenant architectures, granular user roles, permission controls, and secure session handling.',
      },
      {
        title: 'Interactive Dashboards',
        desc: 'Real-time metrics, data visualization charts, filtering, export capabilities, and audit logs.',
      },
      {
        title: 'Cloud-Scalable Backends',
        desc: 'Serverless compute, resilient databases, automated backups, and scalable API architecture.',
      },
    ],
    techStack: ['Next.js', 'React.js', 'Node.js', 'Firebase', 'MongoDB', 'PostgreSQL', 'Tailwind CSS'],
    process: [
      { step: '01', title: 'Product Scoping & Roadmapping', desc: 'Prioritizing essential MVP features, user roles, database schema, and workflows.' },
      { step: '02', title: 'UX Wireframing & Prototyping', desc: 'Designing responsive dashboards, interactive forms, and administrative controls.' },
      { step: '03', title: 'Agile Full-Stack Engineering', desc: 'Developing frontend interfaces, secure APIs, database logic, and role permissions.' },
      { step: '04', title: 'Deployment, Monitoring & Scale', desc: 'Setting up continuous integration, error monitoring, and ongoing product enhancements.' },
    ],
    useCases: [
      'Multi-Tenant B2B SaaS Software Platforms',
      'Client Portals, Booking Engines & Membership Sites',
      'Internal Business Management & CRM Systems',
      'Fast-to-Market Startup MVP Prototypes',
    ],
    faqs: [
      {
        q: 'Can you help a startup build a minimum viable product (MVP)?',
        a: 'Yes! We specialize in helping early-stage founders scope, design, and build clean, functional MVPs quickly so they can validate their business model with real paying users and investors.',
      },
      {
        q: 'How do you handle data security in custom web applications?',
        a: 'We adhere to best practices including HTTPS/TLS encryption, secure session tokens, strict role-based access control (RBAC), parameterized database queries, and environment variable isolation for sensitive keys.',
      },
      {
        q: 'Who owns the intellectual property and code of the application?',
        a: 'You own 100% of the code, intellectual property, designs, and credentials upon project completion. We hand over the complete repository and documentation.',
      },
      {
        q: 'Can you build custom internal software for my company?',
        a: 'Yes. We build custom dashboards, booking platforms, inventory trackers, and internal tools tailored specifically to how your team operates.',
      },
    ],
    relatedServices: [
      { name: 'Next.js Development', href: '/services/nextjs-development' },
      { name: 'React.js Development', href: '/services/react-development' },
      { name: 'Custom Web Development', href: '/services/web-development' },
    ],
  },
};
