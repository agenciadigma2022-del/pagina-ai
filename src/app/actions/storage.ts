"use server"

import { createAuthClient } from "@/lib/supabase-auth"
import { createServerClient as createServiceClient } from "@/lib/supabase-server"

export async function uploadSiteImage(
  formData: FormData
): Promise<{ url?: string; error?: string }> {
  const authClient = await createAuthClient()
  const { data: { user } } = await authClient.auth.getUser()
  if (!user) return { error: "Não autenticado" }

  const file = formData.get("file") as File
  if (!file || file.size === 0) return { error: "Nenhum arquivo selecionado" }
  if (file.size > 5 * 1024 * 1024) return { error: "Imagem muito grande (máx 5 MB)" }
  if (!file.type.startsWith("image/")) return { error: "Só imagens são permitidas" }

  const client = createServiceClient()
  if (!client) return { error: "Storage não configurado" }

  const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg"
  const path = `${user.id}/${Date.now()}.${ext}`

  const { data, error } = await client.storage
    .from("site-images")
    .upload(path, file, { contentType: file.type, upsert: false })

  if (error) return { error: error.message }

  const { data: { publicUrl } } = client.storage
    .from("site-images")
    .getPublicUrl(data.path)

  return { url: publicUrl }
}
