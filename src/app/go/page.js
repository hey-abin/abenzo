'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  Globe,
  ShoppingCart,
  Code2,
  Cpu,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Check,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import {
  PACKAGES,
  PACKAGES_DISCLAIMER,
  PACKAGES_HELP_MESSAGE,
  AD_LANDING_MESSAGE,
  WHATSAPP_REDIRECT_DELAY,
  getWhatsAppUrl,
  getPackageWhatsAppUrl,
} from '../lib/constants';
import { track } from '../lib/analytics';

const services = [
  {
    icon: <Globe className="text-[#008278]" size={22} aria-hidden="true" />,
    title: 'Business Websites',
    desc: 'Custom, high-converting websites designed to turn visitors into leads and paying customers.',
  },
  {
    icon: <ShoppingCart className="text-[#008278]" size={22} aria-hidden="true" />,
    title: 'E-Commerce Stores',
    desc: 'Seamless shopping experiences with fast checkout, payment gateway integrations, and inventory setup.',
  },
  {
    icon: <Code2 className="text-[#008278]" size={22} aria-hidden="true" />,
    title: 'Custom Web Apps',
    desc: 'Tailored SaaS platforms, internal management portals, and client dashboards built around your workflow.',
  },
  {
    icon: <Cpu className="text-[#008278]" size={22} aria-hidden="true" />,
    title: 'Software Solutions',
    desc: 'Bespoke automation, APIs, and custom software that solve real bottlenecks in your business.',
  },
];

const projects = [
  {
    title: 'PetLink',
    tagline: 'AI pet matchmaking & health ecosystem',
    tech: ['Next.js', 'Firebase', 'Gemini AI'],
    link: 'https://petlinkk.vercel.app',
  },
  {
    title: 'My Coco',
    tagline: 'Interactive 3D browser game experience',
    tech: ['Three.js', 'GSAP', 'Next.js'],
    link: 'https://mycocopet.vercel.app',
  },
];

const steps = [
  {
    num: '01',
    title: 'Tell Us Your Needs',
    desc: 'Drop a message on WhatsApp. Share your business, vision, and project goals.',
  },
  {
    num: '02',
    title: 'Get a Clear Proposal',
    desc: 'We share transparent scope, timeline, and exact pricing with no hidden costs.',
  },
  {
    num: '03',
    title: 'Design, Build & Launch',
    desc: 'We develop your project with regular progress updates, launch it, and support you.',
  },
];

function GoContent() {
  const searchParams = useSearchParams();

  const utm_source = searchParams.get('utm_source') || '';
  const utm_medium = searchParams.get('utm_medium') || '';
  const utm_campaign = searchParams.get('utm_campaign') || '';
  const utm_content = searchParams.get('utm_content') || '';
  const utm_term = searchParams.get('utm_term') || '';
  const fbclid = searchParams.get('fbclid') || '';

  const mainWaUrl = getWhatsAppUrl(AD_LANDING_MESSAGE);
  const helpWaUrl = getWhatsAppUrl(PACKAGES_HELP_MESSAGE);

  useEffect(() => {
    track.adLandingView({
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      fbclid,
    });

    const timer = setTimeout(() => {
      track.whatsappRedirect('ad_landing_auto');
      if (typeof window !== 'undefined') {
        window.location.assign(mainWaUrl);
      }
    }, WHATSAPP_REDIRECT_DELAY);

    return () => clearTimeout(timer);
  }, [utm_source, utm_medium, utm_campaign, utm_content, utm_term, fbclid, mainWaUrl]);

  const handleNavClick = () => {
    track.whatsappClick('ad_landing_nav_cta');
    if (typeof window !== 'undefined') {
      window.location.assign(mainWaUrl);
    }
  };

  const handlePackageClick = (pkg) => {
    track.packageClick(pkg.name);
    track.packageSelected(pkg.name);
    track.whatsappClick(`ad_landing_pkg_${pkg.id}`);
    const url = getPackageWhatsAppUrl(pkg);
    if (typeof window !== 'undefined') {
      window.location.assign(url);
    }
  };

  const handleHelpClick = () => {
    track.whatsappClick('ad_landing_help_cta');
    if (typeof window !== 'undefined') {
      window.location.assign(helpWaUrl);
    }
  };

  const handleBottomCtaClick = () => {
    track.whatsappClick('ad_landing_bottom_cta');
    if (typeof window !== 'undefined') {
      window.location.assign(mainWaUrl);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#008278] selection:text-white">
      {/* ─── Top Sticky Nav ─── */}
      <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 py-3.5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="inline-block" aria-label="Abenzo Home">
            <span className="font-space text-2xl font-black tracking-tight text-white">
              Abenzo<span className="text-[#008278]">.</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden sm:inline-flex text-xs font-semibold text-gray-400 hover:text-white transition-colors"
            >
              Full Website
            </Link>
            <a
              href={mainWaUrl}
              onClick={handleNavClick}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#008278] hover:bg-[#009b8f] text-white text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,130,120,0.3)] active:scale-95"
            >
              <MessageCircle size={14} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* ─── SECTION 1: PACKAGES & PRICING (OPENS FIRST) ─── */}
        <section id="packages" className="mb-16 sm:mb-24 scroll-mt-14" aria-labelledby="packages-heading">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#008278]/15 border border-[#008278]/40 text-[#00c2b2] text-[11px] font-bold uppercase tracking-widest mb-3">
              <Sparkles size={12} />
              <span>Transparent Pricing</span>
            </div>
            <h1 id="packages-heading" className="font-space text-3xl sm:text-5xl font-black text-white tracking-tight">
              Packages Built for Growth
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-2.5">
              Clear starting points with zero surprises. Choose a package to discuss your requirements directly on WhatsApp.
            </p>
          </div>

          {/* Package Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6">
            {PACKAGES.map((pkg) => {
              const waUrl = getPackageWhatsAppUrl(pkg);
              return (
                <div
                  key={pkg.id}
                  className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between border transition-all ${
                    pkg.highlighted
                      ? 'bg-gradient-to-b from-[#008278]/25 via-[#008278]/10 to-transparent border-[#008278] shadow-[0_0_30px_rgba(0,130,120,0.25)]'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xl">{pkg.emoji}</span>
                      {pkg.highlighted && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#008278] text-white uppercase tracking-wider">
                          Popular
                        </span>
                      )}
                      {pkg.isCustom && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-gray-300 uppercase tracking-wider">
                          Tailored
                        </span>
                      )}
                    </div>

                    <h2 className="font-space text-xl font-bold text-white mb-1">
                      {pkg.name}
                    </h2>
                    <p className="text-gray-400 text-xs mb-4 min-h-[32px] leading-relaxed">
                      {pkg.bestFor}
                    </p>

                    <div className="pb-4 mb-4 border-b border-white/10">
                      <p className="text-[10px] uppercase font-semibold text-gray-400">Starting from</p>
                      <p className="font-space text-2xl font-black text-white mt-0.5">
                        {pkg.priceDisplay}
                      </p>
                    </div>

                    <ul className="space-y-2 mb-6 text-xs text-gray-300">
                      {pkg.features.slice(0, 5).map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check size={14} className="text-[#008278] mt-0.5 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={waUrl}
                    onClick={(e) => handlePackageClick(pkg, e)}
                    className={`w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-full text-xs font-bold transition-all active:scale-95 cursor-pointer ${
                      pkg.highlighted
                        ? 'bg-[#008278] hover:bg-[#009b8f] text-white shadow-[0_0_15px_rgba(0,130,120,0.4)]'
                        : 'border border-white/20 hover:border-white/50 text-white bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <MessageCircle size={14} />
                    <span>{pkg.isCustom ? 'Discuss Project' : `Get ${pkg.name}`}</span>
                  </a>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-gray-500 text-center mb-8">
            *{PACKAGES_DISCLAIMER}
          </p>

          {/* Undecided Help Box */}
          <div className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center max-w-xl mx-auto">
            <div className="w-10 h-10 rounded-full bg-[#008278]/20 flex items-center justify-center mx-auto mb-3 text-[#008278]">
              <HelpCircle size={20} />
            </div>
            <h3 className="font-space text-base sm:text-lg font-bold text-white mb-1.5">
              Not sure which package fits your needs?
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-4">
              Chat directly with our team. We&apos;ll analyze your goals and recommend the exact scope you need.
            </p>
            <a
              href={helpWaUrl}
              onClick={handleHelpClick}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs hover:bg-gray-100 transition-all active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.2)] cursor-pointer"
            >
              <MessageCircle size={15} className="text-[#008278]" />
              <span>Chat Directly on WhatsApp</span>
            </a>
          </div>
        </section>

        {/* ─── SECTION 2: WHAT WE DO (CORE SERVICES) ─── */}
        <section className="mb-16 sm:mb-24" aria-labelledby="services-heading">
          <div className="text-center mb-8">
            <p className="text-[#008278] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              What We Do
            </p>
            <h2 id="services-heading" className="font-space text-2xl sm:text-4xl font-black text-white">
              Websites & Software Built to Grow
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
              Whether launching a new brand or modernizing your business infrastructure, we have you covered.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#008278]/15 border border-[#008278]/30 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="font-space text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── SECTION 3: RECENT WORK ─── */}
        <section className="mb-16 sm:mb-24" aria-labelledby="work-heading">
          <div className="text-center mb-8">
            <p className="text-[#008278] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              Proof of Work
            </p>
            <h2 id="work-heading" className="font-space text-2xl sm:text-4xl font-black text-white">
              Recent Projects
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((proj) => (
              <div
                key={proj.title}
                className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-space text-xl font-bold text-white mb-1.5">
                    {proj.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {proj.tagline}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full border border-white/10 text-gray-400 bg-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track.portfolioClick(proj.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00c2b2] hover:text-white transition-colors"
                >
                  <span>Preview Live Project</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ─── SECTION 4: SIMPLE PROCESS ─── */}
        <section className="mb-16 sm:mb-24" aria-labelledby="process-heading">
          <div className="text-center mb-8">
            <p className="text-[#008278] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              Simple Process
            </p>
            <h2 id="process-heading" className="font-space text-2xl sm:text-4xl font-black text-white">
              How It Works
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {steps.map((st) => (
              <div
                key={st.num}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
              >
                <div className="w-12 h-12 rounded-xl border border-[#008278]/40 bg-[#008278]/10 flex items-center justify-center mb-4">
                  <span className="font-space font-black text-[#008278] text-lg">{st.num}</span>
                </div>
                <h3 className="font-space font-bold text-white text-base mb-1.5">
                  {st.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── SECTION 5: FINAL CALL TO ACTION ─── */}
        <section className="p-8 sm:p-12 rounded-3xl border border-[#008278]/40 bg-gradient-to-b from-[#008278]/20 via-[#008278]/5 to-transparent text-center relative overflow-hidden mb-12 shadow-[0_0_50px_rgba(0,130,120,0.15)]">
          <h2 className="font-space text-2xl sm:text-4xl font-black text-white mb-3">
            Ready to Build Your Project?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto mb-6">
            Let&apos;s talk about your requirements on WhatsApp. No obligation, no hard sell — just clear advice and quotes.
          </p>
          <a
            href={mainWaUrl}
            onClick={handleBottomCtaClick}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#008278] hover:bg-[#009b8f] text-white font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,130,120,0.5)] transition-all active:scale-95 cursor-pointer"
          >
            <MessageCircle size={18} />
            <span>Chat on WhatsApp Now</span>
          </a>
          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-400">
            <ShieldCheck size={14} className="text-[#008278]" />
            <span>Official Abenzo Business Chat • Fast Response</span>
          </div>
        </section>

        {/* ─── Minimal Footer ─── */}
        <footer className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Abenzo. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-white transition-colors underline underline-offset-4">
              Explore Full Website →
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default function GoPage() {
  return (
    <main className="bg-black min-h-screen">
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="flex items-center gap-2 text-sm text-[#008278]">
              <div className="w-4 h-4 border-2 border-[#008278] border-t-transparent rounded-full animate-spin" />
              <span>Loading Abenzo...</span>
            </div>
          </div>
        }
      >
        <GoContent />
      </Suspense>
    </main>
  );
}
