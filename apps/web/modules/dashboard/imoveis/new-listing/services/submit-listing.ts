import { createListingAction } from "@/modules/dashboard/imoveis/actions/create-listing-action"

import type { NewListingDraft } from "../types/new-listing-draft"

export type SubmitListingError = {
  message: string
}

export async function submitListing(
  draft: NewListingDraft
): Promise<{ listingId: string } | SubmitListingError> {
  if (!draft.coverImage) {
    return { message: "Selecione a imagem de capa." }
  }

  const payload = {
    title: draft.title,
    priceBrl: Number(draft.priceBrl.replace(/\D/g, "")),
    cityState: draft.cityState,
    status: draft.status,
    bedrooms: Number(draft.bedrooms),
    bathrooms: Number(draft.bathrooms),
    totalAreaM2: Number(draft.totalAreaM2),
    builtAreaM2: Number(draft.builtAreaM2),
    totalPieces: Number(draft.totalPieces),
    hasParking: draft.parking === "sim",
    descriptionBody: draft.descriptionBody,
    coverImageKey: draft.coverImage.key,
    galleryImageKeys: draft.galleryImages.map((img) => img.key),
  }

  const result = await createListingAction(payload)

  if (!result.ok) {
    return { message: result.error }
  }

  return { listingId: result.listingId }
}
