import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import faqData from "@/content/faq-en.json";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Frequently Asked Questions (FAQ) | I am Tomas",
    description: "Answers to the most common questions about video production, Reels packages, UGC videos, and collaboration.",
    alternates: {
        canonical: "https://en.jajsemtomas.cz/faq",
        languages: {
            "cs": "https://jajsemtomas.cz/faq"
        }
    },
    openGraph: {
        url: "https://en.jajsemtomas.cz/faq",
        title: "Frequently Asked Questions (FAQ) | I am Tomas",
        description: "Everything you need to know about my services.",
    }
};

const categories = {
    "reels-packages": "Reels Packages",
    "creative-production": "Creative Production",
    "ugc": "UGC & Acting",
    "event-video": "Event Video",
    "live-stream": "Live Streaming",
    "post-production": "Editing & Post-production",
    "voiceover": "Voiceover"
};

export default function FAQPage() {
    return (
        <div className="py-20 md:py-32">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Frequently Asked Questions</h1>
                    <p className="text-xl text-muted-foreground">
                        Everything you need to know about my services and the collaboration process.
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
