"use client";

export const GA_TRACKING_ID = "G-W75LP5M5EB";

// Note: Window.gtag type is declared in cookie-banner.tsx

export const pageview = (url: string) => {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", GA_TRACKING_ID, {
            page_path: url,
        });
    }
};

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
            event: eventName,
            ...properties,
        });
    }
};

// Conversion tracking for booking flow
export const trackBookingClick = (source: string, locale: 'cs' | 'en' = 'cs') => {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "booking_click", {
            event_category: "conversion",
            event_label: source,
            locale: locale,
        });
    }
};

export const trackBookingComplete = (locale: 'cs' | 'en' = 'cs') => {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "booking_complete", {
            event_category: "conversion",
            locale: locale,
        });
    }
};

// Exit intent popup tracking
export const trackExitIntent = (action: 'shown' | 'clicked' | 'closed', locale: 'cs' | 'en' = 'cs') => {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "exit_intent", {
            event_category: "engagement",
            event_action: action,
            locale: locale,
        });
    }
};

// Phone call tracking
export const trackPhoneClick = (source: string, locale: 'cs' | 'en' = 'cs') => {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "phone_click", {
            event_category: "conversion",
            event_label: source,
            locale: locale,
        });
    }
};

// Deep Analytics - Topic and Content Tracking
export const trackContentView = (
    contentType: 'service' | 'blog' | 'portfolio' | 'case-study',
    slug: string,
    topics: string[],
    locale: 'cs' | 'en' = 'cs'
) => {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "content_view", {
            event_category: "content_engagement",
            content_type: contentType,
            content_slug: slug,
            topics: topics.join(','),
            locale: locale,
        });
    }
};

// Track scroll depth for engagement analysis
export const trackScrollDepth = (
    percentage: number,
    page: string,
    locale: 'cs' | 'en' = 'cs'
) => {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "scroll_depth", {
            event_category: "engagement",
            scroll_percentage: percentage,
            page_path: page,
            locale: locale,
        });
    }
};

// Track CTA interactions with specific location tracking
export const trackCTAInteraction = (
    ctaType: 'booking' | 'contact' | 'quiz' | 'portfolio' | 'phone',
    location: string,
    topic?: string,
    locale: 'cs' | 'en' = 'cs'
) => {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "cta_interaction", {
            event_category: "conversion_funnel",
            cta_type: ctaType,
            cta_location: location,
            topic: topic || 'general',
            locale: locale,
        });
    }
};

// Track service interactions (which services are most viewed/clicked)
export const trackServiceInteraction = (
    serviceId: string,
    serviceName: string,
    action: 'view' | 'click_cta' | 'scroll_complete',
    locale: 'cs' | 'en' = 'cs'
) => {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "service_interaction", {
            event_category: "service_engagement",
            service_id: serviceId,
            service_name: serviceName,
            interaction_type: action,
            locale: locale,
        });
    }
};

// Track portfolio video views and engagement
export const trackPortfolioEngagement = (
    videoId: string,
    videoTitle: string,
    category: string,
    action: 'view' | 'play' | 'watch_complete',
    locale: 'cs' | 'en' = 'cs'
) => {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "portfolio_engagement", {
            event_category: "portfolio",
            video_id: videoId,
            video_title: videoTitle,
            video_category: category,
            action: action,
            locale: locale,
        });
    }
};

// Track quiz funnel progress
export const trackQuizProgress = (
    step: number,
    answer?: string,
    locale: 'cs' | 'en' = 'cs'
) => {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "quiz_progress", {
            event_category: "lead_generation",
            quiz_step: step,
            quiz_answer: answer || 'not_answered',
            locale: locale,
        });
    }
};

// Track language preference and performance
export const trackLanguagePreference = (
    preferredLocale: 'cs' | 'en',
    userLocale: string,
    source: 'auto' | 'manual'
) => {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "language_preference", {
            event_category: "user_behavior",
            preferred_locale: preferredLocale,
            browser_locale: userLocale,
            selection_source: source,
        });
    }
};

// Track topic performance - which topics drive conversions
export const trackTopicEngagement = (
    topic: string,
    action: 'view' | 'engagement' | 'conversion',
    contentType: string,
    locale: 'cs' | 'en' = 'cs'
) => {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "topic_engagement", {
            event_category: "topic_analytics",
            topic: topic,
            action: action,
            content_type: contentType,
            locale: locale,
        });
    }
};
