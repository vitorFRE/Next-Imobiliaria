import { UTApi } from "uploadthing/server"

const utapi = new UTApi()

export function extractUploadThingFileKeyFromUrl(url: string): string | null {
  try {
    const u = new URL(url.trim())
    const host = u.hostname.toLowerCase()
    const isUploadThingHost =
      host === "utfs.io" || host === "ufs.sh" || host.endsWith(".ufs.sh")
    if (!isUploadThingHost) return null
    const m = u.pathname.match(/\/f\/(.+)/)
    if (!m?.[1]) return null
    return decodeURIComponent(m[1].replace(/\/$/, ""))
  } catch {
    return null
  }
}

export async function deleteUploadThingFilesForUrls(
  urls: string[]
): Promise<void> {
  if (!process.env.UPLOADTHING_TOKEN) return
  const keys = [
    ...new Set(
      urls
        .map(extractUploadThingFileKeyFromUrl)
        .filter((k): k is string => Boolean(k))
    ),
  ]
  if (keys.length === 0) return
  try {
    await utapi.deleteFiles(keys)
  } catch {
    //
  }
}
