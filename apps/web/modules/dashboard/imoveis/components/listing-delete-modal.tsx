"use client"

import { useState, useTransition } from "react"
import { IconAlertTriangle } from "@tabler/icons-react"

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

import { deleteListingAction } from "@/modules/dashboard/imoveis/actions/delete-listing-action"

type Props = {
  listingId: string
  listingTitle: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ListingDeleteModal({
  listingId,
  listingTitle,
  open,
  onOpenChange,
}: Props) {
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function handleDelete() {
    setError(null)
    startTransition(async () => {
      const result = await deleteListingAction(listingId)
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
            <DialogTitle>Excluir imóvel</DialogTitle>
            <DialogDescription>{listingTitle}</DialogDescription>
          </div>
          <DialogCloseButton />
        </DialogHeader>

        <div className="space-y-5">
          <p className="font-sans text-sm leading-relaxed text-muted-foreground">
            Essa ação é <strong className="text-foreground">permanente</strong>{" "}
            e não pode ser desfeita. Todos os dados e mídias associados serão
            removidos.
          </p>

          <div className="flex gap-3 border border-border/40 bg-muted/30 p-4">
            <IconAlertTriangle
              className="mt-0.5 size-4 shrink-0 text-muted-foreground"
              aria-hidden
            />
            <div className="space-y-1">
              <p className="font-sans text-[10px] font-bold tracking-widest text-foreground uppercase">
                Considere outra opção
              </p>
              <p className="font-sans text-xs leading-relaxed text-muted-foreground">
                Você pode marcar o imóvel como{" "}
                <strong className="text-foreground">Vendido</strong> pelo botão
                de visibilidade. Isso preserva o histórico sem excluir
                permanentemente.
              </p>
            </div>
          </div>
        </div>

        {error && (
          <p className="mt-3 font-sans text-xs text-destructive">{error}</p>
        )}

        <DialogFooter className="mt-8 grid w-full grid-cols-2 gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="h-auto min-w-0 w-full shrink px-4 py-4 text-center font-heading text-xs font-bold tracking-widest uppercase whitespace-normal"
          >
            Cancelar
          </Button>
          <Button
            type="button"
            variant="destructive"
            onClick={handleDelete}
            disabled={isPending}
            className="h-auto min-w-0 w-full shrink px-4 py-4 text-center font-heading text-xs font-bold tracking-widest uppercase whitespace-normal"
          >
            {isPending ? "Excluindo..." : "Excluir permanentemente"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
