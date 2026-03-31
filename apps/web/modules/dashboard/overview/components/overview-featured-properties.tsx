import Image from "next/image"

import { IconArrowUpRight } from "@tabler/icons-react"

import { DASHBOARD_FEATURED_PROPERTIES } from "../constants/overview-mock"

export function OverviewFeaturedProperties() {
  return (
    <section className="mt-20">
      <div className="mb-10 flex items-baseline gap-4">
        <h3 className="font-sans text-sm tracking-[0.2em] text-foreground uppercase">
          Propriedades em destaque
        </h3>
        <div className="h-px grow bg-border/50" />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {DASHBOARD_FEATURED_PROPERTIES.map((p) => (
          <div
            key={p.title}
            className="group relative overflow-hidden rounded-md border border-border/40 bg-card"
          >
            <div className="aspect-4/5 overflow-hidden">
              <Image
                src={p.src}
                alt={p.alt}
                width={600}
                height={750}
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-8 text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">
              <span className="mb-2 block font-sans text-[0.6rem] font-bold tracking-[0.3em] text-white/80 uppercase">
                {p.city}
              </span>
              <h4 className="mb-4 font-heading text-xl font-bold text-white">
                {p.title}
              </h4>
              <div className="flex items-end justify-between">
                <span className="font-sans text-sm text-white">{p.price}</span>
                <IconArrowUpRight
                  className="size-5 text-white opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
