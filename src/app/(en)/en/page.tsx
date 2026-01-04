import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Testimonials } from "@/components/sections/testimonials";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clapperboard, Smartphone, Calendar, Radio, MonitorPlay } from "lucide-react";
import servicesData from "@/content/services-en.json";
import { Metadata } from "next";

// Map icon strings to components
const icons = {
    Smartphone,
    Clapperboard,
    Calendar,
    Radio,
    MonitorPlay,
};

export const metadata: Metadata = {
    title: "Video Production London | Commercials, Reels & Content | I am Tomas",
    description: "Comprehensive video production for businesses. We create commercial spots, social media Reels, and corporate videos that sell. Boost your sales with video.",
    alternates: {
        canonical: "https://en.jajsemtomas.cz",
    },
    openGraph: {
        title: "Video Production London | Commercials, Reels & Content | I am Tomas",
        description: "Comprehensive video production for businesses. We create commercial spots, social media Reels, and corporate videos that sell.",
        url: "https://en.jajsemtomas.cz",
        locale: "en_GB",
        siteName: "I am Tomas",
        images: [
            {
                url: "/images/tomas-hero.jpg",
                width: 1200,
                height: 630,
                alt: "I am Tomas - Filmmaker & Content Creator",
            },
        ],
    },
};

export default function Home() {
    return (
        <div className="flex flex-col gap-16 md:gap-24 pb-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "I am Tomas - Video Production",
                        "image": "https://jajsemtomas.cz/images/tomas-hero.jpg",
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
                        ]
                    })
                }}
            />

            {/* Hero Section */}
            <section className="relative pt-8 pb-20 md:pt-16 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-background -z-10" />
                <Container className="flex flex-col items-center text-center gap-8">
                    <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 mb-8">
                        🚀 Video production that delivers results
                    </div>
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter max-w-5xl mb-6 animate-fade-in-up">
                        Video production that <br className="hidden md:block" />
                        builds brands and <span className="text-primary">sells.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-8 animate-fade-in-up animation-delay-100">
                        As your <strong>Strategic Partner</strong>, I don't just make videos. I build <strong>strong brands</strong> through content that engages your audience and gives your business a clear path forward.<br />
                        <strong>Premium Visuals. Powerful Stories. Real Impact.</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4 animate-fade-in-up animation-delay-200">
                        <Link href="/contact">
                            <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                📅 Book a 15 min Call
                            </Button>
                        </Link>
                        <Link href="/reels-packages">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12">
                                Pricing & Packages
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Quiz CTA Section */}
            <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-background border-t">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors border-primary/20 bg-primary/10 text-primary mb-6">
                            🎮 Interactive Test
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
                                <Button size="lg" className="text-base h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                    🎯 Start Quiz
                                </Button>
                            </Link>
                            <p className="text-sm text-muted-foreground">
                                ✓ 5 Scenarios ✓ Instant Feedback ✓ No Email Required
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Trust Section - Why Us */}
            <section className="border-y bg-muted/20 py-12">
                <Container>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">⏱ Lightning Fast</h3>
                            <p className="text-muted-foreground">First previews often within 3 days. Speed matters on social media.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">💡 Strategy & Experience</h3>
                            <p className="text-muted-foreground">I'm not just a cameraman, I'm your <strong>creative guide</strong>. Every shot is crafted to deliver both brand value and a premium feel.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">🎯 7+ Years Experience</h3>
                            <p className="text-muted-foreground">Hundreds of projects as a <strong>content creator</strong> for companies and personal brands. I know what works.</p>
                        </div>
                    </div>

                    {/* Client Logos/Brands */}
                    <div className="mt-12 pt-8 border-t">
                        <p className="text-center text-sm text-muted-foreground mb-6">Trusted by</p>
                        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
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

            {/* Services Grid */}
            <section>
                <Container>
                    <div className="flex flex-col gap-4 mb-12 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What do I shoot?</h2>
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

            {/* Value Proposition / CTA */}
            <section className="py-20">
                <Container className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">One shooting day,<br /> a month of content.</h2>
                        <p className="text-lg text-muted-foreground">
                            My "Reels Package" is designed for maximum efficiency. We get the most out of one shoot – short videos, photos, stories. I save your time while your social media grows.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center font-medium"><span className="text-primary mr-2">✓</span> 4 to 8 videos from one day</li>
                            <li className="flex items-center font-medium"><span className="text-primary mr-2">✓</span> Scripts written for you</li>
                            <li className="flex items-center font-medium"><span className="text-primary mr-2">✓</span> Ready-to-post content delivered</li>
                        </ul>
                        <Link href="/reels-packages">
                            <Button size="lg" className="mt-4">Learn more about packages</Button>
                        </Link>
                    </div>
                    <div className="relative aspect-video rounded-xl bg-muted overflow-hidden border shadow-2xl">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        >
                            <source src="/videos/packages.mp4" type="video/mp4" />
                            Your browser does not support video.
                        </video>
                        {/* Overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
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
