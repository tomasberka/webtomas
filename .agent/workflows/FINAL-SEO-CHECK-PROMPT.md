# **🕵️ ULTIMATE SEO PRE-FLIGHT CHECK (Googlebot Simulation)**

**Role:** Působíš jako **Senior Google Search Engineer & Indexing Specialist**.

**Kontext:** Web jde do ostrého provozu. Majitel (Tomáš) potřebuje 100% jistotu, že web je **technicky viditelný** pro vyhledávače.

**Cíl:** Simulovat crawl a odhalit "Invisibility Killers" (chyby, které brání indexaci).

## **🛑 FÁZE 1: THE "INVISIBILITY" CHECK (Kritické)**

*Pokud toto selže, web neexistuje.*

1. **Robots.txt Validation:**  
   * Ověř obsah public/robots.txt (nebo src/app/robots.ts).  
   * Musí obsahovat: User-agent: \*, Allow: /.  
   * Nesmie obsahovat: Disallow: / (kromě admin cest, pokud existují).  
2. **Meta Robots Tag Scan:**  
   * Projdi layout.tsx a hlavní page.tsx.  
   * Hledej řetězec noindex nebo nofollow.  
   * **POŽADAVEK:** Musí být nastaveno (nebo defaultně) index, follow.  
3. **Canonical Self-Reference:**  
   * Ověř, že hlavní stránka a podstránky mají v \<head\> tag \<link rel="canonical" href="..." /\>.  
   * URL musí být absolutní (např. https://jajsemtomas.cz/kontakt, ne jen /kontakt).

## **🗺️ FÁZE 2: THE "MAP" CHECK (Navigace bota)**

1. **Sitemap Integrity:**  
   * Ověř vygenerovanou sitemapu (kód v sitemap.ts).  
   * Jsou v ní všechny klíčové URL (/, /sluzby, /o-mne, /kontakt, /portfolio)?  
   * Nejsou v ní "mrtvé" URL (např. staré /rezervace, které jsme smazali/přesměrovali)?  
2. **Orphaned Pages:**  
   * Existuje na webu stránka, na kterou nevede žádný interní odkaz z menu nebo patičky? (Simuluj v hlavě strukturu linků). Vše musí být prolinkované.

## **🧬 FÁZE 3: THE "DATA" CHECK (Rich Snippets)**

1. **JSON-LD Validation:**  
   * Zkontroluj syntaxi Schema.org (ProfessionalService, VideoObject).  
   * Jsou uzavřené všechny závorky { }?  
   * Obsahuje ProfessionalService klíčové údaje: Jméno, Popis, Měna (CZK), URL?

## **🚀 FÁZE 4: FINAL SMOKE TEST**

1. **404 Behavior:**  
   * Ověř, že neexistující stránka vrací správný status code (v Next.js defaultně 404\) a ne soft-404 (200 OK s prázdným obsahem).

**VÝSTUPNÍ REPORT:**

Odpověz mi POUZE formátem:

**STATUS: \[GO / NO-GO\]**

* **Robots.txt:** \[OK/FAIL\]  
* **Meta Index:** \[OK/FAIL\]  
* **Sitemap:** \[OK/FAIL\]  
* **Canonicals:** \[OK/FAIL\]  
* **Schema.org:** \[OK/FAIL\]

*Pokud je vše OK, napiš: "Web je připraven pro Google. Viditelnost zajištěna."*

*Pokud najdeš chybu, okamžitě ji oprav a reportuj až opravený stav.*

**EXECUTE SIMULATION.**