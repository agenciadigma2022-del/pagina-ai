"use server"

import { redirect } from "next/navigation"
import { createAuthClient } from "@/lib/supabase-auth"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3004"

export async function signInWithPassword(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const client = await createAuthClient()

  const { error } = await client.auth.signInWithPassword({ email, password })
  if (error) return { error: error.message }

  redirect("/dashboard")
}

export async function signUpWithPassword(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const client = await createAuthClient()

  const { error } = await client.auth.signUp({
    email,
    password,
    options: { emailRedirectTo: `${SITE_URL}/auth/callback` },
  })

  if (error) return { error: error.message }
  return { success: true }
}

export async function signInWithGoogle() {
  const client = await createAuthClient()

  const { data, error } = await client.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: `${SITE_URL}/auth/callback` },
  })

  if (error || !data.url) return { error: error?.message ?? "Erro ao iniciar login com Google" }
  redirect(data.url)
}

export async function signOut() {
  const client = await createAuthClient()
  await client.auth.signOut()
  redirect("/login")
}
