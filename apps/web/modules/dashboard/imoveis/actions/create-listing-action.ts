"use server"

import { requireAdmin } from "@/lib/auth-guard"
import {
  createListing,
  createListingSchema,
} from "@/modules/dashboard/imoveis/services/create-listing"

export type CreateListingActionResult =
  | { ok: true; listingId: string }
  | { ok: false; error: string }

export async function createListingAction(
  raw: unknown
): Promise<CreateListingActionResult> {
  const session = await requireAdmin()

  const parsed = createListingSchema.safeParse(raw)
  if (!parsed.success) {
    return { ok: false, error: "Dados inválidos." }
  }

  try {
    const result = await createListing(parsed.data, session.user.id)
    return { ok: true, listingId: result.listingId }
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Erro ao criar imóvel."
    return { ok: false, error: message }
  }
}
