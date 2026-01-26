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
