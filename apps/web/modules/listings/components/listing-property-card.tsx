import Image from "next/image"
import Link from "next/link"

import { IconMessage } from "@tabler/icons-react"

import { ListingAttributeIcon } from "@/modules/listings/components/listing-attr-icon"
import type { PropertyListing } from "@/modules/listings/types/listing"
import { whatsAppLinkForProperty } from "@/modules/listings/utils/whatsapp-property-link"
import { cn } from "@workspace/ui/lib/utils"

export function ListingPropertyCard({ listing }: { listing: PropertyListing }) {
  const waHref = whatsAppLinkForProperty(listing.title)

  return (
    <article
      className={cn("group", listing.staggerMd && "md:mt-12")}
    >
      <div className="relative aspect-4/5 overflow-hidden bg-muted">
        <Link
          href={`/imoveis/${listing.id}`}
          className="absolute inset-0 block outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Image
            src={listing.image}
            alt={listing.imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-luxury-deep to-transparent opacity-60" />
          <div className="absolute bottom-6 left-6 bg-primary px-4 py-2 font-heading text-xs font-bold tracking-tighter text-primary-foreground uppercase">
            {listing.badge}
          </div>
        </Link>
        <a
          href={waHref}
          target="_blank"
          rel="noreferrer noopener"
          className="absolute right-6 bottom-6 z-10 flex size-12 items-center justify-center bg-primary text-primary-foreground transition-colors hover:bg-[#25D366] hover:text-white"
          aria-label={`WhatsApp — ${listing.title}`}
        >
          <IconMessage className="size-5" stroke={1.25} />
        </a>
      </div>
      <Link
        href={`/imoveis/${listing.id}`}
        className="mt-6 block outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <div className="mb-2 flex items-start justify-between gap-4">
          <h3 className="font-heading text-2xl font-bold tracking-tight uppercase">
            {listing.title}
          </h3>
          <span className="shrink-0 font-heading text-lg font-bold">
            {listing.price}
          </span>
        </div>
        <p className="mb-4 font-sans text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">
          {listing.location}
        </p>
        <div className="flex flex-wrap gap-6 border-t border-border/50 pt-4">
          {listing.attributes.map((attr, i) => (
            <div key={`${listing.id}-${i}-${attr.label}`} className="flex items-center gap-2">
              <ListingAttributeIcon icon={attr.icon} />
              <span className="text-[11px] font-medium tracking-wider">
                {attr.label}
              </span>
            </div>
          ))}
        </div>
      </Link>
    </article>
  )
}
