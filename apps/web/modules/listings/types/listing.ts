export type ListingAttrIcon =
  | "area"
  | "bed"
  | "car"
  | "pool"
  | "deck"
  | "forest"
  | "waves"
  | "apartment"

export type ListingAttribute = {
  icon: ListingAttrIcon
  label: string
}

export type PropertyListing = {
  id: string
  image: string
  imageAlt: string
  title: string
  price: string
  location: string
  badge: string
  staggerMd?: boolean
  attributes: ListingAttribute[]
}
