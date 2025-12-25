"use client"

import { useState } from "react"
import { Layers, Sliders, Palette, Sparkles, ChevronRight } from "lucide-react"

const skillCategories = [
  {
    title: "Монтаж",
    icon: Layers,
    color: "bg-[#4a9eff]",
    skills: [
      { name: "Adobe Premiere Pro", level: 95 },
      { name: "DaVinci Resolve", level: 90 },
      { name: "Final Cut Pro", level: 85 },
      { name: "Avid Media Composer", level: 75 },
    ],
  },
  {
    title: "Постпродакшн",
    icon: Sparkles,
    color: "bg-[#ff6b9d]",
    skills: [
      { name: "After Effects", level: 90 },
      { name: "Motion Design", level: 85 },
      { name: "VFX Compositing", level: 80 },
      { name: "3D Integration", level: 70 },
    ],
  },
  {
    title: "Цветокоррекция",
    icon: Palette,
    color: "bg-[#50d991]",
    skills: [
      { name: "Color Grading", level: 92 },
      { name: "DaVinci Resolve Color", level: 90 },
      { name: "Lumetri Color", level: 88 },
      { name: "LUT Creation", level: 82 },
    ],
  },
  {
    title: "Саунд-дизайн",
    icon: Sliders,
    color: "bg-[#ffb84d]",
    skills: [
      { name: "Audio Mixing", level: 85 },
      { name: "Sound Effects", level: 80 },
      { name: "Adobe Audition", level: 85 },
      { name: "Music Selection", level: 90 },
    ],
  },
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="bg-[#0d0d0d] border-t border-border">
      <div className="flex flex-col lg:flex-row">
        {/* Left panel - Effects Browser style */}
        <div className="lg:w-72 border-r border-border bg-[#1a1a1a]">
          <div className="p-3 border-b border-border">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
              <Sliders size={12} />
              Навыки и инструменты
            </h3>
          </div>

          <div className="p-2">
            {skillCategories.map((category, index) => (
              <button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all ${
                  activeCategory === index ? "bg-secondary" : "hover:bg-secondary/50"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg ${category.color} flex items-center justify-center`}>
                  <category.icon size={16} className="text-white" />
                </div>
                <div className="flex-1 text-left">
                  <div
                    className={`text-sm font-medium ${activeCategory === index ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    {category.title}
                  </div>
                  <div className="text-xs text-muted-foreground">{category.skills.length} навыков</div>
                </div>
                <ChevronRight
                  size={14}
                  className={`text-muted-foreground transition-transform ${activeCategory === index ? "rotate-90" : ""}`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Main content - Skill details */}
        <div className="flex-1 p-6 sm:p-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`w-12 h-12 rounded-xl ${skillCategories[activeCategory].color} flex items-center justify-center`}
              >
                {(() => {
                  const Icon = skillCategories[activeCategory].icon
                  return <Icon size={24} className="text-white" />
                })()}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{skillCategories[activeCategory].title}</h2>
                <p className="text-sm text-muted-foreground">Профессиональные навыки</p>
              </div>
            </div>

            <div className="space-y-4">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${skillCategories[activeCategory].color}`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Additional info */}
            <div className="mt-8 p-4 bg-secondary/30 rounded-lg border border-border">
              <h4 className="text-sm font-semibold mb-2">Дополнительно</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Постоянно совершенствую навыки и изучаю новые инструменты. Слежу за трендами индустрии и применяю
                современные техники в работе.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
