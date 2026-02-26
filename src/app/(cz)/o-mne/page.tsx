import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, Clapperboard, Award, Heart, MonitorPlay } from "lucide-react";
import { VideoPlayer } from "@/components/ui/video-player";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata: Metadata = {
    title: "O mně - Tomáš Berka | Video & Audio Produkce | Vaše Pravá Ruka",
    description: "Jsem vaše pravá ruka pro video a audio. Poradím, co funguje, natočím to, sestříhám a dodám. Žádné agenturní kolečko. Jen vy a já. 10+ let praxe.",
    keywords: ["kameraman praha", "filmmaker česká republika", "video producent praha", "content creator čr"],
    alternates: {
        canonical: "https://jajsemtomas.cz/o-mne",
        languages: {
            "en": "https://en.jajsemtomas.cz/about"
        }
    },
};

export default function AboutPage() {
    return (
        <div className="pb-20">
            <BreadcrumbSchema items={[
                { name: "Domů", url: "https://jajsemtomas.cz" },
                { name: "O mně", url: "https://jajsemtomas.cz/o-mne" }
            ]} />
            {/* Person Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Tomáš Berka",
                        "jobTitle": "Video Producer & Filmmaker",
                        "description": "Profesionální video producent a filmmaker s 10+ lety praxe. Specializace na Reels, TikTok, event video a postprodukci.",
                        "url": "https://jajsemtomas.cz/o-mne",
                        "image": "https://jajsemtomas.cz/images/tomas-hero.jpg",
                        "email": "msg@jajsemtomas.cz",
                        "telephone": "+420735846329",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Praha",
                            "addressCountry": "CZ"
                        },
                        "sameAs": [
                            "https://www.linkedin.com/in/berkatomas",
                            "https://www.instagram.com/jajsemtomas.cz/",
                            "https://www.facebook.com/tomasberkaofficial/"
                        ],
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Já jsem Tomáš - Video Produkce"
                        }
                    })
                }}
            />
            {/* Hero Section */}
            <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-zinc-950 text-white">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-zinc-950"></div>
                </div>
                <Container className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium border-white/20 bg-white/5 text-white mb-4">
                            🎬 10+ let praxe • 500+ projektů
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                            Jsem vaše pravá ruka.<br />
                            <span className="text-primary">Vy máte vizi, já řeším zbytek.</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">
                            Poradím, co funguje. Natočím to. Sestříhám a dodám. <strong>Žádné agenturní kolečko. Jen vy a já.</strong> Pracuji rychle, spolehlivě a s lidským přístupem.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 justify-center md:justify-start mt-8">
                            <div className="text-center md:text-left">
                                <p className="text-3xl md:text-4xl font-bold text-primary">500+</p>
                                <p className="text-sm text-zinc-400">projektů</p>
                            </div>
                            <div className="text-center md:text-left">
                                <p className="text-3xl md:text-4xl font-bold text-primary">10+</p>
                                <p className="text-sm text-zinc-400">let praxe</p>
                            </div>
                            <div className="text-center md:text-left">
                                <p className="text-3xl md:text-4xl font-bold text-primary">50+</p>
                                <p className="text-sm text-zinc-400">spokojených klientů</p>
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/berkatomas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm font-medium transition-colors"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            Spojte se na LinkedInu
                        </a>
                    </div>
                    <div className="flex-1 w-full max-w-lg">
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                            <img
                                src="/images/tomas-hero.jpg"
                                alt="Tomáš Berka - Video producent a kameraman Praha"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* VSL Section - "Who am I" */}
            <section className="py-20 -mt-10 relative z-20">
                <Container>
                    <div className="bg-card border rounded-2xl p-6 md:p-12 shadow-xl max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-8">Kdo jsem v 60 vteřinách?</h2>
                        <div className="aspect-[9/16] max-w-sm mx-auto rounded-xl overflow-hidden bg-black border relative shadow-2xl">
                            <VideoPlayer videoId="o0Vw3UNIKaQ" className="h-full w-full" title="Kdo jsem v 60 vteřinách?" />
                        </div>
                    </div>
                </Container>
            </section>

            {/* My Story */}
            <section className="py-20">
                <Container className="max-w-3xl">
                    <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Od scénáře k finálnímu střihu</h2>
                        <p>
                            Moje cesta k videu nebyla přímá. Začínal jsem jako <strong className="text-foreground">herec</strong>. Stál jsem tam, kde možná brzy budete stát vy – před objektivem, nervózní, jestli to "bude vypadat dobře".
                        </p>
                        <p>
                            Díky této zkušenosti mám unikátní cit pro <strong className="text-foreground">vedení lidí</strong>. Nebudu na vás jen mlčky mířit kamerou. Pomůžu vám s intonací, postojem i textem. Režíruji vás tak, abyste působili přirozeně a sebevědomě.
                        </p>
                        <h3 className="text-2xl font-bold text-foreground mt-8">Proč to dělám jinak?</h3>
                        <p>
                            Frustrovalo mě, kolik firemních videí je nudných. Krásně natočené, ale bez duše. Bez příběhu. Bez výsledku.
                            Rozhodl jsem se to změnit. Spojil jsem své znalosti <strong className="text-foreground">marketingu</strong>, <strong className="text-foreground">herectví</strong> a <strong className="text-foreground">technické produkce</strong> do jednoho balíčku.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mt-12 mb-16">
                        <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                            <Clapperboard className="w-8 h-8 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">Technický Perfectionista</h3>
                            <p className="text-sm text-muted-foreground">Miluji technologie. Točím na špičkovou techniku, hraji si se světly a zvukem, dokud to není dokonalé.</p>
                        </div>
                        <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                            <Heart className="w-8 h-8 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">Lidský Přístup</h3>
                            <p className="text-sm text-muted-foreground">Žádné ego. Jsme partneři. Na natáčení je vždy pohoda a sranda. Stres nechávám doma.</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Values / Why Me */}
            <section className="py-20 bg-muted/30 border-y">
                <Container>
                    <h2 className="text-3xl font-bold text-center mb-12">Můj slib vám</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center px-4">
                            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border">
                                <span className="text-2xl font-bold">01</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Upřímnost</h3>
                            <p className="text-muted-foreground">
                                Pokud si myslím, že váš nápad nebude fungovat, řeknu vám to. Nechci vaše peníze za video, které nic nepřinese.
                            </p>
                        </div>
                        <div className="text-center px-4">
                            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border">
                                <span className="text-2xl font-bold">02</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Rychlost</h3>
                            <p className="text-muted-foreground">
                                V dnešní době je content král, ale rychlost je královna. Termíny jsou pro mě svaté.
                            </p>
                        </div>
                        <div className="text-center px-4">
                            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border">
                                <span className="text-2xl font-bold">03</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Kvalita</h3>
                            <p className="text-muted-foreground">
                                Nedám z ruky nic, za co bych se sám nestyděl. Každé video je mou vizitkou.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Photo Gallery */}
            <section className="py-20 bg-zinc-950 text-white overflow-hidden">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Život v záběru</h2>
                        <p className="text-zinc-400">Když zrovna nedržím kameru, tak si užívám momenty, které stojí za to zachytit.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 group">
                            <img
                                src="/images/tomas-gallery-1.jpg"
                                alt="Natáčení rozhovoru - profesionální video produkce"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 md:mt-12 group">
                            <img
                                src="/images/tomas-gallery-2.jpg"
                                alt="Práce s kamerou Sony Alpha na eventu"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 group">
                            <img
                                src="/images/tomas-gallery-3.jpg"
                                alt="Postprodukce a střih videa v ateliéru"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
                <Container className="max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Pojďme si tykat</h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        Rád poznám váš příběh. Zastavte se na kávu nebo si zavolejme.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/kontakt">
                            <Button size="lg" className="px-8">
                                Napsat zprávu
                            </Button>
                        </Link>
                        <Link href="/portfolio">
                            <Button variant="outline" size="lg">
                                Kouknout na práci
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </div>
    );
}
