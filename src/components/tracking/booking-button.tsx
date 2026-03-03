"use client";

import { Button } from "@/components/ui/button";
import { trackBookingClick } from "@/lib/analytics";
import { Calendar } from "lucide-react";

const CALENDAR_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Wf1BjdwQdJU84AymHizbMjQdNFMgFHGmSvvD112G3Yv_TuuI5mNYVoeChrHBIw4uZY-w7nt7_";

interface BookingButtonProps {
    locale?: 'cs' | 'en';
    source: string;
    className?: string;
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'default' | 'sm' | 'lg';
}

export function BookingButton({ locale = 'cs', source, className, variant = 'default', size = 'default' }: BookingButtonProps) {
    const text = locale === 'en' ? 'Book a Free Call' : 'Zarezervovat call';

    const handleClick = () => {
        trackBookingClick(source, locale);
        window.open(CALENDAR_URL, '_blank', 'noopener,noreferrer');
    };

    return (
        <Button 
            variant={variant}
            size={size}
            onClick={handleClick}
            className={className || "font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"}
        >
            <Calendar className="h-4 w-4 mr-2" />
            {text}
        </Button>
    );
}
