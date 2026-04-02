"use client"

import { useRef } from "react"

import { IconPhotoPlus } from "@tabler/icons-react"

import { Button } from "@workspace/ui/components/button"
import { FieldLabel } from "@workspace/ui/components/field"

import { useUploadThing } from "@/lib/uploadthing"

import { useNewListingDraft } from "../context/new-listing-draft-context"

function pickImageFile(list: FileList | null): File | null {
  if (!list?.length) return null
  return Array.from(list).find((f) => f.type.startsWith("image/")) ?? null
}

type Props = {
  onUploadingChange?: (uploading: boolean) => void
}

export function NewListingCoverUpload({ onUploadingChange }: Props) {
  const { draft, updateDraft } = useNewListingDraft()
  const inputRef = useRef<HTMLInputElement>(null)

  const { startUpload, isUploading } = useUploadThing("listingImage", {
    onClientUploadComplete: ([file]) => {
      if (!file) return
      updateDraft({
        coverImage: { key: file.key, url: file.url, name: file.name, size: file.size },
      })
      onUploadingChange?.(false)
    },
    onUploadError: () => onUploadingChange?.(false),
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = pickImageFile(e.target.files)
    if (file) {
      onUploadingChange?.(true)
      startUpload([file])
    }
    e.target.value = ""
  }

  return (
    <div>
      <FieldLabel>Imagem de capa</FieldLabel>
      <p className="mb-4 font-sans text-xs text-muted-foreground">
        Uma foto principal para o anúncio (JPG, PNG ou WebP).
      </p>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={handleChange}
      />
      {draft.coverImage ? (
        <div className="flex flex-wrap items-center gap-4">
          <span className="max-w-xs truncate font-sans text-sm text-foreground">
            {isUploading ? "Enviando..." : draft.coverImage.name}
          </span>
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={isUploading}
            onClick={() => inputRef.current?.click()}
          >
            Trocar
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={isUploading}
            onClick={() => updateDraft({ coverImage: null })}
          >
            Remover
          </Button>
        </div>
      ) : (
        <Button
          type="button"
          variant="outline"
          className="h-auto gap-2 py-4 font-heading text-[11px] tracking-widest uppercase"
          disabled={isUploading}
          onClick={() => inputRef.current?.click()}
        >
          <IconPhotoPlus className="size-5" aria-hidden />
          {isUploading ? "Enviando..." : "Selecionar imagem de capa"}
        </Button>
      )}
    </div>
  )
}
