"use client"

import { useState, useTransition } from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogCloseButton,
} from "@workspace/ui/components/dialog"

import { updateListingStatusAction } from "@/modules/dashboard/imoveis/actions/update-listing-status-action"
import { LISTING_STATUS_DOT_CLASSES } from "@/modules/dashboard/imoveis/constants/listing-status-dot-classes"
import type { ListingAdminStatus } from "@/modules/dashboard/imoveis/types/listings-admin"

type DbStatus = "disponivel" | "oculto" | "vendido"

const STATUS_OPTIONS: { value: DbStatus; label: string; description: string }[] = [
  {
    value: "disponivel",
    label: "Disponível",
    description: "Visível no catálogo público para todos os visitantes.",
  },
  {
    value: "oculto",
    label: "Oculto",
    description: "Não aparece no catálogo público, mas permanece cadastrado.",
  },
  {
    value: "vendido",
    label: "Vendido",
    description: "Indica que a negociação foi concluída; o imóvel deixa de aparecer como disponível.",
  },
]

function toDbStatus(s: ListingAdminStatus): DbStatus {
  if (s === "available") return "disponivel"
  if (s === "hidden") return "oculto"
  return "vendido"
}

type Props = {
  listingId: string
  listingTitle: string
  currentStatus: ListingAdminStatus
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ListingVisibilityModal({
  listingId,
  listingTitle,
  currentStatus,
  open,
  onOpenChange,
}: Props) {
  const [selected, setSelected] = useState<DbStatus>(toDbStatus(currentStatus))
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function handleSave() {
    setError(null)
    startTransition(async () => {
      const result = await updateListingStatusAction(listingId, selected)
      if (!result.ok) {
        setError(result.error)
        return
      }
      onOpenChange(false)
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div>
            <DialogTitle>Visibilidade</DialogTitle>
            <DialogDescription>{listingTitle}</DialogDescription>
          </div>
          <DialogCloseButton />
        </DialogHeader>

        <div className="space-y-3">
          {STATUS_OPTIONS.map((opt) => {
            const isActive = selected === opt.value
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setSelected(opt.value)}
                className={`w-full border p-4 text-left transition-colors ${
                  isActive
                    ? "border-primary bg-primary/5"
                    : "border-border/40 hover:border-border hover:bg-muted/30"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`size-2 shrink-0 rounded-[2px] ${LISTING_STATUS_DOT_CLASSES[opt.value]}`}
                    aria-hidden
                  />
                  <span className="font-sans text-[10px] font-bold tracking-widest uppercase">
                    {opt.label}
                  </span>
                </span>
                <p className="mt-2 pl-4 font-sans text-xs text-muted-foreground">
                  {opt.description}
                </p>
              </button>
            )
          })}
        </div>

        {error && (
          <p className="mt-3 font-sans text-xs text-destructive">{error}</p>
        )}

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="h-auto px-8 py-4 font-heading text-xs font-bold tracking-widest uppercase"
          >
            Cancelar
          </Button>
          <Button
            type="button"
            onClick={handleSave}
            disabled={isPending}
            className="h-auto px-8 py-4 font-heading text-xs font-bold tracking-widest uppercase"
          >
            {isPending ? "Salvando..." : "Confirmar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
