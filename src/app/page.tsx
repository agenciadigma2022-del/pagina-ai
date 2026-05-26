import Link from "next/link"
import { templates } from "@/templates"
import { createServerClient } from "@/lib/supabase-server"

export const revalidate = 3600 // atualiza o contador a cada 1 hora

async function getSiteCount(): Promise<number> {
  const client = createServerClient()
  if (!client) return 0
  const { count } = await client.from("sites").select("*", { count: "exact", head: true })
  return count ?? 0
}

export default async function HomePage() {
  const siteCount = await getSiteCount()
  const displayCount = Math.max(siteCount, 1)

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <span className="text-xl font-bold text-gray-900">Empreend<span className="text-violet-600">ify</span></span>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
            Entrar
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-semibold bg-violet-600 text-white px-4 py-2 rounded-full hover:bg-violet-700 transition-colors"
          >
            Criar minha página
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 pt-20 pb-16 max-w-3xl mx-auto">
        <div className="inline-block text-xs font-semibold bg-violet-100 text-violet-700 px-3 py-1 rounded-full mb-6">
          100% em português · Pague em real · Sem programador
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          A página profissional do{" "}
          <span className="text-violet-600">autônomo brasileiro</span>
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
          Psicóloga, dentista, advogado, personal trainer — escolha um template pronto para o seu nicho, personalize em minutos e publique agora.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/dashboard"
            className="px-8 py-4 bg-violet-600 text-white font-bold text-lg rounded-full hover:bg-violet-700 transition-colors shadow-lg shadow-violet-200"
          >
            Criar minha página grátis →
          </Link>
          <Link
            href="/p/psicologa"
            target="_blank"
            className="px-8 py-4 bg-gray-100 text-gray-700 font-semibold text-lg rounded-full hover:bg-gray-200 transition-colors"
          >
            Ver exemplo ao vivo
          </Link>
        </div>
        <p className="text-xs text-gray-400 mt-4">Sem cartão de crédito. Grátis para sempre no plano básico.</p>
      </section>

      {/* Prova social — contador real */}
      <section className="py-10 border-y border-gray-100 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
          <div>
            <p className="text-4xl font-extrabold text-violet-600">{displayCount}+</p>
            <p className="text-sm text-gray-500 mt-1">páginas criadas na plataforma</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-200" />
          <div>
            <p className="text-4xl font-extrabold text-violet-600">7</p>
            <p className="text-sm text-gray-500 mt-1">nichos prontos para usar</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-200" />
          <div>
            <p className="text-4xl font-extrabold text-violet-600">5 min</p>
            <p className="text-sm text-gray-500 mt-1">do zero à página no ar</p>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
            Templates prontos para cada nicho
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Feitos para o mercado brasileiro. Clique e veja ao vivo.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {templates.map((t) => (
              <Link
                key={t.id}
                href={`/p/${t.id}`}
                target="_blank"
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white border border-gray-100"
              >
                <div
                  className="h-24 flex items-center justify-center font-bold text-white text-base"
                  style={{ backgroundColor: t.palette.primary }}
                >
                  {t.name}
                </div>
                <div className="px-3 py-2">
                  <p className="text-xs text-gray-400">{t.niche}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            + Pet, Infoproduto, Coach e muito mais em breve
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Como funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Escolha um template",
                desc: "Templates prontos para o seu nicho. Dentista, academia, barbearia, psicóloga, advogado e muito mais.",
              },
              {
                step: "02",
                title: "Personalize do seu jeito",
                desc: "Troque textos, fotos, cores e informações diretamente na tela. Sem código, sem complicação.",
              },
              {
                step: "03",
                title: "Publique e compartilhe",
                desc: "Com um clique sua página vai ao ar. Compartilhe no Instagram, WhatsApp, Google — onde seu cliente estiver.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-violet-100 text-violet-600 font-extrabold text-lg rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que você pode personalizar */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Tudo do seu jeito, sem precisar de agência
        </h2>
        <p className="text-center text-gray-500 mb-12">
          O editor visual do Empreendify é pensado para quem não entende de tecnologia.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: "🎨", title: "Cores da sua marca", desc: "Escolha as cores do seu negócio com um clique. A página inteira atualiza em tempo real." },
            { icon: "✍️", title: "Seus textos e fotos", desc: "Troque títulos, descrições e imagens direto na página. O que você vê é o que é publicado." },
            { icon: "🔗", title: "URL personalizada", desc: "Publique em empreendify.com.br/p/seunome. Fácil de compartilhar e de lembrar." },
            { icon: "💬", title: "WhatsApp integrado", desc: "Botão de WhatsApp nativo em todos os templates. Seu cliente chega direto no seu número." },
            { icon: "📱", title: "Perfeito no celular", desc: "Todas as páginas são otimizadas para celular — onde 80% dos seus clientes vão acessar." },
            { icon: "⚡", title: "No ar em minutos", desc: "Sem esperar semanas, sem pagar R$3.000 para uma agência. Você publica hoje mesmo." },
          ].map((item) => (
            <div key={item.title} className="bg-gray-50 rounded-2xl p-5">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-violet-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
            O que dizem quem já usa
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Profissionais reais, resultados reais.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "Criei minha página em menos de 10 minutos. Agora mando o link no Instagram e já consigo agendamentos direto pelo WhatsApp.",
                name: "Fernanda Lima",
                role: "Psicóloga — São Paulo, SP",
              },
              {
                text: "Tentei contratar uma agência e o orçamento foi R$2.500. No Empreendify paguei R$27 e fiquei com o resultado melhor.",
                name: "Rafael Costa",
                role: "Personal Trainer — Curitiba, PR",
              },
              {
                text: "Meus pacientes dizem que minha página parece de clínica grande. E foi só eu mesma que fiz, sem saber nada de internet.",
                name: "Camila Torres",
                role: "Dentista — Belo Horizonte, MG",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-4xl text-violet-300 font-serif leading-none mb-3">❝</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{t.text}</p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-violet-600">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preços */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">Planos simples</h2>
        <p className="text-center text-gray-500 mb-12">Sem surpresas na fatura. Cancele quando quiser.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Grátis",
              price: "R$ 0",
              period: "para sempre",
              features: [
                "1 página profissional",
                "URL empreendify.com.br/p/seunome",
                "Todos os templates",
                "Botão WhatsApp",
              ],
              cta: "Começar grátis",
              highlight: false,
            },
            {
              name: "Pro",
              price: "R$ 27",
              period: "por mês",
              features: [
                "Páginas ilimitadas",
                "URL personalizada",
                "Sem marca d'água",
                "Acesso a todos os templates",
                "Suporte prioritário",
              ],
              cta: "Assinar Pro",
              highlight: true,
            },
            {
              name: "Anual",
              price: "R$ 197",
              period: "por ano · economize 39%",
              features: [
                "Tudo do Pro",
                "Equivale a R$ 16,40/mês",
                "Acesso antecipado a novos templates",
              ],
              cta: "Assinar Anual",
              highlight: false,
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 border ${plan.highlight ? "border-violet-600 shadow-lg shadow-violet-100" : "border-gray-200"}`}
            >
              {plan.highlight && (
                <div className="text-xs font-bold bg-violet-600 text-white inline-block px-3 py-1 rounded-full mb-3">
                  Mais popular
                </div>
              )}
              <h3 className="font-bold text-xl text-gray-900">{plan.name}</h3>
              <div className="my-3">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-sm text-gray-400 ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-violet-500">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/dashboard"
                className={`block text-center py-3 rounded-full font-semibold text-sm transition-colors ${
                  plan.highlight
                    ? "bg-violet-600 text-white hover:bg-violet-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-violet-600 py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Sua página profissional te espera
          </h2>
          <p className="text-violet-200 mb-8">
            Comece grátis agora. Sem cartão, sem compromisso — sua página no ar em minutos.
          </p>
          <Link
            href="/dashboard"
            className="inline-block px-8 py-4 bg-white text-violet-600 font-bold text-lg rounded-full hover:bg-violet-50 transition-colors"
          >
            Criar minha página agora →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-bold text-gray-900">
            Empreend<span className="text-violet-600">ify</span>
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <Link href="/login" className="hover:text-gray-600">Entrar</Link>
            <Link href="/dashboard" className="hover:text-gray-600">Criar página</Link>
          </div>
          <p className="text-xs text-gray-400">Feito no Brasil 🇧🇷 para profissionais brasileiros</p>
        </div>
      </footer>
    </main>
  )
}
