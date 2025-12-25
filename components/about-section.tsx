import { Film, Award, Users, Clock, Target } from "lucide-react"

const stats = [
  { icon: Film, label: "Проектов", value: "100+", color: "text-primary" },
  { icon: Award, label: "Наград", value: "15+", color: "text-accent" },
  { icon: Users, label: "Клиентов", value: "50+", color: "text-chart-4" },
  { icon: Clock, label: "Лет опыта", value: "5+", color: "text-chart-3" },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-[#0d0d0d]">
      <div className="flex flex-col lg:flex-row">
        {/* Left panel - Info */}
        <div className="lg:w-80 border-r border-border bg-[#1a1a1a]">
          <div className="p-3 border-b border-border">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
              <Target size={12} />О себе
            </h3>
          </div>

          <div className="p-4 space-y-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <div className={`w-10 h-10 rounded-lg bg-secondary flex items-center justify-center ${stat.color}`}>
                  <stat.icon size={18} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6 sm:p-8 lg:p-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="text-xs text-primary font-medium uppercase tracking-wider">Биография</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Профессиональный режиссёр монтажа</h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Я специализируюсь на создании визуального контента, который не просто привлекает внимание, но и
                рассказывает истории. От концепции до финальной цветокоррекции — я работаю над каждым этапом
                производства, чтобы создать нечто уникальное и запоминающееся.
              </p>
              <p>
                За более чем 5 лет работы в индустрии я сотрудничал с ведущими брендами и творческими агентствами,
                участвовал в международных фестивалях и коммерческих проектах различного масштаба.
              </p>
            </div>

            {/* Skills preview */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Коммерческая реклама",
                "Музыкальные клипы",
                "Документалистика",
                "Корпоративное видео",
                "Социальные проекты",
                "Кино",
              ].map((item) => (
                <div
                  key={item}
                  className="px-3 py-2 bg-secondary/50 rounded text-sm text-center hover:bg-secondary transition-colors"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
