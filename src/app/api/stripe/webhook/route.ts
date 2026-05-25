import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { getStripe } from "@/lib/stripe"
import { createServerClient as createServiceClient } from "@/lib/supabase-server"

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get("stripe-signature")

  if (!signature) {
    return NextResponse.json({ error: "Sem assinatura" }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = getStripe().webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch {
    return NextResponse.json({ error: "Assinatura inválida" }, { status: 400 })
  }

  const client = createServiceClient()
  if (!client) return NextResponse.json({ error: "DB error" }, { status: 500 })

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session
      await client
        .from("profiles")
        .update({
          plan: "pro",
          subscription_id: session.subscription as string,
          subscription_status: "active",
          updated_at: new Date().toISOString(),
        })
        .eq("stripe_customer_id", session.customer as string)
      break
    }

    case "customer.subscription.updated": {
      const sub = event.data.object as Stripe.Subscription
      const isActive = sub.status === "active" || sub.status === "trialing"
      await client
        .from("profiles")
        .update({
          plan: isActive ? "pro" : "free",
          subscription_status: sub.status,
          updated_at: new Date().toISOString(),
        })
        .eq("stripe_customer_id", sub.customer as string)
      break
    }

    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription
      await client
        .from("profiles")
        .update({
          plan: "free",
          subscription_id: null,
          subscription_status: "canceled",
          updated_at: new Date().toISOString(),
        })
        .eq("stripe_customer_id", sub.customer as string)
      break
    }
  }

  return NextResponse.json({ received: true })
}
