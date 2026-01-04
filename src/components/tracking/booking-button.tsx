"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { trackBookingClick } from "@/lib/analytics";

interface BookingButtonProps {
    locale?: 'cs' | 'en';
    source: string;
    className?: string;
}

export function BookingButton({ locale = 'cs', source, className }: BookingButtonProps) {
    const href = locale === 'en' ? '/booking' : '/rezervace';
    const text = locale === 'en' ? '📅 Book a Call' : '📅 Rezervovat Call';

    const handleClick = () => {
        trackBookingClick(source, locale);
    };

    return (
        <Link href={href} onClick={handleClick}>
            <Button className={className || "font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"}>
                {text}
            </Button>
        </Link>
    );
}
