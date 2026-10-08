// ============================================================
// ABENZO — SITE-WIDE CONSTANTS
// Change ONE place to update everything across the site.
// ============================================================

// Base site URL — canonical production domain
// Set NEXT_PUBLIC_SITE_URL in your hosting env vars to override (e.g. https://abenzo.co.in)
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://abenzo.vercel.app';

// ─── WhatsApp Configuration ───────────────────────────────
// Change this number when the WhatsApp Business account is ready.
// Format: country code + number, no + or spaces.
export const WA_NUMBER = '918590814463';

export const WA_DEFAULT_MESSAGE =
  "Hi Abenzo, I'm interested in building a website/software for my business. I'd like to discuss my requirements.";

export function getWhatsAppUrl(message = WA_DEFAULT_MESSAGE) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ─── Contact ──────────────────────────────────────────────
export const CONTACT = {
  whatsapp: `https://wa.me/${WA_NUMBER}`,
  whatsappFull: getWhatsAppUrl(),
  email: 'abenzo.co.in@gmail.com',
  instagram: 'https://instagram.com/abenzo.co.in',
  instagramHandle: '@abenzo.co.in',
};

// ─── Analytics ────────────────────────────────────────────
// Set via environment variables or fallbacks — never commit private keys.
export const ANALYTICS = {
  googleId:         process.env.NEXT_PUBLIC_GA_ID              || '',
  metaPixelId:      process.env.NEXT_PUBLIC_META_PIXEL_ID      || '960438733777815',
  clarityProjectId: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'yu35dvm2vx',
};

// ─── Packages ─────────────────────────────────────────────
// Single source of truth for all package data.
// Change prices, features, or names here — updates everywhere.
export const PACKAGES = [
  {
    id: 'starter',
    name: 'Starter',
    emoji: '🌱',
    priceDisplay: '₹15,000+',
    priceShort: '₹15K+',
    priceNumber: 15000,
    bestFor: 'Small businesses and simple professional websites.',
    features: [
      '3–5 pages',
      'Responsive design',
      'Modern UI',
      'WhatsApp integration',
      'Contact form',
      'Basic SEO',
      'Deployment',
      'Basic support',
    ],
    highlighted: false,
    waMessage:
      "Hi Abenzo! 👋\nI'm interested in the Starter Package.\nStarting price shown on the website: ₹15,000+\nI'd like to discuss my requirements and get a quote.",
  },
  {
    id: 'business',
    name: 'Business',
    emoji: '🚀',
    priceDisplay: '₹30,000+',
    priceShort: '₹30K+',
    priceNumber: 30000,
    bestFor: 'Growing businesses that need a stronger online presence.',
    features: [
      '5–10 pages',
      'Custom UI/UX',
      'Responsive design',
      'Contact / enquiry forms',
      'WhatsApp integration',
      'SEO setup',
      'Analytics integration',
      'Deployment',
      'Support',
    ],
    highlighted: true, // Visually highlighted as the popular choice
    waMessage:
      "Hi Abenzo! 👋\nI'm interested in the Business Package.\nStarting price shown on the website: ₹30,000+\nI'd like to discuss my requirements and get a quote.",
  },
  {
    id: 'professional',
    name: 'Professional',
    emoji: '⚡',
    priceDisplay: '₹50,000+',
    priceShort: '₹50K+',
    priceNumber: 50000,
    bestFor: 'Businesses requiring advanced functionality.',
    features: [
      'Custom UI/UX',
      'Advanced animations',
      'Custom functionality',
      'Database integration',
      'Authentication (where required)',
      'API integrations',
      'Advanced SEO',
      'Analytics',
      'Deployment',
      'Post-launch support',
    ],
    highlighted: false,
    waMessage:
      "Hi Abenzo! 👋\nI'm interested in the Professional Package.\nStarting price shown on the website: ₹50,000+\nI'd like to discuss my requirements and get a quote.",
  },
  {
    id: 'custom',
    name: 'Custom Software',
    emoji: '🛠️',
    priceDisplay: '₹75,000+',
    priceShort: '₹75K+',
    priceNumber: 75000,
    bestFor: 'Businesses that need custom applications or business systems.',
    features: [
      'SaaS / CRM / Booking systems',
      'Management systems',
      'Custom dashboards',
      'AI-powered applications',
      'Business automation',
      'Complex web applications',
      'Full project planning',
      'Ongoing support',
    ],
    isCustom: true, // Renders differently — not a fixed-price package
    waMessage:
      "Hi Abenzo! 👋\nI'm interested in the Custom Software Package.\nStarting price shown on the website: ₹75,000+\nI'd like to discuss my project requirements and get a quote.",
  },
];

export function getPackageWhatsAppUrl(pkg) {
  return getWhatsAppUrl(pkg?.waMessage || WA_DEFAULT_MESSAGE);
}

export const PACKAGES_DISCLAIMER =
  'Final price depends on project requirements. The prices above are starting points — not fixed quotes.';

// ─── Meta Ads Landing Page (/go) ──────────────────────────
// Countdown delay before auto-redirect to WhatsApp (milliseconds).
export const WHATSAPP_REDIRECT_DELAY = 5000;

// Pre-filled message for the /go landing page auto-redirect
export const AD_LANDING_MESSAGE =
  "Hi Abenzo! 👋\nI came from your website and I'm interested in your services.\nI'd like to discuss a project.";

// Pre-filled message for the "not sure" direct chat option on packages
export const PACKAGES_HELP_MESSAGE =
  "Hi Abenzo! 👋\nI have a project in mind and would like help choosing the right package.";
