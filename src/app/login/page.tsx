"use client"

import { useState } from "react"
import { sendMagicLink } from "@/app/actions/auth"

export default function LoginPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    const formData = new FormData(e.currentTarget)
    const result = await sendMagicLink(formData)
    if (result?.error) {
      setErrorMsg(result.error)
      setStatus("error")
    } else {
      setStatus("sent")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <a href="/" className="text-2xl font-black text-violet-600">Págin.ai</a>
          <p className="text-gray-500 text-sm mt-2">Entre para criar sua página profissional</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {status === "sent" ? (
            <div className="text-center">
              <div className="text-4xl mb-4">📬</div>
              <h2 className="font-bold text-gray-800 text-lg mb-2">Verifique seu e-mail</h2>
              <p className="text-gray-500 text-sm">
                Enviamos um link mágico para o seu e-mail. Clique nele para entrar.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm text-violet-600 hover:underline"
              >
                Tentar com outro e-mail
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-violet-300"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-500">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl text-sm transition-colors disabled:opacity-60"
              >
                {status === "loading" ? "Enviando..." : "Entrar com link mágico ✨"}
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Sem senha. Sem complicação. Só um clique.
        </p>
      </div>
    </div>
  )
}
