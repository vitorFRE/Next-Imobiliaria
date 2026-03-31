import { IconMapPin } from "@tabler/icons-react"

import { BRAND } from "@/modules/core/constants/site"

type ContactMapProps = {
  embedSrc: string
}

export function ContactMap({ embedSrc }: ContactMapProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="relative h-[min(75vh,560px)] min-h-96 w-full overflow-hidden bg-muted ring-1 ring-primary/10">
        <iframe
          title={`Mapa — ${BRAND}`}
          src={embedSrc}
          className="absolute inset-0 size-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent" />
      </div>
      <div className="flex items-center gap-3 px-1">
        <IconMapPin className="size-6 shrink-0 text-primary" stroke={1.25} />
        <span className="font-sans text-[11px] font-medium tracking-[0.3em] text-muted-foreground uppercase">
          Escritório — Itaim Bibi, SP
        </span>
      </div>
    </div>
  )
}
