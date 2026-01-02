import { cn } from "@/lib/utils";

export function VideoPlayer({ videoId, className }: { videoId: string, className?: string }) {
    return (
        <div className={cn("relative w-full aspect-video rounded-t-lg overflow-hidden bg-black", className)}>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
            />
        </div>
    );
}
