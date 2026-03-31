import { AuthPageShell } from "@/modules/auth/components/auth-page-shell"
import { SignInForm } from "@/modules/auth/components/sign-in-form"

export default function AdminSignInPage() {
  return (
    <AuthPageShell title="Login administrativo" subtitle="Acesso administrativo">
      <SignInForm />
    </AuthPageShell>
  )
}
