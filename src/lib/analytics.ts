"use client";

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
