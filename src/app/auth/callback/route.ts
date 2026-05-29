import { NextRequest, NextResponse } from "next/server"
import { createAuthClient } from "@/lib/supabase-auth"

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get("code")

  let isNewUser = false

  if (code) {
    const client = await createAuthClient()
    const { data } = await client.auth.exchangeCodeForSession(code)

    // Detecta usuário novo: created_at e last_sign_in_at com menos de 10s de diferença
    if (data?.user) {
      const created = new Date(data.user.created_at).getTime()
      const lastSignIn = new Date(data.user.last_sign_in_at ?? data.user.created_at).getTime()
      isNewUser = Math.abs(lastSignIn - created) < 10_000
    }
  }

  const redirectUrl = `${origin}/dashboard${isNewUser ? "?new_user=1" : ""}`
  return NextResponse.redirect(redirectUrl)
}
