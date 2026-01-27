import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import {
    ArrowRight,
    BookOpen,
    Users,
    Play,
    Calendar,
    GraduationCap,
    Lightbulb,
    Target,
    Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Video Production for EdTech & E-Learning | Tomas Berka",
    description: "Specialized video production for EdTech startups, e-learning platforms, and educational institutions. Course content, explainers, marketing videos.",
    keywords: [
        "edtech video production",
        "e-learning video",
        "educational video content",
        "course video production",
        "edtech marketing video",
        "educational explainer video",
        "learning platform video",
    ],
    alternates: {
        canonical: "https://en.jajsemtomas.cz/video-for-edtech",
    },
    openGraph: {
        title: "Video Production for EdTech & E-Learning",
        description: "Specialized video for EdTech. Engage learners, demonstrate platforms, drive enrollments.",
        url: "https://en.jajsemtomas.cz/video-for-edtech",
        locale: "en_US",
    },
};

const benefits = [
    {
        icon: Lightbulb,
        title: "Learning-First Approach",
        description: "Videos designed with educational psychology in mind. Clear structure, pacing, and retention techniques.",
    },
    {
        icon: Target,
        title: "Engagement Optimization",
        description: "High-retention video keeps learners watching. Hook structures and visual variety prevent drop-off.",
    },
    {
        icon: Sparkles,
        title: "Platform Showcase",
        description: "Demonstrate your EdTech platform's features with polished product demos that convert trials to paid.",
    },
    {
        icon: Users,
        title: "Multi-Format Delivery",
        description: "From full courses to micro-learning clips to social teasers — content repurposed across channels.",
    },
];

const useCases = [
    {
        title: "Course Content",
        description: "Professional video lessons that keep students engaged and completing.",
    },
    {
        title: "Platform Demos",
        description: "Show prospects exactly how your EdTech solution works.",
    },
    {
        title: "Promo Videos",
        description: "Drive enrollments with compelling marketing content.",
    },
    {
        title: "Instructor Content",
        description: "Help your instructors look and sound professional on camera.",
    },
];

export default function VideoForEdtechPage() {
    return (
        <div className="flex flex-col gap-16 md:gap-24 pb-16">
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://en.jajsemtomas.cz" },
                    { name: "Video for EdTech", url: "https://en.jajsemtomas.cz/video-for-edtech" },
                ]}
            />

            {/* Hero */}
            <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-background -z-10" />
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <GraduationCap className="h-4 w-4" />
                            EdTech Specialist
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                            Video Production for
                            <br />
                            <span className="text-purple-500">EdTech & E-Learning</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                            Engage learners. Demonstrate platforms. Drive enrollments.
                            <br className="hidden md:block" />
                            Video that teaches and converts.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Wf1BjdwQdJU84AymHizbMjQdNFMgFHGmSvvD112G3Yv_TuuI5mNYVoeChrHBIw4uZY-w7nt7_" target="_blank">
                                <Button size="lg" className="text-lg h-14 px-8 font-bold bg-purple-600 hover:bg-purple-700">
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

            {/* Why EdTech Needs Video */}
            <section className="py-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why EdTech Companies Need Professional Video
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            In education, engagement is everything. Professional video keeps learners watching and converting.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {benefits.map((benefit) => (
                            <Card key={benefit.title} className="border-none shadow-sm bg-card/80 backdrop-blur">
                                <CardHeader>
                                    <div className="h-12 w-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                                        <benefit.icon className="h-6 w-6 text-purple-500" />
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
                            Video Types for EdTech
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {useCases.map((useCase) => (
                            <div key={useCase.title} className="bg-card p-6 rounded-xl border">
                                <BookOpen className="h-8 w-8 text-purple-500 mb-4" />
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
                    <div className="bg-gradient-to-br from-purple-900/20 to-background border rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Elevate Your Educational Content?
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Let's discuss your EdTech video needs. Learning-first approach, engagement-optimized delivery.
                        </p>
                        <Link href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Wf1BjdwQdJU84AymHizbMjQdNFMgFHGmSvvD112G3Yv_TuuI5mNYVoeChrHBIw4uZY-w7nt7_" target="_blank">
                            <Button size="lg" className="text-lg h-14 px-8 font-bold bg-purple-600 hover:bg-purple-700">
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
