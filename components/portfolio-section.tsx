"use client"

import { useState } from "react"
import { Play, FolderOpen, Film, Music, FileVideo, Clapperboard, Grid, List } from "lucide-react"

const projects = [
  {
    title: "Коммерческая реклама",
    description: "Рекламный ролик для крупного бренда",
    category: "Реклама",
    duration: "00:30",
    icon: Film,
    color: "bg-[#4a9eff]",
  },
  {
    title: "Музыкальный клип",
    description: "Творческий подход к визуализации музыки",
    category: "Музыка",
    icon: Music,
    duration: "03:45",
    color: "bg-[#ff6b9d]",
  },
  {
    title: "Документальный фильм",
    description: "Монтаж о современном искусстве",
    category: "Документалистика",
    icon: FileVideo,
    duration: "25:00",
    color: "bg-[#50d991]",
  },
  {
    title: "Корпоративное видео",
    description: "Презентационный ролик для IT компании",
    category: "Корпоратив",
    icon: Clapperboard,
    duration: "02:15",
    color: "bg-[#ffb84d]",
  },
  {
    title: "Социальный проект",
    description: "Эмоциональная история для фонда",
    category: "Социальное",
    icon: Film,
    duration: "01:30",
    color: "bg-[#a78bfa]",
  },
  {
    title: "Короткометражка",
    description: "Авторский фильм с экспериментальным монтажом",
    category: "Кино",
    icon: Clapperboard,
    duration: "12:00",
    color: "bg-[#f472b6]",
  },
]

const categories = ["Все", "Реклама", "Музыка", "Документалистика", "Корпоратив", "Кино"]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Все")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredProjects = activeCategory === "Все" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="bg-[#0d0d0d] border-t border-border">
      <div className="flex flex-col lg:flex-row">
        {/* Left sidebar - Media Browser */}
        <div className="lg:w-64 border-r border-border bg-[#1a1a1a]">
          <div className="p-3 border-b border-border flex items-center justify-between">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
              <FolderOpen size={12} />
              Медиабраузер
            </h3>
            <div className="flex gap-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1 rounded ${viewMode === "grid" ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <Grid size={12} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1 rounded ${viewMode === "list" ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <List size={12} />
              </button>
            </div>
          </div>

          <div className="p-2">
            <div className="space-y-0.5">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full px-3 py-2 text-left text-sm rounded transition-colors ${
                    activeCategory === category
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 border-t border-border mt-4">
            <div className="text-xs text-muted-foreground space-y-1">
              <div className="flex justify-between">
                <span>Всего проектов:</span>
                <span className="text-foreground">{projects.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Показано:</span>
                <span className="text-foreground">{filteredProjects.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main content - Project grid */}
        <div className="flex-1 p-4 sm:p-6">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Портфолио</h2>
            <p className="text-muted-foreground text-sm">Избранные проекты, демонстрирующие мой подход к монтажу</p>
          </div>

          <div
            className={`grid gap-4 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`group bg-[#1a1a1a] rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all ${
                  viewMode === "list" ? "flex items-center" : ""
                }`}
              >
                {/* Thumbnail */}
                <div
                  className={`relative bg-[#252525] ${viewMode === "grid" ? "aspect-video" : "w-40 h-24 flex-shrink-0"}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon size={viewMode === "grid" ? 32 : 24} className="text-muted-foreground/50" />
                  </div>

                  {/* Color bar at top */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${project.color}`} />

                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-colors">
                      <Play size={20} className="text-primary-foreground ml-0.5" />
                    </button>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 rounded text-xs font-mono text-foreground">
                    {project.duration}
                  </div>
                </div>

                {/* Info */}
                <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-medium text-white ${project.color}`}>
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
