"use server"

import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

import { db } from "@/db/client"
import { listing } from "@/db/schemas/listing-schema"
import { requireAdmin } from "@/lib/auth-guard"

export type UpdateListingStatusResult =
  | { ok: true }
  | { ok: false; error: string }

export async function updateListingStatusAction(
  id: string,
  status: "disponivel" | "oculto" | "vendido"
): Promise<UpdateListingStatusResult> {
  await requireAdmin()

  try {
    await db
      .update(listing)
      .set({ status })
      .where(eq(listing.id, id))

    revalidatePath("/dashboard/imoveis")
    return { ok: true }
  } catch {
    return { ok: false, error: "Erro ao atualizar status." }
  }
}
