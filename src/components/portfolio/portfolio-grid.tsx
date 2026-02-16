"use client";

import { useState } from "react";
import { VideoCard } from "@/components/portfolio/video-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PortfolioGridProps {
    items: any[];
    locale?: 'cs' | 'en';
}

export function PortfolioGrid({ items, locale = 'cs' }: PortfolioGridProps) {
    const [filter, setFilter] = useState("All");
    const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal");

    // Filter items by orientation first
    const orientationItems = items.filter((item) => {
        const itemOrientation = item.orientation || "horizontal";
        return itemOrientation === orientation;
    });

    const categories = ["All", ...Array.from(new Set(orientationItems.map((item) => item.category)))];

    const filteredItems = filter === "All"
        ? orientationItems
        : orientationItems.filter((item) => item.category === filter);

    const labels = {
        horizontal: locale === 'en' ? 'Horizontal (TV & Web)' : 'Horizontální (TV & Web)',
        vertical: locale === 'en' ? 'Vertical (Reels & TikTok)' : 'Vertikální (Reels & TikTok)',
        all: locale === 'en' ? 'All' : 'Vše',
        empty: locale === 'en' ? 'No videos in this category yet.' : 'V této kategorii zatím nejsou žádná videa.',
    };

    return (
        <div className="space-y-8">
            {/* Orientation Tabs */}
            <div className="flex justify-center mb-8">
                <div className="inline-flex p-1 bg-muted rounded-full">
                    <button
                        onClick={() => { setOrientation("horizontal"); setFilter("All"); }}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-medium transition-all",
                            orientation === "horizontal"
                                ? "bg-background shadow-sm text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        {labels.horizontal}
                    </button>
                    <button
                        onClick={() => { setOrientation("vertical"); setFilter("All"); }}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-medium transition-all",
                            orientation === "vertical"
                                ? "bg-background shadow-sm text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        {labels.vertical}
                    </button>
                </div>
            </div>

            {/* Filter Tabs (Categories) */}
            <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant={filter === category ? "default" : "outline"}
                        onClick={() => setFilter(category)}
                        className="rounded-full"
                        size="sm"
                    >
                        {category === "All" ? labels.all : category}
                    </Button>
                ))}
            </div>

            {/* Grid */}
            <span className="sr-only" aria-live="polite" aria-atomic="true">
                {filteredItems.length > 0 
                    ? `${locale === 'en' ? 'Showing' : 'Zobrazeno'} ${filteredItems.length} ${locale === 'en' ? 'items' : 'položek'}`
                    : labels.empty
                }
            </span>
            <div className={cn("grid gap-6", orientation === "vertical" ? "md:grid-cols-3 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3")}>
                {filteredItems.map((item) => (
                    <VideoCard key={item.id} video={item} locale={locale} />
                ))}
            </div>

            {filteredItems.length === 0 && (
                <p className="text-center text-muted-foreground py-12">{labels.empty}</p>
            )}
        </div>
    );
}

