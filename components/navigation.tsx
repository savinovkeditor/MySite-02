"use client"

import { useState } from "react"
import {
  Film,
  Scissors,
  Eye,
  Settings,
  HelpCircle,
  ChevronDown,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Square,
  Maximize2,
  Volume2,
} from "lucide-react"

const menuItems = [
  { label: "Файл", shortcut: "F", items: ["О себе", "Портфолио", "Контакты"] },
  { label: "Редактирование", shortcut: "E", items: ["Навыки", "Опыт"] },
  { label: "Вид", shortcut: "V", items: ["Проекты", "Таймлайн"] },
  { label: "Справка", shortcut: "H", items: ["Связаться"] },
]

export function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const scrollToSection = (id: string) => {
    const sectionMap: Record<string, string> = {
      "О себе": "about",
      Портфолио: "portfolio",
      Контакты: "contact",
      Навыки: "skills",
      Опыт: "about",
      Проекты: "portfolio",
      Таймлайн: "timeline",
      Связаться: "contact",
    }
    const element = document.getElementById(sectionMap[id] || "hero")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setActiveMenu(null)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] border-b border-border">
      {/* Main menu bar */}
      <div className="flex items-center h-8 px-2 text-xs">
        {/* Logo */}
        <div className="flex items-center gap-2 px-3 text-primary font-semibold">
          <Film size={14} />
          <span>SAVINOV.EDIT</span>
        </div>

        {/* Menu items */}
        <div className="flex items-center">
          {menuItems.map((menu) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => setActiveMenu(menu.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="px-3 py-1.5 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                {menu.label}
                <ChevronDown size={10} />
              </button>

              {activeMenu === menu.label && (
                <div className="absolute top-full left-0 bg-[#252525] border border-border rounded-sm shadow-xl min-w-[160px] py-1">
                  {menu.items.map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="w-full px-3 py-1.5 text-left text-muted-foreground hover:bg-primary/20 hover:text-foreground transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Playback controls */}
        <div className="flex items-center gap-1 px-2 border-l border-border">
          <button className="p-1.5 hover:bg-secondary rounded transition-colors text-muted-foreground hover:text-foreground">
            <SkipBack size={12} />
          </button>
          <button
            className="p-1.5 hover:bg-secondary rounded transition-colors text-muted-foreground hover:text-foreground"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={12} /> : <Play size={12} />}
          </button>
          <button className="p-1.5 hover:bg-secondary rounded transition-colors text-muted-foreground hover:text-foreground">
            <Square size={10} />
          </button>
          <button className="p-1.5 hover:bg-secondary rounded transition-colors text-muted-foreground hover:text-foreground">
            <SkipForward size={12} />
          </button>
        </div>

        {/* Timecode */}
        <div className="px-3 font-mono text-[10px] text-primary border-l border-border">00:00:00:00</div>

        {/* Right controls */}
        <div className="flex items-center gap-1 px-2 border-l border-border">
          <button className="p-1.5 hover:bg-secondary rounded transition-colors text-muted-foreground hover:text-foreground">
            <Volume2 size={12} />
          </button>
          <button className="p-1.5 hover:bg-secondary rounded transition-colors text-muted-foreground hover:text-foreground">
            <Maximize2 size={12} />
          </button>
        </div>
      </div>

      {/* Tool bar */}
      <div className="flex items-center h-10 px-2 bg-[#1e1e1e] border-t border-border/50 gap-1">
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary/50 hover:bg-secondary rounded text-xs text-muted-foreground hover:text-foreground transition-colors">
          <Scissors size={14} />
          <span className="hidden sm:inline">Монтаж</span>
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-secondary rounded text-xs text-muted-foreground hover:text-foreground transition-colors">
          <Eye size={14} />
          <span className="hidden sm:inline">Превью</span>
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-secondary rounded text-xs text-muted-foreground hover:text-foreground transition-colors">
          <Settings size={14} />
          <span className="hidden sm:inline">Эффекты</span>
        </button>

        <div className="flex-1" />

        <button
          onClick={() => scrollToSection("Связаться")}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/20 hover:bg-primary/30 text-primary rounded text-xs transition-colors"
        >
          <HelpCircle size={14} />
          <span>Связаться</span>
        </button>
      </div>
    </nav>
  )
}
