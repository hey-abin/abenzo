'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { CONTACT } from '../lib/constants';
import { track } from '../lib/analytics';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Work',     href: '#work' },
  { name: 'How It Works', href: '#process' },
  { name: 'FAQ',      href: '#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleWaClick = () => {
    track.whatsappClick('navbar');
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-6" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="relative z-50" aria-label="Abenzo — Home">
          <span className="font-space text-2xl sm:text-3xl font-extrabold tracking-tighter text-white">
            Abenzo<span className="text-[#008278]">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div
          className="hidden md:flex items-center bg-white/5 backdrop-blur-md px-1 py-1 rounded-full border border-white/10 relative"
          role="list"
        >
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              role="listitem"
              className="relative px-4 py-2 text-sm font-medium transition-colors"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span
                className={`relative z-10 transition-colors duration-200 ${
                  hoveredIndex === index ? 'text-white' : 'text-gray-400'
                }`}
              >
                {link.name}
              </span>
              {hoveredIndex === index && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-[#008278] rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href={CONTACT.whatsappFull}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track.startProjectClick('navbar')}
            className="group relative inline-flex items-center gap-2 justify-center px-6 py-2.5 rounded-full overflow-hidden bg-white text-black font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,130,120,0.4)] transition-all"
            aria-label="Start a project on WhatsApp"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-1.5">
              <MessageCircle size={14} />
              Let&apos;s Talk
            </span>
            <div className="absolute inset-0 bg-[#008278] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white z-50 p-1"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 bg-[#050a08]/95 backdrop-blur-xl border border-white/10 p-6 rounded-2xl md:hidden shadow-2xl flex flex-col gap-4 text-center z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-gray-300 hover:text-[#008278] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}

            <div className="h-px bg-white/10 my-1" />

            {/* WhatsApp CTA in mobile menu */}
            <a
              href={CONTACT.whatsappFull}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWaClick}
              className="flex items-center justify-center gap-2 bg-[#008278] text-white font-bold py-3 px-6 rounded-full text-sm"
              aria-label="Start your project on WhatsApp"
            >
              <MessageCircle size={16} />
              Start Your Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}