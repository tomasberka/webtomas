import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import {
    Video,
    Camera,
    Mic,
    Monitor,
    Lightbulb,
    Shield,
    Sparkles,
    CheckCircle2,
    ArrowRight,
    Users,
    Zap,
    Calendar,
    Settings,
    Play,
    Film,
    Tv,
    HardDrive,
    Palette,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Eve and Talk | Mobilní Video Studio pro Eventy | Já jsem Tomáš × SocialVids",
    description: "Proměňte pomíjivé momenty z vaší akce na trvalá digitální aktiva. Profesionální mobilní studio přímo na vašem eventu. Broadcast quality, rychlé dodání.",
    keywords: ["event video", "mobilní studio", "konference video", "event marketing", "video produkce event", "rozhovory na konferencích", "live-to-tape"],
    alternates: {
        canonical: "https://jajsemtomas.cz/eve-and-talk",
        languages: {
            "en": "https://en.jajsemtomas.cz/eve-and-talk"
        }
    },
    openGraph: {
        title: "Eve and Talk | Mobilní Video Studio pro Eventy",
        description: "Proměňte pomíjivé momenty z vaší akce na trvalá digitální aktiva. Profesionální mobilní studio přímo na vašem eventu.",
        type: "website",
        images: [
            {
                url: "https://jajsemtomas.cz/images/service-event.jpg",
                width: 1200,
                height: 630,
                alt: "Eve and Talk - Mobilní Video Studio",
            },
        ],
    },
};

const problems = [
    {
        icon: Settings,
        title: "Logistika",
        description: "Nemusíte řešit techniku, světla ani zvuk. Přivezeme vše potřebné a postavíme studio za vás.",
    },
    {
        icon: Tv,
        title: "Kvalita",
        description: "Výstup garantuje \"broadcast quality\" díky technickému zázemí Martina Kimly ze SocialVids.",
    },
    {
        icon: Zap,
        title: "Rychlost",
        description: "Využití procesů \"rapid-turnaround\" umožňuje dodání obsahu téměř v reálném čase.",
    },
];

const equipment = [
    {
        icon: Camera,
        title: "Multicam Setup",
        description: "2–3 kamery (Sony FX řada, Full Frame) pro dynamický střih rozhovorů s filmovou hloubkou ostrosti.",
        features: ["Host kamera", "Hostitel kamera", "Celkový záběr"],
    },
    {
        icon: Lightbulb,
        title: "Studiové Svícení",
        description: "3-bodové svícení (Key, Fill, Backlight) s bi-color LED panely Aputure/Nanlite a softboxy.",
        features: ["Lichotivé tóny pleti", "Oddělení od pozadí", "Konferenční podmínky"],
    },
    {
        icon: Mic,
        title: "Audio Redundance",
        description: "Redundantní zvukový systém pro bezchybný záznam i v hlučném prostředí eventu.",
        features: ["Shotgun mikrofony", "Klopové mikrofony (lavalier)", "Záložní nahrávání"],
    },
    {
        icon: Monitor,
        title: "Režie & Monitoring",
        description: "Přenosná střižna (ATEM Mini Extreme ISO) pro live střih a \"Same Day Edit\".",
        features: ["Live-to-Tape", "Okamžitý náhled", "Rychlá postprodukce"],
    },
];

const workflow = [
    {
        step: "01",
        icon: Calendar,
        title: "Pre-Event Strategy",
        description: "Konzultace s Tomášem Berkou ohledně vizuálního stylu (brandingu) scény a skriptu otázek.",
    },
    {
        step: "02",
        icon: Settings,
        title: "Setup & Calibration",
        description: "Tým (Martin + Tomáš) dorazí 2 hodiny předem pro stavbu scény a zvukovou zkoušku.",
    },
    {
        step: "03",
        icon: Play,
        title: "On-Site Execution",
        description: "Natáčení v blocích. Díky živému náhledu můžete na monitoru ihned vidět výsledek.",
    },
    {
        step: "04",
        icon: HardDrive,
        title: "Rapid Ingest & Backup",
        description: "Okamžité zálohování dat na SSD disky pro maximální bezpečnost vašeho obsahu.",
    },
    {
        step: "05",
        icon: Palette,
        title: "Post-Production",
        description: "Střih, color grading, audio mastering a vkládání grafiky (titulky, loga).",
    },
];

const benefits = [
    {
        icon: Film,
        title: "Televizní kvalita",
        description: "Výstup, který vypadá jako profesionální TV produkce, ne vlog z mobilu.",
    },
    {
        icon: Users,
        title: "Magnet pro návštěvníky",
        description: "Studio funguje jako atrakce – přitáhne lidi k vašemu stánku.",
    },
    {
        icon: Zap,
        title: "Továrna na obsah",
        description: "Z jednoho dne získáte desítky rozhovorů využitelných celý rok.",
    },
    {
        icon: Shield,
        title: "Profesionální zázemí",
        description: "Partnerství Tomáš Berka × SocialVids = záruka kvality a spolehlivosti.",
    },
];

export default function EveAndTalkPage() {
    return (
        <div className="flex flex-col gap-16 md:gap-24 pb-16">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Eve and Talk - Mobilní Video Studio",
                        "description": "Profesionální mobilní video studio pro eventy a konference. Broadcast quality rozhovory přímo na místě.",
                        "provider": {
                            "@type": "Organization",
                            "name": "Já jsem Tomáš × SocialVids",
                            "url": "https://jajsemtomas.cz"
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "Česká republika"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Event Video Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Mobilní studio setup"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Profesionální rozhovory"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Same Day Edit"
                                    }
                                }
                            ]
                        }
                    })
                }}
            />

            {/* Hero Section */}
            <section className="relative pt-8 pb-20 md:pt-16 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-background to-background -z-10" />
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-amber-500/10 via-transparent to-transparent -z-10" />

                <Container className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors border-amber-500/30 bg-amber-500/10 text-amber-500 mb-6 animate-fade-in-up">
                            <Sparkles className="h-4 w-4 mr-2" />
                            TOMÁŠ BERKA × SOCIALVIDS
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 animate-fade-in-up animation-delay-100">
                            Eve <span className="text-amber-500">&</span> Talk
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up animation-delay-200 leading-relaxed font-medium">
                            Mobilní Video Studio pro Eventy
                        </p>

                        <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up animation-delay-200 max-w-xl">
                            Proměňte pomíjivé momenty z vaší akce na <strong className="text-foreground">trvalá digitální aktiva</strong>.
                            Přivezeme studio za vámi, zajistíme profesionální rozhovory a dodáme obsah,
                            který vypadá jako televizní produkce.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
                            <Link href="/rezervace">
                                <Button size="lg" className="w-full sm:w-auto text-base h-14 px-8 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold shadow-lg shadow-orange-500/20 hover:shadow-xl transition-all hover:-translate-y-1">
                                    📅 Nezávazná konzultace
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="#jak-to-funguje">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 border-amber-500/30 hover:bg-amber-500/10">
                                    Jak to funguje?
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-lg animate-fade-in-up animation-delay-200">
                        <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-amber-900/30 to-orange-900/30 p-1 border border-amber-500/20 shadow-2xl shadow-orange-500/10 overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
                            <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex items-center justify-center relative">
                                <div className="text-center p-8">
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-500/20 mb-4">
                                        <Video className="w-10 h-10 text-amber-500" />
                                    </div>
                                    <p className="text-xl font-bold text-white mb-2">Mobilní Studio</p>
                                    <p className="text-muted-foreground text-sm">Broadcast Quality</p>
                                </div>
                                {/* Decorative camera elements */}
                                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-red-500/80 animate-pulse flex items-center justify-center">
                                    <span className="text-xs text-white font-bold">REC</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Problems We Solve */}
            <section className="border-y bg-muted/20 py-16 md:py-20">
                <Container>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/10 text-primary mx-auto mb-4">
                            💡 Co řešíme
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            3 problémy, které za vás vyřešíme
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Event marketing vyžaduje profesionální obsah, ale většina vystavovatelů nemá kapacity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {problems.map((problem, index) => (
                            <Card
                                key={problem.title}
                                className="p-8 text-center hover:border-amber-500/50 hover:shadow-lg hover:-translate-y-1 transition-all bg-card/50 backdrop-blur-sm animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 mb-6">
                                    <problem.icon className="w-8 h-8 text-amber-500" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                                <p className="text-muted-foreground">{problem.description}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Technical Equipment */}
            <section id="vybaveni">
                <Container>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/10 text-primary mx-auto mb-4">
                            🎬 Hardware-Enabled Service
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Technická specifikace studia
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Profesionální vybavení pro broadcast quality výstup. Žádné kompromisy.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {equipment.map((item, index) => (
                            <Card
                                key={item.title}
                                className="overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all bg-card/50 backdrop-blur-sm animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="p-6 md:p-8">
                                    <div className="flex items-start gap-4">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                                            <item.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                            <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                                            <ul className="flex flex-wrap gap-2">
                                                {item.features.map((feature) => (
                                                    <li key={feature} className="inline-flex items-center text-xs bg-muted px-3 py-1 rounded-full">
                                                        <CheckCircle2 className="w-3 h-3 text-primary mr-1.5" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Workflow Section */}
            <section id="jak-to-funguje" className="bg-muted/20 border-y py-16 md:py-20">
                <Container>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/10 text-primary mx-auto mb-4">
                            ⚙️ Procesní workflow
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Jak probíhá spolupráce
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Transparentní proces od první konzultace až po finální dodání obsahu.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            {workflow.map((step, index) => (
                                <div
                                    key={step.step}
                                    className="flex gap-6 items-start animate-fade-in-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/20">
                                        {step.step}
                                    </div>
                                    <Card className="flex-1 p-6 hover:border-amber-500/50 transition-all">
                                        <div className="flex items-start gap-4">
                                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500/10 flex-shrink-0">
                                                <step.icon className="w-5 h-5 text-amber-500" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                                                <p className="text-muted-foreground text-sm">{step.description}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Benefits Grid */}
            <section>
                <Container>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/10 text-primary mx-auto mb-4">
                            ✨ Proč Eve & Talk
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Výhody pro váš event
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <Card
                                key={benefit.title}
                                className="p-6 text-center hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                                    <benefit.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                                <p className="text-muted-foreground text-sm">{benefit.description}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Partnership Section */}
            <section className="border-y bg-gradient-to-r from-amber-900/10 via-orange-900/10 to-amber-900/10 py-16 md:py-20">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-left">
                            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium border-amber-500/30 bg-amber-500/10 text-amber-500 mb-4">
                                🤝 Partnerství
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                                Tomáš Berka × SocialVids
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                Spojení kreativního přístupu Tomáše Berky s technickým zázemím a zkušenostmi
                                Martina Kimly ze SocialVids. Společně dodáváme prémiovou kvalitu pro náročné klienty.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                    <span>10+ let zkušeností v event videografii</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                    <span>Projekty po celé Evropě</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                    <span>Rapid-turnaround procesy</span>
                                </li>
                            </ul>
                            <Link href="/partner-socialvids">
                                <Button variant="outline" className="border-amber-500/30 hover:bg-amber-500/10">
                                    Více o partnerství →
                                </Button>
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center border border-amber-500/30">
                                    <Image
                                        src="/images/socialvids-logo.png"
                                        alt="SocialVids Logo"
                                        width={160}
                                        height={60}
                                        className="w-32 h-auto object-contain opacity-90"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center border border-primary/30">
                                    <span className="text-sm font-bold text-primary">×</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="text-center">
                <Container>
                    <div className="bg-gradient-to-r from-amber-900/20 via-orange-900/20 to-amber-900/20 border border-amber-500/20 rounded-2xl p-12 md:p-16">
                        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium border-amber-500/30 bg-amber-500/10 text-amber-500 mb-6">
                            🚀 Začněte ještě dnes
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Připravte svůj event na úspěch
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Nezávazná konzultace zdarma. Probereme váš event, cíle a navrhneme řešení na míru.
                            Žádné zbytečné schůzky – konkrétní plán do 15 minut.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/rezervace">
                                <Button size="lg" className="text-base h-14 px-8 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold shadow-lg shadow-orange-500/20 hover:shadow-xl transition-all hover:-translate-y-1">
                                    📅 Rezervovat konzultaci zdarma
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <a href="mailto:msg@jajsemtomas.cz">
                                <Button variant="outline" size="lg" className="text-base h-14 px-8 border-amber-500/30 hover:bg-amber-500/10">
                                    msg@jajsemtomas.cz
                                </Button>
                            </a>
                        </div>

                        {/* Trust indicators */}
                        <div className="mt-12 pt-8 border-t border-border/50">
                            <p className="text-sm text-muted-foreground mb-4">Důvěřují nám</p>
                            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                                <span className="text-sm font-medium">Konference</span>
                                <span className="text-sm font-medium">Bootcampy</span>
                                <span className="text-sm font-medium">Award Ceremonies</span>
                                <span className="text-sm font-medium">Firemní eventy</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
