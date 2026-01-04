"use client";

import { useEffect } from "react";
import { trackBookingComplete } from "@/lib/analytics";

interface BookingCompleteTrackerProps {
    locale?: 'cs' | 'en';
}

export function BookingCompleteTracker({ locale = 'cs' }: BookingCompleteTrackerProps) {
    useEffect(() => {
        trackBookingComplete(locale);
    }, [locale]);

    return null;
}
