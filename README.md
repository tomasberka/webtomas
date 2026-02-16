# Já jsem Tomáš — Video Produkce & International Event Services

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat&logo=tailwindcss)
![Cloudflare](https://img.shields.io/badge/Deploy-Cloudflare-F38020?style=flat&logo=cloudflare)

**🔗 Live**: [jajsemtomas.cz](https://jajsemtomas.cz) | [en.jajsemtomas.cz](https://en.jajsemtomas.cz)

Profesionální webová stránka pro video produkci, **mezinárodní event services** (Berlin, London), event moderování a filmmaking služby. Postaveno na Next.js 16 s statickým exportem pro maximální rychlost.

---

## 🚀 **MASTER PROMPT - Start Here!**

**📋 [MASTER_PROMPT.md](./MASTER_PROMPT.md)** ⭐⭐⭐ **← Everything in ONE document!**

Complete 8-week implementation plan with all actions, templates, and strategies consolidated into a single 39KB document. Copy-paste ready for AI assistants or use as your master checklist.

**Perfect for:**
- Getting complete overview in one place
- Feeding to AI assistants (Claude, ChatGPT)
- Following week-by-week action plan
- Having all templates in one document

---

## 🆕 International Expansion & New Services

**NEW Services Added:**
- 🌍 **International Event Video** - Berlin, London, Europe
- 🎤 **Event Moderator & Host** - Bilingual (EN/CZ) conference moderation
- 🎭 **Corporate Actor & Spokesperson** - On-camera talent for brand videos

**📋 Additional Resources:**
- 🎯 **[QUICK_START_INTERNATIONAL.md](./QUICK_START_INTERNATIONAL.md)** - What to do RIGHT NOW (day-by-day)
- 📍 **[INTERNATIONAL_EXPANSION.md](./INTERNATIONAL_EXPANSION.md)** - Complete strategy & templates
- 🗺️ **[ACTION_ROADMAP.md](./ACTION_ROADMAP.md)** - 8-week detailed implementation plan
- 📝 **[CONTENT_BRIEFS.md](./CONTENT_BRIEFS.md)** - Ready-to-write page structures
- 📊 **[ANALYTICS_README.md](./ANALYTICS_README.md)** - Analytics & tracking guide
- 📄 **[SUMMARY.md](./SUMMARY.md)** - Executive summary

---

## ✨ Funkce

### Obsah & Služby
- **Reels Balíčky** — 4 cenové balíčky (Start, Růst, Dominance, Jen Střih)
- **Dynamické Služby** — 6 služeb (Reels, Kreativní produkce, Event, Livestream, Postprodukce, Voiceover)
- **Portfolio** — Prezentace práce s lightbox galerií
- **Blog** — Dynamicky generované články
- **Případové studie** — Reference a výsledky klientů
- **FAQ** — Centralizovaný systém otázek a odpovědí

### Bilingvální podpora
- 🇨🇿 Čeština (primární)
- 🇬🇧 Angličtina
- Hreflang tagy pro SEO

### SEO & Marketing
- Dynamický `sitemap.xml` s prioritami
- `robots.txt` s crawl rules
- Open Graph & Twitter Cards metadata
- Strukturovaná data

### Konverzní nástroje
- 📧 Kontaktní formulář (Zod validace + Resend)
- 🚪 Exit-intent popup
- 📱 Sticky mobile CTA
- 🍪 Cookie consent banner (GDPR)
- 📊 GA4 s Consent Mode v2
- 🔥 Promo banner (akce-3-reels)

### Technické
- ⚡ Statický export pro rychlé načítání
- 🖼️ Automatická WEBP optimalizace obrázků
- 🎬 Framer Motion animace
- 📐 Plně responzivní design

---

## 📁 Struktura projektu

```
src/
├── app/
│   ├── (cz)/           # České stránky
│   ├── (en)/           # Anglické stránky
│   ├── sitemap.ts      # Dynamický sitemap
│   └── robots.ts       # Robots.txt
├── components/
│   ├── layout/         # Navbar, Footer
│   ├── sections/       # Page sections
│   └── ui/             # Reusable components
├── content/            # JSON datové soubory
│   ├── services.json   # Služby (CZ)
│   ├── packages.json   # Balíčky (CZ)
│   ├── portfolio.json  # Portfolio
│   ├── blog.json       # Blog články
│   ├── faq.json        # FAQ
│   └── testimonials.json
└── lib/                # Utility funkce
```

---

## 🚀 Lokální vývoj

### Instalace

```bash
npm install
```

### Spuštění dev serveru

```bash
npm run dev
```

Otevřete [http://localhost:3000](http://localhost:3000)

### Build pro produkci

```bash
npm run build
```

> Build automaticky spustí `next-image-export-optimizer` pro WEBP konverzi.

---

## 🔐 Environment Variables

| Proměnná | Popis | Povinná |
|----------|-------|---------|
| `RESEND_API_KEY` | API klíč z [Resend.com](https://resend.com) pro email | ✅ Ano |

### GitHub Secrets (pro automatický deploy)

| Secret | Popis |
|--------|-------|
| `CLOUDFLARE_API_TOKEN` | API token z Cloudflare s Pages oprávněními |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Account ID |
| `RESEND_API_KEY` | API klíč pro build |

---

## 📦 NPM Scripts

| Script | Popis |
|--------|-------|
| `npm run dev` | Spustí vývojový server |
| `npm run build` | Build + optimalizace obrázků |
| `npm run start` | Spustí production server |
| `npm run lint` | ESLint kontrola |

---

## 🌍 Nasazení (Cloudflare Pages)

### Automatický deploy (GitHub Actions)

Push na `main` branch automaticky spustí deploy přes GitHub Actions:

1. Nastavte GitHub Secrets:
   - `CLOUDFLARE_API_TOKEN` - API token z Cloudflare
   - `CLOUDFLARE_ACCOUNT_ID` - ID vašeho Cloudflare účtu
   - `RESEND_API_KEY` - API klíč pro email
2. Push na `main` branch → automatický deploy

### Manuální deploy

1. Push kódu na GitHub
2. Import projektu v [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
3. Build nastavení:
   - Build command: `npm run build`
   - Output directory: `out`
4. Nastavte Environment Variables:
   - `RESEND_API_KEY`
5. Deploy

---

## 📝 Úprava obsahu

Veškerý obsah je v `src/content/`:

| Soubor | Obsah |
|--------|-------|
| `services.json` | Služby a jejich popisy |
| `packages.json` | Reels balíčky a ceny |
| `portfolio.json` | Portfolio položky |
| `blog.json` | Blog články |
| `faq.json` | FAQ otázky |
| `testimonials.json` | Reference klientů |

Pro anglickou verzi použijte `-en.json` suffix (např. `services-en.json`).

---

## 📄 License

Private project © 2025 Tomáš Berka
