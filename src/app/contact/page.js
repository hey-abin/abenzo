import Link from 'next/link';
import {
  MessageCircle,
  Mail,
  Instagram,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import ServiceFAQ from '../components/ServiceFAQ';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { SITE_URL, CONTACT, PACKAGES } from '../lib/constants';

export const metadata = {
  title: 'Contact Us — Start Your Web Development Project',
  description:
    'Get in touch with Abenzo for web development, 3D websites, Next.js projects, or custom software. Fast response via WhatsApp or email with honest pricing.',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact Abenzo | Discuss Your Web Development Project',
    description:
      'Direct contact channels for Abenzo. Connect via WhatsApp or email to discuss custom web development, 3D experiences, or software requirements.',
    url: `${SITE_URL}/contact`,
    siteName: 'Abenzo',
  },
};

const contactFaqs = [
  {
    q: 'What is the fastest way to get a project estimate?',
    a: 'WhatsApp is our fastest channel. Send us a brief overview of what you want to build, any reference websites you like, and your target timeline. We typically reply within a few hours with initial thoughts and starting ranges.',
  },
  {
    q: 'Do you charge for initial project consultations?',
    a: 'No. Initial discovery conversations and preliminary proposals are completely free. We discuss your requirements and ensure we are the right fit before any commitments are made.',
  },
  {
    q: 'What details should I prepare before reaching out?',
    a: 'It helps to know your primary business goal (e.g. lead generation, brand awareness, e-commerce sales), approximate number of pages or features, any design references you admire, and your expected launch deadline.',
  },
  {
    q: 'How do you handle payments and milestones?',
    a: 'Projects are structured around clear milestones — typically an initial deposit upon project kickoff, milestone review checkpoints, and final balance due upon successful deployment and approval.',
  },
];

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Abenzo',
    url: `${SITE_URL}/contact`,
    description:
      'Contact Abenzo for custom web development, 3D digital experiences, Next.js engineering, and bespoke software solutions.',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: 'Abenzo',
      url: SITE_URL,
      telephone: '+91-8590814463',
      email: CONTACT.email,
      sameAs: [CONTACT.instagram, CONTACT.whatsapp],
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
        <Breadcrumbs items={[{ name: 'Contact' }]} />

        {/* Hero */}
        <section className="pt-6 pb-14 text-center max-w-3xl mx-auto">
          <p className="text-[#008278] font-bold tracking-[0.2em] text-xs uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="font-space text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Let&apos;s Discuss Your{' '}
            <span className="text-[#008278]">Next Project</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Have an idea for a new website, custom web application, or 3D digital experience? Reach out through any of our channels below for straightforward answers and honest quotes.
          </p>
        </section>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* WhatsApp Primary */}
          <div className="rounded-2xl border border-[#008278]/40 bg-[#008278]/5 p-7 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-3 right-3">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#008278] text-white">
                Fastest
              </span>
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#008278]/20 text-[#008278] flex items-center justify-center mb-5">
                <MessageCircle size={26} aria-hidden="true" />
              </div>
              <h2 className="font-space font-bold text-xl text-white mb-2">
                WhatsApp Chat
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                Direct communication with our engineering team. Perfect for quick inquiries, scope discussions, and audio notes.
              </p>
            </div>
            <a
              href={CONTACT.whatsappFull}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#008278] hover:bg-[#00a396] text-white py-3 px-5 rounded-full text-sm font-bold transition-colors w-full"
            >
              <MessageCircle size={16} />
              Open WhatsApp Chat
            </a>
          </div>

          {/* Email */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/5 text-gray-300 flex items-center justify-center mb-5">
                <Mail size={26} aria-hidden="true" />
              </div>
              <h2 className="font-space font-bold text-xl text-white mb-2">
                Direct Email
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                Best for sending formal project specifications, RFPs, design files, and detailed feature outlines.
              </p>
            </div>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white py-3 px-5 rounded-full text-sm font-semibold transition-all w-full"
            >
              <Mail size={16} />
              {CONTACT.email}
            </a>
          </div>

          {/* Instagram */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 flex flex-col justify-between hover:border-pink-500/30 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/5 text-gray-300 flex items-center justify-center mb-5">
                <Instagram size={26} aria-hidden="true" />
              </div>
              <h2 className="font-space font-bold text-xl text-white mb-2">
                Instagram Direct
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                Follow our work in progress, creative previews, and send direct messages on social.
              </p>
            </div>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-pink-500/50 text-white py-3 px-5 rounded-full text-sm font-semibold transition-all w-full"
            >
              <Instagram size={16} />
              {CONTACT.instagramHandle}
            </a>
          </div>
        </div>

        {/* Pricing Guide Summary */}
        <section className="py-12 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-[#008278] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              Transparent Starting Baselines
            </p>
            <h2 className="font-space text-2xl sm:text-3xl font-black text-white mb-3">
              Budget Guidelines at a Glance
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Every project is scoped to your exact functional specifications. Here is where our typical engagements start:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xl mb-1 block" aria-hidden="true">{pkg.emoji}</span>
                  <h3 className="font-space font-bold text-white text-base mb-1">{pkg.name}</h3>
                  <p className="text-[#008278] font-bold text-lg mb-2">{pkg.priceDisplay}</p>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4">{pkg.bestFor}</p>
                </div>
                <Link
                  href="/#packages"
                  className="text-xs font-semibold text-gray-300 hover:text-white inline-flex items-center gap-1"
                >
                  View Package Details <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Contact FAQs */}
        <ServiceFAQ
          faqs={contactFaqs}
          title="Frequently Asked Questions About Working With Us"
        />
      </main>

      <Footer />
    </div>
  );
}
