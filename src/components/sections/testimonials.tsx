"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote, Star, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import testimonialsDataCs from "@/content/testimonials.json";
import testimonialsDataEn from "@/content/testimonials-en.json";

interface TestimonialsProps {
    locale?: "cs" | "en";
}

// Testimonial type
interface Testimonial {
    id: string;
    name: string;
    company: string;
    role: string;
    quote: string;
    rating: number;
    project: string;
    result?: string;
    highlights?: string[];
    image: string;
    videoId?: string;
    youtubeShorts?: string[];
    instagramReels?: string[];
}

// Testimonial card with expandable quote
function TestimonialCard({ testimonial, locale }: { testimonial: Testimonial; locale: "cs" | "en" }) {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const maxLength = 180; // Characters before truncation
    const hasLongQuote = testimonial.quote && testimonial.quote.length > maxLength;

    const labels = {
        cs: { readMore: "Zobrazit více", readLess: "Zobrazit méně", result: "Výsledek:" },
        en: { readMore: "Read more", readLess: "Read less", result: "Result:" }
    };
    const t = labels[locale];

    return (
        <Card className="border-none shadow-sm bg-card/80 backdrop-blur hover:shadow-md transition-shadow animate-fade-in-up h-full flex flex-col">
            <CardHeader className="pb-4 flex-1">
                {testimonial.quote ? (
                    <div className="relative">
                        <Quote className="h-8 w-8 text-primary/40 mb-4" />
                        <div className="relative">
                            <p className={`text-base italic text-muted-foreground leading-relaxed ${!isExpanded && hasLongQuote ? 'line-clamp-4' : ''}`}>
                                "{isExpanded || !hasLongQuote ? testimonial.quote : testimonial.quote.slice(0, maxLength) + '...'}"
                            </p>
                            {hasLongQuote && !isExpanded && (
                                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card/95 via-card/70 to-transparent pointer-events-none" />
                            )}
                        </div>
                        {hasLongQuote && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="mt-3 text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                            >
                                {isExpanded ? (
                                    <>
                                        {t.readLess}
                                        <ChevronUp className="h-4 w-4" />
                                    </>
                                ) : (
                                    <>
                                        {t.readMore}
                                        <ChevronDown className="h-4 w-4" />
                                    </>
                                )}
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 mb-2">
                            {testimonial.image && (
                                <div className="h-10 w-10 rounded-full overflow-hidden relative">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.company}
                                        width={60}
                                        height={60}
                                        className="h-full w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            )}
                            <p className="text-sm font-medium text-primary">{testimonial.project}</p>
                        </div>
                        {testimonial.highlights && (
                            <ul className="space-y-1.5">
                                {testimonial.highlights.map((highlight, idx) => (
                                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                        <span className="text-primary mt-1">✓</span>
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </CardHeader>
            <CardContent className="pt-0 space-y-3 mt-auto">
                {/* Rating */}
                <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                </div>

                {/* Author Info */}
                <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    {testimonial.company && (
                        <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                    )}
                    {testimonial.role && (
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    )}
                </div>

                {/* Project/Result */}
                {testimonial.result && (
                    <div className="pt-2 border-t">
                        <p className="text-xs text-muted-foreground">{t.result}</p>
                        <p className="text-sm font-medium text-foreground">{testimonial.result}</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

export function Testimonials({ locale = "cs" }: TestimonialsProps) {
    const [showAll, setShowAll] = React.useState(false);
    const testimonialsData = (locale === "en" ? testimonialsDataEn : testimonialsDataCs) as Testimonial[];
    // Only show testimonials with quotes in the initial view
    const testimonialsWithQuotes = testimonialsData.filter(t => t.quote && t.quote.length > 0);
    const displayedTestimonials = showAll ? testimonialsData : testimonialsWithQuotes.slice(0, 6);
    const remainingCount = testimonialsData.length - displayedTestimonials.length;

    const labels = {
        cs: {
            title: "Projekty a spolupráce",
            subtitle: "Ukázky projektů a dodaných řešení pro klienty z různých odvětví.",
            headline: "Video, které má výsledky",
            showLess: "Zobrazit méně",
            showMore: "Zobrazit všechny projekty",
        },
        en: {
            title: "Projects & Collaboration",
            subtitle: "Showcase of projects and delivered solutions for clients from various industries.",
            headline: "Video that gets results",
            showLess: "Show less",
            showMore: "Show all projects",
        }
    };

    const t = labels[locale];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Tomáš Berka",
        "url": "https://jajsemtomas.cz",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": testimonialsData.length,
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": testimonialsData.map(testimonial => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": testimonial.name
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": testimonial.rating || 5,
                "bestRating": "5",
                "worstRating": "1"
            },
            "reviewBody": testimonial.quote || (locale === "cs" ? "Skvělá spolupráce." : "Great collaboration.")
        }))
    };

    return (
        <section className="py-20 bg-muted/50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">&quot;{t.headline}&quot;</h2>
                    <p className="text-xl text-muted-foreground">
                        {t.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedTestimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            locale={locale}
                        />
                    ))}
                </div>

                {/* Show More Button */}
                {remainingCount > 0 && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-lg transition-colors"
                        >
                            {showAll ? (
                                <>
                                    {t.showLess}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                    </svg>
                                </>
                            ) : (
                                <>
                                    {t.showMore} (+{remainingCount})
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </div>
                )}
            </Container>
        </section>
    );
}

