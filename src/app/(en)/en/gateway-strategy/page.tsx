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
    title: "Gateway Strategy | Czech Market Entry Consulting | I am Tomas",
    description: "🇨🇿 Avoid costly mistakes when entering the Czech market. Expert consulting for e-commerce, SaaS & recruitment agencies expanding to CEE. Local insights that save you money.",
    keywords: [
        "czech market entry",
        "cee expansion strategy",
        "czech republic business consulting",
        "central europe market entry",
        "czech localization strategy",
        "czech video marketing",
        "czech digital marketing consultant"
    ],
    alternates: {
        canonical: "https://en.jajsemtomas.cz/gateway-strategy",
        languages: {
            "cs": "https://jajsemtomas.cz/vstup-na-trh"
        }
    },
    openGraph: {
        title: "Gateway Strategy | Czech Market Entry Consulting",
        description: "Expert consulting for companies expanding to Czech Republic & CEE. Avoid costly localization mistakes.",
        url: "https://en.jajsemtomas.cz/gateway-strategy",
        type: "website",
    },
};

const marketStats = [
    { value: "94.2%", label: "Internet Penetration", description: "Highly digital population" },
    { value: "139%", label: "Mobile Connections", description: "Per capita ratio" },
    { value: "75%", label: "YouTube Reach", description: "Of Czech population" },
    { value: "#1", label: "Price Comparison", description: "Heureka dominates buying decisions" },
];

const painPoints = [
    {
        icon: AlertTriangle,
        title: "Generic CEE Strategies Fail",
        description: "Foreign companies treat Czech Republic like Poland or Romania. Different culture, different buying behavior, different results."
    },
    {
        icon: MessageSquare,
        title: "Dubbing vs. Subtitles Dilemma",
        description: "Czech audiences historically prefer dubbing. But Gen Z is changing. One wrong call can kill your campaign ROI."
    },
    {
        icon: BarChart3,
        title: "The 'Heureka Effect'",
        description: "Czechs obsessively compare prices. Your video strategy must include social proof and reviews—not just brand imagery."
    },
    {
        icon: Globe,
        title: "Platform Blindspots",
        description: "YouTube Shorts vs. Instagram Reels vs. TikTok—each has different reach and demographics in CZ. Data-driven choices matter."
    },
];

const deliverables = [
    {
        icon: Target,
        title: "Market Entry Audit",
        items: [
            "Competitive landscape analysis",
            "Audience segmentation for CZ market",
            "Platform reach data & recommendations",
            "Budget allocation strategy"
        ]
    },
    {
        icon: FileText,
        title: "Localization Playbook",
        items: [
            "Dubbing vs. subtitles decision matrix",
            "Tone of voice guidelines (Czech humor, skepticism)",
            "Keyword research for high-converting terms",
            "Cultural do's and don'ts"
        ]
    },
    {
        icon: Lightbulb,
        title: "Content Strategy",
        items: [
            "YouTube Shorts vs. Reels vs. TikTok breakdown",
            "Content calendar template",
            "Influencer & creator recommendations",
            "UGC strategy for Czech market"
        ]
    },
    {
        icon: TrendingUp,
        title: "Performance Framework",
        items: [
            "KPI benchmarks for Czech market",
            "A/B testing recommendations",
            "Measurement & reporting setup",
            "Quarterly review structure"
        ]
    },
];

const idealClients = [
    {
        icon: Globe,
        title: "E-commerce Brands",
        description: "Expanding product lines to Czech consumers. Need localized video content that drives conversions."
    },
    {
        icon: Zap,
        title: "SaaS Companies",
        description: "Launching in CEE markets. Require localized product demos, tutorials, and brand content."
    },
    {
        icon: Users,
        title: "Recruitment Agencies",
        description: "Hiring in Czech Republic. Need employer branding videos that resonate with local talent."
    },
];

const process = [
    {
        step: "01",
        title: "Discovery Call",
        description: "30-min video call to understand your goals, current presence, and expansion timeline.",
        duration: "30 min"
    },
    {
        step: "02",
        title: "Market Deep-Dive",
        description: "I analyze your competitors, audience, and platform opportunities specific to Czech market.",
        duration: "5-7 days"
    },
    {
        step: "03",
        title: "Strategy Presentation",
        description: "90-minute workshop presenting your custom Gateway Strategy with actionable recommendations.",
        duration: "90 min"
    },
    {
        step: "04",
        title: "Execution Support",
        description: "Optional: I help you implement the strategy—from content production to influencer outreach.",
        duration: "Ongoing"
    },
];

export default function GatewayStrategyPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Gateway Strategy - Czech Market Entry Consulting",
        "description": "Expert consulting service for companies expanding to Czech Republic and CEE markets. Includes market analysis, localization strategy, and content recommendations.",
        "provider": {
            "@type": "Person",
            "name": "Tomáš Berka",
            "url": "https://en.jajsemtomas.cz",
            "jobTitle": "Video Strategist & Market Entry Consultant"
        },
        "areaServed": [
            {
                "@type": "Country",
                "name": "Czech Republic"
            },
            {
                "@type": "Place",
                "name": "Central and Eastern Europe"
            }
        ],
        "serviceType": "Business Consulting",
        "offers": {
            "@type": "Offer",
            "name": "Gateway Strategy Package",
            "description": "Complete Czech market entry strategy including audit, localization playbook, content strategy, and performance framework."
        }
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
                            🇨🇿 For Companies Entering Czech Market
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
                            Don&apos;t Waste Money on
                            <span className="block text-emerald-500 mt-2">Generic CEE Strategies</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                            <strong>The Czech market is not Poland. It&apos;s not Romania.</strong><br />
                            Get a local strategist who knows what actually works—and what will waste your budget.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/booking">
                                <Button size="lg" className="h-14 px-8 text-lg font-bold bg-emerald-600 hover:bg-emerald-700 shadow-lg">
                                    Book Strategy Call
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="#how-it-works">
                                <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                                    See How It Works
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
                        Czech Republic: A Unique Digital Market
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
                            Why Most Market Entries Fail
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Foreign brands make the same mistakes. Here&apos;s what you need to know.
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
                            Who Is Gateway Strategy For?
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            This is a premium consulting engagement for serious market entrants.
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
                            What&apos;s Included in Gateway Strategy
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Data and insights you can&apos;t Google. Strategic frameworks tailored to your business.
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
            <section id="how-it-works" className="py-16 bg-muted/20 border-y scroll-mt-20">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            How It Works
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            From first call to market-ready strategy in 2 weeks.
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
                                Your Local Guide
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                                Why Work With Me?
                            </h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    I&apos;m Tomáš Berka—a Prague-based video strategist with <strong>7+ years of experience</strong> creating content for Czech and international brands.
                                </p>
                                <p>
                                    I&apos;ve worked with companies like <strong>ČSOB, Plzeňský Prazdroj, and Oreo</strong> on campaigns that resonate with Czech audiences. I know the cultural nuances, platform dynamics, and what makes Czech consumers click &quot;buy.&quot;
                                </p>
                                <p>
                                    Gateway Strategy is my way of helping foreign brands avoid expensive mistakes. Think of me as your <strong>Local Fixer</strong>—someone who saves you money by knowing what works before you spend it.
                                </p>
                            </div>
                            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                                <div className="p-4 bg-muted/50 rounded-lg">
                                    <div className="text-2xl font-bold">150+</div>
                                    <div className="text-sm text-muted-foreground">Projects</div>
                                </div>
                                <div className="p-4 bg-muted/50 rounded-lg">
                                    <div className="text-2xl font-bold">7+</div>
                                    <div className="text-sm text-muted-foreground">Years</div>
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
                                    alt="Tomáš Berka - Video Strategist"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-card border rounded-xl p-4 shadow-lg max-w-[200px]">
                                <div className="flex items-center gap-2 mb-2">
                                    <Shield className="h-5 w-5 text-emerald-500" />
                                    <span className="font-semibold text-sm">Risk-Free Start</span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    First discovery call is free. No commitment until you see the value.
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
                            Ready to Enter the Czech Market?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Let&apos;s talk about your expansion goals. The first 30-minute call is on me.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/booking">
                                <Button size="lg" className="h-14 px-8 text-lg font-bold bg-emerald-600 hover:bg-emerald-700 shadow-lg">
                                    Book Free Strategy Call
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                                    Send a Message
                                </Button>
                            </Link>
                        </div>
                        <p className="mt-6 text-sm text-muted-foreground">
                            Prefer email? Reach me at <a href="mailto:msg@jajsemtomas.cz" className="text-primary hover:underline">msg@jajsemtomas.cz</a>
                        </p>
                    </div>
                </Container>
            </section>
        </div>
    );
}
