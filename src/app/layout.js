import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { SITE_URL, CONTACT } from './lib/constants';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

// ─── SEO Metadata ─────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(SITE_URL),

  // Google Search Console verification
  verification: {
    google: 'T-qo962cEjCVeNt4QzXjkMU1P78Efo9dpS7s_oQd1XI',
  },

  // Favicon / Icon — uses icon.svg (the Abenzo "A" logo)
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },

  // Title
  title: {
    default: 'Abenzo | Web Development & Software Solutions',
    template: '%s | Abenzo',
  },

  // Description — under 160 chars, no keyword stuffing
  description:
    'Abenzo builds high-performance websites, web applications, e-commerce stores and custom software for businesses. Based in India, serving clients worldwide.',

  // Open Graph — WhatsApp, Facebook, LinkedIn previews
  openGraph: {
    title: 'Abenzo | Web Development & Software Solutions',
    description:
      'We build websites, web applications and custom software that help businesses attract customers and grow online.',
    url: SITE_URL,
    siteName: 'Abenzo',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abenzo — Web Development & Software Solutions',
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: 'summary_large_image',
    title: 'Abenzo | Web Development & Software Solutions',
    description:
      'High-performance websites, web applications and custom software for businesses worldwide.',
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
  // Structured Data — ProfessionalService
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Abenzo',
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description:
      'Abenzo is a web development and software agency specializing in high-performance websites, web applications, e-commerce and custom software solutions.',
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
      contactType: 'customer service',
      availableLanguage: ['English'],
    },
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
      </body>
    </html>
  );
}