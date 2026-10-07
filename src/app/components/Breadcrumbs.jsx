import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { SITE_URL } from '../lib/constants';

/**
 * Reusable breadcrumbs component with Schema.org BreadcrumbList JSON-LD
 * @param {Array<{ name: string, href?: string }>} items
 */
export default function Breadcrumbs({ items }) {
  const fullItems = [{ name: 'Home', href: '/' }, ...items];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: fullItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-gray-400">
        {fullItems.map((item, index) => {
          const isLast = index === fullItems.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight size={14} className="text-gray-600 flex-shrink-0" aria-hidden="true" />
              )}
              {isLast || !item.href ? (
                <span className="text-[#008278] font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
