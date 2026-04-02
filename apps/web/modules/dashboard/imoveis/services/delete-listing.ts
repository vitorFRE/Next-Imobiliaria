import { eq } from "drizzle-orm"

import { db } from "@/db/client"
import { listing, listingMedia } from "@/db/schemas/listing-schema"
import { deleteUploadThingFilesForUrls } from "@/lib/uploadthing-delete-by-url"

export async function deleteListing(id: string) {
  const [row] = await db
    .select({ coverImageUrl: listing.coverImageUrl })
    .from(listing)
    .where(eq(listing.id, id))
    .limit(1)

  const mediaRows = await db
    .select({ imageUrl: listingMedia.imageUrl })
    .from(listingMedia)
    .where(eq(listingMedia.listingId, id))

  const urls = [
    ...(row ? [row.coverImageUrl] : []),
    ...mediaRows.map((r) => r.imageUrl),
  ]
  await deleteUploadThingFilesForUrls(urls)

  await db.delete(listingMedia).where(eq(listingMedia.listingId, id))
  await db.delete(listing).where(eq(listing.id, id))
}
