"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { useFocusTrap } from "@/hooks/useFocusTrap";

interface ExitIntentPopupProps {
    locale?: "cs" | "en";
}

export function ExitIntentPopup({ locale = "cs" }: ExitIntentPopupProps) {
    const [isVisible, setIsVisible] = useState(false);
    const dialogRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const previouslyFocusedElement = useRef<HTMLElement | null>(null);
    
    // Enable focus trap when popup is visible
    useFocusTrap(dialogRef, isVisible);

    useEffect(() => {
        // Check if user has already seen the popup (with 7-day expiration)
        const exitIntentExpiry = localStorage.getItem("exitIntentExpiry");
        if (exitIntentExpiry) {
            const expiryTime = parseInt(exitIntentExpiry, 10);
            if (Date.now() < expiryTime) {
                // Still within the 7-day window, don't show
                return;
            }
            // Expired, remove old entry
            localStorage.removeItem("exitIntentExpiry");
        }

        let hasTriggered = false;

        const handleMouseLeave = (e: MouseEvent) => {
            // Only trigger if mouse is leaving from top of viewport
            if (e.clientY <= 0 && !hasTriggered) {
                hasTriggered = true;
                // Save previously focused element
                previouslyFocusedElement.current = document.activeElement as HTMLElement;
                setIsVisible(true);
                // Set expiration for 7 days from now
                const expiryTime = Date.now() + 7 * 24 * 60 * 60 * 1000;
                localStorage.setItem("exitIntentExpiry", expiryTime.toString());
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

    const handleClose = () => {
        setIsVisible(false);
    };

    // Handle focus management and Escape key
    useEffect(() => {
        if (isVisible) {
            // Move focus to close button when popup opens
            closeButtonRef.current?.focus();
            
            // Handle Escape key
            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === "Escape") {
                    handleClose();
                }
            };
            document.addEventListener("keydown", handleEscape);
            
            return () => {
                document.removeEventListener("keydown", handleEscape);
            };
        } else if (previouslyFocusedElement.current) {
            // Return focus to previously focused element when closing
            previouslyFocusedElement.current.focus();
            previouslyFocusedElement.current = null;
        }
    }, [isVisible]);

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
            quizLink: "/kontakt",
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
            quizLink: "/contact",
            closeLabel: "Close"
        }
    };

    const t = content[locale];

    return (
        <div 
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-popup-title"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
        >
            <Card className="max-w-md w-full relative shadow-2xl">
                <button
                    ref={closeButtonRef}
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={t.closeLabel}
                >
                    <X className="h-5 w-5" />
                </button>

                <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 text-6xl">{t.emoji}</div>
                    <CardTitle id="exit-popup-title" className="text-2xl md:text-3xl font-bold">
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

                    <Link href={t.quizLink} onClick={handleClose}>
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
