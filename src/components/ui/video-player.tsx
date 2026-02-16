"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

export function VideoPlayer({ videoId, className, thumbnail }: { videoId: string, className?: string, thumbnail?: string }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [thumbnailUrl, setThumbnailUrl] = useState(thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);

    const handleImageError = () => {
        if (thumbnailUrl.includes("maxresdefault")) {
            setThumbnailUrl(`https://img.youtube.com/vi/${videoId}/sddefault.jpg`);
        } else if (thumbnailUrl.includes("sddefault")) {
            setThumbnailUrl(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
        }
    };

    if (isPlaying) {
        return (
            <div className={cn("relative w-full rounded-t-lg overflow-hidden bg-black", className || "aspect-video")}>
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full border-0"
                />
            </div>
        );
    }

    return (
        <div
            className={cn("relative w-full rounded-t-lg overflow-hidden bg-black group cursor-pointer", className || "aspect-video")}
            onClick={() => setIsPlaying(true)}
        >
            <Image
                src={thumbnailUrl}
                alt="Video thumbnail"
                fill
                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                onError={handleImageError}
                unoptimized
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-14 w-14 md:h-16 md:w-16 bg-primary/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                    <Play className="h-6 w-6 md:h-8 md:w-8 text-primary-foreground fill-current ml-1" />
                </div>
            </div>
        </div>
    );
}
