import Link from "next/link"
import { templates } from "@/templates"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <span className="text-xl font-bold text-gray-900">Págin<span className="text-violet-600">.ai</span></span>
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
            Ver templates
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
          100% em português · Pague em real
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Sua página profissional{" "}
          <span className="text-violet-600">em 5 minutos</span>
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
          Escolha um template, personalize com seus dados e publique. Sem código, sem mensalidade cara.
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
            Ver exemplo
          </Link>
        </div>
        <p className="text-xs text-gray-400 mt-4">Sem cartão de crédito. Grátis para sempre no plano básico.</p>
      </section>

      {/* Templates */}
      <section className="bg-gray-50 py-20 px-6">
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
            + Nutricionista, Pet, Advogado, Infoproduto e muito mais em breve
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Como funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { step: "01", title: "Escolha um template", desc: "Templates prontos para o seu nicho. Dentista, academia, barbearia, psicóloga e muito mais." },
            { step: "02", title: "Personalize", desc: "Troque textos, fotos e cores diretamente na tela. Sem código, sem complicação." },
            { step: "03", title: "Publique", desc: "Com um clique sua página vai ao ar. Compartilhe no Instagram, WhatsApp ou use seu domínio." },
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
      </section>

      {/* Diferenciais */}
      <section className="bg-violet-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Feito para quem trabalha no Brasil
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: "🇧🇷", title: "100% em português", desc: "Tudo pensado para o mercado brasileiro, sem traduções estranhas." },
              { icon: "💸", title: "Pague em real", desc: "PIX, cartão ou boleto. Sem cobranças em dólar." },
              { icon: "📱", title: "Mobile first", desc: "Todas as páginas são perfeitas no celular — onde seu cliente vai ver." },
              { icon: "💬", title: "WhatsApp integrado", desc: "Botão de WhatsApp nativo em todos os templates." },
              { icon: "⚡", title: "Vai ao ar em minutos", desc: "Sem precisar contratar desenvolvedor ou agência." },
              { icon: "🔒", title: "Domínio próprio", desc: "Use seu domínio ou publique em seusite.pagina.ai grátis." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preços */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">Planos simples</h2>
        <p className="text-center text-gray-500 mb-12">Sem surpresas na fatura.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Grátis",
              price: "R$ 0",
              period: "para sempre",
              features: ["1 página", "Subdomínio grátis (.pagina.ai)", "Templates básicos", "Botão WhatsApp"],
              cta: "Começar grátis",
              highlight: false,
            },
            {
              name: "Pro",
              price: "R$ 19",
              period: "por mês",
              features: ["Páginas ilimitadas", "Domínio próprio", "Sem marca d'água", "Analytics", "Formulário de contato", "Suporte prioritário"],
              cta: "Assinar Pro",
              highlight: true,
            },
            {
              name: "Anual",
              price: "R$ 99",
              period: "por ano · economize 57%",
              features: ["Tudo do Pro", "2 meses grátis", "Acesso antecipado a novos templates"],
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
            Junte-se a milhares de profissionais que já usam o Págin.ai para aparecer online.
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
      <footer className="py-8 px-6 text-center border-t border-gray-100">
        <p className="text-sm font-bold text-gray-900 mb-1">
          Págin<span className="text-violet-600">.ai</span>
        </p>
        <p className="text-xs text-gray-400">Feito no Brasil 🇧🇷 para profissionais brasileiros</p>
      </footer>
    </main>
  )
}
