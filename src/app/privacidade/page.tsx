import Link from "next/link"
import { Logo } from "@/components/ui/Logo"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade — Empreendify",
  description: "Saiba como a Empreendify coleta, utiliza e protege seus dados pessoais conforme a LGPD.",
}

export default function PrivacidadePage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Política de Privacidade</h1>
          <p className="text-sm text-gray-400">Última atualização: junho de 2025</p>
        </div>

        <div className="bg-violet-50 border border-violet-100 rounded-2xl px-6 py-4 mb-10">
          <p className="text-sm text-violet-800 leading-relaxed">
            Esta Política descreve como a <strong>Empreendify</strong> coleta, usa e protege seus dados pessoais, em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong>.
          </p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">1. Quem somos</h2>
            <p>A Empreendify é uma plataforma de criação de páginas profissionais para autônomos e pequenos negócios, operada por pessoa jurídica brasileira. Para dúvidas sobre privacidade, o canal de contato é <strong>privacidade@empreendify.com.br</strong>.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">2. Dados que coletamos</h2>
            <p><strong>Dados fornecidos por você:</strong></p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Nome completo e endereço de e-mail (no cadastro);</li>
              <li>Dados de pagamento processados pela Stripe (não armazenamos números de cartão);</li>
              <li>Conteúdo inserido nas páginas criadas (textos, imagens, links).</li>
            </ul>
            <p className="mt-4"><strong>Dados coletados automaticamente:</strong></p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Endereço IP e informações do navegador/dispositivo;</li>
              <li>Páginas acessadas, tempo de uso e interações na Plataforma;</li>
              <li>Cookies e tecnologias similares (detalhados na seção 7).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">3. Como usamos seus dados</h2>
            <p>Utilizamos seus dados para:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Criar e gerenciar sua conta e páginas publicadas;</li>
              <li>Processar pagamentos e gerenciar assinaturas;</li>
              <li>Enviar comunicações transacionais (confirmação de e-mail, recibos, alertas de conta);</li>
              <li>Enviar comunicações de marketing, se você optou por recebê-las;</li>
              <li>Melhorar e desenvolver novos recursos da Plataforma;</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">4. Base legal para o tratamento (LGPD)</h2>
            <p>Tratamos seus dados com base nas seguintes hipóteses legais previstas na LGPD:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li><strong>Execução de contrato:</strong> para prestar o serviço contratado;</li>
              <li><strong>Consentimento:</strong> para comunicações de marketing (revogável a qualquer momento);</li>
              <li><strong>Legítimo interesse:</strong> para segurança, prevenção de fraudes e melhoria do serviço;</li>
              <li><strong>Obrigação legal:</strong> quando exigido por lei.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">5. Compartilhamento de dados</h2>
            <p>Não vendemos seus dados pessoais. Compartilhamos apenas com:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li><strong>Stripe:</strong> processamento de pagamentos;</li>
              <li><strong>Supabase:</strong> armazenamento seguro de dados e autenticação;</li>
              <li><strong>Vercel:</strong> hospedagem da Plataforma;</li>
              <li><strong>Google Analytics e Meta Pixel:</strong> análise de uso e desempenho de marketing (dados anonimizados/agregados);</li>
              <li><strong>Autoridades públicas:</strong> quando exigido por lei ou ordem judicial.</li>
            </ul>
            <p className="mt-3">Todos os parceiros acima possuem políticas de privacidade próprias e adequadas à LGPD e/ou GDPR.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">6. Retenção de dados</h2>
            <p>Mantemos seus dados enquanto sua conta estiver ativa. Após o encerramento:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Dados de conta e conteúdo: excluídos em até 90 dias;</li>
              <li>Dados financeiros: mantidos por 5 anos para fins fiscais e legais;</li>
              <li>Logs de acesso: mantidos por 6 meses conforme o Marco Civil da Internet (Lei nº 12.965/2014).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">7. Cookies</h2>
            <p>Utilizamos cookies para:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li><strong>Essenciais:</strong> autenticação e segurança da sessão;</li>
              <li><strong>Analíticos:</strong> Google Analytics (comportamento de uso, anonimizado);</li>
              <li><strong>Marketing:</strong> Meta Pixel (medição de campanhas publicitárias).</li>
            </ul>
            <p className="mt-3">Você pode desativar cookies não essenciais nas configurações do seu navegador.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">8. Seus direitos (LGPD)</h2>
            <p>Como titular de dados, você tem direito a:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Acesso:</strong> saber quais dados temos sobre você;</li>
              <li><strong>Correção:</strong> corrigir dados incompletos ou incorretos;</li>
              <li><strong>Exclusão:</strong> solicitar a exclusão dos seus dados;</li>
              <li><strong>Portabilidade:</strong> receber seus dados em formato estruturado;</li>
              <li><strong>Revogação do consentimento:</strong> cancelar o marketing a qualquer momento;</li>
              <li><strong>Oposição:</strong> se opor ao tratamento baseado em legítimo interesse;</li>
              <li><strong>Informação:</strong> obter informações sobre com quem compartilhamos seus dados.</li>
            </ul>
            <p className="mt-3">Para exercer seus direitos, envie uma solicitação para <strong>privacidade@empreendify.com.br</strong>. Respondemos em até 15 dias úteis.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">9. Segurança</h2>
            <p>Adotamos medidas técnicas e organizacionais para proteger seus dados, incluindo criptografia em trânsito (TLS/HTTPS), controle de acesso por função, autenticação segura e monitoramento de segurança. Em caso de incidente que afete seus direitos, notificaremos você e a ANPD conforme exigido pela LGPD.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">10. Menores de idade</h2>
            <p>A Plataforma não é destinada a menores de 18 anos. Não coletamos intencionalmente dados de menores. Se identificarmos cadastro de menor, a conta será encerrada e os dados excluídos.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">11. Alterações nesta Política</h2>
            <p>Podemos atualizar esta Política periodicamente. A data de "última atualização" no topo indica quando a versão vigente foi publicada. Alterações relevantes serão comunicadas por e-mail.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">12. Contato e Encarregado (DPO)</h2>
            <p>Para exercer seus direitos ou tirar dúvidas sobre privacidade:</p>
            <div className="mt-3 space-y-1">
              <p><strong>E-mail:</strong> privacidade@empreendify.com.br</p>
              <p><strong>Suporte geral:</strong> suporte@empreendify.com.br</p>
            </div>
            <p className="mt-3 text-sm text-gray-500">Você também pode registrar reclamações junto à Autoridade Nacional de Proteção de Dados (ANPD): <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">www.gov.br/anpd</a></p>
          </section>

        </div>

        {/* Footer links */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Empreendify. Todos os direitos reservados.</p>
          <Link href="/termos" className="text-violet-600 hover:underline">
            Termos de Uso →
          </Link>
        </div>
      </main>
    </div>
  )
}
