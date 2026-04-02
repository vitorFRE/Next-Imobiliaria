import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { eq } from "drizzle-orm"

import { DASHBOARD_HOME_PATH } from "@/modules/dashboard/constants/paths"
import { ADMIN_SIGN_IN_PATH } from "@/modules/auth/constants/paths"
import { db } from "@/db/client"

import { auth } from "./auth"
import { user } from "@/db/schemas/auth-schema"

export async function getCurrentSession() {
  return auth.api.getSession({
    headers: await headers(),
  })
}

export async function requireAdmin() {
  const session = await getCurrentSession()

  if (!session?.user) {
    redirect(ADMIN_SIGN_IN_PATH)
  }

  const [dbUser] = await db
    .select({ role: user.role })
    .from(user)
    .where(eq(user.id, session.user.id))
    .limit(1)

  if (!dbUser || dbUser.role !== "admin") {
    redirect(ADMIN_SIGN_IN_PATH)
  }

  return session
}

export async function redirectIfAuthenticatedAdmin() {
  const session = await getCurrentSession()

  if (!session?.user) return

  const [dbUser] = await db
    .select({ role: user.role })
    .from(user)
    .where(eq(user.id, session.user.id))
    .limit(1)

  if (dbUser?.role === "admin") redirect(DASHBOARD_HOME_PATH)
}
