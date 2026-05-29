"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { trackSignup } from "@/lib/analytics"

/**
 * Dispara evento de cadastro quando ?new_user=1 está na URL
 * (usado após OAuth Google — o callback detecta usuário novo e passa o param)
 */
export function TrackNewUser() {
  const router = useRouter()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get("new_user") === "1") {
      trackSignup("google")
      // Remove o param da URL sem recarregar a página
      params.delete("new_user")
      const newUrl = window.location.pathname + (params.toString() ? `?${params}` : "")
      router.replace(newUrl)
    }
  }, [router])

  return null
}
