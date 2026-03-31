import { redirect } from "next/navigation"

import { ADMIN_SIGN_IN_PATH } from "@/modules/auth/constants/paths"

export default function AdminPage() {
  redirect(ADMIN_SIGN_IN_PATH)
}
