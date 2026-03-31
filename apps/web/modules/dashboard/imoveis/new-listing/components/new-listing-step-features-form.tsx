"use client"

import { useForm } from "@tanstack/react-form"

import { Button } from "@workspace/ui/components/button"
import { FieldGroup } from "@workspace/ui/components/field"

import { AuthFormTextField } from "@/modules/auth/components/auth-form-text-field"

import { useNewListingDraft } from "../context/new-listing-draft-context"
import { newListingStep2Schema } from "../validation/new-listing-schemas"
import { ListingFormSelect } from "./listing-form-select"
import { ListingFormTextarea } from "./listing-form-textarea"

type Props = {
  onBack: () => void
  onNext: () => void
}

export function NewListingStepFeaturesForm({ onBack, onNext }: Props) {
  const { draft, updateDraft } = useNewListingDraft()

  const form = useForm({
    defaultValues: {
      bedrooms: draft.bedrooms,
      bathrooms: draft.bathrooms,
      totalAreaM2: draft.totalAreaM2,
      builtAreaM2: draft.builtAreaM2,
      totalPieces: draft.totalPieces,
      parking: draft.parking,
      descriptionBody: draft.descriptionBody,
    },
    validators: {
      onSubmit: newListingStep2Schema,
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
      <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
        <form.Field name="bedrooms">
          {(field) => (
            <AuthFormTextField
              field={field}
              label="Dormitórios"
              type="text"
              placeholder="2"
            />
          )}
        </form.Field>
        <form.Field name="bathrooms">
          {(field) => (
            <AuthFormTextField
              field={field}
              label="Banheiros"
              type="text"
              placeholder="2"
            />
          )}
        </form.Field>
        <form.Field name="totalAreaM2">
          {(field) => (
            <AuthFormTextField
              field={field}
              label="Área total (m²)"
              placeholder="200"
            />
          )}
        </form.Field>
        <form.Field name="builtAreaM2">
          {(field) => (
            <AuthFormTextField
              field={field}
              label="Área construída (m²)"
              placeholder="120,5"
            />
          )}
        </form.Field>
        <form.Field name="totalPieces">
          {(field) => (
            <AuthFormTextField
              field={field}
              label="Peças totais"
              type="text"
              placeholder="7"
            />
          )}
        </form.Field>
        <form.Field name="parking">
          {(field) => (
            <ListingFormSelect
              field={field as never}
              label="Estacionamento"
              options={[
                { value: "sim", label: "Sim" },
                { value: "nao", label: "Não" },
              ]}
            />
          )}
        </form.Field>
      </div>
      <FieldGroup>
        <form.Field name="descriptionBody">
          {(field) => (
            <ListingFormTextarea
              field={field}
              label="Descrição"
              rows={6}
              placeholder="Conte a história do imóvel, acabamentos e diferenciais."
            />
          )}
        </form.Field>
      </FieldGroup>
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
          type="submit"
          className="h-auto px-10 py-5 font-heading text-xs font-bold tracking-widest uppercase"
        >
          Próximo passo
        </Button>
      </div>
    </form>
  )
}
