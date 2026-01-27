import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import {
    ArrowRight,
    Heart,
    Shield,
    Users,
    Video,
    Calendar,
    Stethoscope,
    Brain,
    Activity,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Video Production for Healthcare & HealthTech | Tomas Berka",
    description: "Specialized video production for healthcare, HealthTech, and medical companies. Patient education, product demos, provider training. HIPAA-aware content creation.",
    keywords: [
        "healthcare video production",
        "healthtech video",
        "medical video content",
        "patient education video",
        "healthcare marketing video",
        "telemedicine video",
        "health startup video",
    ],
    alternates: {
        canonical: "https://en.jajsemtomas.cz/video-for-healthcare",
    },
    openGraph: {
        title: "Video Production for Healthcare & HealthTech",
        description: "Specialized video for Healthcare. Educate patients, train providers, market your solutions.",
        url: "https://en.jajsemtomas.cz/video-for-healthcare",
        locale: "en_US",
    },
};

const benefits = [
    {
        icon: Shield,
        title: "Privacy-Conscious Production",
        description: "I understand healthcare privacy requirements. Content is created with HIPAA and GDPR considerations in mind.",
    },
    {
        icon: Heart,
        title: "Empathy-First Storytelling",
        description: "Healthcare is personal. Videos are crafted to connect emotionally while maintaining professionalism.",
    },
    {
        icon: Brain,
        title: "Medical Complexity → Clarity",
        description: "From AI diagnostics to telemedicine platforms — complex health tech explained simply.",
    },
    {
        icon: Users,
        title: "Multi-Audience Content",
        description: "Patients, providers, investors — each audience gets tailored messaging that resonates.",
    },
];

const useCases = [
    {
        title: "Patient Education",
        description: "Improve outcomes with clear, accessible health information videos.",
    },
    {
        title: "Product Demos",
        description: "Showcase your HealthTech platform's features to providers and patients.",
    },
    {
        title: "Provider Training",
        description: "Scalable video training for healthcare professionals.",
    },
    {
        title: "Investor Pitches",
        description: "Compelling video content for fundraising and board presentations.",
    },
];

export default function VideoForHealthcarePage() {
    return (
        <div className="flex flex-col gap-16 md:gap-24 pb-16">
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://en.jajsemtomas.cz" },
                    { name: "Video for Healthcare", url: "https://en.jajsemtomas.cz/video-for-healthcare" },
                ]}
            />

            {/* Hero */}
            <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-background -z-10" />
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Stethoscope className="h-4 w-4" />
                            Healthcare Specialist
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                            Video Production for
                            <br />
                            <span className="text-blue-500">Healthcare & HealthTech</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                            Educate patients. Train providers. Market your solutions.
                            <br className="hidden md:block" />
                            Privacy-conscious, empathy-driven video content.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Wf1BjdwQdJU84AymHizbMjQdNFMgFHGmSvvD112G3Yv_TuuI5mNYVoeChrHBIw4uZY-w7nt7_" target="_blank">
                                <Button size="lg" className="text-lg h-14 px-8 font-bold bg-blue-600 hover:bg-blue-700">
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

            {/* Why Healthcare Needs Video */}
            <section className="py-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why Healthcare Companies Need Professional Video
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            In healthcare, clarity saves lives. Video educates, builds trust, and scales your message.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {benefits.map((benefit) => (
                            <Card key={benefit.title} className="border-none shadow-sm bg-card/80 backdrop-blur">
                                <CardHeader>
                                    <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                                        <benefit.icon className="h-6 w-6 text-blue-500" />
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
                            Video Types for Healthcare
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {useCases.map((useCase) => (
                            <div key={useCase.title} className="bg-card p-6 rounded-xl border">
                                <Activity className="h-8 w-8 text-blue-500 mb-4" />
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
                    <div className="bg-gradient-to-br from-blue-900/20 to-background border rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Transform Your Healthcare Communications?
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Let's discuss your healthcare video needs. Privacy-conscious, empathy-driven approach.
                        </p>
                        <Link href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Wf1BjdwQdJU84AymHizbMjQdNFMgFHGmSvvD112G3Yv_TuuI5mNYVoeChrHBIw4uZY-w7nt7_" target="_blank">
                            <Button size="lg" className="text-lg h-14 px-8 font-bold bg-blue-600 hover:bg-blue-700">
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
