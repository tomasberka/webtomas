import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";

export function Navbar({ locale = 'cs' }: { locale?: 'cs' | 'en' }) {
    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <Container className="flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/logo.png"
                        alt={locale === 'en' ? "Video Production Prague - Reels & TikTok - Tomas" : "Video Produkce Praha - Reels a TikTok - Já jsem Tomáš"}
                        width={180}
                        height={60}
                        className="h-10 w-auto object-contain"
                        priority
                    />
                </Link>
                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-6 items-center">
                    {locale === 'cs' ? (
                        <>
                            <Link href="/reels-balicky" className="text-sm font-medium hover:text-primary transition-colors">
                                Reels Balíčky
                            </Link>
                            <Link href="/sluzby" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                Služby
                            </Link>
                            <Link href="/portfolio" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                Portfolio
                            </Link>
                            <Link href="/pripadove-studie" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                Reference
                            </Link>
                            <Link href="/ugc-herec" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                UGC & Herectví
                            </Link>
                            <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                Blog
                            </Link>
                            <Link href="/reels-quiz" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                🎯 Quiz
                            </Link>
                            <Link href="/o-mne" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                O mně
                            </Link>

                            {/* Language Switcher */}
                            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border/50">
                                <span className="text-lg cursor-default opacity-100 filter drop-shadow-sm grayscale-0">🇨🇿</span>
                                <a href="https://en.jajsemtomas.cz" className="text-lg opacity-50 hover:opacity-100 transition-all hover:scale-110 grayscale hover:grayscale-0" title="Switch to English">🇬🇧</a>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link href="/reels-packages" className="text-sm font-medium hover:text-primary transition-colors">
                                Packages
                            </Link>
                            <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                Services
                            </Link>
                            <Link href="/portfolio" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                Portfolio
                            </Link>
                            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                Contact
                            </Link>

                            <Link href="/case-studies" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                Case Studies
                            </Link>
                            <Link href="/ugc-creator" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                UGC & Acting
                            </Link>
                            <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                Blog
                            </Link>
                            <Link href="/reels-quiz" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                🎯 Quiz
                            </Link>
                            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                About Me
                            </Link>

                            {/* Language Switcher */}
                            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border/50">
                                <a href="https://jajsemtomas.cz" className="text-lg opacity-50 hover:opacity-100 transition-all hover:scale-110 grayscale hover:grayscale-0" title="Přepnout do češtiny">🇨🇿</a>
                                <span className="text-lg cursor-default opacity-100 filter drop-shadow-sm grayscale-0">🇬🇧</span>
                            </div>
                        </>
                    )}
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <Link href={locale === 'en' ? "/contact" : "/rezervace"}>
                            <Button className="font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                                {locale === 'en' ? "📅 Book a Call" : "📅 Rezervovat Call"}
                            </Button>
                        </Link>
                    </div>
                    {/* Mobile Navigation */}
                    <MobileNav locale={locale} />
                </div>
            </Container>
        </nav>
    );
}
