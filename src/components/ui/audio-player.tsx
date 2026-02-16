"use client"

import React, { useState, useRef, useEffect } from "react"
import { Play, Pause } from "lucide-react"
import { cn } from "@/lib/utils"

interface AudioPlayerProps {
    src: string
    title: string
    className?: string
}

const SEEK_STEP_PERCENT = 0.05 // 5% of duration for arrow key seeking
const END_OFFSET_SECONDS = 0.1 // Offset to avoid triggering end event

export function AudioPlayer({ src, title, className }: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [waveformdata] = useState<number[]>(() => Array.from({ length: 40 }, () => Math.random() * 0.5 + 0.3))

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        const updateTime = () => setCurrentTime(audio.currentTime)
        const updateDuration = () => setDuration(audio.duration)
        const onEnded = () => setIsPlaying(false)

        audio.addEventListener("timeupdate", updateTime)
        audio.addEventListener("loadedmetadata", updateDuration)
        audio.addEventListener("ended", onEnded)

        return () => {
            audio.removeEventListener("timeupdate", updateTime)
            audio.removeEventListener("loadedmetadata", updateDuration)
            audio.removeEventListener("ended", onEnded)
        }
    }, [])

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!audioRef.current || !duration) return
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const percent = x / rect.width
        const newTime = percent * duration
        audioRef.current.currentTime = newTime
        setCurrentTime(newTime)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (!audioRef.current || !duration) return

        let newTime = currentTime
        const seekStep = duration * SEEK_STEP_PERCENT

        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            togglePlay()
        } else if (e.key === "ArrowLeft") {
            e.preventDefault()
            newTime = Math.max(0, currentTime - seekStep)
            audioRef.current.currentTime = newTime
            setCurrentTime(newTime)
        } else if (e.key === "ArrowRight") {
            e.preventDefault()
            newTime = Math.min(duration, currentTime + seekStep)
            audioRef.current.currentTime = newTime
            setCurrentTime(newTime)
        } else if (e.key === "Home") {
            e.preventDefault()
            audioRef.current.currentTime = 0
            setCurrentTime(0)
        } else if (e.key === "End") {
            e.preventDefault()
            newTime = duration - END_OFFSET_SECONDS
            audioRef.current.currentTime = newTime
            setCurrentTime(newTime)
        }
    }

    const formatTime = (time: number) => {
        if (isNaN(time)) return "0:00"
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds.toString().padStart(2, "0")}`
    }

    const progress = duration ? (currentTime / duration) * 100 : 0

    return (
        <div className={cn("bg-card border rounded-lg p-4 flex items-center gap-4 transition-all hover:border-primary/50", className)}>
            <audio ref={audioRef} src={src} />

            <button
                onClick={togglePlay}
                className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                aria-label={isPlaying ? "Pause audio" : "Play audio"}
            >
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
            </button>

            <div className="flex-grow flex flex-col justify-center gap-1.5 min-w-0">
                <div className="flex justify-between items-end text-sm">
                    <span className="font-medium truncate pr-4">{title}</span>
                    <span className="text-muted-foreground text-xs mono-font tabular-nums flex-shrink-0">
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                </div>

                {/* Waveform Visualization / Seek Bar */}
                <div
                    className="h-8 flex items-center gap-[2px] cursor-pointer group relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                    onClick={handleSeek}
                    onKeyDown={handleKeyDown}
                    role="slider"
                    tabIndex={0}
                    aria-label="Audio progress"
                    aria-valuemin={0}
                    aria-valuemax={duration || 100}
                    aria-valuenow={isNaN(currentTime) ? 0 : currentTime}
                    aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
                >
                    {/* Background interactive layer */}
                    <div className="absolute inset-0 z-10" />

                    {waveformdata.map((height, i) => {
                        const barPercent = (i / waveformdata.length) * 100
                        const isPlayed = barPercent <= progress

                        return (
                            <div
                                key={i}
                                className={cn(
                                    "flex-1 rounded-full transition-all duration-300",
                                    isPlayed ? "bg-primary" : "bg-muted-foreground/30 group-hover:bg-muted-foreground/50"
                                )}
                                style={{
                                    height: `${height * 100}%`
                                }}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
