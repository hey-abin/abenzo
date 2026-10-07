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
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('trackCustom', eventName, params);
    }
    if (typeof window !== 'undefined' && typeof window.clarity === 'function') {
      window.clarity('event', eventName);
    }
  } catch {
    // Silently fail — never break the UI for analytics
  }
}

// ─── Named event helpers ──────────────────────────────────
export const track = {
  // General
  whatsappClick:     (source)  => trackEvent('whatsapp_click',        { source }),
  emailClick:        (source)  => trackEvent('email_click',           { source }),
  instagramClick:    (source)  => trackEvent('instagram_click',       { source }),
  startProjectClick: (source)  => trackEvent('start_project_click',   { source }),
  portfolioClick:    (title)   => trackEvent('portfolio_project_click',{ project: title }),

  // Packages
  packageView:       (pkgName) => trackEvent('package_view',          { package: pkgName }),
  packageClick:      (pkgName) => trackEvent('package_click',         { package: pkgName }),
  packageSelected:   (pkgName) => trackEvent('package_selected',      { package: pkgName }),

  // /go ad landing page
  adLandingView:     (params)  => trackEvent('ad_landing_view',       params),
  whatsappRedirect:  (source)  => trackEvent('whatsapp_redirect',     { source }),
};
