import { DASHBOARD_LAST_UPDATE } from "../constants/overview-mock"

export function OverviewHero() {
  return (
    <section className="mb-16">
      <div className="flex items-end justify-between border-b border-border/40 pb-8">
        <div>
          <span className="mb-2 block font-sans text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
            Bem-vindo, administrador
          </span>
          <h2 className="font-heading text-5xl font-extrabold tracking-tighter text-foreground">
            Visão geral da carteira
          </h2>
        </div>
        <div className="text-right">
          <p className="font-sans text-xs tracking-widest text-muted-foreground uppercase">
            Última atualização
          </p>
          <p className="font-heading text-lg font-bold text-foreground">
            {DASHBOARD_LAST_UPDATE}
          </p>
        </div>
      </div>
    </section>
  )
}
