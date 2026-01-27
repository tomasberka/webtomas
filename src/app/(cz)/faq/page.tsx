import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import faqData from "@/content/faq.json";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata: Metadata = {
    title: "Časté dotazy (FAQ) | Já jsem Tomáš",
    description: "Odpovědi na nejčastější otázky ohledně video produkce, Reels balíčků, UGC videí i spolupráce. Jak dlouho trvá natáčení? Kolik stojí spot?",
    keywords: ["video produkce faq", "reels balíčky cena", "natáčení otázky", "video produkce praha ceník", "ugc video cena", "livestream cena"],
    alternates: {
        canonical: "https://jajsemtomas.cz/faq",
        languages: {
            "en": "https://en.jajsemtomas.cz/faq"
        }
    },
    openGraph: {
        title: "Časté dotazy | Video Produkce Tomáš Berka",
        description: "Vše, co potřebujete vědět o mých službách a procesu spolupráce.",
        url: "https://jajsemtomas.cz/faq"
    }
};

const categories = {
    "reels-balicky": "Reels Balíčky",
    "kreativni-produkce": "Kreativní Produkce",
    "ugc": "UGC & Herectví",
    "event-video": "Event Video",
    "live-stream": "Live Streaming",
    "postprodukce": "Střih & Postprodukce",
    "voiceover": "Voiceover"
};

export default function FAQPage() {
    // Generate FAQPage Schema from faq data
    const allFaqItems = Object.values(faqData).flat() as { question: string; answer: string }[];
    
    return (
        <div className="py-20 md:py-32">
            <BreadcrumbSchema items={[
                { name: "Domů", url: "https://jajsemtomas.cz" },
                { name: "Časté dotazy", url: "https://jajsemtomas.cz/faq" }
            ]} />
            {/* FAQPage Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": allFaqItems.slice(0, 10).map(item => ({
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
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Časté dotazy (FAQ)</h1>
                    <p className="text-xl text-muted-foreground">
                        Vše, co potřebujete vědět o mých službách a procesu spolupráce.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-16">
                    {Object.entries(categories).map(([key, label]) => {
                        const items = (faqData as any)[key];
                        if (!items || items.length === 0) return null;

                        return (
                            <section key={key}>
                                <h2 className="text-2xl font-bold mb-8 border-b pb-2">{label}</h2>
                                <div className="grid gap-4">
                                    {items.map((item: any, i: number) => (
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
                            </section>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}
