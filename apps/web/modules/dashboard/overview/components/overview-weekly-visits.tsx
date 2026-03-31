type DayBar = {
  label: string
  height: string
  highlight?: boolean
  tooltip?: string
}

const DAYS: DayBar[] = [
  { label: "Seg", height: "h-32" },
  { label: "Ter", height: "h-48" },
  { label: "Qua", height: "h-64", highlight: true, tooltip: "1.2k" },
  { label: "Qui", height: "h-40" },
  { label: "Sex", height: "h-56" },
  { label: "Sab", height: "h-24" },
  { label: "Dom", height: "h-16" },
]

export function OverviewWeeklyVisits() {
  return (
    <section className="col-span-12 md:col-span-8">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="flex items-center gap-4 font-sans text-sm tracking-[0.2em] text-foreground uppercase">
          <span className="h-px w-8 bg-foreground" />
          Visitas semanais
        </h3>
        <div className="flex gap-4">
          <button
            type="button"
            className="border-b border-foreground pb-1 font-sans text-[0.65rem] font-bold tracking-widest uppercase"
          >
            Semanas
          </button>
          <button
            type="button"
            className="font-sans text-[0.65rem] font-bold tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
          >
            Meses
          </button>
        </div>
      </div>
      <div className="relative flex aspect-21/9 items-end justify-between border border-border/40 bg-muted/30 p-12">
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-12 py-16 opacity-20">
          <div className="w-full border-t border-foreground/20" />
          <div className="w-full border-t border-foreground/20" />
          <div className="w-full border-t border-foreground/20" />
        </div>
        {DAYS.map((day) => (
          <div
            key={day.label}
            className="z-10 flex w-full flex-col items-center gap-4"
          >
            <div
              className={`relative w-full bg-foreground/10 transition-all duration-500 hover:bg-primary ${day.height} ${day.highlight ? "bg-primary" : ""}`}
            >
              {day.tooltip ? (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary px-2 py-1 font-sans text-[0.6rem] font-black text-primary-foreground">
                  {day.tooltip}
                </div>
              ) : null}
            </div>
            <span
              className={`font-sans text-[0.6rem] tracking-widest uppercase ${day.highlight ? "text-foreground" : "text-muted-foreground"}`}
            >
              {day.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
