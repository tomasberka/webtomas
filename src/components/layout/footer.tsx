import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

export function Footer({ locale = 'cs' }: { locale?: 'cs' | 'en' }) {
    return (
        <footer className="border-t py-12 bg-background">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="space-y-4">
                        <Link href={locale === 'en' ? "/en" : "/"} className="block">
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
                                        <li><Link href="/reels-balicky" className="hover:text-primary">Reels Balíčky</Link></li>
                                        <li><Link href="/sluzby/kreativni-produkce" className="hover:text-primary">Kreativní Produkce</Link></li>
                                        <li><Link href="/sluzby/event-video" className="hover:text-primary">Event Video</Link></li>
                                    </>
                                ) : (
                                    <>
                                        <li><Link href="/en" className="hover:text-primary">Video Production</Link></li>
                                    </>
                                )}
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium">{locale === 'en' ? "Company" : "Společnost"}</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {locale === 'cs' ? (
                                    <>
                                        <li><Link href="/portfolio" className="hover:text-primary">Portfolio</Link></li>
                                        <li><Link href="/partner-socialvids" className="hover:text-primary">SocialVids Partner</Link></li>
                                        <li><Link href="/kontakt" className="hover:text-primary">Kontakt</Link></li>
                                    </>
                                ) : (
                                    <>
                                        <li><Link href="/en" className="hover:text-primary">Portfolio</Link></li>
                                        <li><Link href="/en" className="hover:text-primary">Contact</Link></li>
                                    </>
                                )}
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium">{locale === 'en' ? "Contact" : "Kontakt"}</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>📍 {locale === 'en' ? "Prague / London" : "Praha, Česko"}</li>

                                <li><a href="tel:+420735846329" className="hover:text-primary">📱 +420 735 846 329</a></li>
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
