import { NextRequest, NextResponse } from "next/server"
import { createAuthClient } from "@/lib/supabase-auth"

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code  = searchParams.get("code")
  const error = searchParams.get("error")
  const errorDescription = searchParams.get("error_description")

  // Supabase redireciona com ?error= quando o OAuth falha
  if (error) {
    const msg = errorDescription ?? error
    return NextResponse.redirect(`${origin}/login?error=${encodeURIComponent(msg)}`)
  }

  if (!code) {
    return NextResponse.redirect(`${origin}/login?error=link_invalido`)
  }

  try {
    const client = await createAuthClient()
    const { data, error: exchangeError } = await client.auth.exchangeCodeForSession(code)

    if (exchangeError) {
      return NextResponse.redirect(
        `${origin}/login?error=${encodeURIComponent(exchangeError.message)}`
      )
    }

    // Detecta usuário novo: created_at ≈ last_sign_in_at (diferença < 10s)
    let isNewUser = false
    if (data?.user) {
      const created     = new Date(data.user.created_at).getTime()
      const lastSignIn  = new Date(data.user.last_sign_in_at ?? data.user.created_at).getTime()
      isNewUser = Math.abs(lastSignIn - created) < 10_000
    }

    return NextResponse.redirect(`${origin}/dashboard${isNewUser ? "?new_user=1" : ""}`)
  } catch {
    return NextResponse.redirect(`${origin}/login?error=erro_inesperado`)
  }
}
