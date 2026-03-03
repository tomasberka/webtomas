"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";

interface FloatingCTAProps {
  locale?: "cs" | "en";
}

export function FloatingCTA({ locale = "cs" }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const isCS = locale === "cs";

  return (
    <div className="fixed bottom-6 right-6 z-[100] transition-all duration-500 ease-out">
      <Link href={isCS ? "/kontakt" : "/en/contact"}>
        <button className="floating-cta group flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-full font-bold text-sm shadow-2xl hover:scale-105 transition-transform duration-300">
          <Calendar className="w-5 h-5" />
          <span className="hidden sm:inline">
            {isCS ? "Konzultace zdarma" : "Free Consultation"}
          </span>
          <span className="sm:hidden">
            {isCS ? "Zavolat" : "Book"}
          </span>
        </button>
      </Link>
    </div>
  );
}
