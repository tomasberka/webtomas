import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, HelpCircle } from "lucide-react";
import Link from "next/link";
import packagesData from "@/content/packages.json";
import { cn } from "@/lib/utils";
import { PackageCard } from "@/components/sections/package-card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reels Balíčky Praha | Tvorba TikTok & Instagram Videí pro Firmy",
    description: "📹 Profesionální tvorba Reels a TikTok videí v Praze. 4-8 videí za jeden natáčecí den. Strategie, scénáře, produkce na klíč. Konzultace zdarma.",
    keywords: ["reels tvorba praha", "tiktok videa pro firmy", "video marketing praha", "instagram reels produkce", "kameraman praha", "video produkce brno"],
    alternates: {
        canonical: "https://jajsemtomas.cz/reels-balicky",
        languages: {
            "en": "https://en.jajsemtomas.cz/reels-packages"
        }
    },
};

export default function ReelsPackagesPage() {
    return (
        <div className="py-12 md:py-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Jak probíhá natáčení?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Přijedu za vámi s kompletní technikou. Během 4 hodin natočíme materiály na celý měsíc. Vy jen mluvíte, já se starám o zbytek."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Co když nemám nápady na scénáře?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "To nevadí! Součástí balíčků Růst a Dominance je tvorba strategie a scénářů. Společně vymyslíme témata, která budou vaše publikum bavit."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Mohu použít videa i na LinkedIn?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Ano, vertikální videa (9:16) fungují skvěle na Instagramu, TikToku, YouTube Shorts i LinkedInu. Dodám vám formáty připravené pro všechny sítě."
                                }
                            }
                        ]
                    })
                }}
            />
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Reels Balíčky</h1>
                    <p className="text-xl text-muted-foreground">
                        Každý projekt je unikátní.
                        Rezervujte si <Link href="/kontakt" className="text-primary hover:underline">10 minutovou konzultaci zdarma</Link>, kde nastavíme strategii přesně pro vás.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-24">
                    {packagesData.map((pkg) => (
                        <PackageCard key={pkg.id} pkg={pkg} />
                    ))}
                </div>

                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Časté dotazy</h2>
                    <div className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2"><HelpCircle className="h-5 w-5 text-muted-foreground" /> Jak probíhá natáčení?</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                Přijedu za vámi s kompletní technikou. Během 4 hodin natočíme materiály na celý měsíc. Vy jen mluvíte, já se starám o zbytek.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2"><HelpCircle className="h-5 w-5 text-muted-foreground" /> Co když nemám nápady na scénáře?</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                To nevadí! Součástí balíčků Růst a Dominance je tvorba strategie a scénářů. Společně vymyslíme témata, která budou vaše publikum bavit.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2"><HelpCircle className="h-5 w-5 text-muted-foreground" /> Mohu použít videa i na LinkedIn?</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                Ano, vertikální videa (9:16) fungují skvěle na Instagramu, TikToku, YouTube Shorts i LinkedInu. Dodám vám formáty připravené pro všechny sítě.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    );
}
