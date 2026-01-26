# 🚀 Level Up Plan: jajsemtomas.cz

## ✅ Completed This Session

### CTA Sync (CZ ↔ EN)
- [x] **Sticky CTA** - Added phone button + "Konzultace zdarma" / "Free Consultation"
- [x] **Exit Intent Popup** - Changed from Quiz → Booking consultation focus
- [x] **Mobile Nav** - Added phone call button + calendar icon on CTA
- [x] **Footer** - Added booking button + Instagram link
- [x] **Booking Button Component** - Added Calendar icon, variant/size props

### Analytics
- [x] Added `trackExitIntent()` for popup tracking
- [x] Added `trackPhoneClick()` for phone CTA tracking

---

## 🎯 Phase 1: Quick Wins (1-2 days)

### SEO Fixes
| Task | Impact | Effort |
|------|--------|--------|
| Add `datePublished` to blog schema | ⭐⭐⭐ | 🟢 Easy |
| Add BreadcrumbList schema to all pages | ⭐⭐⭐ | 🟢 Easy |
| Add AggregateRating schema (testimonials) | ⭐⭐⭐⭐ | 🟢 Easy |
| Fix `lastModified` in sitemap (use real dates) | ⭐⭐ | 🟢 Easy |
| Add VideoObject schema to case studies | ⭐⭐⭐ | 🟡 Medium |

### Content
| Task | Impact | Effort |
|------|--------|--------|
| Move case studies to JSON file | ⭐⭐ | 🟢 Easy |
| Add internal links between blog posts | ⭐⭐⭐ | 🟡 Medium |
| Create "Kolik stojí video?" landing page | ⭐⭐⭐⭐ | 🟡 Medium |

---

## 🎯 Phase 2: Content Expansion (1 week)

### New Landing Pages
| Page | Target Keyword | Priority |
|------|---------------|----------|
| `/video-produkce-brno` | video produkce brno | 🔴 High |
| `/kameraman-ostrava` | kameraman ostrava | 🟡 Medium |
| `/reels-pro-e-shopy` | reels e-shop | 🔴 High |
| `/cenik-video-produkce` | cenik video | 🔴 High |

### Blog Topics (High Search Intent)
1. "Jak vybrat video producenta - checklist 2026"
2. "Video vs. foto pro e-shop - co funguje lépe?"
3. "Instagram vs TikTok pro firmy 2026"
4. "ROI video marketingu - jak měřit"

---

## 🎯 Phase 3: Technical SEO (2 weeks)

### Performance
- [ ] Audit Core Web Vitals with Lighthouse
- [ ] Optimize LCP (largest contentful paint)
- [ ] Lazy load YouTube embeds with facades
- [ ] Add `loading="lazy"` to below-fold images

### Structured Data
- [ ] Add FAQPage schema to homepage
- [ ] Add Service schema to each service page
- [ ] Add Person schema for about page
- [ ] Add HowTo schema to relevant blog posts

### Analytics Enhancements
- [ ] Track scroll depth (25%, 50%, 75%, 100%)
- [ ] Track YouTube video plays
- [ ] Track form field abandonment
- [ ] Set up GA4 conversions in admin

---

## 🎯 Phase 4: Off-Page SEO (Ongoing)

### Free Backlinks
| Source | Action | Status |
|--------|--------|--------|
| Firmy.cz | Create/claim profile | ⬜ |
| Zivefirmy.cz | Add business listing | ⬜ |
| Google Business | Claim, add videos | ⬜ |
| LinkedIn | Post weekly, link to blog | ⬜ |
| YouTube | Optimize video titles/descriptions | ⬜ |
| Instagram | Add link in bio, story links | ⬜ |

### Guest Posts / Collabs
- Reach out to marketing blogs for guest posts
- Collaborate with complementary services (photographers, social media managers)
- Get featured in "Best Video Producers in Prague" lists

---

## 📊 KPIs to Track

| Metric | Current | Target (3 months) |
|--------|---------|-------------------|
| Organic traffic | ? | +50% |
| Booking requests/month | ? | +100% |
| Phone calls tracked | 0 | 10+/month |
| Exit intent conversions | 0 | 5%+ |
| Avg session duration | ? | 2+ min |

---

## 🔧 Technical Debt

- [ ] Contact form uses Formspree → Consider Resend (already installed)
- [ ] "Zbývají 3 místa" is hardcoded → Make dynamic or remove
- [ ] Exit popup shows only once (localStorage) → Reset after 7 days
- [ ] Some client logos missing optimization

---

## 📅 Suggested Timeline

| Week | Focus |
|------|-------|
| Hour 1 | Phase 1 (All SEO fixes + schema) → Deploy |

---

## 💡 Quick Commands

```bash
# Build and check for errors
npm run build

# Run dev server
npm run dev

# Check for lint errors
npm run lint
```

---

*Last updated: January 26, 2026*
