"use client"

import { useState, useTransition } from "react"
import { useForm } from "@tanstack/react-form"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { DialogFooter } from "@workspace/ui/components/dialog"

import type { ListingForEdit } from "@/modules/dashboard/imoveis/services/get-listing-for-edit"
import { updateListingAction } from "@/modules/dashboard/imoveis/actions/update-listing-action"

type FormValues = {
  title: string
  priceBrl: string
  cityState: string
  status: "disponivel" | "oculto" | "vendido"
  bedrooms: string
  bathrooms: string
  totalAreaM2: string
  builtAreaM2: string
  totalPieces: string
  parking: "sim" | "nao"
  descriptionBody: string
}

export function toListingFormValues(data: ListingForEdit): FormValues {
  return {
    title: data.title,
    priceBrl: String(data.priceBrl),
    cityState: data.cityState,
    status: data.status,
    bedrooms: String(data.bedrooms),
    bathrooms: String(data.bathrooms),
    totalAreaM2: String(data.totalAreaM2),
    builtAreaM2: String(data.builtAreaM2),
    totalPieces: String(data.totalPieces),
    parking: data.hasParking ? "sim" : "nao",
    descriptionBody: data.descriptionBody,
  }
}

type Props = {
  listingId: string
  initialValues: FormValues
  onSuccess: () => void
  onCancel: () => void
}

const SEL =
  "w-full cursor-pointer appearance-none border-0 border-b border-border bg-transparent py-3 pr-8 font-light text-foreground outline-none transition-colors focus:border-primary"

export function ListingEditForm({ listingId, initialValues, onSuccess, onCancel }: Props) {
  const [isPending, startTransition] = useTransition()
  const [submitError, setSubmitError] = useState<string | null>(null)

  const form = useForm({
    defaultValues: initialValues,
    onSubmit: async ({ value }) => {
      setSubmitError(null)
      startTransition(async () => {
        const result = await updateListingAction(listingId, {
          title: value.title,
          priceBrl: Number(value.priceBrl),
          cityState: value.cityState,
          status: value.status,
          bedrooms: Number(value.bedrooms),
          bathrooms: Number(value.bathrooms),
          totalAreaM2: Number(value.totalAreaM2),
          builtAreaM2: Number(value.builtAreaM2),
          totalPieces: Number(value.totalPieces),
          hasParking: value.parking === "sim",
          descriptionBody: value.descriptionBody,
        })
        if (!result.ok) { setSubmitError(result.error); return }
        onSuccess()
      })
    },
  })

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); void form.handleSubmit() }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <form.Field name="title">
          {(field) => (
            <Field className="sm:col-span-2">
              <FieldLabel htmlFor={field.name}>Nome da propriedade</FieldLabel>
              <Input id={field.name} value={field.state.value} onBlur={field.handleBlur} onChange={(e) => field.handleChange(e.target.value)} placeholder="Ex.: Vila Monolito Azur" />
            </Field>
          )}
        </form.Field>
        <form.Field name="priceBrl">
          {(field) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Valor (BRL)</FieldLabel>
              <Input id={field.name} value={field.state.value} onBlur={field.handleBlur} onChange={(e) => field.handleChange(e.target.value)} placeholder="24500000" />
            </Field>
          )}
        </form.Field>
        <form.Field name="cityState">
          {(field) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Cidade / estado</FieldLabel>
              <Input id={field.name} value={field.state.value} onBlur={field.handleBlur} onChange={(e) => field.handleChange(e.target.value)} placeholder="São Paulo / SP" />
            </Field>
          )}
        </form.Field>
        <form.Field name="status">
          {(field) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Status</FieldLabel>
              <select id={field.name} value={field.state.value} onBlur={field.handleBlur} onChange={(e) => field.handleChange(e.target.value as FormValues["status"])} className={SEL}>
                <option value="disponivel">Disponível</option>
                <option value="oculto">Oculto</option>
                <option value="vendido">Vendido</option>
              </select>
            </Field>
          )}
        </form.Field>
        <form.Field name="bedrooms">
          {(field) => (<Field><FieldLabel htmlFor={field.name}>Dormitórios</FieldLabel><Input id={field.name} value={field.state.value} onBlur={field.handleBlur} onChange={(e) => field.handleChange(e.target.value)} placeholder="2" /></Field>)}
        </form.Field>
        <form.Field name="bathrooms">
          {(field) => (<Field><FieldLabel htmlFor={field.name}>Banheiros</FieldLabel><Input id={field.name} value={field.state.value} onBlur={field.handleBlur} onChange={(e) => field.handleChange(e.target.value)} placeholder="2" /></Field>)}
        </form.Field>
        <form.Field name="totalAreaM2">
          {(field) => (<Field><FieldLabel htmlFor={field.name}>Área total (m²)</FieldLabel><Input id={field.name} value={field.state.value} onBlur={field.handleBlur} onChange={(e) => field.handleChange(e.target.value)} placeholder="200" /></Field>)}
        </form.Field>
        <form.Field name="builtAreaM2">
          {(field) => (<Field><FieldLabel htmlFor={field.name}>Área construída (m²)</FieldLabel><Input id={field.name} value={field.state.value} onBlur={field.handleBlur} onChange={(e) => field.handleChange(e.target.value)} placeholder="120" /></Field>)}
        </form.Field>
        <form.Field name="totalPieces">
          {(field) => (<Field><FieldLabel htmlFor={field.name}>Peças totais</FieldLabel><Input id={field.name} value={field.state.value} onBlur={field.handleBlur} onChange={(e) => field.handleChange(e.target.value)} placeholder="7" /></Field>)}
        </form.Field>
        <form.Field name="parking">
          {(field) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Estacionamento</FieldLabel>
              <select id={field.name} value={field.state.value} onBlur={field.handleBlur} onChange={(e) => field.handleChange(e.target.value as FormValues["parking"])} className={SEL}>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
            </Field>
          )}
        </form.Field>
        <form.Field name="descriptionBody">
          {(field) => (
            <Field className="sm:col-span-2">
              <FieldLabel htmlFor={field.name}>Descrição</FieldLabel>
              <textarea id={field.name} rows={4} value={field.state.value} onBlur={field.handleBlur} onChange={(e) => field.handleChange(e.target.value)} placeholder="Descreva o imóvel..." className="w-full resize-none border-0 border-b border-border bg-transparent py-3 font-light text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary" />
            </Field>
          )}
        </form.Field>
      </div>
      {submitError && <p className="font-sans text-xs text-destructive">{submitError}</p>}
      <DialogFooter>
        <Button type="button" variant="outline" onClick={onCancel} className="h-auto px-8 py-4 font-heading text-xs font-bold tracking-widest uppercase">
          Cancelar
        </Button>
        <Button type="submit" disabled={isPending} className="h-auto px-8 py-4 font-heading text-xs font-bold tracking-widest uppercase">
          {isPending ? "Salvando..." : "Salvar alterações"}
        </Button>
      </DialogFooter>
    </form>
  )
}
