import { SITE_URL } from './lib/constants';

export default function sitemap() {
  const routes = [
    { path: '', changeFrequency: 'daily', priority: 1.0 },
    { path: '/services', changeFrequency: 'daily', priority: 0.9 },
    { path: '/work', changeFrequency: 'daily', priority: 0.9 },
    { path: '/about', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/contact', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/services/web-development', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/services/3d-web-development', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/services/nextjs-development', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/services/react-development', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/services/ui-ux-design', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/services/ecommerce-development', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/services/shopify-development', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/services/saas-development', changeFrequency: 'weekly', priority: 0.8 },
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}