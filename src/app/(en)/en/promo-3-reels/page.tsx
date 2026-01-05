"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { VideoPlayer } from "@/components/ui/video-player";
import { Check, Clock, Users, Video, Camera, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PromoPage() {
    return (
        <div className="pb-20">
            {/* Hero with dramatic gradient */}
            <section className="relative pt-8 pb-20 md:pt-14 md:pb-32 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-orange-500/10 to-red-600/20" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent" />

                <Container className="relative text-center max-w-5xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border-2 border-amber-500/40 bg-amber-500/10 backdrop-blur-sm px-5 py-2 text-sm font-bold text-amber-300 mb-8 animate-pulse shadow-lg shadow-amber-500/20">
                        <span className="text-xl">🔥</span>
                        <span>LIMITED OFFER – Only 3 spots available</span>
                    </div>

                    {/* Main headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[0.9]">
                        <span className="block text-white">3 Reels + 15 Photos</span>
                        <span className="block mt-2 bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                            for £1,000
                        </span>
                    </h1>

                    {/* Price comparison */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="text-2xl text-muted-foreground line-through decoration-red-500 decoration-2">£1,500</span>
                        <span className="bg-green-500/20 text-green-400 font-bold px-3 py-1 rounded-full text-sm">
                            SAVE £500
                        </span>
                    </div>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                        I'm looking for <strong className="text-foreground">3 bold companies</strong> wanting to stand out
                        on social media. Full-service production in London.
                    </p>

                    {/* Availability boxes */}
                    <div className="flex justify-center gap-6 mb-12">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                            <div className="relative bg-card/80 backdrop-blur border-2 border-amber-500/50 rounded-2xl p-6 md:p-8 min-w-[140px]">
                                <div className="text-5xl md:text-6xl font-black text-amber-400">3</div>
                                <div className="text-sm font-medium text-muted-foreground mt-1">Total Spots</div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                            <div className="relative bg-card/80 backdrop-blur border-2 border-green-500/50 rounded-2xl p-6 md:p-8 min-w-[140px]">
                                <div className="text-5xl md:text-6xl font-black text-green-400">3</div>
                                <div className="text-sm font-medium text-muted-foreground mt-1">Available</div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <Link href="/booking">
                        <Button size="lg" className="text-xl h-16 px-12 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:via-orange-400 hover:to-amber-400 text-white font-bold shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all hover:-translate-y-1 hover:scale-105">
                            📅 I want one of the spots
                            <ArrowRight className="ml-2 h-6 w-6" />
                        </Button>
                    </Link>
                </Container>
            </section>

            {/* What's included - Visual grid */}
            <section className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/20 to-background">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">What's Included?</h2>
                        <p className="text-xl text-muted-foreground">Complete content package for your social media</p>
                    </div>

                    {/* Main offer cards */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                        {/* Video card */}
                        <Card className="relative overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 group hover:border-primary/50 transition-colors">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                            <CardContent className="p-8 relative">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                                        <Video className="h-8 w-8 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-4xl font-black text-primary">3×</div>
                                        <div className="font-bold text-lg">Reels Videos</div>
                                    </div>
                                </div>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-primary shrink-0" />
                                        <span>Professional filming in London</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-primary shrink-0" />
                                        <span>Editing, music, subtitles</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-primary shrink-0" />
                                        <span>9:16 format for IG, TikTok, LinkedIn</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Photo card */}
                        <Card className="relative overflow-hidden border-2 border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-orange-500/5 group hover:border-amber-500/50 transition-colors">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
                            <CardContent className="p-8 relative">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-16 w-16 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                                        <Camera className="h-8 w-8 text-amber-400" />
                                    </div>
                                    <div>
                                        <div className="text-4xl font-black text-amber-400">15×</div>
                                        <div className="font-bold text-lg">Professional Photos</div>
                                    </div>
                                </div>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-amber-400 shrink-0" />
                                        <span>Portraits and product shots</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-amber-400 shrink-0" />
                                        <span>Color grading and retouching</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-amber-400 shrink-0" />
                                        <span>For web and social media</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Bonus features */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        <div className="bg-card/50 border rounded-xl p-4 text-center">
                            <Sparkles className="h-6 w-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">Scripts Included</div>
                        </div>
                        <div className="bg-card/50 border rounded-xl p-4 text-center">
                            <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">7-Day Delivery</div>
                        </div>
                        <div className="bg-card/50 border rounded-xl p-4 text-center">
                            <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">Personal Approach</div>
                        </div>
                        <div className="bg-card/50 border rounded-xl p-4 text-center">
                            <Check className="h-6 w-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">6-7h Shooting</div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Easy Optic Showcase */}
            <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background">
                <Container>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-full text-sm font-medium text-primary mb-6">
                            📸 Example Project
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Easy Optic</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            This is exactly what you get – 3 professional Reels + 15 photos. A complete social media package.
                        </p>
                    </div>

                    {/* Videos */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-center mb-8">3× Reels Videos</h3>
                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {[
                                { id: "6glt6p9oi8I", title: "Easy Optic Reel 1" },
                                { id: "JBEWFNVqNSE", title: "Easy Optic Reel 2" },
                                { id: "eUsnjYMyqy4", title: "Easy Optic Reel 3" },
                            ].map((video) => (
                                <div key={video.id} className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                                    <div className="relative rounded-xl overflow-hidden border-2 border-primary/20 bg-card">
                                        <VideoPlayer
                                            videoId={video.id}
                                            className="aspect-[9/16] rounded-none"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Photos */}
                    <div>
                        <h3 className="text-2xl font-bold text-center mb-8">15× Professional Photos</h3>
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
                            {[
                                "easy-optic-8636.jpg",
                                "easy-optic-8639.jpg",
                                "easy-optic-8648.jpg",
                                "easy-optic-8650.jpg",
                                "easy-optic-8659.jpg",
                                "easy-optic-8667.jpg",
                                "easy-optic-8673.jpg",
                                "easy-optic-8678.jpg",
                                "easy-optic-8683.jpg",
                                "easy-optic-8695.jpg",
                                "easy-optic-8711.jpg",
                                "easy-optic-8727.jpg",
                                "easy-optic-8736.jpg",
                                "easy-optic-8739.jpg",
                                "easy-optic-8776.jpg",
                            ].map((photo, i) => (
                                <div key={i} className="relative group aspect-square overflow-hidden rounded-lg border border-primary/10 hover:border-primary/40 transition-colors">
                                    <Image
                                        src={`/images/easy-optic/${photo}`}
                                        alt={`Easy Optic photo ${i + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 33vw, 20vw"
                                        className="object-cover transition-transform group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-6">
                            All photos are edited and ready for immediate use on web and social media.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Process - Clean cards */}
            <section className="py-20 md:py-28 border-y bg-muted/30">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
                        <p className="text-xl text-muted-foreground">4 simple steps to your new content</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Step 1 */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="relative bg-card border rounded-2xl p-6 h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-10 w-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-lg">1</div>
                                    <div className="h-px flex-1 bg-gradient-to-r from-amber-500/50 to-transparent" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Book a call</h3>
                                <p className="text-sm text-muted-foreground">15 minutes online – we'll discuss your business and topics</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="relative bg-card border rounded-2xl p-6 h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-10 w-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-lg">2</div>
                                    <div className="h-px flex-1 bg-gradient-to-r from-amber-500/50 to-transparent" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Script Approval</h3>
                                <p className="text-sm text-muted-foreground">I'll create 3 custom scripts for you to approve before shooting</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="relative bg-card border rounded-2xl p-6 h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-10 w-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold text-lg">3</div>
                                    <div className="h-px flex-1 bg-gradient-to-r from-orange-500/50 to-transparent" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Shooting Day</h3>
                                <p className="text-sm text-muted-foreground">6-7 hours at your location or my studio – you just talk, I handle the rest</p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="relative bg-card border-2 border-green-500/30 rounded-2xl p-6 h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-10 w-10 rounded-xl bg-green-500 text-white flex items-center justify-center font-bold text-lg">✓</div>
                                    <div className="h-px flex-1 bg-gradient-to-r from-green-500/50 to-transparent" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Delivery</h3>
                                <p className="text-sm text-muted-foreground">Within 7 days you receive 3 finished Reels + 15 photos ready to post</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Why this offer */}
            <section className="py-16 md:py-20">
                <Container className="max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Why This Offer?</h2>
                    <div className="bg-card/50 border rounded-2xl p-8 md:p-10">
                        <p className="text-lg text-muted-foreground mb-4">
                            I want to expand my portfolio with case studies from the London market.
                            In exchange for the <strong className="text-foreground">£500 discount</strong>, I get references and work samples.
                        </p>
                        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 px-4 py-2 rounded-full text-sm">
                            <span>📋</span>
                            <span><strong>Condition:</strong> You agree to let me use the content in my portfolio</span>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="py-20 md:py-28 bg-gradient-to-br from-amber-600/20 via-orange-500/10 to-red-600/20 border-t relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />

                <Container className="relative text-center max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 font-bold px-4 py-2 rounded-full text-sm mb-8">
                        <span className="animate-pulse">⚡</span>
                        <span>Only 3 spots remaining</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Don't wait until it's too late
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        Offer valid until all spots are filled.<br />
                        Book a free call to secure your spot.
                    </p>

                    <Link href="/booking">
                        <Button size="lg" className="text-xl h-16 px-12 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:via-orange-400 hover:to-amber-400 text-white font-bold shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all hover:-translate-y-1 hover:scale-105 animate-pulse">
                            📅 Book a Free Call
                            <ArrowRight className="ml-2 h-6 w-6" />
                        </Button>
                    </Link>

                    <p className="text-sm text-muted-foreground mt-6">
                        ✓ No commitments &nbsp;•&nbsp; ✓ 15 minutes online &nbsp;•&nbsp; ✓ Immediate fit check
                    </p>
                </Container>
            </section>
        </div>
    );
}
