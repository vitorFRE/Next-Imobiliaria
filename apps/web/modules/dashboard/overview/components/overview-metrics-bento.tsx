import type { ListingAdminStat } from "@/modules/dashboard/imoveis/types/listings-admin"

type Props = {
  stats: ListingAdminStat[]
}

export function OverviewMetricsBento({ stats }: Props) {
  return (
    <section className="mb-16 grid grid-cols-1 gap-px border border-border/40 bg-border/30 md:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="group bg-background p-8 transition-colors hover:bg-muted/40"
        >
          <span className="mb-6 block font-sans text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
            {stat.label}
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-4xl font-extrabold text-foreground">
              {stat.value}
            </span>
          </div>
        </div>
      ))}
    </section>
  )
}
