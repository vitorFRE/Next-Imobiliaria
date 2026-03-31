import {
  IconCamera,
  IconDots,
  IconFileText,
  IconRefresh,
  IconUserPlus,
} from "@tabler/icons-react"

import { DASHBOARD_ACTIVITIES } from "../constants/overview-mock"

const activityIcons = {
  person_add: IconUserPlus,
  update: IconRefresh,
  contract: IconFileText,
  photo_camera: IconCamera,
} as const

export function OverviewRecentActivities() {
  return (
    <section className="col-span-12 md:col-span-4">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="font-sans text-sm tracking-[0.2em] text-foreground uppercase">
          Atividades recentes
        </h3>
        <IconDots className="size-4 text-muted-foreground" aria-hidden />
      </div>
      <div className="flex flex-col gap-px border border-border/40 bg-border/30">
        {DASHBOARD_ACTIVITIES.map((item) => {
          const Icon = activityIcons[item.icon]
          return (
            <div
              key={item.title}
              className="flex gap-4 bg-muted/30 p-6 transition-colors hover:bg-muted/50"
            >
              <div className="flex size-10 shrink-0 items-center justify-center bg-muted">
                <Icon className="size-4 text-foreground" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-bold tracking-tight text-foreground">
                  {item.title}
                </p>
                <p className="mt-1 font-sans text-[0.65rem] tracking-widest text-muted-foreground uppercase">
                  {item.time}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <button
        type="button"
        className="mt-6 w-full border border-border/40 py-4 font-sans text-[0.65rem] font-bold tracking-[0.3em] uppercase transition-all hover:bg-primary hover:text-primary-foreground"
      >
        Ver todo histórico
      </button>
    </section>
  )
}
