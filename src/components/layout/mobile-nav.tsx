"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileNav({ locale = 'cs' }: { locale?: 'cs' | 'en' }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {open && (
                <div className="absolute top-16 left-0 w-full bg-background border-b shadow-lg p-6 flex flex-col gap-6 animate-in slide-in-from-top-5 z-50">
                    <nav className="flex flex-col gap-4">
                        {locale === 'cs' ? (
                            <>
                                <Link
                                    href="/"
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    Domů
                                </Link>
                                <Link
                                    href="/reels-balicky"
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    Reels Balíčky
                                </Link>
                                <Link
                                    href="/sluzby"
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    Služby
                                </Link>
                                <Link
                                    href="/portfolio"
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    Portfolio
                                </Link>
                                <Link
                                    href="/pripadove-studie"
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    Reference
                                </Link>
                                <Link
                                    href="/blog"
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="/ugc-herec"
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    UGC & Herectví
                                </Link>

                                <div className="border-t pt-4 mt-2 flex items-center justify-center gap-6">
                                    <div className="flex items-center gap-2 p-2 rounded-lg bg-accent/50">
                                        <span className="text-2xl">🇨🇿</span>
                                    </div>
                                    <a href="https://en.jajsemtomas.cz" className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors opacity-50 grayscale">
                                        <span className="text-2xl">🇬🇧</span>
                                    </a>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/en"
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/reels-packages"
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    Packages
                                </Link>
                                <Link
                                    href="/services"
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    Services
                                </Link>
                                <Link
                                    href="/portfolio"
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    Portfolio
                                </Link>
                                <Link
                                    href="/contact"
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    Contact
                                </Link>
                                <Link
                                    href="/case-studies"
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    Case Studies
                                </Link>
                                <Link
                                    href="/ugc-creator"
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    UGC & Acting
                                </Link>
                                <Link
                                    href="/blog"
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="/reels-quiz"
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    🎯 Quiz
                                </Link>
                                <Link
                                    href="/about"
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    About Me
                                </Link>

                                <div className="border-t pt-4 mt-2 flex items-center justify-center gap-6">
                                    <a href="https://jajsemtomas.cz" className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors opacity-50 grayscale">
                                        <span className="text-2xl">🇨🇿</span>
                                    </a>
                                    <div className="flex items-center gap-2 p-2 rounded-lg bg-accent/50">
                                        <span className="text-2xl">🇬🇧</span>
                                    </div>
                                </div>
                            </>
                        )}

                        <div className="pt-2">
                            <Link href={locale === 'en' ? "/booking" : "/kontakt"} onClick={() => setOpen(false)}>
                                <Button className="w-full">{locale === 'en' ? "Book a Call" : "Spolupracovat"}</Button>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
}
