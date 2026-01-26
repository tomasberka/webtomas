"use client";

import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { trackBookingClick } from "@/lib/analytics";

interface StickyCTAProps {
    locale?: "cs" | "en";
}

export function StickyCTA({ locale = "cs" }: StickyCTAProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 300px
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    const href = locale === "en" ? "/booking" : "/rezervace";
    const text = locale === "en" ? "Free Consultation" : "Konzultace zdarma";
    const phoneText = locale === "en" ? "Call Now" : "Zavolat";

    const handleClick = () => {
        trackBookingClick("sticky_cta", locale);
    };

    const handlePhoneClick = () => {
        trackBookingClick("sticky_cta_phone", locale);
    };

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden animate-fade-in-up">
            <div className="flex items-center gap-2 bg-background/95 backdrop-blur-sm p-1.5 rounded-full shadow-2xl border border-primary/20">
                {/* Phone Button */}
                <a 
                    href="tel:+420735846329" 
                    onClick={handlePhoneClick}
                    className="flex items-center justify-center w-12 h-12 bg-green-600 hover:bg-green-500 text-white rounded-full transition-all"
                    aria-label={phoneText}
                >
                    <Phone className="h-5 w-5" />
                </a>
                {/* Book Call Button */}
                <Link href={href} onClick={handleClick}>
                    <button className="flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all cta-pulse">
                        <Calendar className="h-5 w-5" />
                        {text}
                    </button>
                </Link>
            </div>
        </div>
    );
}

