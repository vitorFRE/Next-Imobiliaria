type Props = {
  total: number
}

export function ListingsManageFooter({ total }: Props) {
  const label =
    total === 0
      ? "Nenhum imóvel no catálogo"
      : total === 1
        ? "1 imóvel listado"
        : `${total} imóveis listados`

  return (
    <div className="mt-12 border-t border-border/10 pt-12">
      <p className="font-sans text-[10px] tracking-widest text-muted-foreground uppercase">
        {label}
      </p>
    </div>
  )
}
