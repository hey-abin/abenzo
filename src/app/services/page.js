import Link from 'next/link';
import {
  Globe,
  Sparkles,
  Zap,
  Code2,
  PenTool,
  ShoppingCart,
  Store,
  Layers,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import ServiceFAQ from '../components/ServiceFAQ';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { SITE_URL } from '../lib/constants';
import { SERVICES_DATA } from '../lib/servicesData';

export const metadata = {
  title: 'Web Development & Digital Experience Services',
  description:
    'Explore Abenzo’s specialized services: custom web development, interactive 3D websites, Next.js & React engineering, UI/UX design, e-commerce, and SaaS solutions.',
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: 'Web Development & Digital Experience Services | Abenzo',
    description:
      'High-performance Next.js websites, interactive 3D web experiences, and custom web applications for businesses worldwide.',
    url: `${SITE_URL}/services`,
    siteName: 'Abenzo',
  },
};

const iconMap = {
  'web-development': Globe,
  '3d-web-development': Sparkles,
  'nextjs-development': Zap,
  'react-development': Code2,
  'ui-ux-design': PenTool,
  'ecommerce-development': ShoppingCart,
  'shopify-development': Store,
  'saas-development': Layers,
};

const generalFaqs = [
  {
    q: 'What types of businesses does Abenzo work with?',
    a: 'We partner with early-stage startups needing rapid MVPs, small-to-medium businesses upgrading their digital presence, direct-to-consumer e-commerce brands, and established companies seeking bespoke web applications.',
  },
  {
    q: 'How does your project pricing work?',
    a: 'We offer transparent tiered starting packages (Starter at ₹15,000+, Business at ₹30,000+, Professional at ₹50,000+, and Custom Software at ₹75,000+). Final quotes are tailored specifically to your project requirements and scope with zero hidden costs.',
  },
  {
    q: 'Do you provide end-to-end development or just design/code?',
    a: 'We handle the complete lifecycle: strategy, UI/UX design in Figma, frontend & backend engineering, technical SEO, performance audits, cloud deployment, and post-launch maintenance.',
  },
  {
    q: 'How do we get started on a project?',
    a: 'Simply connect with us via WhatsApp (+91 85908 14463) or email. Share your project requirements, timeline, and goals, and we will provide an initial consultation and proposal.',
  },
];

export default function ServicesPage() {
  const serviceList = Object.values(SERVICES_DATA);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Abenzo Digital & Web Development Services',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Abenzo',
      url: SITE_URL,
    },
    serviceType: 'Web Development and Digital Experiences',
    areaServed: ['India', 'United States', 'United Kingdom', 'United Arab Emirates', 'Canada', 'Australia'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web & Digital Services Catalog',
      itemListElement: serviceList.map((s, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.summary,
          url: `${SITE_URL}/services/${s.slug}`,
        },
      })),
    },
  };

  return (
    <div className="bg-[#050a08] min-h-screen text-white selection:bg-[#008278] selection:text-white flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1 pt-32 pb-20 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ name: 'Services' }]} />

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto pt-6 pb-16">
          <p className="text-[#008278] font-bold tracking-[0.2em] text-xs uppercase mb-3">
            Our Core Capabilities
          </p>
          <h1 className="font-space text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
            Digital Experiences &amp;{' '}
            <span className="text-[#008278]">Engineering Services</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            From modern business websites and immersive 3D graphics to enterprise Next.js architectures and custom SaaS portals, we engineer high-performance solutions designed to turn visitors into long-term clients.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {serviceList.map((service) => {
            const Icon = iconMap[service.slug] || Globe;
            return (
              <article
                key={service.slug}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-7 flex flex-col justify-between hover:border-[#008278]/40 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#008278]/10 border border-[#008278]/30 flex items-center justify-center text-[#008278] mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h2 className="font-space text-xl sm:text-2xl font-bold text-white mb-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="hover:text-[#008278] transition-colors"
                    >
                      {service.title}
                    </Link>
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  <div className="mb-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Key Capabilities:
                    </p>
                    <ul className="space-y-1.5">
                      {service.benefits.slice(0, 3).map((benefit) => (
                        <li key={benefit.title} className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle2 size={13} className="text-[#008278] flex-shrink-0" aria-hidden="true" />
                          <span>{benefit.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {service.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-2 py-0.5 rounded-full border border-white/5 bg-white/5 text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#008278] hover:text-[#00a396] transition-colors"
                  aria-label={`Explore ${service.title} services`}
                >
                  Explore Service <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>

        {/* General FAQs */}
        <ServiceFAQ
          faqs={generalFaqs}
          title="Frequently Asked Questions About Our Services"
        />

        {/* Call to action section */}
        <section
          className="mt-16 rounded-3xl border border-[#008278]/30 bg-gradient-to-br from-[#008278]/10 via-[#050a08] to-black p-8 sm:p-12 text-center relative overflow-hidden"
          aria-label="Start your project"
        >
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="font-space text-2xl sm:text-4xl font-black text-white mb-4">
              Have a Specific Requirement in Mind?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-8">
              Whether you need a brand-new website, an interactive 3D feature, or a full-stack custom application, we are ready to bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppCTA
                label="Discuss Requirements on WhatsApp"
                source="services_index"
                variant="primary"
              />
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold hover:border-white/50 transition-all"
              >
                Send Us a Message
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
