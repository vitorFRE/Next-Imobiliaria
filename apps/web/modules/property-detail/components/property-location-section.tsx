import { IconMapPin } from "@tabler/icons-react"

type PropertyLocationSectionProps = {
  embedSrc: string
  cardTitle: string
  cardDescription: string
}

export function PropertyLocationSection({
  embedSrc,
  cardTitle,
  cardDescription,
}: PropertyLocationSectionProps) {
  return (
    <section className="relative h-[500px] w-full overflow-hidden bg-luxury-band ring-1 ring-border/20">
      <div className="absolute inset-0 opacity-90">
        <iframe
          title={cardTitle}
          src={embedSrc}
          className="size-full border-0 contrast-125 grayscale"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-background/20" />
      <div className="absolute top-1/2 left-1/2 z-10 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-primary text-primary-foreground shadow-lg">
        <IconMapPin className="size-6" stroke={1.5} fill="currentColor" />
      </div>
      <div className="absolute bottom-8 left-0 z-10 max-w-sm border border-primary/10 bg-background/90 p-6 backdrop-blur-md">
        <h4 className="mb-2 font-heading font-bold tracking-tight text-primary uppercase">
          {cardTitle}
        </h4>
        <p className="font-sans text-xs leading-relaxed text-muted-foreground">
          {cardDescription}
        </p>
      </div>
    </section>
  )
}
