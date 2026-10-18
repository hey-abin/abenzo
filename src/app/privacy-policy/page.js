import Link from 'next/link';
import {
  Shield,
  Lock,
  Database,
  Bot,
  MessageSquare,
  Server,
  Trash2,
  UserCheck,
  Mail,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { SITE_URL, CONTACT } from '../lib/constants';

export const metadata = {
  title: 'Privacy Policy — Data Protection & AbenzoAI Disclosures',
  description:
    'Privacy Policy for Abenzo web development services and AbenzoAI automated messaging. Learn what information we collect, how Meta APIs and AI models process messages, data storage, deletion requests, and user rights.',
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  openGraph: {
    title: 'Privacy Policy | Abenzo & AbenzoAI',
    description:
      'Understand how Abenzo and AbenzoAI collect, process, store, and protect your information, including Instagram messaging via Meta APIs, AI generation, and data deletion rights.',
    url: `${SITE_URL}/privacy-policy`,
    siteName: 'Abenzo',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'October 18, 2026';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PrivacyPolicy',
    name: 'Abenzo & AbenzoAI Privacy Policy',
    url: `${SITE_URL}/privacy-policy`,
    description:
      'Official privacy policy and data processing disclosures for Abenzo web agency and AbenzoAI conversational automation platform.',
    datePublished: '2026-10-18',
    dateModified: '2026-10-18',
    publisher: {
      '@type': 'Organization',
      name: 'Abenzo',
      url: SITE_URL,
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'hello@abenzo.in',
        contactType: 'privacy support',
      },
    },
  };

  return (
    <div className="bg-[#050a08] min-h-screen text-white selection:bg-[#008278] selection:text-white flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 max-w-5xl mx-auto w-full">
        <Breadcrumbs items={[{ name: 'Privacy Policy' }]} />

        {/* Hero Section */}
        <section className="pt-4 pb-12 border-b border-white/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#008278]/30 bg-[#008278]/10 text-xs text-[#008278] font-semibold mb-4">
            <Shield size={14} aria-hidden="true" />
            Official Legal &amp; Data Transparency Statement
          </div>
          <h1 className="font-space text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
            Privacy <span className="text-[#008278]">Policy</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-4">
            At Abenzo (&ldquo;Abenzo&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we are committed to transparent, responsible, and secure data handling across our agency website and our conversational automation service, <strong>AbenzoAI</strong>.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
            <span>
              <strong>Effective Date:</strong> {lastUpdated}
            </span>
            <span>•</span>
            <span>
              <strong>Privacy Contact:</strong>{' '}
              <a href="mailto:hello@abenzo.in" className="text-[#008278] hover:underline">
                hello@abenzo.in
              </a>
            </span>
          </div>
        </section>

        {/* Important Notice Callout */}
        <div className="my-8 rounded-2xl border border-[#008278]/30 bg-[#008278]/5 p-6 flex flex-col sm:flex-row gap-4 items-start">
          <div className="w-10 h-10 rounded-xl bg-[#008278]/20 text-[#008278] flex items-center justify-center flex-shrink-0 mt-0.5">
            <Bot size={20} aria-hidden="true" />
          </div>
          <div className="text-sm leading-relaxed space-y-1">
            <p className="font-bold text-white">
              AbenzoAI Service &amp; Meta / Instagram Disclosures
            </p>
            <p className="text-gray-300">
              This policy contains dedicated disclosures for <strong>AbenzoAI</strong>, our software solution that processes incoming direct messages on Instagram via official Meta APIs, assists with AI-generated replies, and stores leads and conversation history.
            </p>
          </div>
        </div>

        {/* Table of Contents */}
        <nav aria-label="Table of contents" className="my-8 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
          <h2 className="font-space font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">
            Contents Overview
          </h2>
          <ol className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-300">
            <li>
              <a href="#section-1" className="hover:text-[#008278] transition-colors">
                1. Scope of This Policy
              </a>
            </li>
            <li>
              <a href="#section-2" className="hover:text-[#008278] transition-colors">
                2. Information We Collect
              </a>
            </li>
            <li>
              <a href="#section-3" className="hover:text-[#008278] transition-colors">
                3. Instagram Messages &amp; AbenzoAI Service
              </a>
            </li>
            <li>
              <a href="#section-4" className="hover:text-[#008278] transition-colors">
                4. AI-Assisted Reply Generation
              </a>
            </li>
            <li>
              <a href="#section-5" className="hover:text-[#008278] transition-colors">
                5. How We Use Collected Data
              </a>
            </li>
            <li>
              <a href="#section-6" className="hover:text-[#008278] transition-colors">
                6. Data Storage &amp; Cloud Infrastructure
              </a>
            </li>
            <li>
              <a href="#section-7" className="hover:text-[#008278] transition-colors">
                7. Third-Party Service Providers
              </a>
            </li>
            <li>
              <a href="#section-8" className="hover:text-[#008278] transition-colors">
                8. Data Retention &amp; Storage Periods
              </a>
            </li>
            <li>
              <a href="#section-9" className="hover:text-[#008278] transition-colors">
                9. User Rights &amp; Data Deletion Requests
              </a>
            </li>
            <li>
              <a href="#section-10" className="hover:text-[#008278] transition-colors">
                10. Cookies &amp; Web Analytics
              </a>
            </li>
            <li>
              <a href="#section-11" className="hover:text-[#008278] transition-colors">
                11. Children&apos;s Privacy
              </a>
            </li>
            <li>
              <a href="#section-12" className="hover:text-[#008278] transition-colors">
                12. Policy Changes &amp; Contact Information
              </a>
            </li>
          </ol>
        </nav>

        {/* Content Sections */}
        <div className="space-y-12 text-sm text-gray-300 leading-relaxed">

          {/* Section 1 */}
          <section id="section-1" className="space-y-4 pt-4">
            <h2 className="font-space text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-[#008278]">1.</span> Scope of This Policy
            </h2>
            <p>
              This Privacy Policy applies to personal information and electronic communications collected, stored, or processed by Abenzo through:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>
                Our public agency website (<Link href="/" className="text-[#008278] hover:underline">https://abenzo.vercel.app</Link> and associated domains such as <span className="text-white">abenzo.co.in</span>).
              </li>
              <li>
                Inquiries, quotes, proposals, and communication conducted via WhatsApp, email, or telephone.
              </li>
              <li>
                The <strong>AbenzoAI</strong> software integration, which automates and assists with customer communications on connected social messaging platforms (including Instagram Direct via Meta APIs).
              </li>
            </ul>
            <p>
              This policy explains your rights regarding your personal information, how you can exercise those rights, and how we safeguard your data.
            </p>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="space-y-4 pt-4 border-t border-white/5">
            <h2 className="font-space text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-[#008278]">2.</span> Information We Collect
            </h2>
            <p>
              We only collect data necessary to communicate with you, provide our services, and fulfill legitimate operational needs.
            </p>

            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 space-y-2">
                <h3 className="font-space font-bold text-white text-base flex items-center gap-2">
                  <UserCheck size={18} className="text-[#008278]" />
                  A. Website Visitors &amp; Direct Inquiries
                </h3>
                <p className="text-xs text-gray-400">
                  When you visit our site, request a consultation, or contact us:
                </p>
                <ul className="text-xs text-gray-300 space-y-1 list-disc pl-4">
                  <li>Name and contact details (email address, phone / WhatsApp number).</li>
                  <li>Company or business name, industry, and website URL.</li>
                  <li>Project scope, technical specifications, and budgetary preferences.</li>
                  <li>Technical telemetry (IP address, browser type, operating system, referrer URL).</li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 space-y-2">
                <h3 className="font-space font-bold text-white text-base flex items-center gap-2">
                  <MessageSquare size={18} className="text-[#008278]" />
                  B. AbenzoAI Messaging &amp; Social Inquiries
                </h3>
                <p className="text-xs text-gray-400">
                  When you send a message to an Instagram Business account connected to AbenzoAI:
                </p>
                <ul className="text-xs text-gray-300 space-y-1 list-disc pl-4">
                  <li>Instagram Scoped User ID (IGSID) and public profile username.</li>
                  <li>Inbound and outbound direct message text, timestamps, and message IDs.</li>
                  <li>Lead details voluntarily shared in the conversation (name, phone, interest).</li>
                  <li>Conversation intent categorization and message status tags.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="space-y-4 pt-4 border-t border-white/5">
            <h2 className="font-space text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-[#008278]">3.</span> Instagram Messages &amp; Meta API Disclosures (AbenzoAI)
            </h2>
            <p>
              AbenzoAI is built to integrate with official Meta developer tools. We respect and adhere to Meta Platform Terms, Developer Policies, and the Instagram Graph API documentation:
            </p>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#008278] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Official Meta APIs Only:</strong>
                  <p className="text-xs text-gray-300 mt-0.5">
                    We receive and transmit Instagram messages strictly through authenticated Meta Webhooks and the official Instagram Graph API. We do not use unauthorized scraping, unofficial bots, or reverse-engineered interfaces.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#008278] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Strict Webhook Authentication:</strong>
                  <p className="text-xs text-gray-300 mt-0.5">
                    Incoming webhook payloads from Meta are verified using HMAC SHA-256 signature verification against our secure app secret, ensuring that only genuine Meta requests are processed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#008278] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Restricted Data Access:</strong>
                  <p className="text-xs text-gray-300 mt-0.5">
                    AbenzoAI only accesses messages sent directly to the connected Instagram Business account. We do not access, view, or store personal feeds, stories, private friends lists, or account passwords.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="space-y-4 pt-4 border-t border-white/5">
            <h2 className="font-space text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-[#008278]">4.</span> AI-Assisted Reply Generation &amp; Third-Party AI Providers
            </h2>
            <p>
              AbenzoAI uses artificial intelligence to help provide fast, informative, and context-aware responses to user inquiries.
            </p>
            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <h3 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                  <Bot size={16} className="text-[#008278]" />
                  How AI Processing Operates
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  When an Instagram user sends a message, our backend processes the query text and securely transmits relevant context to enterprise AI foundation models (such as Google Gemini API or OpenAI API) to interpret the user&apos;s request, identify key intent, and generate draft or automated responses.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <h3 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                  <Lock size={16} className="text-[#008278]" />
                  No Model Training on User Communications
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Customer conversation text transmitted through our commercial AI model API providers is processed strictly for inference and generating replies. In accordance with enterprise API provider policies, your private message data is <strong>not used to train or improve public foundation models</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <h3 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                  <UserCheck size={16} className="text-[#008278]" />
                  Human Oversight
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Conversations and leads processed by AbenzoAI can be reviewed by human administrators. When complex inquiries or bespoke quotes are requested, human operators take over the conversation directly.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="space-y-4 pt-4 border-t border-white/5">
            <h2 className="font-space text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-[#008278]">5.</span> How We Use Collected Data
            </h2>
            <p>
              We use information collected through our website and AbenzoAI for the following legitimate business purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-xs sm:text-sm">
              <li>
                <strong>Providing Core Services:</strong> Scoping, designing, developing, and deploying client websites, 3D experiences, and web software.
              </li>
              <li>
                <strong>Answering Inquiries:</strong> Providing prompt responses to questions regarding pricing, packages, technical capabilities, and availability.
              </li>
              <li>
                <strong>Automating Support via AbenzoAI:</strong> Delivering accurate automated answers to recurring questions on social media and routing qualified prospects to human agents.
              </li>
              <li>
                <strong>Lead Organization:</strong> Storing prospect details (name, contact preference, project interest) in our backend database so our team can follow up effectively.
              </li>
              <li>
                <strong>Security &amp; Abuse Prevention:</strong> Monitoring application logs, verifying webhook authenticity, and preventing malicious traffic or system spam.
              </li>
              <li>
                <strong>Legal Compliance:</strong> Meeting applicable regulatory, tax, accounting, and lawful authority requests.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="space-y-4 pt-4 border-t border-white/5">
            <h2 className="font-space text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-[#008278]">6.</span> Data Storage, Hosting &amp; Security Architecture
            </h2>
            <p>
              We implement industry-standard technical and organizational security measures to protect your information against unauthorized access, loss, or alteration.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <Server size={20} className="text-[#008278] mb-2" />
                <h3 className="font-bold text-white text-xs mb-1">Encrypted Transit</h3>
                <p className="text-[11px] text-gray-400">
                  All data in transit is encrypted using modern TLS (Transport Layer Security / HTTPS). Unencrypted HTTP connections are rejected.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <Database size={20} className="text-[#008278] mb-2" />
                <h3 className="font-bold text-white text-xs mb-1">Secure Database</h3>
                <p className="text-[11px] text-gray-400">
                  Data, leads, and conversation logs are stored in managed PostgreSQL databases (e.g. Neon) with encryption at rest and isolated network credentials.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <Lock size={20} className="text-[#008278] mb-2" />
                <h3 className="font-bold text-white text-xs mb-1">Access Controls</h3>
                <p className="text-[11px] text-gray-400">
                  Access to production servers and databases is restricted strictly to authorized engineering personnel using multi-factor authentication.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-xs text-amber-200/90 flex items-start gap-2.5">
              <AlertCircle size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Security Disclaimer:</strong> While we apply rigorous engineering safeguards and best practices, no electronic transmission over the internet or cloud storage service can be guaranteed 100% impenetrable. We do not invent unverified certifications or absolute guarantees.
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="section-7" className="space-y-4 pt-4 border-t border-white/5">
            <h2 className="font-space text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-[#008278]">7.</span> Third-Party Service Providers &amp; Data Sharing
            </h2>
            <p>
              <strong className="text-white">We do not sell, rent, lease, or trade personal data or conversation transcripts to third parties, data brokers, or advertisers.</strong>
            </p>
            <p>
              We disclose data only to trusted infrastructure and service providers operating on our behalf under confidentiality and data protection obligations:
            </p>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-lg border border-white/5 bg-white/[0.01] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="font-bold text-white">Meta Platforms, Inc.</span>
                  <p className="text-gray-400">Provides Instagram Messaging APIs, webhooks, and developer platform infrastructure.</p>
                </div>
                <span className="text-gray-500 text-[11px]">API Platform</span>
              </div>

              <div className="p-3 rounded-lg border border-white/5 bg-white/[0.01] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="font-bold text-white">Cloud Hosting &amp; Server Infrastructure</span>
                  <p className="text-gray-400">Vercel (website frontend hosting) and Render (backend application container hosting).</p>
                </div>
                <span className="text-gray-500 text-[11px]">Cloud Hosting</span>
              </div>

              <div className="p-3 rounded-lg border border-white/5 bg-white/[0.01] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="font-bold text-white">Managed Database Providers</span>
                  <p className="text-gray-400">Neon / PostgreSQL cloud database providers for encrypted relational data storage.</p>
                </div>
                <span className="text-gray-500 text-[11px]">Database</span>
              </div>

              <div className="p-3 rounded-lg border border-white/5 bg-white/[0.01] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="font-bold text-white">AI Model Providers (e.g. Google Gemini API, OpenAI API)</span>
                  <p className="text-gray-400">Processes message text to generate real-time reply suggestions and intent extraction.</p>
                </div>
                <span className="text-gray-500 text-[11px]">AI Model Provider</span>
              </div>

              <div className="p-3 rounded-lg border border-white/5 bg-white/[0.01] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="font-bold text-white">Web Analytics &amp; Performance</span>
                  <p className="text-gray-400">Google Analytics, Microsoft Clarity, and Meta Pixel for anonymous website traffic analysis.</p>
                </div>
                <span className="text-gray-500 text-[11px]">Analytics</span>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section id="section-8" className="space-y-4 pt-4 border-t border-white/5">
            <h2 className="font-space text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-[#008278]">8.</span> Data Retention &amp; Storage Periods
            </h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <strong>Website &amp; Contract Inquiries:</strong> Retained for the duration of client project delivery and for standard business accounting/legal record-keeping purposes.
              </li>
              <li>
                <strong>AbenzoAI Conversation Records:</strong> Retained to allow continuity in customer conversations, maintain lead records, and troubleshoot message delivery.
                <div className="mt-1 text-xs text-amber-300/80">
                  <span className="font-semibold">[Requires Business Confirmation]:</span> Standard operational retention window of up to 90 days for transient chat message payloads, or for the duration of an active business relationship, after which raw conversation records are purged or anonymized.
                </div>
              </li>
              <li>
                <strong>Analytics &amp; Server Logs:</strong> Standard server access logs are retained on hosting platforms for temporary operational diagnostics and rotated automatically.
              </li>
            </ul>
          </section>

          {/* Section 9 */}
          <section id="section-9" className="space-y-4 pt-4 border-t border-white/5">
            <h2 className="font-space text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-[#008278]">9.</span> User Rights &amp; Data Deletion Requests
            </h2>
            <p>
              Regardless of your jurisdiction, Abenzo respects your fundamental privacy rights regarding your personal information:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg border border-white/5 bg-white/[0.01]">
                <strong className="text-white block mb-0.5">Right of Access</strong>
                You may request a copy of the personal information we hold about you.
              </div>
              <div className="p-3 rounded-lg border border-white/5 bg-white/[0.01]">
                <strong className="text-white block mb-0.5">Right to Rectification</strong>
                You may request that inaccurate or incomplete information be corrected.
              </div>
              <div className="p-3 rounded-lg border border-white/5 bg-white/[0.01]">
                <strong className="text-white block mb-0.5">Right to Erasure (Deletion)</strong>
                You may request that we delete all personal data and conversation logs related to you.
              </div>
              <div className="p-3 rounded-lg border border-white/5 bg-white/[0.01]">
                <strong className="text-white block mb-0.5">Right to Restrict or Object</strong>
                You may object to or restrict specific processing of your data at any time.
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-[#008278]/40 bg-[#008278]/10 p-6 space-y-4">
              <div className="flex items-center gap-2 text-white font-space font-bold text-base">
                <Trash2 size={20} className="text-[#008278]" />
                How to Submit a Data Deletion Request
              </div>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                If you have interacted with Abenzo or AbenzoAI on our website, WhatsApp, or Instagram and wish to have your data, messages, or lead records permanently deleted, follow either method below:
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="bg-black/40 p-4 rounded-xl border border-white/10 space-y-2">
                  <span className="font-bold text-white text-sm block">Method 1: Direct Email Request (All Channels)</span>
                  <p className="text-gray-300">
                    Send an email to our dedicated data privacy inbox:
                  </p>
                  <div className="p-2.5 rounded-lg bg-white/5 font-mono text-sm text-[#008278] flex items-center justify-between">
                    <span>hello@abenzo.in</span>
                    <a
                      href="mailto:hello@abenzo.in?subject=Data%20Deletion%20Request"
                      className="text-xs font-sans text-gray-300 hover:text-white underline flex items-center gap-1"
                    >
                      <Mail size={12} /> Send Email
                    </a>
                  </div>
                  <p className="text-gray-400 text-[11px]">
                    Please mention &ldquo;Data Deletion Request&rdquo; in the subject line, along with your Instagram username (if you contacted us on Instagram), email address, or phone number so we can accurately locate and purge your records.
                  </p>
                </div>

                <div className="bg-black/40 p-4 rounded-xl border border-white/10 space-y-2">
                  <span className="font-bold text-white text-sm block">Method 2: Meta App Settings (Instagram / Facebook Users)</span>
                  <p className="text-gray-300">
                    If you connected via Facebook or Instagram, you can remove the Abenzo / AbenzoAI application anytime:
                  </p>
                  <ol className="list-decimal pl-4 space-y-1 text-gray-300">
                    <li>Go to your Facebook or Instagram profile <strong>Settings &amp; Privacy</strong>.</li>
                    <li>Navigate to <strong>Apps and Websites</strong>.</li>
                    <li>Find <strong>Abenzo</strong> (or <strong>AbenzoAI</strong>) and select <strong>Remove</strong>.</li>
                    <li>This triggers Meta&apos;s automated Data Deletion Request callback, queuing your data for removal.</li>
                  </ol>
                </div>
              </div>

              <div className="text-xs text-gray-400 pt-2 border-t border-white/10">
                <strong>Response &amp; Turnaround Time:</strong> We confirm and execute verified deletion requests within 30 days <span className="text-amber-300/80 font-semibold">[Requires Business Confirmation: standard turnaround 30 days]</span>. Upon deletion, your records are permanently purged from active databases.
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section id="section-10" className="space-y-4 pt-4 border-t border-white/5">
            <h2 className="font-space text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-[#008278]">10.</span> Cookies &amp; Web Analytics
            </h2>
            <p>
              Our website uses cookies and similar technologies for necessary site functionality and aggregated analytics:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <strong>Essential Functionality:</strong> Cookies that maintain your session and UI preferences.
              </li>
              <li>
                <strong>Telemetry &amp; Analytics:</strong> We use tools including Google Analytics, Microsoft Clarity, and Meta Pixel to observe aggregated traffic patterns, popular pages, and performance bottlenecks.
              </li>
              <li>
                <strong>Browser Controls:</strong> You can refuse or delete cookies through your web browser settings. Note that disabling cookies will not impede your ability to browse our website.
              </li>
            </ul>
          </section>

          {/* Section 11 */}
          <section id="section-11" className="space-y-4 pt-4 border-t border-white/5">
            <h2 className="font-space text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-[#008278]">11.</span> Children&apos;s Privacy
            </h2>
            <p>
              Our website, business services, and the AbenzoAI platform are designed for businesses, professionals, and adults. We do not knowingly collect or solicit personal data from children under the age of 13 (or under 18 for commercial contracts). If you believe a child has provided us with personal information, please notify us at <a href="mailto:hello@abenzo.in" className="text-[#008278] hover:underline">hello@abenzo.in</a> and we will promptly delete the data.
            </p>
          </section>

          {/* Section 12 */}
          <section id="section-12" className="space-y-4 pt-4 border-t border-white/5">
            <h2 className="font-space text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-[#008278]">12.</span> Policy Changes &amp; Contact Information
            </h2>
            <p>
              We may update this Privacy Policy periodically to reflect enhancements to our services, architectural updates, or new regulatory obligations. When updates occur, the &ldquo;Effective Date&rdquo; at the top of this page will be revised.
            </p>

            {/* Business Confirmation Reference Card */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 space-y-3">
              <h3 className="font-space font-bold text-white text-sm flex items-center gap-2">
                <AlertCircle size={16} className="text-[#008278]" />
                Items Pending Specific Business Confirmation
              </h3>
              <p className="text-xs text-gray-400">
                To maintain strict transparency without inventing unsupported legal claims or certifications, the following operational details are noted as subject to business confirmation by Abenzo:
              </p>
              <ul className="text-xs text-gray-300 space-y-1.5 list-disc pl-4">
                <li>
                  <span className="font-semibold text-white">Registered Legal Entity:</span> Formally operating as Abenzo. Specific company registration number (CIN / LLPIN) and registered corporate office address to be inserted upon formal incorporation confirmation.
                </li>
                <li>
                  <span className="font-semibold text-white">Specific Log Retention Horizon:</span> Baseline 90 days for transient social chat logs, adjustable according to specific enterprise client agreements.
                </li>
                <li>
                  <span className="font-semibold text-white">Governing Law &amp; Jurisdiction:</span> Standard jurisdiction is Kerala, India, subject to contractual dispute resolution terms in signed client agreements.
                </li>
              </ul>
            </div>

            {/* Contact Box */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
              <h3 className="font-space font-bold text-white text-base">
                Contact Our Privacy &amp; Data Team
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                For questions regarding this policy, exercising your user rights, or initiating a data deletion request, reach out through our official channels:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="space-y-1">
                  <span className="text-gray-400 block font-medium">Data Deletion &amp; Privacy Inbox:</span>
                  <a
                    href="mailto:hello@abenzo.in"
                    className="text-white hover:text-[#008278] font-mono text-sm inline-flex items-center gap-1.5 transition-colors"
                  >
                    <Mail size={14} className="text-[#008278]" /> hello@abenzo.in
                  </a>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-400 block font-medium">General Agency Inquiries:</span>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-white hover:text-[#008278] font-mono text-sm inline-flex items-center gap-1.5 transition-colors"
                  >
                    <Mail size={14} className="text-[#008278]" /> {CONTACT.email}
                  </a>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-400 block font-medium">Headquarters / Location:</span>
                  <span className="text-gray-300">Kerala, India (Serving clients globally)</span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-400 block font-medium">Official Website:</span>
                  <a
                    href={SITE_URL}
                    className="text-[#008278] hover:underline inline-flex items-center gap-1"
                  >
                    {SITE_URL} <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
