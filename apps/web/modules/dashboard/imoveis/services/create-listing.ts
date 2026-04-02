import { and, eq, inArray } from "drizzle-orm"
import { z } from "zod"

import { db } from "@/db/client"
import { listing, listingMedia, tempUpload } from "@/db/schemas/listing-schema"

export const createListingSchema = z.object({
  title: z.string().min(1),
  priceBrl: z.coerce.number().int().positive(),
  cityState: z.string().min(1),
  status: z.enum(["disponivel", "oculto", "vendido"]),
  bedrooms: z.coerce.number().int().min(0),
  bathrooms: z.coerce.number().int().min(0),
  totalAreaM2: z.coerce.number().positive(),
  builtAreaM2: z.coerce.number().positive(),
  totalPieces: z.coerce.number().int().min(0),
  hasParking: z.boolean(),
  descriptionBody: z.string(),
  coverImageKey: z.string().min(1),
  galleryImageKeys: z.array(z.string()),
})

export type CreateListingInput = z.infer<typeof createListingSchema>

export async function createListing(input: CreateListingInput, userId: string) {
  const allKeys = [input.coverImageKey, ...input.galleryImageKeys]

  const uploads = await db
    .select()
    .from(tempUpload)
    .where(
      and(
        inArray(tempUpload.fileKey, allKeys),
        eq(tempUpload.ownerUserId, userId),
        eq(tempUpload.status, "temp")
      )
    )

  const uploadMap = new Map(uploads.map((u) => [u.fileKey, u]))

  const coverUpload = uploadMap.get(input.coverImageKey)
  if (!coverUpload) throw new Error("Cover image not found or unauthorized")

  const listingId = crypto.randomUUID()

  await db.insert(listing).values({
    id: listingId,
    title: input.title,
    priceBrl: input.priceBrl,
    cityState: input.cityState,
    status: input.status,
    bedrooms: input.bedrooms,
    bathrooms: input.bathrooms,
    totalAreaM2: input.totalAreaM2,
    builtAreaM2: input.builtAreaM2,
    totalPieces: input.totalPieces,
    hasParking: input.hasParking,
    descriptionBody: input.descriptionBody,
    coverImageUrl: coverUpload.fileUrl,
    createdByUserId: userId,
  })

  const galleryEntries = input.galleryImageKeys.flatMap((key, index) => {
    const upload = uploadMap.get(key)
    if (!upload) return []
    return [{ id: crypto.randomUUID(), listingId, imageUrl: upload.fileUrl, sortOrder: index }]
  })

  if (galleryEntries.length) {
    await db.insert(listingMedia).values(galleryEntries)
  }

  await db
    .update(tempUpload)
    .set({ status: "attached", attachedListingId: listingId })
    .where(
      and(
        inArray(tempUpload.fileKey, allKeys),
        eq(tempUpload.ownerUserId, userId)
      )
    )

  return { listingId }
}
