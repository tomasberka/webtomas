"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { MobileNav } from "./mobile-nav";
import { BookingButton } from "@/components/tracking/booking-button";
import { ChevronDown } from "lucide-react";

export function Navbar({ locale = 'cs' }: { locale?: 'cs' | 'en' }) {
    const [servicesOpen, setServicesOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setServicesOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const servicesItems = locale === 'cs' ? [
        { href: "/sluzby/event-video-praha", label: "🎬 Event Video Praha", highlight: true, special: false },
        { href: "/sluzby/event-moderator", label: "🎤 Moderátor Eventů", highlight: true, special: false },
        { href: "/reels-balicky", label: "Reels Produkce", highlight: false, special: false },
        { href: "/vstup-na-trh", label: "🌍 Vstup na trh", highlight: false, special: true },
        { href: "/sluzby/kreativni-produkce", label: "Kreativní Produkce", highlight: false, special: false },
        { href: "/sluzby/firemni-herec", label: "Firemní Herec", highlight: false, special: false },
        { href: "/ugc-herec", label: "UGC / Herec", highlight: false, special: false },
        { href: "/partner-socialvids", label: "SocialVids", highlight: false, special: false },
    ] : [
        { href: "/services/international-event-video", label: "🌍 International Events", highlight: true, special: true },
        { href: "/services/event-moderator", label: "🎤 Event Moderator", highlight: true, special: false },
        { href: "/reels-packages", label: "Reels Production", highlight: false, special: false },
        { href: "/gateway-strategy", label: "Gateway Strategy", highlight: false, special: false },
        { href: "/services/creative-production", label: "Creative Production", highlight: false, special: false },
        { href: "/services/corporate-actor", label: "Corporate Actor", highlight: false, special: false },
        { href: "/ugc-creator", label: "UGC / Acting", highlight: false, special: false },
        { href: "/partner-socialvids", label: "SocialVids", highlight: false, special: false },
    ];

    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <Container className="flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center">
                    {/* Mobile: personal text logo mark */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 140 80"
                        className="h-16 w-auto md:hidden"
                        aria-label={locale === 'en' ? "Tomas - Video Production & UGC Actor" : "Tomáš - Video Production & UGC Actor"}
                        role="img"
                    >
                        {/* Video camera icon */}
                        <g opacity="0.9" aria-hidden="true">
                            <rect x="56" y="2" width="18" height="12" rx="2.5" stroke="#FFBF00" strokeWidth="1" fill="none"/>
                            <path d="M75.5 5 L82 8 L75.5 11Z" fill="#FFBF00"/>
                            <circle cx="65" cy="8" r="3.5" stroke="#FFBF00" strokeWidth="0.8" fill="none"/>
                        </g>
                        <text textAnchor="middle" x="70" y="30" fontFamily="Montserrat,Arial,sans-serif" fontWeight="600" fontSize="10" letterSpacing="2" fill="#FFBF00">
                            {locale === 'en' ? 'I AM' : 'JÁ JSEM'}
                        </text>
                        <text textAnchor="middle" x="70" y="52" fontFamily="Montserrat,Arial,sans-serif" fontWeight="900" fontSize="19" letterSpacing="3.5" fill="#FFFFFF">
                            TOMÁŠ
                        </text>
                        <line x1="18" y1="58" x2="122" y2="58" stroke="#FFBF00" strokeWidth="0.8" strokeLinecap="round"/>
                        <text textAnchor="middle" x="70" y="73" fontFamily="Montserrat,Arial,sans-serif" fontWeight="500" fontSize="6" letterSpacing="2" fill="#FFBF00" opacity="0.9">
                            VIDEO PRODUCTION &amp; UGC ACTOR
                        </text>
                    </svg>
                    {/* Desktop: full logo with text */}
                    <Image
                        src="/images/logo-new.svg"
                        alt={locale === 'en' ? "Tomas Berka - Cameraman & Video Production" : "Tomáš Berka - Kameraman & Video Produkce"}
                        width={220}
                        height={60}
                        className="h-10 w-auto object-contain hidden md:block"
                        priority
                    />
                </Link>

                {/* Desktop Navigation - Clean 5 items */}
                <div className="hidden md:flex gap-6 items-center">
                    {/* Services Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
                            aria-expanded={servicesOpen}
                            aria-haspopup="true"
                        >
                            {locale === 'cs' ? 'Služby' : 'Services'}
                            <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {servicesOpen && (
                            <div className="absolute top-full left-0 mt-2 w-56 bg-card border rounded-lg shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                {servicesItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setServicesOpen(false)}
                                        className={`block px-4 py-2.5 text-sm transition-colors ${
                                            item.special 
                                                ? 'text-emerald-500 hover:bg-emerald-500/10 font-medium' 
                                                : item.highlight 
                                                    ? 'text-primary hover:bg-primary/10 font-medium'
                                                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/portfolio" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Portfolio
                    </Link>

                    <Link 
                        href={locale === 'cs' ? "/o-mne" : "/about"} 
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                        {locale === 'cs' ? 'O mně' : 'About'}
                    </Link>

                    <Link 
                        href={locale === 'cs' ? "/kontakt" : "/contact"} 
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                        {locale === 'cs' ? 'Kontakt' : 'Contact'}
                    </Link>

                    {/* Language Switcher */}
                    <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border/50">
                        {locale === 'cs' ? (
                            <>
                                <span className="text-lg cursor-default opacity-100 filter drop-shadow-sm grayscale-0">🇨🇿</span>
                                <a href="https://en.jajsemtomas.cz" className="text-lg opacity-50 hover:opacity-100 transition-all hover:scale-110 grayscale hover:grayscale-0" title="Switch to English">🇬🇧</a>
                            </>
                        ) : (
                            <>
                                <a href="https://jajsemtomas.cz" className="text-lg opacity-50 hover:opacity-100 transition-all hover:scale-110 grayscale hover:grayscale-0" title="Switch to Czech">🇨🇿</a>
                                <span className="text-lg cursor-default opacity-100 filter drop-shadow-sm grayscale-0">🇬🇧</span>
                            </>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <BookingButton locale={locale} source="header" />
                    </div>
                    {/* Mobile Navigation */}
                    <MobileNav locale={locale} />
                </div>
            </Container>
        </nav>
    );
}
