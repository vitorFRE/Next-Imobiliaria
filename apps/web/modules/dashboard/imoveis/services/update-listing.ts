import { eq } from "drizzle-orm"
import { z } from "zod"

import { db } from "@/db/client"
import { listing } from "@/db/schemas/listing-schema"

export const updateListingSchema = z.object({
  title: z.string().min(1, "Nome é obrigatório"),
  priceBrl: z.coerce.number().int().positive("Valor deve ser positivo"),
  cityState: z.string().min(1, "Localização é obrigatória"),
  status: z.enum(["disponivel", "oculto", "vendido"]),
  bedrooms: z.coerce.number().int().min(0),
  bathrooms: z.coerce.number().int().min(0),
  totalAreaM2: z.coerce.number().positive(),
  builtAreaM2: z.coerce.number().positive(),
  totalPieces: z.coerce.number().int().min(0),
  hasParking: z.boolean(),
  descriptionBody: z.string(),
})

export type UpdateListingInput = z.infer<typeof updateListingSchema>

export async function updateListing(id: string, input: UpdateListingInput) {
  await db
    .update(listing)
    .set(input)
    .where(eq(listing.id, id))
}
