// ============================================================
// ABENZO — SITE-WIDE CONSTANTS
// Change ONE place to update everything across the site.
// ============================================================

// Base site URL — update when moving to a custom domain
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

// ─── Analytics (fill in when ready) ───────────────────────
// Set via environment variables — never hard-code IDs.
export const ANALYTICS = {
  googleId: process.env.NEXT_PUBLIC_GA_ID || '',
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || '',
};
