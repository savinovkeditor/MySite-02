"use client"

import { useState } from "react"
import { Play, Pause, Volume2, Maximize2, SkipBack, SkipForward } from "lucide-react"

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="hero" className="pt-[72px] min-h-screen flex">
      {/* Left sidebar - Project panel */}
      <div className="hidden lg:flex w-64 flex-col border-r border-border bg-[#1a1a1a]">
        <div className="p-3 border-b border-border">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Проект</h3>
        </div>
        <div className="p-3 space-y-2">
          <div className="p-2 bg-secondary/50 rounded text-sm">
            <div className="text-foreground font-medium">Portfolio_2025.prproj</div>
            <div className="text-xs text-muted-foreground mt-1">Последнее изменение: сегодня</div>
          </div>
          <div className="text-xs text-muted-foreground space-y-1 mt-4">
            <div className="flex justify-between">
              <span>Разрешение:</span>
              <span className="text-foreground">4K UHD</span>
            </div>
            <div className="flex justify-between">
              <span>Частота кадров:</span>
              <span className="text-foreground">25 fps</span>
            </div>
            <div className="flex justify-between">
              <span>Кодек:</span>
              <span className="text-foreground">H.264</span>
            </div>
          </div>
        </div>

        <div className="p-3 border-t border-border mt-auto">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Статус</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs text-muted-foreground">Открыт для проектов</span>
          </div>
        </div>
      </div>

      {/* Main preview area */}
      <div className="flex-1 flex flex-col bg-[#0d0d0d]">
        {/* Preview window */}
        <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
          <div className="relative w-full max-w-4xl aspect-video bg-gradient-to-br from-[#1a1a2e] to-[#0d0d0d] rounded-lg overflow-hidden border border-border/50 shadow-2xl">
            {/* Video preview content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-12 text-center">
              <div className="mb-4 px-3 py-1 rounded bg-primary/20 text-primary text-xs font-medium inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Режиссёр монтажа
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-balance">
                <span className="text-foreground">КИРИЛЛ</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">САВИНОВ</span>
              </h1>

              <p className="text-muted-foreground text-sm sm:text-base max-w-md leading-relaxed mb-8">
                Создаю визуальные истории, которые захватывают внимание и остаются в памяти
              </p>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="group w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-all hover:scale-105"
              >
                {isPlaying ? (
                  <Pause className="text-primary" size={28} />
                ) : (
                  <Play className="text-primary ml-1" size={28} />
                )}
              </button>
            </div>

            {/* Safe area guides */}
            <div className="absolute inset-4 sm:inset-8 border border-dashed border-primary/20 rounded pointer-events-none" />

            {/* Corner markers */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/40" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary/40" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary/40" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/40" />
          </div>
        </div>

        {/* Preview controls */}
        <div className="h-12 bg-[#1a1a1a] border-t border-border flex items-center px-4 gap-4">
          <div className="flex items-center gap-2">
            <button className="p-1.5 hover:bg-secondary rounded text-muted-foreground hover:text-foreground transition-colors">
              <SkipBack size={16} />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 bg-primary/20 hover:bg-primary/30 rounded text-primary transition-colors"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <button className="p-1.5 hover:bg-secondary rounded text-muted-foreground hover:text-foreground transition-colors">
              <SkipForward size={16} />
            </button>
          </div>

          {/* Progress bar */}
          <div className="flex-1 h-1 bg-secondary rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-primary rounded-full" />
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="font-mono">00:00:15:12</span>
            <span>/</span>
            <span className="font-mono">00:01:30:00</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-1.5 hover:bg-secondary rounded text-muted-foreground hover:text-foreground transition-colors">
              <Volume2 size={16} />
            </button>
            <button className="p-1.5 hover:bg-secondary rounded text-muted-foreground hover:text-foreground transition-colors">
              <Maximize2 size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Right sidebar - Properties panel */}
      <div className="hidden xl:flex w-72 flex-col border-l border-border bg-[#1a1a1a]">
        <div className="p-3 border-b border-border">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Свойства</h3>
        </div>
        <div className="p-3 space-y-4 text-xs">
          <div>
            <label className="text-muted-foreground block mb-1">Имя</label>
            <div className="p-2 bg-secondary/50 rounded text-foreground">Кирилл Савинов</div>
          </div>
          <div>
            <label className="text-muted-foreground block mb-1">Специализация</label>
            <div className="p-2 bg-secondary/50 rounded text-foreground">Режиссёр монтажа</div>
          </div>
          <div>
            <label className="text-muted-foreground block mb-1">Опыт</label>
            <div className="p-2 bg-secondary/50 rounded text-foreground">5+ лет</div>
          </div>
          <div>
            <label className="text-muted-foreground block mb-1">Локация</label>
            <div className="p-2 bg-secondary/50 rounded text-foreground">Россия</div>
          </div>
          <div>
            <label className="text-muted-foreground block mb-1">Статус</label>
            <div className="p-2 bg-accent/20 rounded text-accent flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Доступен
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
