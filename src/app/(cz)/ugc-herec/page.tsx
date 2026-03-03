import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, Mic } from "lucide-react";
import portfolioData from "@/content/portfolio.json";
import faqData from "@/content/faq.json";
import { VideoCard } from "@/components/portfolio/video-card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "UGC Tvůrce & Herec Praha | TikTok & Instagram Ads | Já jsem Tomáš",
    description: "🎭 Profesionální UGC videa pro TikTok, Instagram a Facebook Ads. Zkušený herec tvořící autentický obsah, který konvertuje. Praha & celá ČR.",
    keywords: ["ugc creator praha", "ugc herec", "tiktok ads video", "instagram reklamy herec", "autentická videa čr"],
    alternates: {
        canonical: "https://jajsemtomas.cz/ugc-herec",
        languages: {
            "en": "https://en.jajsemtomas.cz/ugc-creator"
        }
    },
};

export default function UgcActorPage() {
    const ugcFaq = faqData["ugc"];

    return (
        <div className="pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "UGC Video Production",
                        "provider": {
                            "@type": "Person",
                            "name": "Tomáš",
                            "jobTitle": "Actor & UGC Creator"
                        },
                        "description": "Profesionální tvorba UGC videí pro sociální sítě.",
                        "offers": {
                            "@type": "Offer",
                            "availability": "https://schema.org/InStock"
                        },
                        "mainEntity": ugcFaq.map(item => ({
                            "@type": "Question",
                            "name": item.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.answer
                            }
                        }))
                    })
                }}
            />
            {/* Hero Section */}
            <section className="relative pt-8 pb-20 md:pt-16 md:pb-32 overflow-hidden bg-black text-white">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="/images/ugc-hero.jpg"
                        alt="UGC Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <Container className="relative z-10 flex flex-col items-center text-center gap-8">
                    <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/10 text-primary mb-4">
                        🚀 Výkonnostní marketing & Brand Awareness
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter max-w-5xl mb-4">
                        UGC videa, která <span className="text-primary">prodávají</span>.<br />
                        Žádný amatérismus.
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
                        Většina UGC tvůrců "jen točí". Já tvořím reklamu.
                        Jako profesionální herec vím, jak <strong>udržet pozornost</strong>, doručit emoci a přesvědčit diváka k akci.
                        Zvyšte své ROI s obsahem, který má hlavu a patu.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link href="/rezervace">
                            <Button size="lg" className="font-bold text-base h-12 px-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                📅 Rezervovat 15 min Call
                            </Button>
                        </Link>
                        <Link href="#process">
                            <Button variant="outline" size="lg" className="text-base h-12">
                                Jak to funguje?
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Why Me - Business Logic */}
            <section className="py-20 bg-muted/30">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Proč riskovat s amatéry,<br />když můžete mít profíka?</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                Marketingoví manažeři často bojují s nespolehlivostí influencerů.
                                U mě je to jiné. Přistupuji k UGC jako k zakázce pro televizi – <strong>profesionálně, včas a dle zadání.</strong>
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                                        <Check className="h-3 w-3" />
                                    </div>
                                    <div>
                                        <span className="font-bold block">Herecký Performance</span>
                                        <span className="text-muted-foreground text-sm">Dokážu zahrát "nadšeného zákazníka" i "seriózního experta". Uvěřitelně.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                                        <Check className="h-3 w-3" />
                                    </div>
                                    <div>
                                        <span className="font-bold block">Technická Kvalita</span>
                                        <span className="text-muted-foreground text-sm">Točím na iPhone 15 Pro nebo Cinema kameru. Váš brand nebude vypadat levně.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                                        <Check className="h-3 w-3" />
                                    </div>
                                    <div>
                                        <span className="font-bold block">Hook & Retention</span>
                                        <span className="text-muted-foreground text-sm">Vím, jak zastavit scrollování v prvních 3 vteřinách.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative aspect-[4/5] md:aspect-square bg-muted rounded-2xl overflow-hidden border">
                            <img
                                src="/images/ugc-ricehook.jpg"
                                alt="Tomáš - Profesionální UGC creator"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Process Section */}
            <section id="process" className="py-20">
                <Container>
                    <h2 className="text-3xl font-bold mb-12 text-center">Jak probíhá spolupráce?</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Zadání & Strategie", desc: "Pošlete mi brief nebo společně vymyslíme koncept, který prodává." },
                            { step: "02", title: "Scénář & Hook", desc: "Připravím scénář zaměřený na udržení pozornosti (retention)." },
                            { step: "03", title: "Produkce", desc: "Natočím a sestříhám video včetně titulků a voiceoveru." },
                            { step: "04", title: "Dodání", desc: "Dostanete hotové video připravené pro Ads Manager." }
                        ].map((item, i) => (
                            <div key={i} className="relative p-6 border rounded-xl bg-card hover:shadow-lg transition-all">
                                <span className="text-6xl font-black text-muted/20 absolute -top-4 -right-2">{item.step}</span>
                                <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>
                                <p className="text-muted-foreground relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* UGC Portfolio Section */}
            <section id="showreel" className="py-20 bg-black text-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">UGC & Herecké ukázky</h2>
                        <p className="text-zinc-400 text-lg">
                            Autenticita, emoce a schopnost prodat myšlenku.
                            <br />
                            Ukázky z reklam, UGC kampaní a sociálních sítí.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {portfolioData.filter(p => p.category === "UGC").map((video) => (
                            <VideoCard key={video.id} video={video} locale="cs" />
                        ))}
                    </div>
                </Container>
            </section>

            {/* Typy videí */}
            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-bold mb-12 text-center">Formáty, které tvořím</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border rounded-xl bg-muted/5">
                            <h3 className="text-xl font-bold mb-2">📦 Unboxing & Testimonials</h3>
                            <p className="text-muted-foreground">Autentické rozbalování a reakce. Sociální důkaz, který buduje důvěru.</p>
                        </div>
                        <div className="p-6 border rounded-xl bg-muted/5">
                            <h3 className="text-xl font-bold mb-2">🎭 Sketche & Humor</h3>
                            <p className="text-muted-foreground">Zábavná videa, která se sdílejí sama. Ideální pro brand awareness.</p>
                        </div>
                        <div className="p-6 border rounded-xl bg-muted/5">
                            <h3 className="text-xl font-bold mb-2">💡 Problem/Solution</h3>
                            <p className="text-muted-foreground">Ukázka problému a řešení vaším produktem. Nejlepší pro konverze.</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Pricing Section */}
            <section className="py-20">
                <Container>
                    <div className="text-center mb-12">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Ceník</p>
                        <h2 className="text-3xl md:text-4xl font-bold">Transparentní ceny, žádná překvapení</h2>
                        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Cena závisí na počtu videí, délce a komplexnosti. Níže jsou orientační startovní ceny.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-8 border rounded-2xl bg-card space-y-4 hover:shadow-lg transition-all">
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Starter</p>
                            <div>
                                <span className="text-4xl font-black">8 000 Kč</span>
                                <span className="text-muted-foreground ml-2">/ video</span>
                            </div>
                            <p className="text-muted-foreground text-sm">1 UGC video do 60 sekund. Kompletní produkce včetně scénáře.</p>
                            <ul className="space-y-2 text-sm">
                                {["1 verze + 1 revize", "Dodání do 5 dní", "Vaše branding prvky", "Titulky v ceně"].map(f => (
                                    <li key={f} className="flex items-center gap-2 text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />{f}</li>
                                ))}
                            </ul>
                            <Link href="/kontakt">
                                <Button className="w-full mt-2" variant="outline">Objednat</Button>
                            </Link>
                        </div>
                        <div className="p-8 border-2 border-primary rounded-2xl bg-card space-y-4 hover:shadow-xl transition-all relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-primary text-black text-xs font-black px-3 py-1 rounded-bl-xl">NEJPOPULÁRNĚJŠÍ</div>
                            <p className="text-xs font-bold uppercase tracking-widest text-primary">Brand Pack</p>
                            <div>
                                <span className="text-4xl font-black">22 000 Kč</span>
                                <span className="text-muted-foreground ml-2">/ 3 videa</span>
                            </div>
                            <p className="text-muted-foreground text-sm">3 UGC videa s různými hooky nebo formáty — A/B test připravený. Ušetříte 2 000 Kč.</p>
                            <ul className="space-y-2 text-sm">
                                {["3 videa = 3× obsah za zlomek ceny", "Každé video jiný hook/formát", "2 revize na video", "Dodání do 7 dní", "Titulky + captions"].map(f => (
                                    <li key={f} className="flex items-center gap-2 text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />{f}</li>
                                ))}
                            </ul>
                            <Link href="/kontakt">
                                <Button className="w-full mt-2 font-bold">Chci Brand Pack</Button>
                            </Link>
                        </div>
                        <div className="p-8 border rounded-2xl bg-card space-y-4 hover:shadow-lg transition-all">
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Měsíční spolupráce</p>
                            <div>
                                <span className="text-4xl font-black">Dohodou</span>
                            </div>
                            <p className="text-muted-foreground text-sm">Pravidelná produkce 8–15 klipů měsíčně. Pro seriózní ad-spend.</p>
                            <ul className="space-y-2 text-sm">
                                {["8-15 videí / měsíc", "Dedikovaný brief systém", "Priority dodání", "Strategie a konzultace", "Retainer = nižší cena/video"].map(f => (
                                    <li key={f} className="flex items-center gap-2 text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />{f}</li>
                                ))}
                            </ul>
                            <Link href="/kontakt">
                                <Button className="w-full mt-2" variant="outline">Pobavit se o ceně</Button>
                            </Link>
                        </div>
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-6">Potřebujete větší produkci nebo máte specifické požadavky? <Link href="/rezervace" className="text-primary hover:underline">Zarezervujte si konzultaci zdarma</Link> a probereme to.</p>
                </Container>
            </section>

            {/* Cross-sell: Also need a cameraman? */}
            <section className="py-12">
                <Container className="max-w-4xl">
                    <div className="rounded-2xl border bg-muted/30 p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Víc než UGC herec</p>
                            <h3 className="text-2xl font-bold mb-2">Potřebujete i kameramana na event?</h3>
                            <p className="text-muted-foreground">Jedu do terénu, natočím váš event, konferenci nebo product launch. Vše v jedné osobě — žádný brief pro dva dodavatele.</p>
                        </div>
                        <div className="flex flex-col gap-3 flex-shrink-0">
                            <Link href="/sluzby/event-video">
                                <Button className="w-full">🎬 Event video →</Button>
                            </Link>
                            <Link href="/reels-balicky">
                                <Button variant="outline" className="w-full">📱 Reels balíčky →</Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-muted/30">
                <Container className="max-w-3xl">
                    <h2 className="text-3xl font-bold mb-12 text-center">Časté dotazy (FAQ)</h2>
                    <div className="space-y-6">
                        {ugcFaq.map((faq, i) => (
                            <div key={i} className="bg-card p-6 rounded-xl border">
                                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                                <p className="text-muted-foreground">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Voiceover CTA */}
            <section className="py-20 border-t border-b overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-left scale-110"></div>
                <Container className="relative">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-card/80 backdrop-blur p-8 rounded-2xl border shadow-sm">
                        <div className="space-y-4 max-w-xl">
                            <h2 className="text-3xl font-bold tracking-tighter">Hledáte i profesionální hlas?</h2>
                            <p className="text-muted-foreground text-lg">
                                Kromě tváře propůjčím vaší značce i hlas. Ideální pro spoty, reklamy nebo e-learning.
                                Profesionální studio a rychlé dodání.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <Link href="/sluzby/voiceover">
                                <Button size="lg" variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-white">
                                    <Mic className="w-4 h-4" />
                                    Přehrát ukázky hlasu
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="py-20 text-center">
                <Container className="max-w-2xl">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Začněte ještě dnes</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Váš brand si zaslouží obsah, který prodává.</h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        Pošlete mi brief nebo jen odkaz na svůj profil — do 24 hodin dostanete konkrétní návrh, co spolu vytvoříme.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/kontakt">
                            <Button size="lg" className="px-10 h-14 text-base font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                                📩 Poptat UGC spolupráci
                            </Button>
                        </Link>
                        <Link href="/video-rozbor">
                            <Button size="lg" variant="outline" className="px-10 h-14 text-base">
                                🔍 Video Rozbor Zdarma
                            </Button>
                        </Link>
                    </div>
                    <p className="mt-6 text-sm text-muted-foreground">Nebo rovnou přes WhatsApp → <a href="https://wa.me/420732483004?text=Ahoj%20Tom%C3%A1%C5%A1i%2C%20m%C3%A1m%20z%C3%A1jem%20o%20UGC%20spolupr%C3%A1ci." target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">napsat zprávu</a></p>
                </Container>
            </section>
        </div>
    );
}
