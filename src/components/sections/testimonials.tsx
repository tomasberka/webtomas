"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import testimonialsDataCs from "@/content/testimonials.json";
import testimonialsDataEn from "@/content/testimonials-en.json";

interface TestimonialsProps {
    locale?: "cs" | "en";
}

export function Testimonials({ locale = "cs" }: TestimonialsProps) {
    const [showAll, setShowAll] = React.useState(false);
    const testimonialsData = locale === "en" ? testimonialsDataEn : testimonialsDataCs;
    const displayedTestimonials = showAll ? testimonialsData : testimonialsData.slice(0, 6);

    const labels = {
        cs: {
            title: "Projekty a spolupráce",
            subtitle: "Ukázky projektů a dodaných řešení pro klienty z různých odvětví.",
            result: "Výsledek:",
            showLess: "Zobrazit méně",
            showMore: "Zobrazit všechny projekty",
        },
        en: {
            title: "Projects & Collaboration",
            subtitle: "Showcase of projects and delivered solutions for clients from various industries.",
            result: "Result:",
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">&QUOT;Video, které má výsledky&QUOT;</h2>
                    <p className="text-xl text-muted-foreground">
                        {t.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedTestimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="border-none shadow-sm bg-card/80 backdrop-blur hover:shadow-md transition-shadow animate-fade-in-up">
                            <CardHeader className="pb-4">
                                {testimonial.quote ? (
                                    <>
                                        <Quote className="h-8 w-8 text-primary/40 mb-4" />
                                        <p className="text-base italic text-muted-foreground leading-relaxed">
                                            "{testimonial.quote}"
                                        </p>
                                    </>
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
                            <CardContent className="pt-0 space-y-3">
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
                    ))}
                </div>

                {/* Show More Button */}
                {testimonialsData.length > 6 && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-lg transition-colors"
                        >
                            {showAll ? (
                                <>
                                    {t.showLess}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                    </svg>
                                </>
                            ) : (
                                <>
                                    {t.showMore} ({testimonialsData.length})
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

