"use client"

import Image from "next/image"

import { IconX } from "@tabler/icons-react"

import { Button } from "@workspace/ui/components/button"

type Props = {
  url: string
  name: string
  onRemove: () => void
}

export function NewListingGalleryThumb({ url, name, onRemove }: Props) {
  return (
    <div className="group relative aspect-square overflow-hidden border border-border/40 bg-muted">
      <Image
        src={url}
        alt={name}
        fill
        className="object-cover"
        sizes="96px"
      />
      <Button
        type="button"
        variant="secondary"
        size="icon-xs"
        className="absolute top-1 right-1 size-7 opacity-0 transition-opacity group-hover:opacity-100"
        onClick={onRemove}
        title="Remover"
      >
        <IconX className="size-3.5" aria-hidden />
      </Button>
    </div>
  )
}
