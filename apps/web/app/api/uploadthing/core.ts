import { createUploadthing, type FileRouter } from "uploadthing/next"
import { UploadThingError } from "uploadthing/server"

import { db } from "@/db/client"
import { tempUpload } from "@/db/schemas/listing-schema"
import { requireAdmin } from "@/lib/auth-guard"

const f = createUploadthing()

const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000

export const ourFileRouter = {
  listingImage: f({
    image: { maxFileSize: "8MB", maxFileCount: 20 },
  })
    .middleware(async (): Promise<{ userId: string }> => {
      try {
        const session = await requireAdmin()
        return { userId: session.user.id }
      } catch {
        throw new UploadThingError("Unauthorized")
      }
    })
    .onUploadComplete(
      async ({
        metadata,
        file,
      }: {
        metadata: { userId: string }
        file: { key: string; ufsUrl: string }
      }): Promise<{ key: string; url: string }> => {
        await db.insert(tempUpload).values({
          id: crypto.randomUUID(),
          fileKey: file.key,
          fileUrl: file.ufsUrl,
          ownerUserId: metadata.userId,
          status: "temp",
          expiresAt: new Date(Date.now() + TWENTY_FOUR_HOURS_MS),
        })
        return { key: file.key, url: file.ufsUrl }
      }
    ),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
