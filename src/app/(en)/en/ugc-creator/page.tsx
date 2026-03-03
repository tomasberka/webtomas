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

            {/* UGC Portfolio Section */}
            <section id="showreel" className="py-20 bg-black text-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">UGC & Acting Samples</h2>
                        <p className="text-zinc-400 text-lg">
                            Authenticity, emotion, and the ability to sell an idea.
                            <br />
                            Samples from UGC campaigns, commercials, and social media.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {portfolioData.filter(p => p.category === "UGC").map((video) => (
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

            {/* Pricing Section */}
            <section className="py-20">
                <Container>
                    <div className="text-center mb-12">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Pricing</p>
                        <h2 className="text-3xl md:text-4xl font-bold">Transparent pricing, no surprises</h2>
                        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Prices depend on the number of videos, length, and complexity. Below are starting prices.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-8 border rounded-2xl bg-card space-y-4 hover:shadow-lg transition-all">
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Starter</p>
                            <div>
                                <span className="text-4xl font-black">€320</span>
                                <span className="text-muted-foreground ml-2">/ video</span>
                            </div>
                            <p className="text-muted-foreground text-sm">1 UGC video up to 60 seconds. Full production including script.</p>
                            <ul className="space-y-2 text-sm">
                                {["1 version + 1 revision", "Delivery within 5 days", "Your branding elements", "Captions included"].map(f => (
                                    <li key={f} className="flex items-center gap-2 text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />{f}</li>
                                ))}
                            </ul>
                            <Link href="/en/contact">
                                <Button className="w-full mt-2" variant="outline">Order</Button>
                            </Link>
                        </div>
                        <div className="p-8 border-2 border-primary rounded-2xl bg-card space-y-4 hover:shadow-xl transition-all relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-primary text-black text-xs font-black px-3 py-1 rounded-bl-xl">MOST POPULAR</div>
                            <p className="text-xs font-bold uppercase tracking-widest text-primary">Brand Pack</p>
                            <div>
                                <span className="text-4xl font-black">€880</span>
                                <span className="text-muted-foreground ml-2">/ 3 videos</span>
                            </div>
                            <p className="text-muted-foreground text-sm">3 UGC videos with different hooks or formats — A/B test ready. Save €80.</p>
                            <ul className="space-y-2 text-sm">
                                {["3 videos = 3× content at a fraction of the price", "Each video a different hook/format", "2 revisions per video", "Delivery within 7 days", "Captions + subtitles"].map(f => (
                                    <li key={f} className="flex items-center gap-2 text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />{f}</li>
                                ))}
                            </ul>
                            <Link href="/en/contact">
                                <Button className="w-full mt-2 font-bold">Get Brand Pack</Button>
                            </Link>
                        </div>
                        <div className="p-8 border rounded-2xl bg-card space-y-4 hover:shadow-lg transition-all">
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Monthly Partnership</p>
                            <div>
                                <span className="text-4xl font-black">Custom</span>
                            </div>
                            <p className="text-muted-foreground text-sm">Regular production of 8–15 clips per month. For serious ad spend.</p>
                            <ul className="space-y-2 text-sm">
                                {["8–15 videos / month", "Dedicated brief system", "Priority delivery", "Strategy & consulting", "Retainer = lower per-video price"].map(f => (
                                    <li key={f} className="flex items-center gap-2 text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />{f}</li>
                                ))}
                            </ul>
                            <Link href="/en/contact">
                                <Button className="w-full mt-2" variant="outline">Discuss Pricing</Button>
                            </Link>
                        </div>
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-6">Need larger-scale production or have specific requirements? <Link href="/en/booking" className="text-primary hover:underline">Book a free consultation</Link> and let&apos;s discuss.</p>
                </Container>
            </section>

            {/* Cross-sell: Also need a cameraman? */}
            <section className="py-12">
                <Container className="max-w-4xl">
                    <div className="rounded-2xl border bg-muted/30 p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">More than UGC</p>
                            <h3 className="text-2xl font-bold mb-2">Need a cameraman for your event too?</h3>
                            <p className="text-muted-foreground">I go on-site, film your event, conference or product launch. Everything in one person — no two-supplier briefs.</p>
                        </div>
                        <div className="flex flex-col gap-3 flex-shrink-0">
                            <Link href="/en/services/event-video">
                                <Button className="w-full">🎬 Event Video →</Button>
                            </Link>
                            <Link href="/en/reels-packages">
                                <Button variant="outline" className="w-full">📱 Reels Packages →</Button>
                            </Link>
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
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Start today</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Your brand deserves content that actually sells.</h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        Send me a brief or just a link to your profile — within 24 hours you'll get a concrete proposal for what we can create together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/en/contact">
                            <Button size="lg" className="px-10 h-14 text-base font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                                📩 Enquire about UGC
                            </Button>
                        </Link>
                        <Link href="/en/free-video-audit">
                            <Button size="lg" variant="outline" className="px-10 h-14 text-base">
                                🔍 Free Video Audit
                            </Button>
                        </Link>
                    </div>
                    <p className="mt-6 text-sm text-muted-foreground">Or reach out directly via <a href="https://wa.me/420732483004?text=Hi%20Tom%C3%A1%C5%A1%2C%20I'm%20interested%20in%20UGC%20collaboration." target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">WhatsApp</a></p>
                </Container>
            </section>
        </div>
    );
}
