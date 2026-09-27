<div align="center">

<br />

```
 █████╗ ██████╗ ███████╗███╗   ██╗███████╗ ██████╗ 
██╔══██╗██╔══██╗██╔════╝████╗  ██║╚══███╔╝██╔═══██╗
███████║██████╔╝█████╗  ██╔██╗ ██║  ███╔╝ ██║   ██║
██╔══██║██╔══██╗██╔══╝  ██║╚██╗██║ ███╔╝  ██║   ██║
██║  ██║██████╔╝███████╗██║ ╚████║███████╗╚██████╔╝
╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝ ╚═════╝ 
```

### **Websites & Software Built to Grow Your Business**

*High-performance websites · Web applications · Custom software*

<br />

[![Live Site](https://img.shields.io/badge/🌐%20Live%20Site-abenzo.vercel.app-008278?style=for-the-badge&labelColor=050a08)](https://abenzo.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

<br />

![Abenzo Banner](https://img.shields.io/badge/-Web%20Development%20%20·%20%20Software%20%20·%20%20Digital%20Experiences-008278?style=for-the-badge&labelColor=050a08)

</div>

---

## 📌 Overview

**Abenzo** is a professional web development and software agency landing page — purpose-built to convert visitors from Meta Ads and Google Search into WhatsApp leads.

The site immediately communicates:
- ✅ **What** we build — websites, apps, software
- ✅ **Who** we help — businesses worldwide
- ✅ **Why** to trust us — transparent, modern, custom
- ✅ **How** to start — one tap to WhatsApp

> **Conversion funnel:** Meta Ad → Website → Trust → WhatsApp → Lead → Client

---

## ✨ Features

| Feature | Details |
|---|---|
| 🎯 **Business-first hero** | H1 focused on client outcomes, not brand name |
| 💬 **WhatsApp lead gen** | Pre-filled message CTAs throughout the page |
| 🧩 **10 service cards** | Outcome-focused descriptions for each service |
| 🔐 **Why Abenzo** | Honest trust signals — no fake stats |
| 🗂️ **Portfolio** | Project detail cards — no performance-killing iframes |
| ⚙️ **How it works** | 4-step client process walkthrough |
| ❓ **FAQ accordion** | 8 real client questions answered honestly |
| 📱 **Mobile-first** | Tested from 320px to wide desktop |
| 🌐 **SEO-ready** | Metadata, Open Graph, JSON-LD, sitemap, robots |
| 📊 **Analytics-ready** | GA4 + Meta Pixel hooks — just plug in your IDs |
| ♿ **Accessible** | Semantic HTML, ARIA labels, keyboard navigation |
| ⚡ **Performance** | Lazy-loaded 3D, reduced particles on mobile |

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | JavaScript |
| **UI** | React 19 |
| **Styling** | Tailwind CSS v4 |
| **3D / WebGL** | Three.js · React Three Fiber · Drei |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Fonts** | Inter · Space Grotesk (Google Fonts) |
| **Deployment** | Vercel |

</div>

---

## 🗂️ Project Structure

```
abenzo/
├── public/
│   ├── favicon.ico          # Site favicon
│   ├── icon.svg             # SVG icon (Google Search)
│   └── og-image.png         # ← ADD THIS (1200×630 for social sharing)
│
└── src/app/
    ├── lib/
    │   ├── constants.js     # ⭐ WhatsApp number, site URL, contacts
    │   └── analytics.js     # Conversion tracking (GA4 + Meta Pixel)
    │
    ├── components/
    │   ├── Navbar.jsx        # Navigation with WhatsApp CTA
    │   ├── Scene.jsx         # 3D particle background (optimised)
    │   ├── WhatsAppCTA.jsx   # ⭐ Reusable WhatsApp button
    │   ├── MouseFollower.jsx # Custom cursor (desktop-only)
    │   └── ClickRipple.jsx   # Click ripple effect
    │
    ├── layout.js             # SEO metadata, JSON-LD, fonts
    ├── page.js               # Main landing page
    ├── sitemap.js            # Auto-generated sitemap
    └── robots.js             # robots.txt
```

---

## ⚡ Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/hey-abin/abenzo.git
cd abenzo

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Configuration

All site-wide settings live in **one file**:

```js
// src/app/lib/constants.js

// 🌐 Site URL — change when moving to a custom domain
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://abenzo.vercel.app';

// 💬 WhatsApp — format: country code + number, no + or spaces
export const WA_NUMBER = '918590814463';

// ✉️ Pre-filled WhatsApp message
export const WA_DEFAULT_MESSAGE =
  "Hi Abenzo, I'm interested in building a website/software for my business.";
```

> **To change the WhatsApp number or domain**, edit only this file — it updates everywhere automatically.

---

## 🌱 Environment Variables

Create a `.env.local` file in the project root:

```env
# Site URL (update when custom domain is connected)
NEXT_PUBLIC_SITE_URL=https://abenzo.vercel.app

# Google Analytics 4 (optional — add when ready)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Meta Pixel (optional — add when running ads)
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXX
```

Set the same variables in your **Vercel project settings** under *Settings → Environment Variables*.

---

## 📊 Conversion Tracking

The tracking system is pre-wired. Once you add your Analytics IDs, these events fire automatically:

| Event | Trigger |
|---|---|
| `whatsapp_click` | Any WhatsApp button |
| `start_project_click` | Hero / navbar CTA |
| `portfolio_project_click` | Portfolio card |
| `email_click` | Email contact |
| `instagram_click` | Instagram link |

```js
// Use anywhere in the codebase
import { track } from '@/app/lib/analytics';

track.whatsappClick('hero');
track.startProjectClick('navbar');
track.portfolioClick('PetLink');
```

---

## 🚀 Deployment

The project auto-deploys to **Vercel** on every push to `main`.

```bash
# Deploy manually
git add .
git commit -m "your message"
git push origin main
```

**Vercel does the rest** — build, optimize, deploy.

---

## 🔍 SEO Checklist

- [x] Unique, keyword-rich title tag
- [x] Meta description under 160 characters
- [x] Open Graph metadata (WhatsApp / Facebook / LinkedIn)
- [x] Twitter Card metadata
- [x] JSON-LD structured data (ProfessionalService)
- [x] `/sitemap.xml` — auto-generated
- [x] `/robots.txt` — configured
- [x] Canonical URL set
- [x] Google Search Console verification tag
- [x] Favicon + SVG icon declared
- [ ] `public/og-image.png` — **add manually** (1200×630px)
- [ ] Submit sitemap in Google Search Console

---

## ✅ Remaining Setup

| Task | Action Required |
|---|---|
| **WhatsApp Business** | Update `WA_NUMBER` in `constants.js` |
| **OG Image** | Add `public/og-image.png` (1200×630) |
| **Google Analytics** | Set `NEXT_PUBLIC_GA_ID` in Vercel |
| **Meta Pixel** | Set `NEXT_PUBLIC_META_PIXEL_ID` in Vercel |
| **Custom Domain** | Set `NEXT_PUBLIC_SITE_URL` in Vercel |
| **Search Console** | Submit `sitemap.xml` at [search.google.com/search-console](https://search.google.com/search-console) |

---

## 📬 Contact

<div align="center">

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/918590814463?text=Hi%20Abenzo%2C%20I%27m%20interested%20in%20working%20together.)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/abenzo.co.in)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:abenzo.co.in@gmail.com)
[![Website](https://img.shields.io/badge/Website-008278?style=for-the-badge&logo=google-chrome&logoColor=white)](https://abenzo.vercel.app)

</div>

---

<div align="center">

**Built with ❤️ by Abenzo**

*© 2025 Abenzo. All rights reserved.*

</div>
