import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";
import {
    ArrowRight,
    CheckCircle,
    Globe,
    Target,
    TrendingUp,
    Users,
    AlertTriangle,
    BarChart3,
    MessageSquare,
    Lightbulb,
    Shield,
    Clock,
    Zap,
    FileText
} from "lucide-react";

export const metadata: Metadata = {
    title: "Vstup na Český Trh | Konzultace pro Zahraniční Firmy | Já jsem Tomáš",
    description: "🇨🇿 Vyhněte se drahým chybám při expanzi na český trh. Konzultace pro e-shopy, SaaS a personální agentury expandující do střední Evropy.",
    keywords: [
        "vstup na český trh",
        "expanze do české republiky",
        "lokalizace pro česko",
        "video marketing česká republika",
        "cee expanzní strategie",
        "konzultace expanze čr"
    ],
    alternates: {
        canonical: "https://jajsemtomas.cz/vstup-na-trh",
        languages: {
            "en": "https://en.jajsemtomas.cz/gateway-strategy"
        }
    },
    openGraph: {
        title: "Vstup na Český Trh | Konzultace pro Zahraniční Firmy",
        description: "Strategické poradenství pro firmy expandující do České republiky a CEE regionu.",
        url: "https://jajsemtomas.cz/vstup-na-trh",
        type: "website",
    },
};

const marketStats = [
    { value: "94,2 %", label: "Penetrace internetu", description: "Vysoce digitální populace" },
    { value: "139 %", label: "Mobilní připojení", description: "Na obyvatele" },
    { value: "75 %", label: "Dosah YouTube", description: "České populace" },
    { value: "#1", label: "Srovnávače cen", description: "Heureka dominuje nákupům" },
];

const painPoints = [
    {
        icon: AlertTriangle,
        title: "Generické CEE strategie selhávají",
        description: "Zahraniční firmy zacházejí s Českou republikou jako s Polskem nebo Rumunskem. Jiná kultura, jiné nákupní chování, jiné výsledky."
    },
    {
        icon: MessageSquare,
        title: "Dilema dabing vs. titulky",
        description: "Češi historicky preferují dabing. Ale Gen Z to mění. Jedno špatné rozhodnutí může zabít ROI vaší kampaně."
    },
    {
        icon: BarChart3,
        title: "Heureka efekt",
        description: "Češi jsou mistři ve srovnávání cen. Vaše video strategie musí obsahovat social proof a recenze—nestačí jen image reklama."
    },
    {
        icon: Globe,
        title: "Slepá místa platforem",
        description: "YouTube Shorts vs. Instagram Reels vs. TikTok—každá má jiný dosah a demografii v ČR. Rozhodnutí založená na datech jsou klíčová."
    },
];

const deliverables = [
    {
        icon: Target,
        title: "Audit vstupu na trh",
        items: [
            "Analýza konkurenčního prostředí",
            "Segmentace cílové skupiny pro ČR",
            "Data o dosahu platforem & doporučení",
            "Strategie alokace rozpočtu"
        ]
    },
    {
        icon: FileText,
        title: "Příručka lokalizace",
        items: [
            "Rozhodovací matice dabing vs. titulky",
            "Pokyny pro tón komunikace (český humor, skepticismus)",
            "Výzkum klíčových slov pro konverze",
            "Kulturní rady a tipy"
        ]
    },
    {
        icon: Lightbulb,
        title: "Obsahová strategie",
        items: [
            "Rozpad YouTube Shorts vs. Reels vs. TikTok",
            "Šablona obsahového kalendáře",
            "Doporučení influencerů a tvůrců",
            "UGC strategie pro český trh"
        ]
    },
    {
        icon: TrendingUp,
        title: "Framework výkonu",
        items: [
            "KPI benchmarky pro český trh",
            "Doporučení pro A/B testování",
            "Nastavení měření a reportingu",
            "Struktura čtvrtletních revizí"
        ]
    },
];

const idealClients = [
    {
        icon: Globe,
        title: "E-commerce značky",
        description: "Expanze produktových řad pro české spotřebitele. Potřebují lokalizovaný video obsah, který konvertuje."
    },
    {
        icon: Zap,
        title: "SaaS společnosti",
        description: "Spouštění na CEE trzích. Vyžadují lokalizované produktové demo, tutoriály a brand obsah."
    },
    {
        icon: Users,
        title: "Personální agentury",
        description: "Nábor v České republice. Potřebují employer branding videa, která rezonují s lokálními talenty."
    },
];

const process = [
    {
        step: "01",
        title: "Úvodní hovor",
        description: "30minutový video hovor k pochopení vašich cílů, současné přítomnosti a časového harmonogramu expanze.",
        duration: "30 min"
    },
    {
        step: "02",
        title: "Hloubková analýza trhu",
        description: "Analyzuji vaši konkurenci, cílovou skupinu a příležitosti platforem specifické pro český trh.",
        duration: "5–7 dní"
    },
    {
        step: "03",
        title: "Prezentace strategie",
        description: "90minutový workshop s prezentací vaší custom Gateway Strategy s akčními doporučeními.",
        duration: "90 min"
    },
    {
        step: "04",
        title: "Podpora realizace",
        description: "Volitelné: Pomohu vám strategii implementovat—od produkce obsahu po outreach influencerů.",
        duration: "Průběžně"
    },
];

export default function VstupNaTrhPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Gateway Strategy - Konzultace vstupu na český trh",
        "description": "Expertní konzultační služba pro firmy expandující do České republiky a CEE trhů. Zahrnuje analýzu trhu, lokalizační strategii a doporučení obsahu.",
        "provider": {
            "@type": "Person",
            "name": "Tomáš Berka",
            "url": "https://jajsemtomas.cz",
            "jobTitle": "Video stratég & konzultant vstupu na trh"
        },
        "areaServed": [
            {
                "@type": "Country",
                "name": "Česká republika"
            },
            {
                "@type": "Place",
                "name": "Střední a východní Evropa"
            }
        ],
        "serviceType": "Podnikatelské poradenství"
    };

    return (
        <div className="flex flex-col pb-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-background to-background -z-10" />
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-6">
                            🌍 Pro zahraniční firmy vstupující na český trh
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
                            Neutrácejte zbytečně za
                            <span className="block text-emerald-500 mt-2">generické CEE strategie</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                            <strong>Český trh není Polsko. Není Rumunsko.</strong><br />
                            Získejte lokálního stratéga, který ví, co skutečně funguje—a co promrhá váš rozpočet.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/kontakt?service=Vstup+na+trh">
                                <Button size="lg" className="h-14 px-8 text-lg font-bold bg-emerald-600 hover:bg-emerald-700 shadow-lg">
                                    Rezervovat strategický hovor
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="#jak-to-funguje">
                                <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                                    Jak to funguje
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Market Stats */}
            <section className="border-y bg-muted/40 py-12">
                <Container>
                    <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
                        Česká republika 2026: Unikátní digitální trh
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {marketStats.map((stat, index) => (
                            <div key={index} className="space-y-1">
                                <div className="text-3xl md:text-4xl font-bold text-emerald-600">{stat.value}</div>
                                <div className="text-sm font-medium">{stat.label}</div>
                                <div className="text-xs text-muted-foreground">{stat.description}</div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Pain Points */}
            <section className="py-16 md:py-24">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Proč většina vstupů na trh selhává
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Zahraniční značky dělají stejné chyby. Tady je, co potřebujete vědět.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {painPoints.map((point, index) => (
                            <Card key={index} className="border-destructive/20 bg-destructive/5">
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-destructive/10">
                                            <point.icon className="h-6 w-6 text-destructive" />
                                        </div>
                                        <CardTitle className="text-lg">{point.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{point.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Who This Is For */}
            <section className="py-16 bg-muted/20 border-y">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Pro koho je Gateway Strategy
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Prémiová konzultace pro vážné zájemce o expanzi.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {idealClients.map((client, index) => (
                            <Card key={index} className="text-center hover:border-emerald-500/50 transition-colors">
                                <CardHeader>
                                    <div className="mx-auto p-4 rounded-full bg-emerald-500/10 w-fit mb-4">
                                        <client.icon className="h-8 w-8 text-emerald-600" />
                                    </div>
                                    <CardTitle>{client.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{client.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* What You Get */}
            <section className="py-16 md:py-24">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Co zahrnuje Gateway Strategy
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Data a vhledy, které si nevygooglíte. Strategické frameworky na míru vašemu byznysu.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {deliverables.map((deliverable, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <deliverable.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle>{deliverable.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {deliverable.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* How It Works */}
            <section id="jak-to-funguje" className="py-16 bg-muted/20 border-y scroll-mt-20">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Jak to funguje
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Od prvního hovoru ke strategii připravené pro trh za 2 týdny.
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-8">
                            {process.map((step, index) => (
                                <div key={index} className="flex gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-lg">
                                            {step.step}
                                        </div>
                                        {index < process.length - 1 && (
                                            <div className="w-0.5 h-full bg-emerald-500/30 mt-2" />
                                        )}
                                    </div>
                                    <div className="pb-8">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-xl font-bold">{step.title}</h3>
                                            <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                                                <Clock className="h-3 w-3 inline mr-1" />
                                                {step.duration}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* About Me / Credibility */}
            <section className="py-16 md:py-24">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium border-primary/20 bg-primary/10 text-primary mb-4">
                                Váš lokální průvodce
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                                Proč pracovat se mnou?
                            </h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    Jsem Tomáš Berka—video stratég z Prahy s <strong>7+ lety zkušeností</strong> s tvorbou obsahu pro české i mezinárodní značky.
                                </p>
                                <p>
                                    Spolupracoval jsem s firmami jako <strong>ČSOB, Plzeňský Prazdroj a Oreo</strong> na kampaních, které rezonují s českými diváky. Znám kulturní nuance, dynamiku platforem a vím, co přiměje české spotřebitele kliknout na &quot;koupit&quot;.
                                </p>
                                <p>
                                    Gateway Strategy je mým způsobem, jak pomoci zahraničním značkám vyhnout se drahým chybám. Představte si mě jako vašeho <strong>lokálního fixera</strong>—někoho, kdo vám ušetří peníze tím, že ví, co funguje, ještě před tím, než je utratíte.
                                </p>
                            </div>
                            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                                <div className="p-4 bg-muted/50 rounded-lg">
                                    <div className="text-2xl font-bold">150+</div>
                                    <div className="text-sm text-muted-foreground">Projektů</div>
                                </div>
                                <div className="p-4 bg-muted/50 rounded-lg">
                                    <div className="text-2xl font-bold">7+</div>
                                    <div className="text-sm text-muted-foreground">Let</div>
                                </div>
                                <div className="p-4 bg-muted/50 rounded-lg">
                                    <div className="text-2xl font-bold">500K+</div>
                                    <div className="text-sm text-muted-foreground">Views</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-500/20 to-primary/20 border overflow-hidden">
                                <img
                                    src="/images/tomas-hero.jpg"
                                    alt="Tomáš Berka - Video stratég"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-card border rounded-xl p-4 shadow-lg max-w-[200px]">
                                <div className="flex items-center gap-2 mb-2">
                                    <Shield className="h-5 w-5 text-emerald-500" />
                                    <span className="font-semibold text-sm">Bez rizika</span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    První úvodní hovor je zdarma. Žádný závazek, dokud neuvidíte hodnotu.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-900/20 to-primary/20 border-y">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            Připraveni vstoupit na český trh?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Pojďme probrat vaše expanzní cíle. Prvních 30 minut je na mě.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/kontakt?service=Vstup+na+trh">
                                <Button size="lg" className="h-14 px-8 text-lg font-bold bg-emerald-600 hover:bg-emerald-700 shadow-lg">
                                    Rezervovat bezplatný strategický hovor
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="/kontakt">
                                <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                                    Poslat zprávu
                                </Button>
                            </Link>
                        </div>
                        <p className="mt-6 text-sm text-muted-foreground">
                            Preferujete email? Napište mi na <a href="mailto:msg@jajsemtomas.cz" className="text-primary hover:underline">msg@jajsemtomas.cz</a>
                        </p>
                    </div>
                </Container>
            </section>
        </div>
    );
}
