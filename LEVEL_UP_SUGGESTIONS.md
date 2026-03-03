# 🚀 LEVEL UP: Já jsem Tomáš – Full Website Audit & Action Plan

**Audit Date:** 3. března 2026
**Current State:** Deployed on Cloudflare Pages (CZ: jajsemtomas.cz | EN: en.jajsemtomas.cz)

---

## 🎯 SUMMARY

| Status | Category | Count |
|--------|----------|-------|
| ✅ Working | Routes, Build, Deploy | All OK |
| 🗑️ Dead Code | Unused components/files | 5 items |
| ⚠️ SEO Issues | Brand consistency | 3 fixes needed |
| 🔧 Analytics | Unwired tracking | 5 functions |
| 🧹 Cleanup | Stray files | 3 files |

---

## 🗑️ DEAD CODE TO REMOVE

### Components (no imports anywhere)
| File | Status | Action |
|------|--------|--------|
| `src/components/ui/magnetic-button.tsx` | DEAD | Move to `.archive/dead-code/` |
| `src/components/ui/whatsapp-button.tsx` | DEAD | Move to `.archive/dead-code/` |
| `src/components/ui/floating-cta.tsx` | REDUNDANT | Remove from layouts, move to archive (StickyCTA replaces it) |

### Images (unused)
| File | Status | Action |
|------|--------|--------|
| `public/images/jajsemtomas-logo.png` | DEAD | Move to `.archive/dead-images/` |
| `public/images/logo.png` | PARTIAL | Used only in blog schema, consider consolidating to `logo-new.png` |

### Stray Files in Root (not in git-tracked location)
| File | Status | Action |
|------|--------|--------|
| `Firefly_GeminiFlash_create awesome favicon 687052.png` | STRAY | Delete or move to `.archive/` |
| `tomas kameraman praha logo.png` | STRAY | Delete or move to `.archive/` |
| `SocialVids - Case Studies.pdf` | STRAY | Move to `public/docs/` if needed, else delete |

---

## ⚠️ SEO FIXES NEEDED

### 1. EN Layout & Homepage – Wrong Brand Name
**Problem:** EN site still uses "Tomas Berka" and "I am Tomas" inconsistently
**Files:**
- `src/app/(en)/layout.tsx` – lines 27-45
- `src/app/(en)/en/page.tsx` – lines 25-28

**Fix:** Update to:
```typescript
// layout.tsx
title: {
  default: "I am Tomas | Filmmaker, Content Creator & UGC Actor",
  template: "%s | I am Tomas – Filmmaker & Content Creator",
},
description: "Filmmaker, content creator and UGC actor based in Prague. Event video, corporate films, UGC content for brands. Tomas Berka – 10+ years experience.",

// page.tsx  
title: "I am Tomas | Filmmaker, Content Creator & UGC Actor",
description: "Filmmaker, content creator and UGC actor based in Prague. Event video, corporate films, UGC content. Bilingual EN/CZ moderator. 10+ years experience.",
```

### 2. Redirect Pages – Wrong Brand in Title
**Problem:** Both redirect pages have old "Tomáš Berka" in title metadata
**Files:**
- `src/app/(cz)/akce-3-reels/page.tsx`
- `src/app/(en)/en/promo-3-reels/page.tsx`

**Fix:** Update metadata titles to brand name or remove metadata entirely (they're noindex anyway).

### 3. Blog Schema – Old Logo Reference
**Problem:** `src/app/(cz)/blog/[slug]/page.tsx` references `logo.png` instead of `logo-new.png`
**Fix:** Update JSON-LD schema to use `logo-new.png`

---

## 🔧 ANALYTICS GAPS

### Unwired Tracking Functions (defined in analytics.ts but NOT called)
| Function | Purpose | Where to Wire |
|----------|---------|---------------|
| `trackScrollDepth()` | Engagement depth | Service pages, blog posts |
| `trackServiceInteraction()` | Which services get views | `/sluzby/[slug]` pages |
| `trackPortfolioEngagement()` | Video play/watch metrics | Portfolio page |
| `trackBlogEngagement()` | Blog read metrics | Blog post pages |
| `trackQuizInteraction()` | Quiz funnel events | `/reels-quiz` page |
| `trackContentView()` | Content type tracking | All content pages |
| `trackCTAInteraction()` | CTA click location | Throughout site |
| `trackPhoneClick()` | Phone link clicks | Contact pages (use trackBookingClick instead?) |

### Wired but Sub-optimal
| Function | Issue |
|----------|-------|
| `trackBookingComplete()` | Only fires on `/dekuji` and `/en/thank-you` – if user books via Calendar and doesn't return, it never fires |

---

## 🧹 CLEANUP ACTIONS

### Remove FloatingCTA from Layouts
Both layouts import and render FloatingCTA, but StickyCTA already provides the same functionality with better UX (phone + whatsapp + calendar).

**Files to edit:**
- `src/app/(cz)/layout.tsx` – remove FloatingCTA import and usage
- `src/app/(en)/layout.tsx` – remove FloatingCTA import and usage

### Archive Redirect Route Folders (Optional)
The redirect routes exist only for backward compatibility. After 6 months, consider:
- Moving `src/app/(cz)/akce-3-reels/` to archive
- Moving `src/app/(en)/en/promo-3-reels/` to archive
- Adding redirects to `public/_redirects` instead

---

## ✅ WHAT'S WORKING WELL

### Routes (All OK)
| CZ Route | EN Route | Status |
|----------|----------|--------|
| `/` | `/en` | ✅ |
| `/o-mne` | `/en/about` | ✅ |
| `/kontakt` | `/en/contact` | ✅ |
| `/portfolio` | `/en/portfolio` | ✅ |
| `/sluzby/[slug]` | `/en/services/[slug]` | ✅ |
| `/blog` | `/en/blog` | ✅ |
| `/blog/[slug]` | `/en/blog/[slug]` | ✅ |
| `/faq` | `/en/faq` | ✅ |
| `/pripadove-studie` | `/en/case-studies` | ✅ |
| `/reels-balicky` | `/en/reels-packages` | ✅ |
| `/reels-quiz` | `/en/reels-quiz` | ✅ |
| `/ugc-herec` | `/en/ugc-creator` | ✅ |
| `/partner-socialvids` | `/en/partner-socialvids` | ✅ |
| `/vstup-na-trh` | `/en/gateway-strategy` | ✅ |
| `/rezervace` | `/en/booking` | ✅ |
| `/dekuji` | `/en/thank-you` | ✅ |
| `/ochrana-udaju` | `/en/privacy-policy` | ✅ |

### EN-Only Route (Intentional)
| Route | Purpose |
|-------|---------|
| `/en/free-video-audit` | UK market landing page |

### Components (Active)
- ✅ StickyCTA – Mobile bottom bar with 3 actions
- ✅ BookingButton – Direct Google Calendar
- ✅ MobileNav – Full mobile menu with CTAs
- ✅ CinematicHero – GSAP-animated hero
- ✅ ContactForm – With tracking
- ✅ PortfolioGrid – Category filtering
- ✅ Testimonials – Client carousels
- ✅ BreadcrumbSchema – SEO structured data
- ✅ CookieBanner – GDPR compliant
- ✅ ExitIntentPopup – Engagement tool
- ✅ SmoothScrollProvider – Lenis scroll
- ✅ CustomCursor – Desktop only

### Content Files (All Present)
- ✅ blog.json / blog-en.json
- ✅ case-studies.json / case-studies-en.json
- ✅ faq.json / faq-en.json
- ✅ packages.json / packages-en.json
- ✅ portfolio.json / portfolio-en.json (UGC category fixed)
- ✅ services.json / services-en.json
- ✅ testimonials.json / testimonials-en.json

---

## 🎬 IMMEDIATE ACTION PLAN

### Priority 1 – SEO (Do Now)
```bash
# Update EN site branding to match CZ
# Files: src/app/(en)/layout.tsx, src/app/(en)/en/page.tsx
```

### Priority 2 – Dead Code Cleanup
```bash
# Move unused components to archive
mkdir -p .archive/dead-code
mv src/components/ui/magnetic-button.tsx .archive/dead-code/
mv src/components/ui/whatsapp-button.tsx .archive/dead-code/
mv src/components/ui/floating-cta.tsx .archive/dead-code/

# Move unused images
mkdir -p .archive/dead-images
mv public/images/jajsemtomas-logo.png .archive/dead-images/

# Clean stray root files
rm "Firefly_GeminiFlash_create awesome favicon 687052.png"
rm "tomas kameraman praha logo.png"
mv "SocialVids - Case Studies.pdf" .archive/docs/
```

### Priority 3 – Remove FloatingCTA from Layouts
```bash
# Edit both layout.tsx files to remove FloatingCTA import and usage
```

### Priority 4 – Wire Analytics (Later)
- Add scroll depth tracking to service pages
- Add portfolio engagement tracking
- Add quiz funnel tracking

---

## 📊 HEALTH METRICS

| Metric | Status |
|--------|--------|
| Build | ✅ Clean (no warnings) |
| TypeScript | ✅ No errors |
| ESLint | ✅ Passing |
| Route Coverage | ✅ 17 CZ + 18 EN routes |
| Content Coverage | ✅ 8 JSON files × 2 locales |
| Mobile UX | ✅ StickyCTA + MobileNav |
| SEO | ⚠️ Brand consistency needed |
| Analytics | ⚠️ 7/12 functions wired |

---

## 🚀 FINAL CHECKLIST

- [ ] Update EN SEO metadata to match brand
- [ ] Remove FloatingCTA from both layouts
- [ ] Move dead components to archive
- [ ] Clean stray files from root
- [ ] Update blog schema logo reference
- [ ] Request Google re-index after deploy
- [ ] Wire remaining analytics functions (optional)

---

*Generated by automated audit • Já jsem Tomáš • jajsemtomas.cz*
