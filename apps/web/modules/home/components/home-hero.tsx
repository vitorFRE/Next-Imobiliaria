import Image from "next/image"

import {
  IconBrandWhatsapp,
  IconMapPin,
  IconRosetteDiscountCheck,
} from "@tabler/icons-react"

import { Button } from "@workspace/ui/components/button"

import { HomeContainer } from "@/modules/home/components/home-container"
import { HERO_IMAGE } from "@/modules/home/constants/content"
import { cn } from "@workspace/ui/lib/utils"

export function HomeHero() {
  return (
    <header className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Residência contemporânea ao entardecer com grandes painéis de vidro"
          fill
          priority
          className="object-cover opacity-60 grayscale transition-all duration-1000 hover:grayscale-0"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-background via-background/40 to-transparent"
          aria-hidden
        />
      </div>
      <HomeContainer className="relative z-10 grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7">
          <span className="mb-6 block font-sans text-xs font-medium tracking-[0.3em] text-primary uppercase opacity-80">
            Compra e venda de imóveis
          </span>
          <h1 className="mb-8 font-heading text-5xl leading-[1.1] font-extrabold tracking-tighter text-primary md:text-7xl lg:text-8xl">
            O imóvel certo
            <br />
            para{" "}
            <span
              className={cn(
                "bg-linear-to-r from-primary to-primary/40 bg-clip-text text-transparent"
              )}
            >
              você.
            </span>
          </h1>
          <p className="mb-12 max-w-xl text-lg leading-relaxed font-light text-muted-foreground">
            Apartamentos, casas e coberturas com atendimento claro do primeiro
            contato à visita e à negociação.
          </p>
          <div className="flex flex-col gap-6 sm:flex-row">
            <Button
              className="h-auto gap-3 px-10 py-5 font-heading text-sm font-extrabold tracking-widest uppercase active:scale-95"
              variant="default"
            >
              <IconBrandWhatsapp className="size-5" stroke={1.25} />
              WhatsApp
            </Button>
            <Button
              className="h-auto border-border px-10 py-5 font-heading text-sm font-extrabold tracking-widest text-primary uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              variant="outline"
            >
              Ver Catálogo
            </Button>
          </div>
        </div>
      </HomeContainer>
      <div className="absolute right-0 bottom-10 left-0 z-10 hidden lg:block">
        <HomeContainer className="flex items-center gap-12 font-sans text-xs font-semibold tracking-[0.2em] uppercase text-foreground/90 [text-shadow:0_1px_0_rgba(255,255,255,0.85)] dark:text-shadow-none">
          <div className="flex items-center gap-3">
            <IconMapPin className="size-[18px] shrink-0" stroke={1.75} />
            São Paulo
          </div>
          <div className="flex items-center gap-3">
            <IconRosetteDiscountCheck className="size-[18px] shrink-0" stroke={1.75} />
            Assessoria completa
          </div>
        </HomeContainer>
      </div>
    </header>
  )
}
