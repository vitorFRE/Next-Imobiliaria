export type PropertyGallerySlide = {
  image: string
  imageAlt: string
  label: string
  heading: string
}

export type PropertySpec = {
  label: string
  value: string
}

export type PropertyFeatureIcon = "bed" | "bath" | "car" | "grid"

export type PropertyFeature = {
  icon: PropertyFeatureIcon
  label: string
}

export type PropertyLocationBlock = {
  embedQuery: string
  cardTitle: string
  cardDescription: string
}

export type PropertyDetail = {
  id: string
  title: string
  location: string
  price: string
  gallery: PropertyGallerySlide[]
  specs: PropertySpec[]
  descriptionTitle: string
  description: string[]
  features: PropertyFeature[]
  map: PropertyLocationBlock
}
