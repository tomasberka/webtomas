import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { VideoPlayer } from "@/components/ui/video-player";
import { Check, Mic, Star } from "lucide-react";
import portfolioData from "@/content/portfolio.json";
import { VideoCard } from "@/components/portfolio/video-card";

export const metadata = {
    title: "UGC Tvůrce & Herec | Zvyšte prodeje videem | Já jsem Tomáš",
    description: "Profesionální UGC videa pro TikTok, Instagram a Facebook Ads. Jsem zkušený herec, který tvoří autentický obsah konvertující diváky na zákazníky.",
};

export default function UgcActorPage() {
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
                        }
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

            {/* Trust/Logo Section (Optional placeholder strategy) */}
            <section className="py-10 border-b bg-muted/10">
                <Container>
                    <p className="text-center text-sm font-medium text-muted-foreground mb-6">
                        Důvěryhodný partner pro agentury i přímé klienty
                    </p>
                    {/* Add logos here if available in future */}
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
            <section className="py-20">
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

            {/* Acting Portfolio Section */}
            <section id="showreel" className="py-20 bg-black text-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Herecké ukázky</h2>
                        <p className="text-zinc-400 text-lg">
                            Autenticita, emoce a schopnost prodat myšlenku.
                            <br />
                            Ukázky z reklam, filmů a sociálních sítí.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {portfolioData.filter(p => p.category === "Acting").map((video) => (
                            <VideoCard key={video.id} video={video} />
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

            {/* FAQ Section - SEO Rich Snippets */}
            <section className="py-20 bg-muted/30">
                <Container className="max-w-3xl">
                    <h2 className="text-3xl font-bold mb-12 text-center">Časté dotazy (FAQ)</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Kolik stojí jedno UGC video?", a: "Cena se odvíjí od délky, počtu videí (balíčky jsou výhodnější) a požadavků na produkci. Napište mi o ceník." },
                            { q: "Musím poslat produkt?", a: "Ano, pro autentické video je potřeba mít produkt fyzicky u sebe. Po natáčení ho mohu zaslat zpět." },
                            { q: "Za jak dlouho bude video hotové?", a: "Standardně dodávám první náhled do 3-5 pracovních dnů od doručení produktu." },
                            { q: "Zahrnuje cena i práva k reklamě?", a: "Ano, v ceně jsou obvykle zahrnuta práva pro použití v reklamách (Usage Rights) na 12 měsíců." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-card p-6 rounded-xl border">
                                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                                <p className="text-muted-foreground">{faq.a}</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Připraveni ovládnout sítě?</h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        Nenechávejte svůj brand náhodě. Spolupracujte s profesionálem, který doručí výsledky.
                    </p>
                    <Link href="/kontakt">
                        <Button size="lg" className="text-xl px-12 py-8 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                            Nezávazně poptat UGC
                        </Button>
                    </Link>
                </Container>
            </section>
        </div>
    );
}
