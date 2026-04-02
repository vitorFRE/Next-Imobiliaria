import type { ListingAdminStat } from "@/modules/dashboard/imoveis/types/listings-admin"

type Props = {
  stats: ListingAdminStat[]
}

export function ListingsManageStats({ stats }: Props) {
  return (
    <div className="mb-16 grid grid-cols-1 gap-px bg-border/20 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="space-y-2 bg-background p-8">
          <p className="font-sans text-[10px] tracking-widest text-muted-foreground uppercase">
            {stat.label}
          </p>
          <p className="font-heading text-3xl font-bold text-foreground">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  )
}
