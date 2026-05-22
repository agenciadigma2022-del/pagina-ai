import Link from "next/link"
import { getTemplateById, templates } from "@/templates"
import { Block } from "@/types"
import { generateId } from "@/lib/utils"
import { getSite } from "@/app/actions/sites"
import { getUser } from "@/lib/supabase-auth"
import { signOut } from "@/app/actions/auth"
import { EditorProvider } from "@/components/editor/EditorContext"
import { EditorCanvas } from "@/components/editor/EditorCanvas"
import { BlockEditorPanel } from "@/components/editor/BlockEditorPanel"
import { EditorSidebarList } from "@/components/editor/EditorSidebarList"
import { PaletteEditor } from "@/components/editor/PaletteEditor"
import { SlugEditor } from "@/components/editor/SlugEditor"
import { SaveButton } from "@/components/editor/SaveButton"

export default async function EditorPage({ params }: { params: Promise<{ siteId: string }> }) {
  const { siteId } = await params
  const template = getTemplateById(siteId) ?? templates[0]

  // Carrega rascunho salvo; se não existir, usa template padrão
  const [saved, user] = await Promise.all([getSite(siteId), getUser()])

  const blocks: Block[] = saved
    ? saved.blocks
    : template.blocks.map((b) => ({ ...b, id: generateId() }))

  const palette = saved ? saved.palette : template.palette
  const initialSlug = saved?.slug ?? siteId

  return (
    <EditorProvider initialBlocks={blocks} palette={palette} initialSlug={initialSlug}>
      <div className="flex h-screen overflow-hidden bg-gray-100">

        {/* Sidebar esquerda */}
        <aside className="w-72 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center justify-between mb-1">
              <Link href="/dashboard" className="text-sm text-gray-400 hover:text-gray-600">← Voltar</Link>
              <form action={signOut}>
                <button type="submit" className="text-xs text-gray-400 hover:text-gray-600">Sair</button>
              </form>
            </div>
            <h2 className="font-bold text-gray-800 mt-1">{template.name}</h2>
            <p className="text-xs text-gray-400">{template.niche}</p>
            {user && <p className="text-xs text-gray-300 truncate mt-0.5">{user.email}</p>}
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            <SlugEditor siteId={siteId} />
            <div className="h-px bg-gray-100" />
            <PaletteEditor />
            <div className="h-px bg-gray-100" />
            <EditorSidebarList />
            <div className="h-px bg-gray-100" />
            <BlockEditorPanel />
          </div>

          <div className="p-4 border-t border-gray-100 space-y-2">
            <SaveButton siteId={siteId} title={template.name} niche={template.niche} />
            <Link
              href={`/p/${template.id}`}
              target="_blank"
              className="block w-full text-center py-3 rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: palette.primary }}
            >
              Visualizar site →
            </Link>
          </div>
        </aside>

        {/* Canvas */}
        <main className="flex-1 overflow-y-auto bg-gray-100">
          <EditorCanvas />
        </main>

      </div>
    </EditorProvider>
  )
}
