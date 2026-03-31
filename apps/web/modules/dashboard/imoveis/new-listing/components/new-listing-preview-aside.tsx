"use client"

import Image from "next/image"
import { useEffect, useMemo } from "react"

import { PROPERTY_DETAIL_MANSION } from "@/modules/property-detail/data/property-detail-mock-mansion"

import { useNewListingDraft } from "../context/new-listing-draft-context"

const FALLBACK_IMAGE = PROPERTY_DETAIL_MANSION.gallery[0]?.image ?? ""

const statusLabel: Record<string, string> = {
  disponivel: "Disponível",
  oculto: "Oculto",
  vendido: "Vendido",
}

export function NewListingPreviewAside() {
  const { draft } = useNewListingDraft()
  const coverSrc = useMemo(
    () =>
      draft.coverImageFile
        ? URL.createObjectURL(draft.coverImageFile)
        : FALLBACK_IMAGE,
    [draft.coverImageFile],
  )
  useEffect(() => {
    if (!draft.coverImageFile) return
    return () => URL.revokeObjectURL(coverSrc)
  }, [draft.coverImageFile, coverSrc])

  const paragraphs = draft.descriptionBody
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean)

  return (
    <div className="lg:col-span-5">
      <div className="sticky top-24 space-y-8">
        <div className="relative aspect-4/5 overflow-hidden border border-border/40 bg-muted">
          <Image
            src={coverSrc}
            alt="Pré-visualização do imóvel"
            fill
            unoptimized={Boolean(draft.coverImageFile)}
            className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent" />
          <div className="absolute right-8 bottom-8 left-8 text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.85)]">
            <p className="mb-2 font-sans text-[10px] tracking-widest text-white/70 uppercase">
              Pré-visualização
            </p>
            <p className="font-heading text-lg font-bold tracking-tight uppercase">
              {draft.title.trim() || "Título do anúncio"}
            </p>
          </div>
        </div>
        <div className="border border-border/40 bg-card p-8">
          <h3 className="mb-6 border-b border-border/30 pb-4 font-sans text-xs font-bold tracking-widest uppercase">
            Resumo do imóvel
          </h3>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="mb-1 font-sans text-[10px] tracking-widest text-muted-foreground uppercase">
                Localização
              </dt>
              <dd className="text-foreground">
                {draft.cityState.trim() || "—"}
              </dd>
            </div>
            <div>
              <dt className="mb-1 font-sans text-[10px] tracking-widest text-muted-foreground uppercase">
                Valor
              </dt>
              <dd className="font-heading font-bold text-foreground">
                {draft.priceBrl.trim() ? `R$ ${draft.priceBrl.trim()}` : "—"}
              </dd>
            </div>
            <div>
              <dt className="mb-1 font-sans text-[10px] tracking-widest text-muted-foreground uppercase">
                Status
              </dt>
              <dd>{statusLabel[draft.status] ?? draft.status}</dd>
            </div>
            <div className="grid grid-cols-3 gap-2 border-y border-border/20 py-4 text-center">
              <div>
                <span className="block font-heading text-lg font-bold">
                  {draft.totalAreaM2 || "—"}
                </span>
                <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
                  m² total
                </span>
              </div>
              <div>
                <span className="block font-heading text-lg font-bold">
                  {draft.bedrooms || "—"}
                </span>
                <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
                  Dorms.
                </span>
              </div>
              <div>
                <span className="block font-heading text-lg font-bold">
                  {draft.parking === "sim" ? "Sim" : "Não"}
                </span>
                <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
                  Vaga
                </span>
              </div>
            </div>
            <div>
              <dt className="mb-1 font-sans text-[10px] tracking-widest text-muted-foreground uppercase">
                Descrição
              </dt>
              <dd className="text-xs leading-relaxed text-muted-foreground">
                {paragraphs.length ? (
                  paragraphs.map((p, i) => (
                    <p key={i} className="mb-2 last:mb-0">
                      {p}
                    </p>
                  ))
                ) : (
                  <span className="italic">
                    Texto da descrição aparece aqui.
                  </span>
                )}
              </dd>
            </div>
          </dl>
        </div>
        <div className="border-l-2 border-primary bg-muted/40 p-6">
          <p className="mb-2 font-sans text-[10px] tracking-widest text-muted-foreground uppercase">
            Dica
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Use o mesmo tipo de informação que aparece nas fichas públicas:
            medidas, dormitórios e uma descrição que destaque arquitetura e
            experiência.
          </p>
        </div>
      </div>
    </div>
  )
}
