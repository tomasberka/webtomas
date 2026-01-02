"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {open && (
                <div className="absolute top-16 left-0 w-full bg-background border-b shadow-lg p-6 flex flex-col gap-6 animate-in slide-in-from-top-5 z-50">
                    <nav className="flex flex-col gap-4">
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
                            href="/blog"
                            onClick={() => setOpen(false)}
                            className="text-lg font-medium hover:text-primary transition-colors"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/o-mne"
                            onClick={() => setOpen(false)}
                            className="text-lg font-medium hover:text-primary transition-colors"
                        >
                            O mně
                        </Link>
                        <Link
                            href="/partner-socialvids"
                            onClick={() => setOpen(false)}
                            className="text-lg font-medium hover:text-primary transition-colors"
                        >
                            SocialVids
                        </Link>
                        <Link
                            href="/ugc-herec"
                            onClick={() => setOpen(false)}
                            className="text-lg font-medium hover:text-primary transition-colors"
                        >
                            UGC & Herectví
                        </Link>
                        <div className="pt-2">
                            <Link href="/kontakt" onClick={() => setOpen(false)}>
                                <Button className="w-full">Spolupracovat</Button>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
}
