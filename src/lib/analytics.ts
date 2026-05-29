/**
 * Utilitários de tracking — GA4 e Meta Pixel
 * Chamados no lado cliente (browser only)
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

/** Dispara CompleteRegistration no Pixel + sign_up no GA4 */
export function trackSignup(method: "email" | "google" = "email") {
  if (typeof window === "undefined") return

  // Meta Pixel — CompleteRegistration
  if (window.fbq) {
    window.fbq("track", "CompleteRegistration", {
      content_name: "Empreendify",
      status: true,
    })
  }

  // GA4 — sign_up
  if (window.gtag) {
    window.gtag("event", "sign_up", { method })
  }
}

/** Dispara Purchase no Pixel + purchase no GA4 quando upgrade para Pro */
export function trackPurchase(value: number, currency = "BRL") {
  if (typeof window === "undefined") return

  if (window.fbq) {
    window.fbq("track", "Purchase", { value, currency })
  }

  if (window.gtag) {
    window.gtag("event", "purchase", { value, currency })
  }
}
