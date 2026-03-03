import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Globe, Video, Camera, Scissors, Radio, MapPin, Image as ImageIcon, Film, CheckCircle2, ArrowRight, Sparkles, Clapperboard } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata = {
    title: "Velké Produkce & Eventy | Profesionální Tým | Já jsem Tomáš",
    description: "Profesionální video produkce pro konference, festivaly a mezinárodní akce. Canon C70, dron s licencí, 10+ zemí. Recap videa, live streaming, event foto.",
    keywords: ["velké produkce", "event videografie", "live streaming konference", "mezinárodní video produkce", "aftermovie", "recap video", "Canon C70"],
    alternates: {
        canonical: "https://jajsemtomas.cz/partner-socialvids",
        languages: {
            "en": "https://en.jajsemtomas.cz/partner-socialvids"
        }
    },
    openGraph: {
        title: "Velké Produkce & Eventy | Profesionální Tým | Já jsem Tomáš",
        description: "Profesionální video produkce pro konference, festivaly a mezinárodní akce v 10+ zemích.",
        url: "https://jajsemtomas.cz/partner-socialvids"
    }
};

const services = [
    {
        icon: Video,
        title: "Event Videografie",
        description: "Konference, bootcampy, award ceremonies – zachytíme atmosféru i klíčové momenty.",
        features: ["Recap videa", "Aftermovies", "Sponzorský obsah"]
    },
    {
        icon: Radio,
        title: "Live Streaming",
        description: "Hybridní a virtuální akce s profesionálním přenosem pro globální publikum.",
        features: ["Multi-kamera setup", "Grafické overlays", "24/7 technická podpora"]
    },
    {
        icon: Camera,
        title: "Profesionální Foto",
        description: "400+ kvalitních fotografií na akci, připravených pro média i sociální sítě.",
        features: ["Event dokumentace", "Portréty speakerů", "Okamžité retušování"]
    },
    {
        icon: Scissors,
        title: "Social Media Content",
        description: "Reels, recap videa, rozhovory – 80+ klipů optimalizovaných pro různé platformy.",
        features: ["Denní dodávky", "Platformově optimalizováno", "Okamžitý engagement"]
    },
];

const caseStudies = [
    {
        title: "App Promotion Summit",
        location: "Londýn",
        attendees: "600–800",
        attendeesLabel: "účastníků",
        description: "Technická konference zaměřená na mobilní aplikace a growth marketing.",
        deliverables: [
            "Dynamické recap video s klíčovými momenty",
            "Rozhovory se sponzory a účastníky",
            "6× editořské \"App Talks\" interview"
        ],
        result: "Klient získal opakované objednávky a obsah využitelný celý rok dopředu.",
        gradient: "from-blue-600/20 to-cyan-600/20"
    },
    {
        title: "Nomad Excel Bootcamps",
        location: "Mezinárodní",
        attendees: "Premium",
        attendeesLabel: "bootcampy",
        description: "Intenzivní programy pro digitální nomády a podnikatele z celého světa.",
        deliverables: [
            "400+ profesionálních fotografií",
            "Denní vertikální reels pro okamžitý dopad",
            "80+ editovaných klipů pro různé platformy"
        ],
        result: "Výrazně zvýšený engagement a nárůst konverzí na budoucích bootcampech.",
        gradient: "from-purple-600/20 to-pink-600/20"
    },
    {
        title: "British Awards Ceremonies",
        location: "Velká Británie",
        attendees: "100+",
        attendeesLabel: "hostů",
        description: "Prestižní ceremoniály s živou hudbou a celebrity prezentéry.",
        deliverables: [
            "Leštěná recap videa zachycující emoce",
            "Rozhovory s nominanty a vítězi",
            "Fotogalerie pro mediální distribuci"
        ],
        result: "Dlouhodobé partnerství a vizuální knihovna pro získávání sponzorů.",
        gradient: "from-amber-600/20 to-orange-600/20"
    }
];

const stats = [
    { value: "10+", label: "Zemí", sublabel: "po celé Evropě", icon: Globe },
    { value: "400+", label: "Fotek", sublabel: "na každou akci", icon: ImageIcon },
    { value: "80+", label: "Klipů", sublabel: "na projekt", icon: Film },
];

export default function PartnerPage() {
    return (
        <div className="flex flex-col gap-16 md:gap-24 pb-16">
            <BreadcrumbSchema items={[
                { name: "Domů", url: "https://jajsemtomas.cz" },
                { name: "Velké Produkce", url: "https://jajsemtomas.cz/partner-socialvids" }
            ]} />
            {/* Organization Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Velké Produkce & Eventy",
                        "description": "Profesionální video produkce pro konference, festivaly a mezinárodní akce.",
                        "provider": {
                            "@type": "Person",
                            "name": "Tomáš Berka",
                            "jobTitle": "Filmmaker & Content Creator",
                            "url": "https://jajsemtomas.cz"
                        },
                        "areaServed": "Europe"
                    })
                }}
            />
            {/* Hero Section */}
            <section className="relative pt-8 pb-20 md:pt-16 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-background to-background -z-10" />
                <Container className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors border-primary/20 bg-primary/10 text-primary mb-6 animate-fade-in-up">
                            <Sparkles className="h-4 w-4 mr-2" />
                            PROFESIONÁLNÍ TÝM
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 animate-fade-in-up animation-delay-100">
                            Velké <span className="text-primary">Produkce</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up animation-delay-200 leading-relaxed">
                            Pro projekty, které vyžadují <strong>profesionální tým</strong>, mezinárodní dosah nebo specifickou techniku.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up animation-delay-200">
                            Transformujeme konference, festivaly a prestižní akce v kvalitní digitální obsah využitelný celý rok.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
                            <Link href="/rezervace">
                                <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                    📅 Poptat velkou produkci
                                </Button>
                            </Link>
                            <Link href="/kontakt">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12">
                                    Kontaktovat
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 w-full max-w-lg animate-fade-in-up animation-delay-200">
                        <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 p-8 md:p-12 border shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
                            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                                <Clapperboard className="h-16 w-16 text-primary mb-4" />
                                <div className="text-lg font-bold mb-2">Profesionální vybavení</div>
                                <div className="text-sm text-muted-foreground space-y-1">
                                    <div>🎬 Canon C70</div>
                                    <div>🚁 Dron s licencí</div>
                                    <div>👥 2-členný tým</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Stats Section */}
            <section className="border-y bg-muted/20 py-16">
                <Container>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col items-center space-y-2">
                                <div className="inline-block rounded-lg bg-primary/10 p-3 mb-2">
                                    <stat.icon className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
                                <div className="font-semibold text-lg">{stat.label}</div>
                                <div className="text-muted-foreground text-sm">{stat.sublabel}</div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Services Section */}
            <section>
                <Container>
                    <div className="flex flex-col gap-4 mb-12 text-center">
                        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/10 text-primary mx-auto">
                            🎬 Co nabízím
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Kompletní produkce pro velké akce
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Kombinace rychlého turnaroundu a vysoké produkční hodnoty pro náročné klienty.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <Card
                                key={service.title}
                                className="h-full transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 bg-card/50 backdrop-blur-sm animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="p-6">
                                    <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                                        <service.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                                    <ul className="space-y-1">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center text-sm text-muted-foreground">
                                                <span className="mr-2 h-1 w-1 rounded-full bg-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Case Studies Section */}
            <section>
                <Container>
                    <div className="flex flex-col gap-4 mb-12 text-center">
                        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/10 text-primary mx-auto">
                            📊 Případové studie
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Projekty po celé Evropě
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Ukázky projektů, které jsem realizoval s měřitelnými výsledky.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {caseStudies.map((study, index) => (
                            <Card key={study.title} className="overflow-hidden border-none shadow-2xl bg-card/50 backdrop-blur-sm">
                                <div className="grid lg:grid-cols-12 gap-0">
                                    {/* Left - Visual */}
                                    <div className={`lg:col-span-4 bg-gradient-to-br ${study.gradient} p-8 flex flex-col justify-center items-center text-center`}>
                                        <div className="text-6xl md:text-7xl font-bold text-primary mb-2">{study.attendees}</div>
                                        <div className="text-muted-foreground font-medium">{study.attendeesLabel}</div>
                                        <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                                            <MapPin className="h-4 w-4" />
                                            {study.location}
                                        </div>
                                    </div>

                                    {/* Right - Content */}
                                    <div className="lg:col-span-8 p-8 md:p-10">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-3">{study.title}</h3>
                                        <p className="text-muted-foreground mb-6">{study.description}</p>

                                        <div className="mb-6">
                                            <h4 className="text-sm uppercase tracking-widest font-bold text-muted-foreground mb-3">Co jsme dodali</h4>
                                            <ul className="grid gap-2">
                                                {study.deliverables.map((item) => (
                                                    <li key={item} className="flex items-start gap-3 text-sm">
                                                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                                        <span className="text-muted-foreground">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pt-6 border-t border-border/50">
                                            <div className="flex items-start gap-3">
                                                <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                                </div>
                                                <p className="text-sm font-medium text-green-400">{study.result}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="text-center">
                <Container>
                    <div className="bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-indigo-900/20 border rounded-2xl p-12 md:p-16">
                        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/10 text-primary mb-6">
                            🚀 Máte velký projekt?
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Pojďme to realizovat společně
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Ať už jde o konferenci pro stovky lidí, mezinárodní kampaň nebo prestižní event – jsem připraven dodat výsledky, které předčí vaše očekávání.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/rezervace">
                                <Button size="lg" className="text-base h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                    Rezervovat konzultaci zdarma
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="/kontakt">
                                <Button variant="outline" size="lg" className="text-base h-12 px-8 border-primary/20 hover:bg-primary/5">
                                    Kontaktujte mě
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
