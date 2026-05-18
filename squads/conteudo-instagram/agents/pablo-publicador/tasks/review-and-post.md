---
task: "Review Rendered Slides and Post to Instagram"
order: 1
input: |
  - slide_images: PNGs 1080×1080px de cada slide (de output/slides/)
  - carousel_draft: Legenda e hashtags oficiais (de output/carousel-draft.md)
output: |
  - post_confirmation: Status da publicação e URL do post
  - saved_to: squads/conteudo-instagram/output/post-confirmation.md
---

# Review Rendered Slides and Post to Instagram

Esta tarefa faz a revisão visual dos slides renderizados e publica o carrossel no Instagram. A revisão é obrigatória antes do upload — qualquer problema detectado para o processo e reporta ao usuário antes de prosseguir.

## Process

### Fase 1 — Revisão Visual Pré-Post

1. Liste todos os arquivos em `output/slides/` e confira que o número de PNGs corresponde ao número de slides no `carousel-draft.md`
2. Para cada PNG, abra no browser via `file://` URL usando `browser_navigate` e capture com `browser_take_screenshot`
3. Verifique visualmente cada slide:
   - Logo ATRAE visível no canto superior esquerdo
   - Headline legível (texto não cortado, não em overflow)
   - Supporting text legível (tamanho adequado para leitura mobile)
   - Cor de fundo correta para a variante (dark/light/accent)
4. Se qualquer slide tiver problema: parar imediatamente, descrever o problema com número do slide e o que foi encontrado, aguardar instrução do usuário
5. Se todos os slides passarem: registrar a revisão e prosseguir para Fase 2

### Fase 2 — Upload e Publicação no Instagram

6. Use `browser_navigate` para abrir `https://www.instagram.com`
7. Verificar se está logado. Se aparecer tela de login: parar imediatamente, informar o usuário que a sessão expirou e solicitar login manual no browser
8. Navegar para criação de novo post (botão "+" ou ícone de câmera)
9. Selecionar "Post" (não Story, não Reel)
10. Fazer upload dos slides na ordem correta: `slide-01.png` primeiro, `slide-0N.png` último
11. Confirmar que todos os slides foram carregados e na sequência correta antes de prosseguir
12. Na etapa de legenda: inserir a legenda completa do `carousel-draft.md`:
    - Primeiro parágrafo (hook ≤125 chars)
    - Segundo parágrafo (contexto)
    - Pergunta final
    - Hashtags
13. Confirmar a publicação

### Fase 3 — Confirmação e Registro

14. Aguardar confirmação de que o post está publicado no perfil
15. Capturar URL do post ou screenshot de confirmação
16. Salvar confirmação em `output/post-confirmation.md`

## Output Format

```markdown
# Confirmação de Publicação

**Data:** YYYY-MM-DD HH:MM
**Status:** PUBLICADO ✅ / FALHOU ❌ / SESSÃO EXPIRADA ⚠️ / PROBLEMA NOS SLIDES ⛔
**Slides enviados:** N/N
**URL do post:** https://www.instagram.com/p/[ID]/

## Revisão Pré-Post

| Slide | Logo | Headline | Texto | Fundo | Status |
|-------|------|----------|-------|-------|--------|
| 01 | ✅/❌ | ✅/❌ | ✅/❌ | dark/light/accent ✅/❌ | OK/PROBLEMA |

## Notas

[Observações relevantes sobre o processo — sessão, problemas encontrados, etc.]
```

## Output Example

```markdown
# Confirmação de Publicação

**Data:** 2026-03-23 14:35
**Status:** PUBLICADO ✅
**Slides enviados:** 8/8
**URL do post:** https://www.instagram.com/p/Cabcd1234efgh/

## Revisão Pré-Post

| Slide | Logo | Headline | Texto | Fundo | Status |
|-------|------|----------|-------|-------|--------|
| 01 | ✅ | ✅ | ✅ | dark ✅ | OK |
| 02 | ✅ | ✅ | ✅ | light ✅ | OK |
| 03 | ✅ | ✅ | ✅ | dark ✅ | OK |
| 04 | ✅ | ✅ | ✅ | accent ✅ | OK |
| 05 | ✅ | ✅ | ✅ | light ✅ | OK |
| 06 | ✅ | ✅ | ✅ | dark ✅ | OK |
| 07 | ✅ | ✅ | ✅ | light ✅ | OK |
| 08 | ✅ | ✅ | ✅ | accent ✅ | OK |

## Notas

Publicação concluída sem erros. Sessão do Instagram ativa. Legenda inserida: 312 chars + 14 hashtags. Post visível no perfil @atrae.oficial.
```

## Quality Criteria

- [ ] Revisão visual concluída para todos os slides antes do upload
- [ ] Número de slides upados = número de slides no carousel-draft.md
- [ ] Legenda publicada exatamente como aprovada (parágrafos + pergunta + hashtags, sem edições)
- [ ] Confirmação de publicação salva em output/post-confirmation.md

## Veto Conditions

Reject and redo if ANY are true:
1. Upload feito sem revisão visual prévia de todos os slides
2. Legenda ou hashtags alteradas em relação ao carousel-draft.md aprovado
