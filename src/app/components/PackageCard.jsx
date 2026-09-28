'use client';

import { Check, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { getPackageWhatsAppUrl } from '../lib/constants';
import { track } from '../lib/analytics';

export default function PackageCard({ pkg, compact = false, onSelect }) {
  const isHighlighted = pkg.highlighted;
  const isCustom = pkg.isCustom;
  const waUrl = getPackageWhatsAppUrl(pkg);

  const handleClick = (e) => {
    track.packageClick(pkg.name);
    track.packageSelected(pkg.name);
    if (onSelect) {
      onSelect(pkg, e);
    }
  };

  const getCtaLabel = () => {
    if (isCustom) return 'Discuss Your Project';
    return `Get ${pkg.name}`;
  };

  if (compact) {
    return (
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`group relative p-4 rounded-xl border text-left transition-all duration-300 block ${
          isHighlighted
            ? 'bg-[#008278]/15 border-[#008278]/60 shadow-[0_0_25px_rgba(0,130,120,0.25)] hover:border-[#008278]'
            : 'bg-white/[0.03] border-white/10 hover:border-white/25 hover:bg-white/[0.06]'
        }`}
      >
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-xs uppercase font-bold tracking-wider text-gray-300 flex items-center gap-1.5">
            <span>{pkg.emoji}</span> {pkg.name}
          </span>
          {isHighlighted && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#008278] text-white uppercase tracking-wider">
              Popular
            </span>
          )}
        </div>
        <div className="flex items-baseline justify-between">
          <span className="font-space text-xl font-bold text-white group-hover:text-[#00c2b2] transition-colors">
            {pkg.priceShort || pkg.priceDisplay}
          </span>
          <span className="text-[11px] text-gray-400 group-hover:text-white flex items-center gap-1">
            Inquire <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </a>
    );
  }

  return (
    <div
      className={`w-full h-full group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
        isHighlighted
          ? 'bg-gradient-to-b from-[#008278]/20 via-[#008278]/5 to-transparent border-[#008278] shadow-[0_0_40px_rgba(0,130,120,0.25)] lg:-translate-y-2'
          : 'bg-white/[0.02] border-white/10 hover:border-[#008278]/50 hover:bg-white/[0.04]'
      }`}
    >
      {/* Popular badge */}
      {isHighlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#008278] text-white shadow-lg">
            <Sparkles size={12} /> Most Popular
          </span>
        </div>
      )}

      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-2xl flex-shrink-0" aria-hidden="true">{pkg.emoji}</span>
            <h3 className="font-space text-xl sm:text-2xl font-bold text-white leading-tight">
              {pkg.name}
            </h3>
          </div>
          {isCustom && (
            <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-gray-300 flex-shrink-0 whitespace-nowrap mt-0.5">
              Tailored
            </span>
          )}
        </div>

        {/* Best For Description */}
        <p className="text-gray-400 text-sm mb-6 min-h-[40px] leading-relaxed">
          {pkg.bestFor}
        </p>

        {/* Price */}
        <div className="mb-6 pb-6 border-b border-white/10">
          <p className="text-xs uppercase font-semibold tracking-wider text-gray-400 mb-1">
            Starting from
          </p>
          <div className="flex items-baseline gap-2">
            <span className="font-space text-3xl sm:text-4xl font-black text-white">
              {pkg.priceDisplay}
            </span>
          </div>
          <p className="text-[11px] text-gray-500 mt-1">
            Scope-based pricing • No surprise costs
          </p>
        </div>

        {/* Feature List */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3.5">
            What&apos;s included:
          </p>
          <ul className="space-y-2.5" aria-label={`${pkg.name} package features`}>
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                <Check
                  size={16}
                  className={`mt-0.5 flex-shrink-0 ${
                    isHighlighted ? 'text-[#00c2b2]' : 'text-[#008278]'
                  }`}
                  aria-hidden="true"
                />
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-2">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 active:scale-95 ${
            isHighlighted
              ? 'bg-[#008278] hover:bg-[#009b8f] text-white shadow-[0_0_20px_rgba(0,130,120,0.4)] hover:shadow-[0_0_25px_rgba(0,130,120,0.6)]'
              : 'border border-white/20 hover:border-[#008278] hover:text-[#00c2b2] bg-white/5 hover:bg-[#008278]/10 text-white'
          }`}
          aria-label={`${getCtaLabel()} on WhatsApp`}
        >
          <MessageCircle size={16} aria-hidden="true" />
          <span>{getCtaLabel()}</span>
        </a>
      </div>
    </div>
  );
}
