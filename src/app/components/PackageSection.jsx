'use client';

import { motion } from 'framer-motion';
import { MessageCircle, HelpCircle } from 'lucide-react';
import { PACKAGES, PACKAGES_DISCLAIMER, PACKAGES_HELP_MESSAGE, getWhatsAppUrl } from '../lib/constants';
import { track } from '../lib/analytics';
import PackageCard from './PackageCard';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function PackageSection() {
  const helpWhatsAppUrl = getWhatsAppUrl(PACKAGES_HELP_MESSAGE);

  const handleHelpClick = () => {
    track.whatsappClick('packages_help_direct');
  };

  return (
    <section
      id="packages"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-abenzo-dark relative z-10"
      aria-label="Pricing Packages"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {/* Section Header */}
          <motion.p
            variants={fadeUp}
            className="text-[#008278] text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center"
          >
            Transparent Pricing
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-space text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-center text-white"
          >
            Packages Built for <span className="text-[#008278]">Every Growth Stage</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-gray-400 text-base sm:text-lg text-center max-w-2xl mx-auto mb-14"
          >
            Clear starting prices, no hidden surprises. Pick a package below to discuss your project directly with our team.
          </motion.p>

          {/* Packages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-10">
            {PACKAGES.map((pkg) => (
              <motion.div key={pkg.id} variants={fadeUp} className="flex">
                <PackageCard pkg={pkg} />
              </motion.div>
            ))}
          </div>

          {/* Pricing Disclaimer */}
          <motion.div variants={fadeUp} className="text-center mb-12">
            <p className="text-xs text-gray-500 max-w-xl mx-auto leading-relaxed">
              *{PACKAGES_DISCLAIMER}
            </p>
          </motion.div>

          {/* Direct WhatsApp Help Section */}
          <motion.div
            variants={fadeUp}
            className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm text-center relative overflow-hidden"
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(0,130,120,0.12) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#008278]/20 border border-[#008278]/40 flex items-center justify-center mx-auto mb-4 text-[#008278]">
                <HelpCircle size={22} />
              </div>
              <h3 className="font-space text-xl sm:text-2xl font-bold text-white mb-2">
                Not sure which package you need?
              </h3>
              <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
                Talk to us and we&apos;ll help you choose the right solution for your business and budget.
              </p>
              <a
                href={helpWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleHelpClick}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black hover:bg-gray-100 font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(0,130,120,0.3)] active:scale-95"
                aria-label="Chat Directly on WhatsApp for package guidance"
              >
                <MessageCircle size={18} className="text-[#008278]" />
                Chat Directly on WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
