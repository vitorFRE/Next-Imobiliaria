import type { PropertySpec } from "@/modules/property-detail/types/property-detail"

export function PropertySpecs({ specs }: { specs: PropertySpec[] }) {
  return (
    <div className="mb-16 flex flex-wrap gap-x-16 gap-y-8 border-b border-border/30 pb-12">
      {specs.map((s) => (
        <div key={s.label} className="flex flex-col">
          <span className="mb-2 font-sans text-[10px] tracking-widest text-muted-foreground uppercase">
            {s.label}
          </span>
          <span className="font-heading text-2xl font-bold text-primary">
            {s.value}
          </span>
        </div>
      ))}
    </div>
  )
}
