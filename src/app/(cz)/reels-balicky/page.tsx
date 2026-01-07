import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import Link from "next/link";
import packagesData from "@/content/packages.json";
import faqData from "@/content/faq.json";
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
    const reelsFaq = faqData["reels-balicky"];

    return (
        <div className="py-12 md:py-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": reelsFaq.map(item => ({
                            "@type": "Question",
                            "name": item.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.answer
                            }
                        }))
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
                        {reelsFaq.map((item, i) => (
                            <Card key={i}>
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <HelpCircle className="h-5 w-5 text-muted-foreground" />
                                        {item.question}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-muted-foreground">
                                    {item.answer}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
