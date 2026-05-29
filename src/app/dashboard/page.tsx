import Link from "next/link"
import { templates } from "@/templates"
import { Logo } from "@/components/ui/Logo"
import { getUser } from "@/lib/supabase-auth"
import { getUserSites } from "@/app/actions/sites"
import { signOut } from "@/app/actions/auth"
import { getUserPlan, createCheckoutSession, createPortalSession } from "@/app/actions/stripe"
import { TrackNewUser } from "@/components/analytics/TrackNewUser"

const PRO_PRICE_ID = process.env.STRIPE_PRO_PRICE_ID!
const ANNUAL_PRICE_ID = process.env.STRIPE_ANNUAL_PRICE_ID!

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ plano?: string; stripe_error?: string }>
}) {
  const { plano, stripe_error } = await searchParams

  const [user, savedSites, plan] = await Promise.all([
    getUser(),
    getUserSites(),
    getUserPlan(),
  ])

  const isPro = plan === "pro"
  const canCreateMore = isPro || savedSites.length === 0

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Dispara evento de cadastro após OAuth Google */}
      <TrackNewUser />
      {/* Nav */}
      <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <Logo size="md" />
        <div className="flex items-center gap-4">
          {isPro ? (
            <span className="text-xs font-bold bg-violet-600 text-white px-2.5 py-1 rounded-full">PRO</span>
          ) : (
            <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">Grátis</span>
          )}
          <span className="text-sm text-gray-400 hidden sm:block">{user?.email}</span>
          <form action={signOut}>
            <button type="submit" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
              Sair
            </button>
          </form>
        </div>
      </header>

      {/* Feedback pós-checkout */}
      {plano === "ativado" && (
        <div className="bg-green-50 border-b border-green-200 px-6 py-3 text-green-800 text-sm font-medium text-center">
          🎉 Plano Pro ativado com sucesso! Bem-vindo ao Pro.
        </div>
      )}
      {stripe_error && (
        <div className="bg-red-50 border-b border-red-200 px-6 py-3 text-red-800 text-sm text-center">
          <strong>Erro no checkout:</strong> {stripe_error}
        </div>
      )}

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Banner upgrade (só para free) */}
        {!isPro && (
          <div className="mb-10 rounded-2xl bg-gradient-to-r from-violet-600 to-violet-500 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-white text-lg">Desbloqueie tudo com o Pro</p>
              <p className="text-violet-200 text-sm mt-0.5">Páginas ilimitadas · Domínio próprio · Sem marca d'água</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <form action={createCheckoutSession.bind(null, ANNUAL_PRICE_ID)}>
                <button className="px-4 py-2.5 bg-white text-violet-600 font-bold text-sm rounded-xl hover:bg-violet-50 transition-colors">
                  Anual — R$197 <span className="text-xs font-normal opacity-70">economize 39%</span>
                </button>
              </form>
              <form action={createCheckoutSession.bind(null, PRO_PRICE_ID)}>
                <button className="px-4 py-2.5 bg-violet-700 text-white font-semibold text-sm rounded-xl hover:bg-violet-800 transition-colors">
                  Mensal — R$27
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Gerenciar assinatura (só para pro) */}
        {isPro && (
          <div className="mb-10 rounded-2xl bg-white border border-violet-100 p-5 flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-800">Plano Pro ativo</p>
              <p className="text-sm text-gray-400">Páginas ilimitadas, domínio próprio e muito mais.</p>
            </div>
            <form action={createPortalSession}>
              <button className="text-sm font-semibold text-violet-600 hover:underline">
                Gerenciar assinatura →
              </button>
            </form>
          </div>
        )}

        {/* Sites salvos */}
        {savedSites.length > 0 && (
          <section className="mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">Meus sites</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {savedSites.map((site) => (
                <div key={site.id} className="group rounded-2xl overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-shadow">
                  <Link href={`/editor/${site.id}`}>
                    <div
                      className="h-32 flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: site.palette.primary }}
                    >
                      {site.title}
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-800">{site.title}</p>
                        <p className="text-sm text-gray-400">{site.niche}</p>
                      </div>
                      <span className="text-xs text-gray-300">
                        {new Date(site.updated_at).toLocaleDateString("pt-BR")}
                      </span>
                    </div>
                  </Link>
                  <div className="px-4 pb-4 flex gap-2">
                    <Link
                      href={`/p/${site.slug ?? site.id}`}
                      target="_blank"
                      className="text-xs text-violet-600 hover:underline"
                    >
                      Ver site →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Templates */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              {savedSites.length > 0 ? "Criar novo site" : "Escolha um template para começar"}
            </h2>
            {!canCreateMore && (
              <span className="text-xs text-violet-600 font-semibold bg-violet-50 px-2.5 py-1 rounded-full">
                Pro para desbloquear
              </span>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {templates.map((t) => (
              canCreateMore ? (
                <Link
                  key={t.id}
                  href={`/editor/${t.id}`}
                  className="group rounded-2xl overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-shadow"
                >
                  <div
                    className="h-32 flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: t.palette.primary }}
                  >
                    {t.name}
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-gray-800">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.niche}</p>
                  </div>
                </Link>
              ) : (
                <div
                  key={t.id}
                  className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white opacity-60 cursor-not-allowed select-none"
                >
                  <div
                    className="h-32 flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: t.palette.primary }}
                  >
                    {t.name}
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-gray-800">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.niche}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-white/60">
                    <div className="bg-white rounded-full p-2 shadow-md">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>

          {!canCreateMore && (
            <div className="mt-6 rounded-2xl border border-violet-100 bg-violet-50 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-violet-900 text-sm">Quer criar mais sites?</p>
                <p className="text-sm text-violet-600 mt-0.5">Faça upgrade para o Pro e tenha páginas ilimitadas.</p>
              </div>
              <div className="flex gap-3 shrink-0">
                <form action={createCheckoutSession.bind(null, ANNUAL_PRICE_ID)}>
                  <button className="px-4 py-2 bg-violet-600 text-white font-bold text-sm rounded-xl hover:bg-violet-700 transition-colors">
                    Anual — R$197
                  </button>
                </form>
                <form action={createCheckoutSession.bind(null, PRO_PRICE_ID)}>
                  <button className="px-4 py-2 bg-white text-violet-600 border border-violet-200 font-semibold text-sm rounded-xl hover:bg-violet-50 transition-colors">
                    Mensal — R$27
                  </button>
                </form>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
