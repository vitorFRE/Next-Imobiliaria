"use client"

import Link from "next/link"

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"

import { cn } from "@workspace/ui/lib/utils"

import type { CatalogFilters } from "@/modules/listings/services/catalog-listing-where"
import { buildCatalogQueryString } from "@/modules/listings/utils/catalog-search-params"

type Props = {
  page: number
  totalPages: number
  filters: CatalogFilters
}

function hrefForPage(page: number, filters: CatalogFilters) {
  const q = buildCatalogQueryString(page, filters)
  return q ? `/imoveis?${q}` : "/imoveis"
}

function visiblePageNumbers(page: number, total: number): number[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const size = 5
  let start = Math.max(1, Math.min(page - 2, total - size + 1))
  const end = Math.min(total, start + size - 1)
  start = Math.max(1, end - size + 1)
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

export function ListingsPagination({ page, totalPages, filters }: Props) {
  if (totalPages <= 1) return null

  const nums = visiblePageNumbers(page, totalPages)

  return (
    <section className="mt-32 flex flex-col items-center gap-8">
      <p className="font-sans text-xs tracking-widest text-muted-foreground uppercase">
        Página {page} de {totalPages}
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link
          href={hrefForPage(Math.max(1, page - 1), filters)}
          aria-label="Página anterior"
          className={cn(
            "flex size-12 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary",
            page <= 1 && "pointer-events-none opacity-40"
          )}
        >
          <IconChevronLeft className="size-5" stroke={1.5} />
        </Link>
        <div className="flex gap-2">
          {nums.map((n) => (
            <Link
              key={n}
              href={hrefForPage(n, filters)}
              className={cn(
                "flex size-12 items-center justify-center font-bold transition-colors",
                n === page
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
              )}
            >
              {n}
            </Link>
          ))}
        </div>
        <Link
          href={hrefForPage(Math.min(totalPages, page + 1), filters)}
          aria-label="Próxima página"
          className={cn(
            "flex size-12 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary",
            page >= totalPages && "pointer-events-none opacity-40"
          )}
        >
          <IconChevronRight className="size-5" stroke={1.5} />
        </Link>
      </div>
    </section>
  )
}
