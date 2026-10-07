import { SITE_URL } from './lib/constants';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/go/'],
      },
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'Applebot',
          'DuckDuckBot',
          'Slurp',
          'YandexBot',
          'GPTBot',
          'ChatGPT-User',
          'Claude-Web',
          'ClaudeBot',
          'PerplexityBot',
          'Google-Extended',
          'Amazonbot',
          'OAI-SearchBot',
        ],
        allow: '/',
        disallow: ['/private/', '/go/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}