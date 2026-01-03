"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

export function ExitIntentPopup() {
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

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
            <Card className="max-w-md w-full relative shadow-2xl">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Zavřít"
                >
                    <X className="h-5 w-5" />
                </button>

                <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 text-6xl">🎯</div>
                    <CardTitle className="text-2xl md:text-3xl font-bold">
                        Počkat! Než odejdeš...
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                        Otestuj si své znalosti o Reels
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
                        <h3 className="font-bold text-lg mb-2">
                            🎮 Interaktivní Quiz: 5 Chyb v Reels
                        </h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                            <li>✓ Zjisti, jestli děláš stejné chyby jako ostatní</li>
                            <li>✓ Naučíš se, co opravdu funguje</li>
                            <li>✓ Zabere to jen 2 minuty</li>
                            <li>✓ Žádný email, rovnou začni</li>
                        </ul>
                    </div>

                    <Link href="/reels-quiz" onClick={() => setIsVisible(false)}>
                        <Button
                            size="lg"
                            className="w-full h-12 text-base font-bold"
                        >
                            Spustit Quiz
                        </Button>
                    </Link>
                    <p className="text-xs text-center text-muted-foreground mt-4">
                        Interaktivní test s okamžitou zpětnou vazbou
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
