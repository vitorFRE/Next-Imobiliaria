"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "@tanstack/react-form"
import { IconArrowRight } from "@tabler/icons-react"

import { Button } from "@workspace/ui/components/button"
import { FieldGroup } from "@workspace/ui/components/field"

import { authClient } from "@/lib/auth-client"

import { AFTER_AUTH_REDIRECT } from "../constants/paths"
import { signInSchema } from "../validation/sign-in-schema"
import { AuthFormTextField } from "./auth-form-text-field"

export function SignInForm() {
  const router = useRouter()
  const [apiError, setApiError] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: signInSchema,
    },
    onSubmit: async ({ value }) => {
      setApiError(null)
      setPending(true)
      try {
        const { error } = await authClient.signIn.email({
          email: value.email,
          password: value.password,
          callbackURL: AFTER_AUTH_REDIRECT,
        })
        if (error) {
          setApiError(error.message ?? "Não foi possível entrar.")
          return
        }
        router.push(AFTER_AUTH_REDIRECT)
        router.refresh()
      } finally {
        setPending(false)
      }
    },
  })

  return (
    <form
      className="space-y-10"
      onSubmit={(e) => {
        e.preventDefault()
        void form.handleSubmit()
      }}
      noValidate
    >
      <FieldGroup>
        <form.Field name="email">
          {(field) => (
            <AuthFormTextField
              field={field}
              label="E-mail"
              type="email"
              autoComplete="email"
              placeholder="admin@excelencia.com"
            />
          )}
        </form.Field>
        <form.Field name="password">
          {(field) => (
            <AuthFormTextField
              field={field}
              label="Senha"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
            />
          )}
        </form.Field>
      </FieldGroup>
      {apiError ? (
        <p role="alert" className="text-center text-xs text-destructive">
          {apiError}
        </p>
      ) : null}
      <div className="pt-2">
        <Button
          type="submit"
          disabled={pending}
          className="flex h-auto w-full items-center justify-center gap-3 py-5 font-heading text-sm font-bold tracking-widest uppercase"
        >
          Entrar na plataforma
          <IconArrowRight className="size-[18px]" aria-hidden />
        </Button>
      </div>
      <div className="flex flex-col items-center">
        <Link
          href="#"
          className="font-sans text-[11px] uppercase tracking-widest text-muted-foreground underline decoration-border underline-offset-8 transition-colors hover:text-primary hover:decoration-primary"
          onClick={(e) => e.preventDefault()}
        >
          Esqueceu sua senha?
        </Link>
      </div>
    </form>
  )
}
