import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

export function Footer({ locale = 'cs' }: { locale?: 'cs' | 'en' }) {
    return (
        <footer className="border-t py-12 bg-background">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="block">
                            <Image
                                src="/images/logo.png"
                                alt={locale === 'en' ? "Video Production - Tomas" : "Video Produkce Praha - Já jsem Tomáš"}
                                width={150}
                                height={50}
                                className="h-8 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            {locale === 'en'
                                ? "I create videos. Reels, TikTok & Full Production.\nPartner SocialVids."
                                : "Dělám videa. Reels, TikTok i kompletní produkci.\nPartner SocialVids."}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium">{locale === 'en' ? "Services" : "Služby"}</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {locale === 'cs' ? (
                                    <>
                                        <li><Link href="/reels-balicky" className="hover:text-primary">Reels Produkce</Link></li>
                                        <li><Link href="/sluzby/kreativni-produkce" className="hover:text-primary">Kreativní Produkce</Link></li>
                                        <li><Link href="/sluzby/event-video" className="hover:text-primary">Event Video</Link></li>
                                    </>
                                ) : (
                                    <>
                                        <li><Link href="/reels-packages" className="hover:text-primary">Reels Production</Link></li>
                                        <li><Link href="/services/creative-production" className="hover:text-primary">Creative Production</Link></li>
                                        <li><Link href="/services/event-video" className="hover:text-primary">Event Video</Link></li>
                                    </>
                                )}
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium">{locale === 'en' ? "More" : "Další"}</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {locale === 'cs' ? (
                                    <>
                                        <li><Link href="/portfolio" className="hover:text-primary">Portfolio</Link></li>
                                        <li><Link href="/partner-socialvids" className="hover:text-primary">SocialVids Partner</Link></li>
                                        <li><Link href="/kontakt" className="hover:text-primary">Kontakt</Link></li>
                                        <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
                                        <li><Link href="/ochrana-udaju" className="hover:text-primary">Ochrana údajů</Link></li>
                                    </>
                                ) : (
                                    <>
                                        <li><Link href="/portfolio" className="hover:text-primary">Portfolio</Link></li>
                                        <li><Link href="/partner-socialvids" className="hover:text-primary">SocialVids Partner</Link></li>
                                        <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                                        <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
                                        <li><Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
                                    </>
                                )}
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium">{locale === 'en' ? "Contact" : "Kontakt"}</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>📍 {locale === 'en' ? "Prague / London" : "Praha, Česko"}</li>
                                <li><a href="tel:+420735846329" className="hover:text-primary">📱 +420 735 846 329</a></li>
                                <li><a href="mailto:msg@jajsemtomas.cz" className="hover:text-primary">✉️ msg@jajsemtomas.cz</a></li>
                                <li>
                                    <a href="https://www.linkedin.com/in/berkatomas" target="_blank" rel="noopener noreferrer" className="hover:text-primary inline-flex items-center gap-1">
                                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} {locale === 'en' ? "I am Tomas. All rights reserved." : "Já jsem Tomáš. Všechna práva vyhrazena."}
                </div>
            </Container>
        </footer>
    );
}
