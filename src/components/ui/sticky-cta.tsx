"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";

interface StickyCTAProps {
    locale?: "cs" | "en";
}

export function StickyCTA({ locale = "cs" }: StickyCTAProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 400px
            setIsVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    const href = locale === "en" ? "/booking" : "/rezervace";
    const text = locale === "en" ? "Book a Call" : "Rezervovat Call";

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden animate-fade-in-up">
            <Link href={href}>
                <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-full shadow-2xl hover:bg-primary/90 transition-all cta-pulse">
                    <Calendar className="h-5 w-5" />
                    {text}
                </button>
            </Link>
        </div>
    );
}
