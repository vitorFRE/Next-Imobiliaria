"use client"

import {
  Field,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"
import { cn } from "@workspace/ui/lib/utils"

type TextareaFieldApi = {
  name: string
  state: {
    value: string
    meta: { isTouched: boolean; isValid: boolean; errors: unknown[] }
  }
  handleBlur: () => void
  handleChange: (value: string) => void
}

type ListingFormTextareaProps = {
  field: TextareaFieldApi
  label: string
  placeholder?: string
  rows?: number
}

export function ListingFormTextarea({
  field,
  label,
  placeholder,
  rows = 5,
}: ListingFormTextareaProps) {
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
  return (
    <Field data-invalid={isInvalid || undefined}>
      <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
      <textarea
        id={field.name}
        name={field.name}
        rows={rows}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={isInvalid}
        className={cn(
          "w-full resize-none border-0 border-b border-border bg-transparent px-0 py-3 font-light text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus-visible:ring-0",
        )}
      />
      {isInvalid ? <FieldError errors={field.state.meta.errors} /> : null}
    </Field>
  )
}
