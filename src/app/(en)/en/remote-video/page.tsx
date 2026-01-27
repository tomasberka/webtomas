import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import {
    Check,
    ArrowRight,
    Globe,
    Clock,
    Zap,
    Video,
    Target,
    TrendingUp,
    MessageSquare,
    Calendar,
    Play,
    Shield,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Remote Video Production for SaaS & Tech Startups | Tomas Berka",
    description: "Fractional Video Producer for tech startups. SaaS product demos, UGC for B2B, high-retention Reels. Async-first workflow. Prague-based, global delivery.",
    keywords: [
        "saas product demo video",
        "ugc for b2b tech",
        "fractional video producer",
        "remote video editor for startups",
        "tech startup video production",
        "product demo video",
        "b2b video content",
        "startup video marketing",
    ],
    alternates: {
        canonical: "https://en.jajsemtomas.cz/remote-video",
    },
    openGraph: {
        title: "Remote Video Production for SaaS & Tech Startups",
        description: "Fractional Video Producer. I don't just edit; I manage the project while you sleep.",
        url: "https://en.jajsemtomas.cz/remote-video",
        locale: "en_US",
        siteName: "Tomas Berka - Video Strategist",
        images: [
            {
                url: "https://en.jajsemtomas.cz/images/og-image-en-new.png",
                width: 1200,
                height: 630,
                alt: "Remote Video Production for Tech Startups",
            },
        ],
    },
};

// Contextualized client logos for global audience
const clients = [
    {
        name: "OICT",
        logo: "/images/clients/oict.png",
        description: "Municipal Tech Company operating Prague's Smart City infrastructure",
    },
    {
        name: "Roklen24",
        logo: "/images/clients/roklen.png",
        description: "Leading Czech FinTech & Financial Media Platform",
    },
    {
        name: "DEKRA",
        logo: "/images/clients/dekra.png",
        description: "Global Testing & Certification Company (60+ countries)",
    },
    {
        name: "Tatra Trucks",
        logo: "/images/clients/tatra.png",
        description: "Global Heavy Vehicle Manufacturer (Est. 1850)",
    },
];

const retainerPackages = [
    {
        title: "Growth Engine",
        price: "$2,500",
        period: "/month",
        description: "Consistent content for steady growth",
        features: [
            "4 high-retention videos/month",
            "Monthly strategy call (async-friendly)",
            "Captions & platform optimization",
            "48h turnaround on revisions",
            "Dedicated Slack/Notion workspace",
        ],
        popular: true,
    },
    {
        title: "Scale Package",
        price: "$4,500",
        period: "/month",
        description: "Full content engine for rapid scaling",
        features: [
            "8 videos/month (2 per week)",
            "Bi-weekly strategy sessions",
            "A/B testing hooks & thumbnails",
            "LinkedIn + TikTok + Shorts formats",
            "Content calendar management",
            "Performance analytics review",
        ],
        popular: false,
    },
    {
        title: "Product Demo",
        price: "From $1,500",
        period: "/project",
        description: "One-time SaaS product walkthrough",
        features: [
            "60-90 second product demo",
            "Screen recording + motion graphics",
            "Professional voiceover",
            "2 revision rounds included",
            "Source files delivered",
        ],
        popular: false,
    },
];

const workflowSteps = [
    {
        step: "01",
        title: "Discovery Call",
        description: "15-min async or live call. We align on goals, audience, and brand voice.",
        icon: MessageSquare,
    },
    {
        step: "02",
        title: "Brief & Script",
        description: "I draft hooks, scripts, and shot lists. You approve via Notion/Loom.",
        icon: Target,
    },
    {
        step: "03",
        title: "Production",
        description: "You send footage (or I shoot in Prague). I handle editing, SFX, captions.",
        icon: Video,
    },
    {
        step: "04",
        title: "Review & Deliver",
        description: "Preview in Frame.io. Revisions within 48h. Final files in all formats.",
        icon: Zap,
    },
];

export default function RemoteVideoPage() {
    return (
        <div className="flex flex-col gap-16 md:gap-24 pb-16">
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://en.jajsemtomas.cz" },
                    { name: "Remote Video Production", url: "https://en.jajsemtomas.cz/remote-video" },
                ]}
            />

            {/* Hero Section */}
            <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-background -z-10" />
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Globe className="h-4 w-4" />
                            Prague-Based • Global Delivery
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                            Fractional Video Producer
                            <br />
                            <span className="text-primary">for Tech Startups</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                            I don't just edit — I manage your content pipeline while you sleep.
                            <br className="hidden md:block" />
                            SaaS demos, UGC for B2B, high-retention Reels.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Wf1BjdwQdJU84AymHizbMjQdNFMgFHGmSvvD112G3Yv_TuuI5mNYVoeChrHBIw4uZY-w7nt7_" target="_blank">
                                <Button size="lg" className="text-lg h-14 px-8 font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                                    <Calendar className="mr-2 h-5 w-5" />
                                    Book Discovery Call
                                </Button>
                            </Link>
                            <Link href="#how-it-works">
                                <Button variant="outline" size="lg" className="text-lg h-14 px-8">
                                    See How It Works
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Trust Signals - Contextualized Clients */}
            <section className="py-12 bg-muted/30 border-y">
                <Container>
                    <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
                        Trusted by Enterprise & Growth-Stage Companies
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {clients.map((client) => (
                            <div key={client.name} className="text-center group">
                                <div className="h-16 flex items-center justify-center mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        width={120}
                                        height={48}
                                        className="max-h-12 w-auto object-contain filter brightness-0 invert"
                                    />
                                </div>
                                <p className="text-xs text-muted-foreground leading-tight">
                                    {client.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Why Remote Works */}
            <section className="py-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why Tech Startups Choose Remote
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Your content needs don't wait for office hours. Neither do I.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="border-none shadow-sm bg-card/80 backdrop-blur">
                            <CardHeader>
                                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <Clock className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Async-First Workflow</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Loom briefs, Notion boards, Frame.io reviews. No timezone friction. 
                                    I work while SF sleeps, you wake up to finished videos.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-sm bg-card/80 backdrop-blur">
                            <CardHeader>
                                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <TrendingUp className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Geo-Arbitrage Advantage</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Senior-level quality at a fraction of US agency rates. 
                                    Your $2,500/mo gets you what costs $8,000+ in LA or NYC.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-sm bg-card/80 backdrop-blur">
                            <CardHeader>
                                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <Shield className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>US-Ready Contracts</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Stripe/Wise payments. W-8BEN ready. Usage rights clearly defined. 
                                    I've worked with US companies — no surprises.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-16 bg-muted/30">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            How It Works
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            From brief to delivery in under 7 days. Here's the process.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {workflowSteps.map((step) => (
                            <div key={step.step} className="relative">
                                <div className="text-6xl font-bold text-primary/10 absolute -top-4 -left-2">
                                    {step.step}
                                </div>
                                <div className="relative pt-8 pl-4">
                                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <step.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Pricing - Retainer Packages */}
            <section className="py-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Investment
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Predictable pricing. No scope creep. Cancel anytime.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {retainerPackages.map((pkg) => (
                            <Card
                                key={pkg.title}
                                className={`relative ${pkg.popular ? "border-2 border-primary shadow-lg" : "border"}`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                                        Most Popular
                                    </div>
                                )}
                                <CardHeader className="text-center pb-4">
                                    <CardTitle className="text-xl">{pkg.title}</CardTitle>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold">{pkg.price}</span>
                                        <span className="text-muted-foreground">{pkg.period}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 mb-6">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm">
                                                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Wf1BjdwQdJU84AymHizbMjQdNFMgFHGmSvvD112G3Yv_TuuI5mNYVoeChrHBIw4uZY-w7nt7_" target="_blank">
                                        <Button
                                            className="w-full"
                                            variant={pkg.popular ? "default" : "outline"}
                                        >
                                            Get Started
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-8">
                        All prices in USD. Payments via Stripe or Wise. Invoicing available.
                    </p>
                </Container>
            </section>

            {/* Video Audit CTA */}
            <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-background">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Play className="h-4 w-4" />
                            Free Value First
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Get a Free 5-Minute Video Audit
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Send me your LinkedIn or Instagram profile. I'll record a personalized Loom
                            with 3 actionable tips to improve your content immediately. No strings attached.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="text-lg h-14 px-8">
                                Request Your Free Audit
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="py-16">
                <Container>
                    <div className="bg-card border rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Scale Your Video Content?
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            One call to discuss your goals. No pressure, no hard sell. 
                            If we're a fit, we start. If not, you'll still get value from our conversation.
                        </p>
                        <Link href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Wf1BjdwQdJU84AymHizbMjQdNFMgFHGmSvvD112G3Yv_TuuI5mNYVoeChrHBIw4uZY-w7nt7_" target="_blank">
                            <Button size="lg" className="text-lg h-14 px-8 font-bold shadow-lg">
                                <Calendar className="mr-2 h-5 w-5" />
                                Book 15-Min Discovery Call
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Schema.org Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Remote Video Production for SaaS & Tech Startups",
                        "provider": {
                            "@type": "Person",
                            "name": "Tomas Berka",
                            "url": "https://en.jajsemtomas.cz",
                            "jobTitle": "Video Strategist & Lead Creator",
                        },
                        "description": "Fractional Video Producer for tech startups. SaaS product demos, UGC for B2B, high-retention Reels. Async-first workflow.",
                        "areaServed": ["United States", "United Kingdom", "Europe"],
                        "serviceType": ["Video Production", "SaaS Product Demo", "UGC Content", "Social Media Video"],
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "1500",
                            "highPrice": "4500",
                            "priceCurrency": "USD",
                        },
                    }),
                }}
            />
        </div>
    );
}
