"use client"

import { useEffect, useState } from "react"
import { IconLoader2 } from "@tabler/icons-react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogCloseButton,
} from "@workspace/ui/components/dialog"

import { getListingForEditAction } from "@/modules/dashboard/imoveis/actions/get-listing-for-edit-action"
import type { ListingForEdit } from "@/modules/dashboard/imoveis/services/get-listing-for-edit"
import { ListingEditForm, toListingFormValues } from "./listing-edit-form"

type Props = {
  listingId: string
  listingTitle: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ListingEditModal({ listingId, listingTitle, open, onOpenChange }: Props) {
  const [loading, setLoading] = useState(false)
  const [fetchError, setFetchError] = useState<string | null>(null)
  const [listingData, setListingData] = useState<ListingForEdit | null>(null)

  useEffect(() => {
    if (!open) return

    setLoading(true)
    setFetchError(null)
    setListingData(null)

    getListingForEditAction(listingId).then((result) => {
      setLoading(false)
      if (!result.ok) {
        setFetchError(result.error)
        return
      }
      setListingData(result.data)
    })
  }, [open, listingId])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <div>
            <DialogTitle>Editar imóvel</DialogTitle>
            <DialogDescription>{listingTitle}</DialogDescription>
          </div>
          <DialogCloseButton />
        </DialogHeader>

        {loading && (
          <div className="flex items-center justify-center py-16">
            <IconLoader2 className="size-6 animate-spin text-muted-foreground" />
          </div>
        )}

        {fetchError && !loading && (
          <p className="py-8 text-center font-sans text-xs text-destructive">{fetchError}</p>
        )}

        {listingData && !loading && (
          <ListingEditForm
            key={listingId}
            listingId={listingId}
            initialValues={toListingFormValues(listingData)}
            onSuccess={() => onOpenChange(false)}
            onCancel={() => onOpenChange(false)}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
