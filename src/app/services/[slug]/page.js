import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  CheckCircle2,
  ArrowRight,
  Code2,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import ServiceFAQ from '../../components/ServiceFAQ';
import WhatsAppCTA from '../../components/WhatsAppCTA';
import { SITE_URL } from '../../lib/constants';
import { SERVICES_DATA } from '../../lib/servicesData';

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  const pageUrl = `${SITE_URL}/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${service.metaTitle}`,
      description: service.metaDescription,
      url: pageUrl,
      siteName: 'Abenzo',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    notFound();
  }

  const pageUrl = `${SITE_URL}/services/${service.slug}`;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.summary,
    url: pageUrl,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Abenzo',
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
    },
    areaServed: [
      'India',
      'Kerala',
      'United States',
      'United Kingdom',
      'United Arab Emirates',
      'Canada',
      'Australia',
    ],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <div className="bg-[#050a08] min-h-screen text-white selection:bg-[#008278] selection:text-white flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />

      <main className="flex-1 pt-32 pb-20 px-4 sm:px-6 max-w-6xl mx-auto w-full">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: 'Services', href: '/services' },
            { name: service.title },
          ]}
        />

        {/* Hero Section */}
        <header className="pt-6 pb-14 border-b border-white/5">
          <p className="text-[#008278] font-bold tracking-[0.2em] text-xs uppercase mb-3">
            {service.tagline}
          </p>
          <h1 className="font-space text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            {service.h1}
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
            {service.summary}
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <WhatsAppCTA
              label={`Discuss ${service.title} on WhatsApp`}
              source={`service_${service.slug}`}
              variant="primary"
            />
            <Link
              href="/#packages"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white px-6 py-3.5 rounded-full text-sm font-semibold transition-all"
            >
              View Packages &amp; Pricing <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </header>

        {/* Benefits Section */}
        <section className="py-14 sm:py-18 border-b border-white/5" aria-label="Benefits and Deliverables">
          <div className="mb-8">
            <p className="text-[#008278] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              Deliverables &amp; Outcomes
            </p>
            <h2 className="font-space text-2xl sm:text-3xl font-black text-white">
              Why Choose Abenzo for {service.title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {service.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-[#008278]/30 transition-all"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#008278]/10 text-[#008278] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-space font-bold text-white text-base sm:text-lg mb-1.5">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-14 sm:py-18 border-b border-white/5" aria-label="Our Process">
          <div className="mb-8">
            <p className="text-[#008278] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              Structured Methodology
            </p>
            <h2 className="font-space text-2xl sm:text-3xl font-black text-white">
              How We Execute {service.title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col justify-between"
              >
                <div>
                  <span className="font-space text-2xl font-black text-[#008278] block mb-3">
                    {step.step}
                  </span>
                  <h3 className="font-space font-bold text-white text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack & Use Cases */}
        <section className="py-14 sm:py-18 border-b border-white/5" aria-label="Tech Stack and Applications">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Tech Stack */}
            <div>
              <p className="text-[#008278] text-xs font-bold uppercase tracking-[0.2em] mb-2">
                Engineering Stack
              </p>
              <h2 className="font-space text-2xl font-black text-white mb-4">
                Technologies &amp; Tools
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                We select robust, battle-tested modern frameworks to ensure longevity, fast execution, and maintainability.
              </p>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <p className="text-[#008278] text-xs font-bold uppercase tracking-[0.2em] mb-2">
                Practical Applications
              </p>
              <h2 className="font-space text-2xl font-black text-white mb-4">
                Common Use Cases
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Ideal project profiles where this service delivers maximum business return:
              </p>
              <ul className="space-y-2.5">
                {service.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008278]" aria-hidden="true" />
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQs with JSON-LD Schema */}
        <ServiceFAQ
          faqs={service.faqs}
          title={`Frequently Asked Questions About ${service.title}`}
        />

        {/* Related Services Internal Linking */}
        <section className="py-12 border-t border-white/5" aria-label="Related Services">
          <p className="text-[#008278] text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Explore Further
          </p>
          <h2 className="font-space text-xl sm:text-2xl font-black text-white mb-6">
            Complementary Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {service.relatedServices.map((related) => (
              <Link
                key={related.name}
                href={related.href}
                className="group p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[#008278]/30 hover:bg-white/[0.04] transition-all flex items-center justify-between"
              >
                <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                  {related.name}
                </span>
                <ArrowRight size={14} className="text-[#008278] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA Banner */}
        <section
          className="mt-12 rounded-3xl border border-[#008278]/30 bg-gradient-to-br from-[#008278]/10 via-[#050a08] to-black p-8 sm:p-12 text-center relative overflow-hidden"
          aria-label="Start your project"
        >
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="font-space text-2xl sm:text-4xl font-black text-white mb-4">
              Ready to Build Your {service.title}?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-8">
              Discuss your project scope, timeline, and starting estimates directly with our engineering team on WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppCTA
                label="Get an Estimate on WhatsApp"
                source={`service_cta_${service.slug}`}
                variant="primary"
              />
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold hover:border-white/50 transition-all"
              >
                Submit Inquiry Details
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
