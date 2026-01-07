import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, Mic } from "lucide-react";
import portfolioData from "@/content/portfolio-en.json";
import faqData from "@/content/faq-en.json";
import { VideoCard } from "@/components/portfolio/video-card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "UGC Creator & Actor London | TikTok & Instagram Ads | I am Tomas",
    description: "🎭 Professional UGC videos for TikTok, Instagram and Facebook Ads. Experienced actor creating authentic content that converts. London & worldwide.",
    keywords: ["ugc creator london", "ugc actor uk", "tiktok ads video", "instagram ads actor", "authentic videos uk"],
    alternates: {
        canonical: "https://en.jajsemtomas.cz/ugc-creator",
        languages: {
            "cs": "https://jajsemtomas.cz/ugc-herec"
        }
    },
};

export default function UgcActorPage() {
    const ugcFaq = faqData["ugc"];

    return (
        <div className="pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "UGC Video Production",
                        "provider": {
                            "@type": "Person",
                            "name": "Tomas",
                            "jobTitle": "Actor & UGC Creator"
                        },
                        "description": "Professional UGC video creation for social media.",
                        "offers": {
                            "@type": "Offer",
                            "availability": "https://schema.org/InStock"
                        },
                        "mainEntity": ugcFaq.map(item => ({
                            "@type": "Question",
                            "name": item.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.answer
                            }
                        }))
                    })
                }}
            />
            {/* Hero Section */}
            <section className="relative pt-8 pb-20 md:pt-16 md:pb-32 overflow-hidden bg-black text-white">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="/images/ugc-hero.jpg"
                        alt="UGC Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <Container className="relative z-10 flex flex-col items-center text-center gap-8">
                    <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/10 text-primary mb-4">
                        🚀 Performance Marketing & Brand Awareness
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter max-w-5xl mb-4">
                        UGC videos that <span className="text-primary">sell</span>.<br />
                        No amateurism.
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
                        Most UGC creators "just film". I create advertising.
                        As a professional actor, I know how to <strong>hold attention</strong>, deliver emotion, and convince the viewer to take action.
                        Increase your ROI with content that has a strategy.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link href="/contact">
                            <Button size="lg" className="font-bold text-base h-12 px-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                📅 Book a 15 min Call
                            </Button>
                        </Link>
                        <Link href="#process">
                            <Button variant="outline" size="lg" className="text-base h-12">
                                How does it work?
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Why Me - Business Logic */}
            <section className="py-20 bg-muted/30">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why risk with amateurs,<br />when you can have a pro?</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                Marketing managers often struggle with the unreliability of influencers.
                                With me, it's different. I approach UGC like a commission for television – <strong>professionally, on time, and according to specifications.</strong>
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                                        <Check className="h-3 w-3" />
                                    </div>
                                    <div>
                                        <span className="font-bold block">Acting Performance</span>
                                        <span className="text-muted-foreground text-sm">I can play the "enthusiastic customer" or the "serious expert". Believably.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                                        <Check className="h-3 w-3" />
                                    </div>
                                    <div>
                                        <span className="font-bold block">Technical Quality</span>
                                        <span className="text-muted-foreground text-sm">I film on iPhone 15 Pro or Cinema camera. Your brand won't look cheap.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                                        <Check className="h-3 w-3" />
                                    </div>
                                    <div>
                                        <span className="font-bold block">Hook & Retention</span>
                                        <span className="text-muted-foreground text-sm">I know how to stop scrolling in the first 3 seconds.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative aspect-[4/5] md:aspect-square bg-muted rounded-2xl overflow-hidden border">
                            <img
                                src="/images/ugc-ricehook.jpg"
                                alt="Tomas - Professional UGC creator"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Process Section */}
            <section id="process" className="py-20">
                <Container>
                    <h2 className="text-3xl font-bold mb-12 text-center">How does the collaboration work?</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Briefing & Strategy", desc: "Send me a brief or we'll brainstorm a concept that sells together." },
                            { step: "02", title: "Script & Hook", desc: "I'll prepare a script focused on holding attention (retention)." },
                            { step: "03", title: "Production", desc: "I film and edit the video including subtitles and voiceover." },
                            { step: "04", title: "Delivery", desc: "You get the finished video ready for Ads Manager." }
                        ].map((item, i) => (
                            <div key={i} className="relative p-6 border rounded-xl bg-card hover:shadow-lg transition-all">
                                <span className="text-6xl font-black text-muted/20 absolute -top-4 -right-2">{item.step}</span>
                                <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>
                                <p className="text-muted-foreground relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Acting Portfolio Section */}
            <section id="showreel" className="py-20 bg-black text-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Acting Samples</h2>
                        <p className="text-zinc-400 text-lg">
                            Authenticity, emotion, and the ability to sell an idea.
                            <br />
                            Samples from commercials, films, and social media.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {portfolioData.filter(p => p.category === "Acting").map((video) => (
                            <VideoCard key={video.id} video={video} locale="en" />
                        ))}
                    </div>
                </Container>
            </section>

            {/* Formats */}
            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-bold mb-12 text-center">Formats I create</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border rounded-xl bg-muted/5">
                            <h3 className="text-xl font-bold mb-2">📦 Unboxing & Testimonials</h3>
                            <p className="text-muted-foreground">Authentic unpacking and reactions. Social proof that builds trust.</p>
                        </div>
                        <div className="p-6 border rounded-xl bg-muted/5">
                            <h3 className="text-xl font-bold mb-2">🎭 Sketches & Humor</h3>
                            <p className="text-muted-foreground">Entertaining videos that share themselves. Ideal for brand awareness.</p>
                        </div>
                        <div className="p-6 border rounded-xl bg-muted/5">
                            <h3 className="text-xl font-bold mb-2">💡 Problem/Solution</h3>
                            <p className="text-muted-foreground">Showing a problem and solving it with your product. Best for conversions.</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-muted/30">
                <Container className="max-w-3xl">
                    <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions (FAQ)</h2>
                    <div className="space-y-6">
                        {ugcFaq.map((faq, i) => (
                            <div key={i} className="bg-card p-6 rounded-xl border">
                                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                                <p className="text-muted-foreground">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Voiceover CTA */}
            <section className="py-20 border-t border-b overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-left scale-110"></div>
                <Container className="relative">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-card/80 backdrop-blur p-8 rounded-2xl border shadow-sm">
                        <div className="space-y-4 max-w-xl">
                            <h2 className="text-3xl font-bold tracking-tighter">Looking for a professional voice too?</h2>
                            <p className="text-muted-foreground text-lg">
                                In addition to a face, I can also lend my voice to your brand. Ideal for spots, ads, or e-learning.
                                Professional studio and fast delivery.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <Link href="/services/voiceover">
                                <Button size="lg" variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-white">
                                    <Mic className="w-4 h-4" />
                                    Play voice samples
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="py-20 text-center">
                <Container className="max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to dominate social media?</h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        Don't leave your brand to chance. Work with a professional who delivers results.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="text-xl px-12 py-8 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                            Interested in UGC
                        </Button>
                    </Link>
                </Container>
            </section>
        </div>
    );
}
