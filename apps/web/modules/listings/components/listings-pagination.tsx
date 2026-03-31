import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"

import { cn } from "@workspace/ui/lib/utils"

const pages = [1, 2, 3] as const

export function ListingsPagination() {
  return (
    <section className="mt-32 flex items-center justify-center gap-4">
      <button
        type="button"
        aria-label="Página anterior"
        className="flex size-12 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <IconChevronLeft className="size-5" stroke={1.5} />
      </button>
      <div className="flex gap-2">
        {pages.map((n) => (
          <button
            key={n}
            type="button"
            className={cn(
              "flex size-12 items-center justify-center font-bold transition-colors",
              n === 1
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground hover:border-primary hover:text-primary",
            )}
          >
            {n}
          </button>
        ))}
      </div>
      <button
        type="button"
        aria-label="Próxima página"
        className="flex size-12 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <IconChevronRight className="size-5" stroke={1.5} />
      </button>
    </section>
  )
}
