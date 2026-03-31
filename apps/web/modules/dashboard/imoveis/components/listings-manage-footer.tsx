export function ListingsManageFooter() {
  return (
    <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-border/10 pt-12 sm:flex-row sm:items-center">
      <p className="font-sans text-[10px] tracking-widest text-muted-foreground uppercase">
        Exibindo 4 de 124 propriedades
      </p>
      <div className="flex flex-wrap items-center gap-8">
        <button
          type="button"
          disabled
          className="font-sans text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase opacity-30"
        >
          Anterior
        </button>
        <div className="flex gap-4">
          <span className="border-b-2 border-primary pb-1 font-sans text-[10px] font-bold text-foreground">
            01
          </span>
          <button
            type="button"
            className="pb-1 font-sans text-[10px] font-bold text-muted-foreground uppercase transition-colors hover:text-foreground"
          >
            02
          </button>
          <button
            type="button"
            className="pb-1 font-sans text-[10px] font-bold text-muted-foreground uppercase transition-colors hover:text-foreground"
          >
            03
          </button>
        </div>
        <button
          type="button"
          className="font-sans text-[10px] font-bold tracking-[0.2em] text-foreground uppercase transition-colors hover:text-muted-foreground"
        >
          Próximo
        </button>
      </div>
    </div>
  )
}
