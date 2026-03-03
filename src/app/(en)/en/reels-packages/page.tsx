import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import Link from "next/link";
import packagesData from "@/content/packages-en.json";
import faqData from "@/content/faq-en.json";
import { PackageCard } from "@/components/sections/package-card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reels Production | Instagram & TikTok Video | Tomas",
    description: "📹 Professional Reels & TikTok production for brands. 1 shooting day = month of content. From pilot project to premium partnership. Book a free consultation.",
    keywords: ["reels production", "tiktok videos for business", "video marketing", "instagram reels agency", "content creator", "social media video production"],
    alternates: {
        canonical: "https://en.jajsemtomas.cz/reels-packages",
        languages: {
            "cs": "https://jajsemtomas.cz/reels-balicky"
        }
    },
    openGraph: {
        url: "https://en.jajsemtomas.cz/reels-packages",
        title: "Reels Production | Instagram & TikTok Video",
        description: "📹 Professional Reels & TikTok production. From pilot project to premium partnership.",
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
                        🎬 Professional Video Production
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Reels Production</h1>
                    <p className="text-xl text-muted-foreground">
                        From pilot project to long-term partnership.<br />
                        Every video designed to stop the scroll and deliver results.
                    </p>
                    <p className="text-base text-muted-foreground">
                        Book a <Link href="/booking" className="text-primary hover:underline">free 15-minute consultation</Link> and we&apos;ll create a strategy tailored for you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 items-start">
                    {packagesData.map((pkg) => (
                        <PackageCard key={pkg.id} pkg={pkg as any} bookingUrl="/booking" popularLabel="Most Popular" locale="en" />
                    ))}
                </div>

                {/* Free Video Audit CTA */}
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                        <span className="text-4xl flex-shrink-0">🔍</span>
                        <div>
                            <h3 className="font-bold text-xl mb-1">Not sure which package is right for you?</h3>
                            <p className="text-muted-foreground">
                                Send me your profile link — I'll analyse your existing videos for free and recommend exactly what will boost your reach. <strong>No commitment.</strong>
                            </p>
                        </div>
                    </div>
                    <Link href="/en/free-video-audit" className="flex-shrink-0">
                        <Button className="h-12 px-8 font-bold whitespace-nowrap">Free Video Audit →</Button>
                    </Link>
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
