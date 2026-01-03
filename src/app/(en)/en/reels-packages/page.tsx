import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import Link from "next/link";
import packagesData from "@/content/packages-en.json";
import { PackageCard } from "@/components/sections/package-card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reels Packages | Instagram & TikTok Content 2026 | I am Tomas",
    description: "Complete content creation for Instagram, TikTok, and YouTube Shorts. Scripts, shooting, and editing. Get a free consultation.",
    alternates: {
        canonical: "https://en.jajsemtomas.cz/reels-packages",
    },
    openGraph: {
        url: "https://en.jajsemtomas.cz/reels-packages",
        title: "Reels Packages | Instagram & TikTok Content 2026 | I am Tomas",
        description: "Complete content creation for Instagram, TikTok, and YouTube Shorts.",
    },
};

export default function ReelsPackagesPage() {
    return (
        <div className="py-20 md:py-32">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How does the shooting work?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "I come to you with complete equipment. During 4 hours we shoot materials for the whole month. You just speak, I take care of the rest."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What if I don't have script ideas?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "That doesn't matter! Growth and Dominance packages include strategy and script creation. Together we will come up with topics that will entertain your audience."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I use videos on LinkedIn too?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, vertical videos (9:16) work great on Instagram, TikTok, YouTube Shorts, and LinkedIn. I deliver formats ready for all networks."
                                }
                            }
                        ]
                    })
                }}
            />
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Reels Packages</h1>
                    <p className="text-xl text-muted-foreground">
                        Every project is unique.
                        Book a <Link href="/en/contact" className="text-primary hover:underline">free 10-minute consultation</Link>, where we will set up a strategy exactly for you.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {packagesData.map((pkg) => (
                        <PackageCard key={pkg.id} pkg={pkg as any} />
                    ))}
                </div>

                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2"><HelpCircle className="h-5 w-5 text-muted-foreground" /> How does the shooting work?</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                I come to you with complete equipment. During 4 hours we shoot materials for the whole month. You just speak, I take care of the rest.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2"><HelpCircle className="h-5 w-5 text-muted-foreground" /> What if I don't have script ideas?</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                That doesn't matter! Growth and Dominance packages include strategy and script creation. Together we will come up with topics that will entertain your audience.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2"><HelpCircle className="h-5 w-5 text-muted-foreground" /> Can I use videos on LinkedIn too?</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                Yes, vertical videos (9:16) work great on Instagram, TikTok, YouTube Shorts, and LinkedIn. I deliver formats ready for all networks.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    );
}
