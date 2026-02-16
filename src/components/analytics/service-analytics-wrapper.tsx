"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackContentView, trackServiceInteraction } from '@/lib/analytics';
import { useScrollDepthTracking, useTimeOnPageTracking } from './scroll-tracking';

interface ServiceAnalyticsWrapperProps {
    serviceId: string;
    serviceName: string;
    topics: string[];
    locale: 'cs' | 'en';
    children: React.ReactNode;
}

/**
 * Wrapper component that adds analytics tracking to service pages
 */
export function ServiceAnalyticsWrapper({
    serviceId,
    serviceName,
    topics,
    locale,
    children
}: ServiceAnalyticsWrapperProps) {
    const pathname = usePathname();

    // Track page view
    useEffect(() => {
        trackContentView('service', serviceId, topics, locale);
        trackServiceInteraction(serviceId, serviceName, 'view', locale);
    }, [serviceId, serviceName, topics, locale]);

    // Track scroll depth
    useScrollDepthTracking(pathname, locale);

    // Track time on page
    useTimeOnPageTracking(pathname, locale);

    // Track scroll complete (reached 90%)
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            
            const scrollPercentage = ((scrollTop + windowHeight) / documentHeight) * 100;

            if (scrollPercentage >= 90) {
                trackServiceInteraction(serviceId, serviceName, 'scroll_complete', locale);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [serviceId, serviceName, locale]);

    return <>{children}</>;
}
