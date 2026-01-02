import { Container } from "@/components/ui/container";
import servicesData from "@/content/services.json";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Clapperboard, Smartphone, Calendar, Radio, MonitorPlay } from "lucide-react";

// Reuse icons map or move to lib/constants if reused often
const icons = {
    Smartphone,
    Clapperboard,
    Calendar,
    Radio,
    MonitorPlay,
};

export const metadata = {
    title: "Služby | Tomáš",
    description: "Přehled video produkčních služeb. Reels, reklamní spoty, eventová videa a livestreamy.",
};

export default function ServicesPage() {
    return (
        <div className="py-20 md:py-32">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Jak vám mohu pomoci</h1>
                    <p className="text-xl text-muted-foreground">
                        Ať už potřebujete pravidelný obsah na sítě nebo produkci velkého eventu, dodám vám video, které má výsledky.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {servicesData.map((service) => {
                        const Icon = icons[service.icon as keyof typeof icons] || Clapperboard;
                        return (
                            <Link href={`/${service.slug}`} key={service.id} className="group">
                                <Card className="h-full hover:border-primary/50 transition-all hover:shadow-md">
                                    <CardHeader>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors transform group-hover:translate-x-1" />
                                        </div>
                                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                                        <CardDescription className="text-base mt-2">{service.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {service.features.slice(0, 3).map((feature, i) => (
                                                <span key={i} className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                                                    {feature}
                                                </span>
                                            ))}
                                            {service.features.length > 3 && (
                                                <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                                                    +{service.features.length - 3} další
                                                </span>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}
