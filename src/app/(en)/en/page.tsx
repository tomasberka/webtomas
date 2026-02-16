import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Testimonials } from "@/components/sections/testimonials";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clapperboard, Smartphone, Calendar, Radio, MonitorPlay, MessageCircle, Sparkles, Timer, Globe, User, Mic } from "lucide-react";
import servicesData from "@/content/services-en.json";
import testimonialsData from "@/content/testimonials-en.json";
import { Metadata } from "next";

// Map icon strings to components
const icons = {
    Smartphone,
    Clapperboard,
    Calendar,
    Radio,
    MonitorPlay,
    Globe,
    User,
    Mic,
};

export const metadata: Metadata = {
    title: "International Event Videographer | Berlin, London, Prague & Europe | Tomas Berka",
    description: "Bilingual event videographer & moderator covering B2B conferences across Europe. Berlin, London, Prague. All travel included. Book your international event coverage today.",
    keywords: ["event videographer berlin", "event video london", "international event videographer", "conference video production europe", "bilingual event videographer", "event moderator", "corporate event filming"],
    alternates: {
        canonical: "https://en.jajsemtomas.cz",
        languages: {
            "cs": "https://jajsemtomas.cz"
        }
    },
    openGraph: {
        title: "International Event Video | Berlin, London, Prague & Europe",
        description: "Bilingual (EN/CZ) event videographer & moderator for B2B conferences across Europe. All travel included. Same quality everywhere.",
        url: "https://en.jajsemtomas.cz",
        locale: "en_GB",
        siteName: "I am Tomas - International Event Video",
        images: [
            {
                url: "https://en.jajsemtomas.cz/images/og-image-en-new.png",
                width: 1200,
                height: 630,
                alt: "International Event Video Production - Berlin, London, Prague",
            },
        ],
    },
};

export default function Home() {
    return (
        <div className="flex flex-col gap-16 md:gap-24 pb-16">
            {/* VideoObject Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "VideoObject",
                        "name": "High-Retention Video Production - Stop the Scroll",
                        "description": "Premium short-form video production. 3-8 Reels from one shooting day. From strategy to cinematic execution.",
                        "thumbnailUrl": "https://en.jajsemtomas.cz/images/og-image-en-new.png",
                        "uploadDate": "2025-01-01",
                        "duration": "PT30S"
                    })
                }}
            />
            {/* ProfessionalService Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfessionalService",
                        "name": "I am Tomas - Video Production",
                        "image": "https://en.jajsemtomas.cz/images/og-image-en-new.png",
                        "description": "Premium short-form video production specializing in Reels, TikTok, and YouTube Shorts. High-retention content that converts.",
                        "priceRange": "££",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "London",
                            "addressCountry": "UK"
                        },
                        "url": "https://en.jajsemtomas.cz",
                        "telephone": "+420735846329",
                        "email": "msg@jajsemtomas.cz",
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                            "opens": "09:00",
                            "closes": "18:00"
                        },
                        "areaServed": ["London", "United Kingdom", "Europe"]
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "I am Tomas - Video Production",
                        "image": "https://en.jajsemtomas.cz/images/og-image-en-new.png",
                        "description": "Professional video production specializing in Reels, TikTok, and commercial content for social media.",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "London",
                            "addressCountry": "UK"
                        },
                        "url": "https://en.jajsemtomas.cz",
                        "priceRange": "££",
                        "telephone": "+420735846329",
                        "areaServed": [
                            {
                                "@type": "City",
                                "name": "London"
                            },
                            {
                                "@type": "Country",
                                "name": "United Kingdom"
                            }
                        ],
                        "sameAs": [
                            "https://www.instagram.com/jajsemtomas.cz/",
                            "https://www.facebook.com/tomasberkaofficial/",
                            "https://www.linkedin.com/in/berkatomas"
                        ],
                        "review": testimonialsData
                            .filter(t => t.quote && t.quote.length > 0)
                            .map(t => ({
                                "@type": "Review",
                                "reviewRating": {
                                    "@type": "Rating",
                                    "ratingValue": t.rating || 5
                                },
                                "author": {
                                    "@type": "Person",
                                    "name": t.name
                                },
                                "reviewBody": t.quote
                            }))
                    })
                }}
            />



            {/* Hero Section */}
            <header>
                <section aria-labelledby="hero-heading" className="relative pt-4 pb-12 md:pt-12 md:pb-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-background -z-10" />
                    <Container className="flex flex-col items-center text-center gap-8">
                    <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 mb-4 md:mb-8">
                        Berlin | London | Prague | Across Europe
                    </div>
                    <h1 id="hero-heading" className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter max-w-5xl mb-6 animate-fade-in-up">
                        International Event Video.<br className="hidden md:block" />
                        <span className="text-primary">Moderation. Production.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-8 animate-fade-in-up animation-delay-100">
                        I&apos;m <strong>Tomas</strong> &mdash; bilingual (EN/CZ) event videographer &amp; moderator covering B2B events across Europe.<br />
                        One videographer for all your conferences. <strong>Same quality everywhere. All travel included.</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4 animate-fade-in-up animation-delay-200">
                        <Link href="/services/international-event-video">
                            <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                Book International Event
                            </Button>
                        </Link>
                        <Link href="/services/event-moderator">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12">
                                Event Moderator Services
                            </Button>
                        </Link>
                    </div>
                </Container>
                </section>
            </header>

            {/* Trust Stats Bar */}
            <section className="border-y bg-muted/40 py-8 md:py-12">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center">
                        <div className="space-y-1">
                            <div className="text-3xl md:text-4xl font-bold text-foreground">150+</div>
                            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Events Filmed</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-3xl md:text-4xl font-bold text-foreground">5+</div>
                            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Countries Covered</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-3xl md:text-4xl font-bold text-foreground">Bilingual</div>
                            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">EN / CZ / DE basics</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-3xl md:text-4xl font-bold text-foreground">48h</div>
                            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Express Delivery</div>
                        </div>
                    </div>

                    {/* Client Logos */}
                    <div className="mt-12 pt-8 border-t border-border/50">
                        <p className="text-center text-sm text-muted-foreground mb-6">Trusted by</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                            <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                                <img src="/images/clients/wikyhracky.png" alt="WikyHracky.cz" className="h-12 w-auto" />
                            </div>
                            <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                                <img src="/images/clients/dekra.png" alt="Dekra" className="h-10 w-auto" />
                            </div>
                            <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                                <img src="/images/clients/oict.png" alt="OICT" className="h-10 w-auto" />
                            </div>
                            <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                                <img src="/images/clients/roklen.png" alt="Roklen24" className="h-8 w-auto" />
                            </div>
                            <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                                <img src="/images/clients/tatra.png" alt="Tatra" className="h-12 w-auto" />
                            </div>
                            <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                                <img src="/images/clients/slavia.png" alt="FC Slavia Hradec Králové" className="h-12 w-auto" />
                            </div>
                            <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                                <img src="/images/clients/legonid.png" alt="Legonid - LEGO Serious Play" className="h-12 w-auto" />
                            </div>
                            <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                                <img src="/images/clients/easyoptic.jpg" alt="Easy Optic" className="h-12 w-auto" />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Limited Offer Promo */}
            <section className="py-12 md:py-16 relative overflow-hidden">
                {/* Gradients */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-red-500/10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />

                <Container className="relative">
                    <div className="bg-card border-2 border-amber-500/20 rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-2xl shadow-orange-500/10">
                        {/* Background elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
                            <div className="space-y-6 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-sm font-bold text-amber-600 dark:text-amber-400 animate-pulse">
                                    <Sparkles className="w-4 h-4" />
                                    <span>NEW OFFER – Only 3 spots</span>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                                    3 Reels + 15 Photos
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 mt-2">
                                        for £1,000
                                    </span>
                                </h2>

                                <p className="text-xl text-muted-foreground">
                                    Get a complete month of content with a significant discount.
                                    I need new case studies, you save £500.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                    <Link href="/promo-3-reels">
                                        <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/20 hover:scale-105 transition-all">
                                            I want a spot
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    </Link>
                                    <div className="flex items-center justify-center gap-2 text-sm font-bold text-muted-foreground bg-muted/50 px-4 py-2 rounded-lg">
                                        <Timer className="w-4 h-4 text-orange-500" />
                                        3 spots left
                                    </div>
                                </div>
                            </div>

                            {/* Visual side */}
                            <div className="relative hidden md:block">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-4 translate-y-8">
                                        <div className="aspect-[9/16] bg-primary/5 rounded-2xl border border-primary/10 p-2 transform -rotate-6 transition-transform hover:rotate-0">
                                            <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl relative overflow-hidden">
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <Clapperboard className="w-12 h-12 text-white/20" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="aspect-square bg-amber-500/10 rounded-2xl border border-amber-500/20 p-2 transform rotate-6 transition-transform hover:rotate-0">
                                            <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-50 rounded-xl relative overflow-hidden flex items-center justify-center">
                                                <span className="text-4xl font-black text-amber-500">15×</span>
                                            </div>
                                        </div>
                                        <div className="aspect-square bg-green-500/10 rounded-2xl border border-green-500/20 p-6 flex flex-col items-center justify-center text-center transform rotate-3 transition-transform hover:rotate-0">
                                            <div className="text-sm font-medium text-green-600 mb-1">Save</div>
                                            <div className="text-3xl font-black text-green-600">£500</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Value Proposition / CTA - Moved Up */}
            <section className="py-16 md:py-24">
                <Container className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 order-2 md:order-1">
                        <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium border-primary/20 bg-primary/10 text-primary">
                            🔥 Hybrid Model: Remote Editing + Physical Production
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Beyond cheap editors.<br />Premium results.</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Unlike cheap overseas editors, our premium packages include <strong>physical production in Prague</strong>. Perfect for clients who need professional "Talking Head" videos but lack equipment.<br /><br />
                            <strong>The best of both worlds:</strong> Remote post-production flexibility + European-quality filming when you need it.
                        </p>
                        <ul className="space-y-3 pt-2">
                            <li className="flex items-center font-medium text-lg"><span className="text-primary mr-3 bg-primary/10 p-1 rounded-full"><Smartphone className="w-5 h-5" /></span> High-retention video editing</li>
                            <li className="flex items-center font-medium text-lg"><span className="text-primary mr-3 bg-primary/10 p-1 rounded-full"><Clapperboard className="w-5 h-5" /></span> Script strategy & hook optimization</li>
                            <li className="flex items-center font-medium text-lg"><span className="text-primary mr-3 bg-primary/10 p-1 rounded-full"><MonitorPlay className="w-5 h-5" /></span> Optional shooting days in Prague</li>
                        </ul>
                        <div className="pt-4">
                            <Link href="/reels-packages">
                                <Button size="lg" className="px-8 h-12 text-base font-bold">🎬 Get Video That Converts</Button>
                            </Link>
                        </div>
                    </div>
                    <article className="relative aspect-video max-w-full mx-auto rounded-2xl bg-muted overflow-hidden border shadow-2xl order-1 md:order-2">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            poster="/images/og-image-en-new.png"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        >
                            <source src="/videos/packages.mp4" type="video/mp4" />
                            Your browser does not support video.
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        <div className="absolute bottom-6 left-6 right-6 text-white p-4 glass-panel rounded-xl border border-white/10 backdrop-blur-sm">
                            <div className="font-bold text-lg mb-1">Growth Package</div>
                            <div className="text-sm opacity-90">Designed for high retention & conversions.</div>
                        </div>
                    </article>
                </Container>
            </section>

            {/* Services Grid */}
            <section aria-labelledby="services-heading">
                <Container>
                    <div className="flex flex-col gap-4 mb-12 text-center md:text-left">
                        <h2 id="services-heading" className="text-3xl md:text-4xl font-bold tracking-tight">What do I shoot?</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl">Solutions for e-shops, corporations, and personal brands.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {servicesData.map((service) => {
                            const Icon = icons[service.icon as keyof typeof icons] || Clapperboard;
                            return (
                                <Link href={`/${service.slug}`} key={service.id} className="group animate-fade-in-up">
                                    <Card className="h-full transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
                                        <CardHeader>
                                            <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 w-fit">
                                                <Icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <CardTitle className="group-hover:text-primary transition-colors">{service.title}</CardTitle>
                                            <CardDescription className="text-base pt-2">
                                                {service.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                                                {service.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center">
                                                        <span className="mr-2 h-1 w-1 rounded-full bg-primary" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </Link>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* Quiz CTA Section (Moved down) */}
            <section className="py-16 bg-muted/20 border-y">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors border-primary/20 bg-primary/10 text-primary mb-6">
                            🎮 Interactive Quiz
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Are you making these Reels mistakes?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Find out in 2 minutes if your Reels have a chance of success.
                            Interactive quiz with instant feedback.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                            <Link href="/reels-quiz">
                                <Button size="lg" variant="outline" className="text-base h-12 px-8 font-bold hover:shadow-lg transition-all hover:-translate-y-1">
                                    🎯 Start Quiz
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Testimonials Section */}
            <Testimonials locale="en" />

            {/* SocialVids Trust Indicator */}
            <section className="text-center py-12">
                <Container>
                    <div className="bg-gradient-to-r from-blue-900/10 to-purple-900/10 border rounded-2xl p-8 md:p-12">
                        <p className="font-semibold text-primary mb-2">PARTNERSHIP</p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Large productions? No problem.</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                            For demanding TV commercials, international spots, and large-scale events, I utilize the facilities and team of my partner **SocialVids**.
                            You get the quality of a big agency with my personal approach.
                        </p>
                        <div className="mb-8 flex justify-center">
                            <Image
                                src="/images/socialvids-logo.png"
                                alt="SocialVids Logo"
                                width={200}
                                height={60}
                                className="h-12 w-auto object-contain opacity-80"
                            />
                        </div>
                        <Link href="/partner-socialvids">
                            <Button variant="outline" className="border-primary/20 hover:bg-primary/5">Learn more about partnership</Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </div>
    );
}
