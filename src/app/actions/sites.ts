"use server"

import { createServerClient as createServiceClient } from "@/lib/supabase-server"
import { createAuthClient } from "@/lib/supabase-auth"
import { Block, Palette } from "@/types"

interface SiteRow {
  id: string
  slug: string
  title: string
  niche: string | null
  blocks: Block[]
  palette: Palette
  updated_at: string
}

export async function saveSite(
  id: string,
  slug: string,
  title: string,
  niche: string,
  blocks: Block[],
  palette: Palette
): Promise<{ ok: boolean; error?: string }> {
  const authClient = await createAuthClient()
  const { data: { user } } = await authClient.auth.getUser()
  if (!user) return { ok: false, error: "Não autenticado" }

  const client = createServiceClient()
  if (!client) return { ok: false, error: "Supabase não configurado" }

  const { error } = await client
    .from("sites")
    .upsert({ id, slug, title, niche, blocks, palette, user_id: user.id }, { onConflict: "id" })

  if (error) {
    if (error.code === "23505") return { ok: false, error: "Esse endereço já está em uso. Escolha outro." }
    return { ok: false, error: error.message }
  }
  return { ok: true }
}

export async function getSite(id: string): Promise<SiteRow | null> {
  const client = createServiceClient()
  if (!client) return null

  const { data, error } = await client
    .from("sites")
    .select("*")
    .eq("id", id)
    .single()

  if (error || !data) return null
  return data as SiteRow
}

export async function getSiteBySlug(slug: string): Promise<SiteRow | null> {
  const client = createServiceClient()
  if (!client) return null

  const { data, error } = await client
    .from("sites")
    .select("*")
    .eq("slug", slug)
    .single()

  if (error || !data) return null
  return data as SiteRow
}

export async function checkSlugAvailable(slug: string, currentId: string): Promise<boolean> {
  const client = createServiceClient()
  if (!client) return false

  const { data } = await client
    .from("sites")
    .select("id")
    .eq("slug", slug)
    .neq("id", currentId)
    .maybeSingle()

  return !data
}

export async function getUserSites(): Promise<SiteRow[]> {
  const authClient = await createAuthClient()
  const { data: { user } } = await authClient.auth.getUser()
  if (!user) return []

  const client = createServiceClient()
  if (!client) return []

  const { data, error } = await client
    .from("sites")
    .select("id, slug, title, niche, palette, updated_at")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false })

  if (error || !data) return []
  return data as SiteRow[]
}
