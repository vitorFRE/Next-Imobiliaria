"use server"

import { revalidatePath } from "next/cache"

import { requireAdmin } from "@/lib/auth-guard"
import { deleteListing } from "@/modules/dashboard/imoveis/services/delete-listing"

export type DeleteListingActionResult =
  | { ok: true }
  | { ok: false; error: string }

export async function deleteListingAction(
  id: string
): Promise<DeleteListingActionResult> {
  await requireAdmin()

  try {
    await deleteListing(id)
    revalidatePath("/dashboard/imoveis")
    return { ok: true }
  } catch {
    return { ok: false, error: "Erro ao excluir imóvel." }
  }
}
