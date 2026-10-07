import Link from 'next/link';
import {
  ExternalLink,
  CheckCircle2,
  Code2,
  Sparkles,
  ArrowRight,
  Layers,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { SITE_URL } from '../lib/constants';

export const metadata = {
  title: 'Selected Work & Web Development Case Studies',
  description:
    'Explore Abenzo’s featured work, including PetLink AI platform, My Coco 3D web experience, and custom digital systems built with Next.js and Three.js.',
  alternates: {
    canonical: `${SITE_URL}/work`,
  },
  openGraph: {
    title: 'Selected Work & Web Development Case Studies | Abenzo',
    description:
      'Featured digital products and web applications engineered by Abenzo using Next.js, React, Three.js, and modern cloud stacks.',
    url: `${SITE_URL}/work`,
    siteName: 'Abenzo',
  },
};

const featuredProjects = [
  {
    title: 'PetLink',
    tagline: 'AI-Powered Pet Matchmaking & Health Ecosystem',
    description:
      'A full-stack web platform connecting pet owners for adoption, matchmaking, and veterinary record keeping. Engineered with real-time communication and multimodal Gemini AI intelligence to parse health documentation and match profiles.',
    tech: ['Next.js', 'Firebase', 'MongoDB', 'Gemini AI', 'Cloudinary', 'Tailwind CSS'],
    features: [
      'Real-time live messaging and communication channels',
      'Multimodal AI health certificate verification and extraction',
      'Comprehensive pet health timeline and vaccination alerts',
      'Responsive, mobile-optimized interface with instant search',
    ],
    link: 'https://petlinkk.vercel.app',
    badge: 'Full-Stack Web App',
    color: 'from-blue-900/30 via-blue-950/20 to-black',
    borderColor: 'border-blue-500/20 hover:border-blue-500/50',
    accent: 'text-blue-400',
  },
  {
    title: 'My Coco',
    tagline: 'Immersive 3D Interactive Browser Game',
    description:
      'A playful, real-time 3D browser experience demonstrating GPU-accelerated graphics, physics simulations, and responsive camera choreographies running smoothly on web browsers across mobile and desktop devices.',
    tech: ['React Three Fiber', 'Three.js', 'GSAP', 'Next.js', 'WebGL', 'Tailwind CSS'],
    features: [
      'Real-time 3D rendering and physics engine in the browser',
      'Smooth 60 FPS performance tuning across varying GPU profiles',
      'Interactive touch and keyboard gameplay mechanics',
      'Lightweight asset budgeting with compressed 3D GLTF models',
    ],
    link: 'https://mycocopet.vercel.app',
    badge: '3D Web Experience',
    color: 'from-purple-900/30 via-purple-950/20 to-black',
    borderColor: 'border-purple-500/20 hover:border-purple-500/50',
    accent: 'text-purple-400',
  },
];

export default function WorkPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Abenzo Portfolio & Selected Work',
    url: `${SITE_URL}/work`,
    description:
      'Case studies and featured web applications engineered by Abenzo, including PetLink and My Coco.',
    publisher: {
      '@type': 'ProfessionalService',
      name: 'Abenzo',
      url: SITE_URL,
    },
  };

  return (
    <div className="bg-[#050a08] min-h-screen text-white selection:bg-[#008278] selection:text-white flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1 pt-32 pb-20 px-4 sm:px-6 max-w-6xl mx-auto w-full">
        <Breadcrumbs items={[{ name: 'Work' }]} />

        {/* Hero */}
        <section className="pt-6 pb-16 text-center max-w-3xl mx-auto">
          <p className="text-[#008278] font-bold tracking-[0.2em] text-xs uppercase mb-3">
            Portfolio &amp; Case Studies
          </p>
          <h1 className="font-space text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Crafted for Impact,{' '}
            <span className="text-[#008278]">Built for Performance</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Take a look at what we have engineered. Each project represents our dedication to clean code architecture, smooth interactions, and real-world utility.
          </p>
        </section>

        {/* Featured Projects Grid */}
        <div className="space-y-12 mb-20">
          {featuredProjects.map((project, idx) => (
            <article
              key={project.title}
              className={`rounded-3xl border ${project.borderColor} bg-gradient-to-br ${project.color} p-6 sm:p-10 transition-all duration-300 relative overflow-hidden`}
              aria-label={`${project.title}: ${project.tagline}`}
            >
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[#008278]">
                    {project.badge}
                  </span>
                  <span className={`text-xs font-semibold ${project.accent}`}>
                    {project.tagline}
                  </span>
                </div>

                <h2 className="font-space text-3xl sm:text-4xl font-black text-white mb-4">
                  {project.title}
                </h2>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key features */}
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                    Project Deliverables &amp; Highlights:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2.5">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 size={15} className="text-[#008278] flex-shrink-0" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 mb-8" aria-label="Technologies used">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-3 py-1 rounded-full border border-white/10 bg-black/40 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Live project button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black hover:bg-[#008278] hover:text-white px-6 py-3 rounded-full text-sm font-bold transition-all duration-300"
                  aria-label={`Open live demonstration of ${project.title} (opens in new tab)`}
                >
                  <span>Launch Live Project</span>
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Project Capabilities Overview */}
        <section className="py-14 border-t border-white/5" aria-label="Our Project Capabilities">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#008278] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              Capabilities
            </p>
            <h2 className="font-space text-2xl sm:text-3xl font-black text-white">
              What We Build for Our Clients
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <h3 className="font-space font-bold text-white text-base mb-2">
                Business &amp; Corporate Sites
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                Fast, responsive websites engineered with clean semantic code, high-converting copy layouts, and built-in technical SEO.
              </p>
              <Link href="/services/web-development" className="text-xs font-semibold text-[#008278] hover:underline inline-flex items-center gap-1">
                Web Development <ArrowRight size={12} />
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <h3 className="font-space font-bold text-white text-base mb-2">
                3D &amp; Interactive Web
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                WebGL and Three.js scenes, product configurators, and micro-animated digital storytelling that captivate visitors.
              </p>
              <Link href="/services/3d-web-development" className="text-xs font-semibold text-[#008278] hover:underline inline-flex items-center gap-1">
                3D Web Development <ArrowRight size={12} />
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <h3 className="font-space font-bold text-white text-base mb-2">
                SaaS &amp; Web Applications
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                Authenticated portals, booking systems, administrative dashboards, and custom business automation tools.
              </p>
              <Link href="/services/saas-development" className="text-xs font-semibold text-[#008278] hover:underline inline-flex items-center gap-1">
                SaaS Development <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 rounded-3xl border border-[#008278]/30 bg-gradient-to-br from-[#008278]/10 via-[#050a08] to-black p-8 sm:p-12 text-center">
          <h2 className="font-space text-2xl sm:text-4xl font-black text-white mb-4">
            Want to Build Your Next Success Story?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Tell us about your project vision. We provide straightforward scopes, realistic delivery timelines, and transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppCTA
              label="Discuss Your Project on WhatsApp"
              source="work_page"
              variant="primary"
            />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold hover:border-white/50 transition-all"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
