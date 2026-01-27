import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import {
    Check,
    ArrowRight,
    TrendingUp,
    Shield,
    Users,
    BarChart3,
    Calendar,
    Banknote,
    LineChart,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Video Production for FinTech & Financial Services | Tomas Berka",
    description: "Specialized video production for FinTech startups, banks, and financial services. Product demos, explainer videos, compliance-ready content. Trusted by Roklen24.",
    keywords: [
        "fintech video production",
        "financial services video",
        "banking video content",
        "fintech product demo",
        "fintech explainer video",
        "financial video marketing",
        "fintech startup video",
    ],
    alternates: {
        canonical: "https://en.jajsemtomas.cz/video-for-fintech",
    },
    openGraph: {
        title: "Video Production for FinTech & Financial Services",
        description: "Specialized video for FinTech. Build trust, explain complex products, convert prospects.",
        url: "https://en.jajsemtomas.cz/video-for-fintech",
        locale: "en_US",
    },
};

const benefits = [
    {
        icon: Shield,
        title: "Compliance-Aware Content",
        description: "I understand financial regulations. Videos are designed to meet compliance requirements while remaining engaging.",
    },
    {
        icon: TrendingUp,
        title: "Trust-Building Narratives",
        description: "Financial products require trust. Professional video builds credibility that converts skeptical prospects.",
    },
    {
        icon: LineChart,
        title: "Complex → Simple",
        description: "APIs, dashboards, trading platforms — I translate technical complexity into clear visual stories.",
    },
    {
        icon: Users,
        title: "B2B & B2C Experience",
        description: "From retail banking apps to institutional trading platforms. Different audiences, tailored approaches.",
    },
];

const useCases = [
    {
        title: "Product Demos",
        description: "Walk investors and users through your platform's key features.",
    },
    {
        title: "Onboarding Videos",
        description: "Reduce support tickets by 30%+ with clear user onboarding.",
    },
    {
        title: "Thought Leadership",
        description: "Position executives as industry experts with polished interview content.",
    },
    {
        title: "Social Content",
        description: "Market updates, tips, and educational Reels that build audience.",
    },
];

export default function VideoForFintechPage() {
    return (
        <div className="flex flex-col gap-16 md:gap-24 pb-16">
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://en.jajsemtomas.cz" },
                    { name: "Video for FinTech", url: "https://en.jajsemtomas.cz/video-for-fintech" },
                ]}
            />

            {/* Hero */}
            <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-background to-background -z-10" />
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Banknote className="h-4 w-4" />
                            FinTech Specialist
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                            Video Production for
                            <br />
                            <span className="text-green-500">FinTech & Finance</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                            Build trust with polished video. Explain complex products simply.
                            <br className="hidden md:block" />
                            Trusted by Roklen24 (Leading Czech Financial Media Platform).
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Wf1BjdwQdJU84AymHizbMjQdNFMgFHGmSvvD112G3Yv_TuuI5mNYVoeChrHBIw4uZY-w7nt7_" target="_blank">
                                <Button size="lg" className="text-lg h-14 px-8 font-bold bg-green-600 hover:bg-green-700">
                                    <Calendar className="mr-2 h-5 w-5" />
                                    Book Discovery Call
                                </Button>
                            </Link>
                            <Link href="/remote-video">
                                <Button variant="outline" size="lg" className="text-lg h-14 px-8">
                                    See All Services
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Why FinTech Needs Video */}
            <section className="py-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why FinTech Companies Need Professional Video
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            In finance, trust is everything. Video humanizes your brand and simplifies complexity.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {benefits.map((benefit) => (
                            <Card key={benefit.title} className="border-none shadow-sm bg-card/80 backdrop-blur">
                                <CardHeader>
                                    <div className="h-12 w-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                                        <benefit.icon className="h-6 w-6 text-green-500" />
                                    </div>
                                    <CardTitle>{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Use Cases */}
            <section className="py-16 bg-muted/30">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Video Types for Financial Services
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {useCases.map((useCase) => (
                            <div key={useCase.title} className="bg-card p-6 rounded-xl border">
                                <BarChart3 className="h-8 w-8 text-green-500 mb-4" />
                                <h3 className="font-bold text-lg mb-2">{useCase.title}</h3>
                                <p className="text-sm text-muted-foreground">{useCase.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-16">
                <Container>
                    <div className="bg-gradient-to-br from-green-900/20 to-background border rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Build Trust Through Video?
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Let's discuss your FinTech video needs. No pressure, just a strategic conversation.
                        </p>
                        <Link href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Wf1BjdwQdJU84AymHizbMjQdNFMgFHGmSvvD112G3Yv_TuuI5mNYVoeChrHBIw4uZY-w7nt7_" target="_blank">
                            <Button size="lg" className="text-lg h-14 px-8 font-bold bg-green-600 hover:bg-green-700">
                                <Calendar className="mr-2 h-5 w-5" />
                                Book 15-Min Call
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </div>
    );
}
