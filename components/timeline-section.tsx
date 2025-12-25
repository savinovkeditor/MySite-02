"use client"

import { useState, useEffect } from "react"

const tracks = [
  {
    name: "V1",
    type: "video",
    clips: [
      { start: 0, width: 25, label: "Intro", color: "bg-[#4a9eff]" },
      { start: 27, width: 30, label: "Portfolio", color: "bg-[#50d991]" },
      { start: 60, width: 35, label: "Skills", color: "bg-[#ff6b9d]" },
    ],
  },
  {
    name: "V2",
    type: "video",
    clips: [
      { start: 5, width: 20, label: "Overlay", color: "bg-[#a78bfa]" },
      { start: 40, width: 18, label: "Effects", color: "bg-[#ffb84d]" },
      { start: 70, width: 25, label: "Contact", color: "bg-[#f472b6]" },
    ],
  },
  {
    name: "A1",
    type: "audio",
    clips: [{ start: 0, width: 95, label: "Background Music", color: "bg-[#22c55e]" }],
  },
  {
    name: "A2",
    type: "audio",
    clips: [
      { start: 10, width: 15, label: "SFX", color: "bg-[#14b8a6]" },
      { start: 45, width: 12, label: "SFX", color: "bg-[#14b8a6]" },
      { start: 75, width: 20, label: "Outro", color: "bg-[#14b8a6]" },
    ],
  },
]

export function TimelineSection() {
  const [playheadPosition, setPlayheadPosition] = useState(15)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setPlayheadPosition((prev) => (prev >= 95 ? 0 : prev + 0.5))
    }, 100)

    return () => clearInterval(interval)
  }, [isPlaying])

  return (
    <section id="timeline" className="bg-[#0d0d0d] border-t border-border">
      {/* Timeline header */}
      <div className="h-8 bg-[#1a1a1a] border-b border-border flex items-center px-4">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">Таймлайн</span>
        <div className="ml-auto flex items-center gap-4 text-xs text-muted-foreground">
          <span>Sequence: Portfolio_Main</span>
          <span className="font-mono text-primary">{Math.floor((playheadPosition / 100) * 90)}:00:00:00</span>
        </div>
      </div>

      {/* Time ruler */}
      <div className="h-6 bg-[#1e1e1e] border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 flex">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex-1 border-r border-border/30 relative">
              <span className="absolute top-1 left-1 text-[9px] text-muted-foreground font-mono">
                {String(i * 5).padStart(2, "0")}:00
              </span>
            </div>
          ))}
        </div>
        {/* Playhead indicator on ruler */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#ff5555] z-10 transition-all duration-100"
          style={{ left: `${playheadPosition}%` }}
        >
          <div className="absolute -top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#ff5555]" />
        </div>
      </div>

      {/* Tracks */}
      <div className="bg-[#141414]" onClick={() => setIsPlaying(!isPlaying)}>
        {tracks.map((track, trackIndex) => (
          <div key={track.name} className="flex border-b border-border/50 h-14 group">
            {/* Track label */}
            <div className="w-16 sm:w-20 flex-shrink-0 bg-[#1a1a1a] border-r border-border flex items-center justify-center">
              <span className={`text-xs font-mono ${track.type === "video" ? "text-blue-400" : "text-green-400"}`}>
                {track.name}
              </span>
            </div>

            {/* Track content */}
            <div className="flex-1 relative bg-[#1a1a1a]/30">
              {/* Grid lines */}
              <div className="absolute inset-0 flex">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="flex-1 border-r border-border/10" />
                ))}
              </div>

              {/* Clips */}
              {track.clips.map((clip, clipIndex) => (
                <div
                  key={clipIndex}
                  className={`absolute top-1.5 bottom-1.5 ${clip.color} rounded-sm cursor-pointer hover:brightness-110 transition-all`}
                  style={{
                    left: `${clip.start}%`,
                    width: `${clip.width}%`,
                  }}
                >
                  <div className="px-2 py-1 text-[10px] text-white font-medium truncate">{clip.label}</div>
                  {/* Clip edges */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/20 rounded-l-sm" />
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-black/20 rounded-r-sm" />
                </div>
              ))}

              {/* Playhead */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-[#ff5555] z-10 transition-all duration-100 pointer-events-none"
                style={{ left: `${playheadPosition}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Timeline footer */}
      <div className="h-8 bg-[#1a1a1a] border-t border-border flex items-center px-4 text-xs text-muted-foreground">
        <span>4 треков</span>
        <div className="mx-4 w-px h-4 bg-border" />
        <span>Duration: 01:30:00</span>
        <div className="ml-auto flex items-center gap-2">
          <span className={`flex items-center gap-1 ${isPlaying ? "text-accent" : ""}`}>
            <span
              className={`w-1.5 h-1.5 rounded-full ${isPlaying ? "bg-accent animate-pulse" : "bg-muted-foreground"}`}
            />
            {isPlaying ? "Playing" : "Paused"}
          </span>
        </div>
      </div>
    </section>
  )
}
