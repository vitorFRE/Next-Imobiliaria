"use client"

import Link from "next/link"

import { IconPlus } from "@tabler/icons-react"

import { DASHBOARD_NEW_LISTING_PATH } from "@/modules/dashboard/constants/paths"
import { buttonVariants } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

export function ListingsManageHero() {
  return (
    <div className="mb-16 flex flex-col justify-between gap-8 border-b border-border/30 pb-12 md:flex-row md:items-end">
      <div className="space-y-4">
        <span className="block font-sans text-[10px] font-bold tracking-[0.4em] text-muted-foreground uppercase">
          Catálogo exclusivo
        </span>
        <h1 className="font-heading text-5xl font-extrabold tracking-tighter text-foreground">
          Gerenciar imóveis
        </h1>
        <p className="max-w-md font-sans text-sm leading-relaxed text-muted-foreground">
          Controle total sobre o seu portfólio de luxo. Visualize, edite e organize
          propriedades de alto padrão com precisão técnica.
        </p>
      </div>
      <div>
        <Link
          href={DASHBOARD_NEW_LISTING_PATH}
          className={cn(
            buttonVariants({ variant: "default" }),
            "inline-flex h-auto items-center gap-3 px-8 py-4 font-heading text-xs font-bold tracking-widest uppercase",
          )}
        >
          <IconPlus className="size-5" stroke={2.5} aria-hidden />
          Adicionar novo imóvel
        </Link>
      </div>
    </div>
  )
}
