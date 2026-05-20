"use client"

import { useEditor } from "./EditorContext"

export function BlockEditorPanel() {
  const { blocks, selectedId, updateBlock, moveBlock, deselect } = useEditor()

  if (!selectedId) {
    return (
      <div className="p-4 text-center text-gray-400 text-sm mt-8">
        <div className="text-3xl mb-3">👆</div>
        Clique em qualquer seção da página para editar
      </div>
    )
  }

  const block = blocks.find((b) => b.id === selectedId)
  if (!block) return null

  const idx = blocks.findIndex((b) => b.id === selectedId)

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-violet-600">
            {block.type.replace("-", " ")}
          </p>
          <p className="text-xs text-gray-400">Editando seção {idx + 1}</p>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => moveBlock(selectedId, "up")}
            disabled={idx === 0}
            className="p-1.5 rounded-lg hover:bg-gray-100 disabled:opacity-30 text-gray-500 text-sm"
            title="Mover para cima"
          >↑</button>
          <button
            onClick={() => moveBlock(selectedId, "down")}
            disabled={idx === blocks.length - 1}
            className="p-1.5 rounded-lg hover:bg-gray-100 disabled:opacity-30 text-gray-500 text-sm"
            title="Mover para baixo"
          >↓</button>
          <button
            onClick={deselect}
            className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 text-sm ml-1"
          >✕</button>
        </div>
      </div>

      {/* Campos */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <FieldsForBlock
          type={block.type}
          data={block.data as Record<string, unknown>}
          onChange={(data) => updateBlock(selectedId, data)}
        />
      </div>
    </div>
  )
}

/* ─── Renderiza os campos certos para cada tipo de bloco ─── */

function FieldsForBlock({
  type,
  data,
  onChange,
}: {
  type: string
  data: Record<string, unknown>
  onChange: (data: Record<string, unknown>) => void
}) {
  function set(key: string, value: unknown) {
    onChange({ [key]: value })
  }

  switch (type) {
    case "hero":
      return (
        <>
          <Field label="Título principal">
            <Textarea value={data.headline as string} onChange={(v) => set("headline", v)} />
          </Field>
          <Field label="Subtítulo">
            <Textarea value={data.subheadline as string} onChange={(v) => set("subheadline", v)} />
          </Field>
          <Field label="Texto do botão">
            <Input value={data.ctaText as string} onChange={(v) => set("ctaText", v)} />
          </Field>
          <Field label="Link do botão">
            <Input value={data.ctaLink as string} onChange={(v) => set("ctaLink", v)} />
          </Field>
          <Field label="URL da imagem de fundo">
            <Input value={(data.imageUrl as string) || ""} onChange={(v) => set("imageUrl", v)} placeholder="https://..." />
          </Field>
        </>
      )

    case "cards": {
      const items = (data.items as Array<{ icon: string; title: string; description: string }>) ?? []
      return (
        <>
          <Field label="Título da seção">
            <Input value={data.title as string} onChange={(v) => set("title", v)} />
          </Field>
          {items.map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-3 space-y-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Card {i + 1}</p>
              <Field label="Ícone (emoji)">
                <Input value={item.icon} onChange={(v) => { const next = [...items]; next[i] = { ...item, icon: v }; set("items", next) }} />
              </Field>
              <Field label="Título">
                <Input value={item.title} onChange={(v) => { const next = [...items]; next[i] = { ...item, title: v }; set("items", next) }} />
              </Field>
              <Field label="Descrição">
                <Textarea value={item.description} onChange={(v) => { const next = [...items]; next[i] = { ...item, description: v }; set("items", next) }} />
              </Field>
            </div>
          ))}
        </>
      )
    }

    case "image-text":
      return (
        <>
          <Field label="Título">
            <Input value={data.title as string} onChange={(v) => set("title", v)} />
          </Field>
          <Field label="Texto">
            <Textarea value={data.body as string} onChange={(v) => set("body", v)} />
          </Field>
          <Field label="Texto do botão">
            <Input value={(data.ctaText as string) || ""} onChange={(v) => set("ctaText", v)} />
          </Field>
          <Field label="Link do botão">
            <Input value={(data.ctaLink as string) || "#"} onChange={(v) => set("ctaLink", v)} />
          </Field>
          <Field label="Posição da imagem">
            <select
              value={data.imagePosition as string}
              onChange={(e) => set("imagePosition", e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-violet-300"
            >
              <option value="left">Esquerda</option>
              <option value="right">Direita</option>
            </select>
          </Field>
          <Field label="URL da imagem">
            <Input value={(data.imageUrl as string) || ""} onChange={(v) => set("imageUrl", v)} placeholder="https://..." />
          </Field>
        </>
      )

    case "testimonials": {
      const items = (data.items as Array<{ name: string; role: string; text: string }>) ?? []
      return (
        <>
          <Field label="Título da seção">
            <Input value={data.title as string} onChange={(v) => set("title", v)} />
          </Field>
          {items.map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-3 space-y-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Depoimento {i + 1}</p>
              <Field label="Nome">
                <Input value={item.name} onChange={(v) => { const next = [...items]; next[i] = { ...item, name: v }; set("items", next) }} />
              </Field>
              <Field label="Cargo / Descrição">
                <Input value={item.role} onChange={(v) => { const next = [...items]; next[i] = { ...item, role: v }; set("items", next) }} />
              </Field>
              <Field label="Depoimento">
                <Textarea value={item.text} onChange={(v) => { const next = [...items]; next[i] = { ...item, text: v }; set("items", next) }} />
              </Field>
            </div>
          ))}
        </>
      )
    }

    case "cta-banner":
      return (
        <>
          <Field label="Título">
            <Input value={data.headline as string} onChange={(v) => set("headline", v)} />
          </Field>
          <Field label="Subtítulo">
            <Input value={data.subheadline as string} onChange={(v) => set("subheadline", v)} />
          </Field>
          <Field label="Texto do botão">
            <Input value={data.ctaText as string} onChange={(v) => set("ctaText", v)} />
          </Field>
          <Field label="Tipo do botão">
            <select
              value={data.ctaType as string}
              onChange={(e) => set("ctaType", e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-violet-300"
            >
              <option value="whatsapp">WhatsApp</option>
              <option value="default">Link normal</option>
            </select>
          </Field>
          <Field label="Link (se não for WhatsApp)">
            <Input value={(data.ctaLink as string) || "#"} onChange={(v) => set("ctaLink", v)} />
          </Field>
        </>
      )

    case "faq": {
      const items = (data.items as Array<{ question: string; answer: string }>) ?? []
      return (
        <>
          <Field label="Título da seção">
            <Input value={data.title as string} onChange={(v) => set("title", v)} />
          </Field>
          {items.map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-3 space-y-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Pergunta {i + 1}</p>
              <Field label="Pergunta">
                <Input value={item.question} onChange={(v) => { const next = [...items]; next[i] = { ...item, question: v }; set("items", next) }} />
              </Field>
              <Field label="Resposta">
                <Textarea value={item.answer} onChange={(v) => { const next = [...items]; next[i] = { ...item, answer: v }; set("items", next) }} />
              </Field>
            </div>
          ))}
        </>
      )
    }

    case "about":
      return (
        <>
          <Field label="Seu nome">
            <Input value={data.name as string} onChange={(v) => set("name", v)} />
          </Field>
          <Field label="Label da seção">
            <Input value={data.title as string} onChange={(v) => set("title", v)} />
          </Field>
          <Field label="Bio / Sobre você">
            <Textarea value={data.bio as string} onChange={(v) => set("bio", v)} />
          </Field>
          <Field label="URL da sua foto">
            <Input value={(data.imageUrl as string) || ""} onChange={(v) => set("imageUrl", v)} placeholder="https://..." />
          </Field>
        </>
      )

    case "contact-form":
      return (
        <>
          <Field label="Título do formulário">
            <Input value={data.title as string} onChange={(v) => set("title", v)} />
          </Field>
          <Field label="Texto do botão">
            <Input value={data.ctaText as string} onChange={(v) => set("ctaText", v)} />
          </Field>
          <Field label="Mensagem de sucesso">
            <Input value={data.successMessage as string} onChange={(v) => set("successMessage", v)} />
          </Field>
        </>
      )

    case "services-list": {
      const items = (data.items as Array<{ icon: string; name: string; description: string; price?: string }>) ?? []
      return (
        <>
          <Field label="Título da seção">
            <Input value={data.title as string} onChange={(v) => set("title", v)} />
          </Field>
          {items.map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-3 space-y-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Serviço {i + 1}</p>
              <Field label="Ícone (emoji)">
                <Input value={item.icon} onChange={(v) => { const next = [...items]; next[i] = { ...item, icon: v }; set("items", next) }} />
              </Field>
              <Field label="Nome do serviço">
                <Input value={item.name} onChange={(v) => { const next = [...items]; next[i] = { ...item, name: v }; set("items", next) }} />
              </Field>
              <Field label="Descrição">
                <Input value={item.description} onChange={(v) => { const next = [...items]; next[i] = { ...item, description: v }; set("items", next) }} />
              </Field>
              <Field label="Preço (opcional)">
                <Input value={item.price || ""} placeholder="Ex: R$ 50" onChange={(v) => { const next = [...items]; next[i] = { ...item, price: v }; set("items", next) }} />
              </Field>
            </div>
          ))}
        </>
      )
    }

    case "pricing":
      return (
        <>
          <Field label="Título">
            <Input value={data.title as string} onChange={(v) => set("title", v)} />
          </Field>
          <Field label="Subtítulo">
            <Input value={data.subtitle as string} onChange={(v) => set("subtitle", v)} />
          </Field>
          <Field label="Preço">
            <Input value={data.price as string} onChange={(v) => set("price", v)} placeholder="R$ 97" />
          </Field>
          <Field label="Parcelas">
            <Input value={data.installments as string} onChange={(v) => set("installments", v)} placeholder="ou 12x de R$ 9,70" />
          </Field>
          <Field label="Texto do botão">
            <Input value={data.ctaText as string} onChange={(v) => set("ctaText", v)} />
          </Field>
        </>
      )

    case "footer":
      return (
        <>
          <Field label="Tagline">
            <Input value={(data.tagline as string) || ""} onChange={(v) => set("tagline", v)} />
          </Field>
          <Field label="Instagram (URL)">
            <Input value={((data.socialLinks as Record<string, string>)?.instagram) || ""} onChange={(v) => set("socialLinks", { ...(data.socialLinks as object), instagram: v })} placeholder="https://instagram.com/..." />
          </Field>
          <Field label="WhatsApp (número com DDD)">
            <Input value={((data.socialLinks as Record<string, string>)?.whatsapp) || ""} onChange={(v) => set("socialLinks", { ...(data.socialLinks as object), whatsapp: v })} placeholder="11999999999" />
          </Field>
        </>
      )

    default:
      return (
        <p className="text-sm text-gray-400">Nenhum campo disponível para este bloco.</p>
      )
  }
}

/* ─── Componentes de UI reutilizáveis ─── */

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-medium text-gray-500">{label}</label>
      {children}
    </div>
  )
}

function Input({
  value,
  onChange,
  placeholder,
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-violet-300 bg-white"
    />
  )
}

function Textarea({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  return (
    <textarea
      value={value}
      rows={3}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-violet-300 bg-white resize-none"
    />
  )
}
