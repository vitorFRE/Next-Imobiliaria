import { IconTrendingUp } from "@tabler/icons-react"

export function OverviewMetricsBento() {
  return (
    <section className="mb-16 grid grid-cols-1 gap-px border border-border/40 bg-border/30 md:grid-cols-4">
      <div className="group bg-background p-8 transition-colors hover:bg-muted/40">
        <span className="mb-6 block font-sans text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
          Total de imoveis ativos
        </span>
        <div className="flex items-baseline gap-2">
          <span className="font-heading text-4xl font-extrabold text-foreground">
            124
          </span>
          <span className="font-sans text-xs text-muted-foreground">
            +4 este mês
          </span>
        </div>
      </div>
      <div className="group bg-background p-8 transition-colors hover:bg-muted/40">
        <span className="mb-6 block font-sans text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
          Visualizacoes mensais
        </span>
        <div className="flex items-baseline gap-2">
          <span className="font-heading text-4xl font-extrabold text-foreground">
            45k
          </span>
          <IconTrendingUp className="size-4 text-primary" aria-hidden />
        </div>
      </div>
      <div className="group bg-background p-8 transition-colors hover:bg-muted/40">
        <span className="mb-6 block font-sans text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
          Leads pendentes
        </span>
        <div className="flex items-baseline gap-2">
          <span className="font-heading text-4xl font-extrabold text-foreground">
            12
          </span>
          <span className="bg-primary px-2 py-0.5 font-sans text-xs font-bold tracking-tighter text-primary-foreground">
            Urgente
          </span>
        </div>
      </div>
      <div className="group bg-background p-8 transition-colors hover:bg-muted/40">
        <span className="mb-6 block font-sans text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
          Valor total da carteira
        </span>
        <div className="flex items-baseline gap-2">
          <span className="font-heading text-4xl font-extrabold text-foreground">
            R$ 4.2B
          </span>
        </div>
      </div>
    </section>
  )
}
