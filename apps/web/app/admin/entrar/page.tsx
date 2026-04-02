import { AuthPageShell } from "@/modules/auth/components/auth-page-shell"
import { SignInForm } from "@/modules/auth/components/sign-in-form"
import { redirectIfAuthenticatedAdmin } from "@/lib/auth-guard"

export default async function AdminSignInPage() {
  await redirectIfAuthenticatedAdmin()

  return (
    <AuthPageShell title="Login administrativo" subtitle="Acesso administrativo">
      <SignInForm />
    </AuthPageShell>
  )
}
