import Link from 'next/link';
import { ArrowLeft, Home, Globe, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CONTACT } from './lib/constants';

export const metadata = {
  title: 'Page Not Found (404)',
  description: 'The requested page could not be found on Abenzo.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="bg-[#050a08] min-h-screen text-white selection:bg-[#008278] selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-32 text-center">
        <div className="max-w-lg mx-auto">
          <p className="text-[#008278] font-space text-7xl sm:text-9xl font-black tracking-tight mb-4 opacity-80">
            404
          </p>
          <h1 className="font-space text-2xl sm:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let&apos;s guide you back to where you need to be.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#008278] hover:bg-[#00a396] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              <Home size={16} />
              Return Home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              <Globe size={16} />
              Our Services
            </Link>
            <a
              href={CONTACT.whatsappFull}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>

          <div className="border-t border-white/5 pt-6 text-xs text-gray-500">
            <span>Need immediate help? Reach us directly at </span>
            <a href={`mailto:${CONTACT.email}`} className="text-[#008278] hover:underline">
              {CONTACT.email}
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
