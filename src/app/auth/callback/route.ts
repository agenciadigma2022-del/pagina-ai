import { NextRequest, NextResponse } from "next/server"
import { createAuthClient } from "@/lib/supabase-auth"

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get("code")

  if (code) {
    const client = await createAuthClient()
    await client.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(`${origin}/dashboard`)
}
