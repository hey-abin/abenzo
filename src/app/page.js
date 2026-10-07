'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, Globe, Code2, ShoppingCart, Cpu,
  PenTool, RefreshCcw, Zap, Search, FileCode, LifeBuoy,
  CheckCircle2, Mail, Instagram, ChevronDown, ChevronUp,
  MessageCircle, Monitor, Smartphone, Shield, HeadphonesIcon,
} from 'lucide-react';
import { useState } from 'react';
import { CONTACT } from './lib/constants';
import { track } from './lib/analytics';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppCTA from './components/WhatsAppCTA';
import PackageSection from './components/PackageSection';

// Lazy-load heavy components so the first paint is fast
const Scene = dynamic(() => import('./components/Scene'), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          'radial-gradient(ellipse at center, rgba(0,130,120,0.10) 0%, transparent 70%)',
      }}
      aria-hidden="true"
    />
  ),
});
const MouseFollower = dynamic(() => import('./components/MouseFollower'), { ssr: false });
const ClickRipple   = dynamic(() => import('./components/ClickRipple'),   { ssr: false });

// ─── Fade-in animation helper ─────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// ─── DATA ─────────────────────────────────────────────────

const services = [
  {
    icon: <Globe aria-hidden="true" />,
    title: 'Custom Web Development',
    desc: 'Professional websites that make a strong first impression and turn visitors into customers.',
    href: '/services/web-development',
  },
  {
    icon: <Zap aria-hidden="true" />,
    title: '3D & Interactive Web Experiences',
    desc: 'Immersive 3D websites, WebGL shaders and real-time graphics powered by Three.js and React Three Fiber.',
    href: '/services/3d-web-development',
  },
  {
    icon: <Code2 aria-hidden="true" />,
    title: 'Next.js & React Engineering',
    desc: 'Enterprise App Router architecture, Server Components, SSR, and dynamic user interfaces.',
    href: '/services/nextjs-development',
  },
  {
    icon: <ShoppingCart aria-hidden="true" />,
    title: 'E-Commerce & Shopify Stores',
    desc: 'Online stores with seamless checkout, payment gateway integration and inventory management.',
    href: '/services/ecommerce-development',
  },
  {
    icon: <Cpu aria-hidden="true" />,
    title: 'Custom Software & SaaS Platforms',
    desc: 'Bespoke web applications, MVPs, client dashboards and automation tailored to your workflows.',
    href: '/services/saas-development',
  },
  {
    icon: <PenTool aria-hidden="true" />,
    title: 'UI/UX Design & Website Redesign',
    desc: 'Modern design systems, intuitive user journeys, and conversion-focused redesigns for outdated sites.',
    href: '/services/ui-ux-design',
  },
];

const projects = [
  {
    title: 'PetLink',
    tagline: 'AI-powered pet matchmaking & health ecosystem.',
    description:
      'A platform connecting pet owners for adoption, matchmaking and health tracking — powered by AI and real-time features.',
    tech: ['Next.js', 'Firebase', 'MongoDB', 'Gemini AI', 'Cloudinary'],
    features: ['Real-time chat', 'AI certificate analysis', 'Pet health tracking'],
    link: 'https://petlinkk.vercel.app',
    color: 'from-blue-900/40 to-blue-950/20',
    accentColor: 'text-blue-400',
    borderColor: 'border-blue-500/20',
  },
  {
    title: 'My Coco',
    tagline: 'An immersive 3D browser game experience.',
    description:
      'A playful, interactive 3D game built for the web — demonstrating real-time graphics and smooth gameplay in the browser.',
    tech: ['React Three Fiber', 'Three.js', 'GSAP', 'Next.js'],
    features: ['3D gameplay', 'Real-time physics', 'Optimised for web'],
    link: 'https://mycocopet.vercel.app',
    color: 'from-purple-900/40 to-purple-950/20',
    accentColor: 'text-purple-400',
    borderColor: 'border-purple-500/20',
  },
];

const whyAbenzo = [
  {
    icon: <Monitor size={22} aria-hidden="true" />,
    title: 'Modern, High-Performance Technology',
    desc: 'We build with Next.js, React and modern tools — so your site is fast, reliable and future-proof.',
  },
  {
    icon: <Code2 size={22} aria-hidden="true" />,
    title: 'Custom Solutions, Not Templates',
    desc: 'Every project is built from scratch to match your exact requirements — no one-size-fits-all templates.',
  },
  {
    icon: <Smartphone size={22} aria-hidden="true" />,
    title: 'Mobile-First & Responsive',
    desc: 'Your website will look and work perfectly on every screen — from smartphones to large monitors.',
  },
  {
    icon: <Search size={22} aria-hidden="true" />,
    title: 'SEO-Friendly Development',
    desc: 'Clean code, fast load times and proper structure give your site the best chance to rank on Google.',
  },
  {
    icon: <Shield size={22} aria-hidden="true" />,
    title: 'Clear Communication',
    desc: 'You will always know what is being built and when. No jargon. No surprises.',
  },
  {
    icon: <HeadphonesIcon size={22} aria-hidden="true" />,
    title: 'Post-Launch Support',
    desc: 'We do not disappear after launch. We offer ongoing support to keep your product running smoothly.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Tell Us Your Idea',
    desc: 'Reach out on WhatsApp or email. Tell us about your business, your goals and what you want to build.',
  },
  {
    num: '02',
    title: 'Get a Clear Proposal',
    desc: 'We send you a straightforward proposal with a scope of work, timeline and pricing — no hidden costs.',
  },
  {
    num: '03',
    title: 'We Design & Build',
    desc: 'Our team designs and develops your project with regular updates so you stay in the loop throughout.',
  },
  {
    num: '04',
    title: 'Launch & Support',
    desc: 'We launch your project and stay available for improvements, updates and support after go-live.',
  },
];

const faqs = [
  {
    q: 'How much does a website cost?',
    a: 'Every project is unique, so pricing depends on the scope, features and complexity. Reach out on WhatsApp and we will give you a clear estimate based on your specific needs.',
  },
  {
    q: 'How long does a website take to build?',
    a: 'A standard business website typically takes 1–3 weeks. A custom web application or e-commerce store may take 4–8 weeks depending on features. We will give you a clear timeline before starting.',
  },
  {
    q: 'Do you build custom software?',
    a: 'Yes. We build custom web-based software — dashboards, booking systems, management tools, portals and more — tailored to your business processes.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Absolutely. If your current website feels outdated or is not performing well, we can redesign it with a modern look and improved performance while keeping what works.',
  },
  {
    q: 'Do you work with businesses outside India?',
    a: 'Yes. We work with clients worldwide. Most of our communication is done via WhatsApp and email, making it easy to collaborate across time zones.',
  },
  {
    q: 'Do you provide maintenance after launch?',
    a: 'Yes. We offer ongoing maintenance and support packages to keep your website updated, secure and running smoothly after launch.',
  },
  {
    q: 'Can you integrate payment gateways?',
    a: 'Yes. We can integrate Razorpay, Stripe, PayPal and other payment systems depending on your business and target market.',
  },
  {
    q: 'Can you build e-commerce websites?',
    a: 'Yes. We build custom e-commerce stores with product management, cart, checkout, payment integration and order tracking.',
  },
];

// ─── FAQ Item Component ────────────────────────────────────
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-white hover:bg-white/5 transition-colors"
        aria-expanded={open}
      >
        <span className="text-sm sm:text-base">{q}</span>
        {open
          ? <ChevronUp size={18} className="text-[#008278] flex-shrink-0" aria-hidden="true" />
          : <ChevronDown size={18} className="text-gray-500 flex-shrink-0" aria-hidden="true" />
        }
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────
export default function Home() {
  return (
    <main className="bg-abenzo-dark min-h-screen text-white selection:bg-[#008278] selection:text-white">
      <Navbar />
      <MouseFollower />
      <ClickRipple />

      {/* ════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen w-full flex items-center justify-center"
        aria-label="Hero"
      >
        {/* 3D particle background */}
        <Scene />

        {/* Gradient overlay for text legibility */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'radial-gradient(ellipse at center bottom, rgba(5,10,8,0.5) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        <div className="z-10 text-center px-4 max-w-5xl mx-auto pt-24 sm:pt-0 pointer-events-none">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {/* Eyebrow */}
            <motion.p
              variants={fadeUp}
              className="text-[#008278] font-bold tracking-[0.2em] text-[10px] sm:text-xs uppercase mb-5 sm:mb-6"
            >
              Web Development • 3D Experiences • Next.js &amp; React
            </motion.p>

            {/* H1 — the primary message */}
            <motion.h1
              variants={fadeUp}
              className="font-space text-4xl sm:text-5xl md:text-7xl font-black mb-5 sm:mb-6 leading-tight tracking-tight text-white"
            >
              Websites &amp; Software Built to{' '}
              <span className="text-[#008278]">Grow Your Business</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
            >
              We build high-performance Next.js websites, interactive 3D digital
              experiences and custom software that help businesses attract customers,
              build trust and grow online.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pointer-events-auto"
            >
              <WhatsAppCTA
                label="Start Your Project"
                source="hero"
                variant="primary"
                className="w-full sm:w-auto"
              />
              <a
                href="#work"
                onClick={() => track.portfolioClick('hero_cta')}
                className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:border-white/50 transition-all w-full sm:w-auto justify-center active:scale-95"
              >
                View Our Work <ArrowRight size={16} aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Brand name — visual, not the H1 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[2] pointer-events-none"
          aria-hidden="true"
        >
          <p className="font-space text-[60px] sm:text-[100px] md:text-[160px] font-black text-white/[0.03] select-none tracking-tighter pointer-events-none">
            Abenzo
          </p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════
          SERVICES SECTION
      ════════════════════════════════════════════ */}
      <section
        id="services"
        className="py-20 sm:py-28 px-4 sm:px-6 bg-abenzo-dark relative z-10"
        aria-label="Services"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.p variants={fadeUp} className="text-[#008278] text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">
              What We Do
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-space text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-center"
            >
              Services That Drive Results
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-base sm:text-lg text-center max-w-2xl mx-auto mb-14 sm:mb-16"
            >
              From your first website to complex custom software, we build
              digital products that help your business grow.
            </motion.p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {services.map((s) => (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="p-6 sm:p-8 border border-white/5 bg-white/[0.03] rounded-2xl hover:border-[#008278]/30 hover:bg-white/[0.05] transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[#008278] mb-4 group-hover:scale-110 transition-transform duration-300">
                      {s.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-2 font-space text-white">
                      <Link href={s.href} className="hover:text-[#008278] transition-colors">
                        {s.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                  </div>
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#008278] hover:text-[#00a396] transition-colors pt-2"
                  >
                    Learn More <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* View all services CTA */}
            <motion.div variants={fadeUp} className="text-center mt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all"
              >
                Explore All Specialized Services <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </motion.div>

            {/* WhatsApp CTA below services */}
            <motion.div variants={fadeUp} className="text-center mt-12 sm:mt-16">
              <p className="text-gray-400 text-sm mb-4">
                Not sure which service fits your needs?
              </p>
              <WhatsAppCTA
                label="Talk to Us — It's Free"
                source="services_section"
                variant="outline"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PACKAGES
      ════════════════════════════════════════════ */}
      <PackageSection />

      {/* ════════════════════════════════════════════
          WHY ABENZO
      ════════════════════════════════════════════ */}
      <section
        id="why"
        className="py-20 sm:py-28 px-4 sm:px-6 bg-black relative z-10"
        aria-label="Why choose Abenzo"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.p variants={fadeUp} className="text-[#008278] text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">
              Why Abenzo
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-space text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-center"
            >
              Built for Your Business, <br className="hidden sm:block" />
              <span className="text-[#008278]">Not Just Your Screen</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-base sm:text-lg text-center max-w-xl mx-auto mb-14"
            >
              Here is what working with Abenzo actually looks like.
            </motion.p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {whyAbenzo.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="flex gap-4 p-6 border border-white/5 bg-white/[0.03] rounded-2xl"
                >
                  <div className="text-[#008278] mt-0.5 flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SELECTED WORK
      ════════════════════════════════════════════ */}
      <section
        id="work"
        className="py-20 sm:py-28 px-4 sm:px-6 bg-abenzo-dark relative z-10"
        aria-label="Selected work"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} className="text-[#008278] text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">
              Portfolio
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-space text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-center"
            >
              Selected Work
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-base text-center max-w-xl mx-auto mb-14"
            >
              A look at what we have built.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {projects.map((project) => (
                <motion.article
                  key={project.title}
                  variants={fadeUp}
                  className={`group relative rounded-2xl sm:rounded-3xl border ${project.borderColor} bg-gradient-to-br ${project.color} p-6 sm:p-8 overflow-hidden hover:border-opacity-60 transition-all duration-300 flex flex-col`}
                  aria-label={`${project.title}: ${project.tagline}`}
                >
                  {/* Glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(ellipse at top right, rgba(0,130,120,0.08) 0%, transparent 70%)',
                    }}
                    aria-hidden="true"
                  />

                  <div className="flex-1">
                    <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${project.accentColor}`}>
                      {project.tagline}
                    </p>
                    <h3 className="font-space text-2xl sm:text-3xl font-black text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-1.5 mb-6" aria-label="Key features">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle2 size={14} className="text-[#008278] flex-shrink-0" aria-hidden="true" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-7" aria-label="Technologies used">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/10 text-gray-400 bg-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Project */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track.portfolioClick(project.title)}
                    className="inline-flex items-center gap-2 border border-white/20 hover:border-white/60 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-white/5 self-start active:scale-95"
                    aria-label={`View ${project.title} project — opens in new tab`}
                  >
                    View Project <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          HOW IT WORKS
      ════════════════════════════════════════════ */}
      <section
        id="process"
        className="py-20 sm:py-28 px-4 sm:px-6 bg-black relative z-10"
        aria-label="How our process works"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} className="text-[#008278] text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">
              The Process
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-space text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-center"
            >
              How It Works
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-base text-center max-w-xl mx-auto mb-14"
            >
              Getting started is simple. Here is what to expect when you work
              with Abenzo.
            </motion.p>

            <div className="relative">
              {/* Connector line — desktop only */}
              <div
                className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#008278]/30 to-transparent"
                aria-hidden="true"
              />

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    variants={fadeUp}
                    custom={i}
                    className="relative flex flex-col items-center text-center md:items-start md:text-left"
                  >
                    <div className="w-20 h-20 rounded-full border border-[#008278]/40 bg-[#008278]/10 flex items-center justify-center mb-5 relative z-10">
                      <span className="font-space text-xl font-black text-[#008278]">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="font-space font-bold text-white text-base sm:text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FAQ
      ════════════════════════════════════════════ */}
      <section
        id="faq"
        className="py-20 sm:py-28 px-4 sm:px-6 bg-abenzo-dark relative z-10"
        aria-label="Frequently asked questions"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a,
                },
              })),
            }),
          }}
        />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          >
            <motion.p variants={fadeUp} className="text-[#008278] text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">
              FAQ
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-space text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-center"
            >
              Common Questions
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-base text-center mb-12"
            >
              Straight answers to the things clients usually ask.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-3">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FINAL CTA — CONTACT
      ════════════════════════════════════════════ */}
      <section
        id="contact"
        className="py-24 sm:py-32 px-4 sm:px-6 bg-black relative z-10 overflow-hidden"
        aria-label="Contact and start a project"
      >
        {/* Background glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#008278] opacity-5 blur-[120px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} className="text-[#008278] text-xs font-bold uppercase tracking-[0.2em] mb-4 text-center">
              Get In Touch
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-space text-4xl sm:text-5xl md:text-6xl font-black mb-5 text-center leading-tight"
            >
              Have a Project in Mind?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-base sm:text-xl max-w-2xl mx-auto text-center mb-4"
            >
              Let&apos;s turn your idea into something people remember.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto text-center mb-12"
            >
              Tell us what you&apos;re building and we will discuss the best
              way to bring it to life.
            </motion.p>

            {/* Primary CTA */}
            <motion.div variants={fadeUp} className="flex justify-center mb-10">
              <WhatsAppCTA
                label="Start a Project on WhatsApp"
                source="contact_section"
                variant="primary"
                className="text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5"
              />
            </motion.div>

            {/* Secondary contact options */}
            <motion.div
              variants={fadeUp}
              className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto"
            >
              <a
                href={`mailto:${CONTACT.email}`}
                onClick={() => track.emailClick('contact_section')}
                className="group flex flex-col items-center justify-center p-6 border border-white/5 rounded-2xl bg-white/[0.03] hover:border-[#008278]/30 hover:bg-white/[0.06] transition-all"
                aria-label={`Send email to ${CONTACT.email}`}
              >
                <Mail size={28} className="text-gray-400 group-hover:text-[#008278] mb-2 transition-colors" aria-hidden="true" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                  Email
                </span>
                <span className="text-sm text-gray-300 break-all text-center">
                  {CONTACT.email}
                </span>
              </a>

              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track.instagramClick('contact_section')}
                className="group flex flex-col items-center justify-center p-6 border border-white/5 rounded-2xl bg-white/[0.03] hover:border-pink-500/30 hover:bg-pink-500/5 transition-all"
                aria-label="Visit Abenzo on Instagram"
              >
                <Instagram size={28} className="text-gray-400 group-hover:text-pink-400 mb-2 transition-colors" aria-hidden="true" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                  Instagram
                </span>
                <span className="text-sm text-gray-300">{CONTACT.instagramHandle}</span>
              </a>
            </motion.div>

            {/* Availability badge */}
            <motion.div variants={fadeUp} className="flex justify-center mt-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/20 text-gray-400 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                Available for new projects — worldwide
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}