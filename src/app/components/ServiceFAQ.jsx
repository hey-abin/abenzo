'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * ServiceFAQ component with interactive accordion and Schema.org FAQPage JSON-LD
 * @param {Array<{ q: string, a: string }>} faqs
 * @param {string} title
 */
export default function ServiceFAQ({ faqs, title = "Frequently Asked Questions" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const jsonLd = {
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
  };

  return (
    <section className="py-16 sm:py-20" aria-label={title}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#008278] text-xs font-bold uppercase tracking-[0.2em] mb-2">
            Clear Answers
          </p>
          <h2 className="font-space text-2xl sm:text-3xl md:text-4xl font-black text-white">
            {title}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-white hover:bg-white/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-medium">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp size={18} className="text-[#008278] flex-shrink-0" aria-hidden="true" />
                  ) : (
                    <ChevronDown size={18} className="text-gray-500 flex-shrink-0" aria-hidden="true" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
