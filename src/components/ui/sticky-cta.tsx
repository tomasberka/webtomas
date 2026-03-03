"use client";

import { Calendar, Phone, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { trackBookingClick } from "@/lib/analytics";

const CALENDAR_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Wf1BjdwQdJU84AymHizbMjQdNFMgFHGmSvvD112G3Yv_TuuI5mNYVoeChrHBIw4uZY-w7nt7_";
const WHATSAPP_CZ = "https://wa.me/420732483004?text=Ahoj%20Tom%C3%A1%C5%A1i%2C%20m%C3%A1m%20z%C3%A1jem%20o%20konzultaci.";
const WHATSAPP_EN = "https://wa.me/420732483004?text=Hi%20Tom%C3%A1%C5%A1%2C%20I'd%20like%20to%20book%20a%20consultation.";

interface StickyCTAProps {
    locale?: "cs" | "en";
}

export function StickyCTA({ locale = "cs" }: StickyCTAProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    const calText = locale === "en" ? "Book a Call" : "Zarezervovat call";
    const waUrl = locale === "en" ? WHATSAPP_EN : WHATSAPP_CZ;

    return (
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 md:hidden animate-fade-in-up pb-[env(safe-area-inset-bottom)] w-full px-4" style={{paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))'}}>
            <div className="flex items-center gap-2 bg-background/95 backdrop-blur-sm p-1.5 rounded-full shadow-2xl border border-primary/20 mb-2 mx-auto w-fit">
                {/* Phone */}
                <a 
                    href="tel:+420735846329"
                    onClick={() => trackBookingClick("sticky_cta_phone", locale)}
                    className="flex items-center justify-center w-11 h-11 bg-primary/10 hover:bg-primary/20 text-foreground rounded-full transition-all"
                    aria-label="Zavolat"
                >
                    <Phone className="h-4 w-4" />
                </a>
                {/* WhatsApp */}
                <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackBookingClick("sticky_cta_whatsapp", locale)}
                    className="flex items-center justify-center w-11 h-11 bg-green-600 hover:bg-green-500 text-white rounded-full transition-all"
                    aria-label="WhatsApp"
                >
                    <MessageCircle className="h-4 w-4" />
                </a>
                {/* Book a Call */}
                <button
                    onClick={() => {
                        trackBookingClick("sticky_cta", locale);
                        window.open(CALENDAR_URL, '_blank', 'noopener,noreferrer');
                    }}
                    className="flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all cta-pulse"
                >
                    <Calendar className="h-5 w-5" />
                    {calText}
                </button>
            </div>
        </div>
    );
}
