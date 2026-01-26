import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import Link from "next/link";
import packagesData from "@/content/packages.json";
import faqData from "@/content/faq.json";
import { PackageCard } from "@/components/sections/package-card";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reels Produkce Praha | Instagram & TikTok Video | Já jsem Tomáš",
    description: "📹 Profesionální Reels a TikTok produkce pro firmy. 1 natáčecí den = měsíc obsahu. Pilotní projekt od 5 000 Kč, měsíční spolupráce i premium produkce.",
    keywords: ["reels produkce praha", "tiktok videa pro firmy", "instagram reels natáčení", "video produkce pro e-shop", "social media video", "content creator praha"],
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
            <BreadcrumbSchema items={[
                { name: "Domů", url: "https://jajsemtomas.cz" },
                { name: "Reels Balíčky", url: "https://jajsemtomas.cz/reels-balicky" }
            ]} />
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
                    <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/10 text-primary mb-4">
                        🎬 Profesionální video produkce
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Reels Produkce</h1>
                    <p className="text-xl text-muted-foreground">
                        Od pilotního projektu po dlouhodobé partnerství.<br />
                        Každé video navrženo tak, aby zastavilo scrollování a přineslo výsledky.
                    </p>
                    <p className="text-base text-muted-foreground">
                        Rezervujte si <Link href="/rezervace" className="text-primary hover:underline">15minutovou konzultaci zdarma</Link> a nastavíme strategii přesně pro vás.
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
