"use server"

import { redirect } from "next/navigation"
import { createAuthClient } from "@/lib/supabase-auth"

export async function sendMagicLink(formData: FormData) {
  const email = formData.get("email") as string
  const client = await createAuthClient()

  const { error } = await client.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3004"}/auth/callback`,
    },
  })

  if (error) {
    return { error: error.message }
  }

  return { success: true }
}

export async function signOut() {
  const client = await createAuthClient()
  await client.auth.signOut()
  redirect("/login")
}
