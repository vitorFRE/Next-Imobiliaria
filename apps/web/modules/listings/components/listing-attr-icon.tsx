import type { ReactNode } from "react"

import {
  IconBed,
  IconBuildingSkyscraper,
  IconCar,
  IconPool,
  IconRuler2,
  IconTrees,
  IconWaveSine,
} from "@tabler/icons-react"

import type { ListingAttrIcon as AttrIconKind } from "@/modules/listings/types/listing"

const deckIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M4 20h16M6 16v-4M10 16V8M14 16v-6M18 16v-2" />
  </svg>
)

const map: Record<AttrIconKind, ReactNode> = {
  area: <IconRuler2 className="size-[18px] text-muted-foreground" stroke={1.25} />,
  bed: <IconBed className="size-[18px] text-muted-foreground" stroke={1.25} />,
  car: <IconCar className="size-[18px] text-muted-foreground" stroke={1.25} />,
  pool: <IconPool className="size-[18px] text-muted-foreground" stroke={1.25} />,
  deck: (
    <span className="text-muted-foreground [&>svg]:block">{deckIcon}</span>
  ),
  forest: <IconTrees className="size-[18px] text-muted-foreground" stroke={1.25} />,
  waves: (
    <IconWaveSine className="size-[18px] text-muted-foreground" stroke={1.25} />
  ),
  apartment: (
    <IconBuildingSkyscraper
      className="size-[18px] text-muted-foreground"
      stroke={1.25}
    />
  ),
}

export function ListingAttributeIcon({ icon }: { icon: AttrIconKind }) {
  return map[icon]
}
