import { LISTINGS_ADMIN_STATS } from "../constants/listings-admin-mock"

export function ListingsManageStats() {
  return (
    <div className="mb-16 grid grid-cols-1 gap-px bg-border/20 md:grid-cols-4">
      {LISTINGS_ADMIN_STATS.map((stat) => (
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
