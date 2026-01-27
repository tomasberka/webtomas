import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Testimonials } from "@/components/sections/testimonials";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clapperboard, Smartphone, Calendar, Radio, MonitorPlay, Sparkles, Timer } from "lucide-react";
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
};

export const metadata: Metadata = {
  title: "Tomáš Berka | Video Produkce, Střih & Audio | Praha & Online",
  description: "Kompletní video a audio služby. Natáčení akcí, tvorba Reels, podcasty, postprodukce a voiceover. 10+ let praxe. Spolehlivost a lidský přístup.",
  keywords: ["video produkce praha", "kameraman praha", "filmmaker česká republika", "tvorba reels", "podcast produkce", "voiceover čr", "střih videa praha"],
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
      {/* VideoObject Schema for Hero Video */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Reels Produkce - Video, které vydělává",
            "description": "Profesionální video produkce pro firmy. 3 až 8 Reels za jeden natáčecí den. Obsah na měsíc bez dlouhého čekání.",
            "thumbnailUrl": "https://jajsemtomas.cz/images/tomas-hero.jpg",
            "uploadDate": "2025-01-01",
            "duration": "PT30S",
            "contentUrl": "https://jajsemtomas.cz/videos/packages.mp4",
            "embedUrl": "https://jajsemtomas.cz/videos/packages.mp4"
          })
        }}
      />
      {/* ProfessionalService Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Já jsem Tomáš - Video Produkce",
            "image": "https://jajsemtomas.cz/images/tomas-hero.jpg",
            "description": "Profesionální video produkce specializující se na Reels, TikTok a reklamní obsah. 3-8 Reels za jeden natáčecí den.",
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
            "name": "Já jsem Tomáš",
            "url": "https://jajsemtomas.cz",
            "logo": "https://jajsemtomas.cz/images/logo.png",
            "description": "Profesionální video produkce a tvorba obsahu pro sociální sítě.",
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
            "name": "Já jsem Tomáš - Video Produkce",
            "image": "https://jajsemtomas.cz/images/tomas-hero.jpg",
            "description": "Profesionální video produkce v Praze specializující se na Reels, TikTok a reklamní obsah pro sociální sítě.",
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

      {/* Hero Section */}
      <header>
        <section aria-labelledby="hero-heading" className="relative pt-4 pb-12 md:pt-12 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-background -z-10" />
          <Container className="flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 mb-4 md:mb-8">
            🎬 10+ let praxe • 500+ projektů
          </div>
          <h1 id="hero-heading" className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter max-w-5xl mb-6 animate-fade-in-up">
            Video a audio produkce.<br className="hidden md:block" />
            <span className="text-primary">Spolehlivě. Od A do Z.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-8 animate-fade-in-up animation-delay-100">
            Jsem <strong>Tomáš</strong>. Váš člověk na natáčení, střih, podcasty i Reels.<br />
            Dodám vám kompletní výsledek bez starostí. <strong>Vy máte vizi, já mám techniku a know-how.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4 animate-fade-in-up animation-delay-200">
            <Link href="/kontakt">
              <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                Chci nezávaznou konzultaci
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12">
                Moje práce
              </Button>
            </Link>
          </div>
        </Container>
        </section>
      </header>

      {/* Trust Stats Bar */}
      <section className="border-y bg-muted/40 py-8 md:py-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-foreground">150+</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Projektů</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-foreground">10+ let</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Praxe</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-foreground">500K+</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Views</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-foreground">1 den</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Natáčení stačí</div>
            </div>
          </div>

          {/* Client Logos */}
          <div className="mt-12 pt-8 border-t border-border/50">
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
          </div>
        </Container>
      </section>

      {/* Limited Offer Promo */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-red-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />

        <Container className="relative">
          <div className="bg-card border-2 border-amber-500/20 rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-2xl shadow-orange-500/10">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
              <div className="space-y-6 text-center md:text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-sm font-bold text-amber-600 dark:text-amber-400 animate-pulse">
                  <Sparkles className="w-4 h-4" />
                  <span>NOVÁ AKCE – Jen pro 3 firmy</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                  3 Reels + 15 fotek
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 mt-2">
                    za 15 000 Kč
                  </span>
                </h2>

                <p className="text-xl text-muted-foreground">
                  Získejte kompletní obsah na měsíc s výraznou slevou.
                  Potřebuji nové case studies, vy ušetříte 10 000 Kč.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link href="/akce-3-reels">
                    <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/20 hover:scale-105 transition-all">
                      Chci jedno z míst
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <div className="flex items-center justify-center gap-2 text-sm font-bold text-muted-foreground bg-muted/50 px-4 py-2 rounded-lg">
                    <Timer className="w-4 h-4 text-orange-500" />
                    Zbývají 3 místa
                  </div>
                </div>
              </div>

              {/* Visual side */}
              <div className="relative hidden md:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 translate-y-8">
                    <div className="aspect-[9/16] bg-primary/5 rounded-2xl border border-primary/10 p-2 transform -rotate-6 transition-transform hover:rotate-0">
                      <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Clapperboard className="w-12 h-12 text-white/20" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="aspect-square bg-amber-500/10 rounded-2xl border border-amber-500/20 p-2 transform rotate-6 transition-transform hover:rotate-0">
                      <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-50 rounded-xl relative overflow-hidden flex items-center justify-center">
                        <span className="text-4xl font-black text-amber-500">15×</span>
                      </div>
                    </div>
                    <div className="aspect-square bg-green-500/10 rounded-2xl border border-green-500/20 p-6 flex flex-col items-center justify-center text-center transform rotate-3 transition-transform hover:rotate-0">
                      <div className="text-sm font-medium text-green-600 mb-1">Ušetříte</div>
                      <div className="text-3xl font-black text-green-600">10tis.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              <li className="flex items-center font-medium text-lg"><span className="text-primary mr-3 bg-primary/10 p-1 rounded-full"><Smartphone className="w-5 h-5" /></span> 3 až 8 Reels videí</li>
              <li className="flex items-center font-medium text-lg"><span className="text-primary mr-3 bg-primary/10 p-1 rounded-full"><Clapperboard className="w-5 h-5" /></span> Scénáře a režie v ceně</li>
              <li className="flex items-center font-medium text-lg"><span className="text-primary mr-3 bg-primary/10 p-1 rounded-full"><MonitorPlay className="w-5 h-5" /></span> Okamžité použití na sítě</li>
            </ul>
            <div className="pt-4">
              <Link href="/reels-balicky">
                <Button size="lg" className="px-8 h-12 text-base font-bold">🎬 Chci video, co vydělává</Button>
              </Link>
            </div>
          </div>
          <article className="relative aspect-video max-w-full mx-auto rounded-2xl bg-muted overflow-hidden border shadow-2xl order-1 md:order-2">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/images/tomas-hero.jpg"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            >
              <source src="/videos/packages.mp4" type="video/mp4" />
              Váš prohlížeč nepodporuje video.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white p-4 glass-panel rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="font-bold text-lg mb-1">Reels Produkce</div>
              <div className="text-sm opacity-90">Efektivní produkce pro moderní značky.</div>
            </div>
          </article>
        </Container>
      </section>

      {/* Services Grid */}
      <section aria-labelledby="services-heading">
        <Container>
          <div className="flex flex-col gap-4 mb-12 text-center md:text-left">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold tracking-tight">Kompletní video a audio služby</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">Tvorba Reels a TikToku • Firemní a eventové video • Podcasty a Voiceover • Postprodukce a barvení</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => {
              const Icon = icons[service.icon as keyof typeof icons] || Clapperboard;
              return (
                <Link href={`/${service.slug}`} key={service.id} className="group animate-fade-in-up">
                  <Card className="h-full transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader>
                      <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 w-fit">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">{service.title}</CardTitle>
                      <CardDescription className="text-base pt-2">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <span className="mr-2 h-1 w-1 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Value Proposition / CTA */}


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
