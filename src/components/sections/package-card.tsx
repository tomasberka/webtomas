"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

interface PackageCardProps {
    pkg: {
        id: string;
        title: string;
        description: string;
        price: string;
        features: string[];
        cta: string;
        popular: boolean;
    };
    bookingUrl?: string;
    popularLabel?: string;
}

export function PackageCard({ pkg, bookingUrl, popularLabel = "Nejoblíbenější" }: PackageCardProps) {
    return (
        <Card className={cn("flex flex-col relative", pkg.popular && "border-primary shadow-lg scale-105 z-10")}>
            {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full">
                    {popularLabel}
                </div>
            )}
            <CardHeader>
                <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                <CardDescription className="min-h-[50px]">{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="mb-6">
                    <div className="text-4xl font-bold">{pkg.price}</div>
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
                    href={bookingUrl || `/rezervace?package=${pkg.id}`}
                    className="w-full"
                    onClick={() => trackEvent("click_reels_package", { package: pkg.id, price: pkg.price })}
                >
                    <Button className="w-full" variant={pkg.popular ? "default" : "outline"} size="lg">
                        {pkg.cta}
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
