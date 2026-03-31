import type {
  ListingAttrIcon,
  PropertyListing,
} from "@/modules/listings/types/listing"
import type {
  PropertyDetail,
  PropertyFeatureIcon,
} from "@/modules/property-detail/types/property-detail"
import { buildMapsEmbedSrc } from "@/modules/property-detail/utils/maps-embed"

function attrToFeatureIcon(icon: ListingAttrIcon): PropertyFeatureIcon {
  if (icon === "bed") return "bed"
  if (icon === "car") return "car"
  return "grid"
}

function specsFromListing(l: PropertyListing) {
  const rows: { label: string; value: string }[] = []
  for (const a of l.attributes) {
    if (a.icon === "area") rows.push({ label: "Área", value: a.label })
    if (a.icon === "bed") rows.push({ label: "Dormitórios", value: a.label })
    if (a.icon === "car") rows.push({ label: "Vagas", value: a.label })
  }
  if (rows.length === 0) {
    rows.push({ label: "Detalhes", value: "Sob consulta" })
  }
  return rows
}

export function propertyDetailFromListing(l: PropertyListing): PropertyDetail {
  return {
    id: l.id,
    title: l.title,
    location: l.location,
    price: l.price,
    gallery: [
      {
        image: l.image,
        imageAlt: l.imageAlt,
        label: l.location,
        heading: l.title,
      },
    ],
    specs: specsFromListing(l),
    descriptionTitle: l.title,
    description: [
      "Informações completas deste imóvel estarão disponíveis em breve. Fale com nosso time para agenda privada e documentação.",
    ],
    features: l.attributes.map((a) => ({
      icon: attrToFeatureIcon(a.icon),
      label: a.label,
    })),
    map: {
      embedQuery: l.location,
      cardTitle: "Localização",
      cardDescription:
        "Agende uma visita para conhecer o entorno e a posição estratégica deste imóvel.",
    },
  }
}

export function mapEmbedSrcForProperty(detail: PropertyDetail): string {
  return buildMapsEmbedSrc(detail.map.embedQuery)
}
