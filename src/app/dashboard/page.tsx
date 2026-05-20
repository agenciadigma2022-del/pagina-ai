import Link from "next/link"
import { templates } from "@/templates"
import { getUser } from "@/lib/supabase-auth"
import { getUserSites } from "@/app/actions/sites"
import { signOut } from "@/app/actions/auth"

export default async function DashboardPage() {
  const user = await getUser()
  const savedSites = await getUserSites()

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Nav */}
      <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-black text-violet-600">Empreendify</span>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">{user?.email}</span>
          <form action={signOut}>
            <button type="submit" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
              Sair
            </button>
          </form>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Sites salvos */}
        {savedSites.length > 0 && (
          <section className="mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">Meus sites</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {savedSites.map((site) => (
                <Link
                  key={site.id}
                  href={`/editor/${site.id}`}
                  className="group rounded-2xl overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-shadow"
                >
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
              ))}
            </div>
          </section>
        )}

        {/* Templates */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
            {savedSites.length > 0 ? "Criar novo site" : "Escolha um template para começar"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {templates.map((t) => (
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
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
