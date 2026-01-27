# **🚀 GO-LIVE PROTOKOL (Post-Deployment Checklist)**

**Role:** Tomáš Berka (Majitel & SEO Lead)

**Fáze:** Po nasazení na produkci (Cloudflare/Vercel)

**Cíl:** Vynutit si okamžitou indexaci a ověřit externí signály.

## **1\. GOOGLE SEARCH CONSOLE (GSC) \- "Budíček"**

*Googlebot je líný. Musíme ho popostrčit.*

1. **Sitemap Resubmission:**  
   * Jdi do sekce **Sitemaps**.  
   * Pokud tam je stará sitemap, smaž ji.  
   * Vlož znovu: https://jajsemtomas.cz/sitemap.xml (nebo .ts, podle toho, jak se generuje URL, ale pro Google musí být XML výstup).  
   * Ověř status: **Success**. Počet objevených URL by měl odpovídat počtu stránek (cca 5-7 hlavních \+ portfolio).  
2. **Force Indexing (Homepage):**  
   * Do horního vyhledávacího řádku zadej: https://jajsemtomas.cz  
   * Počkej na načtení dat.  
   * Klikni na **"Request Indexing"** (Požádat o indexování).  
   * *Tip:* Udělej to samé pro /kontakt a /sluzby, jsou to nejdůležitější stránky.

## **2\. SOCIAL PREVIEW CHECK (LinkedIn & Share)**

*Až to budeš sdílet s tím, že jdeš do HelloComp, musí to vypadat světově.*

1. **OpenGraph Validator:**  
   * Jdi na [OpenGraph.xyz](https://opengraph.xyz/) nebo použij **LinkedIn Post Inspector**.  
   * Vlož svou URL.  
   * **Kontrola:**  
     * Vidíš správný obrázek (OG Image)? (Měl by tam být tvůj brand/fotka, ne prázdné pole).  
     * Je titulek "Tomáš Berka | Video..." správně?  
   * *Pokud ne:* LinkedIn si cachuje náhledy až 7 dní. V Inspector toolu klikni na "Re-scrape", aby si natáhl nová data.

## **3\. GOOGLE MY BUSINESS (Firemní profil)**

*Tohle kód nevyřeší, ale pro "Video produkce Praha" je to klíčové.*

1. **Update Profilu:**  
   * Máš profil na Google Maps?  
   * Přidej tam "Novinku" (Update) s odkazem na nový web.  
   * Zkontroluj, že v tlačítku "Web" je správná URL (bez starých parametrů).

## **4\. ANALYTICS CHECK (Data Flow)**

*Nestačí mít kód, musí téct data.*

1. **Real-time Test:**  
   * Otevři si web na mobilu (odpojený od Wi-Fi, ať máš jinou IP).  
   * Otevři si GA4 v Real-time přehledu.  
   * **Vidíš se?** Pokud ne, nefunguje měření (často blokováno Cookie lištou – ověř, že po souhlasu data naskočí).

## **5\. FINAL UX "PALEC" TEST**

*Všechno funguje, ale co "lidský faktor"?*

1. **Formulář:**  
   * Pošli si přes web zkušební zprávu z /kontakt.  
   * Přišla ti na e-mail?  
   * Přišla ti notifikace?  
2. **Mobilní Menu:**  
   * Otevři web na telefonu.  
   * Funguje "hamburger" menu?  
   * Jde kliknout na telefonní číslo/email (mailto:)?

**STATUS:**

Pokud máš hotový **FINAL-SEO-CHECK-PROMPT** (kód) a odškrtneš si tento **GO-LIVE PROTOKOL** (externí svět), jsi na 100 % připraven.