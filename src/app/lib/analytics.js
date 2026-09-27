// ─── Conversion Tracking Helpers ──────────────────────────
// Drop-in ready for Google Analytics 4 + Meta Pixel.
// Set NEXT_PUBLIC_GA_ID and NEXT_PUBLIC_META_PIXEL_ID in your
// environment variables to activate tracking.

/**
 * Track a named event with optional parameters.
 * Works with GA4 (gtag) and Meta Pixel (fbq) if installed.
 *
 * @param {string} eventName
 * @param {Record<string, unknown>} [params]
 */
export function trackEvent(eventName, params = {}) {
  try {
    // Google Analytics 4
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
    // Meta Pixel
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', eventName, params);
    }
  } catch {
    // Silently fail — never break the UI for analytics
  }
}

// ─── Named event helpers (use these throughout the codebase) ─
export const track = {
  whatsappClick:    (source) => trackEvent('whatsapp_click',       { source }),
  emailClick:       (source) => trackEvent('email_click',          { source }),
  instagramClick:   (source) => trackEvent('instagram_click',      { source }),
  startProjectClick:(source) => trackEvent('start_project_click',  { source }),
  portfolioClick:   (title)  => trackEvent('portfolio_project_click', { project: title }),
};
