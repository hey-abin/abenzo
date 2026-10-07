'use client';

import Link from 'next/link';
import { MessageCircle, Mail, Instagram, ArrowUpRight } from 'lucide-react';
import { CONTACT, SITE_URL } from '../lib/constants';
import { track } from '../lib/analytics';

const serviceLinks = [
  { name: 'Custom Web Development', href: '/services/web-development' },
  { name: '3D Web Development & Three.js', href: '/services/3d-web-development' },
  { name: 'Next.js Development', href: '/services/nextjs-development' },
  { name: 'React.js Development', href: '/services/react-development' },
  { name: 'UI/UX Design & Redesign', href: '/services/ui-ux-design' },
  { name: 'E-Commerce Development', href: '/services/ecommerce-development' },
  { name: 'Shopify Development', href: '/services/shopify-development' },
  { name: 'SaaS & Web Applications', href: '/services/saas-development' },
];

const companyLinks = [
  { name: 'All Services', href: '/services' },
  { name: 'Selected Work & Case Studies', href: '/work' },
  { name: 'About Abenzo', href: '/about' },
  { name: 'Packages & Pricing', href: '/#packages' },
  { name: 'Development Process', href: '/#process' },
  { name: 'Frequently Asked Questions', href: '/#faq' },
  { name: 'Contact & Quotes', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#050a08] border-t border-white/5 text-gray-400 text-sm relative z-10" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block" aria-label="Abenzo — Return to homepage">
              <span className="font-space text-2xl font-black text-white tracking-tight">
                Abenzo<span className="text-[#008278]">.</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Premium web development and 3D digital experience agency. We build fast, high-converting Next.js websites, immersive Three.js experiences, and custom web software for startups and established businesses in India and worldwide.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs text-gray-300">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                Accepting new projects worldwide
              </span>
            </div>

            {/* Social & Contact */}
            <div className="flex items-center gap-4 pt-3">
              <a
                href={CONTACT.whatsappFull}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track.whatsappClick('footer_social')}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#008278] hover:border-[#008278]/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                onClick={() => track.emailClick('footer_social')}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#008278] hover:border-[#008278]/40 transition-colors"
                aria-label="Email Abenzo"
              >
                <Mail size={16} aria-hidden="true" />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track.instagramClick('footer_social')}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <p className="font-space font-bold text-white text-xs uppercase tracking-[0.2em] mb-4">
              Services
            </p>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-[#008278] transition-colors text-xs sm:text-sm inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Agency Navigation */}
          <div>
            <p className="font-space font-bold text-white text-xs uppercase tracking-[0.2em] mb-4">
              Agency
            </p>
            <ul className="space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[#008278] transition-colors text-xs sm:text-sm inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operations & Discovery */}
          <div>
            <p className="font-space font-bold text-white text-xs uppercase tracking-[0.2em] mb-4">
              Discover &amp; Regional
            </p>
            <p className="text-xs text-gray-500 leading-relaxed mb-3">
              Headquartered in India, partnering with clients across Kerala, Kochi, Bangalore, Mumbai, and globally across the US, UK, and UAE.
            </p>
            <div className="space-y-2 pt-2 text-xs">
              <Link href="/services/web-development" className="block text-gray-400 hover:text-white transition-colors">
                • Web Development in India
              </Link>
              <Link href="/services/3d-web-development" className="block text-gray-400 hover:text-white transition-colors">
                • Interactive 3D Web Agency
              </Link>
              <Link href="/services/nextjs-development" className="block text-gray-400 hover:text-white transition-colors">
                • Next.js Specialists
              </Link>
              <div className="pt-3 border-t border-white/5 space-y-1 text-[11px] text-gray-500">
                <a href="/llms.txt" className="hover:text-gray-300 inline-flex items-center gap-1">
                  llms.txt <ArrowUpRight size={10} aria-hidden="true" />
                </a>
                <span className="mx-1.5">•</span>
                <a href="/agents.txt" className="hover:text-gray-300 inline-flex items-center gap-1">
                  agents.txt <ArrowUpRight size={10} aria-hidden="true" />
                </a>
                <span className="mx-1.5">•</span>
                <a href="/sitemap.xml" className="hover:text-gray-300 inline-flex items-center gap-1">
                  sitemap <ArrowUpRight size={10} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Abenzo. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Project Inquiries
            </Link>
            <a
              href={CONTACT.whatsappFull}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track.whatsappClick('footer_bottom')}
              className="text-[#008278] hover:text-[#00a396] transition-colors inline-flex items-center gap-1"
            >
              <MessageCircle size={13} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
