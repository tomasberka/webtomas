"use client";

import { VideoPlayer } from "@/components/ui/video-player";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface VideoCardProps {
    video: {
        id: string;
        title: string;
        category: string;
        youtubeId?: string;
        duration?: string;
        orientation?: string;
        thumbnail?: string;
    };
    locale?: "cs" | "en";
}

export function VideoCard({ video, locale = "cs" }: VideoCardProps) {
    const isVertical = video.orientation === "vertical";
    const translations = {
        cs: {
            notAvailable: "Video není dostupné na YouTube"
        },
        en: {
            notAvailable: "Video not available on YouTube"
        }
    };
    const t = translations[locale];
    return (
        <Card className="overflow-hidden group hover:border-primary/50 transition-all border-border/50 bg-card/50 h-full flex flex-col">
            <div className="relative">
                {video.youtubeId ? (
                    <VideoPlayer
                        videoId={video.youtubeId}
                        className={isVertical ? "aspect-[9/16]" : undefined}
                        thumbnail={video.thumbnail}
                        title={video.title}
                    />
                ) : (
                    <div className={cn("bg-muted flex items-center justify-center text-muted-foreground w-full", isVertical ? "aspect-[9/16]" : "aspect-video")}>
                        <span className="text-sm">{t.notAvailable}</span>
                    </div>
                )}
                <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-black/50 text-white backdrop-blur-sm border-0">
                        {video.category}
                    </Badge>
                </div>
            </div>
            <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base line-clamp-2 md:text-lg group-hover:text-primary transition-colors">
                    {video.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 mt-auto">

            </CardContent>
        </Card>
    );
}
