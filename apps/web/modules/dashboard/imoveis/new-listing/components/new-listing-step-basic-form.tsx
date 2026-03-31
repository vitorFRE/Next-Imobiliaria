"use client"

import Link from "next/link"
import { useForm } from "@tanstack/react-form"

import { Button } from "@workspace/ui/components/button"
import { FieldGroup } from "@workspace/ui/components/field"

import { DASHBOARD_MANAGE_LISTINGS_PATH } from "@/modules/dashboard/constants/paths"
import { AuthFormTextField } from "@/modules/auth/components/auth-form-text-field"

import { useNewListingDraft } from "../context/new-listing-draft-context"
import { newListingStep1Schema } from "../validation/new-listing-schemas"
import { ListingFormSelect } from "./listing-form-select"

type Props = {
  onNext: () => void
}

export function NewListingStepBasicForm({ onNext }: Props) {
  const { draft, updateDraft, resetDraft } = useNewListingDraft()

  const form = useForm({
    defaultValues: {
      title: draft.title,
      priceBrl: draft.priceBrl,
      cityState: draft.cityState,
      status: draft.status,
    },
    validators: {
      onSubmit: newListingStep1Schema,
    },
    onSubmit: async ({ value }) => {
      updateDraft(value)
      onNext()
    },
  })

  return (
    <form
      className="space-y-12"
      onSubmit={(e) => {
        e.preventDefault()
        void form.handleSubmit()
      }}
      noValidate
    >
      <FieldGroup>
        <form.Field name="title">
          {(field) => (
            <AuthFormTextField
              field={field}
              label="Nome da propriedade"
              placeholder="Ex.: Vila Monolito Azur"
            />
          )}
        </form.Field>
        <form.Field name="priceBrl">
          {(field) => (
            <AuthFormTextField
              field={field}
              label="Valor (BRL)"
              placeholder="24500000"
            />
          )}
        </form.Field>
        <form.Field name="cityState">
          {(field) => (
            <AuthFormTextField
              field={field}
              label="Cidade / estado"
              placeholder="São Paulo / SP"
            />
          )}
        </form.Field>
        <form.Field name="status">
          {(field) => (
            <ListingFormSelect
              field={field as never}
              label="Status do imóvel"
              options={[
                { value: "disponivel", label: "Disponível" },
                { value: "oculto", label: "Oculto" },
                { value: "vendido", label: "Vendido" },
              ]}
            />
          )}
        </form.Field>
      </FieldGroup>
      <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href={DASHBOARD_MANAGE_LISTINGS_PATH}
          onClick={() => resetDraft()}
          className="font-sans text-[11px] tracking-widest text-muted-foreground uppercase underline decoration-border underline-offset-8 transition-colors hover:text-foreground"
        >
          Descartar rascunho
        </Link>
        <Button
          type="submit"
          className="h-auto gap-3 px-10 py-5 font-heading text-xs font-bold tracking-widest uppercase"
        >
          Próximo passo
        </Button>
      </div>
    </form>
  )
}
