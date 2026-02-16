import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Globe, Users, Video, Camera, Scissors, Radio, MapPin, Image as ImageIcon, Film, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata: Metadata = {
    title: "Partner SocialVids | Large Productions & Events | I am Tomas",
    description: "Collaboration with SocialVids for event videography, live streaming, and international projects across 10+ countries. Conferences, bootcamps, award ceremonies.",
    keywords: ["socialvids partner", "event videography london", "live streaming conference", "international video production", "aftermovie", "recap video uk"],
    alternates: {
        canonical: "https://en.jajsemtomas.cz/partner-socialvids",
        languages: {
            "cs": "https://jajsemtomas.cz/partner-socialvids"
        }
    },
    openGraph: {
        title: "Partner SocialVids | Large Productions & Events | I am Tomas",
        description: "Event videography, live streaming, and international projects across 10+ countries.",
        url: "https://en.jajsemtomas.cz/partner-socialvids",
        locale: "en_GB",
        siteName: "I am Tomas",
    },
};

const services = [
    {
        icon: Video,
        title: "Event Videography",
        description: "Conferences, bootcamps, award ceremonies – we capture the atmosphere and key moments.",
        features: ["Recap videos", "Aftermovies", "Sponsor content"]
    },
    {
        icon: Radio,
        title: "Live Streaming",
        description: "Hybrid and virtual events with professional broadcast for global audiences.",
        features: ["Multi-camera setup", "Graphic overlays", "24/7 tech support"]
    },
    {
        icon: Camera,
        title: "Professional Photography",
        description: "400+ quality photos per event, ready for media and social networks.",
        features: ["Event documentation", "Speaker portraits", "Same-day editing"]
    },
    {
        icon: Scissors,
        title: "Social Media Content",
        description: "Reels, recap videos, interviews – 80+ clips optimized for various platforms.",
        features: ["Daily deliveries", "Platform optimized", "Instant engagement"]
    },
];

const caseStudies = [
    {
        title: "App Promotion Summit",
        location: "London",
        attendees: "600–800",
        attendeesLabel: "attendees",
        description: "Tech conference focused on mobile apps and growth marketing.",
        deliverables: [
            "Dynamic recap video with key moments",
            "Interviews with sponsors and attendees",
            "6× editorial \"App Talks\" interviews"
        ],
        result: "Client secured repeat orders and content usable for the entire year ahead.",
        gradient: "from-blue-600/20 to-cyan-600/20"
    },
    {
        title: "Nomad Excel Bootcamps",
        location: "International",
        attendees: "Premium",
        attendeesLabel: "bootcamps",
        description: "Intensive programs for digital nomads and entrepreneurs from around the world.",
        deliverables: [
            "400+ professional photographs",
            "Daily vertical reels for immediate impact",
            "80+ edited clips for various platforms"
        ],
        result: "Significantly increased engagement and conversions for future bootcamps.",
        gradient: "from-purple-600/20 to-pink-600/20"
    },
    {
        title: "British Awards Ceremonies",
        location: "United Kingdom",
        attendees: "100+",
        attendeesLabel: "guests",
        description: "Prestigious ceremonies with live music and celebrity presenters.",
        deliverables: [
            "Polished recap videos capturing emotions",
            "Interviews with nominees and winners",
            "Photo gallery for media distribution"
        ],
        result: "Long-term partnership and visual library for sponsor acquisition.",
        gradient: "from-amber-600/20 to-orange-600/20"
    }
];

const stats = [
    { value: "10+", label: "Countries", sublabel: "across Europe", icon: Globe },
    { value: "400+", label: "Photos", sublabel: "per event", icon: ImageIcon },
    { value: "80+", label: "Clips", sublabel: "per project", icon: Film },
];

export default function PartnerPage() {
    return (
        <div className="flex flex-col gap-16 md:gap-24 pb-16">
            <BreadcrumbSchema items={[
                { name: "Home", url: "https://en.jajsemtomas.cz" },
                { name: "Partner SocialVids", url: "https://en.jajsemtomas.cz/partner-socialvids" }
            ]} />
            {/* Organization Schema for SocialVids partnership */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "SocialVids",
                        "description": "Event videography, live streaming and international video production.",
                        "url": "https://socialvids.io",
                        "areaServed": "Worldwide",
                        "member": {
                            "@type": "Person",
                            "name": "Tomas Berka",
                            "jobTitle": "Partner Filmmaker",
                            "url": "https://en.jajsemtomas.cz"
                        }
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
                            STRATEGIC PARTNERSHIP
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 animate-fade-in-up animation-delay-100">
                            SocialVids <span className="text-primary">×</span> Tomas
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up animation-delay-200 leading-relaxed">
                            For projects that require a <strong>large team</strong>, international reach, or specialized equipment.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up animation-delay-200">
                            Together we transform conferences, festivals, and prestigious events into quality digital content usable all year round.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
                            <Link href="/booking">
                                <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                    📅 Inquire about large production
                                </Button>
                            </Link>
                            <a href="https://socialvids.cz" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12">
                                    SocialVids Web
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 w-full max-w-lg animate-fade-in-up animation-delay-200">
                        <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 p-8 md:p-12 border shadow-2xl flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
                            <Image
                                src="/images/socialvids-logo.png"
                                alt="SocialVids Logo"
                                width={400}
                                height={150}
                                className="w-full h-auto object-contain max-h-[120px] relative z-10"
                            />
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
                            🎬 What we do together
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Complete production for large events
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Combination of fast turnaround and high production value for demanding clients.
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
                            📊 Case studies
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Projects across Europe
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Examples of projects we have delivered together with measurable results.
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
                                            <h4 className="text-sm uppercase tracking-widest font-bold text-muted-foreground mb-3">What we delivered</h4>
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
                            🚀 Have a large project?
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Let&apos;s make it happen together
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Whether it&apos;s a conference for hundreds of people, an international campaign, or a prestigious event – we&apos;re ready to deliver results that exceed your expectations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/booking">
                                <Button size="lg" className="text-base h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                    Book a free consultation
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <a href="mailto:hello@socialvids.cz">
                                <Button variant="outline" size="lg" className="text-base h-12 px-8 border-primary/20 hover:bg-primary/5">
                                    hello@socialvids.cz
                                </Button>
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
