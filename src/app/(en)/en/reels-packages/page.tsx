import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import Link from "next/link";
import packagesData from "@/content/packages-en.json";
import faqData from "@/content/faq-en.json";
import { PackageCard } from "@/components/sections/package-card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Video Production Packages | High-Retention Reels & TikTok | Growth Architecture",
    description: "📹 Premium Reels & TikTok video production. High-Retention strategy for your growth. From $150. Trial package, monthly retainer or premium production.",
    keywords: ["reels production", "tiktok videos for business", "video marketing", "instagram reels agency", "high retention video", "growth package video", "upwork video editor"],
    alternates: {
        canonical: "https://en.jajsemtomas.cz/reels-packages",
        languages: {
            "cs": "https://jajsemtomas.cz/reels-balicky"
        }
    },
    openGraph: {
        url: "https://en.jajsemtomas.cz/reels-packages",
        title: "Video Production Packages | High-Retention Reels & TikTok",
        description: "📹 Premium Reels & TikTok video production. From trial package to monthly retainer.",
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
                    <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/10 text-primary mb-4">
                        🚀 High-Retention Video Production
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Growth Packages</h1>
                    <p className="text-xl text-muted-foreground">
                        We're not just editors. We're Growth Architects.<br />
                        Every video is designed to stop the scroll.
                    </p>
                    <p className="text-base text-muted-foreground">
                        Book a <Link href="/contact" className="text-primary hover:underline">free 10-minute consultation</Link>, where we'll set up a strategy tailored for you.
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
