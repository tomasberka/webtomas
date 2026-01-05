import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Users, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "PROMO: 3 Reels + 15 Photos for 15,000 CZK | Looking for 3 Companies | Tomas",
    description: "Limited offer for 3 companies. Get 3 professional Reels videos + 15 photos at a discounted price of 15,000 CZK. Strategy, filming, and editing included.",
};

export default function PromoPage() {
    return (
        <div className="pb-20">
            {/* Hero */}
            <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 border-b">
                <Container className="text-center max-w-4xl">
                    <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-bold border-amber-500/30 bg-amber-500/20 text-amber-400 mb-6 animate-pulse">
                        🔥 LIMITED OFFER – Only 3 spots available
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                        3 Reels + 15 Photos for{" "}
                        <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                            15,000 CZK
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                        Regular price: <span className="line-through">21,000 CZK</span>
                    </p>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        I'm looking for <strong>3 companies</strong> who want to try professional Reels production
                        at a discounted rate. Full-service collaboration – from script to final video.
                    </p>

                    {/* Urgency Counter */}
                    <div className="flex justify-center gap-4 md:gap-8 mb-10">
                        <div className="bg-card border-2 border-amber-500/30 rounded-xl p-4 md:p-6 min-w-[100px]">
                            <div className="text-3xl md:text-5xl font-bold text-amber-400">3</div>
                            <div className="text-sm text-muted-foreground">Total spots</div>
                        </div>
                        <div className="bg-card border-2 border-green-500/30 rounded-xl p-4 md:p-6 min-w-[100px]">
                            <div className="text-3xl md:text-5xl font-bold text-green-400">3</div>
                            <div className="text-sm text-muted-foreground">Available</div>
                        </div>
                    </div>

                    <Link href="/booking">
                        <Button size="lg" className="text-lg h-14 px-10 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                            📅 I want one of the spots
                        </Button>
                    </Link>
                </Container>
            </section>

            {/* What's Included */}
            <section className="py-16 md:py-24">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What's Included?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="border-primary/20 bg-primary/5">
                            <CardHeader>
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <Zap className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>3× Reels + 15 Photos</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                Professionally filmed videos in 9:16 format + 15 edited photos for web and social media.
                            </CardContent>
                        </Card>

                        <Card className="border-primary/20 bg-primary/5">
                            <CardHeader>
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <Check className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Scripts included</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                Together we'll brainstorm topics and I'll prepare scripts tailored to your business.
                            </CardContent>
                        </Card>

                        <Card className="border-primary/20 bg-primary/5">
                            <CardHeader>
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <Clock className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Fast delivery</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                We'll shoot in 6–7 hours and within a week you'll have finished videos ready to publish.
                            </CardContent>
                        </Card>

                        <Card className="border-primary/20 bg-primary/5">
                            <CardHeader>
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Personal approach</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                I work directly with you, no delegation to juniors. You communicate with me.
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </section>

            {/* Why This Offer */}
            <section className="py-16 bg-muted/30 border-y">
                <Container className="max-w-3xl">
                    <h2 className="text-3xl font-bold text-center mb-8">Why This Offer?</h2>
                    <div className="prose prose-invert mx-auto text-center text-muted-foreground">
                        <p className="text-lg">
                            I want to expand my portfolio with new case studies from different industries.
                            In exchange for the discount, I get references and work samples I can use.
                        </p>
                        <p className="text-lg">
                            <strong className="text-foreground">Conditions:</strong> You agree to allow me to use the videos
                            in my portfolio and on social media as work samples.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Process */}
            <section className="py-16 md:py-24">
                <Container className="max-w-3xl">
                    <h2 className="text-3xl font-bold text-center mb-12">How Does It Work?</h2>
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="h-10 w-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold shrink-0">1</div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Book a call</h3>
                                <p className="text-muted-foreground">15 minutes online, we'll discuss your business and what you want to communicate.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="h-10 w-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold shrink-0">2</div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">I prepare scripts</h3>
                                <p className="text-muted-foreground">Based on the call, I'll create 3 scripts for you to approve.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="h-10 w-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold shrink-0">3</div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">We shoot (2–3 hours)</h3>
                                <p className="text-muted-foreground">I come to you with equipment, or we shoot in my studio.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="h-10 w-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold shrink-0">✓</div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">I deliver finished videos</h3>
                                <p className="text-muted-foreground">Within 7 days you'll receive 3 finished Reels ready to publish.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 border-t">
                <Container className="text-center max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Only <span className="text-amber-400">3 spots</span> remaining
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Offer valid until all spots are filled. Book a call and secure your spot.
                    </p>
                    <Link href="/booking">
                        <Button size="lg" className="text-lg h-14 px-10 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                            📅 Book a free call <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                    <p className="text-sm text-muted-foreground mt-4">
                        No commitments. During the call we'll figure out if we're a good fit.
                    </p>
                </Container>
            </section>
        </div>
    );
}
