import Image from "next/image"

import { IconBed, IconRuler2 } from "@tabler/icons-react"

import {
  Card,
  CardContent,
  CardFooter,
} from "@workspace/ui/components/card"

type Property = {
  id: string
  image: string
  location: string
  title: string
  area: string
  beds: string
  price: string
}

export function HomePropertyCard({ property }: { property: Property }) {
  return (
    <Card className="cursor-pointer gap-0 border-0 bg-transparent p-0 shadow-none ring-0">
      <CardContent className="relative mb-6 aspect-4/5 overflow-hidden bg-luxury-band p-0">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-700 group-hover/card:scale-110"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-luxury-deep to-transparent opacity-90" />
        <div className="absolute right-0 bottom-0 left-0 translate-y-4 p-8 transition-transform duration-500 group-hover/card:translate-y-0">
          <span className="mb-2 block font-sans text-xs tracking-widest text-primary/80 uppercase">
            {property.location}
          </span>
          <p className="mb-4 font-heading text-2xl font-bold text-primary">
            {property.title}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center gap-6 border-t border-border/30 bg-transparent px-0 pt-6 pb-0">
        <div className="flex items-center gap-2">
          <IconRuler2 className="size-4 opacity-50" stroke={1.25} />
          <span className="font-sans text-[10px] tracking-widest uppercase">
            {property.area}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <IconBed className="size-4 opacity-50" stroke={1.25} />
          <span className="font-sans text-[10px] tracking-widest uppercase">
            {property.beds}
          </span>
        </div>
        <div className="ml-auto">
          <span className="font-heading text-lg font-bold text-primary">
            {property.price}
          </span>
        </div>
      </CardFooter>
    </Card>
  )
}
