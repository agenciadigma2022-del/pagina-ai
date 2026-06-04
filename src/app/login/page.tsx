"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { signInWithPassword, signUpWithPassword, signInWithGoogle } from "@/app/actions/auth"
import { trackSignup } from "@/lib/analytics"

type Mode   = "signin" | "signup"
type Status = "idle" | "loading" | "success" | "error"

/** Traduz mensagens técnicas do Supabase para português claro */
function translateError(raw: string): string {
  const msg = raw.toLowerCase()
  if (msg.includes("invalid login credentials"))          return "E-mail ou senha incorretos."
  if (msg.includes("email not confirmed"))                return "Confirme seu e-mail antes de entrar. Verifique sua caixa de entrada."
  if (msg.includes("user already registered"))            return "Este e-mail já tem uma conta. Clique em \"Entrar\"."
  if (msg.includes("password should be at least"))       return "A senha precisa ter pelo menos 6 caracteres."
  if (msg.includes("unable to validate email"))           return "E-mail inválido. Verifique e tente novamente."
  if (msg.includes("email rate limit"))                   return "Muitas tentativas. Aguarde alguns minutos e tente de novo."
  if (msg.includes("signup_disabled"))                    return "Novos cadastros estão temporariamente desativados."
  if (msg.includes("access_denied"))                      return "Acesso negado pelo Google. Tente novamente ou use e-mail e senha."
  if (msg.includes("link_invalido"))                      return "Link inválido ou expirado. Solicite um novo acesso."
  if (msg.includes("erro_inesperado"))                    return "Erro inesperado. Tente novamente em alguns instantes."
  if (msg.includes("oauth") || msg.includes("provider")) return "Erro ao entrar com Google. Tente novamente."
  return raw // fallback: mostra o erro original se não reconhecido
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}

function LoginForm() {
  const searchParams = useSearchParams()
  const [mode,     setMode]     = useState<Mode>("signin")
  const [status,   setStatus]   = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  // Captura erros vindos do callback OAuth (?error=...)
  useEffect(() => {
    const urlError = searchParams.get("error")
    if (urlError) {
      setErrorMsg(translateError(decodeURIComponent(urlError)))
      setStatus("error")
      // Limpa o ?error= da URL sem recarregar
      window.history.replaceState({}, "", "/login")
    }
  }, [searchParams])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")
    const formData = new FormData(e.currentTarget)
    const action   = mode === "signin" ? signInWithPassword : signUpWithPassword
    const result   = await action(formData)

    if (result?.error) {
      setErrorMsg(translateError(result.error))
      setStatus("error")
    } else if (mode === "signup") {
      trackSignup("email")
      setStatus("success")
    }
    // signin redireciona via server action
  }

  async function handleGoogle() {
    setStatus("loading")
    setErrorMsg("")
    const result = await signInWithGoogle()
    if (result?.error) {
      setErrorMsg(translateError(result.error))
      setStatus("error")
    }
  }

  function switchMode(m: Mode) {
    setMode(m)
    setStatus("idle")
    setErrorMsg("")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">

        <div className="text-center mb-8">
          <a href="/" className="text-2xl font-black text-violet-600">Empreendify</a>
          <p className="text-gray-500 text-sm mt-2">Sua página profissional em minutos</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

          {status === "success" ? (
            <div className="text-center">
              <div className="text-4xl mb-4">📬</div>
              <h2 className="font-bold text-gray-800 text-lg mb-2">Confirme seu e-mail</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Enviamos um link de confirmação para o seu e-mail.<br />
                <strong>Verifique também a pasta de spam.</strong>
              </p>
              <button
                onClick={() => switchMode("signin")}
                className="mt-6 text-sm text-violet-600 hover:underline"
              >
                Já confirmei — fazer login
              </button>
            </div>
          ) : (
            <>
              {/* Toggle */}
              <div className="flex rounded-xl bg-gray-100 p-1 mb-6">
                <button
                  onClick={() => switchMode("signin")}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    mode === "signin" ? "bg-white text-gray-800 shadow-sm" : "text-gray-500"
                  }`}
                >
                  Entrar
                </button>
                <button
                  onClick={() => switchMode("signup")}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    mode === "signup" ? "bg-white text-gray-800 shadow-sm" : "text-gray-500"
                  }`}
                >
                  Criar conta
                </button>
              </div>

              {/* Erro global (OAuth ou URL) */}
              {status === "error" && errorMsg && (
                <div className="flex items-start gap-2 bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-4">
                  <span className="text-red-400 text-base mt-0.5">⚠</span>
                  <p className="text-sm text-red-600 leading-snug">{errorMsg}</p>
                </div>
              )}

              {/* Google */}
              <button
                onClick={handleGoogle}
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-60 mb-4"
              >
                {status === "loading" ? (
                  <span className="w-4 h-4 border-2 border-gray-300 border-t-violet-500 rounded-full animate-spin" />
                ) : (
                  <GoogleIcon />
                )}
                Continuar com Google
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 h-px bg-gray-100" />
                <span className="text-xs text-gray-400">ou</span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>

              {/* Formulário */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-violet-300"
                />
                <input
                  type="password"
                  name="password"
                  required
                  minLength={6}
                  placeholder="Senha (mín. 6 caracteres)"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-violet-300"
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl text-sm transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {status === "loading" && (
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  )}
                  {status === "loading"
                    ? "Aguarde..."
                    : mode === "signin"
                    ? "Entrar"
                    : "Criar conta"}
                </button>
              </form>
            </>
          )}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Ao continuar, você concorda com nossos{" "}
          <a href="/termos" className="underline hover:text-gray-600">Termos de Uso</a>.
        </p>
      </div>
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/>
      <path d="M3.964 10.707A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 6.293C4.672 4.166 6.656 3.58 9 3.58z" fill="#EA4335"/>
    </svg>
  )
}
