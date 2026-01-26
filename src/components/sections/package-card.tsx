"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Calendar } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

interface PackageCardProps {
    pkg: {
        id: string;
        title: string;
        subtitle?: string;
        description: string;
        price?: string;
        priceNote?: string;
        features: string[];
        cta: string;
        popular: boolean;
    };
    bookingUrl?: string;
    popularLabel?: string;
    locale?: 'cs' | 'en';
}

export function PackageCard({ pkg, bookingUrl, popularLabel = "Nejoblíbenější", locale = 'cs' }: PackageCardProps) {
    const consultationText = locale === 'en' ? "Let's discuss your needs" : "Probereme vaše potřeby";
    
    return (
        <Card className={cn("flex flex-col relative", pkg.popular && "border-primary shadow-lg scale-105 z-10")}>
            {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full">
                    {popularLabel}
                </div>
            )}
            <CardHeader>
                <div className="flex items-center justify-between mb-1">
                    <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                    {pkg.subtitle && (
                        <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                            {pkg.subtitle}
                        </span>
                    )}
                </div>
                <CardDescription className="min-h-[50px]">{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="mb-6 flex items-center gap-3 p-4 bg-muted/50 rounded-lg border border-dashed border-muted-foreground/30">
                    <Calendar className="h-6 w-6 text-primary shrink-0" />
                    <div>
                        <div className="font-semibold text-foreground">{consultationText}</div>
                        <div className="text-sm text-muted-foreground">
                            {locale === 'en' ? "Custom pricing based on your project" : "Cena na míru vašemu projektu"}
                        </div>
                    </div>
                </div>
                <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                            <span className="text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                <Link
                    href={bookingUrl || (locale === 'en' ? `/booking?package=${pkg.id}` : `/rezervace?package=${pkg.id}`)}
                    className="w-full"
                    onClick={() => trackEvent("click_reels_package", { package: pkg.id })}
                >
                    <Button className="w-full" variant={pkg.popular ? "default" : "outline"} size="lg">
                        <Calendar className="h-4 w-4 mr-2" />
                        {pkg.cta}
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
