import { SITE_URL } from './lib/constants';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/go/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}