import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import Link from "next/link";
import packagesData from "@/content/packages-en.json";
import faqData from "@/content/faq-en.json";
import { PackageCard } from "@/components/sections/package-card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reels Packages London | TikTok & Instagram Video Production UK",
    description: "📹 Professional Reels & TikTok video production in London. 4-8 videos in one shooting day. Strategy, scripts, full production. Free consultation.",
    keywords: ["reels production london", "tiktok videos for business uk", "video marketing london", "instagram reels agency uk", "filmmaker london", "video production uk"],
    alternates: {
        canonical: "https://en.jajsemtomas.cz/reels-packages",
        languages: {
            "cs": "https://jajsemtomas.cz/reels-balicky"
        }
    },
    openGraph: {
        url: "https://en.jajsemtomas.cz/reels-packages",
        title: "Reels Packages London | TikTok & Instagram Video Production UK",
        description: "📹 Professional Reels & TikTok video production in London. 4-8 videos in one shooting day.",
    },
};

export default function ReelsPackagesPage() {
    const reelsFaq = faqData["reels-packages"];

    return (
        <div className="py-20 md:py-32">
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
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Reels Packages</h1>
                    <p className="text-xl text-muted-foreground">
                        Every project is unique.
                        Book a <Link href="/contact" className="text-primary hover:underline">free 10-minute consultation</Link>, where we will set up a strategy exactly for you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 items-start">
                    {packagesData.map((pkg) => (
                        <PackageCard key={pkg.id} pkg={pkg as any} bookingUrl="/booking" popularLabel="Most Popular" />
                    ))}
                </div>

                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
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
