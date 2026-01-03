
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Zap, Globe, MapPin, ExternalLink } from "lucide-react";
import { Metadata } from "next";
import portfolioData from "@/content/portfolio.json";

export const metadata: Metadata = {
    title: "Event Videographer London | Fast Reels & Corporate Video SocialVids",
    description: "Premium event videography and social media reels in London. Fast 24h turnaround for corporate events, parties, and brand activations. Partnered with SocialVids.",
    keywords: ["London Videographer", "Event Video London", "Corporate Reels", "SocialVids", "Videography UK", "Event Highlights London", "Same-day Edit London"],
    alternates: {
        canonical: "https://jajsemtomas.cz/london",
    },
    openGraph: {
        title: "Event Videographer London | Fast Reels & Corporate Video SocialVids",
        description: "Capture your London event's energy with premium, fast-turnaround reels. From Shoreditch to The City.",
        url: "https://jajsemtomas.cz/london",
        locale: "en_GB",
        siteName: "Tomáš | Videographer",
        images: [
            {
                url: "/images/tomas-portrait.jpg",
                width: 1200,
                height: 630,
                alt: "London Event Videographer Tomáš Berka",
            },
        ],
    },
};

export default function LondonPage() {
    // 1. Horizontal Videos: Lego (1), Academy (17) top, then others
    const horizontalIds = ["1", "17", "26", "21", "3", "5", "7", "6", "4", "12"];
    const horizontalVideos = horizontalIds.map(id => portfolioData.find(p => p.id === id)).filter(Boolean);

    // 2. Vertical Videos: User requested "optiky, legonid" + shorts 10, 13
    const requestedVerticalIds = ["shorts_10", "shorts_13"];
    const otherVerticals = portfolioData.filter(p => (p.orientation === "vertical" || p.category === "Reels") && !requestedVerticalIds.includes(p.id)).slice(0, 4);
    const verticalVideos = [
        ...requestedVerticalIds.map(id => portfolioData.find(p => p.id === id)).filter(Boolean),
        ...otherVerticals
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Tomáš Berka - London Event Videographer",
        "image": "https://jajsemtomas.cz/images/tomas-portrait.jpg",
        "description": "Premium event videography and social media reels in London. 24h delivery for corporate and social events.",
        "url": "https://jajsemtomas.cz/london",
        "telephone": "+420777123456", // Placeholder, ideally should be real or omitted if not public
        "priceRange": "££",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "addressCountry": "UK"
        },
        "areaServed": [
            {
                "@type": "Place",
                "name": "London"
            },
            {
                "@type": "Place",
                "name": "Shoreditch"
            },
            {
                "@type": "Place",
                "name": "Soho"
            },
            {
                "@type": "Place",
                "name": "City of London"
            }
        ],
        "sameAs": [
            "https://www.instagram.com/jajsemtomas.cz",
            "https://socialvids.cz"
        ]
    };

    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* Abstract Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/50 z-10" />
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-purple-600/10 blur-[100px] rounded-full" />
                </div>

                <Container className="relative z-10">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-sm font-medium border border-red-500/20 backdrop-blur-sm">
                            <MapPin className="w-4 h-4" />
                            <span>Available in London</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                            Dynamic Event Videography <br />
                            <span className="text-primary">for London Brands</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance">
                            Engaging Reels for your events. From <strong>Shoreditch</strong> creative pop-ups to <strong>Mayfair</strong> luxury launches.
                            In cooperation with <span className="text-foreground font-semibold">SocialVids</span>, we deliver viral-ready content within 24 hours.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Wf1BjdwQdJU84AymHizbMjQdNFMgFHGmSvvD112G3Yv_TuuI5mNYVoeChrHBIw4uZY-w7nt7_" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
                                    Book Fast 15-min Call
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="#portfolio">
                                <Button variant="outline" size="lg" className="h-12 px-8 text-base backdrop-blur-sm bg-background/50">
                                    View Showreel
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Value Props */}
            <section className="py-20 bg-muted/30">
                <Container>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* ... keeping existing value props ... */}
                        <div className="bg-card/50 border border-border/50 rounded-2xl p-8 hover:bg-card/80 transition-colors backdrop-blur-sm">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Instant Impact</h3>
                            <p className="text-muted-foreground">
                                Same-day edits and 24-hour delivery for social media. Capitalize on the buzz while it&apos;s still fresh.
                            </p>
                        </div>

                        <div className="bg-card/50 border border-border/50 rounded-2xl p-8 hover:bg-card/80 transition-colors backdrop-blur-sm">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                <Play className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Vertical First</h3>
                            <p className="text-muted-foreground">
                                Content shot natively for TikTok and Reels (9:16). Optimized for maximum engagement and retention.
                            </p>
                        </div>

                        <div className="bg-card/50 border border-border/50 rounded-2xl p-8 hover:bg-card/80 transition-colors backdrop-blur-sm">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                <Globe className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Global Standard</h3>
                            <p className="text-muted-foreground">
                                Backed by <strong>SocialVids</strong> infrastructure. Reliable, high-end production for international brands.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* SocialVids Partnership & London Experience */}
            <section className="py-24 bg-gradient-to-br from-indigo-950/20 to-purple-950/20 border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-6 text-primary font-medium tracking-wider text-sm uppercase">
                                <Globe className="w-4 h-4" />
                                <span>International Partnership</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                                Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SocialVids</span>
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8 text-pretty">
                                For large-scale <strong>event video production</strong> and campaigns, I partner with <strong>SocialVids</strong>, a premier production house with a proven track record in London and across Europe.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">London Client Experience</h3>
                                        <p className="text-muted-foreground">We understand the fast-paced London market. From Shoreditch tech events to Mayfair luxury launches, we deliver content that fits the vibe.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Scalable Production</h3>
                                        <p className="text-muted-foreground">Need a full crew? Drones? Live streaming? Our partnership allows us to scale up instantly for any event size.</p>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Link href="https://showcase.socialvids.cz/app-promotion-summit-london-2025" target="_blank" rel="noopener noreferrer">
                                        <Button variant="secondary" className="gap-2">
                                            View London Showcase
                                            <ExternalLink className="w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-video rounded-2xl bg-black/40 border border-white/10 backdrop-blur-sm flex items-center justify-center p-12">
                                <Image
                                    src="/images/socialvids-logo.png"
                                    alt="SocialVids Logo"
                                    width={400}
                                    height={225}
                                    className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="py-24 space-y-24">

                {/* Horizontal Reel */}
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Event Video Production</h2>
                            <p className="text-muted-foreground max-w-xl">
                                Cinematic highlights and promo videos.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {horizontalVideos.map((video: typeof portfolioData[number]) => (
                            <div key={video.id} className="group relative rounded-xl overflow-hidden bg-muted aspect-video shadow-sm hover:shadow-md transition-all">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.youtubeId}?controls=1&loading=lazy`}
                                    title={video.title}
                                    className="absolute inset-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        ))}
                    </div>
                </Container>

                {/* Vertical Reel */}
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Social & Reels</h2>
                            <p className="text-muted-foreground max-w-xl">
                                Vertical content designed for mobile.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {verticalVideos.map((video: typeof portfolioData[number]) => (
                            <div key={video.id} className="group relative rounded-xl overflow-hidden bg-muted aspect-[9/16] shadow-sm hover:shadow-md transition-all">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.youtubeId}?controls=0&loading=lazy&loop=1`}
                                    title={video.title}
                                    className="absolute inset-0 w-full h-full pointer-events-none group-hover:pointer-events-auto"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                {/* Overlay for title if needed, or remove pointer-events-none if controls desired */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-0 transition-opacity pointer-events-none" />
                            </div>
                        ))}
                    </div>
                </Container>

            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary/5 border-t border-primary/10">
                <Container>
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to capture your London event?</h2>
                        <p className="text-xl text-muted-foreground">
                            Let&apos;s handle everything on a quick call. No lengthy emails, just results.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Wf1BjdwQdJU84AymHizbMjQdNFMgFHGmSvvD112G3Yv_TuuI5mNYVoeChrHBIw4uZY-w7nt7_" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="px-10 h-14 text-lg">Book Fast 15-min Call</Button>
                            </Link>
                            <a href="mailto:info@jajsemtomas.cz">
                                <Button variant="outline" size="lg" className="px-10 h-14 text-lg">Email Us</Button>
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
