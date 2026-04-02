"use client"

import { useRef } from "react"

import { IconUpload } from "@tabler/icons-react"

import { Button } from "@workspace/ui/components/button"
import { FieldLabel } from "@workspace/ui/components/field"

import { useUploadThing } from "@/lib/uploadthing"

import { useNewListingDraft } from "../context/new-listing-draft-context"
import { NewListingGalleryThumb } from "./new-listing-gallery-thumb"

function pickImageFiles(list: FileList | null): File[] {
  if (!list?.length) return []
  return Array.from(list).filter((f) => f.type.startsWith("image/"))
}

type Props = {
  onUploadingChange?: (uploading: boolean) => void
}

export function NewListingGalleryUpload({ onUploadingChange }: Props) {
  const { draft, updateDraft } = useNewListingDraft()
  const inputRef = useRef<HTMLInputElement>(null)

  const { startUpload, isUploading } = useUploadThing("listingImage", {
    onClientUploadComplete: (files) => {
      const added = files.map((f) => ({
        key: f.key,
        url: f.url,
        name: f.name,
        size: f.size,
      }))
      updateDraft({ galleryImages: [...draft.galleryImages, ...added] })
      onUploadingChange?.(false)
    },
    onUploadError: () => onUploadingChange?.(false),
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = pickImageFiles(e.target.files)
    if (files.length) {
      onUploadingChange?.(true)
      startUpload(files)
    }
    e.target.value = ""
  }

  return (
    <div>
      <FieldLabel>Galeria (opcional)</FieldLabel>
      <p className="mb-4 font-sans text-xs text-muted-foreground">
        Adicione quantas fotos quiser; você pode remover antes de finalizar.
      </p>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="sr-only"
        onChange={handleChange}
      />
      <Button
        type="button"
        variant="outline"
        className="mb-6 h-auto gap-2 py-4 font-heading text-[11px] tracking-widest uppercase"
        disabled={isUploading}
        onClick={() => inputRef.current?.click()}
      >
        <IconUpload className="size-5" aria-hidden />
        {isUploading ? "Enviando..." : "Adicionar fotos à galeria"}
      </Button>
      {draft.galleryImages.length ? (
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
          {draft.galleryImages.map((img, index) => (
            <NewListingGalleryThumb
              key={img.key}
              url={img.url}
              name={img.name}
              onRemove={() =>
                updateDraft({
                  galleryImages: draft.galleryImages.filter((_, i) => i !== index),
                })
              }
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
