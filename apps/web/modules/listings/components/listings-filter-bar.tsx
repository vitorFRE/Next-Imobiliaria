"use client"

import type { ReactNode } from "react"

import {
  IconCash,
  IconFilterOff,
  IconHome2,
  IconMapPin,
} from "@tabler/icons-react"

import { Button } from "@workspace/ui/components/button"

import { ListingsFilterFieldSelect } from "@/modules/listings/components/listings-filter-field-select"
import {
  LISTING_BAIRROS,
  LISTING_PRICE_OPTIONS,
  LISTING_PROPERTY_TYPES,
} from "@/modules/listings/constants/listings-data"
import { cn } from "@workspace/ui/lib/utils"

const fieldWrap =
  "flex min-h-18 flex-1 items-center gap-3 border-border/25 bg-background px-5 py-3.5 md:border-r md:px-7 md:py-4"

type ListingsFilterBarProps = {
  bairro: string
  tipo: string
  priceMax: string
  onBairroChange: (v: string) => void
  onTipoChange: (v: string) => void
  onPriceMaxChange: (v: string) => void
  onClearFilters: () => void
}

function FieldShell({
  icon,
  label,
  children,
  className,
}: {
  icon: ReactNode
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn(fieldWrap, className)}>
      <span className="shrink-0 text-muted-foreground/90">{icon}</span>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 pr-0.5">
        <span className="font-sans text-[9px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
          {label}
        </span>
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  )
}

export function ListingsFilterBar({
  bairro,
  tipo,
  priceMax,
  onBairroChange,
  onTipoChange,
  onPriceMaxChange,
  onClearFilters,
}: ListingsFilterBarProps) {
  return (
    <div className="space-y-1 bg-luxury-band p-2 md:flex md:items-stretch md:space-y-0 md:p-3">
      <FieldShell
        icon={<IconMapPin className="size-4.5" stroke={1.4} />}
        label="Bairro"
      >
        <ListingsFilterFieldSelect
          options={LISTING_BAIRROS}
          value={bairro}
          onValueChange={onBairroChange}
          ariaLabel="Bairro"
        />
      </FieldShell>
      <FieldShell icon={<IconHome2 className="size-4.5" stroke={1.4} />} label="Tipo">
        <ListingsFilterFieldSelect
          options={LISTING_PROPERTY_TYPES}
          value={tipo}
          onValueChange={onTipoChange}
          ariaLabel="Tipo de imóvel"
        />
      </FieldShell>
      <FieldShell
        icon={<IconCash className="size-4.5" stroke={1.4} />}
        label="Preço Máximo"
      >
        <ListingsFilterFieldSelect
          options={LISTING_PRICE_OPTIONS}
          value={priceMax}
          onValueChange={onPriceMaxChange}
          ariaLabel="Preço máximo"
        />
      </FieldShell>
      <Button
        type="button"
        variant="outline"
        onClick={onClearFilters}
        className="group h-auto min-h-18 shrink-0 self-stretch border-border/70 px-6 py-4 font-heading text-[11px] font-semibold tracking-[0.16em] uppercase hover:bg-muted/70 md:px-7"
      >
        <IconFilterOff
          className="mr-1.5 size-3.5 shrink-0"
          stroke={1.6}
          aria-hidden
        />
        <span>Limpar filtros</span>
      </Button>
    </div>
  )
}
