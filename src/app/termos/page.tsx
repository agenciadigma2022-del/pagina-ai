import Link from "next/link"
import { Logo } from "@/components/ui/Logo"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termos de Uso — Empreendify",
  description: "Leia os Termos de Uso da plataforma Empreendify.",
}

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/"><Logo size="sm" /></Link>
          <Link href="/login" className="text-sm text-gray-500 hover:text-gray-800">
            Entrar
          </Link>
        </div>
      </nav>

      {/* Conteúdo */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold text-violet-600 mb-2">Legal</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Termos de Uso</h1>
          <p className="text-sm text-gray-400">Última atualização: junho de 2025</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">1. Aceitação dos Termos</h2>
            <p>Ao acessar ou utilizar a plataforma Empreendify ("Plataforma"), você concorda com estes Termos de Uso ("Termos"). Se você não concordar com alguma disposição, não utilize a Plataforma.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">2. Descrição do Serviço</h2>
            <p>A Empreendify é uma plataforma brasileira de criação de páginas profissionais voltada a profissionais autônomos e pequenos negócios. A Plataforma oferece:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Criação de páginas profissionais com templates prontos;</li>
              <li>Editor visual sem necessidade de programação;</li>
              <li>Publicação em subdomínio da Empreendify (plano gratuito) ou URL personalizada (plano Pro);</li>
              <li>Hospedagem e manutenção da infraestrutura das páginas criadas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">3. Cadastro e Conta</h2>
            <p>Para utilizar a Plataforma, você deve criar uma conta com informações verídicas e mantê-las atualizadas. Você é responsável pela confidencialidade de sua senha e por todas as atividades realizadas em sua conta. Em caso de uso não autorizado, notifique-nos imediatamente pelo e-mail <strong>suporte@empreendify.com.br</strong>.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">4. Planos e Pagamentos</h2>
            <p><strong>Plano Gratuito:</strong> Permite a criação de 1 (uma) página profissional com as funcionalidades básicas da Plataforma, sem custo.</p>
            <p className="mt-3"><strong>Plano Pro:</strong> Oferece páginas ilimitadas, URL personalizada, remoção da marca Empreendify e suporte prioritário, mediante assinatura mensal ou anual. Os valores vigentes estão disponíveis na página de preços.</p>
            <p className="mt-3">Pagamentos são processados de forma segura pela Stripe. Não armazenamos dados de cartão de crédito em nossos servidores. O plano Pro pode ser cancelado a qualquer momento pelo painel do usuário, com efeito ao final do período já pago.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">5. Conteúdo do Usuário</h2>
            <p>Você é o único responsável pelo conteúdo publicado em sua página (textos, imagens, informações de contato etc.). Ao publicar conteúdo, você declara que:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Possui todos os direitos necessários sobre o conteúdo;</li>
              <li>O conteúdo não viola direitos de terceiros, leis ou regulamentos;</li>
              <li>O conteúdo não é falso, enganoso, ofensivo ou ilegal.</li>
            </ul>
            <p className="mt-3">A Empreendify reserva-se o direito de remover conteúdo que viole estes Termos ou a legislação brasileira vigente.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">6. Propriedade Intelectual</h2>
            <p>A Plataforma, incluindo seus templates, código-fonte, logotipos e materiais de marketing, é de propriedade exclusiva da Empreendify e protegida pelas leis de propriedade intelectual brasileiras. É vedada a cópia, reprodução ou distribuição não autorizada de qualquer elemento da Plataforma.</p>
            <p className="mt-3">O conteúdo criado por você em sua página permanece de sua propriedade.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">7. Limitação de Responsabilidade</h2>
            <p>A Empreendify não se responsabiliza por:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Danos indiretos, lucros cessantes ou perda de dados decorrentes do uso da Plataforma;</li>
              <li>Interrupções temporárias de serviço por manutenção ou falhas técnicas;</li>
              <li>Conteúdo publicado pelos usuários em suas páginas;</li>
              <li>Resultados comerciais esperados pelo uso da Plataforma.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">8. Suspensão e Encerramento</h2>
            <p>A Empreendify pode suspender ou encerrar sua conta em caso de violação destes Termos, sem aviso prévio. Você pode encerrar sua conta a qualquer momento acessando as configurações do painel ou entrando em contato com nosso suporte.</p>
            <p className="mt-3">Após o encerramento, seus dados poderão ser mantidos pelo prazo legalmente exigido e depois excluídos conforme nossa Política de Privacidade.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">9. Alterações nos Termos</h2>
            <p>Podemos atualizar estes Termos periodicamente. Notificaremos usuários sobre alterações relevantes por e-mail ou aviso na Plataforma. O uso continuado após a notificação constitui aceitação dos novos Termos.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">10. Lei Aplicável e Foro</h2>
            <p>Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de São Paulo/SP para dirimir quaisquer disputas decorrentes destes Termos, com renúncia a qualquer outro, por mais privilegiado que seja.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">11. Contato</h2>
            <p>Dúvidas sobre estes Termos? Entre em contato:</p>
            <p className="mt-2"><strong>E-mail:</strong> suporte@empreendify.com.br</p>
          </section>

        </div>

        {/* Footer links */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Empreendify. Todos os direitos reservados.</p>
          <Link href="/privacidade" className="text-violet-600 hover:underline">
            Política de Privacidade →
          </Link>
        </div>
      </main>
    </div>
  )
}
