import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clapperboard, Heart } from "lucide-react";
import { VideoPlayer } from "@/components/ui/video-player"; // Reuse video player component
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me - Tomas | Video Producer & Filmmaker London",
    description: "Actor, director and video producer. I specialize in creating Reels, TikTok videos and commercials. I will help you with camera presence and content strategy.",
    alternates: {
        canonical: "https://en.jajsemtomas.cz/about",
    },
    openGraph: {
        url: "https://en.jajsemtomas.cz/about",
        title: "About Me - Tomas | Video Producer & Filmmaker London",
        description: "Actor, director and video producer. I specialize in creating Reels, TikTok videos and commercials.",
    },
};

export default function AboutPage() {
    return (
        <div className="pb-20">
            {/* Hero Section */}
            <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-zinc-950 text-white">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-zinc-950"></div>
                </div>
                <Container className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium border-white/20 bg-white/5 text-white mb-4">
                            👋 Meet the Creator
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                            I'm not just a "cameraman".<br />
                            <span className="text-primary">I am your creative partner.</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">
                            Most people in the industry know how to press REC. I know what needs to happen <strong>before</strong> and <strong>after</strong> for people to actually care about the video.
                        </p>
                    </div>
                    <div className="flex-1 w-full max-w-lg">
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                            <img
                                src="/images/tomas-portrait.jpg"
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

            {/* CTA */}
            <section className="py-20 text-center">
                <Container className="max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's connect</h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        I'd love to hear your story. Let's grab a coffee or jump on a call.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/en/contact">
                            <Button size="lg" className="px-8">
                                Send a message
                            </Button>
                        </Link>
                        <Link href="/en/portfolio">
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
