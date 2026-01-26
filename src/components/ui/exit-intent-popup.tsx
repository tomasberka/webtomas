"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

interface ExitIntentPopupProps {
    locale?: "cs" | "en";
}

export function ExitIntentPopup({ locale = "cs" }: ExitIntentPopupProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already seen the popup
        const hasSeenPopup = localStorage.getItem("exitIntentShown");
        if (hasSeenPopup) return;

        let hasTriggered = false;

        const handleMouseLeave = (e: MouseEvent) => {
            // Only trigger if mouse is leaving from top of viewport
            if (e.clientY <= 0 && !hasTriggered) {
                hasTriggered = true;
                setIsVisible(true);
                localStorage.setItem("exitIntentShown", "true");
            }
        };

        // Add event listener after a short delay to avoid immediate trigger
        const timer = setTimeout(() => {
            document.addEventListener("mouseleave", handleMouseLeave);
        }, 3000);

        return () => {
            clearTimeout(timer);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    if (!isVisible) return null;

    const content = {
        cs: {
            emoji: "📞",
            title: "Počkat! Než odejdeš...",
            subtitle: "15 minut, které změní váš obsah",
            quizTitle: "🎬 Bezplatná konzultace",
            benefits: [
                "✓ Probereme vaši situaci a cíle",
                "✓ Doporučím konkrétní strategii",
                "✓ Žádné závazky, jen upřímná rada",
                "✓ Online nebo osobně v Praze"
            ],
            buttonText: "📅 Rezervovat konzultaci",
            footer: "Odpovím do 24 hodin. Žádný spam.",
            quizLink: "/rezervace",
            closeLabel: "Zavřít"
        },
        en: {
            emoji: "📞",
            title: "Wait! Before you go...",
            subtitle: "15 minutes that could change your content",
            quizTitle: "🎬 Free Consultation",
            benefits: [
                "✓ We'll discuss your situation & goals",
                "✓ I'll recommend a concrete strategy",
                "✓ No obligations, just honest advice",
                "✓ Online or in-person in London/Prague"
            ],
            buttonText: "📅 Book a Consultation",
            footer: "I'll respond within 24 hours. No spam.",
            quizLink: "/booking",
            closeLabel: "Close"
        }
    };

    const t = content[locale];

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
            <Card className="max-w-md w-full relative shadow-2xl">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={t.closeLabel}
                >
                    <X className="h-5 w-5" />
                </button>

                <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 text-6xl">{t.emoji}</div>
                    <CardTitle className="text-2xl md:text-3xl font-bold">
                        {t.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                        {t.subtitle}
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
                        <h3 className="font-bold text-lg mb-2">
                            {t.quizTitle}
                        </h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                            {t.benefits.map((benefit, i) => (
                                <li key={i}>{benefit}</li>
                            ))}
                        </ul>
                    </div>

                    <Link href={t.quizLink} onClick={() => setIsVisible(false)}>
                        <Button
                            size="lg"
                            className="w-full h-12 text-base font-bold"
                        >
                            {t.buttonText}
                        </Button>
                    </Link>
                    <p className="text-xs text-center text-muted-foreground mt-4">
                        {t.footer}
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
