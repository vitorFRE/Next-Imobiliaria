"use client"

import { useRef } from "react"

import { IconPhotoPlus, IconUpload } from "@tabler/icons-react"

import { Button } from "@workspace/ui/components/button"
import { FieldLabel } from "@workspace/ui/components/field"

import { useNewListingDraft } from "../context/new-listing-draft-context"
import { NewListingGalleryThumb } from "./new-listing-gallery-thumb"

function pickImageFiles(list: FileList | null): File[] {
  if (!list?.length) return []
  return Array.from(list).filter((f) => f.type.startsWith("image/"))
}

export function NewListingMediaUploads() {
  const { draft, updateDraft } = useNewListingDraft()
  const coverInputRef = useRef<HTMLInputElement>(null)
  const galleryInputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="space-y-10">
      <input
        ref={coverInputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={(e) => {
          const [file] = pickImageFiles(e.target.files)
          if (file) updateDraft({ coverImageFile: file })
          e.target.value = ""
        }}
      />
      <input
        ref={galleryInputRef}
        type="file"
        accept="image/*"
        multiple
        className="sr-only"
        onChange={(e) => {
          const added = pickImageFiles(e.target.files)
          if (added.length) {
            updateDraft({
              galleryImageFiles: [...draft.galleryImageFiles, ...added],
            })
          }
          e.target.value = ""
        }}
      />

      <div>
        <FieldLabel>Imagem de capa</FieldLabel>
        <p className="mb-4 font-sans text-xs text-muted-foreground">
          Uma foto principal para o anúncio (JPG, PNG ou WebP).
        </p>
        {draft.coverImageFile ? (
          <div className="flex flex-wrap items-center gap-4">
            <span className="max-w-xs truncate font-sans text-sm text-foreground">
              {draft.coverImageFile.name}
            </span>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => coverInputRef.current?.click()}
            >
              Trocar
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => updateDraft({ coverImageFile: null })}
            >
              Remover
            </Button>
          </div>
        ) : (
          <Button
            type="button"
            variant="outline"
            className="h-auto gap-2 py-4 font-heading text-[11px] tracking-widest uppercase"
            onClick={() => coverInputRef.current?.click()}
          >
            <IconPhotoPlus className="size-5" aria-hidden />
            Selecionar imagem de capa
          </Button>
        )}
      </div>

      <div>
        <FieldLabel>Galeria (opcional)</FieldLabel>
        <p className="mb-4 font-sans text-xs text-muted-foreground">
          Adicione quantas fotos quiser; você pode remover antes de finalizar.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mb-6 h-auto gap-2 py-4 font-heading text-[11px] tracking-widest uppercase"
          onClick={() => galleryInputRef.current?.click()}
        >
          <IconUpload className="size-5" aria-hidden />
          Adicionar fotos à galeria
        </Button>
        {draft.galleryImageFiles.length ? (
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
            {draft.galleryImageFiles.map((file, index) => (
              <NewListingGalleryThumb
                key={`${file.name}-${file.size}-${index}`}
                file={file}
                onRemove={() =>
                  updateDraft({
                    galleryImageFiles: draft.galleryImageFiles.filter(
                      (_, i) => i !== index,
                    ),
                  })
                }
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
