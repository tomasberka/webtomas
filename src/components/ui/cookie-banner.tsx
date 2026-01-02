"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Check if user has already consented
        const consented = localStorage.getItem("cookie-consent")
        if (!consented) {
            setIsVisible(true)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "true")
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t border-border shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom duration-500">
            <div className="container max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground text-center sm:text-left">
                    Tento web používá soubory cookie k zajištění funkčnosti a analýze návštěvnosti.
                    Používáním webu s tím souhlasíte.
                </p>
                <Button onClick={handleAccept} size="sm" className="whitespace-nowrap font-medium">
                    Rozumím
                </Button>
            </div>
        </div>
    )
}
