import { Inter, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { SITE_URL, CONTACT, ANALYTICS } from './lib/constants';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

// ─── SEO Metadata ─────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(SITE_URL),

  // Google Search Console verification
  verification: {
    google: [
      '4Xpq2fKsC4LX86fy6NSQ2TEkksdBipnfHlFg7Z2AKVA',
      'T-qo962cEjCVeNt4QzXjkMU1P78Efo9dpS7s_oQd1XI',
    ],
  },

  // Favicon / Icon — uses icon.svg (the Abenzo "A" logo)
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },

  // Title
  title: {
    default: 'Abenzo | Web Development & 3D Digital Experience Agency',
    template: '%s | Abenzo',
  },

  // Description
  description:
    'Abenzo is a premium web development and 3D digital experience agency specializing in high-performance Next.js websites, interactive 3D web experiences, custom web apps, and UI/UX design. Based in India, serving clients worldwide.',

  // Open Graph — WhatsApp, Facebook, LinkedIn previews
  openGraph: {
    title: 'Abenzo | Web Development & 3D Digital Experience Agency',
    description:
      'We build high-performance Next.js websites, interactive 3D digital experiences, and custom web applications that help businesses attract customers and grow online.',
    url: SITE_URL,
    siteName: 'Abenzo',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abenzo — Web Development & 3D Digital Experience Agency',
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: 'summary_large_image',
    title: 'Abenzo | Web Development & 3D Digital Experience Agency',
    description:
      'High-performance Next.js websites, interactive 3D digital experiences, and custom web applications for businesses worldwide.',
    images: ['/og-image.png'],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }) {
  // Structured Data — Organization, WebSite & ProfessionalService Graph
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Abenzo',
        alternateName: [
          'Abenzo Agency',
          'Abenzo Web Development',
          'Abenzo 3D Agency',
          'abenzo.co.in',
        ],
        description:
          'Abenzo is a premium web development and 3D digital experience agency specializing in high-performance Next.js websites, interactive 3D web experiences, and custom software.',
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
        inLanguage: 'en',
      },
      {
        '@type': 'ItemList',
        '@id': `${SITE_URL}/#site-navigation`,
        name: 'Main Navigation',
        description: 'Primary site navigation and services of Abenzo',
        itemListElement: [
          {
            '@type': 'SiteNavigationElement',
            position: 1,
            name: 'Services',
            description:
              'Custom web development, interactive 3D websites, Next.js engineering, UI/UX design, and custom software solutions.',
            url: `${SITE_URL}/services`,
          },
          {
            '@type': 'SiteNavigationElement',
            position: 2,
            name: 'Work',
            description:
              'Featured case studies and portfolio web applications engineered by Abenzo including SMS Speed Roadways, Verdant, and Leafnut.',
            url: `${SITE_URL}/work`,
          },
          {
            '@type': 'SiteNavigationElement',
            position: 3,
            name: 'Packages & Pricing',
            description:
              'Transparent web development and design packages starting from ₹15,000 with clear deliverables and milestones.',
            url: `${SITE_URL}/#packages`,
          },
          {
            '@type': 'SiteNavigationElement',
            position: 4,
            name: 'About Us',
            description:
              'Learn about Abenzo, our engineering principles, design standards, and our mission to build high-performance digital products.',
            url: `${SITE_URL}/about`,
          },
          {
            '@type': 'SiteNavigationElement',
            position: 5,
            name: 'Contact Us',
            description:
              'Get in touch with Abenzo via WhatsApp or email to discuss custom web development and digital projects.',
            url: `${SITE_URL}/contact`,
          },
          {
            '@type': 'SiteNavigationElement',
            position: 6,
            name: 'Custom Web Development',
            description:
              'High-performance custom websites built with Next.js and React — tailored to your business goals.',
            url: `${SITE_URL}/services/web-development`,
          },
          {
            '@type': 'SiteNavigationElement',
            position: 7,
            name: '3D Web Development',
            description:
              'Immersive 3D interactive web experiences powered by Three.js, WebGL, and React Three Fiber.',
            url: `${SITE_URL}/services/3d-web-development`,
          },
        ],
      },
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': `${SITE_URL}/#organization`,
        name: 'Abenzo',
        legalName: 'Abenzo Web Development & Software Solutions',
        url: SITE_URL,
        logo: `${SITE_URL}/icon.svg`,
        image: `${SITE_URL}/og-image.png`,
        description:
          'Abenzo is a web development and 3D digital experience agency specializing in high-performance websites, Next.js web applications, Three.js 3D web experiences, e-commerce, and custom software solutions.',
        sameAs: [CONTACT.instagram, CONTACT.whatsapp],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'India',
        },
        areaServed: [
          'India',
          'United States',
          'United Kingdom',
          'United Arab Emirates',
          'Canada',
          'Australia',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-8590814463',
          contactType: 'sales',
          availableLanguage: ['English', 'Malayalam'],
        },
        knowsAbout: [
          'Web Development',
          'Custom Web Development',
          'Next.js Development',
          'React.js Development',
          'Three.js Development',
          '3D Web Development',
          'UI/UX Design',
          'Website Redesign',
          'E-Commerce Development',
          'Shopify Development',
          'SaaS Development',
          'Performance Optimization',
          'Technical SEO',
        ],
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-abenzo-dark text-white antialiased`}
      >
        {children}

        {/* ── Meta Pixel ─────────────────────────────────────────
            strategy="lazyOnload" → loads during browser idle time,
            freeing main-thread CPU time during initial page load.  */}
        {ANALYTICS.metaPixelId && (
          <>
            <Script
              id="meta-pixel"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window,document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${ANALYTICS.metaPixelId}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${ANALYTICS.metaPixelId}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
        {/* ── Microsoft Clarity ──────────────────────────────────
            strategy="afterInteractive" → loads right after hydration
            to record sessions and heatmaps without blocking FCP/LCP. */}
        {ANALYTICS.clarityProjectId && (
          <Script
            id="microsoft-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${ANALYTICS.clarityProjectId}");
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}