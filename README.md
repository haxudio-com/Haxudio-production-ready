# Haxudio — Digital Agency Website

<div align="center">

<img src="public/logo.png" alt="Haxudio Logo" width="80"/>

### Where Code Meets Creativity

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=flat-square&logo=tailwindcss)
![Supabase](https://img.shields.io/badge/Supabase-3ecf8e?style=flat-square&logo=supabase)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-ff0055?style=flat-square&logo=framer)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?style=flat-square&logo=javascript)
![License](https://img.shields.io/badge/License-Private-red?style=flat-square)

**Official website for Haxudio — a modern digital agency based in Quetta, Pakistan.**

[🌐 Live Website](https://haxudio.com) · [🐛 Report Bug](https://github.com/your-username/haxudio/issues) · [✨ Request Feature](https://github.com/your-username/haxudio/issues)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Supabase Setup](#supabase-setup)
- [Project Structure](#project-structure)
- [Color Palette](#color-palette)
- [Services & Pricing](#services--pricing)
- [Team](#team)
- [Contact](#contact)
- [Deployment](#deployment)

---

## 🚀 About

Haxudio is a service-based digital startup offering end-to-end creative and technical solutions to clients worldwide. This repository contains the full source code for the official Haxudio website — built to be fast, modern, and fully responsive.

**Key Stats:**
- 🌍 50+ Global Clients
- 👥 30+ Team Members
- 📁 80+ Projects Completed
- 🏆 2+ Years of Experience

---

## 📄 Pages

| Page | Route | Description |
|---|---|---|
| **Home** | `/` | Hero, Stats, Services overview, Projects preview, Testimonials, Team, Contact CTA |
| **Services** | `/services` | All 5 services + 3-tier pricing packages |
| **Projects** | `/projects` | Portfolio with category filter |
| **About** | `/about` | Stats, Vision & Mission, Team |
| **Contact** | `/contact` | Contact form + business info |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 14 (App Router) | React framework |
| **JavaScript** | ES6+ | Programming language |
| **Tailwind CSS** | Latest | Styling & layout |
| **Framer Motion** | Latest | Animations & transitions |
| **Supabase** | Latest | Database for contact form |
| **Lucide React** | Latest | Icon library |
| **next/image** | Built-in | Optimized image loading |
| **next/font** | Built-in | Google Fonts (Poppins + Inter) |

---

## ⚡ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account (free tier works)

### Installation

**1. Clone the repository:**
```bash
git clone https://github.com/your-username/haxudio.git
cd haxudio
```

**2. Install dependencies:**
```bash
npm install
```

**3. Install additional packages:**
```bash
npm install framer-motion lucide-react @supabase/supabase-js @supabase/ssr
```

**4. Create environment file:**

Create `.env.local` in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**5. Run development server:**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) 🎉

---

## 🗄️ Supabase Setup

**1.** Create a project at [supabase.com](https://supabase.com)

**2.** Run this SQL in the Supabase SQL Editor:

```sql
CREATE TABLE contact_submissions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name text NOT NULL,
  email text NOT NULL,
  project_details text,
  created_at timestamptz DEFAULT now() NOT NULL
);
```

**3.** Get your credentials:

`Supabase Dashboard` → `Settings` → `API`

- Copy **Project URL** → paste as `NEXT_PUBLIC_SUPABASE_URL`
- Copy **anon public key** (starts with `eyJ...`) → paste as `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**4.** Add both values to your `.env.local` file

---

## 📁 Project Structure

```
haxudio/
│
├── app/
│   ├── page.jsx                 # Home page
│   ├── layout.jsx               # Root layout (Navbar + Footer)
│   ├── globals.css              # Global styles & theme variables
│   │
│   ├── services/
│   │   └── page.jsx             # Services + Pricing page
│   │
│   ├── projects/
│   │   └── page.jsx             # Portfolio + Filter page
│   │
│   ├── about/
│   │   └── page.jsx             # About us page
│   │
│   └── contact/
│       └── page.jsx             # Contact form page
│
├── components/
│   ├── Navbar.jsx               # Sticky navbar with dark/light toggle
│   └── Footer.jsx               # Footer with links & contact info
│
├── lib/
│   └── supabase.js              # Supabase client initialization
│
├── public/
│   └── logo.png                 # Haxudio logo
│
├── .env.local                   # Environment variables (not committed)
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── package.json
└── README.md
```


---

## 💼 Services & Pricing

### Services
- 🖥️ **Web Development** — Custom websites, web apps, e-commerce
- 🎨 **Graphic Design** — Logo, brand identity, UI/UX
- 🎬 **Video Editing** — Reels, promos, motion graphics
- 📱 **Social Media Management** — Content, scheduling, community
- 📈 **Digital Marketing** — SEO, Google Ads, Meta Ads

### Pricing Packages

| Package | Price | Highlights |
|---|---|---|
| **Basic** | PKR 25,000 | 1 Service · 5 Deliverables · 7-Day Delivery |
| **Standard** ⭐ | PKR 60,000 | 3 Services · 20 Deliverables · Priority Support |
| **Premium** | PKR 140,000 | All 5 Services · Unlimited · Dedicated Manager |

---

## 👥 Team

| Name | Role |
|---|---|
| **Malik Abdul Ghafoor** | Chief Executive Officer (CEO) |
| **Syed Ali** | Chief Technology Officer (CTO) |
| **Mian Dad** | Chief Marketing Officer (CMO) |
| **Farooq** | Chief Product Officer (CPO) |

---

## 📞 Contact

| | |
|---|---|
| 📧 **Email** | hello@haxudio.com |
| 📱 **WhatsApp** | +92 318 3690179 |
| 📍 **Location** | A-1 City, Brewery Road, Quetta, Pakistan |
| 💬 **WhatsApp Direct** | [wa.me/923183690179](https://wa.me/923183690179) |

---

## 🚢 Deployment

### Deploy on Vercel (Recommended)

**1.** Push code to GitHub

**2.** Go to [vercel.com](https://vercel.com) → Import your repository

**3.** Add environment variables in Vercel dashboard:

```
NEXT_PUBLIC_SUPABASE_URL       =  your_value
NEXT_PUBLIC_SUPABASE_ANON_KEY  =  your_value
```

**4.** Click **Deploy** ✅

### Build Locally

```bash
npm run build
npm run start
```

---

## 📝 Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

---

## 🔒 Environment Variables

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | ✅ Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon public key | ✅ Yes |

> ⚠️ Never commit `.env.local` to version control. It is already listed in `.gitignore`.

---

## 📄 License

This project is **proprietary and private.**
All rights reserved © 2025 Haxudio.

Unauthorized copying, distribution, or use of this code is strictly prohibited.

---

<div align="center">

Made with ❤️ by the **Haxudio Team**

🌍 Quetta, Pakistan · [haxudio.com](https://haxudio.com)

</div>
