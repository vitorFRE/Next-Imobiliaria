import type { ComponentType } from "react"

import {
  IconBed,
  IconBath,
  IconCar,
  IconLayoutGrid,
} from "@tabler/icons-react"

import type { PropertyFeatureIcon } from "@/modules/property-detail/types/property-detail"

const map: Record<
  PropertyFeatureIcon,
  ComponentType<{ className?: string; stroke?: number }>
> = {
  bed: IconBed,
  bath: IconBath,
  car: IconCar,
  grid: IconLayoutGrid,
}

export function PropertyFeatureGlyph({
  kind,
}: {
  kind: PropertyFeatureIcon
}) {
  const Cmp = map[kind]
  return <Cmp className="size-6 shrink-0 text-primary" stroke={1.25} />
}
