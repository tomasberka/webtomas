"use client";

import { Card } from "@/components/ui/card";
import { VideoPlayer } from "@/components/ui/video-player";
import { CheckCircle2, Quote } from "lucide-react";

interface CaseStudy {
    id: string;
    title: string;
    client: string;
    industry: string;
    youtubeId?: string;
    youtubeIds?: string[];
    challenge: string;
    solution: string;
    results: string[];
    testimonial: {
        quote: string;
        author: string;
        role: string;
    };
    tags: string[];
}

interface CaseStudyCardProps {
    study: CaseStudy;
    locale?: 'cs' | 'en';
}

export function CaseStudyCard({ study, locale = 'cs' }: CaseStudyCardProps) {
    const labels = {
        challengeSolution: locale === 'en' ? 'Challenge & Solution' : 'Výzva & Řešení',
        keyResults: locale === 'en' ? 'Key Results' : 'Klíčové Výsledky',
        videoPreparing: locale === 'en' ? 'Video being prepared' : 'Video se připravuje',
    };

    return (
        <div className="scroll-mt-24">
            <Card className="overflow-hidden border-none shadow-2xl bg-card/50 backdrop-blur-sm">
                <div className="grid lg:grid-cols-12 gap-0">
                    {/* Left Column - Video/Visual */}
                    <div className="lg:col-span-7 relative bg-neutral-900/50 min-h-[500px] flex items-center overflow-hidden">
                        {study.youtubeIds ? (
                            <div className="w-full h-full flex items-center overflow-x-auto p-4 md:p-8 gap-4 snap-x snap-mandatory scrollbar-hide">
                                {study.youtubeIds.map((id: string) => (
                                    <div key={id} className="flex-none w-[220px] md:w-[260px] aspect-[9/16] rounded-xl overflow-hidden bg-black shadow-2xl snap-center ring-1 ring-white/10">
                                        <VideoPlayer
                                            videoId={id}
                                            className="aspect-[9/16] rounded-none"
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : study.youtubeId ? (
                            <VideoPlayer
                                videoId={study.youtubeId}
                                className="absolute inset-0 w-full h-full"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-muted/20">
                                {labels.videoPreparing}
                            </div>
                        )}
                    </div>

                    {/* Right Column - Info */}
                    <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between">
                        <div className="space-y-8">
                            <div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {study.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-[10px] uppercase tracking-wider font-bold rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h2 className="text-3xl font-bold mb-2 leading-tight">{study.title}</h2>
                                <p className="text-primary font-medium tracking-wide">
                                    {study.client} <span className="text-muted-foreground mx-2">•</span> {study.industry}
                                </p>
                            </div>

                            <div className="grid gap-6">
                                <div>
                                    <h3 className="text-sm uppercase tracking-widest font-bold text-muted-foreground mb-2">{labels.challengeSolution}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {study.challenge} {study.solution}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-sm uppercase tracking-widest font-bold text-muted-foreground mb-3">{labels.keyResults}</h3>
                                    <ul className="grid grid-cols-1 gap-2">
                                        {study.results.map((result, index) => (
                                            <li key={index} className="flex items-start gap-3 text-sm">
                                                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground font-medium">{result}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Bottom */}
                        <div className="mt-12 pt-8 border-t border-border/50">
                            <div className="relative">
                                <Quote className="absolute -top-4 -left-4 h-8 w-8 text-primary/10 -z-10" />
                                <p className="italic text-foreground/90 mb-4 leading-relaxed">
                                    "{study.testimonial.quote}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                        {study.testimonial.author[0]}
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">{study.testimonial.author}</p>
                                        <p className="text-xs text-muted-foreground">{study.testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
