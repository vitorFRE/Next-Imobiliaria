export type ListingAdminStatus = "available" | "hidden" | "sold"

export type ListingAdminRow = {
  title: string
  listingId: string
  listingCode: string
  location: string
  status: ListingAdminStatus
  price: string
  imageSrc: string
  imageAlt: string
}

export type ListingAdminStat = {
  label: string
  value: string
}

export type ListingStatusCounts = {
  disponivel: number
  oculto: number
  vendido: number
}

export type ListingMonthlyCount = {
  month: string
  count: number
}
