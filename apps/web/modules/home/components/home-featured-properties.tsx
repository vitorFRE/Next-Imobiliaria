import Link from "next/link"

import { IconArrowRight } from "@tabler/icons-react"

import { HomeContainer } from "@/modules/home/components/home-container"
import { FEATURED_PROPERTIES } from "@/modules/home/constants/content"

import { HomePropertyCard } from "@/modules/home/components/home-property-card"

export function HomeFeaturedProperties() {
  return (
    <section className="bg-background py-32">
      <HomeContainer>
        <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div>
            <span className="mb-4 block font-sans text-xs font-medium tracking-[0.3em] text-primary/60 uppercase">
              Portfólio
            </span>
            <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
              Imóveis em Destaque
            </h2>
          </div>
          <Link
            href="/imoveis"
            className="group flex items-center gap-4 border-b border-primary/20 pb-2 font-heading text-sm font-bold tracking-widest text-primary uppercase transition-all hover:border-primary"
          >
            Ver todos os projetos
            <IconArrowRight
              className="transition-transform group-hover:translate-x-2"
              stroke={1.25}
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROPERTIES.map((property) => (
            <Link
              key={property.id}
              href={`/imoveis/${property.id}`}
              className="block outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <HomePropertyCard property={property} />
            </Link>
          ))}
        </div>
      </HomeContainer>
    </section>
  )
}
