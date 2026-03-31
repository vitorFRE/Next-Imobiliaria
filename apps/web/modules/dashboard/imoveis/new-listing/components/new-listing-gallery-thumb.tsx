"use client"

import Image from "next/image"
import { useEffect, useMemo } from "react"

import { IconX } from "@tabler/icons-react"

import { Button } from "@workspace/ui/components/button"

type Props = {
  file: File
  onRemove: () => void
}

export function NewListingGalleryThumb({ file, onRemove }: Props) {
  const url = useMemo(() => URL.createObjectURL(file), [file])
  useEffect(() => () => URL.revokeObjectURL(url), [url])

  return (
    <div className="group relative aspect-square overflow-hidden border border-border/40 bg-muted">
      <Image src={url} alt="" fill unoptimized className="object-cover" sizes="96px" />
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
