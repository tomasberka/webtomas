"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { trackBookingClick } from "@/lib/analytics";
import { Calendar } from "lucide-react";

interface BookingButtonProps {
    locale?: 'cs' | 'en';
    source: string;
    className?: string;
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'default' | 'sm' | 'lg';
}

export function BookingButton({ locale = 'cs', source, className, variant = 'default', size = 'default' }: BookingButtonProps) {
    const href = locale === 'en' ? '/booking' : '/rezervace';
    const text = locale === 'en' ? 'Free Consultation' : 'Konzultace zdarma';

    const handleClick = () => {
        trackBookingClick(source, locale);
    };

    return (
        <Link href={href} onClick={handleClick}>
            <Button 
                variant={variant}
                size={size}
                className={className || "font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"}
            >
                <Calendar className="h-4 w-4 mr-2" />
                {text}
            </Button>
        </Link>
    );
}
