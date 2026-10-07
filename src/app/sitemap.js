import { SITE_URL } from './lib/constants';

export default function sitemap() {
  const routes = [
    { path: '', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/services', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/services/web-development', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/services/3d-web-development', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/services/nextjs-development', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/services/react-development', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/services/ui-ux-design', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/services/ecommerce-development', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/services/shopify-development', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/services/saas-development', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/work', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}