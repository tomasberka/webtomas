"use client";

export const GA_TRACKING_ID = "G-W75LP5M5EB";

export const pageview = (url: string) => {
    if (typeof window !== "undefined" && (window as any).window.gtag) {
        (window as any).window.gtag("config", GA_TRACKING_ID, {
            page_path: url,
        });
    }
};

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
            event: eventName,
            ...properties,
        });
    }

    // Log for development
    if (process.env.NODE_ENV === "development") {
        console.log(`[Analytics] ${eventName}`, properties);
    }
};
