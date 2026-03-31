"use client"

import type { HTMLInputTypeAttribute } from "react"

import {
  Field,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

type TextFieldApi = {
  name: string
  state: {
    value: string
    meta: { isTouched: boolean; isValid: boolean; errors: unknown[] }
  }
  handleBlur: () => void
  handleChange: (value: string) => void
}

type AuthFormTextFieldProps = {
  field: TextFieldApi
  label: string
  type?: HTMLInputTypeAttribute
  placeholder?: string
  autoComplete?: string
}

export function AuthFormTextField({
  field,
  label,
  type = "text",
  placeholder,
  autoComplete,
}: AuthFormTextFieldProps) {
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
  return (
    <Field data-invalid={isInvalid || undefined}>
      <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
      <Input
        id={field.name}
        name={field.name}
        type={type}
        autoComplete={autoComplete}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={isInvalid}
      />
      {isInvalid ? <FieldError errors={field.state.meta.errors} /> : null}
    </Field>
  )
}
