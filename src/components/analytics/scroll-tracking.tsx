"use client";

import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '@/lib/analytics';

/**
 * Hook to track scroll depth on pages
 * Fires events at 25%, 50%, 75%, and 100% scroll depth
 */
export function useScrollDepthTracking(
    pagePath: string,
    locale: 'cs' | 'en' = 'cs',
    enabled: boolean = true
) {
    const scrollDepthsTracked = useRef<Set<number>>(new Set());

    useEffect(() => {
        if (!enabled || typeof window === 'undefined') return;

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            
            const scrollPercentage = Math.floor(
                ((scrollTop + windowHeight) / documentHeight) * 100
            );

            // Track at specific milestones
            const milestones = [25, 50, 75, 100];
            milestones.forEach(milestone => {
                if (
                    scrollPercentage >= milestone && 
                    !scrollDepthsTracked.current.has(milestone)
                ) {
                    scrollDepthsTracked.current.add(milestone);
                    trackScrollDepth(milestone, pagePath, locale);
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            scrollDepthsTracked.current.clear();
        };
    }, [pagePath, locale, enabled]);
}

/**
 * Hook to track time on page
 */
export function useTimeOnPageTracking(
    pagePath: string,
    locale: 'cs' | 'en' = 'cs',
    enabled: boolean = true
) {
    useEffect(() => {
        if (!enabled || typeof window === 'undefined') return;

        const startTime = Date.now();

        const trackTimeOnPage = () => {
            const timeSpent = Math.floor((Date.now() - startTime) / 1000); // in seconds
            
            if (window.gtag && timeSpent > 0) {
                window.gtag('event', 'time_on_page', {
                    event_category: 'engagement',
                    page_path: pagePath,
                    time_seconds: timeSpent,
                    locale: locale,
                });
            }
        };

        // Track when user leaves the page
        window.addEventListener('beforeunload', trackTimeOnPage);

        return () => {
            trackTimeOnPage();
            window.removeEventListener('beforeunload', trackTimeOnPage);
        };
    }, [pagePath, locale, enabled]);
}

/**
 * Hook to track when user reads to the end of content
 */
export function useContentReadTracking(
    contentId: string,
    contentType: 'blog' | 'service' | 'case-study',
    locale: 'cs' | 'en' = 'cs',
    enabled: boolean = true
) {
    const hasTrackedComplete = useRef(false);

    useEffect(() => {
        if (!enabled || typeof window === 'undefined') return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasTrackedComplete.current) {
                        hasTrackedComplete.current = true;
                        
                        if (window.gtag) {
                            window.gtag('event', 'content_read_complete', {
                                event_category: 'engagement',
                                content_type: contentType,
                                content_id: contentId,
                                locale: locale,
                            });
                        }
                    }
                });
            },
            {
                threshold: 0.5, // Consider "read" when 50% visible
            }
        );

        // Observe the last section or paragraph of the content
        const contentEndElement = document.querySelector(`[data-content-end="${contentId}"]`);
        if (contentEndElement) {
            observer.observe(contentEndElement);
        }

        return () => {
            observer.disconnect();
            hasTrackedComplete.current = false;
        };
    }, [contentId, contentType, locale, enabled]);
}
