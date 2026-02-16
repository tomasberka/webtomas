"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Calendar, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackBookingClick } from "@/lib/analytics";

export function MobileNav({ locale = 'cs' }: { locale?: 'cs' | 'en' }) {
    const [open, setOpen] = useState(false);
    const [servicesExpanded, setServicesExpanded] = useState(false);

    const servicesItems = locale === 'cs' ? [
        { href: "/sluzby/event-video-praha", label: "🎬 Event Video Praha", special: false },
        { href: "/sluzby/event-moderator", label: "🎤 Moderátor Eventů", special: false },
        { href: "/reels-balicky", label: "Reels Produkce" },
        { href: "/vstup-na-trh", label: "🌍 Vstup na trh", special: true },
        { href: "/sluzby/kreativni-produkce", label: "Kreativní Produkce" },
        { href: "/sluzby/firemni-herec", label: "Firemní Herec" },
        { href: "/ugc-herec", label: "UGC / Herec" },
        { href: "/partner-socialvids", label: "SocialVids" },
    ] : [
        { href: "/services/international-event-video", label: "🌍 International Events", special: true },
        { href: "/services/event-moderator", label: "🎤 Event Moderator", special: false },
        { href: "/reels-packages", label: "Reels Production" },
        { href: "/gateway-strategy", label: "Gateway Strategy" },
        { href: "/services/creative-production", label: "Creative Production" },
        { href: "/services/corporate-actor", label: "Corporate Actor" },
        { href: "/ugc-creator", label: "UGC / Acting" },
        { href: "/partner-socialvids", label: "SocialVids" },
    ];

    return (
        <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {open && (
                <div className="fixed top-16 left-0 w-full bg-background border-b shadow-lg p-6 flex flex-col z-[60] max-h-[calc(100vh-4rem)] overflow-y-auto animate-in slide-in-from-top-5">
                    <nav className="flex flex-col gap-3 pb-6">
                        <Link
                            href="/"
                            onClick={() => setOpen(false)}
                            className="text-lg font-medium hover:text-primary transition-colors"
                        >
                            {locale === 'cs' ? 'Domů' : 'Home'}
                        </Link>

                        {/* Services Accordion */}
                        <div>
                            <button
                                onClick={() => setServicesExpanded(!servicesExpanded)}
                                className="flex items-center justify-between w-full text-lg font-medium hover:text-primary transition-colors py-1"
                            >
                                {locale === 'cs' ? 'Služby' : 'Services'}
                                <ChevronDown className={`h-5 w-5 transition-transform ${servicesExpanded ? 'rotate-180' : ''}`} />
                            </button>
                            {servicesExpanded && (
                                <div className="pl-4 mt-2 space-y-2 border-l-2 border-primary/30">
                                    {servicesItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            className={`block text-base transition-colors ${
                                                item.special 
                                                    ? 'text-emerald-500 font-medium' 
                                                    : 'text-muted-foreground hover:text-primary'
                                            }`}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            href="/portfolio"
                            onClick={() => setOpen(false)}
                            className="text-lg font-medium hover:text-primary transition-colors"
                        >
                            Portfolio
                        </Link>

                        <Link
                            href={locale === 'cs' ? "/pripadove-studie" : "/case-studies"}
                            onClick={() => setOpen(false)}
                            className="text-lg font-medium hover:text-primary transition-colors"
                        >
                            {locale === 'cs' ? 'Reference' : 'Case Studies'}
                        </Link>

                        <Link
                            href={locale === 'cs' ? "/o-mne" : "/about"}
                            onClick={() => setOpen(false)}
                            className="text-lg font-medium hover:text-primary transition-colors"
                        >
                            {locale === 'cs' ? 'O mně' : 'About'}
                        </Link>

                        <Link
                            href={locale === 'cs' ? "/kontakt" : "/contact"}
                            onClick={() => setOpen(false)}
                            className="text-lg font-medium hover:text-primary transition-colors"
                        >
                            {locale === 'cs' ? 'Kontakt' : 'Contact'}
                        </Link>

                        {/* Secondary links */}
                        <div className="border-t pt-3 mt-2 space-y-2">
                            <Link
                                href="/blog"
                                onClick={() => setOpen(false)}
                                className="block text-base text-muted-foreground hover:text-primary transition-colors"
                            >
                                Blog
                            </Link>
                            <Link
                                href="/faq"
                                onClick={() => setOpen(false)}
                                className="block text-base text-muted-foreground hover:text-primary transition-colors"
                            >
                                FAQ
                            </Link>
                        </div>

                        {/* Language Switcher */}
                        <nav aria-label="Language selection">
                            <div className="border-t pt-4 mt-2 flex items-center justify-center gap-6">
                                {locale === 'cs' ? (
                                    <>
                                        <div className="flex items-center gap-2 p-2 rounded-lg bg-accent/50">
                                            <span className="text-2xl" aria-current="true" aria-label="Čeština (aktuální jazyk)">
                                                🇨🇿
                                            </span>
                                        </div>
                                        <a 
                                            href="https://en.jajsemtomas.cz" 
                                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors opacity-50 grayscale"
                                            aria-label="Switch to English"
                                            hrefLang="en"
                                        >
                                            <span className="text-2xl">
                                                🇬🇧
                                            </span>
                                        </a>
                                    </>
                                ) : (
                                    <>
                                        <a 
                                            href="https://jajsemtomas.cz" 
                                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors opacity-50 grayscale"
                                            aria-label="Přepnout na češtinu"
                                            hrefLang="cs"
                                        >
                                            <span className="text-2xl">
                                                🇨🇿
                                            </span>
                                        </a>
                                        <div className="flex items-center gap-2 p-2 rounded-lg bg-accent/50">
                                            <span className="text-2xl" aria-current="true" aria-label="English (current language)">
                                                🇬🇧
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </nav>

                        {/* CTA Buttons */}
                        <div className="pt-4 space-y-3">
                            <a 
                                href="tel:+420735846329" 
                                onClick={() => { trackBookingClick("mobile_nav_phone", locale); setOpen(false); }}
                                className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-all"
                            >
                                <Phone className="h-5 w-5" />
                                {locale === 'cs' ? 'Zavolat ihned' : 'Call Now'}
                            </a>
                            <Link href={locale === 'cs' ? "/kontakt" : "/contact"} onClick={() => { trackBookingClick("mobile_nav", locale); setOpen(false); }}>
                                <Button className="w-full font-bold">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    {locale === 'cs' ? "Konzultace zdarma" : "Free Consultation"}
                                </Button>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
}
