"use client"

import {
  Field,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"
import { cn } from "@workspace/ui/lib/utils"

type SelectFieldApi = {
  name: string
  state: {
    value: string
    meta: { isTouched: boolean; isValid: boolean; errors: unknown[] }
  }
  handleBlur: () => void
  handleChange: (value: unknown) => void
}

type Option = { value: string; label: string }

type ListingFormSelectProps = {
  field: SelectFieldApi
  label: string
  options: Option[]
}

export function ListingFormSelect({
  field,
  label,
  options,
}: ListingFormSelectProps) {
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
  return (
    <Field data-invalid={isInvalid || undefined}>
      <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
      <select
        id={field.name}
        name={field.name}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        aria-invalid={isInvalid}
        className={cn(
          "w-full cursor-pointer appearance-none border-0 border-b border-border bg-transparent py-3 pr-8 font-light text-foreground outline-none transition-colors focus:border-primary focus-visible:ring-0",
        )}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {isInvalid ? <FieldError errors={field.state.meta.errors} /> : null}
    </Field>
  )
}
