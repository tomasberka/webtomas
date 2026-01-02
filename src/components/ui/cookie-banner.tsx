"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false)

    const updateConsent = useCallback((status: 'granted' | 'denied') => {
        // Update Google Consent Mode
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('consent', 'update', {
                'ad_storage': status,
                'ad_user_data': status,
                'ad_personalization': status,
                'analytics_storage': status
            });
        }
    }, [])

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("cookie-consent")
        if (!consent) {
            setIsVisible(true)
        } else if (consent === "granted") {
            // Restore granted state if page reloads
            updateConsent('granted')
        }
    }, [updateConsent])

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "granted")
        updateConsent('granted')
        setIsVisible(false)
    }

    const handleReject = () => {
        localStorage.setItem("cookie-consent", "denied")
        updateConsent('denied')
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom duration-500">
            <div className="container max-w-7xl mx-auto p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 space-y-2 text-center md:text-left">
                    <h3 className="font-semibold text-base">Vaše soukromí je pro mě důležité</h3>
                    <p className="text-sm text-muted-foreground max-w-2xl">
                        Používám soubory cookie a podobné technologie, abych mohl měřit návštěvnost, přizpůsobit reklamy a vylepšovat web.
                        Vaše data jsou u mě v bezpečí.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <Button
                        onClick={handleReject}
                        variant="outline"
                        size="sm"
                        className="w-full sm:w-auto"
                    >
                        Odmítnout
                    </Button>
                    <Button
                        onClick={handleAccept}
                        size="sm"
                        className="w-full sm:w-auto font-medium bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                        Povolit vše
                    </Button>
                </div>
            </div>
        </div>
    )
}

// Add strict type for window.gtag
declare global {
    interface Window {
        gtag: (
            command: 'consent' | 'config' | 'event' | 'js',
            targetId: string,
            config?: Record<string, any> // eslint-disable-line @typescript-eslint/no-explicit-any
        ) => void;
    }
}
