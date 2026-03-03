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

    const waUrl = locale === "en" ? WHATSAPP_EN : WHATSAPP_CZ;

    const isCS = locale === "cs";

    return (
        <div className="fixed bottom-0 inset-x-0 z-50 md:hidden animate-fade-in-up">
            <div className="bg-background/95 backdrop-blur-md border-t border-border/60 shadow-2xl px-4 pt-3"
                 style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
                <div className="flex items-stretch gap-2 max-w-sm mx-auto">
                    {/* Phone */}
                    <a
                        href="tel:+420735846329"
                        onClick={() => trackBookingClick("sticky_cta_phone", locale)}
                        className="flex flex-col items-center justify-center gap-0.5 flex-1 py-2 bg-muted rounded-xl transition-all active:scale-95 min-h-[52px]"
                        aria-label="Zavolat"
                    >
                        <Phone className="h-5 w-5" />
                        <span className="text-[10px] font-semibold leading-none">{isCS ? "Zavolat" : "Call"}</span>
                    </a>
                    {/* WhatsApp */}
                    <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackBookingClick("sticky_cta_whatsapp", locale)}
                        className="flex flex-col items-center justify-center gap-0.5 flex-1 py-2 bg-green-600 text-white rounded-xl transition-all active:scale-95 min-h-[52px]"
                        aria-label="WhatsApp"
                    >
                        <MessageCircle className="h-5 w-5" />
                        <span className="text-[10px] font-semibold leading-none">WhatsApp</span>
                    </a>
                    {/* Book a Call — primary, takes 2× space */}
                    <button
                        onClick={() => {
                            trackBookingClick("sticky_cta", locale);
                            window.open(CALENDAR_URL, "_blank", "noopener,noreferrer");
                        }}
                        className="flex flex-col items-center justify-center gap-0.5 flex-[2] py-2 bg-primary text-primary-foreground font-bold rounded-xl transition-all active:scale-95 min-h-[52px] cta-pulse"
                    >
                        <Calendar className="h-5 w-5" />
                        <span className="text-[10px] font-semibold leading-none">{isCS ? "Rezervovat" : "Book Call"}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
