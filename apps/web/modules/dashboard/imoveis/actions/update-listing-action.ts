"use server"

import { revalidatePath } from "next/cache"

import { requireAdmin } from "@/lib/auth-guard"
import {
  updateListing,
  updateListingSchema,
} from "@/modules/dashboard/imoveis/services/update-listing"

export type UpdateListingActionResult =
  | { ok: true }
  | { ok: false; error: string }

export async function updateListingAction(
  id: string,
  raw: unknown
): Promise<UpdateListingActionResult> {
  await requireAdmin()

  const parsed = updateListingSchema.safeParse(raw)
  if (!parsed.success) return { ok: false, error: "Dados inválidos." }

  try {
    await updateListing(id, parsed.data)
    revalidatePath("/dashboard/imoveis")
    return { ok: true }
  } catch {
    return { ok: false, error: "Erro ao atualizar imóvel." }
  }
}
