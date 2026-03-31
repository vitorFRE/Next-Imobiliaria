"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@workspace/ui/components/button"

import { DASHBOARD_MANAGE_LISTINGS_PATH } from "@/modules/dashboard/constants/paths"

import { useNewListingDraft } from "../context/new-listing-draft-context"
import { NewListingMediaUploads } from "./new-listing-media-uploads"

type Props = {
  onBack: () => void
}

export function NewListingStepMediaForm({ onBack }: Props) {
  const router = useRouter()
  const { draft, resetDraft } = useNewListingDraft()
  const [error, setError] = useState<string | null>(null)

  function handleFinalize() {
    if (!draft.coverImageFile) {
      setError("Selecione a imagem de capa.")
      return
    }
    setError(null)
    resetDraft()
    router.push(DASHBOARD_MANAGE_LISTINGS_PATH)
    router.refresh()
  }

  return (
    <div className="space-y-10">
      <p className="max-w-xl font-sans text-sm leading-relaxed text-muted-foreground">
        Envie as fotos do imóvel a partir do seu computador. A capa é obrigatória;
        a galeria é opcional.
      </p>
      <NewListingMediaUploads />
      {error ? (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
      <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="h-auto px-10 py-5 font-heading text-xs font-bold tracking-widest uppercase"
        >
          Voltar
        </Button>
        <Button
          type="button"
          onClick={handleFinalize}
          className="h-auto px-10 py-5 font-heading text-xs font-bold tracking-widest uppercase"
        >
          Finalizar
        </Button>
      </div>
    </div>
  )
}
