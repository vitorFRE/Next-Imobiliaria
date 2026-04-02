"use server"

import { requireAdmin } from "@/lib/auth-guard"
import {
  getListingForEdit,
  type ListingForEdit,
} from "@/modules/dashboard/imoveis/services/get-listing-for-edit"

export type GetListingForEditResult =
  | { ok: true; data: ListingForEdit }
  | { ok: false; error: string }

export async function getListingForEditAction(
  id: string
): Promise<GetListingForEditResult> {
  await requireAdmin()

  const data = await getListingForEdit(id)
  if (!data) return { ok: false, error: "Imóvel não encontrado." }
  return { ok: true, data }
}
