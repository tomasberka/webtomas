"use client";

import { useEffect, useState, useRef } from "react";

interface AccessibleVideoProps {
    src: string;
    poster?: string;
    className?: string;
    type?: string;
}

export function AccessibleVideo({ 
    src, 
    poster, 
    className = "",
    type = "video/mp4"
}: AccessibleVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    // Initialize to true to prevent autoplay before check completes
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

    useEffect(() => {
        // Check for prefers-reduced-motion preference
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const reducedMotion = mediaQuery.matches;
        setPrefersReducedMotion(reducedMotion);
        
        // Pause video if user prefers reduced motion
        if (reducedMotion && videoRef.current) {
            videoRef.current.pause();
        } else if (!reducedMotion && videoRef.current) {
            // Only attempt to play if user doesn't prefer reduced motion
            videoRef.current.play().catch(() => {
                // Ignore autoplay errors (e.g., user hasn't interacted with page yet)
            });
        }

        // Listen for changes in the preference
        const handleChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches);
            if (e.matches && videoRef.current) {
                videoRef.current.pause();
            }
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    return (
        <video
            ref={videoRef}
            autoPlay={!prefersReducedMotion}
            loop={!prefersReducedMotion}
            muted
            playsInline
            controls
            preload="metadata"
            poster={poster}
            className={className}
            aria-label="Video demonstration of growth package services"
        >
            <source src={src} type={type} />
            Your browser does not support the video tag. Please use a modern browser to view this content.
        </video>
    );
}
