import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Testimonials } from "@/components/sections/testimonials";
import { CinematicHero } from "@/components/sections/cinematic-hero";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clapperboard, Smartphone, Calendar, Radio, MonitorPlay, Globe, User, Mic } from "lucide-react";
import servicesData from "@/content/services.json";
import testimonialsData from "@/content/testimonials.json";
import { Metadata } from "next";

// Map icon strings to components
const icons = {
  Smartphone,
  Clapperboard,
  Calendar,
  Radio,
  MonitorPlay,
  Globe,
  User,
  Mic,
};

export const metadata: Metadata = {
  title: "Já jsem Tomáš | Kameraman Praha – Event Video & Video Produkce",
  description: "Kameraman Praha pro eventy, konference a firemní natáčení. Moderátor EN/CZ. DaVinci Resolve postprodukce. Tomáš Berka – 10+ let praxe.",
  keywords: ["kameraman praha", "kameraman", "video produkce praha", "event video praha", "natáčení konferencí", "moderátor eventu", "firemní video", "profesionální kameraman", "DaVinci Resolve", "tvorba reels", "kameraman na event"],
  alternates: {
    canonical: "https://jajsemtomas.cz",
    languages: {
      "en": "https://en.jajsemtomas.cz"
    }
  },
  verification: {
    google: "CeEtdfWCx-4OSJn7uLwjJF4OdVysGkHTkPGZRIt7PTY",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-16">
      {/* ProfessionalService Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Tomáš Berka – Kameraman & Video Produkce Praha",
            "image": "https://jajsemtomas.cz/images/tomas-hero.jpg",
            "description": "Profesionální kameraman Praha. Event video, firemní natáčení, konference, DaVinci Resolve postprodukce.",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Praha",
              "addressCountry": "CZ"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 50.0755,
              "longitude": 14.4378
            },
            "url": "https://jajsemtomas.cz",
            "telephone": "+420735846329",
            "email": "msg@jajsemtomas.cz",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            "areaServed": ["Praha", "Česká republika", "Europe"]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Tomáš Berka – Kameraman Praha",
            "url": "https://jajsemtomas.cz",
            "logo": "https://jajsemtomas.cz/images/logo-new.png",
            "description": "Profesionální kameraman a video produkce Praha. Event video, firemní natáčení, postprodukce DaVinci Resolve.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Praha",
              "addressCountry": "CZ"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "telephone": "+420735846329",
              "email": "msg@jajsemtomas.cz",
              "availableLanguage": ["Czech", "English"]
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Tomáš Berka – Kameraman & Video Produkce Praha",
            "image": "https://jajsemtomas.cz/images/tomas-hero.jpg",
            "description": "Profesionální kameraman Praha. Event video, firemní natáčení, konference, DaVinci Resolve postprodukce.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Praha",
              "addressCountry": "CZ"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 50.0755,
              "longitude": 14.4378
            },
            "url": "https://jajsemtomas.cz",
            "telephone": "+420735846329",
            "areaServed": [
              {
                "@type": "City",
                "name": "Praha"
              },
              {
                "@type": "Country",
                "name": "Česká republika"
              },
              {
                "@type": "Place",
                "name": "International"
              }
            ],
            "sameAs": [
              "https://www.instagram.com/jajsemtomas.cz/",
              "https://www.facebook.com/tomasberkaofficial/",
              "https://www.linkedin.com/in/berkatomas"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "bestRating": "5",
              "worstRating": "1",
              "ratingCount": String(testimonialsData.filter(t => t.quote && t.quote.trim().length > 0).length),
              "reviewCount": String(testimonialsData.filter(t => t.quote && t.quote.trim().length > 0).length)
            },
            "review": testimonialsData
              .filter(t => t.quote && t.quote.trim().length > 0)
              .slice(0, 10)
              .map(t => ({
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": Number(t.rating || 5)
                },
                "author": {
                  "@type": "Person",
                  "name": t.name
                },
                "reviewBody": t.quote.trim()
              }))
          })
        }}
      />

      {/* Hero Section — Cinematic GSAP Reveal */}
      <CinematicHero locale="cs" />

      {/* Client Logos */}
      <section className="py-8 md:py-12">
        <Container>
          <p className="text-center text-sm text-muted-foreground mb-6">Spolupracovali jsme s</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <img src="/images/clients/wikyhracky.png" alt="WikyHracky.cz - video produkce pro e-shop s hračkami" className="h-10 md:h-12 w-auto object-contain" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <img src="/images/clients/dekra.png" alt="Dekra - korporátní video produkce" className="h-8 md:h-10 w-auto object-contain" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <img src="/images/clients/oict.png" alt="Operátor ICT Praha - firemní video produkce" className="h-8 md:h-10 w-auto object-contain" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <img src="/images/clients/roklen.png" alt="Roklen24 - video pro finanční služby" className="h-6 md:h-8 w-auto object-contain" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <img src="/images/clients/tatra.png" alt="Tatra Trucks - video pro automotive" className="h-10 md:h-12 w-auto object-contain" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <img src="/images/clients/slavia.png" alt="FC Slavia Hradec Králové - sportovní video produkce" className="h-10 md:h-12 w-auto object-contain" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <img src="/images/clients/legonid.png" alt="Legonid - LEGO Serious Play facilitace a video" className="h-10 md:h-12 w-auto object-contain" />
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Dual Path Section — Kameraman vs. UGC Herec */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="text-center mb-10 space-y-3">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Co pro vás dělám</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Dvě oblasti, jeden člověk.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ať jste firma hledající kameramana na event, nebo brand hledající tvář pro reklamu — jste na správném místě.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Path A — Kameraman */}
            <div className="group relative rounded-3xl border bg-card overflow-hidden p-8 md:p-10 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="relative z-10 space-y-5">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-2xl">
                  🎬
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Pro firmy & organizace</p>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-3">Kameraman & Video Produkce</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Konference, firemní eventy, reklamní spoty, Reels kampaně. Přijedu, natočím, sestříhám a dodám výsledek, který buduje váš brand celý rok.
                  </p>
                </div>
                <ul className="space-y-2 text-sm">
                  {["Event video & konference od 18 000 Kč", "Reels kampaň za 1 den natáčení", "Postprodukce DaVinci Resolve", "LiveStream & hybridní eventy"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link href="/sluzby/event-video">
                    <Button className="w-full sm:w-auto font-bold">
                      Chci video z eventu
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/reels-balicky">
                    <Button variant="outline" className="w-full sm:w-auto">
                      Reels balíčky
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Path B — UGC Herec */}
            <div className="group relative rounded-3xl border bg-card overflow-hidden p-8 md:p-10 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
              <div className="relative z-10 space-y-5">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-500/10 text-2xl">
                  🎭
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-1">Pro e-shopy & markeťáky</p>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-3">UGC Herec & Brand Actor</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Potřebujete tvář pro TikTok reklamu, testimonial nebo product demo? Jako profesionální herec doručím autentické UGC videa, která konvertují — podle vašeho briefu, v domluvený termín.
                  </p>
                </div>
                <ul className="space-y-2 text-sm">
                  {["TikTok & Instagram Ads od 2 500 Kč/video", "Testimonially, unboxing, problem/solution", "Hook do 3 vteřin, retention do konce", "Dodání do 5 pracovních dní"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link href="/ugc-herec">
                    <Button className="w-full sm:w-auto font-bold bg-purple-600 hover:bg-purple-700 text-white">
                      Chci UGC video
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button variant="outline" className="w-full sm:w-auto">
                      Ukázky herecké práce
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Middle nudge — Video Rozbor */}
          <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-3xl">🔍</span>
              <div>
                <p className="font-bold text-base">Nevíte, kde začít?</p>
                <p className="text-muted-foreground text-sm">Nechte si zdarma zanalyzovat vaše videa — zjistím, co vám jde, co ne, a navrhnu konkrétní řešení.</p>
              </div>
            </div>
            <Link href="/video-rozbor" className="flex-shrink-0">
              <Button variant="outline" className="border-primary font-bold hover:bg-primary hover:text-white transition-colors">
                Video Rozbor Zdarma →
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Value Proposition / Main Offer (Moved UP) */}
      <section className="py-16 md:py-24">
        <Container className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium border-primary/20 bg-primary/10 text-primary">
              ⭐ Nejoblíbenější spolupráce
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Kvalitní obsah<br /> bez stresu.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Váš byznys potřebuje být vidět, ale vy nemáte čas točit každý den stories. Chápu to.<br /><br />
              Proto jsem vytvořil systém, kde <strong>z jednoho natáčecího dne vytěžíme maximum</strong>.
              Žádné složité přípravy pro vás – přijedu, natočíme, a do týdne máte hotová videa, která můžete postovat celý měsíc.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-center font-medium text-lg"><span className="text-primary mr-3 bg-primary/10 p-1 rounded-full"><Clapperboard className="w-5 h-5" /></span> Kompletní produkce na klíč</li>
              <li className="flex items-center font-medium text-lg"><span className="text-primary mr-3 bg-primary/10 p-1 rounded-full"><Smartphone className="w-5 h-5" /></span> Střih, grafika a zvuk v ceně</li>
              <li className="flex items-center font-medium text-lg"><span className="text-primary mr-3 bg-primary/10 p-1 rounded-full"><MonitorPlay className="w-5 h-5" /></span> Výsledek připravený k použití</li>
            </ul>
            <div className="pt-4">
              <Link href="/reels-balicky">
                <Button size="lg" className="px-8 h-12 text-base font-bold">🎬 Chci video, co vydělává</Button>
              </Link>
            </div>
          </div>
          <article className="relative order-1 md:order-2">
            <div className="relative aspect-[4/3] max-w-full mx-auto rounded-2xl overflow-hidden border shadow-2xl group">
              <Image
                src="/images/tomas-hero.jpg"
                alt="Tomáš Berka - Video produkce"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold border-2 border-background">🎬</div>
                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold border-2 border-background">🎤</div>
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold border-2 border-background">✓</div>
                  </div>
                  <div className="text-white">
                    <div className="font-bold text-lg">Kompletní video & audio</div>
                    <div className="text-sm opacity-90">Vše pod jednou střechou</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-white rounded-xl px-4 py-2 font-bold shadow-lg animate-bounce-slow hidden lg:block">
              ⚡ Hotovo do týdne
            </div>
          </article>
        </Container>
      </section>

      {/* Services Grid — Glass Cards */}
      <section aria-labelledby="services-heading">
        <Container>
          <div className="flex flex-col gap-4 mb-12 text-center md:text-left">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold tracking-tight">Kompletní video a event služby</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">Event video &amp; moderování • Tvorba Reels a TikToku • Firemní herec • Podcasty a Voiceover • Praha &amp; mezinárodně</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => {
              const Icon = icons[service.icon as keyof typeof icons] || Clapperboard;
              return (
                <Link href={`/${service.slug}`} key={service.id} className="group">
                  <div className="glass-card h-full rounded-xl p-6">
                    <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 w-fit">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="mr-2 h-1 w-1 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Mid-page conversion strip */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Bezplatná konzultace</p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                  Váhate, jestli to pro vás dává smysl?
                </h2>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  Pošlete mi odkaz na vaše stávající videa (nebo profil na sítích) a já vám <strong className="text-white">do 24 hodin zdarma</strong> řeknu, co konkrétně lze zlepšit — bez závazku, bez placení, bez bullshitu.
                </p>
                <p className="text-zinc-400 text-sm">Dosud jsem provedl rozbory pro 40+ firem a osobních značek.</p>
              </div>
              <div className="flex flex-col gap-4">
                <Link href="/video-rozbor">
                  <Button size="lg" className="w-full h-14 text-lg font-bold bg-primary text-black hover:bg-primary/90 shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all">
                    🔍 Chci Video Rozbor Zdarma
                  </Button>
                </Link>
                <Link href="/kontakt">
                  <Button size="lg" variant="outline" className="w-full h-12 border-zinc-600 text-white hover:border-zinc-400 hover:bg-white/5">
                    📅 Rovnou si zarezervovat termín
                  </Button>
                </Link>
                <p className="text-center text-xs text-zinc-500">Odpovídám do 24 hodin • Bez závazku</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Quiz CTA Section (Moved down) */}
      <section className="py-16 bg-muted/20 border-y">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors border-primary/20 bg-primary/10 text-primary mb-6">
              🎮 Interaktivní test
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Děláte tyto chyby v Reels?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Zjistěte za 2 minuty, jestli vaše Reels mají šanci na úspěch.
              Interaktivní quiz s okamžitou zpětnou vazbou.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Link href="/reels-quiz">
                <Button size="lg" variant="outline" className="text-base h-12 px-8 font-bold hover:shadow-lg transition-all hover:-translate-y-1">
                  🎯 Spustit Quiz
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* SocialVids Trust Indicator */}
      <section className="text-center py-12">
        <Container>
          <div className="bg-gradient-to-r from-blue-900/10 to-purple-900/10 border rounded-2xl p-8 md:p-12">
            <p className="font-semibold text-primary mb-2">PARTNERSTVÍ</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Velké produkce? Žádný problém.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Pro náročné televizní reklamy, mezinárodní spoty a rozsáhlé eventy využívám zázemí a tým partnera **SocialVids**.
              Dostanete kvalitu velké agentury s mým osobním přístupem.
            </p>
            <div className="mb-8 flex justify-center">
              <Image
                src="/images/socialvids-logo.png"
                alt="SocialVids Logo"
                width={200}
                height={60}
                className="h-12 w-auto object-contain opacity-80"
              />
            </div>
            <Link href="/partner-socialvids">
              <Button variant="outline" className="border-primary/20 hover:bg-primary/5">Zjistit více o partnerství</Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
