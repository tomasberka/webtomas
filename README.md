# Tomáš - Video Produkce Web

Moderní webová stránka pro video produkci a Reels balíčky.
Postaveno na Next.js 14 (App Router), TypeScript, Tailwind CSS.

## Funkce
- **Reels Balíčky**: Přehledná nabídka s `packages.json` daty.
- **Dynamické Služby**: Stránky služeb generované z `services.json`.
- **Portfolio**: Prezentace práce.
- **Kontakt**: Formulář s validací (Zod) a odesíláním emailů (Resend).
- **SEO Ready**: Generovaný sitemap.xml, robots.txt, metadata.
- **Analytics**: Připraveno pro tracking událostí.

## Lokální Vývoj

1.  Instalace závislostí:
    ```bash
    npm install
    ```

2.  Spuštění vývojového serveru:
    ```bash
    npm run dev
    ```

3.  Otevřete [http://localhost:3000](http://localhost:3000).

## Nasazení (Vercel)

1.  Pushněte kód na GitHub.
2.  Importujte projekt ve Vercel Dashboardu.
3.  Nastavte proměnné prostředí (Environment Variables):
    - `RESEND_API_KEY`: Váš API klíč z Resend.com.
4.  Deploy.

## Struktura Obsahu
Veškerý textový obsah služeb a balíčků lze upravit v `src/content/`.
- `services.json`: Seznam služeb.
- `packages.json`: Reels balíčky.
- `portfolio.json`: Položky portfolia.
# webtomas
