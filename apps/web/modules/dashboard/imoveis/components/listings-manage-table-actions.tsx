"use client"

import { useState } from "react"
import { IconEdit, IconEye, IconTrash } from "@tabler/icons-react"

import { Button } from "@workspace/ui/components/button"

import type { ListingAdminRow } from "@/modules/dashboard/imoveis/types/listings-admin"
import { ListingEditModal } from "./listing-edit-modal"
import { ListingVisibilityModal } from "./listing-visibility-modal"
import { ListingDeleteModal } from "./listing-delete-modal"

type Modal = "edit" | "visibility" | "delete" | null

export function ListingsManageRowActions({ row }: { row: ListingAdminRow }) {
  const [openModal, setOpenModal] = useState<Modal>(null)

  return (
    <>
      <div className="flex justify-end gap-2 opacity-0 transition-opacity group-hover:opacity-100">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="size-9 rounded-none text-muted-foreground hover:text-foreground"
          title="Editar"
          onClick={() => setOpenModal("edit")}
        >
          <IconEdit className="size-5" aria-hidden />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="size-9 rounded-none text-muted-foreground hover:text-foreground"
          title="Visibilidade / status"
          onClick={() => setOpenModal("visibility")}
        >
          <IconEye className="size-5" aria-hidden />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="size-9 rounded-none text-muted-foreground hover:text-destructive"
          title="Excluir"
          onClick={() => setOpenModal("delete")}
        >
          <IconTrash className="size-5" aria-hidden />
        </Button>
      </div>

      <ListingEditModal
        listingId={row.listingId}
        listingTitle={row.title}
        open={openModal === "edit"}
        onOpenChange={(v) => setOpenModal(v ? "edit" : null)}
      />

      <ListingVisibilityModal
        listingId={row.listingId}
        listingTitle={row.title}
        currentStatus={row.status}
        open={openModal === "visibility"}
        onOpenChange={(v) => setOpenModal(v ? "visibility" : null)}
      />

      <ListingDeleteModal
        listingId={row.listingId}
        listingTitle={row.title}
        open={openModal === "delete"}
        onOpenChange={(v) => setOpenModal(v ? "delete" : null)}
      />
    </>
  )
}
