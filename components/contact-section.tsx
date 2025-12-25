import { Mail, MessageSquare, Send, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#0d0d0d] border-t border-border">
      <div className="flex flex-col lg:flex-row">
        {/* Left panel - Contact info */}
        <div className="lg:w-80 border-r border-border bg-[#1a1a1a]">
          <div className="p-3 border-b border-border">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
              <Send size={12} />
              Контакты
            </h3>
          </div>

          <div className="p-4 space-y-4">
            <a
              href="mailto:savinov@example.com"
              className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-sm text-foreground">savinov@example.com</div>
              </div>
            </a>

            <a
              href="https://t.me/yourusername"
              className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <MessageSquare size={18} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Telegram</div>
                <div className="text-sm text-foreground">@yourusername</div>
              </div>
            </a>

            <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
              <div className="w-10 h-10 rounded-lg bg-chart-4/20 flex items-center justify-center text-chart-4">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Локация</div>
                <div className="text-sm text-foreground">Россия, Москва</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
              <div className="w-10 h-10 rounded-lg bg-chart-3/20 flex items-center justify-center text-chart-3">
                <Clock size={18} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Время ответа</div>
                <div className="text-sm text-foreground">В течение 24 часов</div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs text-accent">Открыт для проектов</span>
            </div>
            <p className="text-xs text-muted-foreground">Готов обсудить ваш проект и предложить решение</p>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6 sm:p-8 lg:p-12 flex items-center justify-center">
          <div className="max-w-xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Готов к сотрудничеству
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
              Давайте создадим что-то
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">невероятное</span>
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Открыт для новых проектов и сотрудничества. Напишите мне, и мы обсудим, как я могу помочь воплотить ваши
              идеи в жизнь.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Mail size={18} />
                Написать письмо
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                <MessageSquare size={18} />
                Telegram
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="h-12 bg-[#1a1a1a] border-t border-border flex items-center justify-between px-4 text-xs text-muted-foreground">
        <span>© 2025 Кирилл Савинов</span>
        <span>Сделано с любовью к монтажу</span>
      </footer>
    </section>
  )
}
