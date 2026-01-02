import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

export function Footer() {
    return (
        <footer className="border-t py-12 bg-background">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="block">
                            <Image
                                src="/images/logo.png"
                                alt="Já jsem Tomáš"
                                width={150}
                                height={50}
                                className="h-8 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Dělám videa. Reels, TikTok i kompletní produkci.
                            <br />
                            Partner SocialVids.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium">Služby</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><Link href="/reels-balicky" className="hover:text-primary">Reels Balíčky</Link></li>
                                <li><Link href="/sluzby/kreativni-produkce" className="hover:text-primary">Kreativní Produkce</Link></li>
                                <li><Link href="/sluzby/event-video" className="hover:text-primary">Event Video</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium">Společnost</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><Link href="/portfolio" className="hover:text-primary">Portfolio</Link></li>
                                <li><Link href="/partner-socialvids" className="hover:text-primary">SocialVids Partner</Link></li>
                                <li><Link href="/kontakt" className="hover:text-primary">Kontakt</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Já jsem Tomáš. Všechna práva vyhrazena.
                </div>
            </Container>
        </footer>
    );
}
