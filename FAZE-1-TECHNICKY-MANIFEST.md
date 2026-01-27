# 🏛️ FÁZE 1: TECHNICKÝ A KONVERZNÍ MANIFEST
## Hloubková Diagnostika Repozitáře `jajsemtomas.cz`

**Datum:** 2025  
**Perspektiva:** CTO & Lead Product Designer  
**Kritérium rozhodování:** "Vydělá to Tomášovi více peněz nebo ušetří čas?"

---

## 📊 EXECUTIVE SUMMARY

| Oblast | Stav | Priorita |
|--------|------|----------|
| 🏗️ Architektura | ✅ Solidní | - |
| ⚡ Performance | ⚠️ Zlepšit | VYSOKÁ |
| 🔍 SEO Struktura | ✅ Dobrá | - |
| 🎯 Konverzní trychtýř | ⚠️ Zlepšit | KRITICKÁ |
| 🌍 i18n Implementace | ⚠️ Nekonzistentní | STŘEDNÍ |
| 📱 Mobile UX | ✅ Funkční | - |
| 🔐 Bezpečnost | ✅ OK | - |

---

## 🏗️ 1. TECHNOLOGICKÝ STACK

### Jádro
```
Next.js 16.1.1 (App Router, Static Export)
React 19.2.3
TypeScript 5.9.3
Tailwind CSS 4 + @tailwindcss/typography
Framer Motion 12.23.26
```

### Formuláře & Validace
```
React Hook Form 7.69.0
Zod 4.3.4
Formspree (externí služba)
```

### Analytika
```
Google Analytics 4 (G-W75LP5M5EB)
Consent Mode v2 implementován
Custom tracking: bookingClick, exitIntent, phoneClick
```

### Hosting & CDN
```
Cloudflare Pages (static export)
next-image-export-optimizer (WEBP, blur placeholders)
Subdomain routing (en.jajsemtomas.cz)
```

### ✅ Co funguje správně:
1. **Static Export** = rychlé načítání, žádný server-side overhead
2. **Optimalizace obrázků** = automatický WEBP, blur placeholders
3. **Moderní React 19** = nejnovější features
4. **Tailwind 4** = menší bundle, rychlejší build

### ⚠️ Potenciální problémy:
1. **Resend dependency** = v package.json, ale nevidím využití (může být mrtvý kód)
2. **Framer Motion 12** = velký bundle (~40KB gzipped), použito minimálně

---

## 🔍 2. SEO BASELINE AUDIT

### Meta & Strukturovaná data ✅

| Stránka | Title | Description | Schema.org |
|---------|-------|-------------|------------|
| Homepage CZ | ✅ | ✅ | VideoObject, ProfessionalService, LocalBusiness, Organization |
| Homepage EN | ✅ | ✅ | Duplikováno |
| Blog | ✅ | ✅ | BlogPosting + Author |
| Služby | ✅ | ✅ | ProfessionalService + FAQPage |
| Portfolio | ✅ | ✅ | BreadcrumbSchema |
| Případové studie | ✅ | ✅ | VideoObject array |

### hreflang Implementace ✅
```tsx
alternates: {
  canonical: "https://jajsemtomas.cz",
  languages: { "en": "https://en.jajsemtomas.cz" }
}
```
- Správně implementováno na všech hlavních stránkách
- Cloudflare middleware routuje subdomény správně

### robots.txt & sitemap ✅
```
robots.ts - dynamicky generovaný
sitemap.ts - automatické indexování
```

### ⚠️ SEO Issues:

1. **Duplicitní schémata na homepage:**
   - LocalBusiness + ProfessionalService = redundance
   - Google preferuje jedno primární schéma

2. **Chybějící BreadcrumbSchema:**
   - `/kontakt` - CHYBÍ
   - `/o-mne` - CHYBÍ  
   - `/rezervace` - CHYBÍ
   - `/faq` - CHYBÍ

3. **Aggregate Rating source:**
   - Rating je z `testimonials.json`, ale není ověřitelný třetí stranou
   - Google může ignorovat self-reported ratings

---

## 🎯 3. KONVERZNÍ TRYCHTÝŘ ANALÝZA

### Hlavní konverzní cesty:

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│    HOMEPAGE     │────▶│   SLUŽBA/REELS  │────▶│    REZERVACE    │
│  (awareness)    │     │   (interest)    │     │   (conversion)  │
└─────────────────┘     └─────────────────┘     └─────────────────┘
         │                      │                       │
         ▼                      ▼                       ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   PORTFOLIO     │     │ PŘÍPADOVÉ STUDIE│     │    KONTAKT      │
│   (proof)       │     │    (trust)      │     │  (alternative)  │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### CTA Inventář:

| Lokace | CTA Text (CZ) | Typ | Konverzní síla |
|--------|---------------|-----|----------------|
| Header | "Konzultace zdarma" | Primary | ⭐⭐⭐ |
| Hero | "Nezávazná konzultace zdarma" | Primary | ⭐⭐⭐⭐ |
| Hero Secondary | "Prohlédnout portfolio" | Ghost | ⭐⭐ |
| Exit Intent | "Rezervovat konzultaci" | Modal | ⭐⭐⭐⭐⭐ |
| Sticky CTA | - | Mobile only | ⭐⭐⭐ |
| Footer | "Konzultace zdarma" | Secondary | ⭐⭐ |

### ⚠️ Konverzní problémy:

#### 1. **Příliš mnoho CTAs soutěží**
Hero section má 2 CTA vedle sebe:
```tsx
<Button size="lg">Nezávazná konzultace zdarma</Button>
<Button variant="outline">Prohlédnout portfolio</Button>
```
**Problém:** Rozptýlení pozornosti  
**Řešení:** Odstranit sekundární CTA z above-the-fold

#### 2. **Chybí urgence**
- Žádný "omezený čas" element
- Žádný social proof blízko CTA (počet konzultací tento měsíc)

#### 3. **Formulář na /kontakt vs /rezervace**
- `/rezervace` = Google Calendar embed (15 min konzultace)
- `/kontakt` = Formspree formulář

**Problém:** Dva různé konverzní endpointy bez jasného rozlišení

#### 4. **Exit Intent Popup**
```tsx
localStorage.setItem("exitIntentShown", "true");
```
**Problém:** Jednou zobrazeno = nikdy znovu (i po měsíci)  
**Řešení:** Expirovat po 7 dnech

---

## 🖥️ 4. UX/UI FRICTION POINTS

### Navbar Přeplněnost ⚠️

Desktop navigace má **12 položek**:
```
Reels Produkce | Vstup na trh | Portfolio | Reference | UGC | SocialVids | Blog | Quiz | FAQ | O mně | Kontakt | 🇨🇿🇬🇧
```

**Problém:** 
- Cognitive overload
- Menu je širší než viewport na menších laptopech
- Některé položky mají nízkou hodnotu (Quiz, FAQ)

**Doporučení:**
```
Primární:    Služby (dropdown) | Portfolio | Reference | O mně | Kontakt
Sekundární:  Blog | FAQ (v footeru)
Skrýt:       Quiz (landing page only), UGC (v dropdown)
```

### Trust Section Chybí na Homepage ⚠️

Aktuálně:
```
Hero → Promo Section → Services → Testimonials
```

Chybí:
- Logo bar klientů (důkaz autorit)
- Čísla/statistiky (500+ projektů zmíněno jen v textu)
- Media mentions (pokud existují)

### Video Loading ⚠️

```tsx
<video autoPlay loop muted playsInline preload="auto" poster="...">
```

**Issues:**
1. `preload="auto"` = stahuje celé video hned (špatné pro LCP)
2. Video v hero = blokuje rychlé vykreslení
3. Chybí loading skeleton

**Řešení:** 
- `preload="metadata"` 
- Lazy-load video until in viewport
- Fallback static image pro slow connections

---

## 📁 5. STRUKTURA CONTENT FILES

### JSON Content Strategy:

```
src/content/
├── blog.json          (CZ articles)
├── blog-en.json       (EN articles)
├── services.json      (CZ)
├── services-en.json   (EN)
├── testimonials.json  (CZ)
├── testimonials-en.json (EN)
├── portfolio.json     (CZ)
├── portfolio-en.json  (EN)
├── packages.json      (CZ)
├── packages-en.json   (EN)
├── case-studies.json  (CZ)
├── case-studies-en.json (EN)
├── faq.json           (CZ)
└── faq-en.json        (EN)
```

### ✅ Co je dobře:
- Konzistentní naming convention
- Oddělení jazykových verzí

### ⚠️ Problémy:

1. **Duplicitní struktury:**
   - `services.json` a `packages.json` překrývají obsah
   - Reels je v obou = potenciál pro nekonzistence

2. **Chybí shared ID system:**
   - Testimonials nemají link na case-studies
   - Portfolio items nemají link na služby

3. **No versioning:**
   - Při změně content není history

---

## 🔐 6. SECURITY & PRIVACY

### ✅ Implementováno:
- Formspree honeypot (`_gotcha` field)
- `noopener noreferrer` na external links
- Cookie consent (Consent Mode v2)
- GDPR stránka `/ochrana-udaju`

### ⚠️ Chybí:
- CSP Headers (Content Security Policy)
- Rate limiting na formulář (handled by Formspree)

---

## ⚡ 7. PERFORMANCE BASELINE

### Estimated Metrics (bez testování):

| Metrika | Očekávaná hodnota | Cíl |
|---------|-------------------|-----|
| LCP | ~2.5-3s | <2.5s |
| FID | <100ms | <100ms |
| CLS | <0.1 | <0.1 |
| Bundle Size | ~180KB (JS) | <150KB |

### Bottlenecks:

1. **Framer Motion** (~40KB gzipped)
   - Použito jen pro jednoduché fade-in animace
   - CSS animace by stačily

2. **Hero Video** (autoplay, preload=auto)
   - Blokuje rendering
   - Velký bandwidth hit

3. **Google Fonts** (pokud použito)
   - Extra round-trip
   - Font swap delay

---

## 📋 8. KRITICKÉ CHYBY K OPRAVĚ

### 🔴 P0 - Kritické (opravit ihned):

1. **Exit Intent expiration**
   ```tsx
   // Změnit z permanentního na 7-denní expiraci
   const expiry = Date.now() + 7 * 24 * 60 * 60 * 1000;
   localStorage.setItem("exitIntentExpiry", expiry);
   ```

2. **Video preload optimalizace**
   ```tsx
   // Změnit z preload="auto" na
   preload="metadata"
   ```

### 🟡 P1 - Vysoká priorita (tento týden):

1. Přidat BreadcrumbSchema na zbývající stránky
2. Zjednodušit navigaci (max 7 položek + dropdown)
3. Přidat trust/logo bar na homepage
4. Sjednotit konverzní cestu (rezervace vs kontakt)

### 🟢 P2 - Střední priorita (tento měsíc):

1. Odstranit Framer Motion, použít CSS animace
2. Refaktor content JSON na unified system
3. Přidat urgenci k CTA ("Zbývají 3 termíny tento měsíc")
4. A/B test: Single CTA vs dual CTA v hero

---

## 🎯 9. DOPORUČENÁ ARCHITEKTURA PRO ŠKÁLOVÁNÍ

### Současný stav:
```
Static Export → Cloudflare Pages
```

### Pro budoucí růst (pokud potřeba):
```
┌─────────────────┐
│  Headless CMS   │  (Sanity/Contentful pro content management)
│  (optional)     │
└────────┬────────┘
         │
┌────────▼────────┐
│   Next.js App   │
│  (App Router)   │
├─────────────────┤
│ Static + ISR    │  (Hybrid rendering pro blog)
└────────┬────────┘
         │
┌────────▼────────┐
│  Cloudflare     │
│  Pages + KV     │  (Edge caching, A/B testing)
└─────────────────┘
```

### Proč zatím NE:
- Aktuální JSON-based content je dostatečný
- CMS přidává komplexitu bez jasného ROI
- Tomáš sám aktualizuje content = nepotřebuje UI editor

---

## 📈 10. METRIKY PRO MĚŘENÍ ÚSPĚCHU

### Konverzní KPIs:
| Metrika | Baseline (odhadovaný) | Cíl po optimalizaci |
|---------|----------------------|---------------------|
| Booking rate | ~2% | 4% |
| Contact form completion | ~3% | 5% |
| Exit intent conversion | ~1% | 3% |
| Portfolio → Booking | ~1.5% | 3% |

### Technické KPIs:
| Metrika | Baseline | Cíl |
|---------|----------|-----|
| LCP | 2.8s | 2.0s |
| JS Bundle | 180KB | 120KB |
| Time to Interactive | 3.5s | 2.5s |

---

## ✅ ZÁVĚR FÁZE 1

Repozitář je **solidně postaven** s moderním stackem a dobrou SEO základnou. Hlavní příležitosti pro zlepšení jsou:

1. **Konverzní optimalizace** - zjednodušení cesty k rezervaci
2. **Performance** - redukce JS bundle, lazy-loading videa
3. **Trust building** - logo bar, urgence, social proof
4. **Navigační simplifikace** - méně je více

### Další kroky (FÁZE 2):
1. Implementovat P0 opravy
2. Spustit Lighthouse audit pro baseline
3. Nastavit Google Analytics goals pro konverze
4. A/B testovat CTA varianty

---

*Dokument vytvořen jako součást hloubkové analýzy repozitáře. Všechny změny by měly být prioritizovány podle kritéria: "Vydělá to Tomášovi peníze nebo ušetří čas?"*
