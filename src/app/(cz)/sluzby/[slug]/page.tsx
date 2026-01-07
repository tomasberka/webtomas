import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/forms/contact-form"
import { AudioPlayer } from "@/components/ui/audio-player";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import servicesData from "@/content/services.json";
import faqData from "@/content/faq.json";
import { Check, HelpCircle } from "lucide-react";
import { ArrowLeft } from "lucide-react";

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === `sluzby/${slug}`);

    if (!service) {
        return {
            title: "Služba nenalezena | Já jsem Tomáš",
        };
    }

    return {
        title: `${service.title} | Já jsem Tomáš`,
        description: service.description,
        openGraph: {
            title: `${service.title} | Já jsem Tomáš`,
            description: service.description,
            type: "website",
        }
    };
}

export async function generateStaticParams() {
    return servicesData
        .filter((s) => s.slug.startsWith("sluzby/"))
        .map((s) => ({
            slug: s.slug.replace("sluzby/", ""),
        }));
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === `sluzby/${slug}`);

    if (!service) {
        notFound();
    }

    // Get FAQ for this service
    const serviceFaq = (faqData as any)[slug] || [];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
            "@type": "Person",
            "name": "Tomáš Berka",
            "url": "https://jajsemtomas.cz"
        },
        "areaServed": {
            "@type": "City",
            "name": "Praha"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Video Služby",
            "itemListElement": service.features.map((feature: string) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": feature
                }
            }))
        }
    };

    return (
        <div className="py-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Container>
                <Link href="/#services" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="h-4 w-4 mr-2" /> Zpět na služby
                </Link>
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{service.title}</h1>
                        <p className="text-xl text-muted-foreground mb-8 text-pretty">
                            {service.description}
                        </p>

                        {(service as any).content && (
                            <div
                                className="prose prose-invert prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground mb-8 text-base"
                                dangerouslySetInnerHTML={{ __html: (service as any).content }}
                            />
                        )}
                        <Link href="/rezervace">
                            <Button size="lg" className="font-bold">
                                📅 Konzultovat balíček (15 min)
                            </Button>
                        </Link>

                        {/* Audio Player for Voiceover */}
                        {(service as any).audioSamples && (
                            <div className="mt-8 p-6 bg-card border rounded-xl">
                                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                    </span>
                                    Ukázky hlasu
                                </h3>
                                <div className="space-y-4">
                                    <div className="grid gap-4">
                                        {(service as any).audioSamples.map((sample: any, index: number) => (
                                            <AudioPlayer
                                                key={index}
                                                src={sample.url}
                                                title={sample.title}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="bg-muted aspect-square rounded-xl flex items-center justify-center border overflow-hidden">
                        {(service as any).image ? (
                            <img
                                src={(service as any).image}
                                alt={service.title}
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                            />
                        ) : (
                            <span className="text-muted-foreground opacity-50 font-medium">Ilustrační foto {service.title}</span>
                        )}
                    </div>
                </div>

                <div className="max-w-3xl mb-16">
                    <h2 className="text-2xl font-bold mb-6">Co služba zahrnuje?</h2>
                    <ul className="grid sm:grid-cols-2 gap-4">
                        {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center p-4 bg-card border rounded-lg">
                                <Check className="h-5 w-5 text-primary mr-3" />
                                <span className="text-sm">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* FAQ Section */}
                {serviceFaq.length > 0 && (
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold mb-6">Časté dotazy</h2>
                        <div className="space-y-4">
                            {serviceFaq.map((faq: any, index: number) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <CardTitle className="text-lg flex items-center gap-2">
                                            <HelpCircle className="h-5 w-5 text-muted-foreground" />
                                            {faq.question}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-muted-foreground">
                                        {faq.answer}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );
}
