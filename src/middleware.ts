import { NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value)
            response.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()

  const pathname = request.nextUrl.pathname
  const isProtected = pathname.startsWith("/dashboard") || pathname.startsWith("/editor")

  if (isProtected && !user) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  if (pathname === "/login" && user) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return response
}

export const config = {
  matcher: ["/dashboard/:path*", "/editor/:path*", "/login"],
}
