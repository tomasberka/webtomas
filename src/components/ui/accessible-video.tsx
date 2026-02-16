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
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        // Check for prefers-reduced-motion preference
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);
        
        // Pause video if user prefers reduced motion
        if (mediaQuery.matches && videoRef.current) {
            videoRef.current.pause();
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
        >
            <source src={src} type={type} />
            Your browser does not support video.
        </video>
    );
}
