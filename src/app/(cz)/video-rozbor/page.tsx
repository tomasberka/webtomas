import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Search,
  FileText,
  Clapperboard,
  Check,
  ArrowRight,
  Clock,
  TrendingUp,
  Eye,
  Zap,
  Star,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Video Rozbor Zdarma | Scénář & Natáčení 3 Reels za den",
  description:
    "Získejte bezplatný rozbor vašeho video obsahu. Na základě auditu připravím scénář a za jeden natáčecí den natočíme 3 profesionální Reels. Od 20 000 Kč.",
  keywords: [
    "video rozbor zdarma",
    "video audit instagram",
    "natáčení reels praha",
    "scénář pro reels",
    "jednodenní natáčení",
    "video produkce praha",
    "profesionální reels",
    "instagram video strategie",
  ],
  alternates: {
    canonical: "https://jajsemtomas.cz/video-rozbor",
    languages: {
      en: "https://en.jajsemtomas.cz/video-audit",
    },
  },
};

export default function VideoRozborPage() {
  return (
    <div className="py-12 md:py-24">
      <BreadcrumbSchema
        items={[
          { name: "Domů", url: "https://jajsemtomas.cz" },
          { name: "Video Rozbor Zdarma", url: "https://jajsemtomas.cz/video-rozbor" },
        ]}
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Video Rozbor & Jednodenní Natáčení 3 Reels",
            description:
              "Bezplatný video rozbor vašeho obsahu + profesionální scénář a jednodenní natáčení 3 Reels.",
            provider: {
              "@type": "ProfessionalService",
              name: "Tomáš Berka – Kameraman Praha",
              url: "https://jajsemtomas.cz",
            },
            areaServed: { "@type": "City", name: "Praha" },
            offers: {
              "@type": "Offer",
              name: "Jednodenní natáčení 3 Reels",
              priceCurrency: "CZK",
              price: "20000",
              description:
                "Video rozbor zdarma, tvorba scénáře, jednodenní natáčení 3 Reels včetně postprodukce.",
            },
          }),
        }}
      />

      <Container>
        {/* ========== HERO ========== */}
        <section className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/10 text-primary">
            🎯 Nový způsob spolupráce
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Video rozbor <span className="text-primary">zdarma</span>.
            <br />
            Pak jeden den = 3 Reels.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Pošlete mi svůj Instagram nebo web. Podívám se na váš obsah, řeknu
            vám <strong>co vám funguje a co ne</strong>, a navrhnu scénář na 3
            Reels, které natočíme za jeden den.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="#chci-rozbor">
              <Button
                size="lg"
                className="h-14 px-10 text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                🔍 Chci rozbor zdarma
              </Button>
            </Link>
            <Link href="#jak-to-funguje">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-10 text-lg font-bold"
              >
                Jak to funguje? <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* ========== 3-STEP PROCESS ========== */}
        <section id="jak-to-funguje" className="mb-24 scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Od rozboru k hotovým videím za 3 kroky
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Žádné zbytečné schůzky. Jasný proces s konkrétním výstupem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {/* Step 1 — Free Audit */}
            <div className="relative glass-card rounded-2xl p-8 text-center group hover:border-primary/30 transition-all">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold border-green-500/30 bg-green-500/10 text-green-500 mb-4">
                ZDARMA
              </div>
              <h3 className="text-xl font-bold mb-3">Video Rozbor</h3>
              <p className="text-muted-foreground leading-relaxed">
                Pošlete mi odkaz na svůj Instagram / TikTok / web. Do{" "}
                <strong>48 hodin</strong> dostanete personalizovaný video rozbor
                — co funguje, co vylepšit, a konkrétní doporučení pro váš obor.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-left">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  Analýza obsahu a formátů
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  Srovnání s konkurencí
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  3 konkrétní tipy na zlepšení
                </li>
              </ul>
            </div>

            {/* Step 2 — Script */}
            <div className="relative glass-card rounded-2xl p-8 text-center group hover:border-primary/30 transition-all">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold border-primary/30 bg-primary/10 text-primary mb-4">
                NA MÍRU
              </div>
              <h3 className="text-xl font-bold mb-3">Tvorba Scénáře</h3>
              <p className="text-muted-foreground leading-relaxed">
                Na základě rozboru vytvořím{" "}
                <strong>scénář pro 3 Reels</strong> — hooky, strukturu,
                vizuální styl. Vy jen schválíte a připravíte se na natáčení.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-left">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  3× hook + scénář + shot list
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  Vizuální reference a moodboard
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  Optimalizováno pro váš obor
                </li>
              </ul>
            </div>

            {/* Step 3 — Shoot Day */}
            <div className="relative glass-card rounded-2xl p-8 text-center group hover:border-primary/30 transition-all border-2 border-primary/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clapperboard className="h-8 w-8 text-primary" />
              </div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold border-amber-500/30 bg-amber-500/10 text-amber-500 mb-4">
                NATÁČECÍ DEN
              </div>
              <h3 className="text-xl font-bold mb-3">1 den → 3 Reels</h3>
              <p className="text-muted-foreground leading-relaxed">
                Přijedu s kamerou, natočíme <strong>3 Reels podle scénáře</strong>. 
                Kompletní postprodukce — střih, grafika, zvuk, titulky. 
                Hotovo do <strong>7 dní</strong>.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-left">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-500 flex-shrink-0" />
                  Profesionální kamera + osvětlení
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-500 flex-shrink-0" />
                  DaVinci Resolve postprodukce
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-500 flex-shrink-0" />
                  3 hotová videa ready to post
                </li>
              </ul>
            </div>
          </div>

          {/* Connecting arrows (desktop) */}
          <div className="hidden md:flex justify-center items-center gap-4 mt-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full font-medium">Zdarma</span>
              <ArrowRight className="h-4 w-4" />
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Schválení</span>
              <ArrowRight className="h-4 w-4" />
              <span className="bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full font-medium">od 20 000 Kč</span>
            </div>
          </div>
        </section>

        {/* ========== WHAT'S INCLUDED ========== */}
        <section className="mb-24">
          <div className="bg-card border-2 border-primary/20 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Co dostanete za jeden natáčecí den
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Žádné skryté poplatky. Cena <strong>od 20 000 Kč</strong>{" "}
                  zahrnuje vše od scénáře po finální export.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: FileText,
                      title: "Scénáře a shot list",
                      desc: "3× detailní scénář s hooky, CTA a vizuálním plánem",
                    },
                    {
                      icon: Clapperboard,
                      title: "Celý natáčecí den",
                      desc: "Profesionální kamera, osvětlení, mikrofon — vše s sebou",
                    },
                    {
                      icon: Zap,
                      title: "Kompletní postprodukce",
                      desc: "Střih, color grading, SFX, dynamické titulky, hudba",
                    },
                    {
                      icon: TrendingUp,
                      title: "3 hotová Reels",
                      desc: "Optimalizovaná pro IG/TikTok, formát 9:16, ready to post",
                    },
                    {
                      icon: Clock,
                      title: "Dodání do 7 dní",
                      desc: "Náhled do 48 h, finální verze do týdne po natáčení",
                    },
                    {
                      icon: Eye,
                      title: "1 kolo revizí v ceně",
                      desc: "Úpravy na míru — chci, aby výsledek seděl na 100 %",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="bg-primary/10 rounded-lg p-2 mt-0.5 flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual / Price Card */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
                  <p className="text-sm font-medium text-primary mb-2">
                    KOMPLETNÍ BALÍČEK
                  </p>
                  <div className="text-5xl md:text-6xl font-bold mb-2">
                    20 000 <span className="text-2xl font-medium">Kč</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Video rozbor zdarma + scénář + natáčecí den + postprodukce
                  </p>
                  <ul className="text-left space-y-3 mb-8 max-w-xs mx-auto">
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      Video rozbor — zdarma, bez závazku
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      3× scénář na míru vašemu brandu
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      Celý natáčecí den v Praze
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      3 hotová videa do 7 dní
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      Střih, grafika, zvuk, titulky
                    </li>
                  </ul>
                  <Link href="#chci-rozbor">
                    <Button
                      size="lg"
                      className="w-full h-14 text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                    >
                      🔍 Začít video rozborem zdarma
                    </Button>
                  </Link>
                  <p className="text-xs text-muted-foreground mt-3">
                    Nejdřív rozbor, pak se rozhodnete. Žádný závazek.
                  </p>
                </div>

                {/* Social Proof */}
                <div className="bg-muted/30 rounded-xl p-6 border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold border-2 border-background">
                        TB
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    &ldquo;Tomáš nám přesně ukázal, co děláme špatně. Jeden
                    natáčecí den a máme obsah na měsíc.&rdquo;
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    — Spokojený klient
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== WHY THIS WORKS ========== */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Proč tohle funguje líp než &ldquo;natočte si sami&rdquo;
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Search,
                title: "Data, ne dojmy",
                desc: "Rozbor odhalí, co váš cílovka opravdu sleduje — ne co si myslíte, že chce.",
              },
              {
                icon: FileText,
                title: "Scénář = jistota",
                desc: "Přesně víte, co budete říkat a dělat. Žádné trapné impro před kamerou.",
              },
              {
                icon: Clock,
                title: "Jeden den stačí",
                desc: "3 Reels za jeden natáčecí den. Minimální zásah do vašeho pracovního času.",
              },
              {
                icon: TrendingUp,
                title: "Obsah na měsíc",
                desc: "3 kvalitní videa vystačí na 3–4 týdny strategického postování.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-6 text-center hover:border-primary/20 transition-all"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========== FOR WHOM ========== */}
        <section className="mb-24">
          <div className="bg-muted/20 border rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
              Pro koho je to ideální
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  emoji: "🏢",
                  title: "Firmy a startupy",
                  desc: "Potřebujete profi obsah na sociální sítě, ale nechcete platit agenturu za desítky tisíc měsíčně.",
                },
                {
                  emoji: "👤",
                  title: "Osobní brandy",
                  desc: "Koučové, lektoři, konzultanti — chcete být vidět, ale nevíte, jak na to před kamerou.",
                },
                {
                  emoji: "🛍️",
                  title: "E-shopy a produkty",
                  desc: "Produktová videa, unboxingy, how-to — formáty, které prodávají na Instagramu i TikToku.",
                },
              ].map((item, i) => (
                <div key={i} className="text-center space-y-3">
                  <div className="text-4xl mb-2">{item.emoji}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== CTA / FORM ========== */}
        <section id="chci-rozbor" className="mb-16 scroll-mt-24">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-bold border-green-500/30 bg-green-500/10 text-green-500">
              ✓ Zdarma a bez závazku
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Chci video rozbor zdarma
            </h2>
            <p className="text-lg text-muted-foreground">
              Pošlete mi odkaz na váš Instagram nebo web. Do 48 hodin vám pošlu
              personalizovaný rozbor s konkrétními doporučeními.
            </p>

            <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 text-left space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium mb-2">📞 Zavolat / napsat</p>
                  <a
                    href="tel:+420735846329"
                    className="flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    +420 735 846 329
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">✉️ Email</p>
                  <a
                    href="mailto:msg@jajsemtomas.cz?subject=Chci video rozbor zdarma&body=Ahoj Tomáši, tady je odkaz na můj profil/web: "
                    className="flex items-center gap-2 text-primary hover:underline font-medium break-all"
                  >
                    msg@jajsemtomas.cz
                  </a>
                </div>
              </div>

              <div className="border-t pt-6 space-y-4">
                <p className="font-semibold text-center">Nebo rovnou přes WhatsApp</p>
                <div className="flex justify-center">
                  <a
                    href="https://wa.me/420732483004?text=Ahoj%20Tom%C3%A1%C5%A1i%2C%20m%C3%A1m%20z%C3%A1jem%20o%20video%20rozbor%20zdarma.%20Tady%20je%20odkaz%20na%20m%C5%AFj%20profil%3A%20"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="h-14 px-10 text-lg font-bold bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                    >
                      💬 Napsat na WhatsApp
                    </Button>
                  </a>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Stačí poslat odkaz na váš Instagram / TikTok / web — rozbor
                  dostanete do 48 hodin.
                </p>
              </div>

              <div className="border-t pt-6">
                <p className="text-sm font-medium text-center mb-4">Nebo si rovnou zarezervujte hovor</p>
                <div className="flex justify-center">
                  <Link
                    href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Wf1BjdwQdJU84AymHizbMjQdNFMgFHGmSvvD112G3Yv_TuuI5mNYVoeChrHBIw4uZY-w7nt7_"
                    target="_blank"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-14 px-10 text-lg font-bold hover:-translate-y-1 transition-all"
                    >
                      📅 Vybrat termín v kalendáři
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-green-500" /> Odpověď do 48h
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-green-500" /> Bez závazku
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-green-500" /> 10+ let praxe
              </span>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
