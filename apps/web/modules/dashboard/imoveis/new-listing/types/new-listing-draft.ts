export type ListingDraftStatus = "disponivel" | "oculto" | "vendido"

export type NewListingDraft = {
  title: string
  priceBrl: string
  cityState: string
  status: ListingDraftStatus
  bedrooms: string
  bathrooms: string
  totalAreaM2: string
  builtAreaM2: string
  totalPieces: string
  parking: "sim" | "nao"
  descriptionBody: string
  coverImageFile: File | null
  galleryImageFiles: File[]
}

export function createEmptyNewListingDraft(): NewListingDraft {
  return {
    title: "",
    priceBrl: "",
    cityState: "",
    status: "disponivel",
    bedrooms: "",
    bathrooms: "",
    totalAreaM2: "",
    builtAreaM2: "",
    totalPieces: "",
    parking: "sim",
    descriptionBody: "",
    coverImageFile: null,
    galleryImageFiles: [],
  }
}
