import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clapperboard, Heart } from "lucide-react";
import { VideoPlayer } from "@/components/ui/video-player"; // Reuse video player component
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata: Metadata = {
    title: "About Me | Filmmaker London | Video Partner for CEOs & Brands",
    description: "👋 More than just a cameraman. 500+ projects, 7+ years experience. Strategic partner for video marketing in London & worldwide. Reels, events, campaigns.",
    keywords: ["filmmaker london", "video producer uk", "content creator london", "corporate videographer london"],
    alternates: {
        canonical: "https://en.jajsemtomas.cz/about",
        languages: {
            "cs": "https://jajsemtomas.cz/o-mne"
        }
    },
    openGraph: {
        url: "https://en.jajsemtomas.cz/about",
        title: "About Me | Filmmaker London | Video Partner for CEOs & Brands",
        description: "👋 More than just a cameraman. Strategic partner for corporate video and growth.",
    },
};

export default function AboutPage() {
    return (
        <div className="pb-20">
            <BreadcrumbSchema items={[
                { name: "Home", url: "https://en.jajsemtomas.cz" },
                { name: "About", url: "https://en.jajsemtomas.cz/about" }
            ]} />
            {/* Person Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Tomas Berka",
                        "jobTitle": "Video Producer & Filmmaker",
                        "description": "Professional video producer and filmmaker with 10+ years experience. Specializing in Reels, TikTok, event video and post-production.",
                        "url": "https://en.jajsemtomas.cz/about",
                        "image": "https://en.jajsemtomas.cz/images/tomas-hero.jpg",
                        "email": "msg@jajsemtomas.cz",
                        "telephone": "+420735846329",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "London",
                            "addressCountry": "UK"
                        },
                        "sameAs": [
                            "https://www.linkedin.com/in/berkatomas",
                            "https://www.instagram.com/jajsemtomas.cz/",
                            "https://www.facebook.com/tomasberkaofficial/"
                        ],
                        "worksFor": {
                            "@type": "Organization",
                            "name": "I am Tomas - Video Production"
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
                            👋 Your Business Partner
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                            You're not looking for a "cameraman".<br />
                            <span className="text-primary">You're looking for results.</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">
                            Most creators only care about how the video looks. I care about <strong>how much it sells</strong>. I am your strategic partner who understands business, marketing, and sales psychology.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 justify-center md:justify-start mt-8">
                            <div className="text-center md:text-left">
                                <p className="text-3xl md:text-4xl font-bold text-primary">500+</p>
                                <p className="text-sm text-zinc-400">projects</p>
                            </div>
                            <div className="text-center md:text-left">
                                <p className="text-3xl md:text-4xl font-bold text-primary">7+</p>
                                <p className="text-sm text-zinc-400">years of experience</p>
                            </div>
                            <div className="text-center md:text-left">
                                <p className="text-3xl md:text-4xl font-bold text-primary">50+</p>
                                <p className="text-sm text-zinc-400">satisfied clients</p>
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
                            Connect on LinkedIn
                        </a>
                    </div>
                    <div className="flex-1 w-full max-w-lg">
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                            <img
                                src="/images/tomas-hero.jpg"
                                alt="Tomas"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* VSL Section - "Who am I" - Keeping same video ID for now? Or hiding if Czech only? 
                 Let's keep it but maybe add english caption if possible, or hide if it's strictly Czech speaking.
                 User said "mirror", so keeping it but assuming English context. 
                 If the video is Czech, user might want to replace it later. */}
            <section className="py-20 -mt-10 relative z-20">
                <Container>
                    <div className="bg-card border rounded-2xl p-6 md:p-12 shadow-xl max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-8">Who am I in 60 seconds?</h2>
                        <div className="aspect-[9/16] max-w-sm mx-auto rounded-xl overflow-hidden bg-black border relative shadow-2xl">
                            <VideoPlayer videoId="o0Vw3UNIKaQ" className="h-full w-full" />
                        </div>
                    </div>
                </Container>
            </section>

            {/* My Story */}
            <section className="py-20">
                <Container className="max-w-3xl">
                    <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">From script to final cut</h2>
                        <p>
                            My path to video wasn't direct. I started as an <strong className="text-foreground">actor</strong>. I stood where you might soon stand – in front of the lens, nervous if it will "look good".
                        </p>
                        <p>
                            Thanks to this experience, I have a unique feel for <strong className="text-foreground">directing people</strong>. I won't just silently point a camera at you. I will help you with intonation, posture, and text. I direct you so you appear natural and confident.
                        </p>
                        <h3 className="text-2xl font-bold text-foreground mt-8">Why do I do it differently?</h3>
                        <p>
                            It frustrated me how boring many corporate videos are. Beautifully shot, but soulless. No story. No result.
                            I decided to change that. I combined my knowledge of <strong className="text-foreground">marketing</strong>, <strong className="text-foreground">acting</strong>, and <strong className="text-foreground">technical production</strong> into one package.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mt-12 mb-16">
                        <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                            <Clapperboard className="w-8 h-8 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">Technical Perfectionist</h3>
                            <p className="text-sm text-muted-foreground">I love technology. I shoot on top-notch equipment, play with lights and sound until it's perfect.</p>
                        </div>
                        <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                            <Heart className="w-8 h-8 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">Human Approach</h3>
                            <p className="text-sm text-muted-foreground">No ego. We are partners. The shoot is always relaxed and fun. I leave stress at home.</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Values / Why Me */}
            <section className="py-20 bg-muted/30 border-y">
                <Container>
                    <h2 className="text-3xl font-bold text-center mb-12">My promise to you</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center px-4">
                            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border">
                                <span className="text-2xl font-bold">01</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Honesty</h3>
                            <p className="text-muted-foreground">
                                If I think your idea won't work, I'll tell you. I don't want your money for a video that brings nothing.
                            </p>
                        </div>
                        <div className="text-center px-4">
                            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border">
                                <span className="text-2xl font-bold">02</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Speed</h3>
                            <p className="text-muted-foreground">
                                Content is king, but speed is queen. Deadlines are sacred to me.
                            </p>
                        </div>
                        <div className="text-center px-4">
                            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border">
                                <span className="text-2xl font-bold">03</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Quality</h3>
                            <p className="text-muted-foreground">
                                I won't release anything I'd be ashamed of. Every video is my business card.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Photo Gallery */}
            <section className="py-20 bg-zinc-950 text-white overflow-hidden">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Life in Frame</h2>
                        <p className="text-zinc-400">When I'm not behind the camera, I enjoy the moments that are worth capturing.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 group">
                            <img
                                src="/images/tomas-gallery-1.jpg"
                                alt="Tomas moment 1"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 md:mt-12 group">
                            <img
                                src="/images/tomas-gallery-2.jpg"
                                alt="Tomas moment 2"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 group">
                            <img
                                src="/images/tomas-gallery-3.jpg"
                                alt="Tomas moment 3"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
                <Container className="max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's connect</h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        I'd love to hear your story. Let's grab a coffee or jump on a call.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact">
                            <Button size="lg" className="px-8">
                                Send a message
                            </Button>
                        </Link>
                        <Link href="/portfolio">
                            <Button variant="outline" size="lg">
                                See any work
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </div>
    );
}
