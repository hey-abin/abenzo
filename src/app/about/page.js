import Link from 'next/link';
import {
  Code2,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Globe,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { SITE_URL, CONTACT } from '../lib/constants';

export const metadata = {
  title: 'About Us — Web Development & 3D Digital Agency',
  description:
    'Learn about Abenzo, our engineering principles, design standards, and our mission to build high-performance digital products for brands in India and worldwide.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: 'About Abenzo | Web Development & 3D Experience Agency',
    description:
      'Abenzo is a web development and digital experience agency engineered for performance, precision, and business growth.',
    url: `${SITE_URL}/about`,
    siteName: 'Abenzo',
  },
};

const values = [
  {
    icon: Zap,
    title: 'Performance-First Engineering',
    desc: 'Speed is not an afterthought. We optimize assets, minimize client-side JavaScript, and target green Core Web Vitals scores across every build.',
  },
  {
    icon: Code2,
    title: 'Bespoke Solutions, No Cookie-Cutters',
    desc: 'We never force generic templates or fragile page builders onto clients. Every codebase is crafted specifically for your workflow and long-term vision.',
  },
  {
    icon: Sparkles,
    title: 'Creative Technical Ambition',
    desc: 'From smooth interactive micro-animations to real-time 3D WebGL experiences with Three.js, we push technical boundaries while maintaining rock-solid stability.',
  },
  {
    icon: ShieldCheck,
    title: 'Honest Scoping & Direct Access',
    desc: 'No corporate bureaucracy or surprise invoices. You communicate directly with the engineers building your product through transparent WhatsApp updates.',
  },
];

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Abenzo',
    url: `${SITE_URL}/about`,
    description:
      'Abenzo is a premium digital agency specializing in high-performance web development, interactive 3D web experiences, Next.js engineering, and custom software.',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: 'Abenzo',
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'India',
      },
      areaServed: ['India', 'United States', 'United Kingdom', 'United Arab Emirates', 'Canada', 'Australia'],
    },
  };

  return (
    <div className="bg-[#050a08] min-h-screen text-white selection:bg-[#008278] selection:text-white flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1 pt-32 pb-20 px-4 sm:px-6 max-w-5xl mx-auto w-full">
        <Breadcrumbs items={[{ name: 'About' }]} />

        {/* Hero */}
        <section className="pt-6 pb-16 text-center max-w-3xl mx-auto">
          <p className="text-[#008278] font-bold tracking-[0.2em] text-xs uppercase mb-3">
            Who We Are
          </p>
          <h1 className="font-space text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Building What You Imagine,{' '}
            <span className="text-[#008278]">Engineered to Last</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Abenzo is an independent digital agency focused on high-performance web development, interactive 3D web applications, and modern software engineering. Based in India and partnering with forward-thinking businesses worldwide.
          </p>
        </section>

        {/* Narrative Section */}
        <section className="py-12 border-t border-white/5 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-space text-2xl sm:text-3xl font-black text-white mb-4">
              Our Philosophy: Code with Purpose
            </h2>
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p>
                In a digital landscape crowded with slow, template-driven websites that look identical, Abenzo was established with a clear mandate: build digital experiences that are distinctly memorable, technically sound, and relentlessly fast.
              </p>
              <p>
                Whether crafting an interactive 3D WebGL showcase or deploying a scalable multi-tenant Next.js platform, our approach combines aesthetic rigor with robust software craftsmanship. We write clean, accessible code that search engines love and users enjoy navigating.
              </p>
              <p>
                We do not believe in opaque agency retainers or bloated timelines. Instead, we offer transparent starting packages, milestone-driven delivery, and direct communication through WhatsApp and video consultation.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 space-y-6">
            <h3 className="font-space font-bold text-white text-lg border-b border-white/10 pb-3">
              Agency Highlights
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <CheckCircle2 size={18} className="text-[#008278] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Headquarters:</strong> India (Kerala), operating globally across international time zones.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <CheckCircle2 size={18} className="text-[#008278] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Core Frameworks:</strong> Next.js 15+, React 19, Three.js, React Three Fiber, Tailwind CSS.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <CheckCircle2 size={18} className="text-[#008278] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Global Clients:</strong> Serving founders, businesses, and creators in India, US, UK, UAE, and Australia.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <CheckCircle2 size={18} className="text-[#008278] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Transparent Engagements:</strong> Clear scope, guaranteed timelines, and zero hidden platform lock-in.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Values */}
        <section className="py-14 border-t border-white/5" aria-label="Our Values">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#008278] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              Our Principles
            </p>
            <h2 className="font-space text-2xl sm:text-3xl font-black text-white">
              What Sets Abenzo Apart
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-[#008278]/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#008278]/10 text-[#008278] flex items-center justify-center mb-4">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="font-space font-bold text-white text-base mb-2">
                    {v.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Global Delivery Section */}
        <section className="py-12 border-t border-white/5 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#008278]/10 text-[#008278] mx-auto flex items-center justify-center mb-4">
              <Globe size={24} aria-hidden="true" />
            </div>
            <h2 className="font-space text-2xl font-black text-white mb-3">
              Serving Clients Locally and Globally
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              While rooted in Kerala and India, our remote-first workflow enables seamless asynchronous and real-time collaboration with clients across the United States, United Kingdom, UAE, and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['India', 'United States', 'United Kingdom', 'United Arab Emirates', 'Canada', 'Australia'].map((market) => (
                <span
                  key={market}
                  className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300"
                >
                  {market}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="mt-12 rounded-3xl border border-[#008278]/30 bg-gradient-to-br from-[#008278]/10 via-[#050a08] to-black p-8 sm:p-12 text-center">
          <h2 className="font-space text-2xl sm:text-3xl font-black text-white mb-4">
            Let&apos;s Build Something Extraordinary Together
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Tell us about your project or idea. We will respond promptly with insights, realistic timelines, and transparent quotes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppCTA
              label="Talk to Us on WhatsApp"
              source="about_page"
              variant="primary"
            />
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold hover:border-white/50 transition-all"
            >
              Browse All Services <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
