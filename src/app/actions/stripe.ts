"use server"

import { redirect } from "next/navigation"
import { getStripe } from "@/lib/stripe"
import { createAuthClient } from "@/lib/supabase-auth"
import { createServerClient as createServiceClient } from "@/lib/supabase-server"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.empreendify.com.br"

async function getOrCreateCustomer(userId: string, email: string): Promise<string> {
  const client = createServiceClient()!

  const { data: profile } = await client
    .from("profiles")
    .select("stripe_customer_id")
    .eq("id", userId)
    .single()

  if (profile?.stripe_customer_id) return profile.stripe_customer_id

  const customer = await getStripe().customers.create({
    email,
    metadata: { supabase_user_id: userId },
  })

  await client
    .from("profiles")
    .upsert({ id: userId, stripe_customer_id: customer.id })

  return customer.id
}

export async function createCheckoutSession(priceId: string) {
  const authClient = await createAuthClient()
  const { data: { user } } = await authClient.auth.getUser()
  if (!user) redirect("/login")

  try {
    const customerId = await getOrCreateCustomer(user.id, user.email!)

    const session = await getStripe().checkout.sessions.create({
      customer: customerId,
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "subscription",
      success_url: `${SITE_URL}/dashboard?plano=ativado`,
      cancel_url: `${SITE_URL}/dashboard`,
      locale: "pt-BR",
      allow_promotion_codes: true,
    })

    redirect(session.url!)
  } catch (err: unknown) {
    // Deixa o redirect do Next.js propagar normalmente
    const message = (err as { digest?: string })?.digest
    if (message?.startsWith("NEXT_REDIRECT")) throw err
    // Redireciona para o dashboard com a mensagem de erro visível na URL
    const msg = err instanceof Error ? err.message : String(err)
    redirect(`${SITE_URL}/dashboard?stripe_error=${encodeURIComponent(msg)}`)
  }
}

export async function createPortalSession() {
  const authClient = await createAuthClient()
  const { data: { user } } = await authClient.auth.getUser()
  if (!user) redirect("/login")

  try {
    const client = createServiceClient()!
    const { data: profile } = await client
      .from("profiles")
      .select("stripe_customer_id")
      .eq("id", user.id)
      .single()

    if (!profile?.stripe_customer_id) redirect("/dashboard")

    const session = await getStripe().billingPortal.sessions.create({
      customer: profile.stripe_customer_id,
      return_url: `${SITE_URL}/dashboard`,
    })

    redirect(session.url)
  } catch (err: unknown) {
    const message = (err as { digest?: string })?.digest
    if (message?.startsWith("NEXT_REDIRECT")) throw err
    const msg = err instanceof Error ? err.message : String(err)
    redirect(`${SITE_URL}/dashboard?stripe_error=${encodeURIComponent(msg)}`)
  }
}

export async function getUserPlan(): Promise<"free" | "pro"> {
  const authClient = await createAuthClient()
  const { data: { user } } = await authClient.auth.getUser()
  if (!user) return "free"

  const client = createServiceClient()!
  const { data } = await client
    .from("profiles")
    .select("plan")
    .eq("id", user.id)
    .single()

  return (data?.plan as "free" | "pro") ?? "free"
}
