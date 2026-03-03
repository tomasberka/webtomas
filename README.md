# Tomáš Berka — Kameraman & Produkce Praha

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat&logo=tailwindcss)
![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?style=flat&logo=greensock)
![Cloudflare](https://img.shields.io/badge/Deploy-Cloudflare-F38020?style=flat&logo=cloudflare)

**Live**: [jajsemtomas.cz](https://jajsemtomas.cz) | [en.jajsemtomas.cz](https://en.jajsemtomas.cz)

Professional video production website for **Tomáš Berka — Kameraman Praha**. Cinematic dark theme with film grain overlay, GSAP animations, Lenis smooth scroll, glassmorphism UI, and custom cursor. Built on Next.js 16 with static export for maximum performance.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.1 (App Router, static export) |
| Language | TypeScript 5.9, React 19.2 |
| Styling | Tailwind CSS v4, custom CSS design system |
| Animations | GSAP 3.14 (timeline, word-reveal, elastic-snap) |
| Scroll | Lenis smooth scroll (expo easing, duration 1.2) |
| Images | next-image-export-optimizer (auto WEBP) |
| Forms | React Hook Form + Zod validation |
| Analytics | GA4 with Consent Mode v2 |
| Deploy | Cloudflare Pages |

---

## Design System

**Theme**: Deep Black `#0A0A0A` + Neon Amber `#FFBF00` | Font: Montserrat 400–900

| Effect | Description |
|--------|-------------|
| Film grain | SVG noise filter overlay, 8s stepped animation, `mix-blend-mode: overlay` |
| Custom cursor | Amber dot + ring, Play icon on video hover, touch-device aware |
| Glassmorphism | `.glass`, `.glass-strong`, `.glass-card` — frosted backdrop-blur panels |
| Magnetic button | Radial gradient follows cursor via `--mouse-x`/`--mouse-y` CSS vars |
| Cinematic hero | GSAP word-by-word reveal, showreel video background, glass stat cards |
| Floating CTA | Scroll-aware glowing booking button (appears after 400px) |
| Section dividers | Amber gradient 1px lines between content blocks |
| Bento grid | 4-column responsive grid with scale hover (CSS ready) |

---

## Features

### Content & Services
- **Reels balíčky** — 4 pricing tiers (Start, Růst, Dominance, Jen Střih)
- **Dynamic services** — 6 services loaded from JSON (Reels, Creative, Event, Livestream, Post, Voiceover)
- **Portfolio** — Video showcase with lightbox gallery
- **Blog** — Dynamically generated articles from JSON
- **Case studies** — Client results and references
- **FAQ** — Centralized Q&A system

### Bilingual
- 🇨🇿 Czech (primary — `jajsemtomas.cz`)
- 🇬🇧 English (`en.jajsemtomas.cz`)
- Hreflang tags for SEO

### SEO & Marketing
- Dynamic `sitemap.xml` with priorities
- `robots.txt` with crawl rules
- Open Graph & Twitter Cards
- JSON-LD structured data (LocalBusiness, BreadcrumbList)
- "Kameraman Praha" keyword optimization

### Conversion Tools
- Contact form (Zod + Resend email)
- Exit-intent popup
- Sticky mobile CTA
- Floating CTA (scroll-aware, amber glow)
- Cookie consent banner (GDPR)
- GA4 with Consent Mode v2
- Promo banner (akce-3-reels)

---

## Project Structure

```
src/
├── app/
│   ├── globals.css              # Theme + design system (grain, cursor, glass, etc.)
│   ├── (cz)/
│   │   ├── layout.tsx           # CZ layout (Lenis, Cursor, FloatingCTA, film-grain)
│   │   └── page.tsx             # CZ homepage (CinematicHero, glass-card services)
│   └── (en)/
│       ├── layout.tsx           # EN layout (same providers)
│       └── en/page.tsx          # EN homepage
├── components/
│   ├── providers/
│   │   ├── smooth-scroll.tsx    # Lenis wrapper
│   │   └── custom-cursor.tsx    # Dot + ring + play icon
│   ├── sections/
│   │   ├── cinematic-hero.tsx   # GSAP word-reveal hero
│   │   ├── package-card.tsx     # Pricing cards
│   │   └── testimonials.tsx     # Client testimonials
│   ├── layout/
│   │   ├── navbar.tsx           # Navigation
│   │   ├── mobile-nav.tsx       # Mobile menu
│   │   └── footer.tsx           # 5-column SEO footer
│   ├── ui/
│   │   ├── magnetic-button.tsx  # GSAP elastic-snap button
│   │   ├── floating-cta.tsx     # Scroll-aware booking CTA
│   │   ├── cookie-banner.tsx    # GDPR cookie consent
│   │   ├── exit-intent-popup.tsx
│   │   └── ...                  # badge, button, card, input, etc.
│   ├── forms/
│   │   └── contact-form.tsx     # React Hook Form + Zod
│   ├── seo/
│   │   └── breadcrumb-schema.tsx
│   └── tracking/
│       ├── booking-button.tsx
│       └── booking-complete-tracker.tsx
├── content/                     # JSON data (CZ + EN pairs)
│   ├── services.json / services-en.json
│   ├── packages.json / packages-en.json
│   ├── portfolio.json / portfolio-en.json
│   ├── blog.json / blog-en.json
│   ├── faq.json / faq-en.json
│   ├── case-studies.json / case-studies-en.json
│   └── testimonials.json / testimonials-en.json
└── lib/
    ├── analytics.ts             # GA4 tracking functions
    └── utils.ts                 # cn() utility
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

```bash
# Production build + image optimization
npm run build
```

---

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Build + next-image-export-optimizer |
| `npm run start` | Production server |
| `npm run lint` | ESLint check |

---

## Deploy (Cloudflare Pages)

1. Push to GitHub
2. Import in [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
3. Build settings:
   - Build command: `npm run build`
   - Output directory: `out`
4. Set environment variables (`RESEND_API_KEY`)

### Redirects (`public/_redirects`)
```
https://en.jajsemtomas.cz/* /en/:splat 200
/rezervace /kontakt 301
/en/free-video-audit /en/services 301
/en/booking /en/contact 301
```

---

## Content Editing

All content lives in `src/content/` as JSON pairs:

| File | Content |
|------|---------|
| `services.json` | Services & descriptions |
| `packages.json` | Reels pricing tiers |
| `portfolio.json` | Portfolio items |
| `blog.json` | Blog articles |
| `faq.json` | FAQ questions |
| `case-studies.json` | Client case studies |
| `testimonials.json` | Client testimonials |

English versions use `-en.json` suffix (e.g., `services-en.json`).

---

## Archive

Previous planning docs from Session 1 are archived in `.archive/docs/`:
- `MASTER_PROMPT.md` — Complete 8-week implementation plan
- `ACTION_ROADMAP.md` — Phase-by-phase roadmap
- `INTERNATIONAL_EXPANSION.md` — Berlin/London strategy
- `CONTENT_BRIEFS.md` — Landing page templates
- `ANALYTICS_README.md` — Analytics tracking guide

---

## License

Private project © 2026 Tomáš Berka
